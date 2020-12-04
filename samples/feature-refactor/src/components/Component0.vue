<script>
import { defineComponent } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default defineComponent({
  components: {HelloWorld},
  props: ['one', 'two'],
  emits: ['decrease', 'increase', 'onUpdate:one', 'onUpdate:two'],
})
</script>
<template>
   <p>
     <HelloWorld name="Jane" />
     <button @click="$emit('decrease')" @keydown.enter="$emit('decrease')">-</button>
     {{ one }}
     <button @click="$emit('increase')" @keydown.enter="$emit('increase')">+</button>
     <input v-model.number="one" type="number" />
     <input v-model.number="two" type="number" />
   </p>
 </template>
