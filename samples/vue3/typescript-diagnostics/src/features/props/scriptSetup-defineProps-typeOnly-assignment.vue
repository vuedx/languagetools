<script setup lang="ts">
const props = defineProps<{
  foo: string,
  bar?: string,
}>()
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ props.foo }}</span>
  <span>{{ $props.foo }}</span>
  <span>{{ bar }}</span>
  <span>{{ props.bar }}</span>
  <span>{{ $props.bar }}</span>
</template>
