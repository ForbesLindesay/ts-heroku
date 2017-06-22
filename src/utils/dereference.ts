import { JSONSchema } from '../types/JSONSchema';
const $RefParser = require('json-schema-ref-parser');

export default async function dereference(schema: JSONSchema, cwd: string): Promise<JSONSchema> {
  const parser = new $RefParser;
  return parser.dereference(cwd, schema, {})
}