<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: { type: String, required: true },
  },
})
</script>
