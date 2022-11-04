import { first } from '@vuedx/shared'
import { createEditorContext, getProjectPath } from '../support/helpers'
import { TestServer } from '../support/TestServer'

describe('definition', () => {
  const server = new TestServer()
  const ctx = createEditorContext(
    server,
    getProjectPath('typescript-diagnostics'),
  )

  afterAll(async () => await server.close())

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
})
