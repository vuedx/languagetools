import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

import { defineComponent } from 'vue'
const __VueDX___Script_Component =  defineComponent({
  data: () => ({ foo: 'string' }),
})
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["TsScriptTemplate"]: TsScriptTemplate }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let console = __VueDX__ctx.console
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const TsScriptTemplatePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class TsScriptTemplate extends TsScriptTemplatePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion
