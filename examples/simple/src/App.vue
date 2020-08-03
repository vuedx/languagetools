<script lang="ts">
import { defineComponent } from 'vue'
import Bar from './NewBar.vue'

export default defineComponent({
  components: { Bar },
  setup() {
    return { bar: 1 }
  }
})
</script>

<template>
  <Bar v-if="bar" :test="5"  #default="{ test }">
      {{ test }}
  </Bar>
  <Bar v-else :test="5"  #default="{ test }">
      {{ test }}
  </Bar>
</template>
