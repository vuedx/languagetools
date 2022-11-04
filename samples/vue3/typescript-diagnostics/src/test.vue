<script>
import Foo from './fixture-attrs.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    FixtureAttrs: Foo,
  },
})
</script>
<template>
  <FixtureAttrs />
</template>
