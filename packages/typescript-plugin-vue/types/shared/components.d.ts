/* eslint-disable @typescript-eslint/no-empty-interface */
import { KnownKeys } from './utils'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {}
}

export function resolveComponent<
  GlobalComponents,
  IntrinsicElements,
  T extends {},
  A,
  B,
  C,
>(
  globalComponents: GlobalComponents,
  elements: IntrinsicElements,
  context: T,
  id: A,
  usedName?: B,
  pascalName?: C,
): true extends IsNotComponent<A>
  ? B extends keyof KnownKeys<T>
    ? T[B]
    : C extends keyof KnownKeys<T>
    ? T[C]
    : B extends keyof KnownKeys<GlobalComponents>
    ? GlobalComponents[B]
    : C extends keyof KnownKeys<GlobalComponents>
    ? GlobalComponents[C]
    : B extends keyof KnownKeys<IntrinsicElements>
    ? IntrinsicElements[B]
    : C extends keyof KnownKeys<IntrinsicElements>
    ? IntrinsicElements[C]
    : unknown
  : A

type IsNotComponent<T> = true extends IsStrictlyAny<T>
  ? true
  : T extends null | undefined | never
  ? true
  : false

type IsStrictlyAny<T> = (T extends never ? true : false) extends false
  ? false
  : true
