import { Directive } from '@vue/runtime-core' // TODO: Move to v3 and remove this

export function checkDirective<
  T,
  D extends
    | Directive<T, unknown>
    | 'show'
    | 'text'
    | 'html'
    | 'once'
    | 'pre'
    | 'cloak'
    | 'memo',
  A extends string | undefined,
  E extends GetExp<T, D>,
  M extends GetModifiers<D>
>(
  dir: D,
  tag: T,
  arg: A,
  exp: E,
  modifiers: Partial<Record<M | '', boolean>>,
): E

type GetExp<T, D> = D extends 'show'
  ? boolean | undefined
  : D extends 'text' | 'html'
  ? T extends keyof JSX.IntrinsicElements
    ? string | undefined
    : T extends JSX.IntrinsicAttributes[keyof JSX.IntrinsicAttributes]
    ? string | undefined
    : never
  : D extends 'once' | 'pre' | 'cloak'
  ? undefined
  : D extends 'memo'
  ? any[]
  : D extends Directive<unknown, infer E>
  ? E
  : undefined

type GetModifiers<D> = D extends Directive<unknown, unknown> ? never : never
