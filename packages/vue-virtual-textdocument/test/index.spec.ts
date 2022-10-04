import { VueSFCDocument } from '../src'
import * as typescript from 'typescript/lib/tsserverlibrary'

describe('VueSFCDocument', () => {
  beforeEach(() => {
    jest.spyOn(console, 'debug').mockImplementation(() => {})
  })

  test(`script setup + template`, () => {
    const doc = VueSFCDocument.create(
      '/foo/bar/Example.vue',
      `
        <script setup>
        import Foo from './foo'

        const val = $ref(1)
        </script>
        <template>
          <Foo.Bar>
            {{ val }}
          </Foo.Bar>
        </template>
      `,
      { typescript },
    )

    expect(doc.getText()).toMatchInlineSnapshot(`
      "import * as __VueDX_TypeCheck from 'vuedx~runtime';
      declare const __VueDX_defineComponent: typeof import("vue").defineComponent;
      type __VueDX_GlobalComponents = import("vue").GlobalComponents;
      //#region <script>

      const __VueDX__Script_Component = __VueDX_defineComponent({});
      //#endregion
      //#region <script setup>

              import Foo from './foo' ;const __VueDX__ScriptSetup_scope = __VueDX_TypeCheck.internal.scope(async () => {

              const val = $ref(1)
              
      const __VueDX__ScriptSetup_props = defineProps({});
      const __VueDX__ScriptSetup_emits = ({});
      const __VueDX__ScriptSetup_expose = {};
      const __VueDX__ScriptSetup_internalProps = {};
      const __VueDX__ScriptSetup_Component = __VueDX_defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});

      //#endregion
      function __VueDX_RegisterSelf<T>(ctx: T) {
        return { ...ctx, ["Example"]: Example }
      }
      const __VueDX_ctx = __VueDX_RegisterSelf(new __VueDX__ScriptSetup_Component())
      //#region <template>
      /*<vuedx:templateGlobals>*/
      const __VueDX__get_identifier_Foo = () => Foo;
      /*</vuedx:templateGlobals>*/
      /*<vuedx:templateGlobals>*/
      const __VueDX__get_identifier_val = () => __VueDX_TypeCheck.internal.unref(val);
      /*</vuedx:templateGlobals>*/
      function __VueDX_render() {
        /*<vuedx:templateGlobals>*/
        let val = __VueDX__get_identifier_val();
        let $slots = __VueDX_ctx.$slots
        /*</vuedx:templateGlobals>*/
        /*<vuedx:templateGlobals>*/
        const Foo = __VueDX_TypeCheck.internal.resolveComponent({} as unknown as __VueDX_GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX_ctx, __VueDX__get_identifier_Foo(), "Foo" as const, "Foo" as const);
        /*</vuedx:templateGlobals>*/
        return (
          <>
            <Foo.Bar
              /*<vuedx:tsx-completions-target/>*/
            >
              {__VueDX_TypeCheck.internal.checkSlots(Foo.Bar, {
                default: () => {
                  return (
                    <>
                      {val}
                    </>
                  )
                },
              })}
            </Foo.Bar>
          </>
        )
      }
      __VueDX_render();
      /*<vuedx:diagnosticsIgnore>*/
      function __VueDX__slots() {
        /*<vuedx:templateGlobals>*/
        let val = __VueDX__get_identifier_val();
        let $slots = __VueDX_ctx.$slots
        /*</vuedx:templateGlobals>*/
        return __VueDX_TypeCheck.internal.union(__VueDX_TypeCheck.internal.flat([
        ]))
      }
      /*</vuedx:diagnosticsIgnore>*/
      const __VueDX__attrs = (() => {
        return __VueDX_TypeCheck.internal.first(__VueDX_TypeCheck.internal.flat([{}]))
      })();
      //#endregion
      return {__VueDX__ScriptSetup_Component, __VueDX__ScriptSetup_props, __VueDX__ScriptSetup_emits, __VueDX__ScriptSetup_expose, __VueDX__attrs, __VueDX__slots, __VueDX_ctx};});
      const {__VueDX__ScriptSetup_Component, __VueDX__ScriptSetup_props, __VueDX__ScriptSetup_emits, __VueDX__ScriptSetup_expose, __VueDX__attrs, __VueDX__slots, __VueDX_ctx} = __VueDX__ScriptSetup_scope;
      //#region public component definition
      const ExamplePublic = null as unknown as new () => typeof __VueDX__ScriptSetup_expose;
      export default class Example extends ExamplePublic {
        $props = null as unknown as __VueDX_TypeCheck.internal.MergeAttrs<typeof __VueDX_ctx.$props & __VueDX_TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX__attrs>;
        $slots = null as unknown as __VueDX_TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
      }
      //#endregion
      "
    `)
  })
})
