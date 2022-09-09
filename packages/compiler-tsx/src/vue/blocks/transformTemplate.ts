import type { CompilerError, RootNode } from '@vue/compiler-core'
import type { SFCTemplateBlock } from '@vuedx/compiler-sfc'
import { compile } from '../../template/compile'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface TemplateBlockTransformResult extends TransformedCode {
  slotsIdentifier: string
  ast?: RootNode
  errors: CompilerError[]
}

export function transformTemplate(
  template: SFCTemplateBlock | null,
  options: TransformOptionsResolved,
): TemplateBlockTransformResult {
  const slotsIdentifier = `${options.internalIdentifierPrefix}slots`
  if (template == null) {
    return {
      code: '',
      map: {
        file: '',
        mappings: [],
        names: [],
        sources: [],
        sourcesContent: [],
      },
      slotsIdentifier,
      errors: [],
    }
  }

  const result = compile(template?.content, options)

  return {
    ...result,
    slotsIdentifier,
    errors: result.errors,
  }
}
