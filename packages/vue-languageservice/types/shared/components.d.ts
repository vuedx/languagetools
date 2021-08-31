/* eslint-disable @typescript-eslint/no-empty-interface */
import type {
  DefineComponent, EmitsOptions,
  ObjectEmitsOptions, VNodeProps, AllowedComponentProps, ComponentCustomProps
} from '@vue/runtime-core';
import type { EventName, KnownKeys, Overloads, TupleToUnion, UnionToIntersection } from './utils';

declare global {
  namespace JSX {
    interface IntrinsicElements { }
    interface IntrinsicAttributes { }
  }
}

export function resolveComponent<T extends {}, A, B>(
  components: T,
  name: A,
  pascalName?: B,
): A extends keyof T
  ? T[A]
  : B extends keyof T
  ? T[B]
  : A extends keyof KnownKeys<JSX.IntrinsicElements>
  ? JSX.IntrinsicElements[A] 
  : B extends keyof KnownKeys<JSX.IntrinsicElements>
  ? JSX.IntrinsicElements[B]
  : never

type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {
  [K in string & EventName<T[number]>]?: (...args: any[]) => any;
} : T extends ObjectEmitsOptions ? {
  [K in string & EventName<Capitalize<string & keyof T>>]?: K extends `on${infer C}` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never;
} : {};


type TypeEmitsToOptions<T, TU = TupleToUnion<Overloads<T>>> = UnionToIntersection<TU extends ((eventName: infer P, ...rest: infer A) => infer R) ? P extends string ? { [K in P]: (...args: A) => R } : {} : {}>
type ToEmitOptions<T> = T extends (...args: any) => any ? TypeEmitsToOptions<T> & {} : T extends EmitsOptions ? T : {}

export function defineSetupComponent<P, E, B>(
  props: P,
  emits: E,
  bindings: B,
  options: any,
): DefineComponent<
  {}, // PropsOrPropOptions
  B, // RawBindings
  {}, // D
  {}, // C
  {}, // M
  {}, // Mixin
  {}, // Extends
  {}, // E
  string, // EE
  VNodeProps & AllowedComponentProps & ComponentCustomProps, // PP
  P & EmitsToProps<ToEmitOptions<E>>, // Props
  {} // Defaults
>
