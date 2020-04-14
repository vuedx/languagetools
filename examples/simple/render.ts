import { Fragment as _Fragment, toDisplayString as _toDisplayString, h as _h } from "vue"
import _Ctx from './App.vue'
import _component_Bar from './Bar.vue'


export function render(_ctx: InstanceType<typeof _Ctx>) {
  return _h(_Fragment, [
    _h("div", {}, [
      _h("p", {}, [_toDisplayString(_ctx.foo + _ctx.bam), " It works and stays in sync. ", _toDisplayString(_ctx.foo + _ctx.baz)]),
      _h(_component_Bar, {}, [])
    ])
  ])
}