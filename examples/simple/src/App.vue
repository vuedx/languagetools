<script lang="ts">
import Foo from './Foo.vue';
import { defineComponent, ref } from 'vue';
import Bar from './Bar.vue';

export default defineComponent({
  components: {
    Foo,
    Bar
  },
  props: {
    count: Number
  },
  setup() {
    return {
      items: [] as string[],
      foo: ref(''),
      bar: ref(''),
    }
  }
})
</script>

<template>
  <div>
    {{ count * 2 }}

    <Bar v-for="(item, index) of items">
      <div :id="item">
        <Foo :index="index" :item="item" :count="count" v-model:foo="foo" v-model:bar="bar"/>="bar" />
      </div>
    </Bar>
  </div>
</template>
