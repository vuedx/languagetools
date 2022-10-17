import * as _FS from 'fs'
import * as Path from 'path'
import type {
  CodeEdit,
  FileLocationRequestArgs,
  Location,
  TextSpan,
} from 'typescript/lib/protocol'
import {
  Position,
  Range,
  TextDocument,
  TextEdit,
} from 'vscode-languageserver-textdocument'
import type { Proto, TestServer } from './TestServer'

const FS = _FS.promises

export function locationToPosition(loc: Location): Position {
  return { line: loc.line - 1, character: loc.offset - 1 }
}

export function positionToLocation(pos: Position): Location {
  return { line: pos.line + 1, offset: pos.character + 1 }
}

export function codeEditToTextEdit(edit: CodeEdit): TextEdit {
  return {
    range: {
      start: locationToPosition(edit.start),
      end: locationToPosition(edit.end),
    },
    newText: edit.newText,
  }
}

export function textEditToCodeEdit(edit: TextEdit): CodeEdit {
  return {
    start: positionToLocation(edit.range.start),
    end: positionToLocation(edit.range.end),
    newText: edit.newText,
  }
}

export async function findEOFPosition(
  file: string,
): Promise<{ file: string; line: number; offset: number }> {
  const document = await getTextDocument(file)
  const position = document.positionAt(document.getText().length)

  return {
    file,
    line: position.line + 1,
    offset: position.character + 1,
  }
}
export async function findPositionOrThrowIn(
  file: string,
  text: string,
  offset: number = 0,
): Promise<{ file: string; line: number; offset: number }> {
  const position = await findPositionIn(file, text, offset)
  if (position == null) throw new Error(`"${text}" not found in "${file}"`)

  return position
}
export async function findPositionIn(
  file: string,
  text: string,
  offset: number = 0,
): Promise<{ file: string; line: number; offset: number } | undefined> {
  const document = await getTextDocument(file)
  const index = document.getText().indexOf(text)

  if (index >= 0) {
    const position = document.positionAt(index + offset)
    const loc = toLoc(position)

    return {
      file,
      ...loc,
    }
  }

  return undefined
}

function toLoc(position: Position): Location {
  return {
    line: position.line + 1,
    offset: position.character + 1,
  }
}

export async function findAllPositionsIn(
  file: string,
  text: string,
): Promise<TextSpan[]> {
  const document = await getTextDocument(file)
  const content = document.getText()
  const pos: TextSpan[] = []

  let index: number = 0
  while ((index = content.indexOf(text, index + text.length)) >= 0) {
    pos.push({
      start: toLoc(document.positionAt(index)),
      end: toLoc(document.positionAt(index + text.length)),
    })
  }

  return pos
}

const documents = new Map<string, TextDocument>()

export async function getTextDocument(file: string): Promise<TextDocument> {
  return documents.get(file) ?? (await createTextDocument(file))
}

async function createTextDocument(file: string): Promise<TextDocument> {
  const content = await FS.readFile(file, { encoding: 'utf-8' })
  const document = TextDocument.create(
    file.toString(),
    Path.posix.extname(file).slice(1),
    0,
    content,
  )

  documents.set(file, document)

  return document
}

export function toNormalizedPath(fileName: string): string {
  return fileName.replace(/\\/g, '/')
}

export function getProjectPath(
  name:
    | 'typescript-diagnostics'
    | 'typescript-unconfigured'
    | 'typescript-configured-include-directory'
    | 'typescript-configured-include-file'
    | 'javascript-unconfigured'
    | 'javascript-configured-include-directory'
    | 'javascript-configured-include-file',
  version = 'vue3',
): string {
  return Path.resolve(__dirname, '../../samples', version, name)
}

export class Editor {
  private readonly server: TestServer

  private _document: TextDocument
  private _selections: Range[]

  public readonly fsPath: string

  public get document(): TextDocument {
    return this._document
  }

  /**
   * 0-based line number and character offset
   */
  public get cursor(): Position {
    const selection = this._selections[0]
    if (selection == null) throw new Error('No cursor set')
    return selection.end
  }

  public get fileAndLocation(): FileLocationRequestArgs {
    const location = positionToLocation(this.cursor)
    return {
      file: this.fsPath,
      line: location.line,
      offset: location.offset,
    }
  }

  public get selection(): Range {
    const selection = this._selections[0]
    if (selection == null) throw new Error('No cursor set')
    return selection
  }

  constructor(server: TestServer, fsPath: string, document: TextDocument) {
    this.server = server
    this.fsPath = fsPath
    this._document = document
    const end = this._document.positionAt(this._document.getText().length)
    this._selections = [{ start: end, end }]
  }

  async type(newText: string): Promise<void> {
    await this._apply(
      this._selections.map((range) => ({
        range,
        newText,
      })),
    )
  }

  private _transform(offset: number, edits: TextEdit[]): number {
    edits = edits
      .slice()
      .sort((a, b) => a.range.start.line - b.range.start.line)

    let delta = 0
    for (const edit of edits) {
      const rangeOffset = this.document.offsetAt(edit.range.start)
      if (offset < rangeOffset) break
      delta += edit.newText.length - this.document.getText(edit.range).length
    }

    return offset + delta
  }

  private async _apply(edits: TextEdit[]): Promise<void> {
    const offset = this._transform(this.document.offsetAt(this.cursor), edits)
    const content = TextDocument.applyEdits(this._document, edits)
    this._document = TextDocument.update(
      this._document,
      [{ text: content }],
      this._document.version + 1,
    )

    documents.set(this.fsPath, this._document)

    this.setCursor(this.document.positionAt(offset))

    await this.server.sendCommand('updateOpen', {
      changedFiles: [
        {
          fileName: this.fsPath,
          textChanges: edits.map(textEditToCodeEdit),
        },
      ],
    })
  }

  async edit(textChanges: CodeEdit[]): Promise<void> {
    await this._apply(textChanges.map(codeEditToTextEdit))
  }

  /**
   * 0-based line number and character offset
   */
  setSelection(cursor: Range): void {
    this._selections = [cursor]
  }

  /**
   * 0-based line number and character offset
   */
  setCursor(cursor: Position): void {
    this.setSelection({ start: cursor, end: cursor })
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createEditorContext(server: TestServer, rootDir: string) {
  const openFiles = new Set<string>()
  const projectRootPath = toNormalizedPath(rootDir)
  function abs(fileName: string): string {
    return toNormalizedPath(Path.resolve(rootDir, fileName))
  }
  const api = {
    abs,
    async open(fileName: string) {
      const absFilePath = abs(fileName)

      openFiles.add(absFilePath)

      await server.sendCommand('updateOpen', {
        openFiles: Array.from(openFiles).map((file) => ({
          file,
          projectRootPath,
        })),
      })

      return new Editor(server, absFilePath, await getTextDocument(absFilePath))
    },

    async close(fileName: string) {
      const absFilePath = abs(fileName)

      documents.delete(absFilePath)
      openFiles.delete(absFilePath)

      const result = await server.sendCommand('updateOpen', {
        openFiles: Array.from(openFiles).map((file) => ({
          file,
          projectRootPath,
        })),
        closedFiles: [absFilePath],
      })

      if (!result.success) throw new Error(result.message)
    },

    async closeAll() {
      const result = await server.sendCommand('updateOpen', {
        closedFiles: Array.from(openFiles),
      })
      openFiles.forEach((fileName) => {
        documents.delete(fileName)
      })
      if (!result.success) throw new Error(result.message)
      await server.flush(['events', 'requests', 'responses'])
      documents.clear()
      openFiles.clear()
    },

    async getCompilerDiagnostics(fileName: string) {
      const info = await api.getProjectInfo(api.abs(fileName))

      if (info.configFileName != null) {
        const event = await server
          .getEvents()
          .reverse()
          .find(
            (event): event is Proto.ConfigFileDiagnosticEvent =>
              event.event === 'configFileDiag' &&
              event.body?.configFile === info.configFileName,
          )

        return event?.body?.diagnostics ?? []
      }

      return []
    },
    async getDiagnostics(fileName: string) {
      const absFilePath = abs(fileName)
      const response = server.sendCommand('geterr', {
        files: [absFilePath],
        delay: 0,
      })

      const fn = (event: any): boolean => {
        return event.body?.file === absFilePath
      }
      try {
        const [semantic, syntax, suggestion] = await withTimeout(
          15,
          async () =>
            await Promise.all([
              server.waitForEvent('semanticDiag', fn),
              server.waitForEvent('syntaxDiag', fn),
              server.waitForEvent('suggestionDiag', fn),
            ]),
        )

        return {
          syntax: syntax.body?.diagnostics ?? [],
          semantic: semantic.body?.diagnostics ?? [],
          suggestion: suggestion.body?.diagnostics ?? [],
        }
      } catch (error) {
        if ((error as Error).message === 'Timeout') {
          await response
          return { syntax: [], semantic: [], suggestion: [] }
        }
        throw error
      }
    },
    async getProjectInfo(fileName: string) {
      const response = await server.sendCommand('projectInfo', {
        file: abs(fileName),
        needFileNameList: true,
      })

      if (response.body == null) throw new Error('No project found')

      response.body.fileNames = response.body.fileNames
        ?.filter((fileName) => !fileName.includes('node_modules'))
        .sort()

      return response.body
    },
  }

  return api
}

async function withTimeout<T>(secs: number, fn: () => Promise<T>): Promise<T> {
  return await Promise.race<T>([
    // eslint-disable-next-line promise/param-names
    new Promise<T>((_resolve, reject) =>
      setTimeout(reject, secs * 1000, new Error('Timeout')),
    ),
    fn(),
  ])
}
