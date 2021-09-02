<script lang="ts">
import { defineComponent } from 'vue'
import { b, B } from './b'
import BB, { bb } from './B.vue'

export const aa = 1
export default defineComponent({
  components: { B, BB },
  setup() {
    return { b, bb }
  },
})
</script>

<template>
  <B>{{ b }}</B>
  <BB>{{ bb }}</BB>
</template>
