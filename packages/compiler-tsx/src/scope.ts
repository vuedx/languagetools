import { parse, parseExpression } from '@babel/parser'
import {
  Expression,
  File,
  Identifier,
  isFunction,
  isIdentifier,
  isMemberExpression,
  isOptionalMemberExpression,
  Node as BabelNode,
  traverse as traverseBabel,
} from '@babel/types'
import { isSimpleIdentifier, Node, RootNode } from '@vue/compiler-core'
import {
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
  traverse,
} from '@vuedx/template-ast-types'
import {
  isStaticPropertyKey,
  isKnownIdentifier,
} from './transforms/transformExpression'
import { forAliasRE } from './transforms/transformFor'

export class Scope {
  public readonly bindings: Record<string, Node | null> = {}

  public constructor(public readonly parent: Scope | null = null) {}

  public get identifiers(): string[] {
    return Array.from(Object.keys(this.bindings))
  }

  public get globals(): string[] {
    return this.identifiers.filter(
      (identifier) => this.getBinding(identifier) === null,
    )
  }

  public getBinding(identifier: string): null | Node {
    if (identifier in this.bindings) return this.bindings[identifier]
    if (this.parent != null) {
      return (this.bindings[identifier] = this.parent.getBinding(identifier))
    } else {
      this.bindings[identifier] = null
    }

    return null
  }

  public setBinding(identifer: string, node: Node): void {
    this.bindings[identifer] = node
  }
}

export function withScope(ast: RootNode): RootNode {
  ast.scope = new Scope(null)

  traverse(ast, (node, ancestors) => {
    const parent = (ancestors[ancestors.length - 1]?.node ?? ast) as any
    const scope = (node.scope = node.scope ?? new Scope(parent.scope))

    if (isSimpleExpressionNode(node) && !node.isStatic) {
      if (
        parent != null ||
        !(
          isDirectiveNode(parent) &&
          ['slot', 'for'].includes(parent.name) &&
          parent.exp === node
        )
      ) {
        getIdentifiers(node.content).forEach((identifier) =>
          scope.getBinding(identifier),
        )
      }
    } else if (isElementNode(node)) {
      node.props.forEach((prop) => {
        if (isDirectiveNode(prop)) {
          const directiveScope = (prop.scope = prop.scope ?? new Scope(scope))
          if (prop.name === 'slot') {
            if (isSimpleExpressionNode(prop.exp)) {
              const localScope = (prop.exp.scope = new Scope(directiveScope))
              const content = prop.exp.content.trim()

              getIdentifiers(`(${content}) => {}`).forEach((identifier) => {
                scope.setBinding(identifier, node)
                localScope.getBinding(identifier)
              })
            }
          } else if (prop.name === 'for') {
            if (isSimpleExpressionNode(prop.exp)) {
              const localScope = (prop.exp.scope = new Scope(directiveScope))
              const match = forAliasRE.exec(prop.exp.content)
              if (match != null) {
                const [, LHS, RHS] = match
                getIdentifiers(RHS).forEach((identifier) => {
                  localScope.getBinding(identifier)
                })

                getIdentifiers(`${LHS} => {}`).forEach((identifier) => {
                  scope.setBinding(identifier, node)
                  localScope.getBinding(identifier)
                })
              }
            }
          }
        }
      })
    }
  })

  return ast
}

function getIdentifiers(source: string): Set<string> {
  source = source
    .trim()
    // Common errors when user is typing.
    .replace(/(\.|\[\]?)$/, '')

  if (isSimpleIdentifier(source.trim())) return new Set([source])

  // TODO: Handle incomplete expressions
  try {
    const ast = parseUsingBabel(source)
    const identifers = new Set<string>()

    traverseBabel(ast, (node, ancestors) => {
      if (isIdentifier(node)) {
        if (ancestors.length > 0) {
          if (shouldTrack(node, ancestors[ancestors.length - 1].node)) {
            identifers.add(node.name)
          }
        } else {
          identifers.add(node.name)
        }
      }
    })

    return identifers
  } catch {
    return new Set<string>([])
  }
}

function parseUsingBabel(source: string): File | Expression {
  try {
    return parse(source, {
      plugins: ['bigInt', 'optionalChaining'],
      // @ts-expect-error
      errorRecovery: true,
    })
  } catch {
    return parseExpression(source, {
      plugins: ['bigInt', 'optionalChaining'],
      // @ts-expect-error
      errorRecovery: true,
    })
  }
}

function shouldTrack(identifier: Identifier, parent: BabelNode): boolean {
  if (
    !(
      isFunction(parent) &&
      // not id of a FunctionDeclaration
      (parent as any).id === identifier
    ) &&
    // not a key of Property
    !isStaticPropertyKey(identifier, parent) &&
    // not a property of a MemberExpression
    !(
      (isMemberExpression(parent) || isOptionalMemberExpression(parent)) &&
      parent.property === identifier &&
      !parent.computed
    ) &&
    // skip whitelisted globals
    !isKnownIdentifier(identifier.name) &&
    // special case for webpack compilation
    identifier.name !== `require` &&
    // is a special keyword but parsed as identifier
    identifier.name !== `arguments`
  ) {
    return true
  }

  return false
}
