import { decode } from 'sourcemap-codec'
import { binarySearch, BinarySearchBias, first, last } from './array'
import { invariant } from './assert'

export type SourceMapSegment =
  | [generatedColumn: number]
  | [
      generatedColumn: number,
      sourceIndex: number,
      originalLine: number,
      originalColumn: number,
    ]
  | [
      generatedColumn: number,
      sourceIndex: number,
      originalLine: number,
      originalColumn: number,
      nameIndex: number,
    ]

export interface DecodedSourceMap {
  file: string
  sources: string[]
  sourcesContent: string[]
  names: string[]
  mappings: SourceMapSegment[][]
}

export type SourceMapLike =
  | {
      mappings: string
      names?: string[]
    }
  | PartialDecodedSourceMap

interface PartialDecodedSourceMap {
  names?: string[]
  mappings: SourceMapSegment[][]
}

class LineColumnMapper {
  private readonly offsets: number[]

  constructor(source: string) {
    this.offsets = []
    const lines = source.split('\n')
    let offset = 0
    for (const line of lines) {
      this.offsets.push(offset)

      offset += line.length + 1
    }
  }

  public positionAt(position: number): { line: number; column: number } {
    const line = binarySearch(
      position,
      this.offsets,
      (a, b) => a - b,
      BinarySearchBias.GREATEST_LOWER_BOUND,
    )
    const offset = this.offsets[line]
    invariant(offset != null, 'Invalid position.')
    return { line, column: position - offset }
  }

  public offsetAt(line: number, column: number): number {
    const offsets = this.offsets[line]
    invariant(offsets != null, 'Invalid position.')
    return offsets + column
  }
}

export class SourceTransformer {
  private readonly source: string
  private readonly sourceMap: DecodedSourceMap

  private code: string = ''

  private line: number = 0
  private column: number = 0

  constructor(fileName: string, source: string) {
    this.source = source
    this.sourceMap = {
      file: fileName,
      mappings: [],
      names: [],
      sources: [fileName],
      sourcesContent: [source],
    }
  }

  nextLine(): void {
    if (!this.code.endsWith('\n')) {
      this.append(`\n`)
    }
  }

  append(code: string, sourceMap?: SourceMapLike): void {
    const lines = code.split('\n')
    const lastLine = last(lines)
    this.code += code

    let mappings: DecodedSourceMap['mappings'] = []
    if (sourceMap != null) {
      const nameOffset = this.sourceMap.names.length
      if (sourceMap.names != null) this.sourceMap.names.push(...sourceMap.names)
      mappings = getMappings(sourceMap).map((mapping) =>
        mapping.map((segment) => {
          if (segment.length === 5) {
            return [
              segment[0],
              0,
              segment[2],
              segment[3],
              segment[4] + nameOffset,
            ] as [number, number, number, number, number]
          } else if (segment.length === 4) {
            return [segment[0], 0, segment[2], segment[3]] as [
              number,
              number,
              number,
              number,
            ]
          }
          return segment
        }),
      )
    }
    invariant(
      mappings.length <= lines.length,
      `Invalid source map: ${mappings.length} > ${
        lines.length
      }:\n${code},\n${JSON.stringify(mappings, null, 2)}`,
    )

    const current = (this.sourceMap.mappings[this.line] =
      this.sourceMap.mappings[this.line] ?? [])
    if (mappings.length > 0) {
      current.push(
        ...first(mappings).map((mapping) => {
          mapping[0] += this.column
          return mapping
        }),
      )
    }

    if (lines.length === 1) {
      this.column += lastLine.length
    } else {
      this.line += lines.length - 1
      this.column = lastLine.length
      this.sourceMap.mappings.push(...mappings.slice(1))
    }

    for (let i = this.sourceMap.mappings.length; i <= this.line; i++) {
      this.sourceMap.mappings.push([])
    }
  }

  private _sourceLineColumnMapper?: LineColumnMapper
  public get sourceLineColumnMapper(): LineColumnMapper {
    return (
      this._sourceLineColumnMapper ??
      (this._sourceLineColumnMapper = new LineColumnMapper(this.source))
    )
  }

  clone(start: number, end: number): void {
    if (start >= end) return
    const code = this.source.slice(start, end)
    if (code.length === 0) return
    const mapper = this.sourceLineColumnMapper
    const { line, column } = mapper.positionAt(start)
    const lines = code.split('\n')
    const sourceMap: PartialDecodedSourceMap = {
      mappings: [[[0, 0, line, column]]],
    }
    for (let i = 1; i < lines.length; i++) {
      if (lines[i]?.length === 0) sourceMap.mappings.push([])
      else sourceMap.mappings.push([[0, 0, line + i, 0]])
    }
    this.append(code, sourceMap)
  }

  end(): { code: string; map: DecodedSourceMap } {
    return {
      code: this.code,
      map: this.sourceMap,
    }
  }
}

export function getMappings(
  sourceMap: SourceMapLike,
): DecodedSourceMap['mappings'] {
  return typeof sourceMap.mappings === 'string'
    ? decode(sourceMap.mappings)
    : sourceMap.mappings
}

export function rebaseSourceMap(
  sourceMap: SourceMapLike,
  startPosition?: { line: number; column: number },
): DecodedSourceMap {
  const mappings = getMappings(sourceMap)

  if (startPosition == null) {
    return {
      file: '',
      sources: [],
      sourcesContent: [],
      ...sourceMap,
      names: sourceMap.names ?? [],
      mappings,
    }
  }

  const line = startPosition.line - 1
  const column = startPosition.column - 1

  return {
    file: '',
    sources: [],
    sourcesContent: [],
    ...sourceMap,
    names: sourceMap.names ?? [],
    mappings: mappings.map((mapping) =>
      mapping.map((segment) => {
        if (segment.length === 1) return segment

        let originalLine = segment[2]
        let originalColumn = segment[3]

        if (originalLine === 0) {
          originalColumn += column
        }

        originalLine += line

        if (segment.length === 4) {
          return [segment[0], segment[1], originalLine, originalColumn]
        }

        return [
          segment[0],
          segment[1],
          originalLine,
          originalColumn,
          segment[4],
        ]
      }),
    ),
  }
}
