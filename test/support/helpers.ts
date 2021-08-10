import * as _FS from 'fs'
import * as Path from 'path'
import type { CodeEdit, Location, TextSpan } from 'typescript/lib/protocol'
import {
  Position,
  TextDocument,
  TextEdit,
} from 'vscode-languageserver-textdocument'
import type { TestServer } from './TestServer'

const FS = _FS.promises

export function locationToPosition(loc: Location): Position {
  return { line: loc.line - 1, character: loc.offset - 1 }
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
): string {
  return Path.resolve(__dirname, '../../samples', name)
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
    async close(fileName: string) {
      const absFilePath = abs(fileName)

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
      if (!result.success) throw new Error(result.message)
      await server.flush(['events', 'requests', 'responses'])
      openFiles.clear()
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
