import type { VNodeChild } from '@vue/runtime-core'
import type { UnionToIntersection, UnwrapArray } from './utils'

type InternalSlots<T> = {
  [K in keyof T]: (props: T[K]) => VNodeChild
}

type KeysWithUndefinedValue<T> = {
  [P in keyof T]-?: Exclude<T[P], null | undefined> extends never ? never : P
}[keyof T]
type OmitUndefinedProperties<T> = Pick<T, KeysWithUndefinedValue<T>>
type NoNullable<T> = { [P in keyof T]-?: Exclude<T[P], null | undefined> }

export type Slots<T> = InternalSlots<
  NoNullable<UnionToIntersection<OmitUndefinedProperties<UnwrapArray<T>>>>
>
