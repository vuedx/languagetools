<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    foo: { type: String, required: true },
    bar: { type: String },
  },
})
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
  <span>{{ bar }}</span>
  <span>{{ $props.bar }}</span>
</template>
