import '../types/3.x'
import { expectError } from 'tsd'
import A from './fixtures/component'
import B from './fixtures/component-setup'
import C from './fixtures/component-setup-type-only'

describe('Missing Prop', () => {
  expectError(<A />)
  expectError(<B />)
  expectError(<C />)
})

describe('Wrong prop type', () => {
  expectError(<A a={1} />)
  expectError(<B a={1} />)
  expectError(<C a={1} />)
})

describe('Wrong prop', () => {
  expectError(<A a={1} b="1" c={{ foo: 1, bar: 2 }} />)
  expectError(<B a={1} b="1" c={{ foo: 1, bar: 2 }} />)
  expectError(<C a={1} b="1" c={{ foo: 1, bar: 2 }} />)
})
