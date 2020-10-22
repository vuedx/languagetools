<script setup>
import { ref, computed } from 'vue'
export { default as HelloWorld } from './components/HelloWorld.vue'

export default {
  props: {
    name: { type: String },
    email: { type: String, required: true },
    code: { type: Number },
  },
}

export const one = ref(1)
export const two = computed(() => one.value * 2)

export function increase() {
  one.value += 1
}

export function decrease() {
  one.value -= 1
}
</script>

<template>
  <HelloWorld name="Jane" />
  <p>
    <button @click="decrease">-</button>
    {{ one }}
    <button @click="increase">+</button>

    and double is {{ two }}
  </p>
  <p>Name: {{ name }} Email: {{ email }} Code: {{ code }}</p>
</template>
