<script lang="ts" setup>
import { computed, ref, defineComponent } from 'vue'
export { default as HelloWorld } from './components/HelloWorld.vue'

export default defineComponent({
  props: {
    name: String,
    email: { type: String },
    code: [String, Number],
  },
})

export const fullname = ref('')
export const altCode: number = 1
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
