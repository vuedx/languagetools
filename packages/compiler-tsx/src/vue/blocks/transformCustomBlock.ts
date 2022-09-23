import type { SFCBlock } from '@vuedx/compiler-sfc'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface CustomBlockTransformResult extends TransformedCode {
  decoratorIdentifier?: string
}

export function transformCustomBlock(
  _block: SFCBlock,
  options: TransformOptionsResolved,
): CustomBlockTransformResult {
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
