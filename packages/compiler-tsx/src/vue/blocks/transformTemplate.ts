import type { CompilerError, RootNode } from '@vue/compiler-core'
import type { SFCTemplateBlock } from '@vuedx/compiler-sfc'
import { compile } from '../../template/compile'
import type { TransformedCode } from '../../types/TransformedCode'
import type { TransformOptionsResolved } from '../../types/TransformOptions'

export interface TemplateBlockTransformResult extends TransformedCode {
  slotsIdentifier: string
  attrsIdentifier: string
  ast?: RootNode
  errors: CompilerError[]
}

export function transformTemplate(
  template: SFCTemplateBlock | null,
  options: TransformOptionsResolved,
): TemplateBlockTransformResult {
  const slotsIdentifier = `${options.internalIdentifierPrefix}slots`
  const attrsIdentifier = `${options.internalIdentifierPrefix}attrs`
  if (template == null) {
    return {
      code: `function ${slotsIdentifier}() { return {} }; const ${attrsIdentifier} = {};`,
      map: {
        file: '',
        mappings: [],
        names: [],
        sources: [],
        sourcesContent: [],
      },
      slotsIdentifier,
      attrsIdentifier,
      errors: [],
    }
  }

  const result = compile(template?.content, options)
  const offset = template.loc.start.offset
  const line = template.loc.start.line

  return {
    ...result,
    slotsIdentifier,
    attrsIdentifier,
    errors: result.errors.map((error) => {
      if ('loc' in error && error.loc != null) {
        error.loc.start.offset += offset
        error.loc.end.offset += offset
        error.loc.start.line += line
        error.loc.end.line += line
      }

      return error
    }),
  }
}
