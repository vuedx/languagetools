<script setup lang="ts">
defineProps({
  foo: { type: String, required: true },
})
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
</template>
