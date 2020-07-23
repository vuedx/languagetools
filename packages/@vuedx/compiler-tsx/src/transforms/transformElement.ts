import {
  WITH_CTX,
  createCompoundExpression,
  createSimpleExpression,
  ElementNode,
  NodeTransform,
  TransformContext,
  buildSlots,
  createFunctionExpression,
  CompoundExpressionNode,
  SlotsExpression,
  DynamicSlotsExpression,
  TemplateChildNode,
  isMemberExpression,
  processExpression,
} from '@vue/compiler-core';
import {
  isAttributeNode,
  isComponentNode,
  isElementNode,
  isSimpleExpressionNode,
  isTextNode,
  isForNode,
  isIfNode,
  isInterpolationNode,
} from '@vuedx/template-ast-types';
import { Options } from '../types';
import { createLoc, camelCase, pascalCase } from '../utils';

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

const fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
function getJSXAttributes(node: ElementNode, context: TransformContext) {
  const attributes = node.props.map((prop) => {
    if (isAttributeNode(prop)) {
      const name = createSimpleExpression(prop.name, false, createLoc(prop.loc, 0, prop.name.length), false);
      if (!prop.value) return [name];
      return [' ', name, '=', createSimpleExpression(prop.value.loc.source, false, prop.value.loc, false)];
    } else if (prop.name === 'bind') {
      if (!prop.arg) return [' {...(', prop.exp!, ')}']; // v-bind="exp"
      let exp = prop.exp || createSimpleExpression('true', false, undefined, false);

      if (isSimpleExpressionNode(prop.arg)) {
        if (prop.arg.isStatic || prop.arg.isConstant) {
          prop.arg.isStatic = prop.arg.isConstant = false;
          return [' ', createCompoundExpression([prop.arg, '={', exp, '}'])];
        }
      }

      prop.arg.loc = createLoc(prop.arg.loc, 1, prop.arg.loc.source.length - 2)!;

      return [' {...{', '[', prop.arg, ']:', exp, '}}'];
    } else if (prop.name === 'on') {
      if (!prop.arg) return [' {...(', prop.exp!, ')}']; // v-on="exp"
      let exp = prop.exp;

      if (isSimpleExpressionNode(exp)) {
        if (!exp.content.trim()) exp = undefined;
        else {
          const isMemberExp = isMemberExpression(exp.content);
          const isInlineStatement = !(isMemberExp || fnExpRE.test(exp.content));
          const hasMultipleStatements = exp.content.includes(';');

          context.addIdentifiers('$event');
          exp = processExpression(exp, context);
          context.removeIdentifiers('$event');

          if (isInlineStatement) {
            exp = createCompoundExpression([
              `$event => ${hasMultipleStatements ? '{' : '('}`,
              exp,
              hasMultipleStatements ? '}' : ')',
            ]);
          }
        }
      }

      if (!exp) exp = createCompoundExpression(['() => {}']);

      if (isSimpleExpressionNode(prop.arg) && prop.arg.isStatic) {
        return [
          ' ',
          createSimpleExpression(camelCase('on-' + prop.arg.content), false, prop.arg.loc, false),
          '={',
          exp!,
          '}',
        ];
      }

      prop.arg.loc = createLoc(prop.arg.loc, 1, prop.arg.loc.source.length - 2)!;

      // What to do here?
      return [' {...{', '[', `'on'+`, prop.arg, ']:', exp!, '}}'];
    } else if (prop.name === 'model') {
      if (!prop.exp) return [];
      const exp = createCompoundExpression(['$event => (', prop.exp, ' = $event)']);
      if (!prop.arg) {
        return [createCompoundExpression([' modelValue={', prop.exp!, `} {...{'onUpdate:modelValue': `, exp, `}}`])];
      }

      if (isSimpleExpressionNode(prop.arg) && prop.arg.isStatic) {
        return [
          createCompoundExpression([
            ' ',
            prop.arg.content,
            '={',
            prop.exp!,
            `} {...{'onUpdate:${prop.arg.content}': `,
            exp,
            `}}`,
          ]),
        ];
      }

      prop.arg.loc = createLoc(prop.arg.loc, 1, prop.arg.loc.source.length - 2)!;

      return [
        createCompoundExpression([
          ' {...{[',
          prop.arg,
          ']: ',
          prop.exp!,
          `}} {...{['onUpdate:' + `,
          prop.arg,
          `]: `,
          exp,
          `}}`,
        ]),
      ];
    } else {
      let name = '__directive' + pascalCase(prop.name);
      const args: any[] = [];
      if (prop.arg) {
        name += '_' + prop.arg.loc.source.replace(/[^a-z0-9_]/gi, '_');
        if (!isSimpleExpressionNode(prop.arg) || !prop.arg.isStatic) {
          prop.arg.loc = createLoc(prop.arg.loc, 1, prop.arg.loc.source.length - 2)!;
          args.push(prop.arg, ',');
        }
      }
      if (prop.exp) {
        args.push(prop.exp, ',');
      }

      return [' ', name, '={[', ...args, ']}'];
    }

    return [];
  });

  return attributes.flat(1);
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
