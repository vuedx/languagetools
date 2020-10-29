<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    eventA: {
      type: Object,
      required: true,
    },
    eventB: {
      type: Object,
    },
  },
})
</script>

<template>Event: {{ event.id }}</template>
