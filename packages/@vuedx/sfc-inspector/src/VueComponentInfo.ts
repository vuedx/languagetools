/**
 * A descriptor for a component.
 */
export interface VueComponentInfo {
  props: PropInfo[]
  events: EventInfo[]
}

/**
 * A descriptor for a prop.
 */
export interface PropInfo {
  /**
   * Name of the prop
   */
  name: string

  /**
   * Human readable description of the prop.
   */
  description: string

  /**
   * The prop type.
   */
  type: {
    /**
     * Type as validated by Vue.
     */
    runtime: string
    /**
     * Type as required by static analyzers (ts or flow).
     */
    static: string
  }

  /**
   * Is prop marked required?
   */
  required: boolean

  /**
   * The default value of the prop.
   */
  default: PropDefaultValue | null

  meta: Record<string, string | boolean>
}

export type PropDefaultValue =
  | {
      factory: string
    }
  | {
      value: string
    }

export interface EventInfo {
  name: string

  description: string

  type: {
    static: string
  }
}
