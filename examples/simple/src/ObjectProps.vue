<script lang="ts">
import { defineComponent, ref, computed } from 'vue'


export default defineComponent({
  props: {
    example: String
  },
  setup(props) {
    return {
      isFoo: props.example in props,
    }
  }
})
</script>

<template>
  <div>{{ example }} {{ isFoo }} </div>
</template>
