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
      "//#region <script>
      import { defineComponent as __VueDX_defineComponent } from 'vue';
      export const __VueDX_Component = __VueDX_defineComponent({});
      //#endregion
      const __VueDX_ctx = new __VueDX_Component()
      //#region <template>
      import * as __VueDX_TypeCheck  from 'vuedx~runtime';
      export function __VueDX_render() {
        /*<vuedx:templateGlobals>*/
        let val = __VueDX_ctx.val;
        /*</vuedx:templateGlobals>*/
        return (
          <>
            <Foo.Bar
              /*<vuedx:tsx-competions-target/>*/
            >
              {{
                default: () => {
                  return (
                    <>
                      {val}
                    </>
                  )
                },
              }}
            </Foo.Bar>
          </>
        )
      }
      /*<vuedx:diagnosticsIgnore>*/
      function __VueDX_slots() {
        /*<vuedx:templateGlobals>*/
        let val = __VueDX_ctx.val;
        /*</vuedx:templateGlobals>*/
        return __VueDX_TypeCheck.internal.flat([
        ])
      }
      /*</vuedx:diagnosticsIgnore>*/
      //#endregion
      //#region public component definition
      export default class extends __VueDX_Component {
        $slots: ReturnType<typeof __VueDX_slots>
      }
      //#endregion
      "
    `)
  })
})
