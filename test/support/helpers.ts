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

    return {
      file,
      line: position.line + 1,
      offset: position.character + 1,
    }
  }
}

import FS from 'fs/promises'
import Path from 'path'
import { URI } from 'vscode-uri'
import { TextDocument } from 'vscode-languageserver-textdocument'

const cache = new Map<string, TextDocument>()

export async function getTextDocument(file: string): Promise<TextDocument> {
  return cache.get(file) ?? (await createTextDocument(file))
}

async function createTextDocument(file: string): Promise<TextDocument> {
  const content = await FS.readFile(file, { encoding: 'utf-8' })
  const document = TextDocument.create(
    URI.file(file).toString(),
    Path.extname(file),
    0,
    content,
  )

  cache.set(file, document)

  return document
}
