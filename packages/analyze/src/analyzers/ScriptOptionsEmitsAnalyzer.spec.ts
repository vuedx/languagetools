import { createAnalyzer } from '../analyzer'
import { ScriptBlockAnalyzer } from './ScriptBlockAnalyzer'
import {
  EmitsOptionsAnalyzer,
  ImplicitEmitsAnalyzer,
} from './ScriptOptionsEmitsAnalyzer'
import { TemplateBlockAnalyzer } from './TemplateBlockAnalyzer'

describe('script/emits', () => {
  const analyzer = createAnalyzer([
    ScriptBlockAnalyzer,
    TemplateBlockAnalyzer,
    EmitsOptionsAnalyzer,
    ImplicitEmitsAnalyzer,
  ])

  test('array emits', () => {
    const info = analyzer.analyzeScript(`
      export default {
        emits: ['foo', 'bar']
      }
    `)

    expect(info.emits).toHaveLength(2)
    expect(info.emits[0]).toMatchObject({
      name: 'foo',
    })
    expect(info.emits[1]).toMatchObject({
      name: 'bar',
    })
  })

  test('object emits', () => {
    const info = analyzer.analyzeScript(`
      export default {
        emits: {
          foo: null,
          bar: () => {}
        }
      }
    `)

    expect(info.emits).toHaveLength(2)
    expect(info.emits[0]).toMatchObject({
      name: 'foo',
    })
    expect(info.emits[1]).toMatchObject({
      name: 'bar',
    })
  })

  test('emit types', () => {
    const info = analyzer.analyzeScript(
      `
      import Def, { Named } from 'external'
      type Type = { foo: string } & Named
      export interface Inter {}
      
      interface Twice {
        foo: string
      }

      interface Twice {
        bar: string
      }

      export default {
        emits: {
          foo: (event) => {},
          bar: function (a, b, c) {},
          baz(event: number) {},
          bam: (event: Def | Named | Type | Inter) => {},
          twice: (event: Twice) => {}
        }
      }
    `,
      'anonymous.ts',
    )

    expect(info.emits).toHaveLength(5)
    expect(info.emits[0]).toMatchObject({
      name: 'foo',
      type: [
        {
          kind: 'expression',
          imports: [],
          expression: '(event: any) => void',
        },
      ],
    })
    expect(info.emits[1]).toMatchObject({
      name: 'bar',
      type: [
        {
          kind: 'expression',
          imports: [],
          expression: '(a: any, b: any, c: any) => void',
        },
      ],
    })
    expect(info.emits[2]).toMatchObject({
      name: 'baz',
      type: [
        {
          kind: 'expression',
          imports: [],
          expression: '(event: number) => void',
        },
      ],
    })
    expect(info.emits[3]).toMatchObject({
      name: 'bam',
      type: [
        {
          kind: 'expression',
          imports: [
            { moduleName: 'external', localName: 'Def' },
            { moduleName: 'external', localName: 'Named', exportName: 'Named' },
            {
              moduleName: 'anonymous.vue',
              localName: 'Inter',
              exportName: 'Inter',
            },
          ],
          expression:
            '(event: Def | Named | ({ foo: string; } & Named) | Inter) => void',
        },
      ],
    })
    expect(info.emits[4]).toMatchObject({
      name: 'twice',
      type: [
        {
          kind: 'expression',
          imports: [],
          expression:
            '(event: (({ foo: string; }) & ({ bar: string; }))) => void',
        },
      ],
    })
  })

  test('infer from $emit in script', () => {
    const info = analyzer.analyzeScript(
      `
      export default {
        created() {
          this.$emit('init')
        },
        methods: {
          onClick() {
            this.$emit('click', event)
          },
          onDoubleClick() {
            this.$emit('click', one, two as { id: number })
          },
          onUser(name) {
            this.$emit('user:' + name, [1, 'Alex'])
          }
        }
      }
    `,
      'anonymous.ts',
    )

    expect(info.emits).toHaveLength(3)
    expect(info.emits[0]).toEqual(
      expect.objectContaining({
        name: 'init',
        isInferred: true,
        references: expect.arrayContaining([expect.anything()]),
        type: [{ kind: 'expression', imports: [], expression: '() => void' }],
      }),
    )
    expect(info.emits[1]).toEqual(
      expect.objectContaining({
        name: 'click',
        isInferred: true,
        references: expect.arrayContaining([
          expect.anything(),
          expect.anything(),
        ]),
        type: [
          {
            kind: 'expression',
            imports: [],
            expression: '(arg0: any, arg1: { id: number; }) => void',
          },
          {
            kind: 'expression',
            imports: [],
            expression: '(arg0: any) => void',
          },
        ],
      }),
    )
    expect(info.emits[2]).toEqual(
      expect.objectContaining({
        name: `'user:' + name`,
        isInferred: true,
        isDynamic: true,
        references: expect.arrayContaining([expect.anything()]),
        type: [
          {
            kind: 'expression',
            imports: [],
            expression: '(arg0: [number,string]) => void',
          },
        ],
      }),
    )
  })

  test('infer from $emit in template', () => {
    const info = analyzer.analyzeTemplate(
      `
      <button @click="$emit('close')">Close</button>
      <input type="text" @input="$emit('typing', $event.target.value, 2)" />
    `,
    )

    expect(info.emits).toHaveLength(2)
    expect(info.emits[0]).toEqual(
      expect.objectContaining({
        name: 'close',
        isInferred: true,
        references: expect.arrayContaining([expect.anything()]),
        type: [{ kind: 'expression', imports: [], expression: '() => void' }],
      }),
    )
    expect(info.emits[1]).toEqual(
      expect.objectContaining({
        name: 'typing',
        isInferred: true,
        references: expect.arrayContaining([expect.anything()]),
        type: [
          {
            kind: 'expression',
            imports: [],
            expression: '(arg0: any, arg1: number) => void',
          },
        ],
      }),
    )
  })

  test('defineEmit array emits', () => {
    const info = analyzer.analyzeScript(
      `
      import { defineEmit } from 'vue'
      
      const emit = defineEmit(['foo', 'bar'])
    `,
      undefined,
      'scriptSetup',
    )

    expect(info.emits).toHaveLength(2)
    expect(info.emits[0]).toMatchObject({
      name: 'foo',
    })
    expect(info.emits[1]).toMatchObject({
      name: 'bar',
    })
  })

  test('defineEmit object emits', () => {
    const info = analyzer.analyzeScript(
      `
      import { defineEmit } from 'vue'
        
      const emit = defineEmit({
          foo: null,
          bar: () => {}
      })
    `,
      undefined,
      'scriptSetup',
    )

    expect(info.emits).toHaveLength(2)
    expect(info.emits[0]).toMatchObject({
      name: 'foo',
    })
    expect(info.emits[1]).toMatchObject({
      name: 'bar',
    })
  })

  test('defineEmit emit types', () => {
    const info = analyzer.analyzeScript(
      `
      import { defineEmit } from 'vue'
      import Def, { Named } from 'external'
      type Type = { foo: string } & Named
      export interface Inter {
        inter: string
      }
      
      interface Twice {
        foo: string
      }

      interface Twice {
        bar: string
      }

      const emit = defineEmit({
        foo: (event) => {},
        bar: function (a, b, c) {},
        baz(event: number) {},
        bam: (event: Def | Named | Type | Inter) => {},
        twice: (event: Twice) => {}
      })
    `,
      'anonymous.ts',
      'scriptSetup',
    )

    expect(info.emits).toHaveLength(5)
    expect(info.emits[0]).toMatchObject({
      name: 'foo',
      type: [
        {
          kind: 'expression',
          imports: [],
          expression: '(event: any) => void',
        },
      ],
    })
    expect(info.emits[1]).toMatchObject({
      name: 'bar',
      type: [
        {
          kind: 'expression',
          imports: [],
          expression: '(a: any, b: any, c: any) => void',
        },
      ],
    })
    expect(info.emits[2]).toMatchObject({
      name: 'baz',
      type: [
        {
          kind: 'expression',
          imports: [],
          expression: '(event: number) => void',
        },
      ],
    })
    expect(info.emits[3]).toMatchObject({
      name: 'bam',
      type: [
        {
          kind: 'expression',
          imports: [
            { moduleName: 'external', localName: 'Def' },
            { moduleName: 'external', localName: 'Named', exportName: 'Named' },
          ],
          expression:
            '(event: Def | Named | ({ foo: string; } & Named) | ({ inter: string; })) => void',
        },
      ],
    })
    expect(info.emits[4]).toMatchObject({
      name: 'twice',
      type: [
        {
          kind: 'expression',
          imports: [],
          expression:
            '(event: (({ foo: string; }) & ({ bar: string; }))) => void',
        },
      ],
    })
  })
})
