import { parse } from '@babel/parser'
import { ArrowFunctionExpression, ExpressionStatement } from '@babel/types'
import {
  NodeTransform,
  SimpleExpressionNode,
  TransformContext,
} from '@vue/compiler-core'
import * as T from '@vuedx/template-ast-types'

export const transformExpression: NodeTransform = (node, context) => {
  if (T.isInterpolationNode(node)) {
    processExpression(node.content as SimpleExpressionNode, context)
  } else if (T.isElementNode(node)) {
    node.props.forEach((prop) => {
      if (T.isDirectiveNode(prop)) {
        if (prop.arg) {
          processExpression(
            (prop.arg as unknown) as SimpleExpressionNode,
            context,
            true
          )
        }
        if (prop.exp) {
          if (prop.name === 'for') {
            processForExpression(
              (prop.exp as unknown) as SimpleExpressionNode,
              context
            )
          } else if (prop.name === 'slot') {
            processSlotExpression(
              (prop.exp as unknown) as SimpleExpressionNode,
              context
            )
          } else if (prop.name === 'on') {
            processOnExpression(
              (prop.exp as unknown) as SimpleExpressionNode,
              context
            )
          } else {
            processExpression(
              (prop.exp as unknown) as SimpleExpressionNode,
              context
            )
          }
        }
      }
    })
  }
}

const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/
const stripParensRE = /^\(|\)$/g
function processForExpression(
  node: SimpleExpressionNode,
  context: TransformContext
) {
  const exp = node.content
  const inMatch = exp.match(forAliasRE)
  if (!inMatch) return

  const [, LHS, RHS] = inMatch
  const rawJHSExp = LHS.trim().replace(stripParensRE, '').trim()

  const leftOffset = LHS.indexOf(rawJHSExp)
  // @ts-ignore
  node.leftNode = parseExpression(
    rawJHSExp,
    context,
    node.loc.start.line,
    node.loc.start.column + leftOffset,
    node.loc.start.offset + leftOffset,
    true
  )

  const rightOffset = exp.indexOf(RHS, LHS.length)
  // @ts-ignore
  node.rightNode = parseExpression(
    RHS,
    context,
    node.loc.start.line,
    node.loc.start.column + rightOffset,
    node.loc.start.offset + rightOffset,
    true
  )[0]
}

function processSlotExpression(
  node: SimpleExpressionNode,
  context: TransformContext
) {
  // @ts-ignore
  node.leftNode = parseExpression(
    node.content,
    context,
    node.loc.start.line,
    node.loc.start.column,
    node.loc.start.offset,
    true
  )
}

function processOnExpression(
  node: SimpleExpressionNode,
  context: TransformContext
) {
  // @ts-ignore
  node.node = parseExpression(
    node.content,
    context,
    node.loc.start.line,
    node.loc.start.column,
    node.loc.start.offset,
    false,
    true
  )
}

function processExpression(
  node: SimpleExpressionNode,
  context: TransformContext,
  asDirectiveArg = false
) {
  if (!node.isStatic) {
    const offset = asDirectiveArg ? 1 : 0
    // @ts-ignore
    node.node = parseExpression(
      node.content,
      context,
      node.loc.start.line,
      node.loc.start.column + offset,
      node.loc.start.offset + offset
    )
  }
}

function parseExpression(
  rawExp: string,
  context: TransformContext,
  line: number,
  column: number,
  offset: number,
  asParams = false,
  asRawStatements = false
) {
  const prefix =
    line > 1
      ? ' '.repeat(Math.max(0, offset - (line - 1) - (column - 1))) +
        '\n'.repeat(Math.max(0, line - 1)) +
        ' '.repeat(Math.max(0, column - 2))
      : ' '.repeat(Math.max(0, column - 2))
  const source = asRawStatements
    ? ` ${rawExp} `
    : `(${rawExp})${asParams ? '=>{}' : ``}`

  try {
    const ast = parse(prefix + source, {
      ranges: true,
      plugins: [
        ...context.expressionPlugins,
        'bigInt',
        'optionalChaining',
        'nullishCoalescingOperator',
      ],
    }).program.body

    if (asRawStatements) {
      return ast
    } else if (asParams) {
      return ((ast[0] as ExpressionStatement)
        .expression as ArrowFunctionExpression).params
    } else {
      return (ast[0] as ExpressionStatement).expression
    }
  } catch (error) {
    throw error
  }
}
