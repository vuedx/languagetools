<script lang="ts">
export default {
  props: {
    name: {
      type: String,
      required: true as const,
    },
  },
};
</script>

<template>
  <p>Hello {{ name }}!</p>
</template>
