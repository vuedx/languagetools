import type { Directive } from '@vue/runtime-core'

export function checkDirective<
  T,
  D extends Directive<T, unknown> | 'show' | 'once' | 'pre' | 'cloak' | 'memo',
>(
  dir: D,
  tag: T,
  arg: GetArg<D>,
  exp: GetExp<T, D>,
  modifiers: Partial<Record<GetModifiers<D>, boolean>>,
): void

type GetArg<D> = D extends Directive<any, any> ? string | undefined : undefined

type GetExp<T, D> = D extends 'show'
  ? boolean | undefined
  : D extends 'once' | 'pre' | 'cloak'
  ? never
  : D extends 'memo'
  ? unknown[]
  : D extends Directive<T, infer E>
  ? E
  : any

type GetModifiers<D> = D extends Directive<unknown, unknown> ? never : never
