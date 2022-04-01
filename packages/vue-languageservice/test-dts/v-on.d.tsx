import { expectType } from 'tsd'
import type {} from 'vue'
import type {} from '../types/3.x'

describe('HTML element', () => {
  expectType<(event: MouseEvent) => any>(
    VueDX.internal.checkOnDirective('' as 'button')([
      {
        arg: 'click' as const,
        exp: (event: MouseEvent) => {},
      },
    ]),
  )
})

describe('HTML elements (union)', () => {
  expectType<(event: MouseEvent) => any>(
    VueDX.internal.checkOnDirective('' as 'button' | 'a')([
      {
        arg: 'click' as const,
        exp: (event: MouseEvent) => {},
      },
    ]),
  )
})
