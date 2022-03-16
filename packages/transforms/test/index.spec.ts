import type * as T from '@babel/types'
import { parse } from '@babel/parser'
import generate from '@babel/generator'
import {
  createExportDeclarationForComponents,
  createExportDeclarationForDirectives,
  createExportDeclarationForScriptSetup,
  findScopeBindings,
} from '../src'

const getAST = (code: string) =>
  parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'importAssertions'],
  }) as T.File

const getCode = (node: T.Node) =>
  generate(node as any, { compact: false, concise: false, minified: false })
    .code

describe('findScopeBindings', () => {
  test(`imports`, () => {
    const ast = getAST(
      `
      import { a } from 'a'
      import { b as c } from 'b'
      import * as d from 'd'
      import { default as e } from 'e'
      import f, { g } from 'f'
      import h from 'h'
      import type i from 'i'
      import type { j } from 'j'
      import k from 'k.css' assert { type: 'text/css' }
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'c', 'd', 'e', 'f', 'g', 'h', 'k']),
    )
  })

  test(`declarations`, () => {
    const ast = getAST(
      `
      var a, b = {}
      let c, d = {}
      const e, f = {}
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'b', 'c', 'd', 'e', 'f']),
    )
  })

  test(`destructure object`, () => {
    const ast = getAST(
      `
      const { 
          a, 
          b = a, 
          c: { d }, 
          e: [f], 
          g: { h: { i } },
          [a + d]: k,
          ...j
      } = {}
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'b', 'd', 'f', 'i', 'j', 'k']),
    )
  })

  test(`destructure array`, () => {
    const ast = getAST(
      `
      const [ 
          a, 
          b = a, 
          { d }, 
          [f], 
          { h: { i } },
          ...j
      ] = []
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'b', 'd', 'f', 'i', 'j']),
    )
  })

  test(`functions`, () => {
    const ast = getAST(
      `
      function a() {}
      const b = function() {}
      const c = () => {}
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['a', 'b', 'c']),
    )
  })
  test(`ignore types`, () => {
    const ast = getAST(
      `
      type a = {}
      interface b {}
      abstract class c {}
      declare const d: string
      declare function e(): void
      enum f { }
      const enum g { }
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(
      expect.arrayContaining(['c', 'd', 'e', 'f', 'g']),
    )
  })

  test(`ignore nested`, () => {
    const ast = getAST(
      `
      function a() {
        const b = {}
      }
      `,
    )

    expect(findScopeBindings(ast)).toMatchObject(expect.arrayContaining(['a']))
  })
})

describe('createExportDeclarationForComponents', () => {
  test(`plain object`, () => {
    const ast = getAST(`
      import Foo from './foo.vue'

      export default {
        components: {
          Foo,
          Bar: Foo,
        }
      }
    `)

    const node = createExportDeclarationForComponents(ast)

    expect(getCode(node)).toMatchInlineSnapshot(`
      "export const __VueDX_components = {
        Foo,
        Bar: Foo
      };"
    `)
  })

  test(`local reference`, () => {
    const ast = getAST(`
      import Foo from './foo.vue'

      const components = {
        Foo,
        Bar: Foo,
      }

      export default {
        components
      }
    `)

    const node = createExportDeclarationForComponents(ast)

    expect(getCode(node)).toMatchInlineSnapshot(
      `"export const __VueDX_components = components;"`,
    )
  })
  test(`defineComponent`, () => {
    const ast = getAST(`
      import Foo from './foo.vue'

      export default defineComponent({
        components: {
          Foo,
          Bar: Foo,
        }
      })
    `)

    const node = createExportDeclarationForComponents(ast)

    expect(getCode(node)).toMatchInlineSnapshot(`
      "export const __VueDX_components = {
        Foo,
        Bar: Foo
      };"
    `)
  })

  test(`no components`, () => {
    const ast = getAST(`
      export default {
      
      }
    `)

    const node = createExportDeclarationForComponents(ast)

    expect(getCode(node)).toMatchInlineSnapshot(
      `"export const __VueDX_components = {};"`,
    )
  })

  test(`script setup`, () => {
    const ast = getAST(`
      import { Foo } from 'foo'
      import { bar as Bar, fooBar } from 'foo'
    `)

    const node = createExportDeclarationForComponents(ast, {
      isScriptSetup: true,
    })

    expect(getCode(node)).toMatchInlineSnapshot(`
"export const __VueDX_components = {
  Foo: Foo,
  Bar: Bar
};"
`)

    createExportDeclarationForComponents.evict(ast)

    const node3 = createExportDeclarationForComponents(ast, {
      isScriptSetup: true,
      shouldIncludeScriptSetup: (id) => id !== 'Foo',
    })

    expect(getCode(node3)).toMatchInlineSnapshot(`
"export const __VueDX_components = {
  Bar: Bar
};"
`)
  })
})

describe('createExportDeclarationForDirectives', () => {
  test(`plain object`, () => {
    const ast = getAST(`
      import Foo from './foo.vue'

      export default {
        directives: {
          Foo,
          Bar: Foo,
        }
      }
    `)

    const node = createExportDeclarationForDirectives(ast)

    expect(getCode(node)).toMatchInlineSnapshot(`
      "export const __VueDX_directives = {
        Foo,
        Bar: Foo
      };"
    `)
  })

  test(`local reference`, () => {
    const ast = getAST(`
      import Foo from './foo.vue'

      const directives = {
        Foo,
        Bar: Foo,
      }

      export default {
        directives
      }
    `)

    const node = createExportDeclarationForDirectives(ast)

    expect(getCode(node)).toMatchInlineSnapshot(
      `"export const __VueDX_directives = directives;"`,
    )
  })
  test(`defineComponent`, () => {
    const ast = getAST(`
      import Foo from './foo.vue'

      export default defineComponent({
        directives: {
          Foo,
          Bar: Foo,
        }
      })
    `)

    const node = createExportDeclarationForDirectives(ast)

    expect(getCode(node)).toMatchInlineSnapshot(`
      "export const __VueDX_directives = {
        Foo,
        Bar: Foo
      };"
    `)
  })

  test(`no components`, () => {
    const ast = getAST(`
      export default {
      
      }
    `)

    const node = createExportDeclarationForDirectives(ast)

    expect(getCode(node)).toMatchInlineSnapshot(
      `"export const __VueDX_directives = {};"`,
    )
  })

  test(`script setup`, () => {
    const ast = getAST(`
      import { vFoo, vbaz } from 'foo'
      import { bar as vBar } from 'foo'
    `)

    const node = createExportDeclarationForDirectives(ast, {
      isScriptSetup: true,
    })

    expect(getCode(node)).toMatchInlineSnapshot(`
"export const __VueDX_directives = {
  vFoo: vFoo,
  vBar: vBar
};"
`)

    createExportDeclarationForDirectives.evict(ast)

    const node3 = createExportDeclarationForDirectives(ast, {
      isScriptSetup: true,
      shouldIncludeScriptSetup: (id) => id !== 'vFoo',
    })

    expect(getCode(node3)).toMatchInlineSnapshot(`
"export const __VueDX_directives = {
  vBar: vBar
};"
`)
  })
})

describe('createExportDeclarationForScriptSetup', () => {
  test('simple script setup', () => {
    const ast = getAST(`
      const foo = 1
      const { bar } = ref(2)
    `)

    const node = createExportDeclarationForScriptSetup(ast)

    expect(getCode(node)).toMatchInlineSnapshot(`
"export default VueDX.internal.defineSetupComponent({}, {}, {
  foo: foo,
  bar: bar
}, {});"
`)
  })

  test('defineX imported', () => {
    const ast = getAST(`
      import { defineProps, defineEmits as e } from 'vue'

      e({
        click: () => true
      })

      const props = defineProps<{ foo: string }>()
    `)

    const node = createExportDeclarationForScriptSetup(ast)

    expect(getCode(node)).toMatchInlineSnapshot(`
"export default VueDX.internal.defineSetupComponent(props, e({
  click: () => true
}), {
  defineProps: defineProps,
  e: e,
  props: props
}, {});"
`)
  })

  test('defineX', () => {
    const ast = getAST(`
      defineEmits({
        click: () => true
      })

      const props = defineProps<{ foo: string }>()
    `)

    const node = createExportDeclarationForScriptSetup(ast)

    expect(getCode(node)).toMatchInlineSnapshot(`
"export default VueDX.internal.defineSetupComponent(props, defineEmits({
  click: () => true
}), {
  props: props
}, {});"
`)
  })
})
