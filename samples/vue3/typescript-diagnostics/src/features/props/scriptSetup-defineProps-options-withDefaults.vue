<script setup lang="ts">
withDefaults(
  defineProps({
    foo: { type: String, required: true },
    bar: { type: String },
  }),
  { foo: 'foo', bar: 'bar' },
)
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
  <span>{{ bar }}</span>
  <span>{{ $props.bar }}</span>
</template>
