<script setup lang="ts" generic="T">
const props = defineProps<{ value: T }>()
const emit = defineEmits<{
  (event: 'update:value', payload: T): void
}>()
</script>

<template>
  <slot :value="props.value" />
</template>
