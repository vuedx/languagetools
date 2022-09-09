import type { SFCStyleBlock } from '@vuedx/compiler-sfc'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface StyleBlockTransformResult extends TransformedCode {}

export function transformStyle(
  _style: SFCStyleBlock,
  options: TransformOptionsResolved,
): StyleBlockTransformResult {
  return {
    code: '',
    map: {
      file: options.fileName,
      sources: [],
      names: [],
      mappings: [],
      sourcesContent: [],
    },
  }
}
