import { Fragment as _Fragment, h as _h } from "vue"
import _Ctx from './App.vue'
import _component_Bar from './Bar.vue'

export function render(_ctx: InstanceType<typeof _Ctx>) {
  return _h(_Fragment, [
    _h("div", {}, [
      (_ctx.dummy > 5)
        ? _h("p", {}, [(_ctx.dummy + _ctx.bam), " It works. ", (_ctx.dummy + _ctx.bar + _ctx.ba)])
        : null,
      _h(_component_Bar, { foo: 5 }, [Bar])
    ])
  ])
}
