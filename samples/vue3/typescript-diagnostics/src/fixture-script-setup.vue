<script setup lang="ts">
import { PropType, defineProps } from 'vue'

const props = defineProps({
  a: { type: String, required: true },
  b: Number,
  c: null as unknown as PropType<{ foo?: string }>
})

defineEmits({
  a: (payload: string) => true,
  b: (payload?: number) => true,
  c: (payload?: { foo?: string }) => true,
});
</script>
