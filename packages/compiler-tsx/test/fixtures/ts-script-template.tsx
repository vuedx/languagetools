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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
          if(!($event.currentTarget instanceof HTMLDivElement)) throw new Error;
          console.log
          }, 
          () => {
          if(!($event.currentTarget instanceof HTMLDivElement)) throw new Error;
          console.log
          }, 
          () => {
          if(!($event.currentTarget instanceof HTMLDivElement)) throw new Error;
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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class TsScriptTemplate {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion
