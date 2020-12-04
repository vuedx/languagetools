import { createAnalyzer } from '../analyzer'
import { ScriptBlockAnalyzer } from './ScriptBlockAnalyzer'

describe('script', () => {
  const analyzer = createAnalyzer([ScriptBlockAnalyzer])

  test('empty', () => {
    const info = analyzer.analyzeScript(`
      export default {}
    `)

    expect(info.options).toBeTruthy()
  })

  test('define component options', () => {
    const info = analyzer.analyzeScript(`
      import { defineComponent } from 'vue'
      
      export default defineComponent({})
    `)

    expect(info.options).toBeTruthy()
  })

  test('define component setup', () => {
    const info = analyzer.analyzeScript(`
      import { defineComponent } from 'vue'
      
      export default defineComponent(() => {})
    `)

    expect(info.options).toBe(undefined)
    expect(info.setup).toBeTruthy()
  })

  test('define props', () => {
    const info = analyzer.analyzeScript(
      `
      import { defineProps } from 'vue'
      
      const props = defineProps({ name: String })
    `,
      undefined,
      'scriptSetup',
    )

    expect(info.options).toBe(undefined)
    expect(info.setup).toBe(undefined)
    expect(info.scriptSetup).toBeTruthy()
    expect(info.scriptSetup?.defineProps).toBeTruthy()
  })

  test('define emit', () => {
    const info = analyzer.analyzeScript(
      `
      import { defineEmit } from 'vue'
      
      const emit = defineEmit({ name: String })
    `,
      undefined,
      'scriptSetup',
    )

    expect(info.options).toBe(undefined)
    expect(info.setup).toBe(undefined)
    expect(info.scriptSetup).toBeTruthy()
    expect(info.scriptSetup?.defineEmit).toBeTruthy()
  })
})
