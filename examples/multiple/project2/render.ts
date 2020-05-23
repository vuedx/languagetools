import { defineComponent, ref, computed, Fragment as _Fragment, toDisplayString as _toDisplayString, h as _h } from "vue"
import _Ctx from './App.vue'

export interface Props {
  foo?: string
  bar?: number
}

const _component_Bar = defineComponent<Props>(
 (props) => {
    const val = ref<string>('foo x bar')
    const ex = computed(() => props.foo)

    return {
      isBar: props.bar in props,
    }
  }
)

export function render(_ctx: InstanceType<typeof _Ctx>) {
  return _h(_Fragment, [
    _h("div", {}, [
      (_ctx.dummy > 5)
        ? _h("p", {}, [_toDisplayString(_ctx.dummy + _ctx.bam), " It works. ", _toDisplayString(_ctx.dummy + _ctx.bar)])
        : null,
      _h(_component_Bar, { foo: 5 }, [])
    ])
  ])
}