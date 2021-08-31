export interface DirectiveUsage<A, E, M extends string> {
  arg?: A
  exp?: E
  modifiers?: M[]
}

export type VModelInput<E, EE = E> = DirectiveUsage<
  never,
  E,
  'lazy' | 'trim' | 'number'
> & { _exp?: EE }

export function resolveDirective<T extends {}, A, B>(
  directives: T,
  name: A,
  cameelName?: B,
): A extends keyof T ? T[A] : B extends keyof T ? T[B] : A
