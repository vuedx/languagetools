import type { RawSourceMap, SFCBlock, SFCDescriptor } from '@vuedx/compiler-sfc'
import {
  FindPosition,
  Position as SourceMapPosition,
  SourceMapConsumer,
} from 'source-map'
import {
  Position,
  Range,
  TextDocument,
} from 'vscode-languageserver-textdocument'
import {
  annotations,
  BlockTransformer,
  TransformerError,
} from './BlockTransformer'
import type { VueSFCDocument } from './VueSFCDocument'
import * as Path from 'path'
import { MappingKind, MappingMetadata } from '@vuedx/compiler-tsx'
import { cache } from '@vuedx/shared'

export interface TextSpan {
  start: number
  length: number
}

const METADATA_PREFIX = ';;;VueDX:'
export class VueBlockDocument {
  public readonly source: TextDocument
  public readonly generated: TextDocument | null = null
  public readonly sourceMap: SourceMapConsumer | null = null
  public readonly rawSourceMap: RawSourceMap | null = null

  public readonly errors: TransformerError[] = []
  public ast?: any

  public readonly sourceRange: Range
  public readonly ignoredZones: Array<{
    start: number
    end: number
    range: Range
  }> = []

  public readonly tsxCompletionsOffset: number | null = null
  public readonly tsCompletionsOffset: number | null = null
  private readonly templateGlobals: { start: number; end: number } | null = null

  public get block(): SFCBlock {
    return this.blockGetter()
  }

  public get descriptor(): SFCDescriptor {
    return this.descriptorGetter()
  }

  public get fileName(): string {
    return this.id
  }

  public readonly tsFileName: string | null = null

  public constructor(
    private readonly id: string,
    public readonly parent: VueSFCDocument,
    private readonly blockGetter: () => SFCBlock,
    private readonly descriptorGetter: () => SFCDescriptor,
    private readonly transformer?: BlockTransformer,
  ) {
    const block = blockGetter()
    const descriptor = descriptorGetter()

    this.source = TextDocument.create(
      id,
      Path.posix.extname(id).slice(1),
      0,
      block.content,
    )
    this.sourceMap = null
    this.sourceRange = {
      start: {
        line: block.loc.start.line,
        character: block.loc.start.column,
      },
      end: {
        line: block.loc.start.line,
        character: block.loc.start.column,
      },
    }
    if (this.transformer != null) {
      const tsLang = this.transformer.output(block)
      this.tsFileName = id.replace(/lang\..*$/, `lang.${tsLang}`)

      try {
        const { ast, code, map, errors } = this.transformer.transform(
          block.content,
          id,
          {
            block,
            document: parent,
            descriptor,
            annotations,
          },
        )

        this.ast = ast
        this.errors = errors ?? []
        if (map != null) {
          this.sourceMap = new SourceMapConsumer(map)
          this.rawSourceMap = map
        }

        this.generated = TextDocument.create(
          this.tsFileName,
          tsLang, // TODO: Convert to vscode lang
          0,
          code,
        )

        let lastIndex = 0
        this.ignoredZones = []
        while (lastIndex < code.length) {
          const start = code.indexOf(
            annotations.diagnosticsIgnore.start,
            lastIndex,
          )
          if (start < 0) break
          let end = code.indexOf(annotations.diagnosticsIgnore.end, start)
          if (end < 0) {
            end = code.length
          }

          this.ignoredZones.push({
            start,
            end,
            range: {
              start: this.generated.positionAt(start),
              end: this.generated.positionAt(end),
            },
          })

          lastIndex = end
        }

        this.tsxCompletionsOffset = null
        if (tsLang === 'tsx') {
          const tsxOffset = code.indexOf(annotations.tsxCompletions)
          if (tsxOffset >= 0) {
            const prefixLength = tsxOffset + annotations.tsxCompletions.length
            this.tsxCompletionsOffset = prefixLength + 1 // TODO: Maybe use next index of "<""
          }
        }

        const tsOffset = code.indexOf(annotations.tsCompletions)
        if (tsOffset >= 0) {
          this.tsCompletionsOffset = tsOffset
        } else {
          this.tsCompletionsOffset = null
        }

        const globalsOffset = code.indexOf(annotations.templateGlobals.start)

        if (globalsOffset >= 0) {
          const start = globalsOffset + annotations.templateGlobals.end.length
          const end = code.indexOf(
            annotations.templateGlobals.end,
            globalsOffset,
          )
          this.templateGlobals = { start, end }
        }
      } catch (error) {
        this.errors = [
          {
            code: 1,
            message: (error as Error).message,
            severity: 'error',
            start: block.loc.start.offset,
            length: 1,
            source: 'SFC/VirtualDocument',
          },
        ]
      }
    }
  }

  /**
   * Finds generated position using source map if availabe.
   * @param offset position in .vue file
   * @returns position in generated .ts/.tsx file
   * @deprecated - Use {@link findGeneratedOffetAt}
   */
  @cache()
  public generatedOffetAt(offset: number): number {
    return this.findGeneratedOffetAt(this.toBlockOffset(offset))
  }

  /**
   * Finds generated range using source map if availabe.
   * @param offset position in .vue file
   * @param length text length
   * @returns range in generated .ts/.tsx file
   * @deprecated - Use {@link findGeneratedTextSpan}
   */
  @cache((args: [number, number]) => `${args[0]}:${args[1]}`)
  public generatedOffetAndLengthAt(
    offset: number,
    length: number,
  ): { offset: number; length: number } {
    const textSpan = this.findGeneratedTextSpan({
      start: this.toBlockOffset(offset),
      length,
    })

    return { offset: textSpan.start, length: textSpan.length }
  }

  /**
   * Finds generated position using source map if availabe.
   */
  @cache()
  public findGeneratedOffetAt(offset: number): number {
    return this.findGeneratedTextSpan({ start: offset, length: 1 }).start
  }

  /**
   * Finds generated range using source map if availabe.
   * @param offset position in .vue file
   * @param length text length
   * @returns range in generated .ts/.tsx file
   */
  @cache(([span]: [TextSpan]) => `${span.start}:${span.length}`)
  public findGeneratedTextSpan(textSpanInBlockText: TextSpan): TextSpan {
    if (this.sourceMap == null || this.generated == null) {
      return textSpanInBlockText
    }

    const { start: offset, length } = textSpanInBlockText

    const args = {
      ...this._toSourceMapPosition(this.source.positionAt(offset)),
      source: this.fileName,
    }
    const gen = this.generated

    const opPos: SourceMapPosition = this.sourceMap.generatedPositionFor(args)
    const opOffset = this.generated.offsetAt(this._toPosition(opPos))
    const opOrginal = this.findOriginalOffsetMappingAt(opOffset, 1)

    let position = opPos
    let result = opOffset
    let original = opOrginal

    if (opOrginal?.mapping != null) {
      const positions = this.sourceMap
        .allGeneratedPositionsFor({
          ...this._toSourceMapPosition(
            this.source.positionAt(opOrginal.mapping.s.s),
          ),
          source: this.fileName,
        })
        .filter((position) => {
          const og = this.findOriginalOffsetMappingAt(
            gen.offsetAt(this._toPosition(position)),
            -1,
          )

          return og?.mapping != null && og.mapping.k !== MappingKind.reverseOnly
        })

      const newPosition = positions.pop()
      if (newPosition != null) {
        position = newPosition
        result = this.generated.offsetAt(this._toPosition(position))
        original = this.findOriginalOffsetMappingAt(result, -1)
      }
    }

    // If generated text is copied from original text then we can get exact position.
    if (original?.mapping?.k === MappingKind.copy) {
      const diff = offset - original.mapping.s.s

      return { start: result + diff, length }
    }

    // Transformed text should always match the whole text.
    return {
      start: result,
      length: original?.mapping != null ? original.mapping.g.l : length,
    }
  }

  /**
   * Find original position in .vue file for position in genreated text
   * @param offset position in generated .ts/.tsx
   * @returns position in .vue file
   * @deprecated - Use {@link findOriginalOffsetAt}
   */
  @cache()
  public originalOffsetAt(offset: number): number {
    return this.toFileOffset(this.findOriginalOffsetAt(offset))
  }

  /**
   * Find original range in .vue file for position in genreated text
   * @param offset position in generated .ts/.tsx
   * @param length range at offset
   * @returns range in .vue file
   * @deprecated - Use {@link findOriginalTextSpan}
   */
  @cache((args: [number, number]) => `${args[0]}:${args[1]}`)
  public originalOffsetAndLengthAt(
    offset: number,
    length: number,
  ): { offset: number; length: number } | null {
    const textSpan = this.findOriginalTextSpan({ start: offset, length })
    if (textSpan == null) return null

    return {
      offset: this.toFileOffset(textSpan.start),
      length: textSpan.length,
    }
  }

  /**
   * Find original position in block text for position in genreated text
   */
  @cache()
  public findOriginalOffsetAt(offset: number): number {
    return this.findOriginalTextSpan({ start: offset, length: 1 })?.start ?? 0
  }

  /**
   * Find original range in block file for range in genreated text
   */
  @cache(([span]: [TextSpan]) => `${span.start}:${span.length}`)
  public findOriginalTextSpan(
    textSpanInGeneratedText: TextSpan,
  ): TextSpan | null {
    const { start: offset, length } = textSpanInGeneratedText
    const result = this.findOriginalOffsetMappingAt(offset, 0)
    if (result == null) return null

    if (result.mapping != null && this.generated != null) {
      switch (result.mapping.k) {
        case MappingKind.transformed:
        case MappingKind.reverseOnly:
          return {
            start: result.offset,
            length: result.mapping.s.e - result.mapping.s.s,
          }

        case MappingKind.copy: {
          const len = this.generated.getText().length
          const min = Math.max(0, offset - result.mapping.g.l)
          const max = Math.min(len, offset + result.mapping.g.l)
          const content = this.generated.getText().substring(min, max)
          const query = this.source
            .getText()
            .substring(result.mapping.s.s, result.mapping.s.e)

          const pos = content.indexOf(query)
          const diff = offset - (min + pos)

          return { start: result.offset + diff, length }
        }
      }
    }

    return { start: result.offset, length }
  }

  private findOriginalOffsetMappingAt(
    offset: number,
    bias: -1 | 0 | 1 = 0,
  ): { offset: number; mapping?: MappingMetadata } | null {
    if (this.sourceMap == null || this.generated == null) {
      return { offset: offset } // no source map == no transformation
    }

    const position = this._toSourceMapPosition(
      this.generated.positionAt(offset),
    ) as FindPosition

    if (bias > 0) {
      position.bias = SourceMapConsumer.LEAST_UPPER_BOUND
    } else if (bias < 0) {
      position.bias = SourceMapConsumer.GREATEST_LOWER_BOUND
    }

    const original = this.sourceMap.originalPositionFor(position)

    if (original.line == null) return null
    return {
      offset: this.source.offsetAt(this._toPosition(original)),
      mapping: this.getMappingMetadata(original.name),
    }
  }

  @cache()
  public getMappingMetadata(context?: string): MappingMetadata | undefined {
    if (context?.startsWith(METADATA_PREFIX) === true) {
      return JSON.parse(context.substr(METADATA_PREFIX.length))
    }

    return undefined
  }

  public isOffsetInIgonredZone(offset: number): boolean {
    return this.ignoredZones.some(
      (zone) => zone.start <= offset && offset <= zone.end,
    )
  }

  public isOffsetInTemplateGlobals(offset: number): boolean {
    return this.templateGlobals == null
      ? false
      : this.templateGlobals.start <= offset &&
          offset <= this.templateGlobals.end
  }

  private _toSourceMapPosition(position: Position): SourceMapPosition {
    return { line: position.line + 1, column: position.character }
  }

  private _toPosition(position: SourceMapPosition): Position {
    return { line: position.line - 1, character: position.column }
  }

  /**
   * Find offset in block text.
   */
  public toBlockOffset(offsetInVueFile: number): number {
    return offsetInVueFile - this.block.loc.start.offset
  }

  public toBlockSpan(textSpanInVueFile: TextSpan): TextSpan {
    const start = this.toBlockOffset(textSpanInVueFile.start)

    return {
      start,
      length: Math.min(
        textSpanInVueFile.length,
        this.block.loc.end.offset - start,
      ),
    }
  }

  /**
   * Find offset in .vue file.
   */
  public toFileOffset(offsetInBlockText: number): number {
    return offsetInBlockText + this.block.loc.start.offset
  }

  public toFileSpan(textSpanInBlockText: TextSpan): TextSpan {
    const start = this.toFileOffset(textSpanInBlockText.start)

    return {
      start,
      length: textSpanInBlockText.length,
    }
  }

  /**
   * Convert position in block text to offset in block text.
   */
  public offsetAt(position: Position): number {
    return this.source.offsetAt(position)
  }

  /**
   * Convert offset in block text to position in block text.
   */
  public positionAt(offset: number): Position {
    return this.source.positionAt(offset)
  }
}
