import { JSONSchema4 } from 'json-schema'

export enum SCHEMA_TYPE {
  ALL_OF = 'ALL_OF',
  UNNAMED_SCHEMA = 'UNNAMED_SCHEMA',
  ANY = 'ANY',
  ANY_OF = 'ANY_OF',
  BOOLEAN = 'BOOLEAN',
  NAMED_ENUM = 'NAMED_ENUM',
  NAMED_SCHEMA = 'NAMED_SCHEMA',
  NULL = 'NULL',
  NUMBER = 'NUMBER',
  STRING = 'STRING',
  OBJECT = 'OBJECT',
  ONE_OF = 'ONE_OF',
  TYPED_ARRAY = 'TYPED_ARRAY',
  REFERENCE = 'REFERENCE',
  UNION = 'UNION',
  UNNAMED_ENUM = 'UNNAMED_ENUM',
  UNTYPED_ARRAY = 'UNTYPED_ARRAY',
}

export interface JSONSchema extends JSONSchema4 {
  /**
   * schema extension to support numeric enums
   */
  tsEnumNames?: string[]
}

// const SCHEMA_PROPERTIES = [
//   'additionalItems', 'additionalProperties', 'items', 'definitions',
//   'properties', 'patternProperties', 'dependencies', 'allOf', 'anyOf',
//   'oneOf', 'not', 'required', '$schema', 'title', 'description',
// ]

// export function isSchema(a: any): a is SchemaSchema {
//   return []
// }

export interface NormalizedJSONSchema extends JSONSchema {
  additionalItems?: boolean | NormalizedJSONSchema
  additionalProperties: boolean | NormalizedJSONSchema
  items?: NormalizedJSONSchema | NormalizedJSONSchema[]
  definitions?: {
    [k: string]: NormalizedJSONSchema
  }
  properties?: {
    [k: string]: NormalizedJSONSchema
  }
  patternProperties?: {
    [k: string]: NormalizedJSONSchema
  }
  dependencies?: {
    [k: string]: NormalizedJSONSchema | string[]
  }
  allOf?: NormalizedJSONSchema[]
  anyOf?: NormalizedJSONSchema[]
  oneOf?: NormalizedJSONSchema[]
  not?: NormalizedJSONSchema
  required: string[]
}

export interface EnumJSONSchema extends NormalizedJSONSchema {
  enum: any[]
}

export interface NamedEnumJSONSchema extends NormalizedJSONSchema {
  tsEnumNames: string[]
}

export interface SchemaSchema extends NormalizedJSONSchema {
  properties: {
    [k: string]: NormalizedJSONSchema
  }
  required: string[]
}

export interface JSONSchemaWithDefinitions extends NormalizedJSONSchema {
  definitions: {
    [k: string]: NormalizedJSONSchema
  }
}