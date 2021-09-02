<script setup lang="ts">
import { ref } from 'vue'

const a = ref(false)
let b  = 5
let c: { foo: string} | undefined
</script>

<template>
  <div v-text="a" />
  <div v-text="b" />
  <div v-text="c" />
  <div v-text="c?.foo" />
</template>
