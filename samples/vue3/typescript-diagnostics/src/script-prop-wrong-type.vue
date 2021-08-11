<script lang="ts">
import { defineComponent } from 'vue'
import A from './fixture-script.vue'
import B from './fixture-script-setup.vue'
import C from './fixture-script-setup-type-only.vue'

export default defineComponent({
  components: { A, B, C }
})
</script>

<template>
  <A :a="1" b="1" :c="{ bar: '' }" />
  <B :a="1" b="1" :c="{ bar: '' }" />
  <C :a="1" b="1" :c="{ bar: '' }" />
</template>

