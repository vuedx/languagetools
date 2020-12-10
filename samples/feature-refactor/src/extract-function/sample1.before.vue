<script>
import { ref, defineComponent } from 'vue'
import { useFn } from '../useFn'

export default defineComponent({
  props: { foo: Number },
  setup() {
    const one = ref(1)
    const { two, three, four, five } = useFn()

    return { two, three, four, five }
  },
})
</script>

<template>
  <div :data-value="foo + two + three + four.foo + five.foo"></div>
</template>
