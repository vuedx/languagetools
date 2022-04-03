<script lang="ts">
import { defineComponent } from 'vue'

export default { 
  props: {
    foo: { type: String, required: true },
  },
  components: {
    Foo: defineComponent({ render() {} })
  }
}
</script>

<template>
  <span>{{ foo }}</span>
  <span>{{ $props.foo }}</span>
  <Foo />
</template>
