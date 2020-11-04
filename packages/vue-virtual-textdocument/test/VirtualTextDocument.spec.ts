/*  */
import {
  RenderFunctionTextDocument as RenderFunctionDocument,
  VueTextDocument,
} from '../src/documents/VueTextDocument'
import { RENDER_SELECTOR } from '../src/types'

describe('VirtualTextDocument', () => {
  const doc = VueTextDocument.create(
    'file:///component.vue',
    'vue',
    0,
    [
      '<template>', // Line 1
      '  <div> {{ foo.bar + bar }} </div>', // Line 2
      '  <div> {{ foo.bar + bam }} </div>', // Line 3
      '  <div :prop="exp1"> foo </div>', // Line 3
      '  <div v-if="exp2 > 5"> bar </div>', // Line 3
      '  <div v-for="(foo, key, index) of foos"> {{ foo + bar }} </div>', // Line 3
      '  <Bar v-slot="{ foo }"> {{ foo + bar }} </Bar>', // Line 3
      '</template>', // Line 4
      '<script lang="ts">export default {}</script>',
    ].join('\n'),
  )

  test(`render function document is created`, () => {
    expect(doc.getDocument(RENDER_SELECTOR)).toBeInstanceOf(
      RenderFunctionDocument,
    )
  })

  test(`render function is genterated`, () => {
    expect(doc.getDocument(RENDER_SELECTOR)!.getText()).toEqual(
      expect.stringContaining(`export function render(`),
    )
  })

  test(`can find soure position from generated`, () => {
    const source = doc.descriptor.template!.content
    const render = doc.getDocument(RENDER_SELECTOR)!
    const start = render.getText().indexOf('/*@@vue:start*/')
    let offset = render.getText().indexOf('foo.bar', start)
    {
      const original = render.getOriginalOffsetAt(offset)!.offset
      expect(source.substr(original, 7)).toBe('foo.bar')
    }

    {
      const original = render.getOriginalOffsetAt(offset + 4)!.offset
      expect(source.substr(original, 3)).toBe('bar')
    }

    offset = render.getText().indexOf('foo.bar', offset + 1)
    {
      const original = render.getOriginalOffsetAt(offset)!.offset
      expect(source.substr(original, 7)).toBe('foo.bar')
    }
    {
      const original = render.getOriginalOffsetAt(offset + 4)!.offset
      expect(source.substr(original, 3)).toBe('bar')
    }

    {
      const original = render.getOriginalOffsetAt(
        render.getText().indexOf('foos', start),
      )!.offset
      expect(source.substr(original, 4)).toBe('foos')
    }
  })

  test(`can find generated position from source`, () => {
    const source = doc.descriptor.template!.content
    const render = doc.getDocument(RENDER_SELECTOR)!
    const code = render.getText()
    const offset = source.indexOf('foo.bar')
    {
      const original = render.getGeneratedOffsetAt(offset)!.offset
      expect(code.substr(original, 7)).toBe('foo.bar')
    }
    {
      const original = render.getGeneratedOffsetAt(offset + 4)!.offset
      expect(code.substr(original, 3)).toBe('bar')
    }
    {
      const original = render.getGeneratedOffsetAt(offset + 10)!.offset
      expect(code.substr(original, 3)).toBe('bar')
    }
  })
})
