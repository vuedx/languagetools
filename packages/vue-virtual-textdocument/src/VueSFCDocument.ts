import type {
  CompilerError,
  SFCBlock,
  SFCDescriptor,
} from '@vuedx/compiler-sfc'
import {
  CompileOptions,
  CompileOutput,
  compileWithDecodedSourceMap,
} from '@vuedx/compiler-tsx'
import {
  binarySearch,
  BinarySearchBias,
  createCache,
  invarient,
  isNotNull,
} from '@vuedx/shared'
import type { RootNode } from '@vuedx/template-ast-types'
import {
  Position,
  Range,
  TextDocument,
  TextDocumentContentChangeEvent,
} from 'vscode-languageserver-textdocument'

export type Mapping = [
  GeneratedLine: number,
  GeneratedColumn: number,
  OriginalLine: number,
  OriginalColumn: number,
  Name: string | undefined,
]
interface VueToTsxSnapshot extends CompileOutput {
  readonly document: TextDocument
  readonly mappingsByOriginalOrder: Mapping[]
  readonly mappingsByGeneratedOrder: Mapping[]
  readonly blocks: SFCBlock[]
}

type SourceMapBiasType = typeof BinarySearchBias[keyof typeof BinarySearchBias]

const enum MappingKey {
  GeneratedLine,
  GeneratedColumn,
  OriginalLine,
  OriginalColumn,
  Name,
}

const MappingNameRE = /^<<(P|S|T)>>(\d+)(?:|\d+)$/

export class VueSFCDocument implements TextDocument {
  public readonly originalFileName: string
  public readonly geneartedFileName: string
  public readonly options: Required<CompileOptions>

  private _original: TextDocument

  private constructor(
    original: TextDocument,
    options: Omit<CompileOptions, 'cache'>,
  ) {
    this._original = original
    this.options = {
      isTypeScript: true,
      internalIdentifierPrefix: '__VueDX_',
      runtimeModuleName: 'vue',
      typeCheckModuleName: 'vuedx~runtime',
      ...options,
      cache: createCache(15), // More than 15 blocks in SFC is not common.
    }
    this.originalFileName = this.options.fileName
    this.geneartedFileName = `${this.options.fileName}${
      this.options.isTypeScript ? '.tsx' : '.jsx'
    }`
  }

  // Used by tsserver
  public lineMap: unknown | undefined
  // Used by tsserver
  public get text(): string {
    return this.getText()
  }

  public get fileName(): string {
    return this.geneartedFileName
  }

  public get descriptor(): SFCDescriptor {
    return this._compile().descriptor
  }

  public get errors(): Array<CompilerError | SyntaxError> {
    return this._compile().errors
  }

  public get templateAST(): RootNode | undefined {
    return this._compile().template
  }

  public get original(): TextDocument {
    return this._original
  }

  public get generated(): TextDocument {
    return this._compile().document
  }

  public get blocks(): SFCBlock[] {
    return this._compile().blocks
  }

  public getText(range?: Range): string {
    return this.generated.getText(range)
  }

  public positionAt(offset: number): Position {
    return this.generated.positionAt(offset)
  }

  public offsetAt(position: Position): number {
    return this.generated.offsetAt(position)
  }

  public get version(): number {
    return this.original.version // use original version as generated code might be out of date
  }

  public get lineCount(): number {
    return this.generated.lineCount
  }

  public get uri(): string {
    return `file://${this.originalFileName}`
  }

  public get languageId(): string {
    return this.options.isTypeScript ? 'typescript' : 'javascript'
  }

  public getBlockAt(offset: number): SFCBlock | null {
    const block = this.blocks.find(
      (block) =>
        block.loc.start.offset <= offset && offset <= block.loc.end.offset,
    )

    return block ?? null
  }

  private _snapshot: VueToTsxSnapshot | null = null
  private _compile(): VueToTsxSnapshot {
    if (this._snapshot?.document.version !== this.original.version) {
      const result = compileWithDecodedSourceMap(
        this.original.getText(),
        this.options,
      )
      const mappings = memoize(() =>
        result.map.mappings.flatMap((mappings, line) =>
          mappings.map((mapping) => {
            const m: Mapping = [
              line,
              mapping[0],
              mapping[2] ?? -1,
              mapping[3] ?? -1,
              result.map.names[mapping[4] ?? -1],
            ]
            return m
          }),
        ),
      )
      const descriptor = result.descriptor
      const mappingsByOriginalOrder = memoize(() =>
        mappings().slice().sort(compareOriginal),
      )
      const mappingsByGeneratedOrder = memoize(() =>
        mappings().slice().sort(compareGenerated),
      )
      const blocks = memoize(() => {
        return [
          descriptor.scriptSetup,
          descriptor.script,
          descriptor.template,
          ...descriptor.styles,
          ...descriptor.customBlocks,
        ]
          .filter(isNotNull)
          .sort((a, b) => a.loc.start.offset - b.loc.start.offset)
      })
      this._snapshot = {
        ...result,
        get mappingsByOriginalOrder() {
          return mappingsByOriginalOrder()
        },
        get mappingsByGeneratedOrder() {
          return mappingsByGeneratedOrder()
        },
        get blocks() {
          return blocks()
        },
        document: TextDocument.create(
          `file://${this.geneartedFileName}`,
          this.options.isTypeScript ? 'typescript' : 'javascript',
          this.original.version,
          result.code,
        ),
      }
    }

    return this._snapshot
  }

  public findMapping(
    positionType: 'original' | 'generated',
    position: Position,
    searchBias: SourceMapBiasType = BinarySearchBias.GREATEST_LOWER_BOUND,
  ): Mapping | null {
    const snapshot = this._snapshot ?? this._compile()
    const needle = [] as unknown as Mapping
    if (positionType === 'original') {
      needle[MappingKey.OriginalLine] = position.line
      needle[MappingKey.OriginalColumn] = position.character
    } else {
      needle[MappingKey.GeneratedLine] = position.line
      needle[MappingKey.GeneratedColumn] = position.character
    }
    const index = binarySearch(
      needle,
      positionType === 'original'
        ? snapshot.mappingsByOriginalOrder
        : snapshot.mappingsByGeneratedOrder,
      positionType === 'original' ? compareOriginal : compareGenerated,
      searchBias,
    )
    if (index < 0) return null

    return snapshot.mappingsByOriginalOrder[index] ?? null
  }

  public originalPositionFor(
    position: Position,
    searchBias?: SourceMapBiasType,
  ): Position | null {
    const mapping = this.findMapping('generated', position, searchBias)

    if (mapping == null) return null

    return {
      line: mapping[MappingKey.OriginalLine],
      character: mapping[MappingKey.OriginalColumn],
    }
  }

  public originalOffsetAt(
    offset: number,
    searchBias?: SourceMapBiasType,
  ): number | null {
    const position = this.originalPositionFor(
      this.generated.positionAt(offset),
      searchBias,
    )
    if (position == null) return null
    return this.original.offsetAt(position)
  }

  public findOriginalTextSpan(spanInGeneratedText: TextSpan): TextSpan | null {
    const position = this.generated.positionAt(spanInGeneratedText.start)
    const low = this.findMapping(
      'generated',
      position,
      BinarySearchBias.GREATEST_LOWER_BOUND,
    )
    if (low != null) {
      const result = this._processMappingUsingMeta(
        'generated',
        spanInGeneratedText,
        low,
      )
      if (result != null) return result
    }

    const high = this.findMapping(
      'generated',
      position,
      BinarySearchBias.LEAST_UPPER_BOUND,
    )

    if (high != null) {
      const result = this._processMappingUsingMeta(
        'generated',
        spanInGeneratedText,
        high,
      )
      if (result != null) return result
    }

    if (low != null) {
      return {
        start: this.original.offsetAt({
          line: low[MappingKey.OriginalLine],
          character: low[MappingKey.OriginalColumn],
        }),
        length: spanInGeneratedText.length,
      }
    }

    return null
  }

  public findGeneratedTextSpan(spanInOriginalText: TextSpan): TextSpan | null {
    const position = this.original.positionAt(spanInOriginalText.start)
    const low = this.findMapping(
      'original',
      position,
      BinarySearchBias.GREATEST_LOWER_BOUND,
    )

    if (low != null) {
      const result = this._processMappingUsingMeta(
        'original',
        spanInOriginalText,
        low,
      )
      if (result != null) return result
    }

    const high = this.findMapping(
      'original',
      position,
      BinarySearchBias.LEAST_UPPER_BOUND,
    )

    if (high != null) {
      const result = this._processMappingUsingMeta(
        'original',
        spanInOriginalText,
        high,
      )
      if (result != null) return result
    }

    if (low != null) {
      return {
        start: this.generated.offsetAt({
          line: low[MappingKey.GeneratedLine],
          character: low[MappingKey.GeneratedColumn],
        }),
        length: spanInOriginalText.length,
      }
    }

    return null
  }

  private _processMappingUsingMeta(
    kind: 'generated' | 'original',
    span: TextSpan,
    mapping: Mapping,
  ): TextSpan | null {
    const name = mapping[MappingKey.Name]
    if (name == null) return null
    const result = MappingNameRE.exec(name)
    if (result != null) {
      switch (result[1]) {
        case 'P':
          {
            invarient(result[2])
            const generatedLength = parseInt(result[2], 10)
            invarient(Number.isInteger(generatedLength))
            const original = this.original.offsetAt({
              line: mapping[MappingKey.OriginalLine],
              character: mapping[MappingKey.OriginalColumn],
            })
            const genreated = this.generated.offsetAt({
              line: mapping[MappingKey.GeneratedLine],
              character: mapping[MappingKey.GeneratedColumn],
            })

            if (kind === 'generated') {
              // if span is in genreated range
              if (
                contains({ start: genreated, length: generatedLength }, span)
              ) {
                const skipLength = Math.abs(span.start - genreated)
                const length = Math.min(
                  generatedLength - skipLength,
                  span.length,
                )

                return {
                  start: original + skipLength,
                  length,
                }
              }
            } else {
              if (
                contains({ start: original, length: generatedLength }, span)
              ) {
                const skipLength = Math.abs(span.start - original)
                const length = Math.min(
                  generatedLength - skipLength,
                  span.length,
                )

                return {
                  start: genreated + skipLength,
                  length,
                }
              }
            }
          }
          break
        case 'S':
          {
            invarient(result[2] != null && result[3] != null)
            const originalLength = parseInt(result[2], 10)
            const generatedLength = parseInt(result[3], 10)
            invarient(Number.isInteger(originalLength))
            invarient(Number.isInteger(generatedLength))
            invarient(originalLength >= generatedLength)
            const diffLength = Math.abs(generatedLength - originalLength)
            const original = this.original.offsetAt({
              line: mapping[MappingKey.OriginalLine],
              character: mapping[MappingKey.OriginalColumn],
            })
            const genreated = this.generated.offsetAt({
              line: mapping[MappingKey.GeneratedLine],
              character: mapping[MappingKey.GeneratedColumn],
            })

            if (kind === 'generated') {
              if (
                contains({ start: genreated, length: generatedLength }, span)
              ) {
                const skipLength = Math.abs(span.start - genreated)
                if (skipLength <= diffLength) {
                  return { start: original, length: originalLength }
                }

                const length = Math.min(
                  originalLength - (skipLength - diffLength),
                  span.length,
                )

                return {
                  start: original + skipLength,
                  length,
                }
              } else {
                if (
                  contains({ start: original, length: originalLength }, span)
                ) {
                  const skipLength = Math.abs(span.start - original)
                  const length = Math.min(
                    originalLength - skipLength,
                    span.length,
                  )

                  return {
                    start: genreated + diffLength + skipLength,
                    length,
                  }
                }
              }
            }
          }
          break
        case 'T':
          {
            invarient(result[2] != null && result[3] != null)
            const originalLength = parseInt(result[2], 10)
            const generatedLength = parseInt(result[3], 10)
            invarient(Number.isInteger(originalLength))
            invarient(Number.isInteger(generatedLength))
            invarient(originalLength >= generatedLength)
            const original = this.original.offsetAt({
              line: mapping[MappingKey.OriginalLine],
              character: mapping[MappingKey.OriginalColumn],
            })

            const genreated = this.generated.offsetAt({
              line: mapping[MappingKey.GeneratedLine],
              character: mapping[MappingKey.GeneratedColumn],
            })

            if (kind === 'generated') {
              if (
                contains({ start: genreated, length: generatedLength }, span)
              ) {
                return {
                  start: original,
                  length: originalLength,
                }
              }
            } else {
              if (contains({ start: original, length: originalLength }, span)) {
                return {
                  start: genreated,
                  length: generatedLength,
                }
              }
            }
          }
          break
      }
    }
    return null
  }

  public generatedPositionFor(
    position: Position,
    searchBias?: SourceMapBiasType,
  ): Position | null {
    const mapping = this.findMapping('original', position, searchBias)
    if (mapping == null) return null
    return {
      line: mapping[MappingKey.GeneratedLine],
      character: mapping[MappingKey.GeneratedColumn],
    }
  }

  public generatedOffsetAt(
    offset: number,
    searchBias?: SourceMapBiasType,
  ): number | null {
    const position = this.generatedPositionFor(
      this.original.positionAt(offset),
      searchBias,
    )
    if (position == null) return null

    return this.generated.offsetAt(position)
  }

  static create(
    fileName: string,
    content: string,
    options: Omit<CompileOptions, 'cache' | 'fileName'> = {},
    version: number = 0,
  ): VueSFCDocument {
    return new VueSFCDocument(
      TextDocument.create(`file://${fileName}`, 'vue', version, content),
      { ...options, fileName },
    )
  }

  public update(
    changes: TextDocumentContentChangeEvent[],
    version: number,
  ): void {
    this._original = TextDocument.update(this._original, changes, version)
    this.lineMap = undefined
  }
}

function compareOriginal(a: Mapping, b: Mapping): number {
  const comparison = a[MappingKey.OriginalLine] - b[MappingKey.OriginalLine]
  return comparison !== 0
    ? comparison
    : a[MappingKey.OriginalColumn] - b[MappingKey.OriginalColumn]
}

function compareGenerated(a: Mapping, b: Mapping): number {
  const comparison = a[MappingKey.GeneratedLine] - b[MappingKey.GeneratedLine]
  return comparison !== 0
    ? comparison
    : a[MappingKey.GeneratedColumn] - b[MappingKey.GeneratedColumn]
}

function memoize<T>(fn: () => T): () => T {
  let value: T | undefined
  return () => {
    if (value === undefined) value = fn()
    return value
  }
}

export interface TextSpan {
  start: number
  length: number
}

function contains(haystack: TextSpan, needle: TextSpan): boolean {
  return (
    haystack.start <= needle.start &&
    haystack.start + haystack.length >= needle.start + needle.length
  )
}
