<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
})
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ props.foo }}</span>
  <span>{{ $props.foo }}</span>
</template>
