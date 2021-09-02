import { PropType } from 'vue'

const props = defineProps({
  a: { type: String, required: true },
  b: Number,
  c: { type: null as unknown as PropType<{ foo?: string }> },
})

export default VueDX.internal.defineSetupComponent(props, {}, {}, {})
