import type {} from '@vue/runtime-core'
import type {} from '../../types/3.x'

const props = defineProps<{
  a: string
  b?: number
  c?: { foo?: string }
}>()

export default VueDX.internal.defineSetupComponent(props, {}, {}, {})
