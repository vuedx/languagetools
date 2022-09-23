import type { DecodedSourceMap } from 'magic-string'
import { decode } from 'sourcemap-codec'
import type { SourceMapLike } from '../types/SourceMapLike'

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
