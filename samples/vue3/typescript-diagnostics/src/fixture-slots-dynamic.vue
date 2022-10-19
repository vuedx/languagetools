<script setup lang="ts">
const props = defineProps<{ slot: 'foo'|'bar'|'baz' }>()
</script>

<template>
  <div>
    <slot :name="props.slot" foo="foo" :bar="5" />
  </div>
</template>
