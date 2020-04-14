import { Node, ElementNode, DirectiveNode, findDir, SimpleExpressionNode } from '@vue/compiler-core';
import { isTemplateNode, isSimpleExpressionNode, isInterpolationNode, isTextNode } from '@vuedx/template-ast-types';
import assert from 'assert';
import {
  Node as BabelNode,
  ArrayExpression,
  ArrowFunctionExpression,
  BlockStatement,
  CallExpression,
  Identifier,
  isArrayExpression,
  isBlockStatement,
  isCallExpression,
  isConditionalExpression,
  isIdentifier,
  isMemberExpression,
  isObjectExpression,
  isObjectProperty,
  ObjectExpression,
  ObjectProperty,
  ReturnStatement,
} from '@babel/types';

export function match(html: Node, parent: ElementNode, js: BabelNode) {
  if (isCallExpression(js) && isIdentifier(js.callee) && js.callee.name === '_h') {
    if (js.arguments.length === 2) {
      assert((js.arguments[0] as Identifier).name === '_Fragment', `unexpected argument to _h(): ${js.arguments[0]}`);

      const items = js.arguments[1];

      if (isCallExpression(items)) {
        const callee = items.callee as Identifier;
        assert(callee.name === '_renderList', `unexpected call expression: ${callee.name}`);
        // @ts-ignore
        // html.jsNode = items;

        const vFor = findDir(html as ElementNode, 'for') as DirectiveNode;
        // @ts-ignore
        vFor.exp.rightJsNode = items.arguments[0];
        const iterator = items.arguments[1] as ArrowFunctionExpression;
        // @ts-ignore
        vFor.exp.leftJsNode = iterator.params;

        assert(isBlockStatement(iterator.body));
        const nextJs = ((iterator.body as BlockStatement).body[0] as ReturnStatement).argument as CallExpression;

        if (isTemplateNode(html)) {
          if (html.children.length === 1) {
            match((html.children[0] as unknown) as Node, (html as unknown) as ElementNode, nextJs);
          } else {
            match(html, parent, nextJs);
          }
        } else {
          match(html, parent, nextJs);
        }
      } else if (isArrayExpression(items)) {
        // @ts-ignore
        // html.jsNode = js;
        matchChildren(html as ElementNode, items);
      }
    } else {
      // @ts-ignore
      // html.jsNode = js;

      const [, props, children] = js.arguments;

      if (isObjectExpression(props)) {
        props.properties.forEach((property) => {
          if (isMemberExpression(property)) {
            // TODO: Match props.
          }
        });
      }

      if (isArrayExpression(children) || isObjectExpression(children)) {
        matchChildren(html as ElementNode, children);
      }
    }
  } else if (isConditionalExpression(js)) {
    const vIf = findDir(html as ElementNode, /^(if|else-if)$/) as DirectiveNode;
    // @ts-ignore
    vIf.exp.jsNode = js.test;
    match(html, parent, js.consequent);

    const index = parent.children.indexOf(html as ElementNode);
    if (index >= 0 && index + 1 < parent.children.length) {
      match(parent.children[index + 1], parent, js.alternate);
    }
  } else if (isSimpleExpressionNode(html)) {
    // @ts-ignore
    html.jsNode = js;
    // @ts-ignore
    if (html.node && html.jsNode) {
      // @ts-ignore
      matchExpression(html, html.node, html.jsNode);
      // @ts-ignore
      delete html.node;
    }
  } else if (isInterpolationNode(html)) {
    // @ts-ignore
    if (js.arguments?.length) html.content.jsNode = js.arguments[0];
    // @ts-ignore
    if (html.content.node && html.content.jsNode) {
      // @ts-ignore
      matchExpression(html, html.content.node, html.content.jsNode);
      // @ts-ignore
      delete html.content.node;
    }
  } else if (isTextNode(html)) {
  } else {
    // throw new Error('Unexpected! ' + js.type);
  }
}

function matchChildren(parent: ElementNode, children: ArrayExpression | ObjectExpression) {
  if (isArrayExpression(children)) {
    let i = 0;
    for (let j = 0; j < children.elements.length; ++j) {
      // @ts-ignore
      while (i < parent.children.length && parent.children[i].jsNode) ++i;
      assert(i < parent.children.length);
      match(parent.children[i]!, parent, children.elements[j]!);
      ++i;
    }
  } else if (isObjectExpression(children)) {
    if (children.properties.length === 1 && children.properties.some((property) => isObjectProperty(property))) {
      const { value } = children.properties[0] as ObjectProperty;

      assert(isCallExpression(value));

      const vSlot = findDir(parent, 'slot');
      const slot = (value as CallExpression).arguments[0] as ArrowFunctionExpression;
      const slotChildren = slot.body as ArrayExpression;

      if (vSlot) {
        // @ts-ignore
        vSlot.exp.leftJsNode = slot.params;
      }

      matchChildren(parent, slotChildren);
    } else {
      children.properties.forEach((property, index) => {
        if (isObjectProperty(property)) {
          const { key, value } = property;

          assert(isCallExpression(value));

          const vSlot = findDir(parent.children[index]! as ElementNode, 'slot');
          const slot = (value as CallExpression).arguments[0] as ArrowFunctionExpression;
          const slotChildren = slot.body as ArrayExpression;

          if (vSlot?.exp) {
            // @ts-ignore
            vSlot.exp.jsNode = slot.params;
            // @ts-ignore
            if (!vSlot.arg?.isStatic) {
              // @ts-ignore
              vSlot.arg.jsNode = key;
            }
          }

          matchChildren(parent.children[index] as ElementNode, slotChildren);
        }
      });
    }
  }
}

type ExpressionNodeWithJs = SimpleExpressionNode & {
  children?: { original: BabelNode; jsNode: BabelNode }[];
};
function matchExpression(expression: ExpressionNodeWithJs, original: BabelNode, generated: BabelNode) {
  expression.children = expression.children || [];

  if (original.type === 'Identifier' && generated.type === 'MemberExpression') {
    expression.children.push({ original, jsNode: generated });
  } else {
    for (const _key in original) {
      const key = _key as keyof BabelNode;
      if (typeof original[key] === 'object' && 'type' in ((original[key] as unknown) as any)) {
        matchExpression(expression, (original[key] as unknown) as any, (generated[key] as unknown) as any);
      }
    }
  }
}
