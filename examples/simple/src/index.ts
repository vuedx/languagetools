
import { h, computed, defineComponent, ref, watch } from 'vue'
import Bar, { Baz } from './NewBar.vue'
export const Name = 'name'

const Ctx = defineComponent({
  components: { Bar },
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
      newDummy: bar,
      bar: props.bar,
    }
  },
})

export function render(_ctx: InstanceType<typeof Ctx>) {
  return h('div', null, [
    _ctx.newDummy > 5 ? h('p', null, [
      _ctx.newDummy + _ctx.bam, 'It works', _ctx.newDummy + _ctx.bar + _ctx.ba
    ]) : null,
    h(Bar, { foo: 5 })
  ])
}
