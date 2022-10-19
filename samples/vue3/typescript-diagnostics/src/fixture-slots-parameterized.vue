<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{ foo: string }>()
const date = computed(() => new Date(props.foo))
</script>

<template>
  <div>
    <slot :value="props.foo" />
    <slot name="foo" :value="props.foo" :today="date" />
  </div>
</template>
