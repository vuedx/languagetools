import { expectType } from 'tsd'
import type {} from 'vue'
import type {} from '../types/3.x'

class A {
  $props!: VueDX.internal.MergeAttrs<
    { onInput: (event: number) => void },
    VueDX.internal.AttrsOf<'input'>
  >
}

describe('HTML element', () => {
  VueDX.internal.checkOnDirective(
    '' as 'button',
    'click' as const,
    (event: MouseEvent) => {},
    {},
  )
})

describe('HTML elements (union)', () => {
  VueDX.internal.checkOnDirective(
    '' as 'button' | 'a',
    'click' as const,
    (event: Event) => {},
    {},
  )

  VueDX.internal.checkOnDirective(
    '' as 'button' | 'a',
    'keydown' as const,
    (event) => {
      // @ts-expect-error - event should be KeyboardEvent
      expectType<MouseEvent>(event)
      expectType<KeyboardEvent>(event)
    },
    {},
  )
})

describe('Componenp with v-bind forwarding', () => {
  VueDX.internal.checkOnDirective(
    A,
    'click' as const,
    (event) => {
      expectType<MouseEvent>(event)
    },
    {},
  )

  VueDX.internal.checkOnDirective(
    A,
    'input' as const,
    (event) => {
      expectType<number>(event)
    },
    {},
  )
})
