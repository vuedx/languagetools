import {
  AllowedComponentProps,
  ComponentCustomProps,
  VNodeProps,
  ExtractPropTypes,
  DefineComponent,
} from '@vue/runtime-core'

type ComponentLike<T> = new (...args: unknown[]) => { $props: T }

export type PropsOf<T> = T extends ComponentLike<infer Props>
  ? Props
  : T extends (props: infer Props) => unknown
  ? Props
  : T extends DefineComponent<infer PropsOrPropOptions>
  ? ExtractPropTypes<PropsOrPropOptions>
  : AllowedComponentProps & ComponentCustomProps & VNodeProps
