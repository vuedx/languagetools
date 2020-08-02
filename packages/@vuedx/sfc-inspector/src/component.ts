export interface ImportSource {
  moduleName: string;
  exportName?: string;
}

export interface ComponentRegistration {
  name: string;
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

export interface PropInfo extends Taggable {
  name: string;
  description: string;
  required: boolean;
  type: TypeInfo[];
  defaultValue: ValueInfo | null;
}

export interface ComponentInfo {
  props: PropInfo[];
  components: ComponentRegistration[];
}

export interface ComponentInfoFactory {
  addProp(name: string, options?: Partial<PropInfo>): ComponentInfoFactory;
  addLocalComponent(name: string, source: ImportSource): ComponentInfoFactory;

  info(): ComponentInfo;
}

export function createComponentInfoFactory(): ComponentInfoFactory {
  const component: ComponentInfo = {
    props: [],
    components: [],
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
          ...options,
        });
      }

      return factory;
    },
    addLocalComponent(name, source) {
      component.components.push({ name, kind: 'local', source });

      return factory;
    },
    info() {
      return component;
    },
  };

  return factory;
}
