/* eslint-disable @typescript-eslint/no-empty-interface */

import type { GlobalDirectives } from '@vue/runtime-core' // TODO: Move to v3 and remove this
import type { KnownKeys } from './utils'

// TODO: Move to v3 and remove this
declare module '@vue/runtime-core' {
  interface GlobalDirectives {}
}

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
  localRegisteredDirectives: T,
  directiveName: A,
  directiveNameInCamelCase?: B,
): A extends keyof KnownKeys<T>
  ? T[A]
  : B extends keyof KnownKeys<T>
  ? T[B]
  : A extends keyof KnownKeys<GlobalDirectives>
  ? GlobalDirectives[A]
  : B extends keyof KnownKeys<GlobalDirectives>
  ? GlobalDirectives[B]
  : never
