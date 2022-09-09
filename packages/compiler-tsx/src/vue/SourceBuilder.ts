import type { DecodedSourceMap } from 'magic-string'
import type { SourceMapLike } from '../types/SourceMapLike'
import type { TransformedCode } from '../types/TransformedCode'

import { getMappings } from './sourceMapHelpers'

export class SourceBuilder {
  private isConsumed: boolean = false
  private code: string = ''
  private readonly sourceMap: DecodedSourceMap

  constructor(fileName: string, content: string) {
    this.sourceMap = {
      file: fileName,
      mappings: [],
      names: [],
      sources: [fileName],
      sourcesContent: [content],
    }
  }

  append(code: string): void
  append(code: string, sourceMap: SourceMapLike): void
  append(code: string, sourceMap?: SourceMapLike): void {
    if (this.isConsumed) throw new Error('SourceBuilder is consumed')

    this.code += code
    const lines = getLineCount(code)

    if (sourceMap != null) {
      const mappings = getMappings(sourceMap).slice(0, lines)
      const nameOffset = this.sourceMap.names.length
      if (sourceMap.names != null) this.sourceMap.names.push(...sourceMap.names)
      this.sourceMap.mappings.push(
        ...mappings.map((mapping) =>
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
        ),
      )

      this.sourceMap.mappings.push(
        ...new Array(lines - mappings.length).fill([]),
      )
    } else {
      this.sourceMap.mappings.push(...new Array(lines).fill([]))
    }

    if (!this.code.endsWith('\n')) this.code += '\n'
  }

  end(): TransformedCode {
    this.isConsumed = true
    return {
      code: this.code,
      map: this.sourceMap,
    }
  }
}

function getLineCount(source: string): number {
  return source.split('\n').length + (source.endsWith('\n') ? -1 : 0)
}
