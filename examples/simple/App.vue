<script lang="ts">
import Bar, { Foo, Baz } from './Bar.vue'
import { defineComponent, ref, computed } from 'vue'

export const Name = 'name'

export default defineComponent({
  components: { Bar, Baz },
  props: {
    foo: String,
    bar: Number,
  },
  setup(props) {
    const foo = newLocal
    const bar = refactor(foo)

    return {
      foo: bar,
      bar: props.bar,
    }
  },
})

function refactor(foo: any) {
  return computed(() => foo.value)
}
</script>

<template>
  <div>
    <p>
      It works and stays in sync.
    </p>
  </div>
</template>
