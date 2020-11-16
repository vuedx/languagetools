import {
  ComponentsOptionAnalyzer,
  createAnalyzer,
  ScriptBlockAnalyzer,
} from '@vuedx/analyze'
import {
  parse,
  SFCBlock,
  SFCDescriptor,
  SFCParseOptions,
  SFCStyleBlock,
} from '@vuedx/compiler-sfc'
import { CodegenResult, compile, ComponentImport } from '@vuedx/compiler-tsx'
import {
  Position,
  TextDocument,
  TextDocumentContentChangeEvent,
} from 'vscode-languageserver-textdocument'
import {
  BlockSelector,
  INTERNAL_MODULE_SELECTOR,
  MODULE_SELECTOR,
  RENDER_SELECTOR,
  SCRIPT_BLOCK_SELECTOR,
  SCRIPT_SETUP_BLOCK_SELECTOR,
  Selector,
  SelectorLike,
  TEMPLATE_BLOCK_SELECTOR,
} from '../types'
import {
  asUri,
  binarySearch,
  getBlockLanguage,
  getLanguageExtension,
  isNotNull,
  isNumber,
  isOffsetInBlock,
  isString,
  parseVirtualFileName,
  relativeVirtualImportPath,
  VIRTUAL_FILENAME_SEPARATOR,
} from '../utils'
import { ProxyTextDocument } from './ProxyTextDocument'
import {
  SourceMapConsumer,
  RawSourceMap,
  Position as SourceMapPosition,
} from 'source-map'

const analyzer = createAnalyzer([ScriptBlockAnalyzer, ComponentsOptionAnalyzer])
const replaceRE = /./g
const parseSFC: typeof parse = /* #__PURE__ */ (source, options) => {
  const result = parse(source, options)

  // @vue/compiler-sfc does not pads template.
  if (result.descriptor.template?.content != null) {
    const { template } = result.descriptor
    // @ts-expect-error - parse reuses
    if (template.__padded__ !== true) {
      // @ts-expect-error
      template.__padded__ = true
      template.content =
        source.substr(0, template.loc.start.offset).replace(replaceRE, ' ') +
        template.content
    }
  }

  return result
}

interface CreateVirtualTextDocumentOptions<T extends Selector = Selector> {
  container: VueTextDocument
  selector: T
  uri: string
  languageId: string
  version: number
  content: string
}
interface BlockTransformResult {
  code: string
  map?: RawSourceMap
}
interface CreateTransformedBlockTextDocumentOptions<
  T extends Selector = Selector
> extends CreateVirtualTextDocumentOptions<T> {
  sourceSelector?: Selector
  transformer: (document: TransformedBlockTextDocument) => BlockTransformResult
}

export class VirtualTextDocument extends ProxyTextDocument {
  public readonly container: VueTextDocument
  public readonly selector: Selector
  protected isDirty = true

  public markDirty(): void {
    this.isDirty = true
  }

  protected constructor(
    container: VueTextDocument,
    selector: Selector,
    doc: TextDocument,
  ) {
    super(doc)

    this.container = container
    this.selector = selector
  }

  protected refresh(): void {
    if (this.isDirty || this.doc.version !== this.container.version) {
      this.isDirty = false
      const block = this.container.getBlock(this.selector as BlockSelector)
      this.doc = TextDocument.update(
        this.doc,
        [{ text: block != null ? block.content : '' }],
        this.container.version,
      )
    }
  }

  public static create(
    options: CreateVirtualTextDocumentOptions,
  ): VirtualTextDocument {
    return new VirtualTextDocument(
      options.container,
      options.selector,
      TextDocument.create(
        options.uri,
        options.languageId,
        options.version,
        options.content,
      ),
    )
  }
}

export class TransformedBlockTextDocument extends VirtualTextDocument {
  private consumer: SourceMapConsumer | null = null

  protected constructor(
    container: VueTextDocument,
    selector: Selector,
    transformed: TextDocument,
    private source: TextDocument | VirtualTextDocument,
    private readonly _transform: (
      document: TransformedBlockTextDocument,
    ) => BlockTransformResult,
  ) {
    super(container, selector, transformed)
  }

  private toTextDocumentPosition({
    line,
    column,
  }: SourceMapPosition): Position {
    return { line: line - 1, character: column }
  }

  private toSourceMapPosition({
    line,
    character,
  }: Position): SourceMapPosition {
    return { line: line + 1, column: character }
  }

  tryGetSourceOffset(offset: number): number | undefined {
    if (this.consumer != null) {
      const position = this.consumer.originalPositionFor({
        ...this.toSourceMapPosition(this.doc.positionAt(offset)),
        bias: SourceMapConsumer.GREATEST_LOWER_BOUND,
      })

      if (position?.line != null) {
        const generated = this.consumer.generatedPositionFor({
          ...position,
          bias: SourceMapConsumer.GREATEST_LOWER_BOUND,
        })
        const delta =
          offset - this.offsetAt(this.toTextDocumentPosition(generated))
        return (
          this.source.offsetAt(this.toTextDocumentPosition(position)) + delta
        )
      }
    }
  }

  tryGetGeneratedOffset(offset: number): number | undefined {
    if (this.consumer != null) {
      const generated = this.consumer.generatedPositionFor({
        ...this.toSourceMapPosition(this.source.positionAt(offset)),
        source: this.container.fsPath,
        bias: SourceMapConsumer.GREATEST_LOWER_BOUND,
      })

      if (generated.line != null) {
        const original = this.consumer.originalPositionFor({
          ...generated,
          bias: SourceMapConsumer.GREATEST_LOWER_BOUND,
        })
        const delta =
          offset - this.source.offsetAt(this.toTextDocumentPosition(original))
        return this.doc.offsetAt(this.toTextDocumentPosition(generated)) + delta
      }
    }
  }

  protected refresh(): void {
    if (this.isDirty || this.doc.version !== this.container.version) {
      this.isDirty = false
      const { code, map } = this.transform()
      if (map != null) {
        if (!(this.source instanceof VirtualTextDocument)) {
          const block = this.container.getBlock(this.selector as BlockSelector)
          this.source = TextDocument.update(
            this.source,
            [{ text: block != null ? block.content : '' }],
            this.container.version,
          )
        }
        map.sources = [this.container.fsPath]
        this.consumer = new SourceMapConsumer(map)
      }

      this.doc = TextDocument.update(
        this.doc,
        [{ text: code }],
        this.container.version,
      )
    }
  }

  public transform(): BlockTransformResult {
    return this._transform(this)
  }

  public static create(
    options: CreateTransformedBlockTextDocumentOptions,
  ): TransformedBlockTextDocument {
    const source =
      options.sourceSelector != null
        ? options.container.getDocument(options.sourceSelector)
        : TextDocument.create(
            options.uri,
            options.languageId,
            -1,
            options.content,
          )

    return new TransformedBlockTextDocument(
      options.container,
      options.selector,
      TextDocument.create(options.uri, options.languageId, -1, options.content),
      source,
      options.transformer,
    )
  }
}

function createVueModuleTextDocument(
  options: CreateVirtualTextDocumentOptions<{ type: typeof MODULE_SELECTOR }>,
): TransformedBlockTextDocument {
  return TransformedBlockTextDocument.create({
    ...options,
    transformer: (document) => {
      const { script, scriptSetup, template } = document.container.descriptor

      const lines: string[] = []
      let scriptHasDefaultExport = false
      let scriptMayHaveDefaultExport = false
      let scriptSetupHasDefaultExport = false
      let usesDefineComponent = false
      let usePropTypes = false
      if (script != null) {
        const path =
          script.src != null
            ? script.src.replace(/\.([^.]+)$/, '')
            : relativeVirtualImportPath(
                document.container.getDocumentFileName('script'),
              )
        lines.push(`export * from '${path}'`)
        lines.unshift(`import script from '${path}'`)
        scriptHasDefaultExport = script.content.includes('export default ')
        usesDefineComponent =
          script.content.includes(' defineComponent(') ||
          script.content.includes(' defineComponent<')
        scriptMayHaveDefaultExport = script.src != null
      }

      if (scriptSetup != null) {
        const path = relativeVirtualImportPath(
          document.container.getDocumentFileName('scriptSetup'),
        )
        lines.unshift(`import * as scriptSetup from '${path}'`)
        scriptSetupHasDefaultExport = scriptSetup.content.includes(
          'export default ',
        )
        usesDefineComponent =
          scriptSetup.content.includes(' defineComponent(') ||
          scriptSetup.content.includes(' defineComponent<')
        usePropTypes = scriptSetup.content.includes('declare const props:')
      }

      if (!usesDefineComponent) {
        lines.unshift(`import { defineComponent } from 'vue'`)
      }
      if (scriptSetupHasDefaultExport) {
        lines.push(
          `const component = ${
            usesDefineComponent
              ? 'scriptSetup.default'
              : 'defineComponent(scriptSetup.default)'
          }`,
        )
      } else if (scriptHasDefaultExport || scriptMayHaveDefaultExport) {
        lines.push(
          `const component = ${
            usesDefineComponent ? 'script' : 'defineComponent(script)'
          }`,
        )
      } else {
        lines.push(
          `const component = defineComponent${
            usePropTypes ? '<scriptSetup.$Props>' : ''
          }({})`,
        )
      }

      if (template != null) {
        const path = relativeVirtualImportPath(
          document.container.getDocumentFileName('_render'),
        )
        lines.unshift(`import { render } from '${path}'`)
        lines.push(`component.render = render`)
      }

      lines.push(`export default component`)

      return { code: lines.join('\n') }
    },
  })
}

function createInternalModuleTextDocument(
  options: CreateVirtualTextDocumentOptions<{
    type: typeof INTERNAL_MODULE_SELECTOR
  }>,
): TransformedBlockTextDocument {
  return TransformedBlockTextDocument.create({
    ...options,
    transformer: (document) => {
      const script = document.container.descriptor.script
      const scriptSetup = document.container.descriptor.scriptSetup

      const lines: string[] = []
      lines.push(`import { defineComponent } from 'vue'`)
      if (scriptSetup != null) {
        const path = relativeVirtualImportPath(
          document.container.getDocumentFileName('scriptSetup'),
        )

        lines.push(`import * as scriptSetup from '${path}'`)

        const hasDefaultExport = scriptSetup.content.includes('export default')

        if (hasDefaultExport) {
          lines.push(`import options from '${path}'`)
        }

        if (scriptSetup.content.includes('declare const props:')) {
          lines.push(`import type { $Props } from '${path}'`)
          lines.push(
            `const component = defineComponent<$Props>(${
              hasDefaultExport
                ? '{ ...options, setup: () => scriptSetup }'
                : '{ setup: () => scriptSetup }'
            })`,
          )
        } else {
          lines.push(
            `const component = defineComponent({ ${
              hasDefaultExport ? '...options,' : ''
            } setup: () => scriptSetup })`,
          )
        }
      } else if (script != null) {
        const path = relativeVirtualImportPath(
          document.container.getDocumentFileName('script'),
        )
        const hasDefineComponent = script.content.includes(` defineComponent(`)
        lines.push(`import script from '${path}'`)
        if (hasDefineComponent) {
          lines.push(`const component = script`)
        } else {
          lines.push(`const component = defineComponent(script)`)
        }
      } else {
        lines.push(`import { defineComponent } from 'vue'`)
        lines.push(`const component = defineComponent({})`)
      }

      lines.push(`export default component`)

      return { code: lines.join('\n') }
    },
  })
}

function createScriptSetupTextDocument(
  options: CreateVirtualTextDocumentOptions<{
    type: typeof SCRIPT_SETUP_BLOCK_SELECTOR
  }>,
): TransformedBlockTextDocument {
  return TransformedBlockTextDocument.create({
    ...options,
    transformer: (document) => {
      const { scriptSetup } = document.container.descriptor
      if (scriptSetup == null) return { code: '' }

      // TODO: Transform
      // TODO: Remove this hack and put a proper transform.
      if (scriptSetup.content.includes('declare const props:')) {
        return {
          code: scriptSetup.content.replace(
            'declare const props:',
            'export type $Props =',
          ),
        }
      }

      return { code: scriptSetup.content }
    },
  })
}

// TODO: Support style variables type check.

export class RenderFunctionTextDocument extends TransformedBlockTextDocument {
  private result!: CodegenResult & { template?: string }
  private originalRange: [number, number] = [0, 0]
  private originalMappings: CodegenResult['mappings'] = []
  private generatedRange: [number, number] = [0, 0]
  private generatedMappings: CodegenResult['mappings'] = []
  private expressionsMap: Record<string, [number, number]> = {}
  private _contextCompletionsTriggerOffset: number = 0
  private _tagCompletionsTriggerOffset: number = 0

  constructor(
    container: VueTextDocument,
    selector: Selector,
    transformed: TextDocument,
    source: TextDocument,
  ) {
    super(container, selector, transformed, source, () => {
      const code = this.tryGenerate()

      return { code, map: this.result?.map }
    })
  }

  public get contextCompletionsTriggerOffset(): number {
    return this._contextCompletionsTriggerOffset
  }

  public get tagCompletionsTriggerOffset(): number {
    return this._tagCompletionsTriggerOffset
  }

  public get ast(): CodegenResult['ast'] | undefined {
    if (this.result != null) return this.result.ast
  }

  public get parserErrors(): CodegenResult['errors'] {
    return this.result?.errors ?? []
  }

  public getOriginalOffsetAt(
    offset: number,
  ): undefined | { offset: number; length: number } {
    this.refresh()
    const [start, end] = this.generatedRange

    if (start <= offset && offset <= end) {
      const mapping = binarySearch(
        this.generatedMappings,
        ([start, length]) => {
          if (start <= offset && offset <= start + length) return 0
          return start - offset
        },
        true,
      )

      if (mapping != null) {
        const offsetInSource =
          mapping[0] <= offset && offset <= mapping[0] + mapping[1]
            ? offset - mapping[0]
            : mapping[3] === 0
            ? -1 // Include previous character if mapped to zero length
            : 0

        return {
          offset: mapping[2] + offsetInSource,
          length: Math.max(1, mapping[3] - offsetInSource),
        }
      }
    }
  }

  public findExpression(
    offset: number,
    length: number,
  ): undefined | { offset: number; length: number } {
    const text = this.getText().substr(offset, length)
    const expression = this.expressionsMap[text.trim()]

    if (expression != null) {
      return { offset: expression[0], length: expression[1] }
    }
  }

  public isInGeneratedRange(offset: number): boolean {
    this.refresh()
    const [start, end] = this.generatedRange

    return start <= offset && offset <= end
  }

  public getGeneratedOffsetAt(
    offset: number,
  ): undefined | { length: number; offset: number } {
    this.refresh()
    const [start, end] = this.originalRange

    if (start <= offset && offset <= end) {
      const mapping = binarySearch(
        this.originalMappings,
        ([, , start, length]) => {
          if (start <= offset && offset <= start + length) return 0
          return start - offset
        },
      )

      if (mapping != null) {
        const offsetInGenerated = offset - mapping[2]

        return {
          offset: mapping[0] + offsetInGenerated,
          length: Math.max(1, mapping[1] - offsetInGenerated),
        }
      }
    }
  }

  public getAllGeneratedOffsetsAt(
    offset: number,
  ): undefined | Array<{ length: number; offset: number }> {
    this.refresh()
    const [start, end] = this.originalRange

    if (start <= offset && offset <= end) {
      const mappings = this.generatedMappings.filter(([, , start, length]) => {
        return start <= offset && offset <= start + length
      })

      return mappings.map((mapping) => {
        const offsetInGenerated =
          mapping[2] <= offset && offset <= mapping[2] + mapping[3]
            ? offset - mapping[2]
            : 0
        return {
          offset: mapping[0] + offsetInGenerated,
          length: Math.max(1, mapping[1] - offsetInGenerated),
        }
      })
    }

    return []
  }

  protected tryGenerate(): string {
    try {
      return this.generate()
    } catch (error) {
      const code = `\n/* ${(error as Error).message} ${
        (error as Error).stack ?? ''
      } */ \n`

      if (error.loc == null) {
        error.loc = this.container.descriptor.template?.loc
      }

      this.originalRange = [0, 0]
      this.originalMappings = []
      this.generatedRange = [0, 0]
      this.generatedMappings = []
      this.result = {
        errors: [error],
        code,
        ast: null as any,
        expressions: [],
        mappings: [],
      }

      return code
    }
  }

  protected generate(): string {
    const { template } = this.container.descriptor

    if (template == null) {
      return ''
    } else if (this.result?.template === template.content) {
      return this.result.code
    } else {
      const errors: any[] = []
      this.result = compile(template.content, {
        filename: this.container.fsPath,
        components: this.getLocalComponents(),
        onError: (error) => {
          errors.push(error)
        },
      })

      this.result.template = template.content

      this.result.errors.push(...errors)

      this.originalRange = [template.loc.start.offset, template.loc.end.offset]
      this.originalMappings = this.result.mappings.slice()
      this.generatedRange = [
        this.result.code.indexOf('/*@@vue:start*/'),
        this.result.code.indexOf('/*@@vue:end*/'),
      ]
      this.generatedMappings = this.result.mappings.filter(
        (m) => this.generatedRange[0] <= m[0] && m[1] <= this.generatedRange[1],
      )
      this._contextCompletionsTriggerOffset = this.result.code.indexOf(
        '/*@@vue:completions*/',
      )
      this._tagCompletionsTriggerOffset =
        this.result.code.indexOf('/*@@vue:completionsTag*/') +
        '/*@@vue:completionsTag*/'.length +
        1

      this.originalMappings.sort((a, b) => a[2] - b[2])
      this.generatedMappings.sort((a, b) => a[0] - b[0])

      this.expressionsMap = {}
      const code = this.result.code

      this.generatedMappings.forEach((p) => {
        this.expressionsMap[code.substr(p[0], p[1])] = [p[2], p[3]]
      })

      return this.result.code
    }
  }

  public toDisplayMappings(): string {
    const mappings: string[] = []
    const pos = (p: Position): string => `${p.line + 1}:${p.character + 1}`

    if (this.result != null) {
      const templateDoc = this.container.getDocument('template')
      const template = templateDoc.getText()
      const render = this.doc.getText()
      this.result.mappings.forEach((m) => {
        mappings.push(
          `${pos(templateDoc.positionAt(m[2]))} => ${pos(
            this.doc.positionAt(m[0]),
          )} (${m[3]}:${m[1]}) "${template.substr(
            m[2],
            m[3],
          )}"->"${render.substr(m[0], m[1])}"`,
        )
      })
    }

    return mappings.join('\n')
  }

  protected getLocalComponents(): Record<string, ComponentImport> | undefined {
    const { script, scriptSetup } = this.container.descriptor

    const content = scriptSetup?.content ?? script?.content

    if (content != null) {
      // TODO: Cache this.
      const result = analyzer.analyzeScript(content, 'component.ts')
      const map: Record<string, ComponentImport> = {}
      result.components.forEach((component) => {
        const result = {
          path: component.source.moduleName,
          named: component.source.exportName != null,
          name: component.source.exportName,
        }

        component.aliases.forEach((name) => {
          map[name] = result
        })
      })

      return map
    }
  }

  public static create(
    options: CreateVirtualTextDocumentOptions,
  ): RenderFunctionTextDocument {
    return new RenderFunctionTextDocument(
      options.container,
      options.selector,
      TextDocument.create(
        options.uri,
        options.languageId,
        options.version,
        options.content,
      ),
      options.container.getDocument('template'),
    )
  }
}

export class VueTextDocument extends ProxyTextDocument {
  private isDirty = true
  private sfc!: ReturnType<typeof parse>
  private readonly options: SFCParseOptions
  private readonly documents = new Map<
    string,
    VirtualTextDocument | undefined
  >()

  constructor(doc: TextDocument, options?: SFCParseOptions) {
    super(doc)

    this.options = {
      ...options,
      filename: this.fsPath,
      sourceMap: false,
      pad: 'space',
    }
  }

  public get descriptor(): SFCDescriptor {
    this.parse()
    return this.sfc.descriptor
  }

  public all(): VirtualTextDocument[] {
    return Array.from(this.documents.values()).filter(isNotNull)
  }

  public getBlock(selector: BlockSelector): SFCBlock | null | undefined {
    switch (selector.type) {
      case SCRIPT_BLOCK_SELECTOR:
        return this.descriptor.script
      case SCRIPT_SETUP_BLOCK_SELECTOR:
        return this.descriptor.scriptSetup
      case TEMPLATE_BLOCK_SELECTOR:
        return this.descriptor.template
      default:
        if ('index' in selector) {
          const blocks =
            selector.type === 'style'
              ? this.descriptor.styles
              : this.descriptor.customBlocks
          return blocks[selector.index]
        }
    }
  }

  public blockAt(position: Position | number): SFCBlock | null | undefined {
    const offset = isNumber(position) ? position : this.offsetAt(position)
    const descriptor = this.descriptor

    if (isOffsetInBlock(offset, descriptor.template)) return descriptor.template
    if (isOffsetInBlock(offset, descriptor.script)) return descriptor.script
    if (isOffsetInBlock(offset, descriptor.scriptSetup))
      return descriptor.scriptSetup

    return (
      descriptor.styles.find(isOffsetInBlock.bind(null, offset)) ??
      descriptor.customBlocks.find(isOffsetInBlock.bind(null, offset))
    )
  }

  public documentAt(
    position: Position | number,
  ): VirtualTextDocument | undefined {
    const block = this.blockAt(position)

    if (block != null) {
      const selector = this.getBlockSelector(block)
      if (selector != null) {
        return this.getDocument(selector)
      }
    }
  }

  public getBlockSelector(block: SFCBlock): BlockSelector | undefined {
    switch (block.type) {
      case 'script':
        if ('setup' in block) {
          return { type: SCRIPT_SETUP_BLOCK_SELECTOR }
        } else {
          return { type: SCRIPT_BLOCK_SELECTOR }
        }
      case 'template':
        return { type: TEMPLATE_BLOCK_SELECTOR }
      case 'style': {
        const index = this.descriptor.styles.indexOf(block as SFCStyleBlock)
        if (index >= 0) return { type: 'style', index }
        break
      }
      default: {
        const index = this.descriptor.customBlocks.indexOf(
          block as SFCStyleBlock,
        )
        if (index >= 0) return { type: 'customBlocks', index }
        break
      }
    }
  }

  public getDocumentFileName(selectorLike: SelectorLike): string {
    const selector: Selector = isString(selectorLike)
      ? { type: selectorLike }
      : selectorLike
    const id = this.getDocumentId(selector)
    const ext = getLanguageExtension(this.getDocumentLanguage(selector))

    return this.fsPath + VIRTUAL_FILENAME_SEPARATOR + id + '.' + ext
  }

  public getDocument(
    selector: typeof RENDER_SELECTOR,
  ): RenderFunctionTextDocument
  public getDocument(selector: SelectorLike): VirtualTextDocument // TODO: Can return undefined
  public getDocument(selector: string): VirtualTextDocument | undefined
  public getDocument(selector: SelectorLike | string): any {
    this.parse()

    if (isString(selector)) {
      if (selector.includes('/') || selector.includes('\\')) {
        const result = parseVirtualFileName(selector)
        if (result == null) return
        selector = result.selector
      } else {
        selector = ({ type: selector } as unknown) as Selector
      }
    }

    const id = this.getDocumentId(selector)

    if (!this.documents.has(id)) {
      switch (selector.type) {
        case INTERNAL_MODULE_SELECTOR:
          this.documents.set(id, this.createInternalModuleDocument())
          break
        case MODULE_SELECTOR:
          this.documents.set(id, this.createModuleDocument())
          break
        case RENDER_SELECTOR:
          this.documents.set(id, this.createRenderDocument())
          break
        default:
          this.documents.set(id, this.createBlockDocument(selector))
          break
      }
    }

    return this.documents.get(id)
  }

  protected createBlockDocument(
    selector: BlockSelector,
  ): VirtualTextDocument | undefined {
    const block = this.getBlock(selector)
    if (block == null) return
    const options = {
      container: this,
      selector,
      uri: asUri(this.getDocumentFileName(selector)),
      languageId: this.getDocumentLanguage(selector),
      version: this.version,
      content: block.content,
    }

    if (selector.type === SCRIPT_SETUP_BLOCK_SELECTOR) {
      return createScriptSetupTextDocument({ ...options, selector })
    } else {
      return VirtualTextDocument.create(options)
    }
  }

  protected createInternalModuleDocument(): TransformedBlockTextDocument {
    return createInternalModuleTextDocument({
      container: this,
      selector: { type: INTERNAL_MODULE_SELECTOR },
      uri: asUri(this.getDocumentFileName(INTERNAL_MODULE_SELECTOR)),
      languageId: this.getDocumentLanguage({ type: INTERNAL_MODULE_SELECTOR }),
      version: this.version,
      content: '',
    })
  }

  protected createModuleDocument(): TransformedBlockTextDocument {
    return createVueModuleTextDocument({
      container: this,
      selector: { type: MODULE_SELECTOR },
      uri: asUri(this.getDocumentFileName(MODULE_SELECTOR)),
      languageId: this.getDocumentLanguage({ type: MODULE_SELECTOR }),
      version: this.version,
      content: '',
    })
  }

  protected createRenderDocument(): RenderFunctionTextDocument {
    return RenderFunctionTextDocument.create({
      container: this,
      selector: { type: RENDER_SELECTOR },
      uri: asUri(this.getDocumentFileName(RENDER_SELECTOR)),
      languageId: this.getDocumentLanguage({ type: RENDER_SELECTOR }),
      version: this.version,
      content: '',
    })
  }

  protected getDocumentLanguage(selector: Selector): string {
    switch (selector.type) {
      case INTERNAL_MODULE_SELECTOR:
      case MODULE_SELECTOR:
        return 'typescript'
      case RENDER_SELECTOR:
        return 'typescriptreact'
      default:
        return getBlockLanguage(this.getBlock(selector))
    }
  }

  protected getDocumentId(selector: Selector): string {
    if (isString(selector)) return selector
    if ('index' in selector) return `${selector.type}__${selector.index}`
    return selector.type
  }

  protected parse(): void {
    if (!this.isDirty) return
    this.isDirty = false
    const source = this.getText()
    try {
      this.sfc = parseSFC(source, this.options)
    } catch {
      // -- skip invalid state.
      // TODO: Catch errors.
    }
  }

  public static create(
    uri: string,
    languageId: string,
    version: number,
    content: string,
    options?: SFCParseOptions,
  ): VueTextDocument {
    return new VueTextDocument(
      TextDocument.create(uri, languageId, version, content),
      options,
    )
  }

  public static update(
    document: VueTextDocument,
    changes: TextDocumentContentChangeEvent[],
    version: number,
  ): VueTextDocument {
    document.doc = TextDocument.update(document.doc, changes, version)
    document.isDirty = true
    document.documents.forEach((document) => {
      if (document != null) document.markDirty()
    })

    return document
  }
}
