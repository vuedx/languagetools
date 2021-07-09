import type { NodeTransform, SimpleExpressionNode } from '@vue/compiler-core'
import {
  createCompoundExpression,
  createSimpleExpression,
  findProp,
} from '@vue/compiler-core'
import { camelCase, pascalCase } from '@vuedx/shared'
import {
  isAttributeNode,
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
} from '@vuedx/template-ast-types'
import type { CustomTransformContext } from './CustomTransformContext'

const builtins = new Set(
  'text,html,show,if,else,else-if,for,on,bind,model,slot,pre,cloak,once,is'.split(
    ',',
  ),
)
export function createResolveComponentTransform(
  customContext: CustomTransformContext,
): NodeTransform {
  let dynamicComponentCounter = 0

  const hoist = (exp: SimpleExpressionNode): string => {
    const name = `_DynamicComponent${dynamicComponentCounter++}`
    customContext.scope.hoist(
      createCompoundExpression([`const `, name, ' = ', exp, ';']),
    )
    customContext.scope.addIdentifier(name)

    return name
  }

  return (node) => {
    if (isElementNode(node)) {
      node.props.forEach((node) => {
        if (isDirectiveNode(node) && !builtins.has(node.name)) {
          customContext.used.directives.add(camelCase(node.name))
          const directive =
            customContext.directives[node.name] ??
            customContext.directives[camelCase(node.name)]
          if (directive != null) {
            node.resolvedName = directive.value
            customContext.scope.addImport(
              directive.source.path,
              directive.source.exported,
              directive.source.local,
            )
          }
        }
      })
    }
    if (!isComponentNode(node)) return
    if (node.tag !== 'component') {
      customContext.used.components.add(pascalCase(node.tag))

      const resolvedComponent =
        customContext.components[node.tag] ??
        customContext.components[pascalCase(node.tag)]

      if (resolvedComponent != null) {
        node.resolvedName = resolvedComponent.value
        customContext.scope.addImport(
          resolvedComponent.source.path,
          resolvedComponent.source.exported,
          resolvedComponent.source.local,
        )
      }

      return
    } else {
      const isProp = findProp(node, 'is')
      if (isAttributeNode(isProp) && isProp.value != null) {
        node.resolvedName = hoist(
          createSimpleExpression(
            `${JSON.stringify(isProp.value.content)} as const`,
            false,
            isProp.value.loc,
          ),
        )
      } else if (
        isDirectiveNode(isProp) &&
        isSimpleExpressionNode(isProp.exp)
      ) {
        node.resolvedName = hoist(isProp.exp)
      }
      node.props = node.props.filter((prop) => prop !== isProp)
    }

    return () => {
      if (node.resolvedName != null) {
        customContext.scope.removeIdentifier(node.resolvedName)
      }
    }
  }
}
