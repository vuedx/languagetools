import type { KnownKeys } from './utils'

type Instantiate<T> = T extends new (...args: any) => infer R ? R : never

export type PropsOf<IntrinsicElements, T> = T extends KnownKeys<
  keyof IntrinsicElements
>
  ? IntrinsicElements[T]
  : Instantiate<T> extends {
      $props: infer Props
    }
  ? Props
  : never

export type AttrsOf<T> = T extends KnownKeys<keyof JSX.IntrinsicElements>
  ? JSX.IntrinsicElements[T]
  : {}

export type MergeAttrs<P, A> = P & Omit<A, keyof KnownKeys<P>>
