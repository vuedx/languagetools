<script lang="ts">
import { defineComponent } from 'vue'
import Bar from './Bar.vue'

export default defineComponent({
  components: { Bar },
})
</script>

<template>
  <Bar :test="5"  /> 
</template>
