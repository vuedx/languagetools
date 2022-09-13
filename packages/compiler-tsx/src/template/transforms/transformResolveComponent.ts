import {
  AttributeNode,
  createCompoundExpression,
  createSimpleExpression,
  DirectiveNode,
  findDir,
  findProp,
  NodeTransform,
  SimpleExpressionNode,
} from '@vue/compiler-core'
import { camelCase, pascalCase } from '@vuedx/shared'
import {
  isAttributeNode,
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
} from '@vuedx/template-ast-types'
import { directives } from '../builtins'
import type { NodeTransformContext } from '../types/NodeTransformContext'
import { getRuntimeFn } from '../runtime'

const s = (text: string): string => JSON.stringify(text) + ' as const'
export function createResolveComponentTransform(
  ctx: NodeTransformContext,
): NodeTransform {
  let dynamicComponentCounter = 0

  const h = getRuntimeFn.bind(null, ctx.typeIdentifier)

  const resolveComponentArgs = `${
    ctx.isTypeScript
      ? `{} as unknown as ${ctx.jsxIdentifier}.GlobalComponents`
      : `/** @type {${ctx.jsxIdentifier}.GlobalComponents} */ (/** @type {unknown} */ ({}))`
  }, ${
    ctx.isTypeScript
      ? `{} as unknown as ${ctx.jsxIdentifier}.JSX.IntrinsicElements`
      : `/** @type {${ctx.jsxIdentifier}.JSX.IntrinsicElements} */ (/** @type {unknown} */ ({}))`
  }, ${ctx.contextIdentifier}, `

  const hoistExpressionAsComponent = (exp: SimpleExpressionNode): string => {
    const name = `${
      ctx.internalIdentifierPrefix
    }_Component${dynamicComponentCounter++}`
    ctx.scope.scopeHoist(
      createCompoundExpression([
        `const `,
        name,
        ` = ${h('resolveComponent')}(${resolveComponentArgs}`,
        exp,
        ', ',
        exp,
        ');',
      ]),
    )
    ctx.scope.addIdentifier(name)

    return name
  }

  return (node) => {
    if (!isElementNode(node)) return
    if (isElementNode(node)) {
      node.props.forEach((node) => {
        if (isDirectiveNode(node) && !directives.has(node.name)) {
          ctx.used.directives.add(node.name)

          const id = `v${pascalCase(node.name)}`
          node.resolvedName = id
          if (!ctx.scope.hasIdentifier(id)) {
            ctx.scope.addIdentifier(id)
            ctx.scope.hoist(
              createCompoundExpression([
                'const ',
                id,
                ` = ${h('resolveDirective')}(${ctx.contextIdentifier}, `,
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
    let isProp: DirectiveNode | AttributeNode | undefined = findDir(node, 'is')
    if (isProp != null) {
      node.tagType = 1
      node.tag = 'component'
    }
    if (!isComponentNode(node)) return
    if (node.tag !== 'component') {
      if (/[A-Z.-]/.test(node.tag)) {
        ctx.used.components.add(node.tag)
        const name = node.tag.split('.')[0] ?? node.tag
        const id = `${pascalCase(name)}`
        node.resolvedName = node.tag.includes('.')
          ? id + node.tag.slice(name.length)
          : id
        if (!ctx.scope.hasIdentifier(id)) {
          ctx.scope.addIdentifier(id)
          ctx.scope.hoist(
            createCompoundExpression([
              'const ',
              node.resolvedName,
              ` = ${h('resolveComponent')}(${resolveComponentArgs}`,
              'null',
              ', ',
              s(name),
              ', ',
              s(pascalCase(name)),
              ');',
            ]),
          )
        }
      }
      return undefined
    } else {
      isProp = isProp ?? findProp(node, 'is')

      if (isAttributeNode(isProp) && isProp.value != null) {
        node.resolvedName = hoistExpressionAsComponent(
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
        node.resolvedName = hoistExpressionAsComponent(isProp.exp)
      }
      node.props = node.props.filter((prop) => prop !== isProp)
      return () => {
        if (node.resolvedName != null) {
          ctx.scope.removeIdentifier(node.resolvedName)
        }
      }
    }
  }
}
