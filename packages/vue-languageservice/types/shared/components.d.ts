/* eslint-disable @typescript-eslint/no-empty-interface */
import type {
  AllowedComponentProps,
  ComponentCustomProps,
  DefineComponent,
  EmitsOptions,
  VNodeProps,
  VNodeChild,
  GlobalComponents,
  Component,
} from '@vue/runtime-core'
import type { EmitsToProps } from './emits'
import type {
  KnownKeys,
  Overloads,
  TupleToUnion,
  UnionToIntersection,
} from './utils'

declare global {
  namespace JSX {
    interface IntrinsicElements {}
    interface IntrinsicAttributes {}
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends Record<string, Component> {}
}

type ComponentFromProps<P> = new () => {
  $props: P
  $slots: { default(): VNodeChild }
}

export function resolveComponent<T extends {}, A, B>(
  localRegisteredComponents: T,
  tagNameOrComponent: A,
  tagNameInPascalName?: B,
): A extends Component
  ? A
  : A extends keyof KnownKeys<T>
  ? T[A]
  : B extends keyof KnownKeys<T>
  ? T[B]
  : A extends keyof KnownKeys<JSX.IntrinsicElements>
  ? ComponentFromProps<JSX.IntrinsicElements[A]>
  : B extends keyof KnownKeys<JSX.IntrinsicElements>
  ? ComponentFromProps<JSX.IntrinsicElements[B]>
  : A extends keyof KnownKeys<GlobalComponents>
  ? GlobalComponents[A]
  : B extends keyof KnownKeys<GlobalComponents>
  ? GlobalComponents[B]
  : never

type TypeEmitsToOptions<
  T,
  TU = TupleToUnion<Overloads<T>>
> = UnionToIntersection<
  TU extends (eventName: infer P, ...rest: infer A) => infer R
    ? P extends string
      ? { [K in P]: (...args: A) => R }
      : {}
    : {}
>
type ToEmitOptions<T> = T extends (...args: any) => any
  ? TypeEmitsToOptions<T> & {}
  : T extends EmitsOptions
  ? T
  : {}

export function defineSetupComponent<P, E, B>(
  props: P,
  emits: E,
  bindings: B,
  options: any,
): DefineComponent<
  {}, // PropsOrPropOptions
  B, // RawBindings
  {}, // D
  {}, // C = ComputedOptions
  {}, // M = MethodOptions
  {}, // Mixin
  {}, // Extends
  {}, // E = EmitsOptions
  string, // EE
  VNodeProps & AllowedComponentProps & ComponentCustomProps, // PP = PublicProps
  P & EmitsToProps<ToEmitOptions<E>>, // Props
  {} // Defaults
>
