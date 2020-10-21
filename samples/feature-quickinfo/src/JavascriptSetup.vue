<script setup>
import { computed, ref } from 'vue'
export { default as HelloWorld } from './components/HelloWorld.vue'

export default {
  props: {
    name: String,
    email: { type: String },
    code: [String, Number],
  },
}

export const fullname = ref('')
/** @type {number} */
export const altCode = 1
</script>

<template>
  <HelloWorld name="Jane" />
  <p>
    <span>Name: {{ name }}</span>
    <span>Email: {{ email }}</span>
    <span>Code: {{ code }}</span>
  </p>
  <p>
    <span>FullName: {{ fullname }}</span>
    <span>AltCode: {{ altCode }}</span>
  </p>
</template>
