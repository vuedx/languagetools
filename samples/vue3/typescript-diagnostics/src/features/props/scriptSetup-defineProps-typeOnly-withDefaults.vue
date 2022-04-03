<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  foo?: string,
}>(), { foo: 'foo' })
</script>
