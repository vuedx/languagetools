<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {
      str: '1',
    }
  },
})
</script>
<template>
  <p>{{ str.toLocaleLowerCase() }}</p>
</template>
