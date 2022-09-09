/* eslint-disable @typescript-eslint/no-empty-interface */
import type { GlobalComponents } from '@vue/runtime-core'

declare global {
  namespace JSX {
    interface IntrinsicElements {}
    interface IntrinsicAttributes {}
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends Record<string, Component> {}
}

export function resolveComponent<T extends {}, A, B, C>(
  context: T,
  id: A,
  usedName: B,
  pascalName: C,
): true extends IsStrictlyAny<A>
  ? B extends keyof T
    ? T[B]
    : C extends keyof T
    ? T[C]
    : B extends keyof GlobalComponents
    ? GlobalComponents[B]
    : C extends keyof GlobalComponents
    ? GlobalComponents[C]
    : unknown
  : A

type IsStrictlyAny<T> = (T extends never ? true : false) extends false
  ? false
  : true
