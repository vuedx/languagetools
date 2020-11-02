import { createAnalyzer } from '../analyzer'
import { ScriptBlockAnalyzer } from './ScriptBlockAnalyzer'
import { ComponentsOptionAnalyzer } from './ScriptOptionsComponentsAnalyzer'

describe('script/options/components', () => {
  const analyzer = createAnalyzer([
    ScriptBlockAnalyzer,
    ComponentsOptionAnalyzer,
  ])

  test('imported component in object export', () => {
    const info = analyzer.analyzeScript(`
      import Foo from './foo.vue'
      import { Bar } from 'external-library'
      import Baz from './baz.vue'

      export default {
        components: { Foo, Bar }
      }
    `)

    expect(info.components).toHaveLength(2)
    expect(info.components[0]).toMatchObject({
      name: 'Foo',
      kind: 'script',
      source: {
        moduleName: './foo.vue',
      },
    })
    expect(info.components[1]).toMatchObject({
      name: 'Bar',
      kind: 'script',
      source: {
        moduleName: 'external-library',
        exportName: 'Bar',
      },
    })
  })

  test('imported component in defineComponent', () => {
    const info = analyzer.analyzeScript(`
      import { defineComponent } from 'vue'
      import Foo from './foo.vue'
      import { Bar } from 'external-library'
      import Baz from './baz.vue'

      export default defineComponent({
        components: { Foo, Bar }
      })
    `)

    expect(info.components).toHaveLength(2)
    expect(info.components[0]).toMatchObject({
      name: 'Foo',
      kind: 'script',
      source: {
        moduleName: './foo.vue',
      },
    })
    expect(info.components[1]).toMatchObject({
      name: 'Bar',
      kind: 'script',
      source: {
        moduleName: 'external-library',
        exportName: 'Bar',
      },
    })
  })

  test('imported component and registered with different name', () => {
    const info = analyzer.analyzeScript(`
      import Foo from './foo.vue'
      import { Bar as LocalBar } from 'external-library'
      import Baz from './baz.vue'

      export default {
        components: { MyFoo: Foo, MyBar: LocalBar }
      }
    `)

    expect(info.components).toHaveLength(2)
    expect(info.components[0]).toMatchObject({
      name: 'MyFoo',
      kind: 'script',
      source: {
        moduleName: './foo.vue',
      },
    })
    expect(info.components[1]).toMatchObject({
      name: 'MyBar',
      kind: 'script',
      source: {
        moduleName: 'external-library',
        exportName: 'Bar',
      },
    })
  })
})
