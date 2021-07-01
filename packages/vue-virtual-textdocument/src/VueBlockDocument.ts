import type { SFCBlock, SFCDescriptor } from '@vuedx/compiler-sfc'
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

export interface MappingMetadata {
  kind: 'copy' | 'transformed'
  gen: { length: number }
  src: { start: number; end: number }
}

const METADATA_PREFIX = ';;;VueDX:'
export class VueBlockDocument {
  public readonly source: TextDocument
  public readonly generated: TextDocument | null = null
  public readonly sourceMap: SourceMapConsumer | null

  public readonly errors: TransformerError[] = []

  public readonly sourceRange: Range
  public readonly ignoredZones: Array<{
    start: number
    end: number
    range: Range
  }> = []

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

  constructor(
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
      Path.extname(id).substr(1),
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

      // TODO: Handle errors in transform fn.
      const { code, map, errors } = this.transformer.transform(
        block.content,
        id,
        {
          block,
          document: parent,
          descriptor,
          annotations,
        },
      )

      this.errors = errors ?? []
      if (map != null) {
        this.sourceMap = new SourceMapConsumer(map)
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
    }
  }

  public generatedOffetAt(offset: number): number {
    return this.generatedOffetAndLengthAt(offset, 1).offset
  }

  public generatedOffetAndLengthAt(
    offset: number,
    length: number,
  ): { offset: number; length: number } {
    if (this.sourceMap == null || this.generated == null) {
      return { offset: offset - this.block.loc.start.offset, length }
    }
    const position = this.sourceMap.generatedPositionFor({
      ...this.toSourceMapPosition(
        this.source.positionAt(offset - this.block.loc.start.offset),
      ),
      source: this.fileName,
    })

    const result = this.generated.offsetAt(this.toPosition(position))

    return {
      offset: result,
      length: Math.max(1, position.lastColumn - position.column),
    }
  }

  /**
   * Find original position in .vue file for position in genreated text
   * @param offset position in generated text
   * @returns position in .vue file
   */
  public originalOffsetAt(offset: number): number {
    return this.originalOffsetAndLengthAt(offset, 1).offset
  }

  /**
   * Find original range in .vue file for position in genreated text
   * @param offset position in generated text
   * @param length range at offset
   * @returns range in .vue file
   */
  public originalOffsetAndLengthAt(
    offset: number,
    length: number,
  ): { offset: number; length: number } {
    const result = this.originalOffsetMappingAt(offset, 0)

    if (result.mapping != null && this.generated != null) {
      switch (result.mapping.kind) {
        case 'transformed':
          return {
            offset: result.offset,
            length: result.mapping.src.end - result.mapping.src.start,
          }

        case 'copy': {
          const len = this.generated.getText().length
          const min = Math.max(0, offset - result.mapping.gen.length)
          const max = Math.min(len, offset + result.mapping.gen.length)
          const content = this.generated.getText().substring(min, max)
          const query = this.source
            .getText()
            .substring(result.mapping.src.start, result.mapping.src.end)

          const pos = content.indexOf(query)
          const diff = offset - (min + pos)

          return { offset: result.offset + diff, length }
        }
      }
    }

    return { offset: result.offset, length }
  }

  private originalOffsetMappingAt(
    offset: number,
    bias: -1 | 0 | 1 = 0,
  ): { offset: number; mapping?: MappingMetadata } {
    if (this.sourceMap == null || this.generated == null) {
      return { offset: this.block.loc.start.offset + offset } // no source map == no transformation
    }

    const position = this.toSourceMapPosition(
      this.generated.positionAt(offset),
    ) as FindPosition

    if (bias > 0) {
      position.bias = SourceMapConsumer.LEAST_UPPER_BOUND
    } else if (bias < 0) {
      position.bias = SourceMapConsumer.GREATEST_LOWER_BOUND
    }

    const original = this.sourceMap.originalPositionFor(position)

    if (original.line == null) return { offset: this.block.loc.start.offset }
    return {
      offset:
        this.block.loc.start.offset +
        this.source.offsetAt(this.toPosition(original)),
      mapping: this.getMappingMetadata(original.name),
    }
  }

  private readonly mappingCache = new Map<string, MappingMetadata>()

  public getMappingMetadata(context?: string): MappingMetadata | undefined {
    if (context?.startsWith(METADATA_PREFIX) === true) {
      if (this.mappingCache.has(context)) return this.mappingCache.get(context)

      const result: MappingMetadata = JSON.parse(
        context.substr(METADATA_PREFIX.length),
      )

      this.mappingCache.set(context, result)

      return result
    }

    return undefined
  }

  public isOffsetInIgonredZone(offset: number): boolean {
    return this.ignoredZones.some(
      (zone) => zone.start <= offset && offset <= zone.end,
    )
  }

  public toSourceMapPosition(position: Position): SourceMapPosition {
    return { line: position.line + 1, column: position.character }
  }

  public toPosition(position: SourceMapPosition): Position {
    return { line: position.line - 1, character: position.column }
  }
}
