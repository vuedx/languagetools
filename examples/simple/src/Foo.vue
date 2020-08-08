<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['index', 'item', 'count', 'foo', 'bar'],
  components: {},
})
</script>

<template>
  {{ index }} {{ item }} {{ count || 0 }}
  
  <input v-model="foo" /><input v-model="bar" />
</template>
