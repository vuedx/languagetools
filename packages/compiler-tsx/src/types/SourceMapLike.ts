import type { DecodedSourceMap } from 'magic-string'

export type SourceMapLike =
  | {
      mappings: string
      names?: string[]
    }
  | DecodedSourceMap
