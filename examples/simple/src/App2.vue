<script lang="ts">
import { defineComponent } from 'vue'
import TestComp from './Bar.vue'

export default defineComponent({
  components: {
    TestComp,
  }
})
</script>

<template>
  <TestComp>Try</TestComp>
  <TestComp>refacotring!</TestComp>
  <TestComp/>
</template>
