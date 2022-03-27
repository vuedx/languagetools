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
      import { __VueDX_Slots } from \\"./Example.vue+vue&type=template&lang\\"
      import { __VueDX_DefineComponent as _Self } from \\"./Example.vue+vue&type=script&setup&lang\\"
      export * from \\"./Example.vue+vue&type=script&setup&lang\\"

      class Example {
        $props!: InstanceType<typeof _Self>['$props']
        $slots!: __VueDX_Slots
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
      ;/*<vuedx:ts-competions-target/>*/
      export const __VueDX_components =
      /*<vuedx:templateGlobals>*/
      {
        Foo: Foo
      }
      /*</vuedx:templateGlobals>*/
      ;
      export const __VueDX_directives = {};
      export const __VueDX_expose = {};
      export const __VueDX_DefineComponent = VueDX.internal.defineSetupComponent({}, {},
      /*<vuedx:templateGlobals>*/
      {
        val: val
      }
      /*</vuedx:templateGlobals>*/
      , {});
      /*</vuedx:diagnosticsIgnore>*/
      "
    `)

    expect(doc.getDoc(doc.descriptor.template!)?.generated?.getText())
      .toMatchInlineSnapshot(`
      "/*<vuedx:diagnosticsIgnore>*/
      import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from './Example.vue+vue&type=script&setup&lang'
      type __VueDX_Self = InstanceType<typeof Example>
      /*<vuedx:templateGlobals>*/
      const Foo = VueDX.internal.resolveComponent(__VueDX_components, \\"Foo\\" as const, \\"Foo\\" as const);
      /*</vuedx:templateGlobals>*/
      export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
        /*<vuedx:templateGlobals>*/
        let val = __VueDX_ctx.val;
        /*</vuedx:templateGlobals>*/
        /*<vuedx:tsx-competions-target/>*/<></>;
        __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
      function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
        let val = __VueDX_ctx.val;
        return VueDX.internal.flat([])
      }
      export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
      /*</vuedx:diagnosticsIgnore>*/
      "
    `)
  })

  test(`multiple style blocks`, () => {
    const doc = VueSFCDocument.create(
      '/foo/bar/Example.vue',
      `
        <style>
        .red {}
        </style>
        <style>
        .green {}
        </style>
      `,
    )

    expect(doc.descriptor.styles).toHaveLength(2)
    const a = doc.getBlockId(doc.descriptor.styles[0])
    const b = doc.getBlockId(doc.descriptor.styles[1])
    expect(a).not.toBe(b)
    expect(doc.getDocById(a)?.source.getText().trim()).toEqual('.red {}')
    expect(doc.getDocById(b)?.source.getText().trim()).toEqual('.green {}')
  })

  test(`copied source`, () => {
    const doc = VueSFCDocument.create(
      '/foo/bar/Example.vue',
      `
        <script setup lang="ts">
          defineProps<{ foo: string }>()
        </script>
      `,
    )

    const block = doc.getDoc(doc.descriptor.scriptSetup!)!
    const offset = block.source.getText().indexOf('foo')
    const offsetInCopied = block.generated!.getText().lastIndexOf('foo')

    expect(offsetInCopied).not.toEqual(offset)
    expect(block.isOffsetInCopiedZone(offsetInCopied)).toBe(true)
    expect(block.findOriginalOffsetAt(offsetInCopied)).toBe(offset)
  })
})
