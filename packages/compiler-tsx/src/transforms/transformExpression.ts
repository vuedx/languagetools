import { parse } from '@babel/parser'
import {
  Identifier,
  isArrayPattern,
  isAssignmentPattern,
  isFunction,
  isIdentifier,
  isMemberExpression,
  isObjectMember,
  isOptionalMemberExpression,
  Node,
  ObjectMember,
  traverse,
  traverseFast,
} from '@babel/types'
import {
  findDir,
  isSimpleIdentifier,
  NodeTransform,
  Position,
  TransformContext,
} from '@vue/compiler-core'
import {
  isDirectiveNode,
  isElementNode,
  isInterpolationNode,
  isSimpleExpressionNode,
} from '@vuedx/template-ast-types'
import { advancePositionWithClone } from '../utils'

export function createExpressionTracker(
  addIdentifer: (identifer: string) => void,
): NodeTransform {
  return (node, context) => {
    const localIdentifiers = new Set<string>()
    if (isInterpolationNode(node)) {
      if (
        isSimpleExpressionNode(node.content) &&
        !node.content.isStatic &&
        node.content.content.trim() !== ''
      ) {
        trackIdentifiers(
          node.content.content,
          context,
          node.content.loc.start,
          addIdentifer,
        )
      }
    } else if (isElementNode(node)) {
      node.props.forEach((dir) => {
        if (isDirectiveNode(dir)) {
          if (
            isSimpleExpressionNode(dir.arg) &&
            !dir.arg.isStatic &&
            dir.arg.content.trim() !== ''
          ) {
            trackIdentifiers(
              dir.arg.content,
              context,
              dir.arg.loc.start,
              addIdentifer,
            )
          }

          const slot = findDir(node, 'slot')

          if (slot != null) {
            if (
              isSimpleExpressionNode(slot.exp) &&
              !slot.exp.isStatic &&
              slot.exp.content.trim() !== ''
            ) {
              trackIdentifiers(
                slot.exp.content,
                context,
                slot.exp.loc.start,
                (identifier) => {
                  localIdentifiers.add(identifier)
                  context.addIdentifiers(identifier)
                },
                dir.name === 'slot',
              )
            }
          }

          switch (dir.name) {
            case 'for':
            case 'slot':
              break
            case 'on':
              if (
                isSimpleExpressionNode(dir.exp) &&
                !dir.exp.isStatic &&
                dir.exp.content.trim() !== ''
              ) {
                context.addIdentifiers('$event')
                trackIdentifiers(
                  dir.exp.content,
                  context,
                  dir.exp.loc.start,
                  addIdentifer,
                  false,
                  true,
                )
                context.removeIdentifiers('$event')
              }
              break
            default: {
              if (
                isSimpleExpressionNode(dir.exp) &&
                dir.exp.content.trim() !== ''
              ) {
                trackIdentifiers(
                  dir.exp.content,
                  context,
                  dir.exp.loc.start,
                  addIdentifer,
                )
              }
            }
          }
        }
      })
    }

    return () => {
      localIdentifiers.forEach((identifier) =>
        context.removeIdentifiers(identifier),
      )
    }
  }
}

const KNOWN_IDENTIFIERS = new Set(
  (
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl'
  ).split(','),
)

export function isKnownIdentifier(value: string): boolean {
  return KNOWN_IDENTIFIERS.has(value) || /^(true|false|null|this)$/.test(value)
}

export function trackIdentifiers(
  rawExp: string,
  context: TransformContext,
  start: Position,
  addIdentifer: (identifier: string) => void,
  // some expressions like v-slot props & v-for aliases should be parsed as
  // function params
  asParams = false,
  // v-on handler values may contain multiple statements
  asRawStatements = false,
): void {
  rawExp = rawExp
    .trim()
    // Handle common incomplete expressions
    .replace(/(\.|\[\]?)$/, '')

  if (rawExp.trim() === '') return
  if (isSimpleIdentifier(rawExp)) {
    if (
      !asParams &&
      (context.identifiers[rawExp] ?? 0) === 0 &&
      !isKnownIdentifier(rawExp)
    ) {
      addIdentifer(rawExp)
    }

    return
  }

  const source = asRawStatements
    ? ` ${rawExp} `
    : `(${rawExp})${asParams ? `=>{}` : ``}`

  try {
    const ast = parse(source, {
      plugins: [
        'bigInt',
        'optionalChaining',
        'nullishCoalescingOperator',
        'typescript',
      ],

      // @ts-expect-error
      errorRecovery: true,
    })
    const knownIds = { ...context.identifiers }

    traverse(ast, {
      enter(node, ancestors) {
        const scope = new Set<string>()
        const parent = ancestors[ancestors.length - 1]?.node
        if (isIdentifier(node)) {
          if ((knownIds[node.name] ?? 0) === 0) {
            if (shouldTrack(node, parent)) {
              addIdentifer(node.name)
            }
          }
        } else if (isFunction(node)) {
          node.params.forEach((param) =>
            traverseFast(param, (node, ancestors) => {
              const parent = ancestors[ancestors.length - 1]?.node
              if (
                parent != null &&
                isIdentifier(node) &&
                !isStaticProperty(parent) &&
                !(isAssignmentPattern(parent) && parent.right === node)
              ) {
                const id = node.name
                if (!scope.has(id)) {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  if (id in knownIds) ++knownIds[id]!
                  else knownIds[id] = 1
                }
                scope.add(id)
              }
            }),
          )
        }

        // @ts-expect-error
        node.scope = scope
      },
      exit(node) {
        // @ts-expect-error
        const scope: Set<string> | undefined = node.scope

        scope?.forEach((id) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          --knownIds[id]!
        })
      },
    })
  } catch (error) {
    const RE = /\b[a-z$_][a-z0-9$_]*\b/gi
    let match: RegExpExecArray | null = null
    do {
      match = RE.exec(source)
      if (match?.[0] != null) addIdentifer(match[0])
    } while (match != null)
    const pos = error.pos ?? 0
    context.onError({
      name: error.code,
      message: `Failed to analyze expression. Error: ${String(error.message)}`,
      code: 1000,
      loc: {
        source: rawExp,
        start: advancePositionWithClone(start, rawExp, pos - 1),
        end: advancePositionWithClone(start, rawExp, pos),
      },
    })
  }
}

export function isStaticProperty(node: Node): node is ObjectMember {
  return isObjectMember(node) && !node.computed
}

export function isStaticPropertyKey(node: Node, parent: Node): boolean {
  return isStaticProperty(parent) && parent.key === node
}

export function shouldTrack(identifier: Identifier, parent?: Node): boolean {
  if (parent == null) return true

  if (
    !(
      isFunction(parent) &&
      // not id of a FunctionDeclaration
      ((parent as any).id === identifier ||
        // not a params of a function
        parent.params.includes(identifier))
    ) &&
    // not a key of Property
    !isStaticPropertyKey(identifier, parent) &&
    // not a property of a MemberExpression
    !(
      (isMemberExpression(parent) || isOptionalMemberExpression(parent)) &&
      parent.property === identifier &&
      !parent.computed
    ) &&
    // not in an Array destructure pattern
    !isArrayPattern(parent) &&
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
