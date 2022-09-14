/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "IfElseIf" as const;
  return { ...arg0, [key]: IfElseIf };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {type === 'A'
        ? <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {"A"}
            </div>
          </>
        : type === 'B'
        ? <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {"B"}
            </div>
          </>
        : type === 'C'
        ? <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {"C"}
            </div>
          </>
        : <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {"Not A/B/C"}
            </div>
          </>
      }
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class IfElseIf {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion
