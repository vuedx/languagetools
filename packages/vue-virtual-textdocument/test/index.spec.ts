import { VueSFCDocument } from '../src'

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
    )

    expect(doc.getText()).toMatchInlineSnapshot(`
      "/** @jsx __VueDX_JSX.createElement */
      import * as __VueDX_JSX from 'vue';
      import * as __VueDX_TypeCheck from 'vuedx~runtime';
      //#region <script>

      function __VueDX_RegisterSelf<T extends {}>(arg0: T) {
        const key = \\"Example\\" as const;
        return { ...arg0, [key]: Example };
      }
      //#endregion
      //#region <script setup>
      import { defineComponent as __VueDX_defineComponent } from \\"vue\\";
      import Foo from './foo';

      const __VueDX_SetupComponent = __VueDX_defineComponent(__VueDX_arg0 => {
        const val = $ref(1);

        /*<vuedx:setupGlobals>*/
        return {
          Foo,
          val
        };
        /*</vuedx:setupGlobals>*/
      });
      //#endregion
      const __VueDX_ctx = __VueDX_RegisterSelf(new __VueDX_SetupComponent())
      //#region <template>
      export function __VueDX_render() {
        /*<vuedx:templateGlobals>*/
        let val = __VueDX_ctx.val;
        /*</vuedx:templateGlobals>*/
        /*<vuedx:templateGlobals>*/
        const Foo.Bar = __VueDX_TypeCheck.internal.resolveComponent({} as unknown as __VueDX_JSX.GlobalComponents, {} as unknown as __VueDX_JSX.JSX.IntrinsicElements, __VueDX_ctx, null, \\"Foo\\" as const, \\"Foo\\" as const);
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
      /*<vuedx:diagnosticsIgnore>*/
      function __VueDX_slots() {
        /*<vuedx:templateGlobals>*/
        let val = __VueDX_ctx.val;
        /*</vuedx:templateGlobals>*/
        return __VueDX_TypeCheck.internal.union(__VueDX_TypeCheck.internal.flat([
        ]))
      }
      /*</vuedx:diagnosticsIgnore>*/

      //#endregion
      //#region public component definition
      export default class Example {
        $props = null as unknown as typeof __VueDX_ctx.$props;
        $slots = null as unknown as __VueDX_TypeCheck.internal.Slots<ReturnType<typeof __VueDX_slots>>;
      }
      //#endregion
      "
    `)
  })
})
