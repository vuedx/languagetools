<script lang="ts" setup>
import { ref } from "vue";

export const foo = ref('test');
</script>

<template>
  <div>{{ foo + foo  }}</div>
</template>




