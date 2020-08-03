<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return { foo: 'foo' }
  },
})
</script>

<template>
  <div v-if="foo > 0" />
</template>