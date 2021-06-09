<script setup>
import { computed, defineProps, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'


const props = defineProps({
  name: String,
  email: { type: String },
  code: [String, Number],
})


const fullname = ref('')
const altCode = 1 + 0 // to prevent {altCode} from being infered as '1' instead of 'number'
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
