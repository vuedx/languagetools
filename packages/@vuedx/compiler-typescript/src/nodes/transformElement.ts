import {
  buildProps,
  buildSlots,
  ComponentNode,
  createCallExpression,
  createSimpleExpression,
  ElementTypes,
  KEEP_ALIVE,
  NodeTransform,
  NodeTypes,
  resolveComponentType,
  TELEPORT,
  VNodeCall,
  createFunctionExpression,
  WITH_CTX,
  createObjectExpression,
  createArrayExpression,
} from '@vue/compiler-core';
import { isSimpleExpressionNode } from '@vuedx/template-ast-types';
import { pascalCase } from '../pascalCase';
import { H } from '../runtimeHelpers';
import { Options } from '../options';

export function createTransformElement(options: Options): NodeTransform {
  const components = new Set(Object.keys(options.components || {}).map(pascalCase));

  return function transformElement(node, context) {
    if (
      !(
        node.type === NodeTypes.ELEMENT &&
        (node.tagType === ElementTypes.ELEMENT || node.tagType === ElementTypes.COMPONENT)
      )
    ) {
      return;
    }

    return function postTransformElement() {
      const { tag } = node;
      const isComponent = node.tagType === ElementTypes.COMPONENT;
      const propsBuildResult = buildProps(node, context);

      let vnodeProps: VNodeCall['props'] = propsBuildResult.props;
      let vnodeChildren: VNodeCall['children'];

      const vnodeTag = isComponent
        ? components.has(pascalCase(tag))
          ? `_component_${pascalCase(tag)}`
          : resolveComponentType(node as ComponentNode, context)
        : `"${tag}"`;
      const shouldBuildAsSlots = isComponent && vnodeTag !== TELEPORT && vnodeTag !== KEEP_ALIVE;

      if (!vnodeProps) {
        vnodeProps = createSimpleExpression('{}', false);
      }

      if (node.children.length) {
        if (shouldBuildAsSlots) {
          const slots = buildSlots(node, context, (props, children) => createFunctionExpression(props, children)).slots;
          context.helpers.delete(WITH_CTX);
          if ('properties' in slots) {
            slots.properties = slots.properties.filter(
              (property) => !isSimpleExpressionNode(property.key) || property.key.content !== '_'
            );
          }

          vnodeChildren = slots;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = (shouldBuildAsSlots ? createObjectExpression([]) : createArrayExpression([])) as any;
      }

      node.codegenNode = createCallExpression(
        context.helperString(context.helper(H)),
        [vnodeTag, vnodeProps!, vnodeChildren!].filter(Boolean),
        node.loc
      ) as any;
    };
  };
}
