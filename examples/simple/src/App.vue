<script lang="ts">
import FooComponent from './FooComponent.vue';
import Foo from './Foo.vue';
import { defineComponent, ref } from 'vue';
import Bar from './Bar.vue';

export default defineComponent({
  components: {
    FooComponent,
    Foo,
    Bar
  },
  setup(props: { count: number }) {
    return {
      items: [] as string[],
      newFoo: ref(''),
      newBar: ref(''),
    }
  }
})
</script>

<template>
  <div>
    {{ count }}

    <Bar v-for="(newItem, ind) of items">
      <FooComponent :item="newItem" :bar="1" />

       {{ newBar  }}
    </Bar>
  </div>
</template>
