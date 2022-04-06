import { PropType } from '@vue/runtime-core'

const props = defineProps({
  a: { type: String, required: true },
  b: Number,
  c: { type: (null as unknown) as PropType<{ foo?: string }> },
})

export default VueDX.internal.defineSetupComponent(props, {}, {}, {})
