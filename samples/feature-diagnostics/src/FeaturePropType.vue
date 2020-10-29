<script lang="ts">
import { defineComponent } from 'vue'
import PropTypeObject from './components/TypeScriptPropsOption.vue'

export default defineComponent({
  components: {
    PropTypeObject,
  },
})
</script>

<template>
  <PropTypeObject />
  <PropTypeObject :eventA="{ id: 1 }" />
  <PropTypeObject :eventA="{ id: 'foo' }" />
  <PropTypeObject :eventA="{ id: 1, foo: 'bar' }" />
  <PropTypeObject
    :eventA="{ id: 1, foo: 'bar' }"
    :eventB="{ id: 1, foo: 'bar' }"
  />
</template>
