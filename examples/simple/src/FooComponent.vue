<script lang="ts">
import { defineComponent } from 'vue'
import Foo from './Foo.vue'
export default defineComponent({
  setup(props: { bar: string }) {},
  components: { Foo },
})
</script>

<template>
  <section :id="item">
    <Foo :index="index" :item="item" :count="count" v-model:foo="foo" v-model:bar="bar"/>="bar" />
  </section>
</template>
