import { RootNode, Node, ElementNode } from '@vue/compiler-core';
import {
  TraversalAncestors,
  traverseEvery,
  isElementNode,
  isRootNode,
  isTextNode,
  isInterpolationNode,
  isCommentNode,
} from '@vuedx/template-ast-types';

export function findTemplateNodeAt(ast: RootNode, position: number) {
  return findTemplateNodeFor(ast, position, position);
}

export function findTemplateElementNodeAt(ast: RootNode, position: number) {
  const result = findTemplateNodeFor(ast, position, position);

  while (result.ancestors.length) {
    if (
      isRootNode(result.node) ||
      isElementNode(result.node) ||
      isTextNode(result.node) ||
      isInterpolationNode(result.node) ||
      isCommentNode(result.node)
    ) {
      break;
    }

    result.node = result.ancestors.pop()!.node;
  }

  return (result as unknown) as {
    node: ElementNode | null;
    ancestors: TraversalAncestors;
  };
}

export function findTemplateNodeFor(ast: RootNode, start: number, end: number) {
  const found = {
    node: null as Node | null,
    ancestors: [] as TraversalAncestors,
  };

  traverseEvery(ast, (node, ancestors) => {
    if (node.loc.start.offset <= start && end <= node.loc.end.offset) {
      found.node = node;
      found.ancestors = ancestors.slice();

      return true;
    }

    return false;
  });

  return found;
}

export function findTemplateNodesIn(ast: RootNode, start: number, end: number): Node[] {
  if (start === end) {
    const a = findTemplateElementNodeAt(ast, start);

    return a.node ? [a.node] : [];
  }

  const a = findTemplateElementNodeAt(ast, start);
  const b = findTemplateElementNodeAt(ast, end);
  if (!a.node || !b.node) return [];
  console.log('MATCH IN TEMPLATE ?>>>>>' + JSON.stringify({ a: a.node.loc.source, b: b.node.loc.source }));
  if (a.node === b.node) return [a.node];
  if (!a.ancestors.length || !b.ancestors.length) return [];

  const pa = a.ancestors.pop()!.node as ElementNode;
  const pb = b.ancestors.pop()!.node as ElementNode;

  if (pa === b.node) return [pa]
  if (pb === a.node) return [pb]

  if (pa === pb) {
    return pa.children.slice(pa.children.indexOf(a.node as any), 1 + pa.children.indexOf(b.node as any)) as Node[];
  }

  return [];
}
