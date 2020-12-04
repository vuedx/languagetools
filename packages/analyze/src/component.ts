export interface SourceLocation {
  offset: number
  line: number
  column: number
}

export interface SourceRange {
  source: string
  start: SourceLocation
  end: SourceLocation
}

export interface Addressable {
  loc: SourceRange
}

export interface ImportSource {
  moduleName: string
  exportName?: string
  localName: string
}

export interface ImportSourceWithLocation extends ImportSource, Addressable {}

export interface ComponentRegistrationInfo {
  name: string
  aliases: string[]
  source: ImportSource
}

export interface DirectiveRegistrationInfo {
  name: string
  source: ImportSource
}

export interface LocalComponentRegistrationInfo
  extends ComponentRegistrationInfo,
    Addressable {
  kind: 'script' | 'scriptSetup'
  source: ImportSourceWithLocation
}

export type TypeInfo =
  | {
      kind: 'string' | 'number' | 'boolean'
    }
  | {
      kind: 'enum'
      values: string[]
    }
  | {
      kind: 'expression'
      imports: ImportSource[]
      expression: string
    }

export type ValueInfo =
  | {
      kind: 'expression'
      imports: string[]
      expression: string
    }
  | {
      kind: 'function'
      expression: string
    }
  | {
      kind: 'value'
      value: string
    }

export interface TagInfo {
  title: string
  content: string
}

export interface Taggable {
  tags: TagInfo[]
}

export interface PropInfo extends Taggable, Addressable {
  name: string
  description: string
  required: boolean
  type: TypeInfo[]
  defaultValue: ValueInfo | null
}

export interface EmitInfo extends Taggable, Addressable {
  name: string
  description: string
  type: TypeInfo[]
  references: SourceRange[]
  isInferred: boolean
  isDynamic: boolean
}

export interface SyntaxError {
  message: string
  loc: SourceLocation
}

export interface ComponentInfo {
  components: LocalComponentRegistrationInfo[]
  props: PropInfo[]
  emits: EmitInfo[]
  options?: ComponentOptionsInfo
  setup?: SetupInfo
  scriptSetup?: ScriptSetupInfo
  errors: SyntaxError[]
}

export interface ComponentOptionsInfo extends Addressable {
  properties: Record<string, Addressable>
}

export interface SetupInfo extends Addressable {
  props?: Addressable
  context?: Addressable
  return?: Addressable
}

export interface ScriptSetupInfo {
  defineProps?: Addressable
  defineEmit?: Addressable
}

export interface ComponentInfoFactory {
  addError: (message: string, loc: SourceLocation) => ComponentInfoFactory
  addProp: (name: string, options?: Partial<PropInfo>) => ComponentInfoFactory
  addEmit: (name: string, options?: Partial<EmitInfo>) => ComponentInfoFactory
  addLocalComponent: (
    name: string,
    source: ImportSourceWithLocation,
    loc?: SourceRange,
  ) => ComponentInfoFactory
  addOption: (name: string, address: Addressable) => ComponentInfoFactory
  addSetup: (
    name: Exclude<keyof SetupInfo, 'loc'> | '',
    address: Addressable,
  ) => ComponentInfoFactory
  addScriptSetup: (
    name: keyof ScriptSetupInfo,
    address: Addressable,
  ) => ComponentInfoFactory
  info: () => ComponentInfo
}

export function createComponentInfoFactory(): ComponentInfoFactory {
  const component: ComponentInfo = {
    props: [],
    emits: [],
    components: [],
    errors: [],
  }

  const factory: ComponentInfoFactory = {
    addError(message, loc) {
      component.errors.push({ message, loc })

      return factory
    },
    addProp(name, options = {}) {
      const index = component.props.findIndex((prop) => prop.name === name)

      if (index >= 0) {
        const prop = component.props[index]

        Object.assign(prop, { name, ...options })
      } else {
        component.props.push({
          name,
          tags: [],
          description: '',
          required: false,
          type: [{ kind: 'expression', imports: [], expression: 'any' }],
          defaultValue: null,
          loc: null as any,
          ...options,
        })
      }

      return factory
    },
    addEmit(name, options = {}) {
      const index = component.emits.findIndex((emit) => emit.name === name)

      if (index >= 0) {
        const emit = component.emits[index]

        if (options.isInferred === true) {
          if (options.loc != null) {
            options.references = emit.references
            options.references.push(options.loc)
          }

          if (options.type != null) {
            const expressions = new Set(
              options.type.map((type) =>
                type.kind === 'expression' ? type.expression : '',
              ),
            )

            emit.type.forEach((type) => {
              if (type.kind === 'expression') {
                if (!expressions.has(type.kind)) {
                  options.type?.push(type)
                }
              }
            })
          }
        }

        Object.assign(emit, { name, ...options })
      } else {
        component.emits.push({
          name,
          tags: [],
          description: '',
          type: [
            {
              kind: 'expression',
              imports: [],
              expression: '(event?: any) => void',
            },
          ],
          loc: null as any,
          references:
            options.isInferred === true && options.loc != null
              ? [options.loc]
              : [],
          isInferred: false,
          isDynamic: false,
          ...options,
        })
      }

      return factory
    },
    addLocalComponent(
      name,
      source,
      loc = null as any,
      kind: LocalComponentRegistrationInfo['kind'] = 'script',
    ) {
      component.components.push({ name, aliases: [name], kind, source, loc }) // Vue 3 — Component names are PascalCase.

      return factory
    },
    addOption(name, address) {
      if (name === '') {
        component.options = {
          properties: {},
          ...component.options,
          ...address,
        }
      } else {
        if (component.options == null)
          throw new Error('Cannot set option location without setting options')
        component.options.properties[name] = address
      }

      return factory
    },
    addSetup(name, address) {
      if (name === '') {
        component.setup = {
          ...address,
        }
      } else {
        if (component.setup == null)
          throw new Error(
            'Cannot set setup params location without setting setup',
          )
        component.setup[name] = address
      }

      return factory
    },
    addScriptSetup(name, address) {
      if (component.scriptSetup == null) {
        component.scriptSetup = {}
      }

      component.scriptSetup[name] = address

      return factory
    },
    info() {
      return component
    },
  }

  return factory
}
