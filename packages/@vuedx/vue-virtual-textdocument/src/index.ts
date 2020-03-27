import {
  CompilerError,
  parse as parseSFC,
  SFCBlock,
  SFCDescriptor,
} from '@vue/compiler-sfc'
import {
  parse as parseQueryString,
  stringify as stringifyQueryString,
} from 'querystring'
import {
  TextDocument,
  TextDocumentContentChangeEvent,
  Position,
  Range,
} from 'vscode-languageserver-textdocument'
import { URI } from 'vscode-uri'

// Vue File: foo.vue
// Virtual Script File: foo.vue____script.js
// Virtual Template File: foo.vue____template.vue-html
// Virtual Render File: foo.vue____render.js
// Virtual Style File: foo.vue____style__0.css

export const virtualFileNameSep = '____'

export function isVueFile(fileName: string) {
  return fileName.endsWith('.vue')
}

export function isVirtualFile(fileName: string) {
  return fileName.includes('.vue' + virtualFileNameSep)
}

export function asUri(fileNameOrUri: string) {
  if (/^[a-z-]+:\/\//i.test(fileNameOrUri)) return fileNameOrUri

  return VueTextDocument.fsPathToUri(fileNameOrUri)
}

export type BlockSelector =
  | {
      type: 'template' | 'script'
    }
  | { type: string; index: number }

export class VirtualTextDocument implements TextDocument {
  public constructor(
    private internal: TextDocument,
    public readonly container: VueTextDocument
  ) {}

  public readonly uriObject = URI.parse(this.internal.uri)

  public get version() {
    return this.internal.version
  }

  public get languageId() {
    return this.internal.languageId
  }

  public get lineCount() {
    return this.internal.lineCount
  }

  public get uri() {
    return this.internal.uri
  }

  public get fsPath() {
    return this.uriObject.fsPath
  }

  public get content() {
    return this.getText()
  }

  public getText(range?: Range) {
    return this.internal.getText(range)
  }

  public positionAt(offset: number) {
    return this.internal.positionAt(offset)
  }

  public offsetAt(position: Position) {
    return this.internal.offsetAt(position)
  }

  public toJSON() {
    return {
      uri: this.uri,
      languageId: this.languageId,
      vertion: this.version,
      content: this.getText(),
    }
  }

  static create(
    container: VueTextDocument,
    uri: string,
    languageId: string,
    version: number,
    content: string
  ) {
    return new VirtualTextDocument(
      TextDocument.create(uri, languageId, version, content),
      container
    )
  }

  static update(
    document: VirtualTextDocument,
    changes: TextDocumentContentChangeEvent[],
    version: number
  ) {
    document.internal = TextDocument.update(document.internal, changes, version)

    return document
  }
}

const BlockLanguageMap = {
  script: 'js',
  template: 'vue-html',
  style: 'css',
  docs: 'md',
}
export class VueTextDocument implements TextDocument {
  private _descriptor!: SFCDescriptor
  private _blocks: SFCBlock[] = []
  private _parseErrors: CompilerError[] = []
  private documents: Record<string, VirtualTextDocument | null> = {}

  public readonly uriObject = URI.parse(this.internal.uri)

  public constructor(private internal: TextDocument) {
    this.parse()
  }

  public get version() {
    return this.internal.version
  }

  public get languageId() {
    return this.internal.languageId
  }

  public get lineCount() {
    return this.internal.lineCount
  }

  public get uri() {
    return this.internal.uri
  }

  public get fsPath() {
    return this.uriObject.fsPath
  }

  public get descriptor() {
    return this._descriptor
  }

  public get blocks() {
    return this._blocks
  }

  public get parseErrors() {
    return this._parseErrors
  }

  public get content() {
    return this.getText()
  }

  public getText(range?: Range) {
    return this.internal.getText(range)
  }

  public positionAt(offset: number) {
    return this.internal.positionAt(offset)
  }

  public offsetAt(position: Position) {
    return this.internal.offsetAt(position)
  }

  public blockAt(positionOrOffset: Position | number) {
    const offset =
      typeof positionOrOffset === 'number'
        ? positionOrOffset
        : this.offsetAt(positionOrOffset)

    return this._blocks.find(
      block =>
        block.loc.start.offset <= offset && offset <= block.loc.end.offset
    )
  }

  private parse() {
    const source = this.getText()
    const { descriptor, errors } = parseSFC(source, {
      sourceMap: false,
      pad: 'space',
      filename: this.fsPath,
    })

    const prevIds = Object.keys(this.documents)

    this._descriptor = descriptor
    this._parseErrors = errors

    this._blocks = [descriptor.script, descriptor.template].filter(isNotNull)
    this._blocks = this._blocks
      .concat(descriptor.styles)
      .concat(descriptor.customBlocks)

    this._blocks.sort((a, b) => a.loc.start.offset - b.loc.start.offset)

    if (prevIds.length) {
      prevIds.forEach(id => {
        const selector = parseQueryString(id) as BlockSelector

        if (selector && 'index' in selector) {
          const block = this._blocks[selector.index]

          this.setBlockDocument(block, this.createBlockDocument(block))
        }
      })
    }

    if (descriptor.script) {
      this.setBlockDocument(
        descriptor.script,
        this.createBlockDocument(descriptor.script)
      )
    }

    if (descriptor.template) {
      this.setBlockDocument(
        descriptor.template,
        this.createBlockDocument(descriptor.template)
      )
    }

    return this
  }

  private createBlockDocument(block: SFCBlock | null) {
    if (!block) return null

    const id = stringifyQueryString(this.getSelectorFor(block))
    const uri = this.getUriFor(block)
    const languageId = getLanguageIdForBlock(block)

    const prevDocument = this.documents[id]

    if (prevDocument) {
      if (prevDocument.uri === uri && prevDocument.languageId === languageId) {
        return VirtualTextDocument.update(
          prevDocument,
          [{ text: block.content }],
          this.version
        )
      }
    }

    return VirtualTextDocument.create(
      this,
      uri,
      languageId,
      this.version,
      block.content
    )
  }

  public all() {
    return Object.values(this.documents).filter(isNotNull)
  }

  public getBlockDocument(
    block?: SFCBlock | 'script' | 'template' | BlockSelector | string
  ) {
    if (!block) return
    
    const selector = this.getSelectorFor(block)

    if (!selector) return

    const id = stringifyQueryString(selector)

    if (
      'index' in selector &&
      !/^(script|template)$/.test(selector.type) &&
      !this.documents[id]
    ) {
      const block = this.blocks[selector.index]

      if (block) this.setBlockDocument(block, this.createBlockDocument(block))
    }

    return this.documents[id]
  }

  private setBlockDocument(
    block: SFCBlock | 'script' | 'template',
    document: VirtualTextDocument | null
  ) {
    const id = stringifyQueryString(this.getSelectorFor(block))

    if (document) {
      this.documents[id] = document
    } else {
      delete this.documents[id]
    }
  }

  private getUriFor(block: SFCBlock) {
    const selector = this.getSelectorFor(block)
    const uri = URI.file(
      this.uriObject.path +
        virtualFileNameSep +
        ('index' in selector
          ? `${selector.type}__${selector.index}`
          : selector.type) +
        '.' +
        this.getLanguageFor(block)
    )

    return uri.toString().replace(/^file/, 'vue')
  }

  private getSelectorFor(
    block: SFCBlock | string | BlockSelector
  ): BlockSelector {
    if (!block) return { type: '', index: -1 }

    if (block === 'script') {
      return { type: 'script' }
    } else if (block === 'template') {
      return { type: 'template' }
    } else if (typeof block === 'string') {
      const virtual = parseVirtualFileUri(block)

      if (!virtual) throw new Error(`Malforated virtual document uri: ${block}`)

      return virtual.selector
    } else if ('index' in block) {
      return block
    } else {
      switch (block.type) {
        case 'script':
          return { type: 'script' }
        case 'template':
          return { type: 'template' }
        default:
          return {
            type: block.type,
            index: this.blocks.indexOf(block as SFCBlock),
          }
      }
    }
  }

  private getLanguageFor(block: SFCBlock): string {
    return (
      block.lang ||
      BlockLanguageMap[block.type as keyof typeof BlockLanguageMap] ||
      'txt'
    )
  }

  static create(
    uri: string,
    languageId: string,
    version: number,
    content: string
  ) {
    if (!isVueFile(uri)) throw new Error(`Not a .vue file: ${uri}`)

    return new VueTextDocument(
      TextDocument.create(uri, languageId, version, content)
    )
  }

  static update(
    document: VueTextDocument,
    changes: TextDocumentContentChangeEvent[],
    version: number
  ) {
    document.internal = TextDocument.update(document.internal, changes, version)

    return document.parse()
  }

  public static fsPathToUri(fsPath: string) {
    const uri = URI.file(fsPath).toString()

    if (isVirtualFile(fsPath)) {
      return uri.replace(/^[^:]+/, 'vue')
    }

    return uri
  }
}

export function parseVirtualFileUri(fileNameOrUri: string) {
  const uri = URI.parse(asUri(fileNameOrUri))

  if (uri.scheme === 'vue') {
    const [container, selector] = uri.fsPath.split(virtualFileNameSep)
    if (!selector.includes('.'))
      throw new Error('Malformated virtual file uri.')
    const [block, index] = selector
      .substr(0, selector.lastIndexOf('.'))
      .split('__')

    return {
      // TODO: DO NOT ASSUME FILE SCHEME!
      uri: URI.file(container).toString(),
      selector: <BlockSelector>(index
        ? {
            type: block,
            index: parseInt(index, 10),
          }
        : { type: block }),
    }
  }

  return null
}

export class DocumentStore<T> {
  private map = new Map<string, T>()

  constructor(
    private resolve: (uri: string) => T | null,
    private useCaseSensitiveFileNames = () => true
  ) {}

  private normalizeUri(uri: string) {
    return this.useCaseSensitiveFileNames() ? uri : uri.toLowerCase()
  }

  has(uri: string): boolean {
    return this.map.has(this.normalizeUri(uri))
  }

  get(uri: string): T | null {
    return this.map.get(this.normalizeUri(uri)) || this.loadSync(uri)
  }

  set(uri: string, document: T): void {
    this.map.set(this.normalizeUri(uri), document)
  }

  delete(uri: string) {
    return this.map.delete(this.normalizeUri(uri))
  }

  all(): string[] {
    return Array.from(this.map.keys())
  }

  dispose() {
    this.map.clear()
  }

  private loadSync(uri: string): T | null {
    const document = this.resolve(uri)

    if (document) {
      this.map.set(this.normalizeUri(uri), document)
    }

    return document
  }
}

export class AsyncDocumentStore<T> {
  private map = new Map<string, T>()

  constructor(
    private resolve: (uri: string) => Promise<T | null> | T | null,
    private useCaseSensitiveFileNames = () => true
  ) {}

  private normalizeUri(uri: string) {
    return this.useCaseSensitiveFileNames() ? uri : uri.toLowerCase()
  }

  has(uri: string): boolean {
    return this.map.has(this.normalizeUri(uri))
  }

  get(uri: string) {
    return this.map.get(this.normalizeUri(uri)) || this.load(uri)
  }

  set(uri: string, document: T): void {
    this.map.set(this.normalizeUri(uri), document)
  }

  delete(uri: string) {
    return this.map.delete(this.normalizeUri(uri))
  }

  all(): string[] {
    return Array.from(this.map.keys())
  }

  dispose() {
    this.map.clear()
  }

  private async load(uri: string) {
    const document = await this.resolve(uri)

    if (document) {
      this.map.set(this.normalizeUri(uri), document)
    }

    return document
  }
}

function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null
}

function getLanguageIdForBlock(block: SFCBlock) {
  switch (block.type) {
    case 'template':
      return getLanguageIdFromExtension(block.lang) || 'vue-html'
    case 'script':
      return getLanguageIdFromExtension(block.lang) || 'javascript'
    case 'style':
      return getLanguageIdFromExtension(block.lang) || 'css'
    default:
      return getLanguageIdFromExtension(block.lang) || 'text'
  }
}

function getLanguageIdFromExtension(ext?: string) {
  switch (ext) {
    case 'js':
      return 'javascript'
    case 'ts':
      return 'typescript'
  }

  return ext
}
