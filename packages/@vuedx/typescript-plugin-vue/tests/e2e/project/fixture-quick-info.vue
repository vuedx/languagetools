<script lang="ts">
import { defineComponent } from 'vue'
import Component, { Name } from './fixture-completions-import.vue'

export default defineComponent({
  components: { Component },
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
