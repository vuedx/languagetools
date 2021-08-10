import type { ComponentInfo } from '@vuedx/analyze'
import type {
  SFCBlock,
  SFCDescriptor,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vuedx/compiler-sfc'
import { CompilerError, parse } from '@vuedx/compiler-sfc'
import type { ComponentRegistration } from '@vuedx/compiler-tsx'
import { getComponentName, isNotNull } from '@vuedx/shared'
import { isPlainElementNode, RootNode } from '@vuedx/template-ast-types'
import * as Path from 'path'
import { parse as parseQueryString } from 'querystring'
import {
  TextDocument,
  TextDocumentContentChangeEvent,
} from 'vscode-languageserver-textdocument'
import type { BlockTransformer } from './BlockTransformer'
import { ProxyDocument } from './ProxyDocument'
import { VueBlockDocument } from './VueBlockDocument'

export interface VueSFCDocumentOptions {
  transformers?: Record<string, BlockTransformer>
  getComponents?(): Record<string, ComponentRegistration>
  getComponentInfo(): ComponentInfo | null
}

export class VueSFCDocument extends ProxyDocument {
  public readonly tsFileName: string
  private constructor(
    public readonly fileName: string,
    public readonly options: Readonly<Required<VueSFCDocumentOptions>>,
    source: TextDocument,
  ) {
    super(source)

    this.tsFileName = `${this.fileName}.ts`
  }

  private _isDirty = true
  private _descriptor: SFCDescriptor | null = null
  private _errors: Array<CompilerError | SyntaxError> = []
  private _mainText: string = ''

  private readonly blockDocs = new Map<string, VueBlockDocument>()

  public templateAST: RootNode | null = null

  // Used by tsserver for caching line map
  public lineMap: any
  public get text(): string {
    return this.getText()
  }

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

  public get blocks(): SFCBlock[] {
    const descriptor = this.descriptor
    return [
      descriptor.scriptSetup,
      descriptor.script,
      descriptor.template,
      ...descriptor.styles,
      ...descriptor.customBlocks,
    ].filter(isNotNull)
  }

  private readonly activeTSDocIDs = new Set<string>()

  public getActiveTSDocIDs(): Set<string> {
    this.parse()

    return this.activeTSDocIDs
  }

  public getTypeScriptText(): string {
    this.parse()

    return this._mainText
  }

  public getDocById(id: string): VueBlockDocument | null {
    const block = this.getBlockFromId(id)
    if (block == null) {
      console.error(`[VueDX] No block for "${id}"`)
      return null
    }
    return this.getDoc(block)
  }

  public getDoc(block: SFCBlock): VueBlockDocument | null {
    return this.getBlockDocument(block)
  }

  public getBlockId(block: SFCBlock): string {
    return this.getBlockFileName(block)
  }

  public getBlockAt(offset: number): SFCBlock | null {
    const block = this.blocks.find(
      (block) =>
        block.loc.start.offset <= offset && offset <= block.loc.end.offset,
    )

    return block ?? null
  }

  public getDocAt(offset: number): VueBlockDocument | null {
    const block = this.getBlockAt(offset)
    if (block != null) return this.getDoc(block)
    return null
  }

  private getBlockDocument(block: SFCBlock, index?: number): VueBlockDocument {
    this.parse()

    const id = this.getBlockFileName(block, index)
    const existing = this.blockDocs.get(id)
    if (existing != null) return existing
    const transformer = this.options.transformers[block.type]

    const doc = new VueBlockDocument(
      id,
      this,
      this.createBlockGetter(block, index),
      () => this.descriptor,
      transformer,
    )

    this.blockDocs.set(id, doc)

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
        sourceMap: false,
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
          this.blockDocs.delete(this.getBlockFileName(prev.template))
          if (prev.scriptSetup != null) {
            this.blockDocs.delete(this.getBlockFileName(prev.scriptSetup))
          }
        }
        if (
          hasBlockChanged(prev.scriptSetup, next.scriptSetup) &&
          prev.scriptSetup != null
        ) {
          this.blockDocs.delete(this.getBlockFileName(prev.scriptSetup))
          if (prev.template != null) {
            this.blockDocs.delete(this.getBlockFileName(prev.template))
          }
        }
        if (hasBlockChanged(prev.script, next.script) && prev.script != null) {
          this.blockDocs.delete(this.getBlockFileName(prev.script))
          if (prev.template != null) {
            this.blockDocs.delete(this.getBlockFileName(prev.template))
          }
        }
        prev.styles.forEach((block, i) => {
          if (
            hasBlockChanged(prev.styles[i], next.styles[i]) &&
            block != null
          ) {
            this.blockDocs.delete(this.getBlockFileName(block, i))
          }
        })
        prev.customBlocks.forEach((block, i) => {
          if (
            hasBlockChanged(prev.customBlocks[i], next.customBlocks[i]) &&
            block != null
          ) {
            this.blockDocs.delete(this.getBlockFileName(block, i))
          }
        })
      }

      if (
        result.descriptor.script == null &&
        result.descriptor.scriptSetup == null
      ) {
        result.descriptor.script = this.fallbackScript
      }

      this._descriptor = result.descriptor
      this._errors = result.errors
      this._isDirty = false
      this._mainText = this.generateMainModuleText()
    }

    return this._descriptor
  }

  private generateMainModuleText(): string {
    const {
      template,
      script,
      scriptSetup,
      styles,
      customBlocks,
    } = this.descriptor
    // const info = this.options.getComponentInfo() // Can be used

    const code: string[] = []
    const props: string[] = []
    this.activeTSDocIDs.clear()

    const createImportSource = (id: string): string =>
      JSON.stringify(`./${Path.basename(id.replace(/\.[tj]sx?$/, ''))}`)

    if (template != null) {
      const id = this.getBlockTSId(template)
      if (id != null) {
        this.activeTSDocIDs.add(id)
        const node = this.templateAST?.children[0]
        if (isPlainElementNode(node)) {
          props.push(`JSX.IntrinsicElements['${node.tag}']`)
        }
        code.push(`import ${createImportSource(id)}`)
      }
    }

    styles.forEach((block, index) => {
      const id = this.getBlockTSId(block, index)
      if (id != null) {
        this.activeTSDocIDs.add(id)
        code.push(`import ${createImportSource(id)}`)
      }
    })
    customBlocks.forEach((block, index) => {
      const id = this.getBlockTSId(block, index)
      if (id != null) {
        this.activeTSDocIDs.add(id)
        code.push(`import ${createImportSource(id)}`)
      }
    })

    const name = getComponentName(this.fileName)
    if (scriptSetup != null) {
      const id = this.getBlockTSId(scriptSetup)
      if (id != null) {
        this.activeTSDocIDs.add(id)
        const idPath = createImportSource(id)

        props.push(`InstanceType<typeof _Self>['$props']`)
        code.push(`import _Self from ${idPath}`)
        code.push(`export * from ${idPath}`) // TODO: Only type exports are supported.

        if (script != null) {
          const id = this.getBlockTSId(script)
          if (id != null) {
            this.activeTSDocIDs.add(id)
            code.push(`export * from ${createImportSource(id)}`)
          }
        }
      }
    } else if (script != null) {
      const id = this.getBlockTSId(script)

      if (id != null) {
        this.activeTSDocIDs.add(id)
        const idPath = createImportSource(id)

        props.push(`InstanceType<typeof _Self>['$props']`)
        code.push(`import _Self from ${idPath}`)
        code.push(`export * from ${idPath}`)
      }
    }

    if (props.length === 0) props.push('{}')

    code.push(`const ${name} = _Self`)
    code.push(`export default ${name}`)

    return code.join('\n')
  }

  private getBlockFileName(
    block: SFCBlock | SFCScriptBlock | SFCStyleBlock | SFCTemplateBlock,
    index?: number,
    lang: string = this.getBlockLanguage(block),
  ): string {
    if (index == null && block.type !== 'script' && block.type !== 'template') {
      if (block.type === 'style') {
        index = this.descriptor.styles.indexOf(block as any)
      } else {
        index = this.descriptor.customBlocks.indexOf(block)
      }
    }

    const query =
      'setup' in block && block.setup != null && block.setup !== false
        ? `setup=true`
        : undefined

    return createVirtualFileName(this.fileName, block, lang, query, index)
  }

  private getBlockTSId(
    block: SFCBlock | SFCScriptBlock | SFCStyleBlock | SFCTemplateBlock,
    index?: number,
  ): string | null {
    const transformer = this.options.transformers[block.type]
    if (transformer == null) return null

    return this.getBlockFileName(block, index, transformer.output(block))
  }

  private getBlockLanguage(block: SFCBlock): string {
    if (block.lang != null) return block.lang

    switch (block.type) {
      case 'script':
        return 'js'
      case 'template':
        return 'vue-html'
      case 'style':
        return 'css'
      default:
        return block.type // TODO: Support extending block default language
    }
  }

  private getBlockFromId(
    id: string,
  ): SFCBlock | SFCStyleBlock | SFCTemplateBlock | SFCScriptBlock | null {
    const offset = id.indexOf('.vue?vue')
    if (offset < 0) return null
    const query = id.substr(offset + 5)
    const { type, index, setup } = parseQueryString(query) as Record<
      string,
      string
    >
    if (type == null) return null
    switch (type) {
      case 'template':
        return this.descriptor.template
      case 'script':
        return setup != null
          ? this.descriptor.scriptSetup
          : this.descriptor.script
      case 'style':
        if (index == null) return null
        return this.descriptor.styles[Number(index)] ?? null
      default:
        if (index == null) return null
        return this.descriptor.customBlocks[Number(index)] ?? null
    }
  }

  static create(
    fileName: string,
    content: string,
    options: VueSFCDocumentOptions,
    version: number = 0,
  ): VueSFCDocument {
    return new VueSFCDocument(
      fileName,
      {
        getComponents() {
          return {}
        },
        transformers: {},
        ...options,
      },
      TextDocument.create(`file://${fileName}`, 'vue', version, content),
    )
  }

  public update(
    changes: TextDocumentContentChangeEvent[],
    version: number,
  ): void {
    this.source = TextDocument.update(this.source, changes, version)
    this._isDirty = true
    this.lineMap = undefined
  }
}

function createVirtualFileName(
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
