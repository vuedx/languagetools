<script setup lang="ts">
import { ref, defineComponent } from 'vue'

const A = defineComponent<{ modelValue: string }>({})
const B = defineComponent<{ foo: string, bar: string|number }>({})

const str = ref<string>()
const num = ref<number>()
</script>

<template>
  <A v-model="str" />
  <B v-model="str" />
  
  <A v-model="num" />
  <B v-model="num" />
  
  <A v-model:foo="str" />
  <B v-model:foo="str" />

  <A v-model:foo="num" />
  <B v-model:foo="num" />

  <A v-model:bar="str" />
  <B v-model:bar="str" />

  <A v-model:bar="num" />
  <B v-model:bar="num" />
</template>
