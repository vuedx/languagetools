<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  a: string,
  b?: number,
  c?: { foo?: string }
}>()
</script>
