<script setup>
import { a, A } from './a'
import AA, { aa } from './A.vue'
</script>

<script>
export const bb = 1
</script>

<template>
  <A>{{ a }}</A>
  <AA>{{ aa }}</AA>
</template>

