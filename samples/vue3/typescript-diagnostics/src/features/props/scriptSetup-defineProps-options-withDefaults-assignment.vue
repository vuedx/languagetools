<script setup lang="ts">
defineProps({
  foo: { type: String, default: 'foo' },
})
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
</template>
