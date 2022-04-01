import '../types/3.x'
import { expectError } from 'tsd'
import A from './fixtures/component'
import B from './fixtures/component-setup'
import C from './fixtures/component-setup-type-only'

describe('Missing Prop', () => {
  // @ts-expect-error
  expectError(<A />)
  // @ts-expect-error
  expectError(<B />)
  // @ts-expect-error
  expectError(<C />)
})

describe('Wrong prop type', () => {
  // @ts-expect-error
  expectError(<A a={1} />)
  // @ts-expect-error
  expectError(<B a={1} />)
  // @ts-expect-error
  expectError(<C a={1} />)
})

describe('Wrong prop', () => {
  // @ts-expect-error
  expectError(<A a={1} b="1" c={{ foo: 1, bar: 2 }} />)
  // @ts-expect-error
  expectError(<B a={1} b="1" c={{ foo: 1, bar: 2 }} />)
  // @ts-expect-error
  expectError(<C a={1} b="1" c={{ foo: 1, bar: 2 }} />)
})
