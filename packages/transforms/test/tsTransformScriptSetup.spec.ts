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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      const _ScriptSetup_internalProps = {};
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});
      const _ScriptSetup_props = defineProps({});
      const _ScriptSetup_emits = ({});
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      defineProps({
        bar: String
      })

      const foo = ref(0)
      const _ScriptSetup_internalProps = defineProps({
        bar: String
      });
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});
      const _ScriptSetup_props = defineProps({
        bar: String
      });
      const _ScriptSetup_emits = ({});
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      defineProps<{
        bar: string
      }>()

      const foo = ref(0)
      const _ScriptSetup_internalProps = defineProps<{
        bar: string
      }>();
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});
      const _ScriptSetup_props = defineProps<{
        bar: string
      }>();
      const _ScriptSetup_emits = ({});
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<{
        bar: string
      } & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' })

      const foo = ref(0)
      const _ScriptSetup_internalProps = withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' });
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});
      const _ScriptSetup_props = defineProps({
        bar: String
      });
      const _ScriptSetup_emits = ({});
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      const props = defineProps({
        bar: String
      })
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof props)=> {});
      const _ScriptSetup_props = props;
      const _ScriptSetup_emits = ({});
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      const props = withDefaults(defineProps({
        bar: String
      }), { bar: 'baz' })
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof props)=> {});
      const _ScriptSetup_props = defineProps({
        bar: String
      });
      const _ScriptSetup_emits = ({});
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      defineEmits(['bar'])
      const _ScriptSetup_internalProps = {};
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});
      const _ScriptSetup_props = defineProps({});
      const _ScriptSetup_emits = (['bar']);
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      const emits = defineEmits(['bar'])
      const _ScriptSetup_internalProps = {};
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});
      const _ScriptSetup_props = defineProps({});
      const _ScriptSetup_emits = (['bar']);
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      const emits = defineEmits({
        bar: (arg: string) => typeof arg === 'string'
      })
      const options = {}
      const _ScriptSetup_internalProps = {};
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});
      const _ScriptSetup_props = defineProps({});
      const _ScriptSetup_emits = ({
        bar: (arg: string) => typeof arg === 'string'
      });
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<typeof _ScriptSetup_emits>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
      function _ScriptSetup_scope() {
      const foo = ref(0)
      defineEmits<{
        (event: 'bar', arg: string) => boolean
      }>()
      const _ScriptSetup_internalProps = {};
      const _ScriptSetup_ComponentPrivate = _defineComponent((_: typeof _ScriptSetup_internalProps)=> {});
      const _ScriptSetup_props = defineProps({});
      const _ScriptSetup_emits = ({} as unknown as VueDX.internal.EmitTypeToEmits<{
        (event: 'bar', arg: string) => boolean
      }>);
      class _ScriptSetup_Component {
      $props = null as unknown as VueDX.internal.MergeAttrs<typeof _ScriptSetup_props & VueDX.internal.EmitsToProps<VueDX.internal.EmitTypeToEmits<{
        (event: 'bar', arg: string) => boolean
      }>>, typeof undefined>;
      $slots = null as unknown as VueDX.internal.Slots<ReturnType<typeof undefined>>;
      }
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
