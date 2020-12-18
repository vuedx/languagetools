import { ComponentInfo, ImportSource, PropInfo, TypeInfo } from '../component'

type Source =
  | {
      file: string
      offset: number
    }
  | {
      module?: string
      symbol: string
    }

type Type =
  | string
  | {
      imports: string[]
      expression: string
    }
  | Array<
      | string
      | {
          imports: string[]
          expression: string
        }
    >

type Value =
  | {
      kind: 'no-value'
    }
  | {
      kind: 'string'
      required: boolean
    }
  | {
      kind: 'number'
      required: boolean
    }
  | {
      kind: 'boolean'
      required: boolean
    }
  | {
      kind: 'enum'
      items: string[]
      required: boolean
    }
  | {
      kind: 'expression'
      type: Type
      required: boolean
    }

interface TagAttribute {
  name: string
  description: string
  default?: string
  required: boolean
  value: Value
  'doc-url'?: string
}

interface TagEvent {
  name: string
  description: string
  arguments: Array<{
    name: string
    description: string
    type: Type
    'doc-url'?: string
  }>
  'doc-url'?: string
}

interface TagSlot {
  name: string
  pattern: string | { regex: string; 'case-sensitive': boolean }
  description: string
  'doc-url'?: string
  'vue-properties': Array<{
    name: string
    description: string
    type: Type
    'doc-url'?: string
  }>
}

interface Tag {
  name: string
  aliases: string[]
  description: string
  attributes: TagAttribute[]
  events: TagEvent[]
  slots: TagSlot[]
  source: Source
  'vue-model': Array<{ prop: string; event: string }>
  'doc-url'?: string
}

interface Attribute {
  name: string
  aliases: string[]
  description: string
  default?: string
  value: Value
  'doc-url'?: string
  'vue-argument': {
    pattern:
      | string
      | {
          regex: string
          'case-sensitive': boolean
        }
    description: string
    'doc-url'?: string
    required: boolean
  }
  'vue-modifiers': Array<{
    name: string
    pattern: string
    description: string
    'doc-url'?: string
  }>
}

/**
 * @see http://json.schemastore.org/web-types
 */
export interface WebTypes {
  framework: 'vue'
  name: string
  version: string
  contributions: {
    'types-syntax': 'typescript'
    'description-markup': 'html' | 'markdown' | 'none'
    tags: Tag[]
    attributes: Attribute[]
  }
}

export function toWebTypes(
  name: string,
  version: string,
  components: ComponentInfo[],
): WebTypes {
  const data: WebTypes = {
    framework: 'vue',
    name,
    version,
    contributions: {
      'types-syntax': 'typescript',
      'description-markup': 'markdown',
      tags: [],
      attributes: [],
    },
  }

  components.forEach((component) => {
    const tag: Tag = {
      name: component.name,
      aliases: component.aliases,
      description: component.description,
      attributes: [],
      events: [],
      slots: [],
      'vue-model': [],
      source: {
        file: component.fileName,
        offset: component.options?.loc.start.offset ?? 0,
      },
    }

    const emits = new Set<string>()

    component.emits.forEach((emit) => {
      emits.add(emit.name)
      tag.events.push({
        name: emit.name,
        description: emit.description,
        arguments: [], // TODO: Get arguments
      })
    })

    component.props.forEach((prop) => {
      tag.attributes.push({
        name: prop.name,
        description: prop.description,
        required: prop.required,
        default: stringifyDefaultValue(prop.defaultValue),
        value: toValue(prop.type, prop.required),
      })

      if (emits.has(`onUpdate:${prop.name}`)) {
        tag['vue-model'].push({
          prop: prop.name,
          event: `onUpdate:${prop.name}`,
        })
      }
    })

    // TODO: Get slots

    data.contributions.tags.push(tag)
  })

  return data
}

function toValue(typeInfo: TypeInfo[], isRequired: boolean): Value {
  if (typeInfo.length === 0) {
    return { kind: 'no-value' }
  } else if (typeInfo.length === 1) {
    const info = typeInfo[0]
    switch (info.kind) {
      case 'string':
      case 'number':
      case 'boolean':
        return { kind: info.kind, required: isRequired }
      case 'enum':
        return { kind: info.kind, items: info.values, required: isRequired }
    }
  }

  return {
    kind: 'expression',
    type: typeInfo.map((type) => {
      if (type.kind === 'enum') {
        return type.values.join('|')
      } else if (type.kind === 'expression') {
        return {
          imports: type.imports.map((imp) => stringifyImportSource(imp)),
          expression: type.expression,
        }
      } else {
        return type.kind
      }
    }),
    required: isRequired,
  }
}

function stringifyImportSource(imp: ImportSource): string {
  return imp.exportName != null
    ? `import { ${
        imp.exportName !== imp.localName
          ? `${imp.exportName} as ${imp.localName}`
          : `${imp.localName}`
      } } from '${imp.moduleName}`
    : `import ${imp.localName} from ${imp.moduleName}`
}

function stringifyDefaultValue(
  info: PropInfo['defaultValue'],
): string | undefined {
  if (info == null) return
  if (info.kind === 'value') return info.value
  if (info.kind === 'function') return info.expression

  return (
    info.imports.map((imp) => stringifyImportSource(imp)).join('\n') +
    '\n' +
    info.expression
  )
}
