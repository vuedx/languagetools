import {
  buildProps,
  buildSlots,
  ComponentNode,
  createArrayExpression,
  createCallExpression,
  createCompoundExpression,
  createFunctionExpression,
  createObjectExpression,
  createSimpleExpression,
  ElementTypes,
  NodeTransform,
  NodeTypes,
  resolveComponentType,
  VNodeCall,
  WITH_CTX,
} from '@vue/compiler-core';
import { isIfNode, isSimpleExpressionNode, isTextNode } from '@vuedx/template-ast-types';
import { Options } from '../options';
import { pascalCase } from '../pascalCase';
import { H } from '../runtimeHelpers';

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
      const shouldBuildAsSlots = isComponent && pascalCase(tag) !== 'Teleport' && pascalCase(tag) !== 'KeepAlive';
      const propsBuildResult = buildProps(node, context);
      let vnodeChildren: VNodeCall['children'];

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

      if (options.useJsx) {
        const vnodeTag = (isComponent
          ? components.has(pascalCase(tag))
            ? `_component_${pascalCase(tag)}`
            : resolveComponentType(node as ComponentNode, context)
          : tag) as any;

        let children: any[] = [];

        if (shouldBuildAsSlots) {
          if (node.children.length) children.push('{', vnodeChildren, '}');
        } else {
          node.children.forEach((child) => {
            if (isTextNode(child)) children.push(child.content);
            else if (isIfNode(child)) {
              children.push('{', child, '}');
            } else {
              children.push(child);
            }
          });
        }

        const props = propsBuildResult.props ? [' {...', propsBuildResult.props, '}'] : [];

        node.codegenNode = createCompoundExpression([
          '<',
          vnodeTag,
          ...props,
          '>',
          ...children,
          '</',
          vnodeTag,
          '>',
        ]) as any;
      } else {
        let vnodeProps: VNodeCall['props'] = propsBuildResult.props;

        const vnodeTag = isComponent
          ? components.has(pascalCase(tag))
            ? `_component_${pascalCase(tag)}`
            : resolveComponentType(node as ComponentNode, context)
          : `"${tag}"`;

        if (!vnodeProps) {
          vnodeProps = createSimpleExpression('{}', false);
        }
        node.codegenNode = createCallExpression(
          context.helperString(context.helper(H)),
          [vnodeTag, vnodeProps!, vnodeChildren!].filter(Boolean),
          node.loc
        ) as any;
      }
    };
  };
}
