import type { PropsOf } from './Props'
import type { Get, KnownKeys, TupleToUnion } from './utils'

export function checkModelDirective<
  T,
  A extends GetArg<T>,
  O extends {},
  E extends GetExp<T, A, O>,
  M extends GetModifiers<T>
>(
  tag: T,
  arg: A,
  exp: E,
  modifiers: Partial<Record<M, boolean>>,
  options?: O,
): E

type GetArg<T> = T extends 'input' | 'textarea' | 'select'
  ? undefined
  : T extends KnownKeys<keyof JSX.IntrinsicElements>
  ? never
  : keyof PropsOf<T>

type GetExp<T, A, O> = T extends 'textarea'
  ? string
  : T extends 'input'
  ? InputValueType<O> | undefined | null
  : T extends 'select'
  ? SelectValueType<O>
  : T extends KnownKeys<keyof JSX.IntrinsicElements>
  ? never
  : Get<PropsOf<T>, A>

type GetModifiers<T> = T extends 'input' | 'textarea' | 'select'
  ? 'lazy' | 'number' | 'trim'
  : never

type InputTypeName =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | undefined // acts as a catch-all

type InputValueType<O> = O extends { type: infer T }
  ? T extends 'checkbox'
    ? O extends { checkbox: infer C }
      ? C extends [infer Y, infer N]
        ? Y | N
        : TupleToUnion<C>
      : boolean
    : T extends 'radio'
    ? O extends { radio: infer R }
      ? TupleToUnion<R>
      : string
    : T extends 'date' | 'datetime' | 'datetime-local'
    ? string | Date
    : T extends 'number' | 'range'
    ? string | number
    : T extends 'button' | 'reset' | 'submit'
    ? never
    : string
  : string

type SelectValueType<O> = O extends { option: infer T }
  ? TupleToUnion<T>
  : string
