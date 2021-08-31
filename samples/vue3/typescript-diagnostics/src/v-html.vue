<script setup lang="ts">
import { ref } from 'vue'

const a = ref(false)
let b  = 5
let c: { foo: string} | undefined
</script>

<template>
  <div v-html="a" />
  <div v-html="b" />
  <div v-html="c" />
  <div v-html="c?.foo" />
</template>
