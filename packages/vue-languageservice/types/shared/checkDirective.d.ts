/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { AllowedComponentProps, ComponentCustomProps, Directive, VNodeProps } from '@vue/runtime-core'
import { DirectiveUsage, VModelInput } from './directives'
import {
  EventName,
  Exact,
  KnownKeys,
  OnlyEventNames,
  RemoveOnPrefix,
  TupleToUnion
} from './utils'

type GenericInputModelCheck<B = string> = <E extends B>(
  directives: Array<VModelInput<E>>,
  options?: any,
  checkboxes?: any,
) => any

interface CheckModelDirectiveForDOM {
  radio<E extends TupleToUnion<O>, O>(
    directives: Array<VModelInput<E>>,
    options: O,
    checkboxes: any,
  ): any
  select<E extends EE, O, EE = TupleToUnion<O> & Exact<E, TupleToUnion<O>>>(
    directives: Array<
      VModelInput<E & Exact<E, TupleToUnion<O>>, TupleToUnion<O>>
    >,
    options: O,
    checkboxes: any,
  ): any
  checkbox<E extends Y | N, Y = true, N = false>(
    directives: Array<VModelInput<E>>,
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

export const checkModelDirectiveForDOM: CheckModelDirectiveForDOM

interface CheckBuiltinDirective {
  cloak(tag: any, directives: Array<DirectiveUsage<never, never, never>>): any
  html(tag: any, directives: Array<DirectiveUsage<never, string, never>>): any
  memo(tag: any, directives: Array<DirectiveUsage<never, any[], never>>): any
  once(tag: any, directives: Array<DirectiveUsage<never, never, never>>): any
  pre(tag: any, directives: Array<DirectiveUsage<never, never, never>>): any
  show(tag: any, directives: Array<DirectiveUsage<never, boolean, never>>): any
  text(tag: any, directives: Array<DirectiveUsage<never, string, never>>): any
}

export const checkBuiltinDirective: CheckBuiltinDirective

type MouseEventNames =
  | 'auxclick'
  | 'click'
  | 'contextmenu'
  | 'dbclick'
  | 'mousedown'
  | 'mouseenter'
  | 'mousemove'
  | 'mouseleave'
  | 'mouseout'
  | 'mouseover'
  | 'mouseup'
  | 'wheel'
type PointerEventNames =
  | 'pointerdown'
  | 'pointermove'
  | 'pointerup'
  | 'pointercancel'
  | 'pointerenter'
  | 'pointerleave'
  | 'pointerover'
  | 'pointerout'
type KeyboardEventNames = 'keydown' | 'keypress' | 'keyup'

export function checkOnDirective<T>(
  tag: T,
): T extends keyof KnownKeys<JSX.IntrinsicElements>
  ? <
    A extends RemoveOnPrefix<OnlyEventNames<keyof JSX.IntrinsicElements[T]>>,
    M extends
    | 'once'
    | 'stop'
    | 'prevent'
    | 'capture'
    | 'self'
    | 'passive'
    | (A extends KeyboardEventNames
      ?
      | 'enter'
      | 'tab'
      | 'delete'
      | 'esc'
      | 'space'
      | 'left'
      | 'right'
      | 'up'
      | 'down'
      | 'ctrl'
      | 'alt'
      | 'shift'
      | 'meta'
      | 'exact'
      : never)
    | (A extends PointerEventNames
      ?
      | 'left'
      | 'right'
      | 'middle'
      | 'ctrl'
      | 'alt'
      | 'shift'
      | 'meta'
      | 'exact'
      : never)
    | (A extends MouseEventNames
      ?
      | 'left'
      | 'right'
      | 'middle'
      | 'ctrl'
      | 'alt'
      | 'shift'
      | 'meta'
      | 'exact'
      : never),
    E extends Get<JSX.IntrinsicElements[T], EventName<A>>
    >(
    directives: Array<DirectiveUsage<A, E, M>>,
  ) => E
  : <
    A extends RemoveOnPrefix<OnlyEventNames<keyof PropsOf<T>>>,
    M extends 'once',
    E extends Get<PropsOf<T>, EventName<A>>
    >(
    directives: Array<DirectiveUsage<A, E, M>>,
  ) => E

export function checkModelDirective<
  T,
  A extends keyof PropsOf<T>,
  E extends Get<PropsOf<T>, A>
>(tag: T, directives: Array<DirectiveUsage<A, E, never>>): E

export function checkDirective<
  T,
  A,
  M extends string,
  E,
  D extends Directive<T, E>
>(dir: D, tag: T, directives: Array<DirectiveUsage<A, E, M>>): E

type ExtractPublicInstance<T> = T extends new () => infer R ? R : never
type PropsOf<T> = T extends abstract new (...args: unknown[]) => { $props: infer Props } ? Props : T extends (props: infer Props) => unknown ? Props : AllowedComponentProps & ComponentCustomProps & VNodeProps
type Get<T, K, F = never> = K extends keyof T ? T[K] : F
