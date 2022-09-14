/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "NestedForSlot" as const;
  return { ...arg0, [key]: NestedForSlot };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
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
              /*<vuedx:tsx-completions-target/>*/
            >
              {
                __VueDX__ctx.$slots['default']?.({
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
                      /*<vuedx:tsx-completions-target/>*/
                    >
                      {
                        __VueDX__ctx.$slots["other"]?.({
                          ...(props),
                          myProp: item,
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
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
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
                myProp: item,
              },
            }
          ))
        )
      ))
    ),
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class NestedForSlot {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion
