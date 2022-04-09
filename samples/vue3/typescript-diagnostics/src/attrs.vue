<script lang="ts" setup>
import A from "./fixture-attrs.vue"

const console = window.console
</script>

<template>
  <A type="submit" @click="console.log($event)" />
</template>
