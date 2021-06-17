// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Baseline Spec Dynamic component with v-for default 1`] = `
## 14.1. Dynamic component with v-for 

\`\`\`vue-html
<component :is="bar" v-for="bar of bars">
  <component :is="bar" #default="{baz}">
    <component :is="baz[bar]" v-for="item of baz" >
      <component :is="item" />
    </component>
  </component>
</component>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {bars}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const DynamicComponent0 = bar;

  return (
    <>
      {
        VueDX.internal.renderList(bars, (bar) => {
          const DynamicComponent1 = bar;
          return (
            <>
              <DynamicComponent0>
                {VueDX.internal.checkSlots(DynamicComponent0, {
                  default: () => {
                    return (
                      <>
                        <DynamicComponent1>
                          {VueDX.internal.checkSlots(DynamicComponent1, {
                            default: ({baz}) => {
                              return (
                                <>
                                  {
                                    VueDX.internal.renderList(baz, (item) => {
                                      const DynamicComponent3 = item;
                                      return (
                                        <>
                                          <DynamicComponent2>
                                            {VueDX.internal.checkSlots(DynamicComponent2, {
                                              default: () => {
                                                return (
                                                  <>
                                                    <DynamicComponent3/>
                                                  </>
                                                )
                                              },
                                            })}
                                          </DynamicComponent2>
                                        </>
                                      )
                                    })
                                  }
                                </>
                              )
                            },
                          })}
                        </DynamicComponent1>
                      </>
                    )
                  },
                })}
              </DynamicComponent0>
            </>
          )
        })
      }
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec Nested Dynamic components default 1`] = `
## 13.1. Nested Dynamic components 

\`\`\`vue-html
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
  </component>
</component>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {foo}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const DynamicComponent0 = foo;

  return (
    <>
      <DynamicComponent0>
        {VueDX.internal.checkSlots(DynamicComponent0, {
          default: ({bar}) => {
            return (
              <>
                <DynamicComponent1>
                  {VueDX.internal.checkSlots(DynamicComponent1, {
                    default: ({baz}) => {
                      return (
                        <>
                          <DynamicComponent2>
                            {VueDX.internal.checkSlots(DynamicComponent2, {
                              other: ({ foo }) => {
                                return (
                                  <>
                                    <>
                                      <DynamicComponent3/>
                                    </>
                                  </>
                                )
                              },
                              default: ({ bar }) => {
                                return (
                                  <>
                                    <>
                                      <DynamicComponent4/>
                                    </>
                                  </>
                                )
                              },
                            })}
                          </DynamicComponent2>
                        </>
                      )
                    },
                  })}
                </DynamicComponent1>
              </>
            )
          },
        })}
      </DynamicComponent0>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec element  components 1`] = `
## 1.3. element > components

\`\`\`vue-html
<FooBar>foo</FooBar>
<fooBar>foo</fooBar>
<foo-bar>foo</foo-bar>
<unknown-element>foo</unknown-element>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { Bar as Foo } from '@ui/components';
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <Foo.Bar>
        {VueDX.internal.checkSlots(Foo.Bar, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </Foo.Bar>
      <Foo.Bar>
        {VueDX.internal.checkSlots(Foo.Bar, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </Foo.Bar>
      <Foo.Bar>
        {VueDX.internal.checkSlots(Foo.Bar, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </Foo.Bar>
      <unknown-element>
        <>
          foo
        </>
      </unknown-element>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec element  fragment with errors 1`] = `
## 1.2. element > fragment with errors

\`\`\`vue-html
<HelloWorld n />
<span>Name: {{ name + }}</span>
<p v-bind:></p>
<p v-if=""></p>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <HelloWorld n/>
      <span>
        Name: 
        {name +}
      </span>
      <p {...(true)}>
      </p>
      {
        ()
          ? <>
              <p>
              </p>
            </>
          : null
      }
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec element  single 1`] = `
## 1.1. element > single

\`\`\`vue-html
<div>foo</div>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <div>
        foo
      </div>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-bind default 1`] = `
## 2.1. v-bind 

\`\`\`vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {myInput,customName,rest}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input
        value={myInput}
        {...({ [customName]: myInput})}
        {...(rest)}/>
      <Foo
        value={myInput}
        {...({ [customName]: myInput})}
        {...(rest)}/>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-html default 1`] = `
## 6.1. v-html 

\`\`\`vue-html
<div v-html="html"></div>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {html}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <div data-vuedx-directive-html={VueDX.internal.checkDirective("html", "div", [
          { exp: html, },
        ])}>
      </div>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  elif no if 1`] = `
## 4.8. v-if/v-else/v-else-if > elif no if

\`\`\`vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {awesome}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <h1>
        Vue is awesome!
      </h1>
      <h1>
        Oh no 😢
      </h1>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  else condition 1`] = `
## 4.7. v-if/v-else/v-else-if > else condition

\`\`\`vue-html
<h1 v-else="ok">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {ok}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <h1>
        Vue is awesome!
      </h1>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if condition 1`] = `
## 4.6. v-if/v-else/v-else-if > if condition

\`\`\`vue-html
<h1 v-if>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
            <>
              <h1>
                Vue is awesome!
              </h1>
            </>
      }
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if on fragment 1`] = `
## 4.3. v-if/v-else/v-else-if > if on fragment

\`\`\`vue-html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {ok}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (ok)
          ? <>
              <h1>
                Title
              </h1>
              <p>
                Paragraph 1
              </p>
              <p>
                Paragraph 2
              </p>
            </>
          : null
      }
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if/else 1`] = `
## 4.2. v-if/v-else/v-else-if > if/else

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {awesome}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (awesome)
          ? <>
              <h1>
                Vue is awesome!
              </h1>
            </>
          : <>
              <h1>
                Oh no 😢
              </h1>
            </>
      }
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if/else/if chain 1`] = `
## 4.4. v-if/v-else/v-else-if > if/else/if chain

\`\`\`vue-html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {type}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (type === 'A')
          ? <>
              <div>
                 A 
              </div>
            </>
          : (type === 'B')
          ? <>
              <div>
                 B 
              </div>
            </>
          : (type === 'C')
          ? <>
              <div>
                 C 
              </div>
            </>
          : <>
              <div>
                 Not A/B/C 
              </div>
            </>
      }
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  nested if/else chains 1`] = `
## 4.9. v-if/v-else/v-else-if > nested if/else chains

\`\`\`vue-html
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
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {foo,bar}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (foo)
          ? <>
              <div>
                {
                  (foo)
                    ? <>
                        <div>
                        </div>
                      </>
                    : (bar)
                    ? <>
                        <div>
                        </div>
                      </>
                    : <>
                        <div>
                        </div>
                      </>
                }
              </div>
            </>
          : (bar)
          ? <>
              <div>
                {
                  (foo)
                    ? <>
                        <div>
                        </div>
                      </>
                    : (bar)
                    ? <>
                        <div>
                        </div>
                      </>
                    : <>
                        <div>
                        </div>
                      </>
                }
              </div>
            </>
          : <>
              <div>
                {
                  (foo)
                    ? <>
                        <div>
                        </div>
                      </>
                    : (bar)
                    ? <>
                        <div>
                        </div>
                      </>
                    : <>
                        <div>
                        </div>
                      </>
                }
              </div>
            </>
      }
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  no if 1`] = `
## 4.5. v-if/v-else/v-else-if > no if

\`\`\`vue-html
<h1 v-else>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <h1>
        Vue is awesome!
      </h1>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  single if statement 1`] = `
## 4.1. v-if/v-else/v-else-if > single if statement

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {awesome}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (awesome)
          ? <>
              <h1>
                Vue is awesome!
              </h1>
            </>
          : null
      }
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-is default 1`] = `
## 12.1. v-is 

\`\`\`vue-html
<table>
  <tbody>
    <tr v-is="MyComponent"></tr>
  </tbody>
</table>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {MyComponent}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <table>
        <tbody>
          <tr data-vuedx-directive-is={VueDX.internal.checkDirective("is", "tr", [
              { exp: MyComponent, },
            ])}>
            <>
            </>
          </tr>
        </tbody>
      </table>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-model  input 1`] = `
## 8.1. v-model > input

\`\`\`vue-html
<input v-model="foo" />
<input type="number" v-model="foo" />
<input type="tel" v-model="foo" />
<input type="checkbox" v-model="foo" />
<input type="radio" v-model="foo" />
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {foo}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("text", [
          { exp: foo, },
        ])}/>
      <input type="number" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("number" ?? "text", [
          { exp: foo, },
        ])}/>
      <input type="tel" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("tel" ?? "text", [
          { exp: foo, },
        ])}/>
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("checkbox" ?? "text", [
          { exp: foo, },
        ])}/>
      <input type="radio" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("radio" ?? "text", [
          { exp: foo, },
        ])}/>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-model  select/textarea 1`] = `
## 8.2. v-model > select/textarea

\`\`\`vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {foo}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirective("select", [
          { exp: foo, },
        ])}>
        <option value={foo}>
          {foo}
        </option>
      </select>
      <textarea data-vuedx-directive-model={VueDX.internal.checkModelDirective("textarea", [
          { exp: foo, },
        ])}/>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-on default 1`] = `
## 3.1. v-on 

\`\`\`vue-html
<input @focus @update:value @kebab-case @camelCase @[customEvent] v-on="events" />
<input
  @keydown="fnName"
  @keydown.left="callMyFn($event)"
  @keydown.shift.left="$event => callMyFn($event)"
  @keydown.shift.right="($event) => callMyFn($event)"
  @keydown.shift.down="() => callMyFn($event)"
  @keydown.shift.up="function myFunction($event) {
    callMyFn($event)
  }"
  @keydown.ctrl.up="function myFunction() {
    callMyFn($event)
  }"
/>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {customEvent,events,fnName,callMyFn,$event}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input
        onFocus
        onUpdate:value
        onKebabCase
        onCamelCase
        {...([VueDX.internal.eventName(customEvent)]: undefined})}
        {...(VueDX.internal.eventNames(events))}/>
      <input
        onKeydown={fnName}
        onKeydown={($event) => {
          callMyFn($event)
        }}
        onKeydown={$event => callMyFn($event)}
        onKeydown={($event) => callMyFn($event)}
        onKeydown={() => callMyFn($event)}
        onKeydown={function myFunction($event) {
    callMyFn($event)
  }}
        onKeydown={function myFunction() {
    callMyFn($event)
  }}/>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-once default 1`] = `
## 11.1. v-once 

\`\`\`vue-html
<section v-once>{{ largeText }}</section>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {largeText}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <section data-vuedx-directive-once={VueDX.internal.checkDirective("once", "section", [
          { },
        ])}>
        {largeText}
      </section>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-pre default 1`] = `
## 10.1. v-pre 

\`\`\`vue-html
<pre v-pre>{{ interpolation }}</pre>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <pre>
        {"{{ interpolation }}"}
      </pre>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-show default 1`] = `
## 7.1. v-show 

\`\`\`vue-html
<h1 v-show="ok">Hello!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {ok}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <h1 data-vuedx-directive-show={VueDX.internal.checkDirective("show", "h1", [
          { exp: ok, },
        ])}>
        Hello!
      </h1>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-slot  Invalid 1`] = `
## 9.1. v-slot > Invalid

\`\`\`vue-html
<Foo>
  <template #foo>A</template>
  <template #bar="{bar}">{{bar}}</template>
  <template>Invalid</template>
</Foo>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <Foo>
        {{
          foo: () => {
            return (
              <>
                <>
                  A
                </>
              </>
            )
          },
          bar: ({bar}) => {
            return (
              <>
                <>
                  {bar}
                </>
              </>
            )
          },
          [Symbol.for('VueDX:UnknownSlot')]: () => {
            return (
              <>
                <>
                  Invalid
                </>
              </>
            )
          },
        }}
      </Foo>
    </>
  )
}
\`\`\`


`

exports[`Baseline Spec v-text default 1`] = `
## 5.1. v-text 

\`\`\`vue-html
<span v-text="msg"></span>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {msg}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <span data-vuedx-directive-text={VueDX.internal.checkDirective("text", "span", [
          { exp: msg, },
        ])}>
      </span>
    </>
  )
}
\`\`\`


`
