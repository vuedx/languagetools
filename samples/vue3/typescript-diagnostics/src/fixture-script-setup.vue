<script setup lang="ts">
import { PropType, defineProps } from 'vue'

const props = defineProps({
  a: { type: String, required: true },
  b: Number,
  c: null as unknown as PropType<{ foo?: string }>
})
</script>
