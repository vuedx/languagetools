
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
    props.
    watch(() => props.foo, foo => {
      bar.value = props.foo
    })

    return {
      foo: bar,
      bar: props.bar,
    }
  },
})