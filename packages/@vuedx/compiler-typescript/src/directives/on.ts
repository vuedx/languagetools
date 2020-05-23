import {
  CompoundExpressionNode,
  createCompilerError,
  createCompoundExpression,
  createObjectProperty,
  createSimpleExpression,
  DirectiveTransform,
  ErrorCodes,
  isMemberExpression,
  SimpleExpressionNode,
} from '@vue/compiler-core';
import { isSimpleExpressionNode } from '@vuedx/template-ast-types';
import { capitalize, camelize, fnExpRE } from './helpers';

export const transformOn: DirectiveTransform = (dir, node, context, augmentor) => {
  const { loc, modifiers, arg } = dir;

  let eventName!: SimpleExpressionNode | CompoundExpressionNode;

  if (isSimpleExpressionNode(arg)) {
    if (arg.isStatic) {
      const rawName = arg.content;
      const normalizedName = rawName.startsWith(`vnode`) ? capitalize(camelize(rawName)) : capitalize(rawName);
      eventName = createSimpleExpression(`on${normalizedName}`, true, arg.loc);
    } else {
      eventName = createCompoundExpression(['"on" + (', arg, ')']);
    }
  } else if (arg) {
    eventName = arg;
    eventName.children.unshift('"on" + (');
    eventName.children.push(')');
  } else {
    context.onError(createCompilerError(ErrorCodes.X_V_ON_NO_EXPRESSION, loc));
  }

  let exp = dir.exp;
  if (isSimpleExpressionNode(exp)) {
    if (!exp.content.trim()) {
      exp = undefined;
    } else {
      const isMemberExp = isMemberExpression(exp.content);
      const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
      const hasMultipleStatements = exp.content.includes(';');

      if (isInlineStatement) {
        exp = createCompoundExpression([
          `$event => ${hasMultipleStatements ? '{' : '('}`,
          exp,
          hasMultipleStatements ? '}' : ')',
        ]);
      }
    }
  }

  return {
    needRuntime: true,
    props: [createObjectProperty(eventName, exp || createSimpleExpression('() => {}', false, loc))],
  };
};
