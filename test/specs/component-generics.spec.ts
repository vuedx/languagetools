import { Position } from 'vscode-languageserver-textdocument'
import { createEditorContext, getProjectPath } from '../support/helpers'
import { TestServer } from '../support/TestServer'

describe('component generics', () => {
  const server = new TestServer()
  const ctx = createEditorContext(
    server,
    getProjectPath('typescript-diagnostics'),
  )

  afterAll(async () => await server.close())

  test('can detect slot types in generic component', async () => {
    const editor = await ctx.open('src/test-generic-component.vue')
    const types: Record<string, Position> = {
      string: { line: 5, character: 33 },
      number: { line: 8, character: 29 },
      Date: { line: 11, character: 38 },
    }

    for (const [type, position] of Object.entries(types)) {
      await editor.setCursor(position)
      const quickInfo = await server.quickInfo(editor.fileAndLocation)
      expect(quickInfo.displayString).toBe(`(parameter) value: ${type}`)
    }
  })
})
