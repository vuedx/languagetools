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

              import Foo from './foo'
      function __VueDX_ScriptSetup_scope() {

              const val = $ref(1)
              
      const __VueDX_ScriptSetup_internalProps = {};
      const __VueDX_ScriptSetup_ComponentPrivate = __VueDX_defineComponent((_: typeof __VueDX_ScriptSetup_internalProps)=> {});
      const __VueDX_ScriptSetup_props = defineProps({});
      const __VueDX_ScriptSetup_emits = ({});
      class __VueDX_ScriptSetup_Component {
      $props = null as unknown as __VueDX_TypeCheck.internal.MergeAttrs<typeof __VueDX_ScriptSetup_props & __VueDX_TypeCheck.internal.EmitsToProps<typeof __VueDX_ScriptSetup_emits>, typeof __VueDX__attrs>;
      $slots = null as unknown as __VueDX_TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
      }

      //#endregion
      function __VueDX_RegisterSelf<T>(ctx: T) {
        return { ...ctx, ["Example"]: Example }
      }
      const __VueDX_ctx = __VueDX_RegisterSelf(new __VueDX_ScriptSetup_ComponentPrivate())
      //#region <template>
      /*<vuedx:templateGlobals>*/
      const __VueDX__get_identifier_val = () => __VueDX_TypeCheck.internal.unref(val);
      const __VueDX__get_identifier_Foo = () => __VueDX_TypeCheck.internal.unref(Foo);
      /*</vuedx:templateGlobals>*/
      function __VueDX_render() {
        /*<vuedx:templateGlobals>*/
        let val = __VueDX__get_identifier_val();
        let $slots = __VueDX_ctx.$slots
        /*</vuedx:templateGlobals>*/
        /*<vuedx:templateGlobals>*/
        const Foo = __VueDX__get_identifier_Foo();
        /*</vuedx:templateGlobals>*/
        return (
          <>
            <Foo.Bar
              /*<vuedx:tsx-completions-target/>*/
            $slots={{
                default: () => {
                  return (
                    <>
                       {val} 
                    </>
                  )
                },
              }}>

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
      return {__VueDX_ScriptSetup_Component};};
      const {__VueDX_ScriptSetup_Component} = __VueDX_ScriptSetup_scope();
      //#region public component definition
      export default class Example {
       $props = {...(new (__VueDX_ScriptSetup_scope().__VueDX_ScriptSetup_Component)).$props, $slots: (new (__VueDX_ScriptSetup_scope().__VueDX_ScriptSetup_Component)).$slots };
      }
      //#endregion
      "
    `)
  })
})
