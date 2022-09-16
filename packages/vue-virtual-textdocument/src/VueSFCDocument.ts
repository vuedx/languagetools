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
  invariant,
  isNotNull,
  startMeasure,
} from '@vuedx/shared'
import type { RootNode } from '@vuedx/template-ast-types'
import {
  Position,
  Range,
  TextDocument,
  TextDocumentContentChangeEvent,
} from 'vscode-languageserver-textdocument'
import { encode } from 'sourcemap-codec'

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
  public readonly generatedFileName: string
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
    this.generatedFileName = `${this.options.fileName}${
      this.options.isTypeScript ? '.tsx' : '.jsx'
    }`
  }

  /** @deprecated used by tsserver */
  public lineMap: unknown | undefined

  /** @deprecated used by tsserver */
  public get text(): string {
    return this.original.getText()
  }

  /** @deprecated used by tsserver */
  public getLineAndCharacterOfPosition(position: number): Position {
    return this.original.positionAt(position)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public getSourceFile(fileName: string = this.fileName) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this

    return {
      fileName,
      get text(): string {
        return ctx.text
      },
      get lineMap(): unknown | undefined {
        return ctx.lineMap
      },
      set lineMap(value: unknown | undefined) {
        ctx.lineMap = value
      },
      getLineAndCharacterOfPosition: (position: number) =>
        ctx.getLineAndCharacterOfPosition(position),
    }
  }

  public get fileName(): string {
    return this.originalFileName
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

  public get snapshot(): VueToTsxSnapshot {
    return this._compile()
  }

  public get map(): string {
    const map = this._compile().map
    return JSON.stringify({
      ...map,
      version: 3,
      mappings: encode(map.mappings),
    })
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
      const previous = this._snapshot
      try {
        const endCompileMeasure = startMeasure('VueSFCDocument.compile')
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
            `file://${this.generatedFileName}`,
            this.options.isTypeScript ? 'typescript' : 'javascript',
            this.original.version,
            result.code,
          ),
        }

        endCompileMeasure()
      } catch (e) {
        console.error('Failed to compile', e)
        if (previous != null) {
          this._snapshot = {
            ...previous,
            errors: [...previous.errors, e as SyntaxError],
            document: TextDocument.update(
              previous.document,
              [],
              this.original.version,
            ),
          }
        } else {
          this._snapshot = {
            descriptor: {
              script: null,
              scriptSetup: null,
              template: null,
              styles: [],
              customBlocks: [],
            },
            errors: [e as SyntaxError],
            blocks: [],
            code: '',
            map: {
              file: '',
              mappings: [],
              names: [],
              sources: [],
              sourcesContent: [],
            },
            document: TextDocument.create(
              `file://${this.generatedFileName}`,
              this.options.isTypeScript ? 'typescript' : 'javascript',
              this.original.version,
              '',
            ),
            mappingsByGeneratedOrder: [],
            mappingsByOriginalOrder: [],
            unusedIdentifiers: [],
          }
        }
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

    return (
      (positionType === 'original'
        ? snapshot.mappingsByOriginalOrder[index]
        : snapshot.mappingsByGeneratedOrder[index]) ?? null
    )
  }

  public originalPositionFor(position: Position): Position | null {
    const offset = this.generated.offsetAt(position)
    const originalOffset = this.originalOffsetAt(offset)
    if (originalOffset == null) return null
    return this.original.positionAt(originalOffset)
  }

  public originalOffsetAt(offset: number): number | null {
    const span = this.findOriginalTextSpan({ start: offset, length: 1 })
    if (span == null) return null
    return span.start
  }

  public findOriginalTextSpan(spanInGeneratedText: TextSpan): TextSpan | null {
    const position = this.generated.positionAt(spanInGeneratedText.start)
    const low = this.findMapping(
      'generated',
      position,
      BinarySearchBias.GREATEST_LOWER_BOUND,
    )

    if (low == null || low[MappingKey.OriginalLine] < 0) return null
    const result = this._processMappingUsingMeta(
      'generated',
      spanInGeneratedText,
      low,
    )
    if (result != null) return result

    const generatedStart = this.generated.offsetAt({
      line: low[MappingKey.GeneratedLine],
      character: low[MappingKey.GeneratedColumn],
    })

    const start =
      this.original.offsetAt({
        line: low[MappingKey.OriginalLine],
        character: low[MappingKey.OriginalColumn],
      }) +
      // source mappings are prefix based, so we assume the original
      // and generated text have the same prefix.
      Math.abs(generatedStart - spanInGeneratedText.start)

    const high = this.findMapping(
      'generated',
      position,
      BinarySearchBias.LEAST_UPPER_BOUND,
    )
    if (high != null && high[MappingKey.OriginalLine] >= 0) {
      const end = this.original.offsetAt({
        line: high[MappingKey.OriginalLine],
        character: high[MappingKey.OriginalColumn],
      })

      return {
        start,
        length: Math.min(end - start, spanInGeneratedText.length),
      }
    }

    return { start, length: spanInGeneratedText.length }
  }

  public findGeneratedTextSpan(spanInOriginalText: TextSpan): TextSpan | null {
    const position = this.original.positionAt(spanInOriginalText.start)
    const low = this.findMapping(
      'original',
      position,
      BinarySearchBias.GREATEST_LOWER_BOUND,
    )

    if (low == null) return null
    const result = this._processMappingUsingMeta(
      'original',
      spanInOriginalText,
      low,
    )
    if (result != null) return result

    const originalStart = this.original.offsetAt({
      line: low[MappingKey.OriginalLine],
      character: low[MappingKey.OriginalColumn],
    })
    const start =
      this.generated.offsetAt({
        line: low[MappingKey.GeneratedLine],
        character: low[MappingKey.GeneratedColumn],
      }) +
      // source mappings are prefix based, so we assume the original
      // and generated text have the same prefix.
      Math.abs(originalStart - spanInOriginalText.start)

    const high = this.findMapping(
      'original',
      position,
      BinarySearchBias.LEAST_UPPER_BOUND,
    )
    if (high != null) {
      const end = this.generated.offsetAt({
        line: high[MappingKey.GeneratedLine],
        character: high[MappingKey.GeneratedColumn],
      })

      return {
        start,
        length: Math.min(end - start, spanInOriginalText.length),
      }
    }

    return {
      start,
      length: spanInOriginalText.length,
    }
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
            invariant(result[2])
            const generatedLength = parseInt(result[2], 10)
            invariant(Number.isInteger(generatedLength))
            const original = this.original.offsetAt({
              line: mapping[MappingKey.OriginalLine],
              character: mapping[MappingKey.OriginalColumn],
            })
            const generated = this.generated.offsetAt({
              line: mapping[MappingKey.GeneratedLine],
              character: mapping[MappingKey.GeneratedColumn],
            })

            if (kind === 'generated') {
              // if span is in generated range
              if (
                contains({ start: generated, length: generatedLength }, span)
              ) {
                const skipLength = Math.abs(span.start - generated)
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
                  start: generated + skipLength,
                  length,
                }
              }
            }
          }
          break
        case 'S':
          {
            invariant(result[2] != null && result[3] != null)
            const originalLength = parseInt(result[2], 10)
            const generatedLength = parseInt(result[3], 10)
            invariant(Number.isInteger(originalLength))
            invariant(Number.isInteger(generatedLength))
            invariant(originalLength >= generatedLength)
            const diffLength = Math.abs(generatedLength - originalLength)
            const original = this.original.offsetAt({
              line: mapping[MappingKey.OriginalLine],
              character: mapping[MappingKey.OriginalColumn],
            })
            const generated = this.generated.offsetAt({
              line: mapping[MappingKey.GeneratedLine],
              character: mapping[MappingKey.GeneratedColumn],
            })

            if (kind === 'generated') {
              if (
                contains({ start: generated, length: generatedLength }, span)
              ) {
                const skipLength = Math.abs(span.start - generated)
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
                    start: generated + diffLength + skipLength,
                    length,
                  }
                }
              }
            }
          }
          break
        case 'T':
          {
            invariant(result[2] != null && result[3] != null)
            const originalLength = parseInt(result[2], 10)
            const generatedLength = parseInt(result[3], 10)
            invariant(Number.isInteger(originalLength))
            invariant(Number.isInteger(generatedLength))
            invariant(originalLength >= generatedLength)
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

  public generatedPositionFor(position: Position): Position | null {
    const offset = this.original.offsetAt(position)
    const generatedOffset = this.generatedOffsetAt(offset)
    if (generatedOffset == null) return null
    return this.generated.positionAt(generatedOffset)
  }

  public generatedOffsetAt(offset: number): number | null {
    const span = this.findGeneratedTextSpan({ start: offset, length: 1 })
    if (span == null) return null
    return span.start
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
