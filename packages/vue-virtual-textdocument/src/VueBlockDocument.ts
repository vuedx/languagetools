import type { RawSourceMap, SFCBlock, SFCDescriptor } from '@vuedx/compiler-sfc'
import { MappingKind, MappingMetadata } from '@vuedx/compiler-tsx'
import { cache } from '@vuedx/shared'
import * as Path from 'path'
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

export interface TextSpan {
  start: number
  length: number
}

interface TextRange {
  start: number
  end: number
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
  public readonly ignoredTextRanges: TextRange[] = []

  private readonly copiedTextRanges: TextRange[] = []
  private readonly originalsForCopiedTextRanges: TextRange[] = []
  private readonly templateGlobalsTextRanges: TextRange[] = []

  public readonly tsxCompletionsOffset: number | null = null
  public readonly tsCompletionsOffset: number | null = null

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

        this.ignoredTextRanges = findAnnotatedTextRanges(
          code,
          annotations.diagnosticsIgnore.start,
          annotations.diagnosticsIgnore.end,
        )
        this.copiedTextRanges = findAnnotatedTextRanges(
          code,
          annotations.copiedSource.start,
          annotations.copiedSource.end,
        )
        this.originalsForCopiedTextRanges = this.copiedTextRanges.map(
          (range) => {
            const match = /\/\/\s*@vuedx-copied-from\s(.*)/.exec(
              code.slice(range.start, range.end),
            )
            if (match == null) return range
            const serialized = match[1]
            if (serialized == null) return range
            range.end = range.start + match.index // collapse range to exclude source annotation
            range.start += 1 // expand to exclude leading newline

            try {
              const range = JSON.parse(serialized) as TextRange

              if (
                !Number.isSafeInteger(range.start) ||
                !Number.isSafeInteger(range.end)
              ) {
                throw new Error(`Invalid range for copied from: ${serialized}`)
              }

              return range
            } catch (error) {
              console.error(
                `[VueDX] Error processing @vuedx-copied-from in ${
                  this.fileName
                }: ${(error as Error).message}`,
              )
              return range
            }
          },
        )

        this.templateGlobalsTextRanges = findAnnotatedTextRanges(
          code,
          annotations.templateGlobals.start,
          annotations.templateGlobals.end,
        )

        this.tsxCompletionsOffset =
          tsLang === 'tsx'
            ? findAnnotatedPosition(code, annotations.tsxCompletions, 1)
            : null

        this.tsCompletionsOffset = findAnnotatedPosition(
          code,
          annotations.tsCompletions,
        )

        this.generated = TextDocument.create(
          this.tsFileName,
          tsLang, // TODO: Convert to vscode lang
          0,
          code,
        )
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

  public findCopiedOffsets(offsetInBlockText: number): number[] {
    return this.findCopiedTextSpans({
      start: offsetInBlockText,
      length: 1,
    }).map((span) => span.start)
  }

  public findCopiedTextSpans(textSpanInBlockText: TextSpan): TextSpan[] {
    const spans: TextSpan[] = []

    if (this.isOffsetInOriginalZone(textSpanInBlockText.start)) {
      for (let i = 0; i < this.originalsForCopiedTextRanges.length; i++) {
        const copied = this.copiedTextRanges[i]
        const original = this.originalsForCopiedTextRanges[i]
        if (copied == null || original == null) continue

        spans.push({
          start: copied.start + textSpanInBlockText.start - original.start,
          length: textSpanInBlockText.length,
        })
      }
    }

    return spans
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
    if (this.isOffsetInCopiedZone(offset)) {
      return this.findOriginalForCopiedTextSpan(textSpanInGeneratedText)
    }
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

          return {
            start: result.offset + diff,
            length,
          }
        }
      }
    }

    return { start: result.offset, length }
  }

  private findOriginalForCopiedTextSpan(span: TextSpan): TextSpan {
    const i = this.copiedTextRanges.findIndex((range) =>
      isOffsetInRange(range, span.start),
    )

    const copied = this.copiedTextRanges[i]
    const original = this.originalsForCopiedTextRanges[i]
    if (copied == null || original == null) {
      throw new Error(
        'Invalid span, use isOffsetInCopiedSpan() before calling this method',
      )
    }

    return {
      start: original.start + span.start - copied.start,
      length: span.length,
    }
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
      return JSON.parse(context.slice(METADATA_PREFIX.length))
    }

    return undefined
  }

  public isOffsetInIgonredZone(offset: number): boolean {
    return this._isOffsetInZone(this.ignoredTextRanges, offset)
  }

  public isOffsetInTemplateGlobals(offset: number): boolean {
    return this._isOffsetInZone(this.templateGlobalsTextRanges, offset)
  }

  public isOffsetInCopiedZone(offset: number): boolean {
    return this._isOffsetInZone(this.copiedTextRanges, offset)
  }

  public isOffsetInOriginalZone(offset: number): boolean {
    return this._isOffsetInZone(this.originalsForCopiedTextRanges, offset)
  }

  private _isOffsetInZone(ranges: TextRange[], offset: number): boolean {
    return ranges.some((range) => isOffsetInRange(range, offset))
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
   * @deprecated - Use {@link source}
   */
  public offsetAt(position: Position): number {
    return this.source.offsetAt(position)
  }

  /**
   * Convert offset in block text to position in block text.
   * @deprecated - Use {@link source}
   */
  public positionAt(offset: number): Position {
    return this.source.positionAt(offset)
  }
}

function isOffsetInRange(range: TextRange, offset: number): unknown {
  return range.start <= offset && offset <= range.end
}

function findAnnotatedTextRanges(
  code: string,
  openTag: string,
  closeTag: string,
): Array<{ start: number; end: number }> {
  let lastIndex = 0
  const ranges: Array<{ start: number; end: number }> = []
  while (lastIndex < code.length) {
    let start = code.indexOf(openTag, lastIndex)
    if (start < 0) break
    start = start + openTag.length

    let end = code.indexOf(closeTag, start)
    if (end < 0) {
      end = code.length
    }

    ranges.push({ start, end })

    lastIndex = end
  }

  return ranges
}

function findAnnotatedPosition(
  code: string,
  tag: string,
  offset: number = 0,
): number | null {
  const tsxOffset = code.indexOf(tag)
  if (tsxOffset < 0) return null
  const prefixLength = tsxOffset + tag.length
  return prefixLength + offset
}
