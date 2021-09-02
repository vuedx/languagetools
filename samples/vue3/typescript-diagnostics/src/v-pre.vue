<script setup lang="ts">
import { ref } from 'vue'

const a = ref(false)
let b  = 5
let c: { foo: string} | undefined
</script>

<template>
  <div v-pre="a" />
  <div v-pre="b" />
  <div v-pre="c" />
  <div v-pre="c?.foo" />
</template>
