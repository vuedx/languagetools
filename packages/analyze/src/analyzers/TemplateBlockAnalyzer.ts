import { parse } from '@vuedx/compiler-tsx'
import {
  isDirectiveNode,
  isSimpleExpressionNode,
  traverse,
} from '@vuedx/template-ast-types'
import { Plugin } from '../types'
import { parseJS } from './ScriptBlockAnalyzer'

export const TemplateBlockAnalyzer: Plugin = {
  blocks: {
    template: (block, ctx) => {
      if (block.src == null) {
        const ast = parse(block.content, {})
        const templateExpressionFns = ctx.plugins
          .map((plugin) => plugin.templateExpression)
          .filter(Boolean)

        traverse(ast, (node, ancestors) => {
          if (isSimpleExpressionNode(node)) {
            if (node.isStatic) return
            if (templateExpressionFns.length === 0) return
            const parent = ancestors[ancestors.length - 1]
            const offset = block.loc.start.offset + node.loc.start.offset
            const source = `${node.content}`

            if (isDirectiveNode(parent)) {
              if (parent.exp === node) {
                if (parent.name === 'for') {
                  return
                }
              }
            }

            const { ast } = parseJS(ctx, source, false, offset)

            templateExpressionFns.forEach((fn) => {
              if (fn != null) {
                try {
                  fn(ast, ctx)
                } catch (error) {
                  console.error(error)
                }
              }
            })
          }
        })
      }
    },
  },
}
