import * as _FS from 'fs'
import * as Path from 'path'
import type { CodeEdit, Location, TextSpan } from 'typescript/lib/protocol'
import {
  Position,
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

const cache = new Map<string, TextDocument>()

export async function getTextDocument(file: string): Promise<TextDocument> {
  return cache.get(file) ?? (await createTextDocument(file))
}

async function createTextDocument(file: string): Promise<TextDocument> {
  const content = await FS.readFile(file, { encoding: 'utf-8' })
  const document = TextDocument.create(
    file.toString(),
    Path.posix.extname(file),
    0,
    content,
  )

  cache.set(file, document)

  return document
}

export function toNormalizedPath(fileName: string): string {
  return fileName
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

      return absFilePath
    },

    async edit(fileName: string, textOrEdits: string | TextEdit[]) {
      const absFilePath = abs(fileName)
      const document = await getTextDocument(absFilePath)
      const edits: TextEdit[] =
        typeof textOrEdits === 'string'
          ? [
              {
                newText: textOrEdits,
                range: {
                  start: document.positionAt(0),
                  end: document.positionAt(document.getText().length),
                },
              },
            ]
          : textOrEdits
      const content = TextDocument.applyEdits(document, edits)

      cache.set(
        fileName,
        TextDocument.update(
          document,
          [{ text: content }],
          document.version + 1,
        ),
      )

      await server.sendCommand('updateOpen', {
        changedFiles: [
          {
            fileName: absFilePath,
            textChanges: edits.map((edit) => textEditToCodeEdit(edit)),
          },
        ],
      })
    },

    async replaceIn(
      fileName: string,
      search: string | RegExp,
      replace: (...args: string[]) => string,
    ) {
      const absFilePath = abs(fileName)
      const document = await getTextDocument(absFilePath)
      const content = document.getText()

      if (typeof search === 'string') {
        const index = content.indexOf(search)
        if (index < 0) return false
        await this.edit(fileName, [
          {
            range: {
              start: document.positionAt(index),
              end: document.positionAt(index + search.length),
            },
            newText: replace(),
          },
        ])
        return true
      } else {
        const edits: TextEdit[] = []
        let matches: RegExpExecArray | null
        while ((matches = search.exec(content)) != null) {
          const text = matches[0] as string
          const index = matches.index
          edits.push({
            range: {
              start: document.positionAt(index),
              end: document.positionAt(index + text.length),
            },
            newText: replace(...matches),
          })
        }
        if (edits.length > 0) {
          await this.edit(fileName, edits)
        }
        return false
      }
    },

    async close(fileName: string) {
      const absFilePath = abs(fileName)

      cache.delete(absFilePath)
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
        cache.delete(fileName)
      })
      if (!result.success) throw new Error(result.message)
      await server.flush(['events', 'requests', 'responses'])
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
        if (error.message === 'Timeout') {
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
