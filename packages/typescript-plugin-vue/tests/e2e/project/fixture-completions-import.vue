<script lang="ts">
import { defineComponent,  } from 'vue'

export const Name = 'foo'
export default defineComponent({
  props: {
    foo: String
  },
  setup(props) {
    return {
      bar: props.foo
    }
  }
})
</script>

<template>
  <div />
</template>
