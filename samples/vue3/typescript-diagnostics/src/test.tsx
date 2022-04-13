/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as VBind, __VueDX_components, __VueDX_directives } from './v-bind.vue+vue&type=script&setup&lang'
type __VueDX_Self = InstanceType<typeof VBind>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let bar = __VueDX_ctx.bar;
  let value = __VueDX_ctx.value;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input onChange={VueDX.internal.checkOnDirective("input" as const, "change" as const, /*<vuedx:missingExpression>*/undefined, {""/*<vuedx:directiveCompletion/>*/:true})}  data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input value={bar} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input value={bar} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input value={bar} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input value={bar} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input {...({ [value]: bar, })} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input {...({ [value]: bar, })} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input {...({ [value]: bar, })} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input {...({ [value]: bar, })} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let bar = __VueDX_ctx.bar;
  let value = __VueDX_ctx.value;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/
