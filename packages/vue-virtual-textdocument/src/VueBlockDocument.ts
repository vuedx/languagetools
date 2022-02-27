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
      Path.posix.extname(id).substr(1),
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

  @cache()
  public generatedOffetAt(offset: number): number {
    return this.generatedOffetAndLengthAt(offset, 1).offset
  }

  @cache((args: [number, number]) => `${args[0]}:${args[1]}`)
  public generatedOffetAndLengthAt(
    offset: number,
    length: number,
  ): { offset: number; length: number } {
    if (this.sourceMap == null || this.generated == null) {
      return { offset: offset - this.block.loc.start.offset, length }
    }

    const args = {
      ...this.toSourceMapPosition(
        this.source.positionAt(offset - this.block.loc.start.offset),
      ),
      source: this.fileName,
    }
    const gen = this.generated

    const opPos: SourceMapPosition = this.sourceMap.generatedPositionFor(args)
    const opOffset = this.generated.offsetAt(this.toPosition(opPos))
    const opOrginal = this.originalOffsetMappingAt(opOffset, 1)

    let position = opPos
    let result = opOffset
    let original = opOrginal

    if (opOrginal?.mapping != null) {
      const positions = this.sourceMap
        .allGeneratedPositionsFor({
          ...this.toSourceMapPosition(
            this.source.positionAt(opOrginal.mapping.s.s),
          ),
          source: this.fileName,
        })
        .filter((position) => {
          const og = this.originalOffsetMappingAt(
            gen.offsetAt(this.toPosition(position)),
            -1,
          )

          return og?.mapping != null && og.mapping.k !== MappingKind.reverseOnly
        })

      const newPosition = positions.pop()
      if (newPosition != null) {
        position = newPosition
        result = this.generated.offsetAt(this.toPosition(position))
        original = this.originalOffsetMappingAt(result, -1)
      }
    }

    // If generated text is copied from original text then we can get exact position.
    if (original?.mapping?.k === MappingKind.copy) {
      const diff = offset - original.mapping.s.s - this.block.loc.start.offset

      return { offset: result + diff, length }
    }

    // Transformed text sohuld always match the whole text.
    return {
      offset: result,
      length: original?.mapping != null ? original.mapping.g.l : length,
    }
  }

  /**
   * Find original position in .vue file for position in genreated text
   * @param offset position in generated text
   * @returns position in .vue file
   */
  @cache()
  public originalOffsetAt(offset: number): number {
    return (
      this.originalOffsetAndLengthAt(offset, 1)?.offset ??
      this.block.loc.start.offset
    )
  }

  /**
   * Find original range in .vue file for position in genreated text
   * @param offset position in generated text
   * @param length range at offset
   * @returns range in .vue file
   */
  @cache((args: [number, number]) => `${args[0]}:${args[1]}`)
  public originalOffsetAndLengthAt(
    offset: number,
    length: number,
  ): { offset: number; length: number } | null {
    const result = this.originalOffsetMappingAt(offset, 0)
    if (result == null) return null

    if (result.mapping != null && this.generated != null) {
      switch (result.mapping.k) {
        case MappingKind.transformed:
        case MappingKind.reverseOnly:
          return {
            offset: result.offset,
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

          return { offset: result.offset + diff, length }
        }
      }
    }

    return { offset: result.offset, length }
  }

  private originalOffsetMappingAt(
    offset: number,
    bias: -1 | 0 | 1 = 0,
  ): { offset: number; mapping?: MappingMetadata } | null {
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

    if (original.line == null) return null
    return {
      offset:
        this.block.loc.start.offset +
        this.source.offsetAt(this.toPosition(original)),
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

  public toSourceMapPosition(position: Position): SourceMapPosition {
    return { line: position.line + 1, column: position.character }
  }

  public toPosition(position: SourceMapPosition): Position {
    return { line: position.line - 1, character: position.column }
  }
}
