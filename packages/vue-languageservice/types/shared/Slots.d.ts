import type { VNodeChild } from '@vue/runtime-core'
import type { UnionToIntersection, UnwrapArray } from './utils'

type InternalSlots<T> = {} extends T
  ? never
  : {
      [K in keyof T]: (props: T[K]) => VNodeChild
    }

type NoNullable<T> = { [P in keyof T]-?: Exclude<T[P], null | undefined> }

export type Slots<T> = InternalSlots<
  UnionToIntersection<NoNullable<UnwrapArray<T>>>
>

// // Quick Test:
// type T = { a?: undefined; b: number } | { a: string; b?: undefined }
// type T1 = NoNullable<T>
// type T2 = UnionToIntersection<T1>
// type T3 = InternalSlots<T2>
