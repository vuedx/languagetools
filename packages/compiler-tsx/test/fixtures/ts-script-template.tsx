import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent } from 'vue';

const __VueDX__Script_Component = defineComponent({
  data: () => ({
    foo: 'string'
  })
});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "TsScriptTemplate" as const;
  return { ...arg0, [key]: TsScriptTemplate };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let console = __VueDX__ctx.console
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div

        class={{ foo: foo }}
        innerHTML={foo}
        {...({[foo]: true})}
        {...(foo)}
        onClick={__VueDX__TypeCheck.internal.first([
          () => {
          console.log
          }, 
          () => {
          console.log
          }, 
          () => {
          console.log
          }, 
        ])}
        /*<vuedx:tsx-completions-target/>*/
      >
        {foo}
      </div>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let console = __VueDX__ctx.console
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();

//#endregion
//#region public component definition
export default class TsScriptTemplate {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion
