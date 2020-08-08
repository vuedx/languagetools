import { parse } from '@babel/parser';
import {
  Identifier,
  isFunction,
  isIdentifier,
  isMemberExpression,
  isOptionalMemberExpression,
  Node as BabelNode,
  traverse as traverseBabel,
} from '@babel/types';
import { isSimpleIdentifier, Node, RootNode } from '@vue/compiler-core';
import { isDirectiveNode, isElementNode, isSimpleExpressionNode, traverse } from '@vuedx/template-ast-types';
import { isStaticPropertyKey, isKnownIdentifier } from './transforms/transformExpression';
import { forAliasRE } from './transforms/transformFor';

class Scope {
  public readonly bindings: Record<string, Node | null> = {};

  public constructor(public readonly parent: Scope | null = null) {}

  public get identifiers() {
    return Array.from(Object.keys(this.bindings));
  }

  public get globals() {
    return this.identifiers.filter((identifier) => this.getBinding(identifier) === null);
  }

  public getBinding(identifier: string) {
    if (identifier in this.bindings) return this.bindings[identifier];
    if (this.parent) {
      return (this.bindings[identifier] = this.parent.getBinding(identifier));
    } else {
      this.bindings[identifier] = null;
    }

    return null;
  }

  public setBinding(identifer: string, node: Node) {
    this.bindings[identifer] = node;
  }
}

declare module '@vue/compiler-core' {
  export interface Node {
    scope: Scope;
  }
}

export function withScope(ast: RootNode) {
  ast.scope = new Scope(null);

  traverse(ast, (node, ancestors) => {
    const parent = ancestors[ancestors.length - 1]?.node || ast;
    const scope = (node.scope = node.scope || new Scope(parent.scope));

    if (isSimpleExpressionNode(node) && !node.isStatic) {
      if (!parent || !(isDirectiveNode(parent) && ['slot', 'for'].includes(parent.name) && parent.exp === node)) {
        getIdentifiers(node.content).forEach((identifier) => scope.getBinding(identifier));
      }
    } else if (isElementNode(node)) {
      node.props.forEach((prop) => {
        if (isDirectiveNode(prop)) {
          const directiveScope = (prop.scope = prop.scope || new Scope(scope));
          if (prop.name === 'slot') {
            if (isSimpleExpressionNode(prop.exp)) {
              const localScope = (prop.exp.scope = new Scope(directiveScope));
              const content = prop.exp.content.trim();

              getIdentifiers(`(${content}) => {}`).forEach((identifier) => {
                scope.setBinding(identifier, node);
                localScope.getBinding(identifier);
              });
            }
          } else if (prop.name === 'for') {
            if (isSimpleExpressionNode(prop.exp)) {
              const localScope = (prop.exp.scope = new Scope(directiveScope));
              const match = forAliasRE.exec(prop.exp.content);
              if (match) {
                const [, LHS, RHS] = match;
                getIdentifiers(RHS).forEach((identifier) => {
                  localScope.getBinding(identifier);
                });

                getIdentifiers(`${LHS} => {}`).forEach((identifier) => {
                  scope.setBinding(identifier, node);
                  localScope.getBinding(identifier);
                });
              }
            }
          }
        }
      });
    }
  });

  return ast;
}

function getIdentifiers(source: string) {
  if (isSimpleIdentifier(source.trim())) return new Set([source.trim()]);

  const ast = parse(source, { plugins: ['bigInt', 'optionalChaining'] });
  const identifers = new Set<string>();

  traverseBabel(ast, (node, ancestors) => {
    if (isIdentifier(node)) {
      if (ancestors.length) {
        if (shouldTrack(node, ancestors[ancestors.length - 1].node)) {
          identifers.add(node.name);
        }
      } else {
        identifers.add(node.name);
      }
    }
  });

  return identifers;
}

function shouldTrack(identifier: Identifier, parent: BabelNode) {
  if (
    !(
      isFunction(parent) &&
      // not id of a FunctionDeclaration
      (parent as any).id === identifier
    ) &&
    // not a key of Property
    !isStaticPropertyKey(identifier, parent) &&
    // not a property of a MemberExpression
    !(
      (isMemberExpression(parent) || isOptionalMemberExpression(parent)) &&
      parent.property === identifier &&
      !parent.computed
    ) &&
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
