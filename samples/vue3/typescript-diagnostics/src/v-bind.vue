<script setup lang="ts">
const foo = 1
const bar = '2'
const value = 'value'
</script>

<template>
  <input  v-on:change.capture="" />
  <input ^value="bar" />
  <input .value="bar" />
  <input :value.once="bar" />
  <input v-bind:value="bar" />
  <input ^[value]="bar" />
  <input .[value]="bar" />
  <input :[value].once="bar" />
  <input v-bind:[value]="bar" />
</template>
