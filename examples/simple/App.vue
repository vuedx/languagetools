<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import Bar, { Baz } from './Bar.vue'
export const Name = 'name'

export default defineComponent({
  components: { Bar, Baz },
  props: {
    foo: String,
    bar: Number,
  },
  setup(props) {
    const bar = ref(props.foo)
    const baz = computed(() => bar.value)
    props.foo + props.bar
    
    watch(() => props.foo, foo => {
      bar.value = props.foo
    })

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
      {{ foo + bam }}
      It works.
      {{ foo + b }} 
    </p>
    <Bar />
  </div>
</template>

<docs lang="md">
# Heading
</docs>