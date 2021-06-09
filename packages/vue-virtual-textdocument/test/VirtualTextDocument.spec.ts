/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  RenderFunctionTextDocument as RenderFunctionDocument,
  VueTextDocument,
} from '../src/documents/VueTextDocument'
import { RENDER_SELECTOR, SCRIPT_SETUP_BLOCK_SELECTOR } from '../src/types'

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
    expect(doc.getDocument(RENDER_SELECTOR).getText()).toEqual(
      expect.stringContaining(`export function render(`),
    )
  })

  test(`can find soure position from generated`, () => {
    const source = doc.descriptor.template!.content
    const render = doc.getDocument(RENDER_SELECTOR)
    const start = render.getText().indexOf('/*@@vue:start*/')
    let offset = render.getText().indexOf('foo.bar', start)
    {
      const original = render.getOriginalOffsetAt(offset)!.offset
      expect(source.substr(original, 7)).toBe('foo.bar')
      expect(render.tryGetSourceOffset(offset)).toBe(original)
    }

    {
      const original = render.getOriginalOffsetAt(offset + 4)!.offset
      expect(source.substr(original, 3)).toBe('bar')
      expect(render.tryGetSourceOffset(offset + 4)).toBe(original)
    }

    offset = render.getText().indexOf('foo.bar', offset + 1)
    {
      const original = render.getOriginalOffsetAt(offset)!.offset
      expect(source.substr(original, 7)).toBe('foo.bar')
      expect(render.tryGetSourceOffset(offset)).toBe(original)
    }
    {
      const original = render.getOriginalOffsetAt(offset + 4)!.offset
      expect(source.substr(original, 3)).toBe('bar')
      expect(render.tryGetSourceOffset(offset + 4)).toBe(original)
    }

    offset = render.getText().indexOf('foos', start)
    {
      const original = render.getOriginalOffsetAt(offset)!.offset
      expect(source.substr(original, 4)).toBe('foos')
      expect(render.tryGetSourceOffset(offset)).toBe(original)
    }
  })

  test(`can find generated position from source`, () => {
    const source = doc.descriptor.template!.content
    const render = doc.getDocument(RENDER_SELECTOR)
    const code = render.getText()
    const offset = source.indexOf('foo.bar')
    {
      const original = render.getGeneratedOffsetAt(offset)!.offset
      expect(code.substr(original, 7)).toBe('foo.bar')
      expect(render.tryGetGeneratedOffset(offset)).toBe(original)
    }
    {
      const original = render.getGeneratedOffsetAt(offset + 4)!.offset
      expect(code.substr(original, 3)).toBe('bar')
      expect(render.tryGetGeneratedOffset(offset + 4)).toBe(original)
    }
    {
      const original = render.getGeneratedOffsetAt(offset + 10)!.offset
      expect(code.substr(original, 3)).toBe('bar')
      expect(render.tryGetGeneratedOffset(offset + 10)).toBe(original)
    }
  })
})

describe('ScriptSetup', () => {
  test(`generate default export of script setup`, () => {
    const doc = VueTextDocument.create(
      'file:///component.vue',
      'vue',
      0,
      [
        '<script setup>', // Line 1
        `import { defineEmit, defineProps, computed, ref, reactive } from 'vue'`, // Line 2
        `const props = defineProps(['foo', 'bar'])`,
        `const emit = defineEmit(['update'])`,
        `const state = reactive({ foo: props.foo, bar: '' })`,
        `const num = ref('')`,
        `const numSquare = computed(() => num.value * num.value)`,
        `function click() {`,
        `  const foo = ''`,
        `  emit('update', foo)`,
        `}`,
        `const bar = ''`,
        '</script>', // Line 4
      ].join('\n'),
    )
    expect(doc.getDocument(SCRIPT_SETUP_BLOCK_SELECTOR).getText())
      .toMatchInlineSnapshot(`
      "              
      import { defineEmit, defineProps, computed, ref, reactive } from 'vue'
      const props = defineProps(['foo', 'bar'])
      const emit = defineEmit(['update'])
      const state = reactive({ foo: props.foo, bar: '' })
      const num = ref('')
      const numSquare = computed(() => num.value * num.value)
      function click() {
        const foo = ''
        emit('update', foo)
      }
      const bar = ''

      /*@@vuedx:script-setup-export*/
      // @ts-ignore
      import { defineComponent as _VueDX_defineComponent } from 'vue'
      // @ts-ignore
      export default _VueDX_defineComponent(/** @param {typeof props} _VueDX_props*/(_VueDX_props) => ({state,num,numSquare,click,bar}))
      "
    `)
  })
  test(`generate default export of script setup`, () => {
    const doc = VueTextDocument.create(
      'file:///component.vue',
      'vue',
      0,
      [
        `<script lang="ts" setup>`,
        `import { ref, computed, defineProps } from 'vue'`,
        `import HelloWorld from './components/HelloWorld.vue'`,
        ``,
        `const p = defineProps<{ name?: string, email: string, code?: number}>()`,
        ``,
        `const one = ref(1)`,
        `const two = computed(() => one.value * 2)`,
        ``,
        `function increase() {`,
        `  one.value += 1`,
        `}`,
        ``,
        `function decrease() {`,
        `  one.value -= 1`,
        `}`,
        `</script>`,
      ].join('\n'),
    )
    expect(doc.getDocument(SCRIPT_SETUP_BLOCK_SELECTOR).getText())
      .toMatchInlineSnapshot(`
      "                        
      import { ref, computed, defineProps } from 'vue'
      import HelloWorld from './components/HelloWorld.vue'

      const p = defineProps<{ name?: string, email: string, code?: number}>()

      const one = ref(1)
      const two = computed(() => one.value * 2)

      function increase() {
        one.value += 1
      }

      function decrease() {
        one.value -= 1
      }

      /*@@vuedx:script-setup-export*/
      // @ts-ignore
      import { defineComponent as _VueDX_defineComponent } from 'vue'
      // @ts-ignore
      export default _VueDX_defineComponent((_VueDX_props: typeof p) => ({HelloWorld,one,two,increase,decrease}))
      "
    `)
  })
})
