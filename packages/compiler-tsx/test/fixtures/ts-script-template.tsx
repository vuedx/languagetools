/** @jsxImportSource vue */
//#region <script>

import { defineComponent } from 'vue'

export const __VueDX__Component = defineComponent({
  data: () => ({ foo: 'string' }),
})

//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let console = __VueDX__ctx.console;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        staticClass="foo bar"
        class={{ foo: foo }}
        innerHTML={foo}
        {...({[foo]: true})}
        {...(foo)}
        onClick={$event => {
          (() => {
          console.log
          })($event);
          (() => {
          console.log
          })($event);
          (() => {
          console.log
          })($event);
        }}
        /*<vuedx:tsx-competions-target/>*/
      >
        {foo}
      </div>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let console = __VueDX__ctx.console;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  children = {} as unknown as ReturnType<typeof __VueDX__slots>
}
//#endregion
