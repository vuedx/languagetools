import { format } from 'prettier'
import { compile } from '../src'

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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <div>foo</div>
          </>
        ); /*@@vue:end*/
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';
      import Foo from './Foo.vue';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <Foo>{{ default: () => <>foo</> }}</Foo>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';
      import { Foo } from 'foo-components';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <Foo>{{ default: () => <>foo</> }}</Foo>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <Foo>foo</Foo>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <web-component>foo</web-component>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ style,
        key,
        value,
        handleHover,
        event,
        handleEvent,
        hello /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <div style={style} key={value} onHover={handleHover} {...{ [event]: handleEvent }}>
              {hello} world
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ checked,
        foo /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ bar /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ isVisible /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <div v-show={{ arg: undefined, exp: isVisible, modifiers: {} }}></div>
          </>
        ); /*@@vue:end*/
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo,
        bar /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/ <>{foo ? <div>A</div> : foo + bar < 50 ? <div>B</div> : <div>C</div>}</>; /*@@vue:end*/
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/ <>{foo ? <div>A</div> : null}</>; /*@@vue:end*/
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare function _renderList(source: string, renderItem: (value: string, index: number) => any): any[];
      declare function _renderList(source: number, renderItem: (value: number, index: number) => any): any[];
      declare function _renderList<T>(source: T[], renderItem: (value: T, index: number) => any): any[];
      declare function _renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => any): any[];
      declare function _renderList<T extends object>(
        source: T,
        renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => any,
      ): any[];
      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ items,
        other /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ exp,
        arg /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/ <>{' < '}</>; /*@@vue:end*/
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <div>{'<!--!html--'}</div>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return /*@@vue:start*/ <>{' <> '}</>; /*@@vue:end*/
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <div>{'<div</div>\\n      <!--!html-->'}</div>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <div>
              <div>{'</div'}</div>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render(_ctx: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare function _renderList(source: string, renderItem: (value: string, index: number) => any): any[];
      declare function _renderList(source: number, renderItem: (value: number, index: number) => any): any[];
      declare function _renderList<T>(source: T[], renderItem: (value: T, index: number) => any): any[];
      declare function _renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => any): any[];
      declare function _renderList<T extends object>(
        source: T,
        renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => any,
      ): any[];
      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ users /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            <span>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare function _renderSlot<T extends Record<string, ((...props: any[]) => any) | undefined>, K extends keyof T>(
        slots: T,
        name: K,
        ...props: T[K] extends undefined ? any : Parameters<T[K]>
      ): any[];
      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare function _renderSlot<T extends Record<string, ((...props: any[]) => any) | undefined>, K extends keyof T>(
        slots: T,
        name: K,
        ...props: T[K] extends undefined ? any : Parameters<T[K]>
      ): any[];
      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ foo,
        bar /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
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
        onError() { },
      },
    )

    expect(prepare(result.code)).toMatchInlineSnapshot(`
      //js
      import _Ctx from './component.vue?internal';

      declare function _renderList(source: string, renderItem: (value: string, index: number) => any): any[];
      declare function _renderList(source: number, renderItem: (value: number, index: number) => any): any[];
      declare function _renderList<T>(source: T[], renderItem: (value: T, index: number) => any): any[];
      declare function _renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => any): any[];
      declare function _renderList<T extends object>(
        source: T,
        renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => any,
      ): any[];
      declare const __completionsTrigger: InstanceType<typeof _Ctx>;
      __completionsTrigger./*@@vue:completions*/ $props;
      const __completionsTag = /*@@vue:completionsTag*/ <div />;
      export function render({
        /*@@vue:identifiers-start*/ items /*@@vue:identifiers-end*/,
        ..._ctx
      }: InstanceType<typeof _Ctx>) {
        return (
          /*@@vue:start*/ <>
            {_renderList(items, (item, index) => {
              return <>{item != null ? <div v-text={{ arg: undefined, exp: item.content, modifiers: {} }} /> : null}</>;
            })}
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
