<script lang="ts">
import Bar, { Foo, Baz } from './Bar.vue'
import { defineComponent, ref, computed } from 'vue'

export const Name = 'name'

const newLocal = ref<string>('foo bar')
export default defineComponent({
  components: { Bar, Baz },
  props: {
    foo: String,
    bar: Number,
  },
  setup(props) {
    const foo = newLocal
    const bar = computed(() => foo.value)

    return {
      foo: bar,
      bar: props.bar,
    }
  },
})
</script>

<template>
  <div>
    <p>
      It works and stays in sync.
    </p>
  </div>
</template>
