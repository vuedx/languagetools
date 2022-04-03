<script setup lang="ts">
defineProps<{
  foo: string,
}>()
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
</template>
