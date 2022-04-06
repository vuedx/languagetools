<script setup lang="ts">
import { ref, shallowRef } from 'vue'

const str = ref<string>()
const num = ref<number>()
const date = shallowRef<Date>()
const immutable = { foo: 'bar' as string } as const
</script>

<template>
  <input v-model="str" />
  <input v-model="num" />
  <input type="number" v-model="num" />
  <input v-model="date" />
  <input type="date" v-model="date" />
  <input v-model="immutable.foo" />
</template>
