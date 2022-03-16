<script setup lang="ts">
import A from './fixture-script.vue'
import B from './fixture-script-setup.vue'
import C from './fixture-script-setup-type-only.vue'
import { ref, Transition } from 'vue'

const input = ref<HTMLInputElement|null>(null)
let a = $ref<typeof A|null>(null)

function setRef(value: typeof A| null): void {
  a = value 
}
</script>

<template>
  <div :ref="input" />
  <input :ref="input" type="text" />

  <button autofocus>text</button>
  <!-- Because A, B and C share same interface. -->
  <A a="" :ref="a" />
  <B a="" :ref="setRef" />
  <C a="" ref="a" />
  <Transition :ref="a" />
</template>
