import { first, trimIndent } from '@vuedx/shared'
import { createEditorContext, getProjectPath } from '../support/helpers'
import { TestServer } from '../support/TestServer'

describe('definition', () => {
  const server = new TestServer()
  const ctx = createEditorContext(
    server,
    getProjectPath('typescript-diagnostics'),
  )

  afterAll(async () => await server.close())

  afterEach(async () => await ctx.closeAll())

  test('can go to import source in .vue', async () => {
    const editor = await ctx.open('src/test-completions-tag.vue')

    await editor.setCursor({ line: 1, character: 31 })
    const info = await server.definitionAndBoundSpan(editor.fileAndLocation)
    expect(info.definitions).toHaveLength(1)
    expect(first(info.definitions).file).toBe(ctx.abs('src/fixture-attrs.vue'))
  })

  test('can go to import source in .ts', async () => {
    const editor = await ctx.open('src/test-goto-definition.ts')

    await editor.setCursor({ line: 0, character: 31 })
    const info = await server.definitionAndBoundSpan(editor.fileAndLocation)
    expect(info.definitions).toHaveLength(1)
    expect(first(info.definitions).file).toBe(ctx.abs('src/fixture-attrs.vue'))
  })

  test('script + plain object', async () => {
    const editor = await ctx.open('src/test.vue')

    await editor.type(
      trimIndent(`
      <script>
        import FixtureAttrs from './fixture-attrs.vue'
        export default {
          components: {
            FixtureAttrs,
          },
        }
      </script>
      <template>
        <FixtureAttrs />
      </template>
    `),
    )

    await editor.setCursor({ line: 9, character: 4 })
    const info = await server.definitionAndBoundSpan(editor.fileAndLocation)
    expect(info.definitions).toHaveLength(1)
    expect(first(info.definitions).file).toBe(ctx.abs('src/fixture-attrs.vue'))
  })

  test('script + define component', async () => {
    const editor = await ctx.open('src/test.vue')

    await editor.type(
      trimIndent(`
      <script>
        import FixtureAttrs from './fixture-attrs.vue'
        import { defineComponent } from 'vue'
        export default defineComponent({
          components: {
            FixtureAttrs,
          },
        })
      </script>
      <template>
        <FixtureAttrs />
      </template>
    `),
    )

    await editor.setCursor({ line: 10, character: 4 })
    const info = await server.definitionAndBoundSpan(editor.fileAndLocation)
    expect(info.definitions).toHaveLength(1)
    expect(first(info.definitions).file).toBe(ctx.abs('src/fixture-attrs.vue'))
  })
  
  // TODO: support local component
  test.skip('script + define component + alias', async () => {
    const editor = await ctx.open('src/test.vue')

    await editor.type(
      trimIndent(`
      <script>
        import Foo from './fixture-attrs.vue'
        import { defineComponent } from 'vue'
        export default defineComponent({
          components: {
            FixtureAttrs: Foo,
          },
        })
      </script>
      <template>
        <FixtureAttrs />
      </template>
    `),
    )

    await editor.setCursor({ line: 10, character: 4 })
    const info = await server.definitionAndBoundSpan(editor.fileAndLocation)
    expect(info.definitions).toHaveLength(1)
    expect(first(info.definitions).file).toBe(ctx.abs('src/fixture-attrs.vue'))
  })

  test('script setup + import', async () => {
    const editor = await ctx.open('src/test.vue')

    await editor.type(
      trimIndent(`
      <script setup>
        import FixtureAttrs from './fixture-attrs.vue'
      </script>
      <template>
        <FixtureAttrs />
      </template>
    `),
    )

    await editor.setCursor({ line: 4, character: 4 })
    const info = await server.definitionAndBoundSpan(editor.fileAndLocation)
    expect(info.definitions).toHaveLength(1)
    expect(first(info.definitions).file).toBe(ctx.abs('src/fixture-attrs.vue'))
  })
  
  test('script + script setup + import', async () => {
    const editor = await ctx.open('src/test.vue')

    await editor.type(
      trimIndent(`
      <script>
        import FixtureAttrs from './fixture-attrs.vue'
      </script>
      <script setup>
        const a = FixtureAttrs
      </script>
      <template>
        <FixtureAttrs />
      </template>
    `),
    )

    await editor.setCursor({ line: 7, character: 4 })
    const info = await server.definitionAndBoundSpan(editor.fileAndLocation)
    expect(info.definitions).toHaveLength(1)
    expect(first(info.definitions).file).toBe(ctx.abs('src/fixture-attrs.vue'))
  })


})
