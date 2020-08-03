<script lang="ts">
import { defineComponent } from 'vue'

import { foo } from './fixture-definition-from.vue'

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
