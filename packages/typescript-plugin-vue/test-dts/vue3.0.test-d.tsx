import '../types/vue3.0'
import { expectError } from 'tsd'
import A from './component'
import B from './component-setup'
import C from './component-setup-type-only'

// Missing Prop
expectError(<A />)
expectError(<B />)
expectError(<C />)

// Wrong Prop
expectError(<A a={1} />)
expectError(<B a={1} />)
expectError(<C a={1} />)

// Wrong Prop
expectError(<A a={1} b="1" c={{ foo: 1, bar: 2 }} />)
expectError(<B a={1} b="1" c={{ foo: 1, bar: 2 }} />)
expectError(<C a={1} b="1" c={{ foo: 1, bar: 2 }} />)
