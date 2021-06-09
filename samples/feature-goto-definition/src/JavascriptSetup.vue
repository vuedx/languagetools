<script setup>
import { ref, computed, defineProps } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const props = defineProps({
  name: { type: String },
  email: { type: String, required: true },
  code: { type: Number },
})

const one = ref(1)
const two = computed(() => one.value * 2)

function increase() {
  one.value += 1
}

function decrease() {
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
