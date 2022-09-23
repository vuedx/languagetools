import { invariant } from '@vuedx/shared'
import type { DecodedSourceMap } from 'magic-string'
import type { SourceMapLike } from '../types/SourceMapLike'
import type { TransformedCode } from '../types/TransformedCode'

import { getMappings } from './sourceMapHelpers'

export class SourceBuilder {
  private isConsumed: boolean = false
  private code: string = ''
  private lines: number = 0

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
    const chunk = code + '\n'
    this.code += chunk
    const lines = code.split('\n').length
    this.lines += lines
    if (sourceMap != null) {
      const mappings = getMappings(sourceMap)
      invariant(mappings.length <= lines, 'Invalid source map.')
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
    }

    for (let i = this.sourceMap.mappings.length; i < this.lines; i++) {
      this.sourceMap.mappings.push(sourceMap == null ? [[0]] : [])
    }
  }

  end(): TransformedCode {
    this.isConsumed = true
    return {
      code: this.code,
      map: this.sourceMap,
    }
  }
}
