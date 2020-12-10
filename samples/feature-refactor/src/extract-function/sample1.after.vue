<script>
import { ref, defineComponent } from 'vue'
import { useFn } from '../useFn'

export default defineComponent({
  props: { foo: Number },
  setup(props) {
    const one = ref(1)
    const { two, three, four, five } = useFn()

    function newFunction() {
      return props.foo + two.value + three.value + four.value.foo + five.foo;
    }

    return { newFunction, two, three, four, five }
  },
})
</script>

<template>
  <div :data-value="newFunction()"></div>
</template>
