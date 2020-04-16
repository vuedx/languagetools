/// <reference types="jest" />

import { compile, ExpressionRenderNode } from '../src';
import { getRenderNodes } from '../src/mapper';

describe('compiler', () => {
  const result = compile(
    `
    <Foo v-if="bar" id="foo" />
    <Bar v-else v-for="foo of bars" />
    `,
    { filename: './example.vue', components: { Foo: './foo.vue' } }
  );

  test('provides type annotation for _ctx', () => {
    expect(result.code).toEqual(expect.stringContaining(`import _Ctx from './example.vue'`));
    expect(result.code).toEqual(expect.stringContaining(`function render(_ctx: InstanceType<typeof _Ctx>)`));
  });

  test('uses h() instead of createBlock()', () => {
    expect(result.code).toEqual(expect.stringContaining('_h(_component_Foo'));
    expect(result.code).toEqual(expect.stringContaining('_h(_component_Bar'));
    expect(result.code).toEqual(expect.stringContaining('_h(_Fragment, _renderList(_ctx.bars'));
  });

  test('imports known components instead of resolving', () => {
    expect(result.code).toEqual(expect.stringContaining(`import _component_Foo from './foo.vue'`));
  });

  test('drop runtime directives', () => {
    const { code } = compile(
      `
      <Foo v-custom-directive="bar" :id="5" />
      `,
      { filename: './example.vue', components: { Foo: './foo.vue' } }
    );

    expect(code).not.toEqual(expect.stringContaining('_directive_custom_directive'));
  });

  test('drop runtime directives', () => {
    const { code } = compile(`<Foo v-custom-directive="bar" :id="5" />`, {
      filename: './example.vue',
      components: { Foo: './foo.vue' },
    });

    expect(code).not.toEqual(expect.stringContaining('_directive_custom_directive'));
  });

  describe('render function to template mapping', () => {
    function run(source: string) {
      const { code, ast } = compile(source, {
        filename: 'foo.vue',
        components: {},
      });

      const nodes = getRenderNodes(ast);

      return { code, nodes, ast };
    }

    test('simple interpolation', () => {
      const source = '{{ foo }}';
      const { code, nodes } = run(source);

      const node = nodes[0] as ExpressionRenderNode;
      expect(source.substring(node.original.start, node.original.end)).toBe('foo');
      expect(code.substring(node.generated!.start, node.generated!.end)).toBe('_ctx.foo');
    });

    test('complex simple interpolation', () => {
      const source = '{{ foo + 2 + bar }}';
      const { code, nodes } = run(source);

      const node = nodes[0] as ExpressionRenderNode;
      expect(source.substring(node.original.start, node.original.end)).toBe('foo + 2 + bar');
      expect(code.substring(node.generated!.start, node.generated!.end)).toBe('_ctx.foo + 2 + _ctx.bar');
    });
  });
});
