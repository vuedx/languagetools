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
      import \\"./Example.vue?vue&type=template&lang\\"
      import _Self from \\"./Example.vue?vue&type=script&setup=true&lang\\"
      export * from \\"./Example.vue?vue&type=script&setup=true&lang\\"
      const Example = _Self
      export default Example"
    `)

    expect(doc.getDoc(doc.descriptor.scriptSetup!)?.generated?.getText())
      .toMatchInlineSnapshot(`
      "
              import Foo from './foo'

              const val = $ref(1)
              
      /*<vuedx:diagnosticsIgnore>*/
      export const __VueDX_components = {
        Foo
      };
      export const __VueDX_directives = {};
      export default VueDX.internal.defineSetupComponent({}, {}, {
        val
      }, {});
      /*</vuedx:diagnosticsIgnore>*/
      "
    `)

    expect(doc.getDoc(doc.descriptor.template!)?.generated?.getText())
      .toMatchInlineSnapshot(`
      "/*<vuedx:diagnosticsIgnore>*/
      import Example, { __VueDX_components, __VueDX_directives } from './Example.vue?vue&type=script&setup=true&lang'
      interface _Self extends InstanceType<typeof Example> {}
      const __component_Foo = VueDX.internal.resolveComponent(__VueDX_components, \\"Foo\\" as const, \\"Foo\\" as const);
      export function _render(_ctx: _Self): any {
        /*<vuedx:templateGlobals>*/
        let val = _ctx.val;
        /*</vuedx:templateGlobals>*/
        /*<vuedx:tsx-competions-target/>*/<></>;
        _ctx./*<vuedx:ts-competions-target/>*/$;
        /*</vuedx:diagnosticsIgnore>*/

        return (
          <__component_Foo.Bar>
            {VueDX.internal.checkSlots(__component_Foo.Bar, {
              default: () => {
                return (
                  <>
                    {VueDX.internal.checkInterpolation(val)}
                  </>
                )
              },
            })}
          </__component_Foo.Bar>
        )
      }
      "
    `)
  })
})
