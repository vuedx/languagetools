<script setup lang="ts">
import { ref } from 'vue'

const a = ref(false)
let b  = 5
let c: [{ foo: string}]
</script>

<template>
  <div v-memo="a" />
  <div v-memo="b" />
  <div v-memo="c" />
  <div v-memo="d" />
</template>
