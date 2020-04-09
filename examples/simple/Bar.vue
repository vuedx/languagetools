<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
export const Baz = 5
export default defineComponent({
  props: {
    foo: String,
    bar: Number,
  },
  setup(props) {
    const val = ref<string>('foo x bar')
    const di = computed(() => props)
    const di = computed(() => props.bar)

    return {
      bar: props.bar in props,
    }
  },
  components: {},
})
</script>

<template>
  <div />
</template>
