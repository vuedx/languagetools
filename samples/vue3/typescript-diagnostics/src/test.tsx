import { defineComponent } from 'vue'
import { PropType, defineProps } from 'vue'

const props = defineProps({
  a: { type: String, required: true },
  b: Number,
  c: null as unknown as PropType<{ foo?: string }>
})

type __VueDX__props = typeof props
const __VueDX__FixtureScriptSetup = defineComponent((props: __VueDX__props) => {
  return {}
})

function __VueDX__render() {
  const _ctx = new __VueDX__FixtureScriptSetup()

  return <div onAbort={($event) => {
    $event.composedPath()
    _ctx.c?.foo?.toString()
  }}>{_ctx.a}</div>
}

function __VueDX__slots() {
  return <div
        /*foo*/
        ></div> 
}


export default class extends __VueDX__FixtureScriptSetup {
 
}
