import {
  ComponentRegistrationInfo,
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
import {
  CodegenResult,
  compile,
  ComponentImport,
  getIdentifiers,
} from '@vuedx/compiler-tsx'
import { getComponentName, isNotNull, isNumber, isString } from '@vuedx/shared'
import * as Path from 'path'
import {
  Position as SourceMapPosition,
  RawSourceMap,
  SourceMapConsumer,
} from 'source-map'
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
  TEMPLATE_AST_SELECTOR,
  TEMPLATE_BLOCK_SELECTOR,
} from '../types'
import {
  asUri,
  binarySearch,
  getBlockLanguage,
  getLanguageExtension,
  isOffsetInBlock,
  parseVirtualFileName,
  relativeVirtualImportPath,
  VIRTUAL_FILENAME_SEPARATOR,
} from '../utils'
import { ProxyTextDocument } from './ProxyTextDocument'

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
  transformer(document: TransformedBlockTextDocument): BlockTransformResult
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

    return undefined
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

    return undefined
  }

  protected refresh(): void {
    if (this.isDirty || this.doc.version !== this.container.version) {
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
      this.isDirty = false
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
    languageId: 'ts',
    transformer: (document) => {
      const { script, scriptSetup, template } = document.container.descriptor
      const api = document.container.options.vueVersion.startsWith('2.')
        ? '__vuedx_runtime__vue2__'
        : 'vue'

      const lines: string[] = []
      let scriptHasDefaultExport = false
      let scriptMayHaveDefaultExport = false
      let scriptSetupHasDefaultExport = false
      let usesDefineComponent = false
      let usePropTypes = false
      const name = getComponentName(document.container.fsPath)
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
        scriptSetupHasDefaultExport = true
        usesDefineComponent = true
        usePropTypes = false
      }

      if (!usesDefineComponent) {
        lines.unshift(`import { defineComponent } from '${api}'`)
      }
      if (scriptSetupHasDefaultExport) {
        lines.push(
          `const ${name} = ${
            usesDefineComponent
              ? 'scriptSetup.default'
              : 'defineComponent(scriptSetup.default)'
          }`,
        )
      } else if (scriptHasDefaultExport || scriptMayHaveDefaultExport) {
        lines.push(
          `const ${name} = ${
            usesDefineComponent ? 'script' : 'defineComponent(script)'
          }`,
        )
      } else {
        lines.push(
          `const ${name} = defineComponent${
            usePropTypes ? '<scriptSetup.$Props>' : ''
          }({})`,
        )
      }

      const renderFilePath = relativeVirtualImportPath(
        document.container.getDocumentFileName('_render'),
      )
      if (template != null) {
        lines.unshift(`import { render } from '${renderFilePath}'`)
        lines.push(`${name}.render = render`)
      } else {
        lines.unshift(`import "${renderFilePath}"`)
      }

      lines.push(`export default ${name}`)

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
      const api = document.container.options.vueVersion.startsWith('2.')
        ? '__vuedx_runtime__vue2__'
        : 'vue'
      const lines: string[] = []
      lines.push(`import { defineComponent } from '${api}'`)
      if (scriptSetup != null) {
        const path = relativeVirtualImportPath(
          document.container.getDocumentFileName('scriptSetup'),
        )

        lines.push(`import component from '${path}'`)
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
        lines.push(`import { defineComponent } from '${api}'`)
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
      const RE_DEFINE_PROPS = /(?:const|let)\s+([^\s]+)[\s\r\n]*=[\s\r\n]*defineProps/
      const RE_DEFINE_EMIT = /(?:const|let)\s+([^\s]+)[\s\r\n]*=[\s\r\n]*defineEmit/
      const props = RE_DEFINE_PROPS.exec(scriptSetup.content)
      const emit = RE_DEFINE_EMIT.exec(scriptSetup.content)
      const identifiers = getIdentifiers(scriptSetup.content, true)

      if (props?.[1] != null) {
        identifiers.delete(props[1].trim())
      }

      if (emit?.[1] != null) {
        identifiers.delete(emit[1].trim())
      }

      identifiers.delete('defineEmit')
      identifiers.delete('defineProps')

      const propType = props?.[1] != null ? `typeof ${props[1]}` : '{}'
      return {
        code: [
          scriptSetup.content,
          `/*@@vuedx:script-setup-export*/`,
          `// @ts-ignore`,
          `import { defineComponent as _VueDX_defineComponent } from 'vue'`,
          `// @ts-ignore`,
          `export default _VueDX_defineComponent(${
            scriptSetup.lang !== 'ts'
              ? `/** @param {${propType}} _VueDX_props*/`
              : ''
          }(_VueDX_props${
            scriptSetup.lang === 'ts' ? `: ${propType}` : ''
          }) => ({${Array.from(identifiers).join(',')}}))`,
          ``,
        ].join('\n'),
      }
    },
  })
}

// TODO: Support style variables type check.

export class RenderFunctionTextDocument extends TransformedBlockTextDocument {
  private result!: CodegenResult & { template?: string }
  private originalRange: [number, number] = [0, 0]
  private originalMappings: CodegenResult['mappings'] = []
  private generatedRange: [number, number] = [0, 0]
  private templateIdentifiersRange: [number, number] = [0, 0]
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
    this.refresh()
    if (this.result != null) return this.result.ast

    return undefined
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

    return undefined
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

    return undefined
  }

  public isInGeneratedRange(offset: number): boolean {
    this.refresh()
    const [start, end] = this.generatedRange

    return start <= offset && offset <= end
  }

  public isInTemplateIdentifierRange(offset: number): boolean {
    this.refresh()
    const [start, end] = this.templateIdentifiersRange

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

    return undefined
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
      this.templateIdentifiersRange = [0, 0]
      this.generatedMappings = []
      this.result = {
        preamble: '',
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
    } else if (!this.isDirty && this.result?.template === template.content) {
      return this.result.code
    } else {
      const errors: any[] = []
      const components = this.getKnownComponents()
      this.result = compile(template.content, {
        mode: 'module',
        filename: this.container.fsPath,
        components: components,
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
      this.templateIdentifiersRange = [
        this.result.code.indexOf('/*@@vue:identifiers-start*/'),
        this.result.code.indexOf('/*@@vue:identifiers-end*/'),
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

  protected getKnownComponents(): Record<string, ComponentImport> {
    const componentsByName: Record<string, ComponentImport> = {}

    const dir = Path.posix.dirname(this.container.fsPath)
    this.container.options.getGlobalComponents().forEach((component) => {
      const result = {
        path: Path.posix.isAbsolute(component.source.moduleName)
          ? getRelativeFileName(dir, component.source.moduleName)
          : component.source.moduleName,
        named: component.source.exportName != null,
        name: component.source.exportName,
      }

      component.aliases.forEach((name) => {
        componentsByName[name] = result
      })
    })

    const { script, scriptSetup } = this.container.descriptor
    const content = scriptSetup?.content ?? script?.content
    if (content != null) {
      // TODO: Cache this.
      try {
        const result = analyzer.analyzeScript(content, 'component.ts')
        result.components.forEach((component) => {
          const result = {
            path: component.source.moduleName,
            named: component.source.exportName != null,
            name: component.source.exportName,
          }

          component.aliases.forEach((name) => {
            componentsByName[name] = result
          })
        })
      } catch {
        // TODO: Handle this...
      }
    }

    return componentsByName
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

interface VueTextDocumentOptions {
  vueVersion: string
  getGlobalComponents(): ComponentRegistrationInfo[]
}

export class VueTextDocument extends ProxyTextDocument {
  private isDirty = true
  private sfc!: ReturnType<typeof parse>
  private readonly parseOptions: SFCParseOptions

  private readonly documents = new Map<
    string,
    VirtualTextDocument | undefined
  >()

  public readonly options: VueTextDocumentOptions

  constructor(
    doc: TextDocument,
    options?: VueTextDocumentOptions,
    parseOptions?: SFCParseOptions,
  ) {
    super(doc)

    this.options = {
      vueVersion: '3.0.0',
      getGlobalComponents: () => [],
      ...options,
    }

    this.parseOptions = {
      ...parseOptions,
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
    this.parse()
    return Array.from(this.documents.values()).filter(isNotNull)
  }

  public getBlock(selector: BlockSelector): SFCBlock | null | undefined {
    this.parse()
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

    return undefined
  }

  public blockAt(position: Position | number): SFCBlock | null | undefined {
    const descriptor = this.descriptor
    const offset = isNumber(position) ? position : this.offsetAt(position)

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

    return undefined
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

    return undefined
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
        case TEMPLATE_AST_SELECTOR:
          this.documents.set(id, this.createTemplateASTDocument())
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

  protected createTemplateASTDocument(): TransformedBlockTextDocument {
    return TransformedBlockTextDocument.create({
      container: this,
      sourceSelector: { type: RENDER_SELECTOR },
      selector: { type: TEMPLATE_AST_SELECTOR },
      uri: asUri(this.getDocumentFileName(TEMPLATE_AST_SELECTOR)),
      languageId: this.getDocumentLanguage({ type: TEMPLATE_AST_SELECTOR }),
      version: this.version,
      content: '',
      transformer() {
        const code = JSON.stringify(
          this.container.getDocument(RENDER_SELECTOR)?.ast ?? {},
          null,
          2,
        )
          .replace(/"type": 0,/g, (_) => `${_} // Root`)
          .replace(/"type": 1,/g, (_) => `${_} // Element`)
          .replace(/"type": 2,/g, (_) => `${_} // Text`)
          .replace(/"type": 3,/g, (_) => `${_} // Comment`)
          .replace(/"type": 4,/g, (_) => `${_} // Expression`)
          .replace(/"type": 5,/g, (_) => `${_} // Interpolation`)
          .replace(/"type": 6,/g, (_) => `${_} // Attribute`)
          .replace(/"type": 7,/g, (_) => `${_} // Directive`)

        return {
          code,
        }
      },
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
      case TEMPLATE_AST_SELECTOR:
        return 'jsonc'
      default:
        return getBlockLanguage(this.getBlock(selector))
    }
  }

  protected getDocumentId(selector: Selector): string {
    if (isString(selector)) return selector
    if ('index' in selector) return `${selector.type}__${selector.index}`
    return selector.type
  }

  public markDirty(): void {
    this.isDirty = true
    this.all().forEach((doc) => doc.markDirty())
  }

  protected parse(): void {
    if (!this.isDirty) return
    this.isDirty = false
    const source = this.getText()
    try {
      const sfc = parseSFC(source, this.parseOptions)

      if (this.sfc != null) {
        const { descriptor: prev } = this.sfc
        const { descriptor: next } = sfc

        if (prev.script?.lang !== next.script?.lang) {
          this.documents.delete(
            this.getDocumentId({ type: SCRIPT_BLOCK_SELECTOR }),
          )
        }
        if (prev.scriptSetup?.lang !== next.scriptSetup?.lang) {
          this.documents.delete(
            this.getDocumentId({ type: SCRIPT_SETUP_BLOCK_SELECTOR }),
          )
        }
        if (prev.template?.lang !== next.template?.lang) {
          this.documents.delete(
            this.getDocumentId({ type: TEMPLATE_BLOCK_SELECTOR }),
          )
        }
      }

      this.sfc = sfc
    } catch (error) {
      // -- skip invalid state.
      console.error(
        `Error parsing SFC "${this.fsPath}": ${(error as Error).message} ${
          (error as Error).stack ?? ''
        }`,
      )
    }
  }

  public static create(
    uri: string,
    languageId: string,
    version: number,
    content: string,
    options?: VueTextDocumentOptions,
    parseOptions?: SFCParseOptions,
  ): VueTextDocument {
    return new VueTextDocument(
      TextDocument.create(uri, languageId, version, content),
      options,
      parseOptions,
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

function getRelativeFileName(dir: string, fileName: string): string {
  const relative = Path.posix.relative(dir, fileName)

  return relative.startsWith('.') ? relative : `./${relative}`
}
