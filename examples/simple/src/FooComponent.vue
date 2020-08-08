<script>
import { defineComponent } from 'vue'
import Foo from './Foo.vue'
export default defineComponent({
  props: ['item', 'index', 'count', 'foo', 'bar'],
  components: {Foo, },
})
</script>

<template>
  <section :id="item">
    <Foo :index="index" :item="item" :count="count" v-model:foo="foo" v-model:bar="bar"/>="bar" />
  </section>
</template>
