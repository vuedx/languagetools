<script lang="ts" setup>
import { defineProps, ref } from 'vue'

const props = defineProps<{ foo: string }>()
const bar = ref('baz')
const baz = ref('baz')

function doBaz(): void {}
</script>

<template>
  <div @click="doBaz">
    {{ foo }} {{ bar }} {{ xxx }}
  </div>
</template>
