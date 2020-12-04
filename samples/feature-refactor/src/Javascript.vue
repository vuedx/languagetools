<script>
import Component0 from './components/Component0.vue';
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { Component0, HelloWorld },
  setup() {
    const one = ref(1)
    const two = ref(2)

    function increase() {
      one.value += 1
    }

    function decrease() {
      one.value -= 1
    }

    return { one, two, increase, decrease }
  },
}
</script>

<template>
  <div>
    <Component0 
      v-if="one" 
      v-model:one="one" 
      v-model:two="two" 
      @decrease="decrease" 
      @increase="increase" 
    />
  </div>
</template>
