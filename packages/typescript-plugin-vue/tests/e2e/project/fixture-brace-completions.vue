<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    foo: String
  },
  setup(props) {
    return {
      bar: 'foo',
      obj: {
    }
  }
})
</script>

<template>
  <div />
</template>
