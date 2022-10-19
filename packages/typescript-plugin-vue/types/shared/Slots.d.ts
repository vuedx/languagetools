import type { VNodeChild } from '@vue/runtime-core'
import type { UnionToIntersection } from './utils'

type InternalSlots<T> = {
  [K in keyof T]: (props: T[K]) => VNodeChild
}

type NoNullable<T> = {
  [P in keyof T as undefined extends T[P] ? never : P]-?: T[P]
}

export type Slots<T> = [T] extends [never]
  ? Record<string|number|symbol, never>
  : InternalSlots<UnionToIntersection<T>>

type FirstParameter<T> = T extends (
  arg: infer P,
  ...others: unknown[]
) => unknown
  ? P
  : undefined

export type GetSlotProps<T, N> = FirstParameter<
  N extends keyof SlotsFrom<T> ? SlotsFrom<T>[N] : () => void
>

export type SlotsFrom<T> = T extends new (...args: any[]) => any
  ? InstanceType<T> extends { $slots: infer S }
    ? S
    : {}
  : {}

export function checkSlots<T>(
  component: T,
  slots: Partial<SlotsFrom<T>>,
): typeof slots

// // Quick Test:
// type T = { a?: undefined; b: number } | { a: string; b?: undefined }
// type T1 = NoNullable<T>
// type T2 = UnionToIntersection<T1>
// type T3 = InternalSlots<T2>
