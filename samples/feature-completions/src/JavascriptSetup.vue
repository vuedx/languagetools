<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import {} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const props = defineProps({
  name: String,
  email: { type: String },
  code: [String, Number],
})

const fullname = ref('')
/** @type {number} */
const altCode = 1

function increment() {}
</script>

<template>
  <HelloWorld n />
  <span>Name: {{ name + fullname }}</span>
  <p v-bind>
  <p v-if="al" />
  <p v-for="item of 10">{{ item }}</p>
  <a>{{ i }}<> {{ altCode }}
</template>
