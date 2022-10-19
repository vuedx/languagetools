<script setup lang="ts" generic="T">
const props = defineProps<{ items: readonly T[] }>()
</script>

<template>
  <template v-for="item of props.items">
    <slot :value="item" />
  </template>
</template>
