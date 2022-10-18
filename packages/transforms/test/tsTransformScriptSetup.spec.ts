import { transformScriptSetup } from '../src/tsTransformScriptSetup'
import * as typescript from 'typescript/lib/tsserverlibrary'
import { trimIndent } from '@vuedx/shared'

expect.addSnapshotSerializer({
  test: () => true,
  print: (val) => trimIndent(`${val}`),
})

describe(transformScriptSetup, () => {
  function compile(code: string) {
    return transformScriptSetup(trimIndent(code), {
      fileName: '/foo/bar/example.vue',
      internalIdentifierPrefix: '_',
      lang: 'ts',
      runtimeModuleName: 'vue',
      typeIdentifier: 'VueDX',
      lib: typescript,
      attrsIdentifier: '_attrs',
      slotsIdentifier: '_slots',
    })
  }

  it('works', () => {
    expect(() => compile('')).not.toThrow()
  })

  it('should hoist imports', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
    `)

    expect(code.indexOf('_ScriptSetup_scope')).toBeGreaterThan(
      code.indexOf(`import { ref } from 'vue'`),
    )
    expect(code.indexOf('_ScriptSetup_scope')).toBeLessThan(
      code.indexOf('const foo = ref(0)'),
    )
  })

  it('should transform script setup with props (no variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      defineProps({
        bar: String
      })
    `)

    expect(code).toEqual(
      expect.stringContaining(
        `const _ScriptSetup_internalProps = defineProps({`,
      ),
    )
    expect(code).toEqual(
      expect.stringContaining(
        `const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});`,
      ),
    )
  })

  it('should transform script setup with props with types', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      defineProps<{
        bar: string
      }>()
    `)

    expect(code).toEqual(
      expect.stringContaining(`const _ScriptSetup_props = defineProps<{`),
    )
  })

  it('should transform script setup with props with defaults (with variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' })
    `)

    expect(code).toEqual(
      expect.stringContaining(
        `const _ScriptSetup_internalProps = withDefaults(defineProps({`,
      ),
    )

    expect(code).toEqual(
      expect.stringContaining(`const _ScriptSetup_props = defineProps({`),
    )
  })

  it('should transform script setup with props (with variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      const props = defineProps({
        bar: String
      })
    `)

    expect(code).toEqual(
      expect.stringContaining(
        `const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof props)=> {});`,
      ),
    )
  })

  it('should detect all symbols', () => {
    const { identifiers } = compile(`
      import { aNamedImport, type TypeNamedImport } from 'vue'
      import * as aNamespaceImport from 'vue'
      import aDefaultImport from './A.vue'
      import type TypeDefaultImport from './B.vue'
      import type * as TypeNamespaceImport from './C.vue'
      
      var aVar = 0
      let aLet: Ref<number> | number = 0
      const aConst = ref(0)
      enum aEnum {}
      const {aDestructuredProperty} = {}
      const [aDestructuredArray] = []
      function aFunction() {}
      class aClass {}
      interface TypeInterface {}
      type TypeType = {}
      namespace aNamespace {
        export const aConst = 0
      }
    `)

    expect(identifiers).toEqual([
      {
        kind: 'function',
        name: 'aFunction',
      },
      {
        kind: 'externalMaybeRef',
        name: 'aNamedImport',
      },
      {
        kind: 'externalMaybeRef',
        name: 'aNamespaceImport',
      },
      {
        kind: 'external',
        name: 'aDefaultImport',
      },
      {
        kind: 'variable',
        name: 'aVar',
      },
      {
        kind: 'maybeRef',
        name: 'aLet',
      },
      {
        kind: 'maybeRef',
        name: 'aConst',
      },
      {
        kind: 'enum',
        name: 'aEnum',
      },
      {
        kind: 'maybeRef',
        name: 'aDestructuredProperty',
      },
      {
        kind: 'maybeRef',
        name: 'aDestructuredArray',
      },
      {
        kind: 'class',
        name: 'aClass',
      },
    ])
  })
})
