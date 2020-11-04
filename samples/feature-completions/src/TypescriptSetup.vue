<script lang="ts" setup>
import { computed, ref } from 'vue'
import {} from 'vue'
export { default as HelloWorld } from './components/HelloWorld.vue'

export default {
  props: {
    name: String,
    email: { type: String },
    code: [String, Number],
  },
}

export const fullname = ref('')
export const altCode: number = 1

export function increment() {}
</script>

<template>
  <HelloWorld n />
  <span>Name: {{ name + }}</span>
  <p v-bind:></p>
  <p v-if=""></p>
  <>
</template>
