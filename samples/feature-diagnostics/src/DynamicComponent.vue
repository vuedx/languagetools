<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  setup() {
    const div = 'div'

    return { div, HelloWorld } 
  }
})
</script>

<template>
  <component is="span" />
  <component :is="div" />
  <component :is="HelloWorld" msg="say hi" />
</template>

