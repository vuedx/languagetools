import { Node } from '@vue/compiler-core';
import { isNode } from './assert';

const VISITOR_KEYS = ([
  ['children'], // ROOT = 0,
  ['props', 'children'], // ELEMENT = 1,
  [], // TEXT = 2,
  [], // COMMENT = 3,
  [], // SIMPLE_EXPRESSION = 4,
  ['content'], // INTERPOLATION = 5,
  ['value'], // ATTRIBUTE = 6,
  ['exp', 'arg'], // DIRECTIVE = 7,
] as unknown) as Record<Node['type'], (keyof Node)[]>;

export type TraversalAncestors = Array<{
  node: Node;
  key: string;
  index?: number;
}>;

export type TraversalHandler<T> = (node: Node, ancestors: TraversalAncestors, state: T) => void;
export type TraversalHandlers<T> = {
  enter?: TraversalHandler<T>;
  exit?: TraversalHandler<T>;
};

/**
 * A general AST traversal with both prefix and postfix handlers, and a
 * state object. Exposes ancestry data to each handler so that more complex
 * AST data can be taken into account.
 */
export function traverse<T>(node: Node, handlers: TraversalHandler<T> | TraversalHandlers<T>, state?: T): void {
  if (typeof handlers === 'function') {
    handlers = { enter: handlers };
  }

  const { enter, exit } = handlers;

  traverseSimpleImpl(node, enter, exit, state, []);
}

function traverseSimpleImpl<T>(
  node: Object,
  enter: Function | undefined,
  exit: Function | undefined,
  state: T,
  ancestors: TraversalAncestors
) {
  if (!isNode(node)) return;

  const keys = VISITOR_KEYS[node.type];
  if (!keys) return;

  if (enter) enter(node, ancestors, state);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (let i = 0; i < subNode.length; i++) {
        const child = subNode[i];
        if (!child) continue;

        ancestors.push({
          node,
          key,
          index: i,
        });

        traverseSimpleImpl(child, enter, exit, state, ancestors);

        ancestors.pop();
      }
    } else if (subNode) {
      ancestors.push({
        node,
        key,
      });

      traverseSimpleImpl(subNode, enter, exit, state, ancestors);

      ancestors.pop();
    }
  }

  if (exit) exit(node, ancestors, state);
}

export function traverseDepth<T>(
  node: object,
  enter: (node: Node, ancestors: TraversalAncestors, state: T) => boolean,
  state?: any,
  ancestors: TraversalAncestors = []
): void {
  if (!isNode(node)) return;

  const keys = VISITOR_KEYS[node.type];
  if (!keys) return;

  if (enter(node, ancestors, state)) {
    for (const key of keys) {
      const subNode = node[key];

      if (Array.isArray(subNode)) {
        for (let i = 0; i < subNode.length; i++) {
          const child = subNode[i];
          if (!child) continue;

          ancestors.push({
            node,
            key,
            index: i,
          });
          traverseDepth(child, enter, state, ancestors);
          ancestors.pop();
        }
      } else if (isNode(subNode)) {
        ancestors.push({
          node,
          key,
        });

        traverseDepth(subNode, enter, state, ancestors);

        ancestors.pop();
      }
    }
  }
}

export function traverseFast<T = any>(node: object, enter: (node: Node, state: T) => void, state?: T): void {
  if (!isNode(node)) return;

  const keys = VISITOR_KEYS[node.type];
  if (!keys) return;

  enter(node, state as T);

  for (const key of keys) {
    const subNode = node[key];

    if (Array.isArray(subNode)) {
      for (const node of subNode) {
        traverseFast(node, enter, state);
      }
    } else if (isNode(subNode)) {
      traverseFast(subNode, enter, state);
    }
  }
}
