import { parse, parseExpression } from '@babel/parser'
import {
  Expression,
  File,
  Identifier,
  isArrayPattern,
  isArrowFunctionExpression,
  isAssignmentPattern,
  isCallExpression,
  isClassDeclaration,
  isDeclaration,
  isDeclareClass,
  isDeclareFunction,
  isDeclareVariable,
  isEnumDeclaration,
  isExpression,
  isFile,
  isFunction,
  isFunctionDeclaration,
  isIdentifier,
  isImportDeclaration,
  isImportSpecifier,
  isMemberExpression,
  isObjectMember,
  isObjectPattern,
  isOptionalMemberExpression,
  isPrivateName,
  isRestElement,
  isVariableDeclaration,
  LVal,
  Node as BabelNode,
  ObjectMember,
  PatternLike,
  traverse as traverseBabel,
} from '@babel/types'
import { isSimpleIdentifier, Node, RootNode } from '@vue/compiler-core'
import { flatten, invariant, isCamelCase, isPascalCase } from '@vuedx/shared'
import {
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
  traverse,
} from '@vuedx/template-ast-types'
import { forAliasRE } from '../transforms/transformFor'

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
    if (identifier in this.bindings) return this.bindings[identifier] ?? null
    if (this.parent != null) {
      return (this.bindings[identifier] = this.parent.getBinding(identifier))
    } else {
      this.bindings[identifier] = null
    }

    return null
  }

  public setBinding(identifier: string, node: Node): void {
    this.bindings[identifier] = node
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
        const isOnDirective = isDirectiveNode(parent) && parent.name === 'on'
        getIdentifiers(node.content).forEach((identifier) => {
          if (isOnDirective && identifier === '$event') return
          scope.getBinding(identifier)
        })
      }
    } else if (isElementNode(node)) {
      node.props.forEach((prop) => {
        if (isDirectiveNode(prop)) {
          const directiveScope = (prop.scope = prop.scope ?? new Scope(scope))
          if (prop.name === 'slot') {
            if (isSimpleExpressionNode(prop.exp)) {
              const localScope = (prop.exp.scope = new Scope(directiveScope))
              const content = prop.exp.content.trim()

              getIdentifiers(`(${content}) => {}`, false).forEach(
                (identifier) => {
                  scope.setBinding(identifier, node)
                  localScope.getBinding(identifier)
                },
              )
            }
          } else if (prop.name === 'for') {
            if (isSimpleExpressionNode(prop.exp)) {
              const localScope = (prop.exp.scope = new Scope(directiveScope))
              const match = forAliasRE.exec(prop.exp.content)
              if (match != null) {
                const [, LHS, RHS] = match
                invariant(LHS != null && RHS != null)
                getIdentifiers(RHS).forEach((identifier) => {
                  localScope.getBinding(identifier)
                })

                getIdentifiers(`${LHS ?? '()'} => {}`, false).forEach(
                  (identifier) => {
                    scope.setBinding(identifier, node)
                    localScope.getBinding(identifier)
                  },
                )
              }
            }
          }
        }
      })
    }
  })

  return ast
}

/**
 * @internal
 */
export function getTopLevelIdentifiers(
  source: string,
  ignoreImportsFrom: string[],
): {
  identifiers: Set<string>
  components: Set<string>
  directives: Set<string>
  propsIdentifier: string | undefined
  emitIdentifier: string | undefined
} {
  const identifiers = new Set<string>()
  const components = new Set<string>()
  const directives = new Set<string>()
  let propsIdentifier: string | undefined
  let emitIdentifier: string | undefined
  let definePropsIdentifierFn: string | undefined
  let defineEmitIdentifierFn: string | undefined
  const ignoredSources = new Set(ignoreImportsFrom)
  try {
    const ast = parseUsingBabel(source, true)

    const getIdentifiers = (node: LVal): string[] => {
      if (isIdentifier(node)) return [node.name]
      else if (isMemberExpression(node)) {
        if (isIdentifier(node.property)) {
          return [node.property.name]
        } else if (isExpression(node.property)) {
          return []
        } else if (isPrivateName(node.property)) {
          return [node.property.id.name]
        } else {
          return []
        }
      } else if (isRestElement(node)) {
        return getIdentifiers(node.argument)
      } else if (isAssignmentPattern(node)) {
        return getIdentifiers(node.left)
      } else if (isArrayPattern(node)) {
        return flatten(
          node.elements
            .filter((element): element is PatternLike => element != null)
            .map((element) => getIdentifiers(element)),
        )
      } else if (isObjectPattern(node)) {
        return flatten(
          node.properties.map((property) => {
            if (isRestElement(property) || isIdentifier(property)) {
              return getIdentifiers(property)
            } else {
              return []
            }
          }),
        )
      } else {
        return []
      }
    }

    if (isFile(ast)) {
      ast.program.body.forEach((node) => {
        if (!isDeclaration(node)) return
        if (isVariableDeclaration(node)) {
          node.declarations.forEach((declaration) => {
            getIdentifiers(declaration.id).forEach((name) =>
              identifiers.add(name),
            )

            if (
              isIdentifier(declaration.id) &&
              isCallExpression(declaration.init)
            ) {
              if (isIdentifier(declaration.init.callee)) {
                if (declaration.init.callee.name === definePropsIdentifierFn) {
                  propsIdentifier = declaration.id.name
                } else if (
                  declaration.init.callee.name === defineEmitIdentifierFn
                ) {
                  emitIdentifier = declaration.id.name
                }
              }
            }
          })
        } else if (isFunctionDeclaration(node)) {
          if (node.id != null) identifiers.add(node.id.name)
        } else if (isImportDeclaration(node)) {
          const isVue = node.source.value === 'vue'
          node.specifiers.forEach((specifier) => {
            if (isVue && isImportSpecifier(specifier)) {
              const name = isIdentifier(specifier.imported)
                ? specifier.imported.name
                : specifier.imported.value

              if (name === 'defineProps') {
                definePropsIdentifierFn = specifier.local.name

                return // -
              } else if (name === 'defineEmit') {
                defineEmitIdentifierFn = specifier.local.name

                return // -
              }
            }

            if (!ignoredSources.has(node.source.value)) {
              identifiers.add(specifier.local.name)
              if (
                isCamelCase(specifier.local.name) &&
                /^v[A-Z]/.test(specifier.local.name)
              ) {
                directives.add(specifier.local.name)
              } else if (isPascalCase(specifier.local.name)) {
                components.add(specifier.local.name)
              }
            }
          })
        } else if (isClassDeclaration(node)) {
          identifiers.add(node.id.name)
        } else if (isDeclareClass(node)) {
          identifiers.add(node.id.name)
        } else if (isDeclareFunction(node)) {
          identifiers.add(node.id.name)
        } else if (isDeclareVariable(node)) {
          identifiers.add(node.id.name)
        } else if (isEnumDeclaration(node)) {
          identifiers.add(node.id.name)
        }
      })
    }
  } catch {
    // FIXME: Handle errors
  }

  return {
    identifiers,
    components,
    directives,
    emitIdentifier,
    propsIdentifier,
  }
}
function getIdentifiers(
  source: string,
  ignoreFunctionParameters = true,
): Set<string> {
  source = source
    .trim()
    // Common errors when user is typing.
    .replace(/(\.|\[\]?)\s*$/, '')

  const identifiers = new Set<string>()
  const add = (id: string): void => {
    if (isValidIdentifier(id)) identifiers.add(id)
  }
  if (isSimpleIdentifier(source.trim())) {
    add(source)
  } else {
    try {
      const ast = parseUsingBabel(source, true)
      let definedInScope = new Set<string>()
      const scopes: Array<Set<string>> = []
      const pushScope = (scope: Set<string>): void => {
        if (!ignoreFunctionParameters) return
        scopes.push(scope)
        definedInScope = new Set([...definedInScope, ...scope])
      }
      const popScope = (): void => {
        if (!ignoreFunctionParameters) return
        scopes.pop()
        definedInScope = new Set(scopes.flatMap((scope) => Array.from(scope)))
      }
      traverseBabel(ast, {
        enter: (node, ancestors) => {
          if (isFunctionDeclaration(node) || isArrowFunctionExpression(node)) {
            const scope = new Set<string>()
            node.params.forEach((param) => {
              traverseBabel(param, (node) => {
                if (isIdentifier(node)) scope.add(node.name)
              })
            })
            pushScope(scope)
          }

          if (isIdentifier(node) && !definedInScope.has(node.name)) {
            if (shouldTrack(node, ancestors.slice())) {
              add(node.name)
            }
          }
        },
        exit: (node) => {
          if (isFunctionDeclaration(node) || isArrowFunctionExpression(node)) {
            popScope()
          }
        },
      })
    } catch {
      const RE = /\b[a-z$_][a-z0-9$_]+\b/gi
      let match: RegExpMatchArray | null
      while ((match = RE.exec(source)) != null) {
        add(match[0] ?? '')
      }
    }
  }
  return identifiers
}

function isValidIdentifier(id: string): boolean {
  return (
    id.trim().length > 0 &&
    !/^(of|in|for|while|function|class|const|let|var|true|false)$/.test(id)
  )
}

function parseUsingBabel(source: string, withTS = false): File | Expression {
  try {
    return parse(source, {
      plugins: withTS
        ? ['bigInt', 'optionalChaining', 'typescript']
        : ['bigInt', 'optionalChaining'],
      // @ts-expect-error
      errorRecovery: true,
    }) as any
  } catch {
    return parseExpression(source, {
      plugins: withTS
        ? ['bigInt', 'optionalChaining', 'typescript']
        : ['bigInt', 'optionalChaining'],
      // @ts-expect-error
      errorRecovery: true,
    }) as any
  }
}

// TODO: This misses destructured arguments
function shouldTrack(
  identifier: Identifier,
  ancestors: Array<{
    node: BabelNode
    key: string
    index?: number
  }>,
): boolean {
  const ancestor = ancestors.pop()
  if (ancestor == null) return true
  const parent = ancestor.node

  if (
    // not id of a FunctionDeclaration
    !(isFunction(parent) && (parent as any).id === identifier) &&
    // not a key of Property
    !isStaticPropertyKey(identifier, parent) &&
    // not a property of a MemberExpression
    !(
      (isMemberExpression(parent) || isOptionalMemberExpression(parent)) &&
      parent.property === identifier &&
      !parent.computed
    ) &&
    // skip allowed globals
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

const KNOWN_IDENTIFIERS = new Set(
  (
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'
  ).split(','),
)

function isKnownIdentifier(value: string): boolean {
  return KNOWN_IDENTIFIERS.has(value) || /^(true|false|null|this)$/.test(value)
}

function isStaticProperty(node: BabelNode): node is ObjectMember {
  return isObjectMember(node) && !node.computed
}

function isStaticPropertyKey(node: BabelNode, parent: BabelNode): boolean {
  return isStaticProperty(parent) && parent.key === node
}
