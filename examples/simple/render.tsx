import { h as _h } from "vue"
import _Ctx from './App.vue'
import _component_Bar from './Bar.vue'


export function render(_ctx: InstanceType<typeof _Ctx>) {
  return (
    <div>{(_ctx.dummy > 5)
      ? <p>{ _ctx.dummy + _ctx.bam } It works. { _ctx.dummy + _ctx.bar + _ctx.ba }</p>
      : null}<_component_Bar {...{ foo: 5 }}></_component_Bar></div>)
}

