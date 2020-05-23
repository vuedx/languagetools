<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export const Baz = 5

export default defineComponent({
  props: {
    foo: String,
    bar: Number
  },
  setup(props) {
    const val = ref<string>('foo x bar')
    const ex = computed(() => props.foo)

    return {
      isBar: props.bar in props,
    }
  }
})
</script>

<template>
  <div>{{ foo }} {{ bar }} </div>
</template>
