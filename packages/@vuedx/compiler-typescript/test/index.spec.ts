/// <reference types="jest" />

import { compile } from '../src';
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

      const node = nodes[1] as any;
      expect(source.substring(node.node.start, node.node.end)).toBe('foo');
      expect(code.substring(node.jsNode.start, node.jsNode.end)).toBe('_ctx.foo');
    });

    test('complex simple interpolation', () => {
      const source = '{{ foo + 2 + bar }}';
      const { code, nodes } = run(source);

      const node = nodes[1] as any;
      expect(source.substring(node.node.start, node.node.end)).toBe('foo + 2 + bar');
      expect(code.substring(node.jsNode.start, node.jsNode.end)).toBe('_ctx.foo + 2 + _ctx.bar');

      expect(source.substring(node.node.left.left.start, node.node.left.left.end)).toBe('foo');
      expect(code.substring(node.jsNode.left.left.start, node.jsNode.left.left.end)).toBe('_ctx.foo');
      expect(source.substring(node.node.right.start, node.node.right.end)).toBe('bar');
      expect(code.substring(node.jsNode.right.start, node.jsNode.right.end)).toBe('_ctx.bar');
    });

    test('root fragment', () => {
      const template = `<div></div><div></div>`;
      const { code, nodes } = run(template);
      const node = nodes[0] as any;
      const render = code.substring(node.jsNode.start, node.jsNode.end);
      expect(node.loc.source).toBe(template);
      expect(render).toEqual(expect.stringContaining(`_h(_Fragment, [`));
      expect({ template, render }).toMatchSnapshot();
    });

    test('element', () => {
      const template = `<input type="text" placeholder="username" required />`;
      const { code, nodes } = run(template);
      const node = nodes[1] as any;
      const render = code.substring(node.jsNode.start, node.jsNode.end);
      expect(node.loc.source).toBe(template);
      expect({ template, render }).toMatchSnapshot();
    });

    test('element with children', () => {
      const template = `<form><input /></form>`;
      const { code, nodes } = run(template);
      const node = nodes[1] as any;
      const render = code.substring(node.jsNode.start, node.jsNode.end);
      expect(node.loc.source).toBe(template);
      expect({ template, render }).toMatchSnapshot();
    });

    test('nested element', () => {
      const template = `<form><input /></form>`;
      const { code, nodes } = run(template);
      const node = nodes[2] as any;
      const render = code.substring(node.jsNode.start, node.jsNode.end);
      expect(node.loc.source).toBe(`<input />`);
      expect({ template: '<input />', render }).toMatchSnapshot();
    });

    test('directive v-if', () => {
      const template = `<div v-if="foo" />`;
      const { code, nodes } = run(template);
      {
        const node = nodes[0] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(template);
        expect({ template, render }).toMatchSnapshot();
      }
      {
        const node = nodes[1] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(template);
        expect({ template, render }).toMatchSnapshot();
      }
      {
        const node = nodes[2] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(`foo`);
        expect(render).toBe('_ctx.foo');
      }
    });
    test('directive v-else-if', () => {
      const template = `<div v-if="foo" /><span v-else-if="bar" />`;
      const { code, nodes } = run(template);
      {
        const node = nodes[0] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(template);
        expect({ template, render }).toMatchSnapshot();
      }
      {
        const template = `<div v-if="foo" />`;
        const node = nodes[1] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(template);
        expect({ template, render }).toMatchSnapshot();
      }
      {
        const template = `<span v-else-if="bar" />`;
        const node = nodes[3] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(template);
        expect({ template, render }).toMatchSnapshot();
      }
      {
        const node = nodes[4] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(`bar`);
        expect(render).toBe('_ctx.bar');
      }
    });

    test('directive v-slot (on component)', () => {
      const template = `<Foo v-slot="content">{{ foo + content }}</Foo>`;
      const { code, nodes } = run(template);

      expect(nodes).toHaveLength(4);
      {
        const node = nodes[1] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(template);
        expect({ template, render }).toMatchSnapshot();
      }

      {
        const slotParams = nodes[2] as any;

        expect(slotParams.node).toHaveLength(1);
        expect(slotParams.jsNode).toHaveLength(1);

        const original = slotParams.node[0];
        const generated = slotParams.jsNode[0];

        expect(template.substring(original.start, original.end)).toBe('content');
        expect(code.substring(generated.start, generated.end)).toBe('content');
      }
      {
        const exp = nodes[3] as any;
        expect(code.substring(exp.jsNode.start, exp.jsNode.end)).toBe('_ctx.foo + content');
      }
    });

    test('directive v-slot', () => {
      const template = `
        <Foo>
          <template #default="{ content }">{{ foo + content }}</template>
          <template #[other]="{ other }, second">{{ foo + other + second }}</template>
        </Foo>
      `;
      const { code, nodes } = run(template);

      expect(nodes).toHaveLength(7);
      {
        const node = nodes[1] as any;
        const render = code.substring(node.jsNode.start, node.jsNode.end);
        expect(node.loc.source).toBe(template.trim());
        expect({ template, render }).toMatchSnapshot();
      }
      {
        // v-slot:default
        const dir = nodes[2] as any;
        const inter = nodes[3] as any;

        expect(template.substring(dir.node[0].start, dir.node[0].end)).toBe('{ content }');
        expect(code.substring(dir.jsNode[0].start, dir.jsNode[0].end)).toBe('{ content }');
        expect(template.substring(inter.node.start, inter.node.end)).toBe('foo + content');
        expect(code.substring(inter.jsNode.start, inter.jsNode.end)).toBe('_ctx.foo + content');
      }
      {
        // v-slot:[other]
        const arg = nodes[4] as any;
        const exp = nodes[5] as any;
        const inter = nodes[6] as any;
        expect(template.substring(arg.node.start, arg.node.end)).toBe('other');
        expect(code.substring(arg.jsNode.start, arg.jsNode.end)).toBe('_ctx.other');
        expect(template.substring(exp.node[0].start, exp.node[1].end)).toBe('{ other }, second');
        expect(code.substring(exp.jsNode[0].start, exp.jsNode[1].end)).toBe('{ other }, second');
        expect(template.substring(inter.node.start, inter.node.end)).toBe('foo + other + second');
        expect(code.substring(inter.jsNode.start, inter.jsNode.end)).toBe('_ctx.foo + other + second');
      }
    });
  });
});
