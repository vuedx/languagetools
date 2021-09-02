<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{
  a: string,
  b?: number,
  c?: { foo?: string }
}>()

defineEmits<{
  (event: 'a', payload: string): void
  (event: 'b', payload?: number): void
  (event: 'c', payload?: { foo?: string }): void
}>()
</script>
