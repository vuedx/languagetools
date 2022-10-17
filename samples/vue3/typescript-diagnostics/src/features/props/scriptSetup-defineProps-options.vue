<script setup lang="ts">
defineProps({
  foo: { type: String, required: true },
  bar: { type: String },
})
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
  <span>{{ bar }}</span>
  <span>{{ $props.bar }}</span>
</template>
