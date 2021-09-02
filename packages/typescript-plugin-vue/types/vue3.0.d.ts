/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-namespace */
import type {
  DefineComponent,
  defineComponent,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
} from '@vue/runtime-core'
import { TupleToUnion, Exact } from './utils'
import { BuiltinDirective, InputModelDirective } from './BuiltinDirective'

export type version = '3.0'

declare global {
  namespace JSX {
    interface IntrinsicElements {}
    interface IntrinsicAttributes {}
  }
  namespace VueDX {
    namespace internal {
      export function resolveComponent<T extends {}, A, B>(
        components: T,
        name: A,
        pascalName?: B,
      ): A extends keyof T
        ? T[A]
        : B extends keyof T
        ? T[B]
        : A extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[A]
        : B extends keyof JSX.IntrinsicElements
        ? JSX.IntrinsicElements[B]
        : never

      export function resolveDirective<T extends {}, A, B>(
        directives: T,
        name: A,
        cameelName?: B,
      ): A extends keyof T ? T[A] : B extends keyof T ? T[B] : A

      export { defineComponent }
      export function defineSetupComponent<P, E, B, O>(
        props: P,
        emits: E,
        bindings: B,
        options: O,
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
        P, // Props
        {} // Defaults
      >

      // -- renderList --
      export function renderList<R>(
        source: string,
        handler: (value: string, index: number) => R,
      ): R[]
      export function renderList<R>(
        source: number,
        handler: (value: number, index: number) => R,
      ): R[]
      export function renderList<R>(
        source: number,
        handler: (value: number, index: number) => R,
      ): R[]
      export function renderList<T, R>(
        source: T[],
        handler: (value: T, index: number) => R,
      ): R[]
      export function renderList<T extends Readonly<unknown[]>, R>(
        source: T,
        handler: (value: TupleToUnion<T>, index: number) => R,
      ): R[]
      export function renderList<T, R>(
        source: Iterable<T>,
        handler: (value: T, index: number) => R,
      ): R
      export function renderList<T extends object, R>(
        source: T,
        handler: <K extends keyof T>(value: T[K], key: K, index: number) => R,
      ): R[]

      // -- renderSlot --
      export function renderSlot<
        S extends Record<string, (...args: any) => any>,
        K extends keyof S
      >(source: S, name: K, props: Parameters<S[K]>[0]): any

      // -- checkSlots --
      export function checkSlots(tag: any, slots: any): any

      export function expectType<T = any>(value: T): T

      // -- checkDirective --
      export function checkDirective<N, T, A, E, M extends string>(
        name: N,
        tag: T,
        directives: Array<BuiltinDirective<A, E, M>>,
      ): any

      type GenericInputModelCheck<B = string> = <E extends B>(
        type: string,
        directives: Array<InputModelDirective<E>>,
        options: any,
        checkboxes: any,
      ) => any

      interface CheckInputModel {
        radio<E extends TupleToUnion<O>, O>(
          directives: Array<InputModelDirective<E>>,
          options: O,
          checkboxes: any,
        ): any
        select<
          E extends EE,
          O,
          EE = TupleToUnion<O> & Exact<E, TupleToUnion<O>>
        >(
          directives: Array<
            InputModelDirective<E & Exact<E, TupleToUnion<O>>, TupleToUnion<O>>
          >,
          options: O,
          checkboxes: any,
        ): any
        checkbox<E extends Y | N, Y = true, N = false>(
          directives: Array<InputModelDirective<E>>,
          options: any,
          checkboxes: Readonly<[Y, N]>,
        ): any

        button: GenericInputModelCheck<never>
        color: GenericInputModelCheck
        date: GenericInputModelCheck<string | Date>
        /** @deprecated */
        datetime: GenericInputModelCheck<string | Date>
        'datetime-local': GenericInputModelCheck<string | Date>
        email: GenericInputModelCheck
        file: GenericInputModelCheck<any>
        hidden: GenericInputModelCheck
        image: GenericInputModelCheck<any>
        month: GenericInputModelCheck
        number: GenericInputModelCheck<string | number>
        password: GenericInputModelCheck
        range: GenericInputModelCheck<string | number>
        reset: GenericInputModelCheck<never>
        search: GenericInputModelCheck
        submit: GenericInputModelCheck<never>
        tel: GenericInputModelCheck
        time: GenericInputModelCheck
        text: GenericInputModelCheck
        url: GenericInputModelCheck
        week: GenericInputModelCheck
      }
      interface CheckBuiltinDirective {
        text(directives: Array<BuiltinDirective<never, string, never>>): any
        html(directives: Array<BuiltinDirective<never, string, never>>): any
        show(directives: Array<BuiltinDirective<never, boolean, never>>): any
        pre(directives: Array<BuiltinDirective<never, never, never>>): any
        cloak(directives: Array<BuiltinDirective<never, never, never>>): any
        once(directives: Array<BuiltinDirective<never, never, never>>): any
        memo(directives: Array<BuiltinDirective<never, any[], never>>): any
      }

      export const checkInputModel: CheckInputModel
      export const checkBuiltinDirective: CheckBuiltinDirective
      export function checkOnDirective<
        T extends keyof JSX.IntrinsicElements,
        A,
        E,
        M extends string
      >(tag: T, directives: Array<BuiltinDirective<A, E, M>>): E

      // TODO: Check props on given component.
      export function checkModelDirective<T, A, E, M extends string>(
        tag: T,
        directives: Array<BuiltinDirective<A, E, M>>,
      ): E
    }
  }
}
