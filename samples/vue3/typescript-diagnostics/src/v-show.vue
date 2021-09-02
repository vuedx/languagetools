<script setup lang="ts">
import { ref } from 'vue'

const a = ref(false)
let b  = 5
let c: { foo: string} | undefined
</script>

<template>
  <div v-show="a" />
  <div v-show="b" />
  <div v-show="c" />
  <div v-show="c != null" />
</template>
