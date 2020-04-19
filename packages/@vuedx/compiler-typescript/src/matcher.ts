import {
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
  Node as BabelNode,
  ObjectExpression,
  ObjectProperty,
  ReturnStatement,
} from '@babel/types';
import { DirectiveNode, ElementNode, findDir, Node, SimpleExpressionNode } from '@vue/compiler-core';
import {
  isInterpolationNode,
  isSimpleExpressionNode,
  isTemplateNode,
  isTextNode,
  isAttributeNode,
  isDirectiveNode,
} from '@vuedx/template-ast-types';
import assert from 'assert';
import { JsNode, ExpressionRenderNode } from './interfaces';

export function match(html: Node, parent: ElementNode, js: BabelNode) {
  if (isCallExpression(js) && isIdentifier(js.callee) && js.callee.name === '_h') {
    if (js.arguments.length === 2) {
      assert((js.arguments[0] as Identifier).name === '_Fragment', `unexpected argument to _h(): ${js.arguments[0]}`);

      const items = js.arguments[1];

      if (isCallExpression(items)) {
        const callee = items.callee as Identifier;
        assert(callee.name === '_renderList', `unexpected call expression: ${callee.name}`);

        const vFor = findDir(html as ElementNode, 'for') as DirectiveNode;
        const iterator = items.arguments[1] as ArrowFunctionExpression;
        if (vFor.renderNode?.type === 'v-for') {
          vFor.renderNode.right.generated = items.arguments[0] as JsNode;
          vFor.renderNode.left.generated = iterator.params as JsNode[];
        }

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
        matchChildren(html as ElementNode, items);
      }
    } else {
      const [, props, children] = js.arguments;

      if (isObjectExpression(props)) {
        props.properties.forEach((property) => {
          if (isObjectProperty(property)) {
            const { key, computed } = property;
            if (computed) return; // already mapped to expression.
            if (!isIdentifier(key)) return; // unknown pattern
            const name = key.name;
            for (const prop of (html as ElementNode).props) {
              if (isAttributeNode(prop)) {
                if (prop.name === name) {
                  prop.renderNode = {
                    type: 'expression',
                    original: {
                      ...key,
                      loc: prop.loc,
                      start: prop.loc.start.offset,
                      end: prop.loc.end.offset,
                    },
                    generated: key as JsNode,
                  };

                  break;
                }
              } else {
                if (isSimpleExpressionNode(prop.arg)) {
                  if (prop.arg.isStatic && prop.arg.content === name) {
                    prop.renderNode = {
                      type: 'expression',
                      original: {
                        ...key,
                        loc: prop.arg.loc,
                        start: prop.arg.loc.start.offset,
                        end: prop.arg.loc.end.offset,
                      },
                      generated: key as JsNode,
                    };
  
                    break;
                  }
                }
              }
            }
          }
        });
      }

      if (isArrayExpression(children) || isObjectExpression(children)) {
        matchChildren(html as ElementNode, children);
      }
    }
  } else if (isConditionalExpression(js)) {
    const vIf = findDir(html as ElementNode, /^(if|else-if)$/) as DirectiveNode;

    if (vIf.exp?.renderNode?.type === 'expression') {
      vIf.exp.renderNode.generated = js.test as JsNode;
      // TODO: match sub expressions.
    }

    match(html, parent, js.consequent);
    const index = parent.children.indexOf(html as ElementNode);
    if (index >= 0 && index + 1 < parent.children.length) {
      match(parent.children[index + 1], parent, js.alternate);
    }
  } else if (isSimpleExpressionNode(html)) {
    if (html.renderNode?.type === 'expression') {
      html.renderNode.generated = js as JsNode;

      matchExpression(html.renderNode, html.renderNode.original as BabelNode, html.renderNode.generated as BabelNode);
    }
  } else if (isInterpolationNode(html)) {
    if (html.content.renderNode?.type === 'expression') {
      html.content.renderNode.generated = (isCallExpression(js) ? js.arguments[0] : js) as JsNode;

      matchExpression(
        html.content.renderNode,
        html.content.renderNode.original as BabelNode,
        html.content.renderNode.generated as BabelNode
      );
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
      while (i < parent.children.length && parent.children[i].renderNode) ++i;
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

      if (vSlot?.exp?.renderNode?.type === 'v-slot') {
        vSlot.exp.renderNode.generated = slot.params as JsNode[];
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

          if (vSlot?.exp?.renderNode?.type === 'v-slot') {
            vSlot.exp.renderNode.generated = slot.params as JsNode[];
            if (vSlot.arg?.renderNode?.type === 'expression') {
              vSlot.arg.renderNode.generated = key;
            }
          }

          matchChildren(parent.children[index] as ElementNode, slotChildren);
        }
      });
    }
  }
}

function matchExpression(expression: ExpressionRenderNode, original: BabelNode, generated: BabelNode) {
  expression.expressions = expression.expressions || { generated: [], original: [] };

  if (original.type === 'Identifier' && generated.type === 'MemberExpression') {
    expression.expressions.original.push(original as JsNode);
    expression.expressions.generated.push(generated as JsNode);
  } else {
    for (const _key in original) {
      const key = _key as keyof BabelNode;
      if (typeof original[key] === 'object' && 'type' in ((original[key] as unknown) as any)) {
        matchExpression(expression, (original[key] as unknown) as any, (generated[key] as unknown) as any);
      }
    }
  }
}
