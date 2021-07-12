<script lang="ts">
import { defineComponent } from 'vue'
export const foo = 2
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <p>Hello {{ name }}!</p>
</template>
