import type {
  SFCBlock,
  SFCDescriptor,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vuedx/compiler-sfc'
import { CompilerError, parse } from '@vuedx/compiler-sfc'
import {
  getComponentName,
  isNotNull,
  parseFileName,
  toFileName,
} from '@vuedx/shared'
import { isPlainElementNode, RootNode } from '@vuedx/template-ast-types'
import * as Path from 'path'
import {
  TextDocument,
  TextDocumentContentChangeEvent,
} from 'vscode-languageserver-textdocument'
import { BlockTransformer, builtins } from './BlockTransformer'
import { ProxyDocument } from './ProxyDocument'
import { VueBlockDocument } from './VueBlockDocument'

export interface VueSFCDocumentOptions {
  transformers?: Record<string, BlockTransformer>
}

export class VueSFCDocument extends ProxyDocument {
  private readonly _tsFileName: string
  private constructor(
    private readonly _fileName: string,
    private readonly _options: Required<VueSFCDocumentOptions>,
    source: TextDocument,
  ) {
    super(source)

    this._tsFileName = `${this.fileName}.ts`
  }

  public get fileName(): string {
    return this._fileName
  }

  public get tsFileName(): string {
    return this._tsFileName
  }

  public get options(): Readonly<Required<VueSFCDocumentOptions>> {
    return this._options
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
    attrs: { fallback: true },
    content: `import { defineComponent } from 'vue'\nexport default defineComponent({})\n`,
  }

  public declarations = {
    identifiers: new Set<string>(),
  }

  public get descriptor(): SFCDescriptor {
    return this._parse()
  }

  public get errors(): Array<CompilerError | SyntaxError> {
    this._parse()
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

  private _activeTSDocIDs = new Set<string>()
  public getActiveTSDocIDs(): Set<string> {
    this._parse()

    return this._activeTSDocIDs
  }

  public getTypeScriptText(): string {
    this._parse()

    return this._mainText
  }

  public getDocById(id: string): VueBlockDocument | null {
    this._parse()

    const { block, index } = this._getBlockFromId(id)
    if (block == null) {
      console.debug(`[VueDX] No block for "${id}"`)
      return null
    }
    return this._getBlockDocument(block, index)
  }

  public getDoc(block: SFCBlock): VueBlockDocument | null {
    return this._getBlockDocument(block)
  }

  public getBlockId(block: SFCBlock): string {
    this._parse()

    return this._getBlockFileName(block, this._indexOf(block))
  }

  public getBlockAt(offset: number): SFCBlock | null {
    this._parse()

    const block = this.blocks.find(
      (block) =>
        block.loc.start.offset <= offset && offset <= block.loc.end.offset,
    )

    return block ?? null
  }

  public getDocAt(offset: number): VueBlockDocument | null {
    this._parse()

    const block = this.getBlockAt(offset)
    if (block != null) return this.getDoc(block)
    return null
  }

  private _getBlockDocument(block: SFCBlock, index?: number): VueBlockDocument {
    const id = this._getBlockFileName(block, index ?? this._indexOf(block))
    const existing = this.blockDocs.get(id)
    if (existing != null) return existing
    const transformer = this.options.transformers[block.type]

    const doc = new VueBlockDocument(
      id,
      this,
      this._createBlockGetter(block, index),
      () => this.descriptor,
      transformer,
    )

    this.blockDocs.set(id, doc)

    return doc
  }

  private _indexOf(block: SFCBlock): number {
    const descriptor = this._descriptor
    if (descriptor == null) return -1
    if (block.type === 'script' || block.type === 'template') return -1

    const index =
      block.type === 'style'
        ? descriptor.styles.indexOf(block as SFCStyleBlock)
        : descriptor.customBlocks.indexOf(block)

    return index
  }

  private _createBlockGetter(
    block: SFCBlock | SFCTemplateBlock | SFCScriptBlock | SFCStyleBlock,
    index: number = -1,
  ): () => SFCBlock {
    switch (block.type) {
      case 'template':
        return () => this._descriptor?.template ?? block
      case 'script':
        return 'setup' in block && block.setup != null && block.setup !== false
          ? () => this._descriptor?.scriptSetup ?? block
          : () => this._descriptor?.script ?? block
      case 'style':
        return () => this._descriptor?.styles[index] ?? block
      default:
        return () => this._descriptor?.customBlocks[index] ?? block
    }
  }

  private _parse(): SFCDescriptor {
    if (this._descriptor == null || this._isDirty) {
      if (this._descriptor == null) {
        console.debug(`[VueDX] (SFC) Parse: ${this.fileName}`)
      } else {
        console.debug(`[VueDX] (SFC) Re-parse: ${this.fileName}`)
      }
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

        const hasTemplateChanged = hasBlockChanged(prev.template, next.template)
        const hasScriptChanged = hasBlockChanged(prev.script, next.script)
        const hasScriptSetupChanged = hasBlockChanged(
          prev.scriptSetup,
          next.scriptSetup,
        )

        if (hasTemplateChanged || hasScriptChanged || hasScriptSetupChanged) {
          if (prev.template != null) {
            const fileName = this._getBlockFileName(prev.template, 0)
            this.blockDocs.delete(fileName)
            console.debug(`[VueDX] (SFC) Stale: ${fileName}`)
          }
        }

        if (hasScriptSetupChanged || hasTemplateChanged) {
          if (prev.scriptSetup != null) {
            const fileName = this._getBlockFileName(prev.scriptSetup, 0)
            this.blockDocs.delete(fileName)
            console.debug(`[VueDX] (SFC) Stale: ${fileName}`)
          }
        }

        if (hasScriptChanged) {
          if (prev.script != null) {
            const fileName = this._getBlockFileName(prev.script, 0)
            this.blockDocs.delete(fileName)
            console.debug(`[VueDX] (SFC) Stale: ${fileName}`)
          }
        }

        prev.styles.forEach((block, i) => {
          if (
            hasBlockChanged(prev.styles[i], next.styles[i]) &&
            block != null
          ) {
            this.blockDocs.delete(this._getBlockFileName(block, i))
          }
        })

        prev.customBlocks.forEach((block, i) => {
          if (
            hasBlockChanged(prev.customBlocks[i], next.customBlocks[i]) &&
            block != null
          ) {
            this.blockDocs.delete(this._getBlockFileName(block, i))
          }
        })
      }

      const code = this._generateMainModuleText(result.descriptor)

      this._descriptor = result.descriptor
      this._errors = result.errors
      this._mainText = code.content
      this._activeTSDocIDs = code.files
      this._isDirty = false
      console.debug(
        `[VueDX] (SFC) New Files: ${JSON.stringify(
          Array.from(code.files),
          null,
          2,
        )}`,
      )
    }

    return this._descriptor
  }

  private _generateMainModuleText(
    descriptor: SFCDescriptor,
  ): { content: string; files: Set<string> } {
    const { template, script, scriptSetup, styles, customBlocks } = descriptor

    const code: string[] = [
      `import 'vuedx~runtime'`,
      `import 'vuedx~project-runtime'`,
    ]
    const props: string[] = [] // TODO: Detect inner element to forward attrs.
    const slots: string[] = [] // TODO: Detect slot types from script/script setup.
    const files = new Set<string>()

    const createImportSource = (id: string): string =>
      JSON.stringify(`./${Path.posix.basename(id.replace(/\.[tj]sx?$/, ''))}`)

    if (template != null) {
      const id = this._getBlockTSId(template, 0)
      if (id != null) {
        files.add(id)
        const node = this.templateAST?.children[0]
        if (isPlainElementNode(node)) {
          props.push(`JSX.IntrinsicElements['${node.tag}']`)
        }
        code.push(`import { __VueDX_Slots } from ${createImportSource(id)}`)
        slots.push('__VueDX_Slots')
      }
    }

    styles.forEach((block, index) => {
      const id = this._getBlockTSId(block, index)
      if (id != null) {
        files.add(id)
        code.push(`import ${createImportSource(id)}`)
      }
    })

    customBlocks.forEach((block, index) => {
      const id = this._getBlockTSId(block, index)
      if (id != null) {
        files.add(id)
        code.push(`import ${createImportSource(id)}`)
      }
    })

    const name = getComponentName(this.fileName)
    if (scriptSetup != null) {
      const id = this._getBlockTSId(scriptSetup, 0)
      if (id != null) {
        files.add(id)
        const idPath = createImportSource(id)

        props.push(`InstanceType<typeof _Self>['$props']`)
        code.push(`import { __VueDX_DefineComponent as _Self } from ${idPath}`)
        code.push(`export * from ${idPath}`) // TODO: Only type exports are supported.

        if (script != null) {
          const id = this._getBlockTSId(script, 0)
          if (id != null) {
            files.add(id)
            code.push(`export * from ${createImportSource(id)}`)
          }
        }
      }
    } else if (script != null) {
      const id = this._getBlockTSId(script, 0)

      if (id != null) {
        files.add(id)
        const idPath = createImportSource(id)

        props.push(`InstanceType<typeof _Self>['$props']`)
        code.push(`import { __VueDX_DefineComponent as _Self } from ${idPath}`)
        code.push(`export * from ${idPath}`)
      }
    }

    if (props.length === 0) props.push('{}')
    if (slots.length === 0) slots.push('{}')

    // TODO: do not generate default export for .vue.p
    code.push('')
    code.push(`class ${name} {`)
    code.push(`  $props!: ${props.join(' & ')}`)
    code.push(`  $slots!: ${slots.join(' & ')}`)
    code.push('}')
    code.push(`export default ${name}`)
    code.push(``)

    return {
      content: code.join('\n'),
      files,
    }
  }

  private _getBlockFileName(
    block: SFCBlock | SFCScriptBlock | SFCStyleBlock | SFCTemplateBlock,
    index: number,
    lang: string = this._getBlockLanguage(block),
  ): string {
    return toFileName({
      type: 'virtual',
      fileName: this.fileName,
      blockType: block.type,
      blockLang: lang,
      blockIndex: ['script', 'template'].includes(block.type)
        ? undefined
        : index,
      setup:
        isScriptBlock(block) && typeof block.setup === 'boolean'
          ? block.setup
          : undefined,
    })
  }

  private _getBlockTSId(
    block: SFCBlock | SFCScriptBlock | SFCStyleBlock | SFCTemplateBlock,
    index: number,
  ): string | null {
    const transformer = this.options.transformers[block.type]
    if (transformer == null) return null
    return this._getBlockFileName(block, index, transformer.output(block))
  }

  private _getBlockLanguage(block: SFCBlock): string {
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

  private _getBlockFromId(
    id: string,
  ): {
    block: SFCBlock | SFCStyleBlock | SFCTemplateBlock | SFCScriptBlock | null
    index?: number
  } {
    const fileName = parseFileName(id)
    if (fileName.type !== 'virtual') return { block: null }
    if (this._descriptor == null) return { block: null }
    switch (fileName.blockType) {
      case 'template':
        return { block: this._descriptor.template }
      case 'script':
        return {
          block:
            fileName.setup === true
              ? this._descriptor.scriptSetup
              : this._descriptor.script,
        }
      case 'style':
        if (fileName.blockIndex == null) return { block: null }
        return {
          block: this._descriptor.styles[fileName.blockIndex] ?? null,
          index: fileName.blockIndex,
        }
      default:
        if (fileName.blockIndex == null) return { block: null }
        return {
          block: this._descriptor.customBlocks[fileName.blockIndex] ?? null,
          index: fileName.blockIndex,
        }
    }
  }

  static create(
    fileName: string,
    content: string,
    options: VueSFCDocumentOptions = {},
    version: number = 0,
  ): VueSFCDocument {
    return new VueSFCDocument(
      fileName,
      {
        ...options,
        transformers: {
          ...options.transformers,
          ...builtins,
        },
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
    console.debug(
      `[VueDX] (SFC) ${this.version} ${this.fileName}  is marked dirty`,
    )
  }
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

function isScriptBlock(block: SFCBlock): block is SFCScriptBlock {
  return block.type === 'script'
}
