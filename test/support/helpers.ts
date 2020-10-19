export async function findPositionIn(
  file: string,
  text: string,
  offset: number = 0,
): Promise<{ file: string; line: number; offset: number }> {
  const document = await getTextDocument(file)
  const index = document.getText().indexOf(text)

  if (index >= 0) {
    const position = document.positionAt(index + offset)

    return {
      file,
      line: position.line + 1,
      offset: position.character + 1,
    }
  }

  return {
    file,
    line: 1,
    offset: 1,
  }
}

import FS from 'fs/promises'
import Path from 'path'
import { TextDocument } from 'vscode-languageserver-textdocument'

const cache = new Map<string, TextDocument>()

export async function getTextDocument(file: string): Promise<TextDocument> {
  return cache.get(file) ?? (await createTextDocument(file))
}

async function createTextDocument(file: string): Promise<TextDocument> {
  const content = await FS.readFile(file, { encoding: 'utf-8' })
  const document = TextDocument.create(
    `file://${file}`,
    Path.extname(file),
    0,
    content,
  )

  cache.set(file, document)

  return document
}
