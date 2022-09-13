/** @jsxImportSource vue */
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {type === 'A'
        ? <>
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {"A"}
            </div>
          </>
        : type === 'B'
        ? <>
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {"B"}
            </div>
          </>
        : type === 'C'
        ? <>
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {"C"}
            </div>
          </>
        : <>
            <div
              /*<vuedx:tsx-competions-target/>*/
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
