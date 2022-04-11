import type { VNodeChild } from '@vue/runtime-core'
import type { UnionToIntersection, UnwrapArray } from './utils'

type InternalSlots<T> = {
  [K in keyof T]: (props: T[K]) => VNodeChild
}

type NoNullable<T> = { [P in keyof T]-?: Exclude<T[P], null | undefined> }

export type Slots<T> = NoNullable<
  InternalSlots<UnionToIntersection<UnwrapArray<T>>>
>
