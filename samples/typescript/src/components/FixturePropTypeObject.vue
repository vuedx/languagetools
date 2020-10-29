<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface Event {
  id: number
}

export default defineComponent({
  props: {
    eventA: {
      type: Object as PropType<Event>,
      required: true,
    },
    eventB: {
      type: Object as PropType<Event>,
    },
  },
})
</script>

<template>Event: {{ event.id }}</template>
