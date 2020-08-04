import { RootNode, Node, ElementNode } from '@vue/compiler-core';
import { TraversalAncestors, traverseEvery, isElementNode } from '@vuedx/template-ast-types';

export function findTemplateNodeAt(ast: RootNode, position: number) {
  return findTemplateNodeFor(ast, position, position);
}

export function findTemplateElementNodeAt(ast: RootNode, position: number) {
  const result = findTemplateNodeFor(ast, position, position);

  while (result.ancestors.length) {
    if (isElementNode(result.node)) {
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
      found.ancestors = ancestors;

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

  const a = findTemplateNodeAt(ast, start);
  const b = findTemplateNodeAt(ast, end);
  if (!a.node || !b.node) return [];
  if (a.node === b.node) return [a.node];
  if (!a.ancestors.length || !b.ancestors.length) return [];

  const pa = a.ancestors.pop()!.node as ElementNode;
  const pb = b.ancestors.pop()!.node as ElementNode;

  if (pa === pb) {
    const nodes: Node[] = [];

    return pa.children.slice(pa.children.indexOf(a.node), pa.children.indexOf(b.node)) as Node[];
  }

  return [];
}
