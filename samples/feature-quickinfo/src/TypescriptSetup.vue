<script lang="ts" setup>
import { defineProps, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const props = defineProps<{ name: string, email: string, code: string | number }>()

const fullname = ref('')
const altCode: number = 1
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
