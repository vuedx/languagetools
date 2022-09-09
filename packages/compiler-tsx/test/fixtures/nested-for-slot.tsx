//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let list = __VueDX__ctx.list;
  let props = __VueDX__ctx.props;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {
        __VueDX__TypeCheck.internal.renderList(list, (items) => {
          return (
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {
                __VueDX__ctx.$slots['default']({
                }) ?? (
                  <>
                    {"fallback content"}
                  </>
                )
              }
              {
                __VueDX__TypeCheck.internal.renderList(items, (item) => {
                  return (
                    <span
                      /*<vuedx:tsx-competions-target/>*/
                    >
                      {
                        __VueDX__ctx.$slots["other"]({
                          ...(props),
                          myProp: : item,
                        }) ?? (
                          <>
                            {"fallback content"}
                          </>
                        )
                      }
                    </span>
                  )
                })
              }
            </div>
          )
        })
      }
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let list = __VueDX__ctx.list;
  let props = __VueDX__ctx.props;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.flat([
    __VueDX__TypeCheck.internal.flat(
      __VueDX__TypeCheck.internal.renderList(list, (items) => (
        {
          default: {
          },
        }
      ))
    ),
    __VueDX__TypeCheck.internal.flat(
      __VueDX__TypeCheck.internal.renderList(list, (items) => (
        __VueDX__TypeCheck.internal.flat(
          __VueDX__TypeCheck.internal.renderList(items, (item) => (
            {
              "other": {
                ...(props),
                myProp: : item,
              },
            }
          ))
        )
      ))
    ),
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion
