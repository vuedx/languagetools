import { defineComponent } from '@vue/runtime-core'
import * as VueDX from '../../types/3.x'

const Comp = defineComponent(
  (props: { a: string; b?: number; c?: { foo?: string } }) => {},
)
const _ctx = new Comp()
const _a = VueDX.internal.resolveComponent(_ctx, a, 'a', 'A')
