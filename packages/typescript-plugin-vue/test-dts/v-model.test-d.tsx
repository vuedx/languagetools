import { expectAssignable, expectNotAssignable, expectType } from 'tsd'
import * as VueDX from '../types/3.x'
import A from './fixtures/component'
import B from './fixtures/component-setup'
import C from './fixtures/component-setup-type-only'

describe('input', () => {
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      'str' as string,
      {},
      {},
    ),
  )
})

describe('input[type=text]', () => {
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      'str' as string,
      {},
      { type: 'text' as const },
    ),
  )

  expectNotAssignable<string>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      // @ts-expect-error - string expected
      1,
      {},
      { type: 'text' as const },
    ),
  )
})

describe('input[type=checkbox]', () => {
  // Defaults to boolean
  expectNotAssignable<boolean>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      // @ts-expect-error - value should be boolean
      'str' as string,
      {},
      {
        type: 'checkbox' as const,
      },
    ),
  )

  expectAssignable<boolean>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      true,
      {},
      {
        type: 'checkbox' as const,
      },
    ),
  )

  expectAssignable<boolean>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      false,
      {},
      {
        type: 'checkbox' as const,
      },
    ),
  )

  // With checkbox options
  expectAssignable<{ id: number }>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      { id: 1 },
      {},
      {
        type: 'checkbox' as const,
        checkbox: [{ id: 1 as number }, { id: 'foo' as string }] as const,
      },
    ),
  )

  expectAssignable<{ id: string }>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      { id: 'bar' },
      {},
      {
        type: 'checkbox' as const,
        checkbox: [{ id: 1 as number }, { id: 'foo' as string }] as const,
      },
    ),
  )
})

describe('input[type=radio]', () => {
  // Defaults to string
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      'foo',
      {},
      { type: 'radio' as const },
    ),
  )

  // With radio option
  expectAssignable<number>(
    VueDX.internal.checkModelDirective(
      'input' as const,
      undefined,
      2,
      {},
      { type: 'radio' as const, radio: [1 as number] as const },
    ),
  )
})

describe('Component', () => {
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(A, 'a' as const, 'foo', {}),
  )
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(
      A,
      'a' as const,
      // @ts-expect-error - exp should be string
      1,
      {},
    ),
  )
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(B, 'a' as const, 'foo', {}),
  )
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(
      B,
      'a' as const,
      // @ts-expect-error - exp should be string
      1,
      {},
    ),
  )
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(C, 'a' as const, 'foo', {}),
  )
  expectAssignable<string>(
    VueDX.internal.checkModelDirective(
      C,
      'a' as const,
      // @ts-expect-error - exp should be string
      1,
      {},
    ),
  )
})
