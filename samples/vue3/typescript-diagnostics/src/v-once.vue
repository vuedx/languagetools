<script setup lang="ts">
import { ref } from 'vue'

const a = ref(false)
let b  = 5
let c: { foo: string} | undefined
</script>

<template>
  <div v-once="a" />
  <div v-once="b" />
  <div v-once="c" />
  <div v-once="c?.foo" />
</template>
