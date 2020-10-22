/// <reference types="jest" />
import { Options } from '../src/types'

const samples: Array<{
  name: string
  template: string
  render: string
  components?: Options['components']
}> = [
  {
    name: 'Render Context Type',
    template: `<div>foo</div>`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <div>foo</div>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Import Component',
    template: `<Foo>foo</Foo>`,
    components: { Foo: { path: './Foo.vue' } },
    render: `
    import _Ctx from './component.vue?internal'
    import Foo from './Foo.vue'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <Foo>{{ default: () => <>foo</> }}</Foo>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Named Import Component',
    template: `<Foo>foo</Foo>`,
    components: {
      Foo: {
        path: 'foo-components',
        named: true,
      },
    },
    render: `
    import _Ctx from './component.vue?internal'
    import { Foo } from 'foo-components'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <Foo>{{ default: () => <>foo</> }}</Foo>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Unresolved/Global Component',
    template: `<Foo>foo</Foo>`,
    render: `
    import _Ctx from './component.vue?internal'
    import { Foo } from './component.vue?internal'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <Foo>{{ default: () => <>foo</> }}</Foo>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Preserve Web Component',
    template: `<web-component>foo</web-component>`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <web-component>foo</web-component>/*@@vue:end*/
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
    import _Ctx from './component.vue?internal'
    import { Foo } from './component.vue?internal'
    
    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ (
        <>
          <input type="text" />
          <Foo type="text" />
        </>
      )/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Rename v-on events',
    template: `
      <input @focus />
    `,
    render: `
    import _Ctx from './component.vue?internal'
    
    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <input  onFocus={() => {}} />/*@@vue:end*/
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
    import _Ctx from './component.vue?internal'
    
    export function render({style, key, value, handleHover, event, handleEvent, hello}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <div  style={style} key={value} onHover={handleHover} {...{[event]: handleEvent}}>
        {hello} world{' '}
      </div>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Transform v-model',
    template: `<input v-model="foo" />`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({foo}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <input modelValue={foo} {...{'onUpdate:modelValue': $event => (foo = $event)}} />/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Transform v-model custom',
    template: `<input v-model:checked="foo" />`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({foo}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <input checked={foo} {...{'onUpdate:checked': $event => (foo = $event)}} />/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Transform v-model dynamic',
    template: `<input v-model:[checked]="foo" />`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({checked, foo}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <input {...{[checked]: foo}} {...{['onUpdate:'+checked]: $event => (foo = $event)}} />/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Wrap event expressions',
    template: `<input @focus="bar = $event" />`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({ bar }: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <input onFocus={$event => (bar = $event)} />/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Convert v-show to ternary',
    template: `<div style="color: red" v-show="isVisible"></div>`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({isVisible}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <div style="color: red" __directive_show_1={[isVisible]}></div>/*@@vue:end*/
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
    import _Ctx from './component.vue?internal'

    export function render({foo, bar}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ (
        <>
          <div __directive_if_0={[foo]}>A</div>
          <div __directive_else-if_0={[bar]}>B</div>
          <div __directive_else_0={[]}>C</div>
        </>
      )/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Convert v-if to ternary',
    template: `
    <div v-if="foo">A</div>
    `,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({foo}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ <div __directive_if_0={[foo]}>A</div>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Convert v-for to renderList',
    template: `<div v-for="(item, index) of items">{{ item }} {{ other }}</div>`,
    render: `
    import { renderList as _renderList } from 'vue'
    import _Ctx from './component.vue?internal'

    export function render({ items, other }: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ _renderList(items, (item, index) => {
        return <div>{item} {other}</div>
      })/*@@vue:end*/
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
    import _Ctx from './component.vue?internal'

    export function render({foo}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ (
        <>
          <div __directive_text_0={[foo]}/>
          <div __directive_html_0={[foo]}/>
        </>
      )/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Custom directive',
    template: `
      <div v-known:arg.modifier="exp" />
      <div v-unknown:[arg].modifier="exp" />
    `,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({exp, arg}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/ (
        <>
          <div __directive_known_0={[exp]} />
          <div __directive_unknown_0={[arg, exp]} />
        </>
      )/*@@vue:end*/
    }
    `,
  },
]

import { compile } from '../src'
import { format } from 'prettier'

describe('compile/tsx', () => {
  test.each(
    samples.map(
      (sample, index) => [index + 1 + '', sample.name, sample] as const,
    ),
  )('%s. %s', (_, __, sample) => {
    const result = compile(sample.template, {
      filename: '/foo/bar/component.vue',
      components: sample.components,
    })

    const actual = prepare(result.code)
    const expected = prepare(sample.render)

    expect(actual).toEqual(expected)
  })
})

function prepare(source: string) {
  return format(trimIndent(source), {
    parser: 'typescript',
    singleQuote: false,
    semi: true,
    trailingComma: 'all',
    printWidth: 120,
  })
}

function trimIndent(source: string) {
  return source.replace(/([,{[(][\s]*)\n/g, (_, exp) => exp)
}
