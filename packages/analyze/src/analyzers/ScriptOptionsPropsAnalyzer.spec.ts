import { createAnalyzer } from '../analyzer'
import { ScriptBlockAnalyzer } from './ScriptBlockAnalyzer'
import { PropsOptionsAnalyzer } from './ScriptOptionsPropsAnalyzer'

describe('script/props', () => {
  const analyzer = createAnalyzer([ScriptBlockAnalyzer, PropsOptionsAnalyzer])

  test('array props', () => {
    const info = analyzer.analyzeScript(`
      export default {
        props: ['foo', 'bar']
      }
    `)

    expect(info.props).toHaveLength(2)
    expect(info.props[0]).toMatchObject({
      name: 'foo',
    })
    expect(info.props[1]).toMatchObject({
      name: 'bar',
    })
  })

  test('object props', () => {
    const info = analyzer.analyzeScript(`
      export default {
        props: {
          foo: String,
          bar: {
            type: String,
            required: true
          }
        }
      }
    `)

    expect(info.props).toHaveLength(2)
    expect(info.props[0]).toMatchObject({
      name: 'foo',
      required: false,
    })
    expect(info.props[1]).toMatchObject({
      name: 'bar',
    })
  })

  test('prop types', () => {
    const info = analyzer.analyzeScript(`
      export default {
        props: {
          foo: String,
          bar: [String, Number, Boolean],
          baz: {
            type: Number,
          },
          bam: {
            type: [String, Number, Object],
          }
        }
      }
    `)

    expect(info.props).toHaveLength(4)
    expect(info.props[0]).toMatchObject({
      name: 'foo',
      type: [
        {
          kind: 'string',
        },
      ],
    })
    expect(info.props[1]).toMatchObject({
      name: 'bar',
      type: [
        {
          kind: 'string',
        },
        {
          kind: 'number',
        },
        {
          kind: 'boolean',
        },
      ],
    })
    expect(info.props[2]).toMatchObject({
      name: 'baz',
      type: [
        {
          kind: 'number',
        },
      ],
    })
    expect(info.props[3]).toMatchObject({
      name: 'bam',
      type: [
        {
          kind: 'string',
        },
        {
          kind: 'number',
        },
        {
          kind: 'expression',
          imports: [],
          expression: 'object',
        },
      ],
    })
  })

  test('defineProps array', () => {
    const info = analyzer.analyzeScript(`
      import { defineProps } from 'vue'

      const props = defineProps(['foo', 'bar'])
    `)

    expect(info.props).toHaveLength(2)
    expect(info.props).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'foo' }),
        expect.objectContaining({ name: 'bar' }),
      ]),
    )
  })

  test('defineProps object', () => {
    const info = analyzer.analyzeScript(`
      import { defineProps } from 'vue'

      const props = defineProps({
        foo: null,
        bar: {
          type: String
        }
      })
    `)

    expect(info.props).toHaveLength(2)
    expect(info.props).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'foo' }),
        expect.objectContaining({ name: 'bar' }),
      ]),
    )
  })

  test('defineProps prop types', () => {
    const info = analyzer.analyzeScript(`
      import { defineProps } from 'vue'

      const props = defineProps({
        foo: String,
        bar: [String, Number, Boolean],
        baz: {
          type: Number,
        },
        bam: {
          type: [String, Number, Object],
        }
      })
    `)

    expect(info.props).toHaveLength(4)
    expect(info.props).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'foo', type: [{ kind: 'string' }] }),
        expect.objectContaining({
          name: 'bar',
          type: [{ kind: 'string' }, { kind: 'number' }, { kind: 'boolean' }],
        }),
        expect.objectContaining({ name: 'baz', type: [{ kind: 'number' }] }),
        expect.objectContaining({
          name: 'bam',
          type: [
            { kind: 'string' },
            { kind: 'number' },
            { kind: 'expression', imports: [], expression: 'object' },
          ],
        }),
      ]),
    )
  })
})
