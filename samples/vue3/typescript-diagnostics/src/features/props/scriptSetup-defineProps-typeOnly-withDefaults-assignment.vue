<script setup lang="ts">
const props = withDefaults(defineProps<{
  foo?: string,
}>(), { foo: 'foo' })
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ props.foo }}</span>
  <span>{{ $props.foo }}</span>
</template>
