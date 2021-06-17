import type {
  SFCBlock,
  SFCDescriptor,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vuedx/compiler-sfc'
import { CompilerError, parse } from '@vuedx/compiler-sfc'
import { parse as parseQueryString } from 'querystring'
import {
  TextDocument,
  TextDocumentContentChangeEvent,
} from 'vscode-languageserver-textdocument'
import type { RootNode } from '../../../template-ast-types/src'
import type { BlockTransformer } from './BlockTransformer'
import { ProxyDocument } from './ProxyDocument'
import { VueBlockDocument } from './VueBlockDocument'

export class VueSFCDocument extends ProxyDocument {
  private constructor(
    public readonly fileName: string,
    private readonly transforms: Record<string, BlockTransformer>,
    source: TextDocument,
  ) {
    super(source)
  }

  private _isDirty = true
  private _descriptor: SFCDescriptor | null = null
  private _errors: Array<CompilerError | SyntaxError> = []
  public templateAST: RootNode | null = null
  public readonly fallbackScript: SFCScriptBlock = {
    loc: {
      source: '',
      start: { offset: 0, line: 0, column: 0 },
      end: { offset: 0, line: 0, column: 0 },
    },
    type: 'script',
    attrs: {},
    content: `import { defineComponent } from 'vue'\nexport default defineComponent({})\n`,
  }

  public declarations = {
    identifiers: new Set<string>(),
  }

  public get descriptor(): SFCDescriptor {
    return this.parse()
  }

  public get errors(): Array<CompilerError | SyntaxError> {
    return this._errors
  }

  private mainText: string = ''

  public getTypeScriptText(): string {
    this.parse()

    return this.mainText
  }

  private readonly tsDocs = new Map<string, VueBlockDocument>()
  public readonly activeTSDocIDs = new Set<string>()

  private getBlockDocument(block: SFCBlock, index?: number): VueBlockDocument {
    this.parse()

    const id = this.getBlockId(block, index)
    const existing = this.tsDocs.get(id)
    if (existing != null) return existing
    const transform = this.transforms[block.type]

    if (transform == null) {
      throw new Error(`No transformer defined for "${block.type}"`)
    }

    const doc = new VueBlockDocument(
      id,
      this,
      this.createBlockGetter(block, index),
      () => this.descriptor,
      transform,
    )

    this.tsDocs.set(id, doc)

    return doc
  }

  private createBlockGetter(
    block: SFCBlock | SFCTemplateBlock | SFCScriptBlock | SFCStyleBlock,
    index: number = 0,
  ): () => SFCBlock {
    switch (block.type) {
      case 'template':
        return () => this.descriptor.template ?? block
      case 'script':
        return 'setup' in block && block.setup != null && block.setup !== false
          ? () => this.descriptor.scriptSetup ?? block
          : () => this.descriptor.script ?? block
      case 'style':
        return () => this.descriptor.styles[index] ?? block
      default:
        return () => this.descriptor.customBlocks[index] ?? block
    }
  }

  private parse(): SFCDescriptor {
    if (this._descriptor == null || this._isDirty) {
      // TODO: Incremental SFC Parser using
      const result = parse(this.source.getText(), {
        sourceMap: true,
        filename: this.fileName,
        pad: false,
      })

      if (this._descriptor != null) {
        // Delete stale documents.

        const prev = this._descriptor
        const next = result.descriptor

        if (
          hasBlockChanged(prev.template, next.template) &&
          prev.template != null
        ) {
          this.tsDocs.delete(this.getBlockId(prev.template))
        }
        if (
          hasBlockChanged(prev.scriptSetup, next.scriptSetup) &&
          prev.scriptSetup != null
        ) {
          this.tsDocs.delete(this.getBlockId(prev.scriptSetup))
        }
        if (hasBlockChanged(prev.script, next.script) && prev.script != null) {
          this.tsDocs.delete(this.getBlockId(prev.script))
        }
        prev.styles.forEach((block, i) => {
          if (
            hasBlockChanged(prev.styles[i], next.styles[i]) &&
            block != null
          ) {
            this.tsDocs.delete(this.getBlockId(block, i))
          }
        })
        prev.customBlocks.forEach((block, i) => {
          if (
            hasBlockChanged(prev.customBlocks[i], next.customBlocks[i]) &&
            block != null
          ) {
            this.tsDocs.delete(this.getBlockId(block, i))
          }
        })
      }

      this._descriptor = result.descriptor
      this._errors = result.errors
      this._isDirty = false
      this.mainText = this.generateMainModuleText()
    }

    return this._descriptor
  }

  public getDocById(id: string): VueBlockDocument | null {
    const block = this.getBlockFromId(id)
    if (block == null) return null
    return this.getBlockDocument(block)
  }

  private generateMainModuleText(): string {
    const {
      template,
      script,
      scriptSetup,
      styles,
      customBlocks,
    } = this.descriptor

    const code: string[] = []
    this.activeTSDocIDs.clear()

    const createImportSource = (id: string): string =>
      JSON.stringify(id.replace(/\.tsx?$/, ''))

    if (template != null) {
      const id = this.getBlockId(template)
      this.activeTSDocIDs.add(id)
      code.push(`import ${createImportSource(id)}`)
    }

    styles.forEach((block, index) => {
      if (this.transforms[block.type] != null) {
        const id = this.getBlockId(block, index)
        this.activeTSDocIDs.add(id)
        code.push(`import ${createImportSource(id)}`)
      }
    })
    customBlocks.forEach((block, index) => {
      if (this.transforms[block.type] != null) {
        const id = this.getBlockId(block, index)
        this.activeTSDocIDs.add(id)
        code.push(`import ${createImportSource(id)}`)
      }
    })

    if (scriptSetup != null) {
      const id = this.getBlockId(scriptSetup)
      this.activeTSDocIDs.add(id)
      const idPath = createImportSource(id)

      code.push(`export { default as default } from ${idPath}`)
      code.push(`export * from ${idPath}`)

      if (script != null) {
        const id = this.getBlockId(script)
        this.activeTSDocIDs.add(id)
        code.push(`export * from ${createImportSource(id)}`)
      }
    } else if (script != null) {
      const id = this.getBlockId(script)
      this.activeTSDocIDs.add(id)
      const idPath = createImportSource(id)
      code.push(`export { default as default } from ${idPath}`)
      code.push(`export * from ${idPath}`)
    }

    return code.join('\n')
  }

  public getBlockId(
    block: SFCBlock | SFCScriptBlock | SFCStyleBlock | SFCTemplateBlock,
    index?: number,
  ): string {
    if (index == null && block.type !== 'script' && block.type !== 'template') {
      if (block.type === 'style') {
        index = this.descriptor.styles.indexOf(block as any)
      } else {
        index = this.descriptor.customBlocks.indexOf(block)
      }
    }
    return getBlockFileName(
      this.fileName,
      block,
      block.type === 'template' ? 'tsx' : 'ts',
      'setup' in block && block.setup != null && block.setup !== false
        ? `setup=true`
        : undefined,
      index,
    )
  }

  private getBlockFromId(
    id: string,
  ): SFCBlock | SFCStyleBlock | SFCTemplateBlock | SFCScriptBlock | null {
    const query = id.substr(id.indexOf('.vue?vue') + 5)
    if (id.startsWith('vue&type=')) {
      const attrs = parseQueryString(query) as Record<string, string>
      switch (attrs['type']) {
        case 'template':
          return this.descriptor.template
        case 'script':
          return 'setup' in attrs
            ? this.descriptor.scriptSetup
            : this.descriptor.script
        case 'style':
          return this.descriptor.styles[Number(attrs['index'])] ?? null
        default:
          return this.descriptor.customBlocks[Number(attrs['index'])] ?? null
      }
    }

    return null
  }

  static create(
    uri: string,
    content: string,
    transforms: Record<string, BlockTransformer>,
    version: number = 0,
  ): VueSFCDocument {
    return new VueSFCDocument(
      uri,
      transforms,
      TextDocument.create(uri, 'vue', version, content),
    )
  }

  public update(
    changes: TextDocumentContentChangeEvent[],
    version: number,
  ): void {
    this.source = TextDocument.update(this.source, changes, version)
    this._isDirty = true
  }
}

function getBlockFileName(
  fileName: string,
  block: SFCBlock,
  lang: string,
  query?: string,
  index?: number,
): string {
  return `${fileName}?vue&type=${block.type}${
    index != null ? `&index=${index}` : ''
  }${query != null ? `&${query}` : ''}&lang.${lang}`
}

function hasBlockChanged(
  a: SFCBlock | null | undefined,
  b: SFCBlock | null | undefined,
): boolean {
  if (a === b) return false
  if (a == null || b == null) return true
  if (
    a.content !== b.content ||
    a.lang !== b.lang ||
    a.loc.start.offset !== b.loc.start.offset ||
    a.loc.end.offset !== b.loc.end.offset
  ) {
    return true
  }

  const aKeys = Array.from(Object.keys(a.attrs))
  const bKeys = new Set(Object.keys(b.attrs))

  if (aKeys.length !== bKeys.size) return true

  if (
    aKeys.some((key) => {
      try {
        return !bKeys.has(key) || a.attrs[key] !== b.attrs[key]
      } finally {
        bKeys.delete(key)
      }
    })
  ) {
    return true
  }

  return bKeys.size > 0
}
