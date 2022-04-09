<script setup lang="ts">
const props = defineProps<{ type: 'primary' | 'secondary' }>()
</script>

<template>
  <button v-bind="$attrs" />
</template>
