/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
import type {
  DefineComponent,
  defineComponent,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
} from 'vue'

export type _ = 1

interface Directive<_Arg, _Exp, _Mod extends string> {
  arg?: _Arg
  exp?: _Exp
  modifiers?: Record<_Mod, true>
}

declare global {
  namespace VueDX {
    namespace internal {
      export { defineComponent }
      export function defineSetupComponent<P, E, B, O>(
        props: P,
        emits: E,
        bindings: B,
        options: O,
      ): DefineComponent<P, B>

      // -- renderList --
      export function renderList(
        source: string,
        handler: (value: string, index: number) => any,
      ): any
      export function renderList(
        source: number,
        handler: (value: number, index: number) => any,
      ): any
      export function renderList<T>(
        source: T[],
        handler: (value: T, index: number) => any,
      ): any
      export function renderList<T>(
        source: Iterable<T>,
        handler: (value: T, index: number) => any,
      ): any
      export function renderList<T extends object>(
        source: T,
        handler: <K extends keyof T>(value: T[K], key: K, index: number) => any,
      ): any

      // -- renderSlot --
      export function renderSlot<
        S extends Record<string, (...args: any) => any>,
        K extends keyof S
      >(source: S, name: K, props: Parameters<S[K]>[0]): any

      // -- checkSlots --
      export function checkSlots(tag: any, slots: any): any

      // -- checkDirective --
      export function checkDirective<N, T, A, E, M extends string>(
        name: N,
        tag: T,
        directives: Array<Directive<A, E, M>>,
      ): E

      export function checkInputModelDirective<A, E, M extends string>(
        type: 'number',
        directives: Array<Directive<A, number, M>>,
      ): E

      export function checkInputModelDirective<A, E, M extends string>(
        type: 'radio',
        directives: Array<Directive<A, E, M>>,
      ): E

      export function checkInputModelDirective<A, E, M extends string>(
        type: string,
        directives: Array<Directive<A, E, M>>,
      ): E

      export function checkModelDirective<T, A, E, M extends string>(
        tag: T,
        directives: Array<Directive<A, E, M>>,
      ): E
    }
  }
}
