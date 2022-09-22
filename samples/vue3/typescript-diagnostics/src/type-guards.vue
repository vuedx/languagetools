<script lang="ts" setup>
import A from './fixture-script.vue'
const props = defineProps<{
  foo?: { bar?: string }
}>()
</script>

<template>
  <div>{{ props.foo.bar }}</div>
  <div v-if="props.foo != null">{{ props.foo.bar }}</div>
  <A a="">{{ props.foo.bar }}</A>
  <A a="" v-if="props.foo != null">{{ props.foo.bar }}</A>
  <A a="" v-if="props.foo != null">
    <A a="">{{ props.foo.bar }}</A>
  </A>
  <div v-if="props.foo != null">
    <div v-if="props.foo.bar != null">
      <A>{{props.foo.bar.toString()}}</A>
    </div>
  </div>
</template>

