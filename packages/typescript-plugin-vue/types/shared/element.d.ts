import type { KnownKeys } from './utils'

type ElementType<E> = E extends string
  ? E extends keyof KnownKeys<HTMLElementTagNameMap>
    ? HTMLElementTagNameMap[E]
    : E extends keyof KnownKeys<SVGElementTagNameMap>
    ? SVGElementTagNameMap[E]
    : never
  : E

export function getElementType<T>(tagNameOrComponent: T): ElementType<T>
