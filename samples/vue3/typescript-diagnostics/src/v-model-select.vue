<script setup lang="ts">
import { ref } from 'vue'

const str = ref<string>()
const abc = ref<'a'|'b'|'c'>()
const num = ref<number>()
const _123 = ref<1|2|3>()

const a = 'a'
const b = 'b'
</script>

<template>
  <select v-model="str">
    <option value="a" />
    <option value="b" />
  </select>
  <select v-model="str">
    <option :value="a" />
    <option :value="b" />
  </select>
  <select v-model="abc">
    <option value="a" />
    <option value="b" />
  </select>
  <select v-model="abc">
    <option value="a" />
    <option value="b" />
    <option value="c" />
  </select>
  <select v-model="abc">
    <option value="a" />
    <option value="b" />
    <option value="c" />
    <option value="d" />
  </select>
  <select v-model="_123">
    <option v-for="v of 3" :value="v" />
  </select>
  <select v-model="_123">
    <option :value="1" />
    <option :value="2" />
    <option :value="3" />
  </select>
  <select v-model="_123">
    <option :value="1" />
    <option :value="2" />
  </select>
  <select v-model="num">
    <option v-for="v of 3" :value="v" />
  </select>
</template>
