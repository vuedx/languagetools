<script setup lang="ts">
import { myDir as vMyOtherDir } from './directive'
import { myDir as vMyDir } from './directive'
import A from './components/HelloWorld.vue'
import B from './components/HelloWorld.vue'
</script>

<template>
  <div v-my-dir>
    <A msg="Hello!" />
    <B />
  </div>
</template>
