import {
  buildSlots,
  CompoundExpressionNode,
  createCompoundExpression,
  createFunctionExpression,
  createSimpleExpression,
  DynamicSlotsExpression,
  ElementNode,
  isSimpleIdentifier,
  NodeTransform,
  SlotsExpression,
  TemplateChildNode,
  TransformContext,
  WITH_CTX,
} from '@vue/compiler-core';
import {
  isAttributeNode,
  isComponentNode,
  isElementNode,
  isForNode,
  isIfNode,
  isSimpleExpressionNode,
  isTextNode,
} from '@vuedx/template-ast-types';
import { Options } from '../types';
import { createLoc, pascalCase } from '../utils';
import camelCase from 'lodash.camelcase';

export function createElementTransform(options: Required<Options>): NodeTransform {
  let isImportAdded = false;
  return (node, context) => {
    if (!isImportAdded) {
      context.imports.add({
        exp: '_Ctx',
        path: `./${options.filename.split(/[/\\]/).pop()}?internal`,
      });
      isImportAdded = true;
    }

    if (!isElementNode(node)) return;
    if (isComponentNode(node)) {
      let name = node.tag;

      if (node.tag in options.components) {
        name = node.tag;
      } else if (pascalCase(node.tag) in options.components) {
        name = pascalCase(node.tag);
      }

      const component = options.components[name];
      if (component) {
        context.imports.add({
          exp: component.named ? `{ ${component.name ? component.name + ' as ' : ''}${name} }` : name,
          path: component.path,
        });
        context.addIdentifiers(name);
      }
    }

    return () => {
      let name: string = '';

      if (node.tag in options.components) {
        name = node.tag;
      } else if (pascalCase(node.tag) in options.components) {
        name = pascalCase(node.tag);
      }

      const startTag = name
        ? createSimpleExpression(
            name,
            false,
            createLoc(node.loc, node.loc.source.indexOf(node.tag), node.tag.length),
            false
          )
        : node.tag;
      const attributes = getJSXAttributes(node as ElementNode, context);

      if (node.isSelfClosing) {
        node.codegenNode = createCompoundExpression(['<', startTag, ...attributes, '/>']) as any;
      } else {
        const endTag = name
          ? createSimpleExpression(
              name,
              false,
              createLoc(node.loc, node.loc.source.lastIndexOf(node.tag), node.tag.length),
              false
            )
          : node.tag;
        const children = getChildren(node, context);
        node.codegenNode = createCompoundExpression([
          '<',
          startTag,
          ...attributes,
          '>',
          ...children,
          '</',
          endTag,
          '>',
        ]) as any;
      }
    };
  };
}

function getJSXAttributes(node: ElementNode, context: TransformContext) {
  const result: any[] = [];
  node.props.forEach((dir, index) => {
    if (isAttributeNode(dir)) {
      result.push(' ', createSimpleExpression(dir.name, false, createLoc(dir.loc, 0, dir.name.length)));
      if (dir.value) {
        result.push('=', createSimpleExpression(dir.value.loc.source, false, dir.value.loc));
      }
    } else if ('bind' === dir.name) {
      if (isSimpleExpressionNode(dir.arg)) {
        if (dir.arg.isStatic) {
          dir.arg.isStatic = false;
          result.push(' ', dir.arg);
          if (dir.exp) result.push('={', dir.exp, '}');
        } else {
          result.push(' {...({[', dir.arg, ']: ');
          if (dir.exp) result.push(dir.exp);
          else result.push('true');
          result.push('})}');
        }
      } else if (dir.exp) {
        result.push(' {...(', dir.exp, ')}');
      }
    } else if ('on' === dir.name) {
      const exp = isSimpleExpressionNode(dir.exp)
        ? isSimpleIdentifier(dir.exp.content)
          ? [dir.exp]
          : dir.exp.content.includes('$event')
          ? ['$event =>', dir.exp]
          : ['() => ', dir.exp]
        : ['() => {}'];

      result.push(' ');
      if (isSimpleExpressionNode(dir.arg)) {
        if (dir.arg.isStatic) {
          result.push(
            createSimpleExpression(camelCase('on-' + dir.arg.content), false, dir.arg.loc),
            '={',
            ...exp,
            '}'
          );
        } else {
          result.push('{...({[', dir.arg, ']: ', ...exp, '})}');
        }
      } else if (dir.exp) {
        result.push('{...(', dir.exp, ')}');
      }
    } else if (dir.name === 'model') {
      const exp = dir.exp || 'null';

      result.push(' ');
      if (isSimpleExpressionNode(dir.arg)) {
        if (dir.arg.isStatic) {
          result.push(dir.arg, '={', exp, '}');
        } else {
          result.push('{...({[', dir.arg, ']: ', exp, '})}');
        }
      } else {
        result.push('modelValue={', exp, '}');
      }

      result.push(' ');
      const arg = isSimpleExpressionNode(dir.arg)
        ? dir.arg.isStatic
          ? ["'", 'onUpdate:' + dir.arg.content, "'"]
          : [`['onUpdate:' + `, dir.arg, `]`]
        : [`'onUpdate:modelValue'`];
      result.push(`{...({`, ...arg, ': $event => ', exp, ' = $event', '})}');
      if (isSimpleExpressionNode(dir.arg)) dir.arg.isStatic = false;
    } else if (dir.name === 'slot') {
      // Already handled.
    } else {
      result.push(` __directive_${dir.name}_${index}={[`);
      if (isSimpleExpressionNode(dir.arg) && !dir.arg.isStatic) result.push(dir.arg, ',');
      if (dir.exp) result.push(dir.exp, ',');
      result.push(']}');
    }
  });

  return result;
}

function getChildren(node: ElementNode, context: TransformContext) {
  if (isComponentNode(node)) {
    const { slots } = buildSlots(node, context, (props, children) =>
      createFunctionExpression(props, createCompoundExpression(['(<>', ...processTemplateNodes(children), '</>)']))
    );
    context.helpers.delete(WITH_CTX);

    if (isDynamicSlotsExpression(slots)) {
      slots.arguments[0].properties = slots.arguments[0].properties.filter(
        (property) => !(isSimpleExpressionNode(property.key) && property.key.content === '_')
      );
    } else {
      slots.properties = slots.properties.filter(
        (property) => !(isSimpleExpressionNode(property.key) && property.key.content === '_')
      );
    }

    return [createCompoundExpression(['{', slots as any, '}'])];
  } else {
    return processTemplateNodes(node.children);
  }
}

function processTemplateNodes(nodes: TemplateChildNode[]) {
  return nodes.map((node) => {
    if (isTextNode(node)) {
      return createSimpleExpression(node.content, false, undefined, false);
    } else if (isIfNode(node) || isForNode(node)) {
      return createCompoundExpression(['{', node as any, '}']);
    } else {
      return (node as unknown) as CompoundExpressionNode;
    }
  });
}

function isDynamicSlotsExpression(node: SlotsExpression): node is DynamicSlotsExpression {
  return node.type === 14;
}
