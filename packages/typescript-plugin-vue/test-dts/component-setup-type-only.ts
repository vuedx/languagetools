import {} from 'vue'

const props = defineProps<{
  a: string
  b?: number
  c?: { foo?: string }
}>()

export default VueDX.internal.defineSetupComponent(props, {}, {}, {})
