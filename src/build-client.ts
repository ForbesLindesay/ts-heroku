import {readFileSync, writeFileSync} from 'fs';
import dereference from './utils/dereference';
import {JSONSchema} from './types/JSONSchema';
import URITemplate = require('uri-templates');
const prettier = require('prettier');

const schema = JSON.parse(readFileSync(__dirname + '/../src/schema.json', 'utf8'));

dereference(schema, process.cwd()).then(ts =>
  writeFileSync(__dirname + '/../src/schema.ts', build(ts))
).catch (ex => setTimeout(() => { throw ex; }, 0));

class Context {
  readonly output: Array<string> = [];
  readonly root: JSONSchema;
  constructor(root: JSONSchema) {
    this.root = root;
  }
  push(str: string) {
    if (!this.output.includes(str)) {
      this.output.push(str);
    }
  }
}
function build(schema: JSONSchema) {
  const context = new Context(schema);
  context.push(
    `import BaseHerokuAPIClient from './BaseHerokuAPIClient';`
  );
  const title = walk(schema, context) ;
  let indent = '';
  return prettier.format(
    context.output.join('\n') + `\nexport default ${title}Client`,
    {parser: 'typescript'},
  ).split('\n').map((line: string) => {
    const match = /^( *)\/\*/.exec(line);
    if (match) {
      indent = match[1];
    } else if (/^ *\*/.test(line)) {
      return line.replace(/^ *\*/, indent + ' *');
    }
    return line;
  }).join('\n');
}
function walk(schema: JSONSchema, context: Context) {
  if (!schema.title) {
    return '';
  }
  const title = toIdentifier(schema.title);
  const definitions = schema.definitions;
  const defs = (
    definitions
      ? Object.keys(definitions).map(name => {
        const prop = definitions[name];
        return {name: toIdentifier(name), title: walk(prop, context)};
      }).filter(v => v.title)
      : []
  );
  const links = schema.links || [];
  context.push(
    `
      export class ${title}Client {
        private readonly _client: BaseHerokuAPIClient;
        ${
          defs.map(p => `readonly ${p.name}: ${p.title}Client;`).join('\n')
        }
        constructor(client: BaseHerokuAPIClient) {
          this._client = client;
          ${
            defs.map(p => `this.${p.name} = new ${p.title}Client(client);`).join('\n')
          }
        }
        ${
          links.map((link: any) => {
            if (!link.title && (link.href === 'https://api.heroku.com' || link.href === '/schema')) {
              return '';
            }
            if (!link.title) {
              console.dir(link);
              throw new Error('Expected all links to have titles');
            }
            const t = URITemplate(link.href);
            const varNames: Array<string> = (t as any).varNames;
            const urlNames: Array<string> = [];
            const urlVariables = varNames.map(v => {
              const reference = decodeURIComponent(v.substr(1, v.length - 2)).split('/');
              let destination = context.root;
              reference.forEach(part => {
                if (part === '#') {
                  destination = context.root;
                } else {
                  if (!destination[part]) {
                    throw new Error('Could not find reference ' + reference.join('/'));
                  }
                  destination = destination[part];
                }
              });
              const name = toLowerIdentifier(
                reference
                  .filter(n => n !== 'definitions')
                  .map(n => n[0].toUpperCase() + n.substr(1))
                  .join('')
              );
              let index = 0;
              while (urlNames.includes(name + index)) {
                index++;
              }
              urlNames.push(name + index);
              return {
                urlName: v,
                name: (index === 0 ? name : name + index),
                type: destination,
              };
            });
            const args = urlVariables.map(v => v.name + ': ' + getType(v.type, context));
            if (link.schema) {
              args.push(`requestBody: ${getType(link.schema, context)}`);
            }
            return `
              /**
               * ${link.description}
               */
              ${
                link.description === 'List existing log drains for an add-on.'
                  ? 'listForAddOn'
                  : toLowerIdentifier(link.title)
              }(${args.join(', ')}): Promise<${link.targetSchema ? getType(link.targetSchema, context) : 'void'}> {
                return this._client.request('${link.method}', '${link.href}', {
                  ${
                    urlVariables.map(v => `"${v.urlName}": ${v.name}`).join(',')
                  }
                }${link.schema ? ', requestBody' : ''});
              }
            `;
          }).join('\n')
        }
      }
    `
  );
  return title;
}
function getInterface(schema: JSONSchema, context: Context) {
  if (!schema.properties) {
    return '{}';
  }
  if (!schema.title) {
    return `{${getProperties(schema.properties, context)}}`;
  }
  const title = toIdentifier(schema.title);
  context.push(`
    export interface ${title} {
      ${getProperties(schema.properties, context)}
    }
  `);
  return title;
}
function getProperties(properties: {[k: string]: JSONSchema}, context: Context): string {
  return (
    Object.keys(properties).map(property => {
      const prop = properties[property];
      return `
        /**
         * ${prop.description || ''}
         */
        readonly '${property}': ${getType(prop, context)};
      `;
    }).join('\n')
  );
}
function toIdentifier(str: string): string {
  return str.replace(/\-([a-z])/g, (_, c) => c.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');
}
function toLowerIdentifier(str: string): string {
  const id = toIdentifier(str);
  return id[0].toLowerCase() + id.substr(1);
}

function getType(v: JSONSchema, context: Context): string {
  if (v.anyOf) {
    const types = new Set([...v.anyOf.map(v => getType(v, context))]);
    return Array.from(types).sort().join(' | ');
  }
  if (!v.type) {
    console.dir(v);
    throw new Error('Expected a type');
  }
  if (v.type.length === 2 && (v.type as string[]).some(t => t === 'null')) {
    return 'null | ' + getType({
      ...v,
      type: ((v.type as string[]).filter(t => t !== 'null') as any),
    }, context);
  }
  if (v.type.length !== 1) {
    console.dir(v);
    throw new Error('Expected exactly one type');
  }
  switch (v.type[0]) {
    case 'string':
      return 'string';
    case 'boolean':
      return 'boolean';
    case 'integer':
    case 'number':
      return 'number';
    case 'object':
      return getInterface(v, context);
    case 'array':
      if (v.items) {
        return `Array<${getType(v.items, context)}>`
      }
      return `Array<any>`;
  }
  console.dir(v.type[0]);
  throw new Error('Unknown type');
}