import { h as _h, renderList as _renderList, Fragment as _Fragment } from "vue"
import _Ctx from './App.vue'
import _component_Bar from './Bar.vue'


export function render(_ctx: InstanceType<typeof _Ctx>) {
  return _h("div", {}, [
    (_ctx.bar)
      ? _h("p", {}, [_ctx.bar + _ctx.bam, " It works. ", _ctx.bar + _ctx.value + _ctx.value + _ctx.foo + _ctx.$el])
      : null,
    _h(_component_Bar, {
      foo: 5,
      onClick: $event => { _ctx.value = $event }
    }, {}),
    _h(_Fragment, _renderList([1, 3, 10], (item, index) => {
      return _h("div", {
        key: '' + index
      }, [item, " ", _ctx.foo])
    }))
  ])
}