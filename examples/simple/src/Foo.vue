<script>
import { defineComponent } from 'vue'
export default defineComponent(function setup() {})
</script>

<template>
  {{ index }} {{ item }} {{ count || 0 }}
  
  <input v-model="foo" /><input v-model="bar" />
</template>
