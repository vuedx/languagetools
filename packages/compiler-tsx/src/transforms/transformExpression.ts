import { parse } from '@babel/parser';
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
} from '@babel/types';
import { findDir, isSimpleIdentifier, NodeTransform, TransformContext } from '@vue/compiler-core';
import { isDirectiveNode, isElementNode, isInterpolationNode, isSimpleExpressionNode } from '@vuedx/template-ast-types';

export function createExpressionTracker(addIdentifer: (identifer: string) => void): NodeTransform {
  return (node, context) => {
    const localIdentifiers = new Set<string>();
    if (isInterpolationNode(node)) {
      if (isSimpleExpressionNode(node.content) && !node.content.isStatic) {
        trackIdentifiers(node.content.content, context, addIdentifer);
      }
    } else if (isElementNode(node)) {
      node.props.forEach((dir) => {
        if (isDirectiveNode(dir)) {
          if (isSimpleExpressionNode(dir.arg) && !dir.arg.isStatic) {
            trackIdentifiers(dir.arg.content, context, addIdentifer);
          }

          const slot = findDir(node, 'slot');

          if (slot) {
            if (isSimpleExpressionNode(slot.exp) && !slot.exp.isStatic) {
              trackIdentifiers(
                slot.exp.content,
                context,
                (identifier) => {
                  localIdentifiers.add(identifier);
                  context.addIdentifiers(identifier);
                },
                dir.name === 'slot'
              );
            }
          }

          switch (dir.name) {
            case 'for':
            case 'slot':
              break;
            case 'on':
              if (isSimpleExpressionNode(dir.exp) && !dir.exp.isStatic) {
                context.addIdentifiers('$event');
                trackIdentifiers(dir.exp.content, context, addIdentifer, false, true);
                context.removeIdentifiers('$event');
              }
              break;
            default: {
              if (isSimpleExpressionNode(dir.exp)) {
                trackIdentifiers(dir.exp.content, context, addIdentifer);
              }
            }
          }
        }
      });
    }

    return () => {
      localIdentifiers.forEach((identifier) => context.removeIdentifiers(identifier));
    };
  };
}

const KNOWN_IDENTIFIERS = new Set(
  (
    'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl'
  ).split(',')
);

export function isKnownIdentifier(value: string) {
  return KNOWN_IDENTIFIERS.has(value) || /^(true|false|null|this)$/.test(value);
}

export function trackIdentifiers(
  rawExp: string,
  context: TransformContext,
  addIdentifer: (identifier: string) => void,
  // some expressions like v-slot props & v-for aliases should be parsed as
  // function params
  asParams = false,
  // v-on handler values may contain multiple statements
  asRawStatements = false
) {
  rawExp = rawExp.trim();

  if (isSimpleIdentifier(rawExp)) {
    if (!asParams && !context.identifiers[rawExp] && !isKnownIdentifier(rawExp)) {
      addIdentifer(rawExp);
    }

    return;
  }

  const source = asRawStatements ? ` ${rawExp} ` : `(${rawExp})${asParams ? `=>{}` : ``}`;

  const ast = parse(source, { plugins: ['bigInt', 'optionalChaining', 'nullishCoalescingOperator'] });
  const knownIds = { ...context.identifiers };

  traverse(ast, {
    enter(node, ancestors) {
      const scope = new Set<string>();
      const parent = ancestors[ancestors.length - 1]?.node;
      if (isIdentifier(node)) {
        if (!knownIds[node.name]) {
          if (shouldTrack(node, parent)) {
            addIdentifer(node.name);
          }
        }
      } else if (isFunction(node)) {
        node.params.forEach((param) =>
          traverseFast(param, (node, ancestors) => {
            const parent = ancestors[ancestors.length - 1]?.node;
            if (
              isIdentifier(node) &&
              !isStaticProperty(parent) &&
              !(isAssignmentPattern(parent) && parent.right === node)
            ) {
              const id = node.name;
              if (!scope.has(id)) {
                if (id in knownIds) ++knownIds[id]!;
                else knownIds[id] = 1;
              }
              scope.add(id);
            }
          })
        );
      }

      // @ts-ignore
      node.scope = scope;
    },
    exit(node) {
      // @ts-ignore
      const scope: Set<string> | undefined = node.scope;

      scope?.forEach((id) => --knownIds[id]!);
    },
  });
}

export function isStaticProperty(node: Node): node is ObjectMember {
  return isObjectMember(node) && node.computed === false;
}

export function isStaticPropertyKey(node: Node, parent: Node) {
  return isStaticProperty(parent) && parent.key === node;
}

export function shouldTrack(identifier: Identifier, parent: Node) {
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
    return true;
  }
}
