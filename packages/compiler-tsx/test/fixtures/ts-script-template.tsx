/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>

import { defineComponent } from 'vue'

export const __VueDX__Component = defineComponent({
  data: () => ({ foo: 'string' }),
})

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "TsScriptTemplate" as const;
  return { ...arg0, [key]: TsScriptTemplate };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let console = __VueDX__ctx.console;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        staticClass="foo bar"
        "class"={{ foo: foo }}
        "innerHTML"={foo}
        {...({[foo]: true})}
        {...(foo)}
        onClick={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "click" as const, () => {
          console.log
          }, {  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "click" as const, () => {
          console.log
          }, { "left": true as const,  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "click" as const, () => {
          console.log
          }, { "right": true as const,  });
        }}
        /*<vuedx:tsx-completions-target/>*/
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
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class TsScriptTemplate {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion
