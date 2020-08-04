import { RootNode, Node } from '@vue/compiler-core';
import { TraversalAncestors, traverseDepth } from '@vuedx/template-ast-types';

export function findTemplateNodeAt(ast: RootNode, position: number) {
  const found = {
    node: null as Node | null,
    ancestors: [] as TraversalAncestors,
  };

  traverseDepth(ast, (node, ancestors) => {
    if (node.loc.start.offset <= position && position <= node.loc.end.offset) {
      found.node = node;
      found.ancestors = ancestors;

      return true;
    }

    return false;
  });

  if (found.node) {
    console.log(
      'FOUND NODE in ' + found.node.loc.source + ` at ${position} of (${found.node.loc.start.offset}, ${found.node.loc.end.offset})`
    );
  } else {
    console.log('NOT FOUND')
  }

  return found;
}
