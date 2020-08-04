export interface SourceLocation {
  offset: number;
  line: number;
  column: number;
}

export interface SourceRange {
  source: string;
  start: SourceLocation;
  end: SourceLocation;
}

export interface Addressable {
  loc: SourceRange;
}

export interface ImportSource extends Addressable {
  moduleName: string;
  exportName?: string;
  localName: string;
}

export interface ComponentRegistrationInfo extends Addressable {
  name: string;
  aliases: string[];
  kind: 'local';
  source: ImportSource;
}

export type TypeInfo =
  | {
      kind: 'string' | 'number' | 'boolean';
    }
  | {
      kind: 'enum';
      values: string[];
    }
  | {
      kind: 'expression';
      imports: string[];
      expression: string;
    };

export type ValueInfo =
  | {
      kind: 'expression';
      imports: string[];
      expression: string;
    }
  | {
      kind: 'function';
      expression: string;
    }
  | {
      kind: 'value';
      value: string;
    };

export interface TagInfo {
  title: string;
  content: string;
}

export interface Taggable {
  tags: TagInfo[];
}

export interface PropInfo extends Taggable, Addressable {
  name: string;
  description: string;
  required: boolean;
  type: TypeInfo[];
  defaultValue: ValueInfo | null;
}

export interface ComponentInfo {
  components: ComponentRegistrationInfo[];
  props: PropInfo[];
  options: ComponentOptionsInfo;
}

export interface ComponentOptionsInfo extends Addressable {
  properties: Record<string, Addressable>;
}

export interface ComponentInfoFactory {
  addProp(name: string, options?: Partial<PropInfo>): ComponentInfoFactory;
  addLocalComponent(name: string, source: ImportSource, loc?: SourceRange): ComponentInfoFactory;
  addOption(name: string, address: Addressable): ComponentInfoFactory;
  info(): ComponentInfo;
}

export function createComponentInfoFactory(): ComponentInfoFactory {
  const component: ComponentInfo = {
    props: [],
    components: [],
    options: {
      loc: {} as any,
      properties: {},
    },
  };

  const factory: ComponentInfoFactory = {
    addProp(name, options = {}) {
      const index = component.props.findIndex((prop) => prop.name === name);

      if (index >= 0) {
        const prop = component.props[index];

        Object.assign(prop, { name, ...options });
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
        });
      }

      return factory;
    },
    addLocalComponent(name, source, loc = null as any) {
      // TODO: Create aliases. If name is PascalCase then allow kebab-case too.
      component.components.push({ name, aliases: [name], kind: 'local', source, loc });

      return factory;
    },
    addOption(name, address) {
      if (!name) {
        component.options.loc = address.loc;
      } else {
        component.options.properties[name] = address;
      }

      return factory;
    },
    info() {
      return component;
    },
  };

  return factory;
}
