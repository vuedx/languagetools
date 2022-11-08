// TODO: Migrate to typescript.
import { isSimpleIdentifier, Node, RootNode } from '@vue/compiler-core'
import { invariant } from '@vuedx/shared'
import {
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
  traverse,
} from '@vuedx/template-ast-types'
import { createProgram } from '@vuedx/transforms'
import type * as TypeScript from 'typescript/lib/tsserverlibrary'
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

export function withScope(ast: RootNode, ts: typeof TypeScript): RootNode {
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
        getIdentifiers(ts, node.content).forEach((identifier) => {
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

              getIdentifiers(ts, `(${content}) => {}`, false).forEach(
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
                getIdentifiers(ts, RHS).forEach((identifier) => {
                  localScope.getBinding(identifier)
                })

                getIdentifiers(ts, `${LHS ?? '()'} => {}`, false).forEach(
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

function getIdentifiers(
  ts: typeof TypeScript,
  source: string,
  ignoreFunctionParameters = true,
): Set<string> {
  const identifiers = new Set<string>()
  const add = (id: string): void => {
    if (id === '__') return
    if (isValidIdentifier(id) && !isKnownIdentifier(id)) identifiers.add(id)
  }
  if (isSimpleIdentifier(source.trim())) {
    add(source)
  } else {
    try {
      const [, sourceFile] = parseUsingTS(`const __ = ${source.trim()}`, ts)

      function walk(node: TypeScript.Node): void {
        if (ts.isIdentifier(node)) {
          let parent = node.parent
          while (parent != null) {
            if (ts.isPropertyAccessExpression(parent)) {
              if (parent.expression === node) {
                add(node.getText())
              }

              break
            } else if (ts.isParameter(parent)) {
              if (!ignoreFunctionParameters) {
                add(node.getText())
              }

              break
            } else if (ts.isBindingElement(parent)) {
              if (parent.propertyName === node) {
                break
              }
              parent = parent.parent
            } else if (
              ts.isObjectBindingPattern(parent) ||
              ts.isArrayBindingPattern(parent)
            ) {
              parent = parent.parent
            } else if (ts.isPropertyAssignment(parent)) {
              if (parent.name === node) {
                break
              }
              parent = parent.parent
            } else if (ts.isShorthandPropertyAssignment(parent)) {
              parent = parent.parent
            } else {
              // console.log(
              //   node.getText(),
              //   ts.SyntaxKind[parent.kind],
              //   parent.getText(),
              // )
              add(node.getText())

              break
            }
          }
        }
        node.forEachChild((child) => walk(child))
      }

      walk(sourceFile)

      return identifiers
    } catch (error) {
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

function parseUsingTS(
  source: string,
  ts: typeof TypeScript,
): [TypeScript.Program, TypeScript.SourceFile] {
  const program = createProgram(ts, source)
  const sourceFile = program.getSourceFile('input.ts')
  invariant(sourceFile != null)
  return [program, sourceFile]
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
