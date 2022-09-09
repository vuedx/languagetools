import type { DecodedSourceMap } from 'magic-string'

export interface TransformedCode {
  code: string
  map: DecodedSourceMap
}
