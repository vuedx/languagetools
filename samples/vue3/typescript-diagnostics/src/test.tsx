/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Attrs, __VueDX_components, __VueDX_directives } from './attrs.vue+vue&type=script&setup&lang'
type __VueDX_Self = InstanceType<typeof Attrs>
/*<vuedx:templateGlobals>*/
const A = VueDX.internal.resolveComponent(__VueDX_components, "A" as const, "A" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let console = __VueDX_ctx.console;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <A type="submit" onClick={VueDX.internal.checkOnDirective(A, "click" as const, ($event) => {
        console.log($event)
      }, {})}  />
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let console = __VueDX_ctx.console;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"A">;
/*</vuedx:diagnosticsIgnore>*/
