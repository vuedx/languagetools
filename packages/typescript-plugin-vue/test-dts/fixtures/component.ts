import { defineComponent, PropType } from '@vue/runtime-core'

export default defineComponent({
  props: {
    a: { type: String, required: true },
    b: Number,
    c: { type: (null as unknown) as PropType<{ foo?: string }> },
  },
})
