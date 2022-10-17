import { Position } from 'vscode-languageserver-textdocument'
import { createEditorContext, getProjectPath } from '../support/helpers'
import { TestServer } from '../support/TestServer'

describe('completions', () => {
  const server = new TestServer()
  const service = createEditorContext(
    server,
    getProjectPath('typescript-diagnostics'),
  )

  beforeAll(
    async () =>
      await server.sendCommand('configure', {
        preferences: {
          providePrefixAndSuffixTextForRename: true,
          allowRenameOfImportPath: true,
          includePackageJsonAutoImports: 'auto',
        },
      }),
  )

  afterAll(async () => await server.close())

  test('can detect slot types in generic component', async () => {
    const editor = await service.open('src/test-generic-component.vue')
    const types: Record<string, Position> = {
      string: { line: 5, character: 33 },
      number: { line: 8, character: 29 },
      Date: { line: 11, character: 38 },
    }

    for (const [type, position] of Object.entries(types)) {
      await editor.setCursor(position)
      const result = await server.sendCommand(
        'quickinfo',
        editor.fileAndLocation,
      )
      expect(result.body?.displayString).toBe(`(parameter) value: ${type}`)
    }
  })
})
