<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent<{
  children: {
    default: (props: { str: string; num: number }) => any
  }
}>({
  setup() {
    const str: string = 'foo'
    const num: number = 2

    return { str, num }
  },
})
</script>

<template>
  <div>
    <slot v-bind="{ str, num }" />
  </div>
</template>
