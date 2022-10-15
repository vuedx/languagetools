import { transformScriptSetup } from '../src/tsTransformScriptSetup'
import * as typescript from 'typescript/lib/tsserverlibrary'

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
    })
  }

  it('works', () => {
    expect(() => compile('')).not.toThrow()
  })

  it('should transform script setup', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      const __ScriptSetup_props = defineProps({});
      const __ScriptSetup_emits = ({});
      const __ScriptSetup_expose = {};
      const __ScriptSetup_internalProps = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof __ScriptSetup_internalProps)=> {});
    `)
  })

  it('should transform script setup with props (no variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      defineProps({
        bar: String
      })
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      defineProps({
        bar: String
      })

      const foo = ref(0)
      const __ScriptSetup_internalProps = defineProps({
        bar: String
      });
      const __ScriptSetup_props = defineProps({
        bar: String
      });
      const __ScriptSetup_emits = ({});
      const __ScriptSetup_expose = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof __ScriptSetup_internalProps)=> {});
    `)
  })

  it('should transform script setup with props with types', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      defineProps<{
        bar: string
      }>()
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      defineProps<{
        bar: string
      }>()

      const foo = ref(0)
      const __ScriptSetup_internalProps = defineProps<{
        bar: string
      }>();
      const __ScriptSetup_props = defineProps<{
        bar: string
      }>();
      const __ScriptSetup_emits = ({});
      const __ScriptSetup_expose = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof __ScriptSetup_internalProps)=> {});
    `)
  })

  it('should transform script setup with props with defaults (with variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' })
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' })

      const foo = ref(0)
      const __ScriptSetup_internalProps = withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' });
      const __ScriptSetup_props = defineProps({
        bar: String
      });
      const __ScriptSetup_emits = ({});
      const __ScriptSetup_expose = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof __ScriptSetup_internalProps)=> {});
    `)
  })

  it('should transform script setup with props (with variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      const props = defineProps({
        bar: String
      })
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      const props = defineProps({
        bar: String
      })
      const __ScriptSetup_props = props;
      const __ScriptSetup_emits = ({});
      const __ScriptSetup_expose = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof props)=> {});
    `)
  })

  it('should transform script setup with props with defaults (with variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      const props = withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' })
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      const props = withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' })
      const __ScriptSetup_props = defineProps({
        bar: String
      });
      const __ScriptSetup_emits = ({});
      const __ScriptSetup_expose = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof props)=> {});
    `)
  })

  it('should transform script setup with emits (no variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      defineEmits(['bar'])
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      defineEmits(['bar'])
      const __ScriptSetup_props = defineProps({});
      const __ScriptSetup_emits = (['bar']);
      const __ScriptSetup_expose = {};
      const __ScriptSetup_internalProps = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof __ScriptSetup_internalProps)=> {});
    `)
  })

  it('should transform script setup with emits (with variable)', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      const emits = defineEmits(['bar'])
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      const emits = defineEmits(['bar'])
      const __ScriptSetup_props = defineProps({});
      const __ScriptSetup_emits = (['bar']);
      const __ScriptSetup_expose = {};
      const __ScriptSetup_internalProps = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof __ScriptSetup_internalProps)=> {});
    `)
  })

  it('should transform script setup with emits (with variable) with options', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      const emits = defineEmits({
        bar: (arg: string) => typeof arg === 'string'
      })
      const options = {}
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      const emits = defineEmits({
        bar: (arg: string) => typeof arg === 'string'
      })
      const options = {}
      const __ScriptSetup_props = defineProps({});
      const __ScriptSetup_emits = ({
        bar: (arg: string) => typeof arg === 'string'
      });
      const __ScriptSetup_expose = {};
      const __ScriptSetup_internalProps = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof __ScriptSetup_internalProps)=> {});
    `)
  })

  it('should transform script setup with emits (with variable) with interface', () => {
    const { code } = compile(`
      import { ref } from 'vue'
      const foo = ref(0)
      defineEmits<{
        (event: 'bar', arg: string) => boolean
      }>()
    `)

    expect(code).toMatchInlineSnapshot(`
      import { ref } from 'vue'
      const __ScriptSetup_scope = VueDX.internal.scope(async () => {
      const foo = ref(0)
      defineEmits<{
        (event: 'bar', arg: string) => boolean
      }>()
      const __ScriptSetup_props = defineProps({});
      const __ScriptSetup_emits = ({} as unknown as VueDX.internal.EmitTypeToEmits<{
        (event: 'bar', arg: string) => boolean
      }>);
      const __ScriptSetup_expose = {};
      const __ScriptSetup_internalProps = {};
      const __ScriptSetup_Component = _defineComponent((_: typeof __ScriptSetup_internalProps)=> {});
    `)
  })

  it('should detect all symbols', () => {
    const { identifiers } = compile(`
      import { aNamedImport, type TypeNamedImport } from 'vue'
      import * as aNamespaceImport from 'vue'
      import aDefaultImport from './A.vue'
      import type TypeDefaultImport from './B.vue'
      import type * as TypeNamespaceImport from './C.vue'
      
      var aVar = 0
      let aLet = 0
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

    expect(identifiers.sort()).toEqual([
      // False positives
      'TypeDefaultImport',
      'TypeNamedImport',
      'TypeNamespaceImport',
      // True positives
      'aClass',
      'aConst',
      'aDefaultImport',
      'aDestructuredArray',
      'aDestructuredProperty',
      'aEnum',
      'aFunction',
      'aLet',
      'aNamedImport',
      'aNamespaceImport',
      'aVar',
    ])
  })
})

function trimIndent(str: string) {
  const lines = str.trim().split('\n')
  const size = lines
    .slice(1)
    .reduce(
      (size, line) => Math.min(size, /^[ ]*/.exec(line)?.[0].length ?? 0),
      Infinity,
    )

  return [lines[0], ...lines.slice(1).map((line) => line.slice(size))].join(
    '\n',
  )
}
