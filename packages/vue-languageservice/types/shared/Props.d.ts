import {
  AllowedComponentProps,
  ComponentCustomProps,
  VNodeProps,
  ExtractPropTypes,
  DefineComponent,
} from '@vue/runtime-core'
import type { KnownKeys } from './utils'

type ComponentLike<T> = new (...args: unknown[]) => { $props: T }

export type PropsOf<T> = T extends ComponentLike<infer Props>
  ? Props
  : T extends (props: infer Props) => unknown
  ? Props
  : T extends DefineComponent<infer PropsOrPropOptions>
  ? ExtractPropTypes<PropsOrPropOptions>
  : T extends KnownKeys<keyof JSX.IntrinsicElements>
  ? JSX.IntrinsicElements[T]
  : AllowedComponentProps & ComponentCustomProps & VNodeProps

export type AttrsOf<T> = T extends KnownKeys<keyof JSX.IntrinsicElements>
  ? JSX.IntrinsicElements[T]
  : {}

export type MergeAttrs<P, A> = P & Omit<A, keyof KnownKeys<P>>
