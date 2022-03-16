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

    expect(Array.from(doc.getActiveTSDocIDs())).toHaveLength(2)

    expect(doc.getTypeScriptText()).toMatchInlineSnapshot(`
      "import 'vuedx~runtime'
      import 'vuedx~project-runtime'
      import { _Slots } from \\"./Example.vue+vue&type=template&lang\\"
      import _Self from \\"./Example.vue+vue&type=script&setup&lang\\"
      export * from \\"./Example.vue+vue&type=script&setup&lang\\"

      class Example {
        $props!: InstanceType<typeof _Self>['$props']
        $slots!: _Slots
      }
      export default Example
      "
    `)

    expect(doc.getDoc(doc.descriptor.scriptSetup!)?.generated?.getText())
      .toMatchInlineSnapshot(`
      "
              import Foo from './foo'

              const val = $ref(1)
              ;
      /*<vuedx:diagnosticsIgnore>*/
      ;
      /*<vuedx:templateGlobals>*/
      export const __VueDX_components = {
        Foo: Foo
      };
      export const __VueDX_directives = {};
      export default VueDX.internal.defineSetupComponent({}, {}, {
        val: val
      }, {});
      /*</vuedx:templateGlobals>*/
      /*</vuedx:diagnosticsIgnore>*/
      "
    `)

    expect(doc.getDoc(doc.descriptor.template!)?.generated?.getText())
      .toMatchInlineSnapshot(`
      "/*<vuedx:diagnosticsIgnore>*/
      import Example, { __VueDX_components, __VueDX_directives } from './Example.vue+vue&type=script&setup&lang'
      type _Self = InstanceType<typeof Example>
      const Foo = VueDX.internal.resolveComponent(__VueDX_components, \\"Foo\\" as const, \\"Foo\\" as const);
      export function _render(_ctx: _Self): any {
        /*<vuedx:templateGlobals>*/
        let val = _ctx.val;
        /*</vuedx:templateGlobals>*/
        /*<vuedx:tsx-competions-target/>*/<></>;
        _ctx./*<vuedx:ts-competions-target/>*/$;
        /*</vuedx:diagnosticsIgnore>*/

        return (
          <Foo.Bar>
            {VueDX.internal.checkSlots(Foo.Bar, {
              default: () => {
                return (
                  <>
                    {VueDX.internal.checkInterpolation(val)}
                  </>
                )
              },
            })}
          </Foo.Bar>
        )
      }
      /*<vuedx:diagnosticsIgnore>*/
      function _slots(_ctx: _Self) {
        let val = _ctx.val;
        return VueDX.internal.flat([])
      }
      export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
      /*</vuedx:diagnosticsIgnore>*/
      "
    `)
  })
})
