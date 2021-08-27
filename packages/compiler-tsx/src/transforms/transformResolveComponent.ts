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
const s = (text: string): string => JSON.stringify(text) + ' as const'
export function createResolveComponentTransform(
  customContext: CustomTransformContext,
): NodeTransform {
  let dynamicComponentCounter = 0

  const hoist = (exp: SimpleExpressionNode): string => {
    const name = `_DynamicComponent${dynamicComponentCounter++}`
    customContext.scope.scopeHoist(
      createCompoundExpression([
        `const `,
        name,
        ' = VueDX.internal.resolveComponent(__VueDX_components, ',
        exp,
        ');',
      ]),
    )
    customContext.scope.addIdentifier(name)

    return name
  }

  return (node) => {
    if (isElementNode(node)) {
      node.props.forEach((node) => {
        if (isDirectiveNode(node) && !builtins.has(node.name)) {
          customContext.used.directives.add(node.name)

          const id = `__directive_${camelCase(node.name)}`
          node.resolvedName = id
          if (!customContext.scope.hasIdentifier(id)) {
            customContext.scope.addIdentifier(id)
            customContext.scope.hoist(
              createCompoundExpression([
                'const ',
                id,
                ' = VueDX.internal.resolveDirective(__VueDX_directives, ',
                s(node.name),
                ', ',
                s(camelCase(node.name)),
                ');',
              ]),
            )
          }
        }
      })
    }
    if (!isComponentNode(node)) return
    if (node.tag !== 'component') {
      customContext.used.components.add(node.tag)

      const prefix = node.tag.split('.')[0] ?? node.tag
      const id = `__component_${pascalCase(prefix)}`
      node.resolvedName = node.tag.includes('.')
        ? id + node.tag.substr(prefix.length)
        : id
      if (!customContext.scope.hasIdentifier(id)) {
        customContext.scope.addIdentifier(id)
        customContext.scope.hoist(
          createCompoundExpression([
            'const ',
            id,
            ' = VueDX.internal.resolveComponent(__VueDX_components, ',
            s(prefix),
            ', ',
            s(pascalCase(prefix)),
            ');',
          ]),
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
