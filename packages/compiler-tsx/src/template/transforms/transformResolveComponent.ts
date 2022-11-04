import {
  AttributeNode,
  createCompoundExpression,
  DirectiveNode,
  findDir,
  findProp,
  NodeTransform,
} from '@vue/compiler-core'
import { camelCase, pascalCase } from '@vuedx/shared'
import {
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isSimpleIdentifier,
} from '@vuedx/template-ast-types'
import { KnownIdentifier } from '@vuedx/transforms'
import { directives } from '../builtins'
import { getRuntimeFn } from '../runtime'
import type { NodeTransformContext } from '../types/NodeTransformContext'

const s = (text: string): string => JSON.stringify(text) + ' as const'
export function createResolveComponentTransform(
  ctx: NodeTransformContext,
): NodeTransform {
  const h = getRuntimeFn.bind(null, ctx.typeIdentifier)

  const resolveComponentArgs = `${
    ctx.isTypeScript
      ? `{} as unknown as ${ctx.internalIdentifierPrefix}GlobalComponents`
      : `/** @type {${ctx.internalIdentifierPrefix}GlobalComponents} */ (/** @type {unknown} */ ({}))`
  }, ${
    ctx.isTypeScript
      ? `{} as unknown as JSX.IntrinsicElements`
      : `/** @type JSX.IntrinsicElements} */ (/** @type {unknown} */ ({}))`
  }, ${ctx.contextIdentifier}, `

  return (node) => {
    if (!isElementNode(node)) return
    if (isElementNode(node)) {
      node.props.forEach((node) => {
        if (isDirectiveNode(node) && !directives.has(node.name)) {
          ctx.used.directives.add(node.name)

          const id = `v${pascalCase(node.name)}`
          node.resolvedName = id

          if (!ctx.scope.hasIdentifier(id)) {
            const knownId = ctx.identifiers.get(id)
            if (knownId == null) {
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
            } else if (mayBeRef(knownId)) {
              ctx.scope.addIdentifier(id)
              ctx.scope.hoist(
                createCompoundExpression([
                  `const ${id} = ${ctx.internalIdentifierPrefix}_get_identifier_${id}();`,
                ]),
              )
            }
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
          const knownId = ctx.identifiers.get(id)
          if (knownId == null || !isSimpleIdentifier(id)) {
            ctx.used.components.add(id)
            ctx.scope.addIdentifier(id)
            ctx.scope.hoist(
              createCompoundExpression([
                'const ',
                id,
                ` = ${h('resolveComponent')}(${resolveComponentArgs}`,
                'null',
                ', ',
                s(name),
                ', ',
                s(pascalCase(name)),
                ');',
              ]),
            )
          } else if (mayBeRef(knownId)) {
            ctx.used.components.add(id)
            ctx.scope.addIdentifier(id)
            ctx.scope.hoist(
              createCompoundExpression([
                `const ${id} = ${ctx.internalIdentifierPrefix}_get_identifier_${id}();`,
              ]),
            )
          }
        }
      }
      return undefined
    } else {
      isProp = isProp ?? findProp(node, 'is')

      if (isProp != null) node.is = isProp
      node.props = node.props.filter((prop) => prop !== isProp)
    }
    return undefined
  }
}

function mayBeRef(id: KnownIdentifier): boolean {
  return (
    id.kind === 'ref' ||
    id.kind === 'maybeRef' ||
    id.kind === 'externalRef' ||
    id.kind === 'externalMaybeRef'
  )
}
