import type { VNode } from '@vue/runtime-core'
import type {} from 'vue'

export {}

type VueIntrinsicElements = JSX.IntrinsicElements
type VueIntrinsicAttributes = JSX.IntrinsicAttributes

declare module '@vue/runtime-core' {
  export namespace JSX {
    interface Element extends VNode {}

    interface ElementClass {
      $props: {}
    }

    interface ElementAttributesProperty {
      $props: {}
    }

    interface ElementChildrenAttribute {
      $slots: {}
    }

    interface IntrinsicElements extends VueIntrinsicElements {
      [name: string]: any
    }
    interface IntrinsicAttributes extends VueIntrinsicAttributes {}
  }
}
