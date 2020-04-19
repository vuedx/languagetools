import { parse } from '@babel/parser';
import { ArrowFunctionExpression, ExpressionStatement } from '@babel/types';
import { NodeTransform, SimpleExpressionNode, TransformContext } from '@vue/compiler-core';
import { isInterpolationNode, isElementNode, isDirectiveNode } from '@vuedx/template-ast-types';
import { JsNode } from '../interfaces';

export const transformExpression: NodeTransform = (node, context) => {
  if (isInterpolationNode(node)) {
    processExpression(node.content as SimpleExpressionNode, context);
  } else if (isElementNode(node)) {
    node.props.forEach((prop) => {
      if (isDirectiveNode(prop)) {
        if (prop.arg) {
          processExpression((prop.arg as unknown) as SimpleExpressionNode, context, true);
        }
        
        if (prop.exp) {
          if (prop.name === 'for') {
            processForExpression((prop.exp as unknown) as SimpleExpressionNode, context);
          } else if (prop.name === 'slot') {
            processSlotExpression((prop.exp as unknown) as SimpleExpressionNode, context);
          } else if (prop.name === 'on') {
            processOnExpression((prop.exp as unknown) as SimpleExpressionNode, context);
          } else {
            processExpression((prop.exp as unknown) as SimpleExpressionNode, context);
          }
        }
      }
    });
  }
};

const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
const stripParensRE = /^\(|\)$/g;
function processForExpression(node: SimpleExpressionNode, context: TransformContext) {
  const exp = node.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) return;

  const [, LHS, RHS] = inMatch;
  const rawJHSExp = LHS.trim().replace(stripParensRE, '').trim();
  const leftOffset = LHS.indexOf(rawJHSExp);
  const rightOffset = exp.indexOf(RHS, LHS.length);

  node.renderNode = {
    type: 'v-for',
    left: {
      original: parseExpression(
        rawJHSExp,
        context,
        node.loc.start.line,
        node.loc.start.column + leftOffset,
        node.loc.start.offset + leftOffset,
        true
      ),
    },
    right: {
      original: parseExpression(
        RHS,
        context,
        node.loc.start.line,
        node.loc.start.column + rightOffset,
        node.loc.start.offset + rightOffset,
        true
      )[0],
    },
  };
}

function processSlotExpression(node: SimpleExpressionNode, context: TransformContext) {
  node.renderNode = {
    type: 'v-slot',
    original: parseExpression(
      node.content,
      context,
      node.loc.start.line,
      node.loc.start.column,
      node.loc.start.offset,
      true
    ),
  };
}

function processOnExpression(node: SimpleExpressionNode, context: TransformContext) {
  node.renderNode = {
    type: 'v-on',
    original: parseExpression(
      node.content,
      context,
      node.loc.start.line,
      node.loc.start.column,
      node.loc.start.offset,
      false,
      true
    ),
  };
}

function processExpression(node: SimpleExpressionNode, context: TransformContext, asDirectiveArg = false) {
  if (!node.isStatic) {
    const offset = asDirectiveArg ? 1 : 0;
    node.renderNode = {
      type: 'expression',
      original: parseExpression(
        node.content,
        context,
        node.loc.start.line,
        node.loc.start.column + offset,
        node.loc.start.offset + offset
      )[0],
    };
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
): JsNode[] {
  const prefix =
    line > 1
      ? ' '.repeat(Math.max(0, offset - (line - 1) - (column - 1))) +
        '\n'.repeat(Math.max(0, line - 1)) +
        ' '.repeat(Math.max(0, column - 2))
      : ' '.repeat(Math.max(0, column - 2));
  const source = asRawStatements ? ` ${rawExp} ` : `(${rawExp})${asParams ? '=>{}' : ``}`;

  try {
    const ast = parse(prefix + source, {
      ranges: true,
      plugins: [...context.expressionPlugins, 'bigInt', 'optionalChaining', 'nullishCoalescingOperator'],
    }).program.body;

    if (asRawStatements) {
      return ast as JsNode[];
    } else if (asParams) {
      return ((ast[0] as ExpressionStatement).expression as ArrowFunctionExpression).params as JsNode[];
    } else {
      return [(ast[0] as ExpressionStatement).expression] as JsNode[];
    }
  } catch (error) {
    throw error;
  }
}
