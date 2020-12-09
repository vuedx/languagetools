import Path from 'path'
import {
  codeEditToTextEdit,
  findPositionOrThrowIn,
  getTextDocument,
  toNormalizedPath,
} from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'
import { TextDocument } from 'vscode-languageserver-textdocument'

describe('rename', () => {
  const projectPath = toNormalizedPath(
    Path.resolve(__dirname, '../../samples/feature-refactor'),
  )

  function abs(fileName: string): string {
    return toNormalizedPath(Path.resolve(projectPath, fileName))
  }

  let server: TestServer
  beforeAll(async () => {
    server = new TestServer()

    await server.sendCommand('configure', {
      preferences: {
        providePrefixAndSuffixTextForRename: true,
        allowRenameOfImportPath: true,
      },
      watchOptions: {},
    })
    await server.sendCommand('compilerOptionsForInferredProjects', {
      options: {
        allowJs: true,
        checkJs: true,
        allowNonTsExtensions: true,
        jsx: 'preserve' as any,
      },
    })
  })
  afterEach(async () => await server.flush())
  afterAll(async () => await server.close())

  describe('extract-method', () => {
    test('', async () => {
      const inputFile = abs(`src/extract-function/sample1.before.vue`)
      const outputFile = abs(`src/extract-function/sample1.after.vue`)
      await server.sendCommand('updateOpen', {
        openFiles: [{ file: inputFile, projectRootPath: projectPath }],
      })

      const position = await findPositionOrThrowIn(
        inputFile,
        'data-value="foo + two + three',
        'data-value="foo + two + three'.length,
      )
      const refactors = await server.sendCommand('getApplicableRefactors', {
        ...position,
      })

      expect(refactors.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: 'vue:extract-method',
            actions: expect.arrayContaining([
              expect.not.objectContaining({
                name: '{"target":"setupMethods"}',
                notApplicableReason: expect.any(String),
              }),
              expect.objectContaining({
                name: '{"target":"setupMethods"}',
              }),
            ]),
          }),
        ]),
      )

      const response = await server.sendCommand('getEditsForRefactor', {
        ...position,
        refactor: 'vue:extract-method',
        action: '{"target":"setupMethods"}',
      })

      const renamePosition = await findPositionOrThrowIn(
        outputFile,
        ':data-value="',
        ':data-value="'.length,
      )
      expect(response.body?.renameFilename).toBe(inputFile)
      expect(response.body?.renameLocation).toEqual(
        // Start of extracted expression.
        { line: renamePosition.line, offset: renamePosition.offset },
      )

      expect(response.body?.edits).toHaveLength(1)
      const edit = response.body!.edits[0]
      expect(edit.fileName).toBe(inputFile)

      const content = TextDocument.applyEdits(
        await getTextDocument(inputFile),
        edit.textChanges.map(codeEditToTextEdit),
      )

      expect((await getTextDocument(outputFile)).getText()).toEqual(content)
    })
  })
})
