<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
  bar: { type: String },
})
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
  <span>{{ props.foo }}</span>
  <span>{{ bar }}</span>
  <span>{{ $props.bar }}</span>
  <span>{{ props.bar }}</span>
</template>
