import { baseParse as parse, Node } from '@vue/compiler-core';
import { traverseEvery } from './traverse';

describe('ast-types/traverseEvery', () => {
  test('should visit all nodes', () => {
    const source = `<div>{{ foo }} bar {{ baz }}</div>`;
    const ast = parse(source);
    const nodes: Node[] = [];
    const position = source.indexOf('baz');
    traverseEvery(ast, (node) => {
      if (node.loc.start.offset <= position && position <= node.loc.end.offset) {
        nodes.push(node);
        return true;
      }

      return false;
    });

    expect(nodes.map((node) => node.loc.source)).toEqual([
      '<div>{{ foo }} bar {{ baz }}</div>',
      '<div>{{ foo }} bar {{ baz }}</div>',
      '{{ baz }}',
      'baz',
    ]);
  });
});
