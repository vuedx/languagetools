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
    it('should extract expression as a function in setup()', async () => {
      await testRefactor({
        inputFile: abs(`src/extract-function/sample1.before.vue`),
        outputFile: abs(`src/extract-function/sample1.after.vue`),
        refactorName: 'vue:extract-method',
        actionName: '{"target":"setupMethods"}',
        triggerPositionPrefixText: 'data-value="foo + two + three',
        renamePositionPrefixText: 'data-value="',
      })
    })
  })

  async function testRefactor({
    inputFile,
    outputFile,
    refactorName,
    actionName,
    triggerPositionPrefixText,
    renamePositionPrefixText,
    triggerSpan = 0,
  }: {
    inputFile: string
    outputFile: string
    refactorName: string
    actionName: string
    triggerPositionPrefixText: string
    renamePositionPrefixText: string
    triggerSpan?: number
  }): Promise<void> {
    await server.sendCommand('updateOpen', {
      openFiles: [{ file: inputFile, projectRootPath: projectPath }],
    })

    const start = await findPositionOrThrowIn(
      inputFile,
      triggerPositionPrefixText,
      triggerPositionPrefixText.length,
    )
    const end = await findPositionOrThrowIn(
      inputFile,
      triggerPositionPrefixText,
      triggerPositionPrefixText.length + triggerSpan,
    )
    const position = {
      file: start.file,
      startLine: start.line,
      startOffset: start.offset,
      endLine: end.line,
      endOffset: end.offset,
    }

    const refactors = await server.sendCommand('getApplicableRefactors', {
      ...position,
    })

    expect(refactors.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: refactorName,
          actions: expect.arrayContaining([
            expect.not.objectContaining({
              name: actionName,
              notApplicableReason: expect.any(String),
            }),
            expect.objectContaining({
              name: actionName,
            }),
          ]),
        }),
      ]),
    )

    const response = await server.sendCommand('getEditsForRefactor', {
      ...position,
      refactor: refactorName,
      action: actionName,
    })

    const renamePosition = await findPositionOrThrowIn(
      outputFile,
      renamePositionPrefixText,
      renamePositionPrefixText.length,
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
  }
})
