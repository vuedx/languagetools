<script setup lang="ts">
const props = defineProps<{
  foo: string,
}>()
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ props.foo }}</span>
  <span>{{ $props.foo }}</span>
</template>
