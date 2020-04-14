import { RenderFunctionDocument } from './VirtualTextDocument';
import { VueTextDocument } from './VueTextDocument';

describe('VirtualTextDocument', () => {
  const doc = VueTextDocument.create(
    'file:///component.vue',
    'vue',
    0,
    [
      '<template>', // Line 1
      '  <div> {{ foo.bar + bar }} </div>', // Line 2
      '  <div> {{ foo.bar + bam }} </div>', // Line 3
      '  <div :prop="exp1"> foo </div>', // Line 3
      '  <div v-if="exp2 > 5"> bar </div>', // Line 3
      '  <div v-for="(foo, key, index) of foos"> {{ foo + bar }} </div>', // Line 3
      '  <Bar v-slot="{ foo }"> {{ foo + bar }} </Bar>', // Line 3
      '</template>', // Line 4
      '<script lang="ts">export default {}</script>'
    ].join('\n')
  );

  test(`render function document is created`, () => {
    expect(doc.getBlockDocument('render')).toBeInstanceOf(RenderFunctionDocument);
  });

  test(`render function is genterated`, () => {
    expect(doc.getBlockDocument('render')!.getText()).toEqual(
      expect.stringContaining(`_h("div", {}, [_toDisplayString(_ctx.foo.bar + _ctx.bar)])`)
    );
  });

  test(`render function is genterated`, () => {
    expect(doc.getBlockDocument('render')!.getMappedConent()).toHaveLength(16);
  });

  test(`can find soure position from generated`, () => {
    const source = doc.descriptor.template!.content
    const render = doc.getBlockDocument('render')!;
    let offset = render.getText().indexOf('_ctx.foo.bar');
    {
      const original = render.getSourceOffsetAt(offset);
      expect(source.substr(original, 7)).toBe('foo.bar');
    }
    {
      const original = render.getSourceOffsetAt(offset + 5);
      expect(source.substr(original, 7)).toBe('foo.bar');
    }
    {
      const original = render.getSourceOffsetAt(offset + 9);
      expect(source.substr(original, 3)).toBe('bar');
    }
    {
      const original = render.getSourceOffsetAt(offset + 15);
      expect(source.substr(original, 3)).toBe('bar');
    }

    offset = render.getText().indexOf('_ctx.foo.bar', offset + 1);
    {
      const original = render.getSourceOffsetAt(offset);
      expect(source.substr(original, 7)).toBe('foo.bar');
    }
    {
      const original = render.getSourceOffsetAt(offset + 5);
      expect(source.substr(original, 7)).toBe('foo.bar');
    }
    {
      const original = render.getSourceOffsetAt(offset + 9);
      expect(source.substr(original, 3)).toBe('bar');
    }
    {
      const original = render.getSourceOffsetAt(offset + 15);
      expect(source.substr(original, 3)).toBe('bam');
    }
  });
  
  test(`can find generated position from source`, () => {
    const source = doc.descriptor.template!.content
    const render = doc.getBlockDocument('render')!;
    const code = render.getText()
    const offset = source.indexOf('foo.bar');
    {
      const original = render.getGenteratedOffsetAt(offset);
      expect(code.substr(original, 7)).toBe('foo.bar');
    }
    {
      const original = render.getGenteratedOffsetAt(offset + 4);
      expect(code.substr(original, 3)).toBe('bar');
    }
    {
      const original = render.getGenteratedOffsetAt(offset + 10);
      expect(code.substr(original, 3)).toBe('bar');
    }
  });
});
