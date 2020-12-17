import { format } from 'prettier'
import { compile } from '../src'
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
      return /*@@vue:start*/<><div>foo</div></>/*@@vue:end*/
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
      return /*@@vue:start*/<><Foo>{{ default: () => <>foo</> }}</Foo></>/*@@vue:end*/
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
      return /*@@vue:start*/<><Foo>{{ default: () => <>foo</> }}</Foo></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Unresolved/Global Component',
    template: `<Foo>foo</Foo>`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<><Foo>foo</Foo></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Preserve Web Component',
    template: `<web-component>foo</web-component>`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<><web-component>foo</web-component></>/*@@vue:end*/
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
    
    export function render(_ctx: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/(
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
      return /*@@vue:start*/<><input  onFocus={() => {}} /></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Rewrite expressions',
    template: `
      <div :style="style" :[key]="value" @hover="handleHover" @[event]="handleEvent">{{ hello }} world</div>
    `,
    render: `
    import _Ctx from './component.vue?internal'
    
    export function render({style, key, value, handleHover, event, handleEvent, hello,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<><div  style={style} key={value} onHover={handleHover} {...{[event]: handleEvent}}>{hello} world</div></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Transform v-model',
    template: `<input v-model="foo" />`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({foo,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<><input value={foo} onChange={$event => (foo = ($event as Event & {target:HTMLInputElement}).target.value)} /></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Transform v-model custom',
    template: `<input v-model:checked="foo" />`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({foo,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<><input checked={foo} {...{'onUpdate:checked': $event => (foo = $event)}} /></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Transform v-model dynamic',
    template: `<input v-model:[checked]="foo" />`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({checked, foo,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<><input {...{[checked]: foo}} {...{['onUpdate:'+checked]: $event => (foo = $event)}} /></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Wrap event expressions',
    template: `<input @focus="bar = $event" />`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({ bar,..._ctx }: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<><input onFocus={$event => (bar = $event)} /></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Convert v-show to ternary',
    template: `<div style="color: red" v-show="isVisible"></div>`,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({isVisible,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<><div v-show={{ arg: undefined, exp: isVisible, modifiers: {}}}></div></>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Convert v-if, v-else-if, v-else to ternary',
    template: `
    <div v-if="foo">A</div>
    <div v-else-if="foo + bar < 50">B</div>
    <div v-else>C</div>
    `,
    render: `
    import _Ctx from './component.vue?internal'

    export function render({foo, bar,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/(
        <>{
            (foo) ? (<div>A</div>) :
            (foo + bar < 50) ? (<div>B</div>) :
            (<div>C</div>)
        }</>
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

    export function render({foo,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<>{(foo)?(<div>A</div>):(null)}</>/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Convert v-for to renderList',
    template: `<div v-for="(item, index) of items">{{ item }} {{ other }}</div>`,
    render: `
    import _Ctx from './component.vue?internal'


    declare function _renderList(source: string, renderItem: (value: string, index: number) => any): any[];
    declare function _renderList(source: number, renderItem: (value: number, index: number) => any): any[];
    declare function _renderList<T>(source: T[], renderItem: (value: T, index: number) => any): any[];
    declare function _renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => any): any[];
    declare function _renderList<T extends object>(source: T, renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => any): any[];
    export function render({ items, other,..._ctx }: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/<>{_renderList(items, (item, index) => {
        return <><div>{item} {other}</div></>
      })}</>/*@@vue:end*/
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

    export function render({foo,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/(
        <>
          <div v-text={{ arg: undefined, exp: foo, modifiers: {}}}/>
          <div v-html={{ arg: undefined, exp: foo, modifiers: {}}}/>
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

    export function render({exp, arg,..._ctx}: InstanceType<typeof _Ctx>) {
      return /*@@vue:start*/(
        <>
          <div v-known={{ arg: "arg", exp: exp, modifiers: { modifier: true }}} />
          <div v-unknown={{ arg: arg, exp: exp, modifiers: { modifier: true }}} />
        </>
      )/*@@vue:end*/
    }
    `,
  },
  {
    name: 'Incomplete expression',
    template: `
      {{ foo. }}
    `,
    render: `
import _Ctx from './component.vue?internal'


export function render({foo,..._ctx}: InstanceType<typeof _Ctx>) {
  return /*@@vue:start*/<>{foo.}</>/*@@vue:end*/
}
`.trim(),
  },
  {
    name: 'Incomplete top level tag',
    template: `<`,
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<>{'<'}</>/*@@vue:end*/
      }
    `,
  },
  {
    name: 'Missing closing tag top level tag',
    template: `<div`,
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><div></div></>/*@@vue:end*/
      }
    `,
  },
  {
    name: 'Incomplete closing tag top level tag',
    template: `<div></`,
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><div>{'<'}/</div></>/*@@vue:end*/
      }
    `,
  },
  {
    name: 'Missing closing top level fragment',
    template: `<>`,
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<>{'<'}{'>'}</>/*@@vue:end*/
      }
    `,
  },
  {
    name: 'Incomplete tag',
    template: `<div><</div>`,
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><div>{'<'}</div></>/*@@vue:end*/
      }
    `,
  },
  {
    name: 'Missing closing tag',
    template: `<div><div</div>`,
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><div>{'<'}div{'<'}/div{'>'}</div></>/*@@vue:end*/
      }
    `,
  },
  {
    name: 'Missing closing fragment',
    template: `<div><></div>`,
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><div>{'<'}{'>'}</div></>/*@@vue:end*/
      }
    `,
  },
  {
    name: 'Incomplete closing tag',
    template: `<div><div></</div>`,
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><div><div>{'<'}/div</div></div></>/*@@vue:end*/
      }
    `,
  },
  {
    name: 'Text Node',
    template: `
      <span></span>    {{  }}<span></span>
    `.trim(),
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><span></span>    {}<span></span></>/*@@vue:end*/
      }
  `,
  },
  {
    name: 'Top level comment',
    template: `
      <!-- comment -->
      <span></span>
    `.trim(),
    render: `
      import _Ctx from './component.vue?internal'


      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><span></span></>/*@@vue:end*/
      }
  `,
  },
  {
    name: 'Nested comment',
    template: `
      <span>
        <!-- comment -->
        <div v-for="user in users" :key="user">{{ user }}</div>
      </span>
    `.trim(),
    render: `
      import _Ctx from './component.vue?internal'


      declare function _renderList(source: string, renderItem: (value: string, index: number) => any): any[];
      declare function _renderList(source: number, renderItem: (value: number, index: number) => any): any[];
      declare function _renderList<T>(source: T[], renderItem: (value: T, index: number) => any): any[];
      declare function _renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => any): any[];
      declare function _renderList<T extends object>(source: T, renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => any): any[];
      export function render({users,..._ctx}: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/<><span>{_renderList(users, user => {
          return <><div key={user}>{user}</div></>
        })}</span></>/*@@vue:end*/
      }
  `,
  },
]

describe('compile/tsx', () => {
  test('debug', () => {
    const result = compile('<div></div><>', {
      filename: '/foo/bar/component.vue',
      components: samples[0].components,
      onError() {},
    })
  })
  test.each(
    samples
      // .filter((sample) => /(v-if)/.test(sample.name))
      .map((sample, index) => [`${index + 1}`, sample.name, sample] as const),
  )('%s. %s', (_, __, sample) => {
    const result = compile(sample.template, {
      filename: '/foo/bar/component.vue',
      components: sample.components,
      onError() {},
    })

    const actual = prepare(result.code)
    const expected = prepare(
      sample.render.replace(
        'export ',
        `declare const __completionsTrigger: InstanceType<typeof _Ctx>\n__completionsTrigger./*@@vue:completions*/$props\nconst __completionsTag = /*@@vue:completionsTag*/<div />\nexport `,
      ),
    )

    expect(actual).toEqual(expected)
  })
})

function prepare(source: string): string {
  try {
    return format(trimIndent(source), {
      parser: 'typescript',
      singleQuote: false,
      semi: true,
      trailingComma: 'all',
      printWidth: 120,
    })
  } catch {
    return source
  }
}

function trimIndent(source: string): string {
  return source.replace(/([,{[(][\s]*)\n/g, (_, exp) => exp)
}
