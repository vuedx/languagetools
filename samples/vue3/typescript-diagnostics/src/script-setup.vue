<script setup lang="ts">
import { useSlots, useAttrs } from 'vue'

const emit = defineEmits<{
  (event: 'foo'): void
  (event: 'bar', arg: number): void
}>()
const props = withDefaults(defineProps<{ foo?: string }>(), { foo: '' })
const slots = useSlots()
const attrs = useAttrs()

defineExpose()

export type A = number
export interface B {
  foo: string
}
export const C = 5
export enum D { foo }
enum E { foo }
const F = 5
export type { E, F }
export default {}
</script>
