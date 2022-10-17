import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
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
  return { ...ctx, ["IfElseIf"]: IfElseIf }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type
  let $slots = __VueDX__ctx.$slots
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
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();
//#endregion
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class IfElseIf {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion
