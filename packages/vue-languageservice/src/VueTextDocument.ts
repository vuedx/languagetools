import {
  DocumentUri,
  Position,
  Range,
  TextDocument,
  TextDocumentContentChangeEvent,
  TextEdit,
} from 'vscode-languageserver-textdocument'

import {
  parse,
  SFCBlock,
  SFCDescriptor,
  SFCParseResult,
} from '@vuedx/compiler-sfc'
import { invariant, isNotNull } from '@vuedx/shared'

type ParsedResult = SFCParseResult & {
  blocks: SFCBlock[]
}

export class VueTextDocument implements TextDocument {
  private _: TextDocument
  private _result: ParsedResult | null = null

  private readonly _embeddedDocuments = new Map<string, TextDocument>()

  private constructor(document: TextDocument) {
    this._ = document
  }

  get uri(): DocumentUri {
    return this._.uri
  }

  get languageId(): string {
    return this._.languageId
  }

  get version(): number {
    return this._.version
  }

  get lineCount(): number {
    return this._.lineCount
  }

  get descriptor(): SFCDescriptor {
    return this._parse().descriptor
  }

  get parserErrors(): SFCParseResult['errors'] {
    return this._parse().errors
  }

  get blocks(): SFCBlock[] {
    return this._parse().blocks
  }

  getText(range?: Range | undefined): string {
    return this._.getText(range)
  }

  positionAt(offset: number): Position {
    return this._.positionAt(offset)
  }

  offsetAt(position: Position): number {
    return this._.offsetAt(position)
  }

  blockAt(position: Position | number): SFCBlock | undefined {
    const offset =
      typeof position === 'number' ? position : this.offsetAt(position)

    return this.blocks.find((block) => {
      return offset >= block.loc.start.offset && offset <= block.loc.end.offset
    })
  }

  getEmbeddedLanguageIdAt(position: Position): string {
    const block = this.blockAt(position)
    if (block == null) return this.languageId
    return getLanguageId(block)
  }

  getEmbeddedLanguageIds(): string[] {
    return Array.from(new Set(this.blocks.map(getLanguageId)))
  }

  getEmbeddedDocument(languageId: string): TextDocument {
    if (languageId === 'vue') return this
    const cached = this._embeddedDocuments.get(languageId)
    if (cached != null) return cached
    const blocks = this.blocks.filter(
      (block) => getLanguageId(block) === languageId,
    )

    invariant(blocks.length > 0, `No block found for languageId: ${languageId}`)

    const source = this.getText()
    let content = ''

    for (const block of blocks) {
      content += substituteWithWhitespace(
        source.slice(content.length, block.loc.start.offset),
      )
      content += source.slice(block.loc.start.offset, block.loc.end.offset)
    }

    content += substituteWithWhitespace(
      source.slice(content.length, source.length),
    )

    const embedded = TextDocument.create(
      this.uri,
      languageId,
      this.version,
      content,
    )

    this._embeddedDocuments.set(languageId, embedded)

    return embedded
  }

  private _parse(): ParsedResult {
    if (this._result == null) {
      const { descriptor, errors } = parse(this._.getText())
      this._result = {
        descriptor,
        errors,
        blocks: [
          descriptor.script,
          descriptor.scriptSetup,
          descriptor.template,
          ...descriptor.styles,
          ...descriptor.customBlocks,
        ]
          .filter(isNotNull)
          .sort((a, b) => a.loc.start.offset - b.loc.start.offset),
      }
    }

    return this._result
  }

  /**
   * Creates a new text document.
   *
   * @param uri The document's uri.
   * @param languageId  The document's language Id.
   * @param version The document's initial version number.
   * @param content The document's content.
   */
  static create(
    uri: DocumentUri,
    languageId: string,
    version: number,
    content: string,
  ): VueTextDocument {
    return new VueTextDocument(
      TextDocument.create(uri, languageId, version, content),
    )
  }

  /**
   * Updates a TextDocument by modifying its content.
   *
   * @param document the document to update. Only documents created by VueTextDocument.create are valid inputs.
   * @param changes the changes to apply to the document.
   * @param version the changes version for the document.
   * @returns The updated VueTextDocument. Note: That's the same document instance passed in as first parameter.
   */
  static update(
    document: VueTextDocument,
    changes: TextDocumentContentChangeEvent[],
    version: number,
  ): VueTextDocument {
    document._ = TextDocument.update(document._, changes, version)
    document._result = null
    document._embeddedDocuments.clear()

    return document
  }

  static applyEdits(document: VueTextDocument, edits: TextEdit[]): string {
    return TextDocument.applyEdits(document._, edits)
  }
}

function getLanguageId(block: SFCBlock): string {
  if (block.lang != null) {
    switch (block.lang) {
      case 'js':
        return 'javascript'
      case 'jsx':
        return 'javascriptreact'
      case 'ts':
        return 'typescript'
      case 'tsx':
        return 'typescriptreact'
      case 'styl':
        return 'stylus'
      case 'pug':
        return 'jade'
      case 'md':
        return 'markdown'
      default:
        return block.lang
    }
  } else if (block.type === 'template') {
    return 'vue-html'
  } else if (block.type === 'script' || block.type === 'scriptSetup') {
    return 'javascript'
  } else if (block.type === 'style') {
    return 'css'
  } else {
    return block.type
  }
}

function substituteWithWhitespace(source: string): string {
  let result = ''
  let whitespace = 0
  const NL = '\n'.charCodeAt(0)
  const CR = '\r'.charCodeAt(0)
  const length = source.length

  for (let i = 0; i < length; i++) {
    const ch = source.charCodeAt(i)
    if (ch === NL || ch === CR) {
      result += repeat(' ', whitespace) + source.charAt(i)
      whitespace = 0
    } else {
      whitespace += 1
    }
  }

  result += repeat(' ', whitespace)

  return result
}

function repeat(str: string, count: number): string {
  let result = ''
  while (count > 0) {
    if ((count & 1) !== 0) {
      result += str
    }
    count >>= 1
    str += str
  }
  return result
}
