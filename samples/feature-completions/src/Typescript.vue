<script lang="ts">
import { ref } from 'vue'
import {} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: { HelloWorld },
  props: {
    name: String,
    email: { type: String },
    code: [String, Number],
  },
  setup() {
    const fullname = ref('')
    function increment() {}

    return { fullname, altCode: 1, increment }
  },
}
</script>

<template>
  <HelloWorld n />
  <span>Name: {{ name + }}</span>
  <p v-bind:></p>
  <p v-if=""></p>
  <>
</template>
