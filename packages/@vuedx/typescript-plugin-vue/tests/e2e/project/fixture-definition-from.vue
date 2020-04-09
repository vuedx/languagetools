<script lang="ts">
import { defineComponent } from 'vue'

export const foo = 5

export default defineComponent({
  props: {
    foo: Number,
    default: foo
  },
  setup(props) {
    return {
      bar: props.foo + foo + props[foo]
    }
  }
})
</script>

<template>
  <div />
</template>
