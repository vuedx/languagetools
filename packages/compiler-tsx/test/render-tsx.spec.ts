import { format } from 'prettier'
import { compile as baseCompile } from '../src'

const compile: typeof baseCompile = (template, options) => {
  template = template
    .replace('<!' + '--html-->', '')
    .replace('<!' + '--!html-->', '')
    .trim()
  return baseCompile(template, options)
}

expect.addSnapshotSerializer({
  serialize(val) {
    return val.toString()
  },
  test() {
    return true
  },
})

describe('compile/tsx', () => {
  test('simple div element', () => {
    const result = compile(
      `
    <!--html-->
    <div>foo</div>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <div>{'foo'}</div>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })
  test('template with errors', () => {
    const result = compile(
      `
    <!--html-->
    <HelloWorld n />
    <span>Name: {{ name + }}</span>
    <p v-bind:></p>
    <p v-if=""></p>
    <>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(wrap(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal'


      type I<T> = T
      type Component = I<InstanceType<typeof _Ctx>>
      declare const __completionsTrigger: Component
      __completionsTrigger./*@@vue:completions*/$props
      const __completionsTag = /*@@vue:completionsTag*/<></>
      export function render({/*@@vue:identifiers-start*/name/*@@vue:identifiers-end*/,..._ctx}: Component) {
        /*@@vue:start*/
        return <><HelloWorld  n />
      <span  >{"Name: "}
      {name +}
      </span>
      <p  ></p>
      {(false) ? (<p  ></p>) :null}
      {" <>"}
      </>/*@@vue:end*/
      }
      //!js
    `)
  })

  test('imported component', () => {
    const result = compile(
      `
    <!--html-->
    <Foo>foo</Foo>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {
          Foo: { path: './Foo.vue' },
        },
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';
      import Foo from './Foo.vue';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <Foo>
              {{
                default: () => {
                  return <>{'foo'}</>;
                },
              }}
            </Foo>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('named component import', () => {
    const result = compile(
      `
    <!--html-->
    <Foo>foo</Foo>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {
          Foo: {
            path: 'foo-components',
            named: true,
          },
        },
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';
      import { Foo } from 'foo-components';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <Foo>
              {{
                default: () => {
                  return <>{'foo'}</>;
                },
              }}
            </Foo>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('unknown global component', () => {
    const result = compile(
      `
    <!--html-->
    <Foo>foo</Foo>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <Foo>{'foo'}</Foo>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('preserve web components', () => {
    const result = compile(
      `
    <!--html-->
    <web-component>foo</web-component>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <web-component>{'foo'}</web-component>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('attributes to props', () => {
    const result = compile(
      `
    <!--html-->
    <input type="text" />
    <Foo type="text" />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <input type="text" />
            <Foo type="text" />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('rename v-on events', () => {
    const result = compile(
      `
    <!--html-->
    <input @focus @update:value />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <input onFocus={() => {}} {...{ 'onUpdate:value': () => {} }} />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('rewrite expressions', () => {
    const result = compile(
      `
    <!--html-->
    <div :style="style" :[key]="value" @hover="handleHover" @[event]="handleEvent">{{ hello }} world</div>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({
        /*@@vue:identifiers-start*/ style,
        key,
        value,
        handleHover,
        event,
        handleEvent,
        hello /*@@vue:identifiers-end*/,
        ..._ctx
      }: Component) {
        /*@@vue:start*/
        return (
          <>
            <div style={style} key={value} onHover={handleHover} {...{ [event]: handleEvent }}>
              {hello}
              {' world'}
            </div>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('transform v-model', () => {
    const result = compile(
      `
    <!--html-->
    <input v-model="foo" />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <input value={foo} onChange={($event) => (foo = ($event as Event & { target: HTMLInputElement }).target.value)} />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('transform v-model custom', () => {
    const result = compile(
      `
    <!--html-->
    <input v-model:checked="foo" />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <input checked={foo} {...{ 'onUpdate:checked': ($event) => (foo = $event) }} />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('transform v-model dynamic', () => {
    const result = compile(
      `
    <!--html-->
    <input v-model:[checked]="foo" />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ checked, foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <input {...{ [checked]: foo }} {...{ ['onUpdate:' + checked]: ($event) => (foo = $event) }} />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('wrap event expressions', () => {
    const result = compile(
      `
    <!--html-->
    <input @focus="bar = $event" />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ bar /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <input onFocus={($event) => (bar = $event)} />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('convert v-show to ternary', () => {
    const result = compile(
      `
    <!--html-->
    <div style="color: red" v-show="isVisible"></div>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ isVisible /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <div v-show={{ arg: undefined, exp: isVisible, modifiers: {} }}></div>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('v-if missing expression', () => {
    const result = compile(
      `
    <!--html-->
    <div v-if="  ">A</div>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return <>{false ? <div>{'A'}</div> : null}</>; /*@@vue:end*/
      }

      //!js
    `)
  })
  test('convert v-if, v-else-if, v-else to ternary', () => {
    const result = compile(
      `
    <!--html-->
    <div v-if="foo">A</div>
    <div v-else-if="foo + bar < 50">B</div>
    <div v-else>C</div>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo, bar /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return <>{foo ? <div>{'A'}</div> : foo + bar < 50 ? <div>{'B'}</div> : <div>{'C'}</div>}</>; /*@@vue:end*/
      }

      //!js
    `)
  })

  test('convert v-if to ternary', () => {
    const result = compile(
      `
    <!--html-->
    <div v-if="foo">A</div>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return <>{foo ? <div>{'A'}</div> : null}</>; /*@@vue:end*/
      }

      //!js
    `)
  })

  test('convert v-for to renderList', () => {
    const result = compile(
      `
    <!--html-->
    <div v-for="(item, index) of items">{{ item }} {{ other }}</div>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      import { _renderList } from '__vuedx_runtime__render__';
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ items, other /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            {_renderList(items, (item, index) => {
              return (
                <>
                  <div>
                    {item} {other}
                  </div>
                </>
              );
            })}
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('convert v-text/v-html to children', () => {
    const result = compile(
      `
    <!--html-->
    <div v-text="foo" />
    <div v-html="foo" />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <div v-text={{ arg: undefined, exp: foo, modifiers: {} }} />
            <div v-html={{ arg: undefined, exp: foo, modifiers: {} }} />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('custom directive', () => {
    const result = compile(
      `
    <!--html-->
    <div v-known:arg.modifier="exp" />
    <div v-unknown:[arg].modifier="exp" />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ exp, arg /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <div v-known={{ arg: 'arg', exp: exp, modifiers: { modifier: true } }} />
            <div v-unknown={{ arg: arg, exp: exp, modifiers: { modifier: true } }} />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('incomplete top level tag', () => {
    const result = compile(
      `
    <!--html-->
    <
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return <>{'<'}</>; /*@@vue:end*/
      }

      //!js
    `)
  })

  test('incomplete closing tag top level tag', () => {
    const result = compile(
      `
      <!--html-->
      <div></
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <div>{'</'}</div>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('missing closing top level fragment', () => {
    const result = compile(
      `
      <!--html-->
      <>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return <>{'<>'}</>; /*@@vue:end*/
      }

      //!js
    `)
  })

  test('incomplete tag', () => {
    const result = compile(
      `
      <!--html-->
      <div><</div>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <div>{'<'}</div>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('missing closing tag', () => {
    const result = compile(
      `
      <!--html-->
      <div><div</div>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <div>
              <div div></div>
            </div>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('missing closing fragment', () => {
    const result = compile(
      `
      <!--html-->
      <div><></div>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <div>{'<>'}</div>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('incomplete closing tag', () => {
    const result = compile(
      `
      <!--html-->
      <div><div></</div>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <div>
              <div>{/* </div */}</div>
            </div>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('text mode', () => {
    const result = compile(
      `
      <!--html-->
      <span></span>    {{  }}<span></span>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            <span></span> {}
            <span></span>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('top level comment', () => {
    const result = compile(
      `
      <!--html-->
      <!-- comment -->
      <span></span>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            {/*  comment  */}
            <span></span>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('nested comment', () => {
    const result = compile(
      `
      <!--html-->
      <span>
        <!-- comment -->
        <div v-for="user in users" :key="user">{{ user }}</div>
      </span>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      import { _renderList } from '__vuedx_runtime__render__';
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ users /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <span>
              {/*  comment  */}
              {_renderList(users, (user) => {
                return (
                  <>
                    <div key={user}>{user}</div>
                  </>
                );
              })}
            </span>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('simple slot element', () => {
    const result = compile(
      `
      <!--html-->
      <span>
        <slot v-bind="{foo}" />
      </span>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      import { _renderSlot } from '__vuedx_runtime__render__';
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <span>{_renderSlot(_ctx.$slots, 'default', { foo })}</span>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('slot element with fallback', () => {
    const result = compile(
      `
      <!--html-->
      <span>
        <slot v-bind="{foo}">
          <div>{{foo}}</div>
        </slot>
      </span>
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      import { _renderSlot } from '__vuedx_runtime__render__';
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            <span>
              {_renderSlot(_ctx.$slots, 'default', { foo }) ?? (
                <>
                  <div>{foo}</div>
                </>
              )}
            </span>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('dynamic component', () => {
    const result = compile(
      `
      <!--html-->
      <component :is="foo" foo="bar" />
      <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        const _DyComp0_ = foo;
        return (
          <>
            <_DyComp0_ foo="bar" />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })
  test('nested v-if/v-else-if/v-else chain', () => {
    const result = compile(
      `
        <!--html-->
        <div v-if="foo">
          <div v-if="foo"></div>
          <div v-else-if="bar"></div>
          <div v-else></div>
        </div>
        <div v-else-if="bar">
          <div v-if="foo"></div>
          <div v-else-if="bar"></div>
          <div v-else></div>
        </div>
        <div v-else>
          <div v-if="foo"></div>
          <div v-else-if="bar"></div>
          <div v-else></div>
        </div>
        <!--!html-->
      `,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo, bar /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            {foo ? (
              <div>{foo ? <div></div> : bar ? <div></div> : <div></div>}</div>
            ) : bar ? (
              <div>{foo ? <div></div> : bar ? <div></div> : <div></div>}</div>
            ) : (
              <div>{foo ? <div></div> : bar ? <div></div> : <div></div>}</div>
            )}
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('template element with v-for + child v-if', () => {
    const result = compile(
      `
    <!--html-->
    <template v-for="(item, index) of items" :key="index">
      <div
        v-if="item != null"
        v-text="item.content"
      />
    </template>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      import { _renderList } from '__vuedx_runtime__render__';
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ items /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            {_renderList(items, (item, index) => {
              return <>{item != null ? <div v-text={{ arg: undefined, exp: item.content, modifiers: {} }} /> : null}</>;
            })}
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('dynamic component in v-for', () => {
    const result = compile(
      `
    <!--html-->
    <Foo v-for="item of items">
      <component :is="item.component" />
    </Foo>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      import { _renderList } from '__vuedx_runtime__render__';
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ items /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            {_renderList(items, (item) => {
              return (
                <>
                  <Foo>
                    <_DyComp0_ />
                  </Foo>
                </>
              );
            })}
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('nested dynamic component in v-for', () => {
    const result = compile(
      `
    <!--html-->
    <component :is="foo">
      <component :is="bar" v-for="item of items">
        <component :is="item.component" v-for="i of item">
        <component :is="i.component" />
        </component>
      </Foo>
    </component>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      import { _renderList } from '__vuedx_runtime__render__';
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo, items, bar /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        const _DyComp3_ = foo;
        return (
          <>
            <_DyComp3_>
              {{
                default: () => {
                  return (
                    <>
                      {_renderList(items, (item) => {
                        const _DyComp2_ = bar;

                        return (
                          <>
                            <_DyComp2_>
                              {{
                                default: () => {
                                  return (
                                    <>
                                      {_renderList(item, (i) => {
                                        const _DyComp1_ = item.component;

                                        return (
                                          <>
                                            <_DyComp1_>
                                              {{
                                                default: () => {
                                                  const _DyComp0_ = i.component;

                                                  return (
                                                    <>
                                                      <_DyComp0_ />
                                                    </>
                                                  );
                                                },
                                              }}
                                            </_DyComp1_>
                                          </>
                                        );
                                      })}{' '}
                                    </>
                                  );
                                },
                              }}
                            </_DyComp2_>
                          </>
                        );
                      })}
                    </>
                  );
                },
              }}
            </_DyComp3_>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('nested dynamic component in v-slot', () => {
    const result = compile(
      `
    <!--html-->
    <component :is="foo" #default="{bar}">
      <component :is="bar" #default="{baz}">
        <component :is="baz">
          <template #other="{ foo }">
            <component :is="foo" />
          </template>
          <template #default="{ bar }">
            <component :is="bar" />
          </template>
        </component>
      </Foo>
    </component>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        const _DyComp4_ = foo;
        return (
          <>
            <_DyComp4_>
              {{
                default: ({ bar }) => {
                  const _DyComp3_ = bar;

                  return (
                    <>
                      <_DyComp3_>
                        {{
                          default: ({ baz }) => {
                            const _DyComp2_ = baz;

                            return (
                              <>
                                <_DyComp2_>
                                  {{
                                    other: ({ foo }) => {
                                      const _DyComp0_ = foo;

                                      return (
                                        <>
                                          <_DyComp0_ />
                                        </>
                                      );
                                    },
                                    default: ({ bar }) => {
                                      const _DyComp1_ = bar;

                                      return (
                                        <>
                                          <_DyComp1_ />
                                        </>
                                      );
                                    },
                                  }}
                                </_DyComp2_>{' '}
                              </>
                            );
                          },
                        }}
                      </_DyComp3_>
                    </>
                  );
                },
              }}
            </_DyComp4_>
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('dynamic component in  v-for + v-slot', () => {
    const result = compile(
      `
    <!--html-->
    <component :is="bar" v-for="bar of bars">
      <component :is="bar" #default="{baz}">
        <component :is="baz[bar]" v-for="item of baz" >
          <component :is="item" />
        </component>
      </Foo>
    </component>
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      import { _renderList } from '__vuedx_runtime__render__';
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render({ /*@@vue:identifiers-start*/ bars /*@@vue:identifiers-end*/, ..._ctx }: Component) {
        /*@@vue:start*/
        return (
          <>
            {_renderList(bars, (bar) => {
              const _DyComp3_ = bar;

              return (
                <>
                  <_DyComp3_>
                    {{
                      default: () => {
                        const _DyComp2_ = bar;

                        return (
                          <>
                            <_DyComp2_>
                              {{
                                default: ({ baz }) => {
                                  return (
                                    <>
                                      {_renderList(baz, (item) => {
                                        const _DyComp1_ = baz[bar];

                                        return (
                                          <>
                                            <_DyComp1_>
                                              {{
                                                default: () => {
                                                  const _DyComp0_ = item;

                                                  return (
                                                    <>
                                                      <_DyComp0_ />
                                                    </>
                                                  );
                                                },
                                              }}
                                            </_DyComp1_>
                                          </>
                                        );
                                      })}{' '}
                                    </>
                                  );
                                },
                              }}
                            </_DyComp2_>
                          </>
                        );
                      },
                    }}
                  </_DyComp3_>
                </>
              );
            })}
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })

  test('@ts-ignore', () => {
    const result = compile(
      `
    <!--html-->
    <!-- @ts-ignore -->
    <Foo />
    <!--!html-->`,
      {
        filename: '/foo/bar/component.vue',
        components: {},
        onError() {},
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      type I<T> = T;
      type Component = I<InstanceType<typeof _Ctx>>;
      declare const __completionsTrigger: Component;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <></>;
      export function render(_ctx: Component) {
        /*@@vue:start*/
        return (
          <>
            {/*  @ts-ignore  */}
            <Foo />
          </>
        ); /*@@vue:end*/
      }

      //!js
    `)
  })
})

function prepare(source: string): string {
  return wrap(
    format(trimIndent(source), {
      parser: 'typescript',
      singleQuote: true,
      semi: true,
      trailingComma: 'all',
      printWidth: 120,
    }),
  )
}

function wrap(code: string, lang = 'js'): any {
  return {
    toString() {
      return `//${lang}\n${code}\n//!${lang}`
    },
  }
}

function trimIndent(source: string): string {
  return source.replace(/([,{[(][\s]*)\n/g, (_, exp) => exp)
}
