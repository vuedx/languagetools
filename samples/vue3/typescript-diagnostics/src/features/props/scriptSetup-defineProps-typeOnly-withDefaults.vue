<script setup lang="ts">
withDefaults(
  defineProps<{
    foo: string
    bar?: string
  }>(),
  { foo: 'foo', bar: 'bar' },
)
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
  <span>{{ bar }}</span>
  <span>{{ $props.bar }}</span>
</template>
