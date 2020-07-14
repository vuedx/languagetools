/// <reference types="jest" />
import { Options } from '../src/options';

const samples: Array<{ name: string; template: string; render: string; components?: Options['components'] }> = [
  {
    name: 'Render Context Type',
    template: `<div>foo</div>`,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <div>foo</div>
    }
    `,
  },
  {
    name: 'Import Component',
    template: `<Foo>foo</Foo>`,
    components: { Foo: './Foo.vue' },
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'
    import _component_Foo from './Foo.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <_component_Foo>{{ default: () => ['foo'] }}</_component_Foo>
    }
    `,
  },
  {
    name: 'Named Import Component',
    template: `<Foo>foo</Foo>`,
    components: {
      Foo: {
        source: 'foo-components',
        named: true,
      },
    },
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'
    import { Foo as _component_Foo } from 'foo-components'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <_component_Foo>{{ default: () => ['foo'] }}</_component_Foo>
    }
    `,
  },
  {
    name: 'Unresolved/Global Component',
    template: `<Foo>foo</Foo>`,
    render: `
    import { h as _h, resolveComponent as _resolveComponent } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      const _component_Foo = _resolveComponent('Foo')

      return <_component_Foo>{{ default: () => ['foo'] }}</_component_Foo>
    }
    `,
  },
  {
    name: 'Preserve Web Component',
    template: `<web-component>foo</web-component>`,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <web-component>foo</web-component>
    }
    `,
  },
  {
    name: 'Attributes to Props',
    template: `
      <input type="text" />
      <Foo type="text" />
    `,
    render: `
    import { h as _h, resolveComponent as _resolveComponent, Fragment as _Fragment } from 'vue'
    import _Ctx from './component.vue'
    
    export function render(_ctx: InstanceType<typeof _Ctx>) {
      const _component_Foo = _resolveComponent('Foo')

      return (
        <_Fragment>
          <input {...{ type: "text" }}></input>
          <_component_Foo {...{ type: "text" }}></_component_Foo>
        </_Fragment>
      )
    }
    `,
  },
  {
    name: 'Rename v-on events',
    template: `
      <input @focus />
    `,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'
    
    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <input {...{ onFocus: () => {} }}></input>
    }
    `,
  },
  {
    name: 'Rewrite expressions',
    template: `
      <div :style="style" :[key]="value" @hover="handleHover" @[event]="handleEvent">
        {{ hello }} world
      </div>
    `,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'
    
    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <div {...{ style: _ctx.style, [_ctx.key]: _ctx.value, onHover: _ctx.handleHover, ['on' + _ctx.event]: _ctx.handleEvent }}>
        {_ctx.hello} world{' '}
      </div>
    }
    `,
  },
  {
    name: 'Transform v-model',
    template: `<input v-model="foo" />`,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <input {...{
        modelValue: _ctx.foo,
        'onUpdate:modelValue': $event => (_ctx.foo = $event)
      }}></input>
    }
    `,
  },
  {
    name: 'Wrap event expressions',
    template: `<input @focus="bar = $event" />`,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <input {...{
        onFocus: $event => (_ctx.bar = $event)
      }}></input>
    }
    `,
  },
  {
    name: 'Convert v-show to ternary',
    template: `<div style="color: red" v-show="isVisible" />`,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return <div {...{
        style: [
          'color: red',
          _ctx.isVisible ?  null : { display: 'none' },
        ],
      }}></div>
    }
    `,
  },
  {
    name: 'Convert v-if, v-else-if, v-else to ternary',
    template: `
    <div v-if="foo">A</div>
    <div v-else-if="bar">B</div>
    <div v-else>C</div>
    `,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return _ctx.foo ? <div>A</div> :
             _ctx.bar ? <div>B</div> : <div>C</div>
    }
    `,
  },
  {
    name: 'Convert v-if to ternary',
    template: `
    <div v-if="foo">A</div>
    `,
    render: `
    import { h as _h } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return _ctx.foo ? <div>A</div> : null
    }
    `,
  },
  {
    name: 'Convert v-for to renderList',
    template: `<div v-for="(item, index) of items">{{ item }} {{ other }}</div>`,
    render: `
    import {  h as _h, renderList as _renderList, Fragment as _Fragment } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return _h(_Fragment, _renderList(_ctx.items, (item, index) => {
        return <div>{item} {_ctx.other}</div>
      }))
    }
    `,
  },
  {
    name: 'Convert v-text/v-html to children',
    template: `
      <div v-text="foo" />
      <div v-html="foo" />
    `,
    render: `
    import { h as _h, Fragment as _Fragment } from 'vue'
    import _Ctx from './component.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return (
        <_Fragment>
          <div>{_ctx.foo}</div>
          <div>{_ctx.foo}</div>
        </_Fragment>
      )
    }
    `,
  },
  /* TODO: Support custom directives.
  {
    name: 'Custom directive',
    template: `
      <div v-known:arg.modifier="exp" />
      <div v-unknown:[arg].modifier="exp" />
    `,
    render: `
    import { h as _h, withDirectives as _withDirectives, resolveDirective as _resolveDirective } from 'vue'
    import _Ctx from './component.vue'
    import _directive_known from './known'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      const _directive_unknown = _resolveDirective('unknown')

      return [
        _withDirectives(
          _h('div', {}, []),
          [
            [_directive_known, _ctx.exp, 'arg', { modifier: true }]
          ]
        ),
        _withDirectives(
          _h('div', {}, []),
          [
            [_directive_unknown, _ctx.exp, _ctx.arg, { modifier: true }]
          ]
        ),
      ]
    }
    `,
  },
   */
];

import { compile } from '../src';
import { format } from 'prettier';

describe('compile/typescript', () => {
  test.each(samples.map((sample) => [sample.name, sample] as const))('%s', (_, sample) => {
    const result = compile(sample.template, { filename: '/foo/bar/component.vue', components: sample.components, useJsx: true });

    const actual = prepare(result.code);
    const expected = prepare(sample.render);

    expect(actual).toEqual(expected);
  });
});

function prepare(source: string) {
  return format(trimIndent(source), {
    parser: 'typescript',
    singleQuote: false,
    semi: true,
    trailingComma: 'all',
    printWidth: 120,
  });
}

function trimIndent(source: string) {
  return source.replace(/([,{[(][\s]*)\n/g, (_, exp) => exp);
}
