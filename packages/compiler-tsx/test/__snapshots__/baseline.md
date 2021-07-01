# Baseline Spec

## 1.1. element > single

```vue-html
<div>foo</div>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div>
      foo
    </div>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0tBQUNBLEc7TUFBSSxHO01BQUtBLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2PmZvbzwvZGl2PlxuIl19
```

## 1.2. element > fragment with errors

```vue-html
<HelloWorld n />
<span>Name: {{ name + }}</span>
<p v-bind:></p>
<p v-if=""></p>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <HelloWorld n />
      <span>
        Name: 
        {name +}
      </span>
      <p {...({  })}>
      </p>
      {
        ()
          ? <p>
            </p>
          : null
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbIkhlbGxvV29ybGQiLCJzcGFuIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztPQUFDQSxVLENBQVcsQztPQUNYQyxJO1FBQUssTTtTQUFTLE07UUFBV0EsSTtPQUN6QkMsQztRQUFZQSxDOzs7YUFDWkEsQztjQUFZQSxDIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPEhlbGxvV29ybGQgbiAvPlxuPHNwYW4+TmFtZToge3sgbmFtZSArIH19PC9zcGFuPlxuPHAgdi1iaW5kOj48L3A+XG48cCB2LWlmPVwiXCI+PC9wPlxuIl19
```

## 1.3. element > components

```vue-html
<FooBar>foo</FooBar>
<fooBar>foo</fooBar>
<foo-bar>foo</foo-bar>
<unknown-element>foo</unknown-element>
```

```tsx
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
        foo
      </unknown-element>
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbIkZvb0JhciIsImZvb0JhciIsImZvby1iYXIiLCJ1bmtub3duLWVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O09BQUNBLE87Ozs7O2dCQUFPLEc7Ozs7O1FBQUtBLE87T0FDWkMsTzs7Ozs7Z0JBQU8sRzs7Ozs7UUFBS0EsTztPQUNaQyxPOzs7OztnQkFBUSxHOzs7OztRQUFLQSxPO09BQ2JDLGU7UUFBZ0IsRztRQUFLQSxlIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPEZvb0Jhcj5mb288L0Zvb0Jhcj5cbjxmb29CYXI+Zm9vPC9mb29CYXI+XG48Zm9vLWJhcj5mb288L2Zvby1iYXI+XG48dW5rbm93bi1lbGVtZW50PmZvbzwvdW5rbm93bi1lbGVtZW50PlxuIl19
```

## 1.4. element > slots

```vue-html
<div>
  <slot>fallback content</slot>
  <span>
    <slot name="other" v-bind="props" :myProp="value">fallback content</slot>
  </span>
  <slot name="another" v-bind="props" :myProp="value"></slot>
  <slot :name="dynamic" v-bind="props" :myProp="value" />
</div>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {props,value,dynamic}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div>
      {VueDX.internal.renderSlot(_ctx.$slots, "default", { }) ?? <>
        fallback content
      </>
      }
      <span>
        {VueDX.internal.renderSlot(_ctx.$slots, "other", { ...(props), "myProp": value, }) ?? <>
          fallback content
        </>
        }
      </span>
      {VueDX.internal.renderSlot(_ctx.$slots, "another", { ...(props), "myProp": value, })}
      {VueDX.internal.renderSlot(_ctx.$slots, dynamic, { ...(props), "myProp": value, })}
    </div>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImRpdiIsInNwYW4iLCJvdGhlciIsIm15UHJvcCIsImFub3RoZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztLQUFDQSxHOztRQUNPLGdCOzs7T0FDTEMsSTtnREFDWUMsTyxRQUFnQixLLEdBQVFDLFEsRUFBUSxLO1VBQU8sZ0I7OztRQUNsREYsSTs4Q0FDU0csUyxRQUFrQixLLEdBQVFELFEsRUFBUSxLOzhDQUNoQyxPLFFBQWlCLEssR0FBUUEsUSxFQUFRLEs7TUFDOUNILEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2PlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3Bhbj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDwvc3Bhbj5cbiAgPHNsb3QgbmFtZT1cImFub3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPjwvc2xvdD5cbiAgPHNsb3QgOm5hbWU9XCJkeW5hbWljXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIiAvPlxuPC9kaXY+XG4iXX0=
```

## 2.1. v-bind 

```vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
```

```tsx
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
        {...({
          [customName]: myInput,
          ...(rest),
        })} />
      <Foo
        value={myInput}
        {...({
          [customName]: myInput,
          ...(rest),
        })} />
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImlucHV0IiwidmFsdWUiLCJGb28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7T0FBQ0EsSztRQUFPQyxLLEVBQU8sTzs7V0FBVSxVLEdBQWMsTztjQUFpQixJOztPQUN2REMsRztRQUFLRCxLLEVBQU8sTzs7V0FBVSxVLEdBQWMsTztjQUFpQixJIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGlucHV0IDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuPEZvbyA6dmFsdWU9XCJteUlucHV0XCIgOltjdXN0b21OYW1lXT1cIm15SW5wdXRcIiB2LWJpbmQ9XCJyZXN0XCIgLz5cbiJdfQ==
```

## 3.1. v-on 

```vue-html
<input @focus="onFocus" />
<input @update:value="value = $event" />
<input @event-name @eventName @[eventName] v-on="events" />
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
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {onFocus,value,$event,eventName,events,fnName,callMyFn}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input onFocus={VueDX.internal.checkDirective("on", "input", [
            {
              arg: "focus",
              exp: onFocus,
            },
          ])}  />
      <input onUpdate:value={VueDX.internal.checkDirective("on", "input", [
            {
              arg: "update:value",
              exp: ($event) => {
                value = $event
              },
            },
          ])}  />
      <input
        onEventName={VueDX.internal.checkDirective("on", "input", [
            {
              arg: "event-name",
            },
            {
              arg: "eventName",
            },
          ])}
        data-vuedx-directive-on={VueDX.internal.checkDirective("on", "input", [
          {
             arg: eventName, 
          },
          {
             exp: events,
          },
        ])} />
      <input
        onKeydown={VueDX.internal.checkDirective("on", "input", [
            {
              arg: "keydown",
              exp: fnName,
            },
            {
              arg: "keydown",
              exp: ($event) => {
                callMyFn($event)
              },
              modifiers: { left: true, },
            },
            {
              arg: "keydown",
              exp: $event => callMyFn($event),
              modifiers: { shift: true, left: true, },
            },
            {
              arg: "keydown",
              exp: ($event) => callMyFn($event),
              modifiers: { shift: true, right: true, },
            },
            {
              arg: "keydown",
              exp: () => callMyFn($event),
              modifiers: { shift: true, down: true, },
            },
            {
              arg: "keydown",
              exp: function myFunction($event) {
    callMyFn($event)
  },
              modifiers: { shift: true, up: true, },
            },
            {
              arg: "keydown",
              exp: function myFunction() {
    callMyFn($event)
  },
              modifiers: { ctrl: true, up: true, },
            },
          ])}
       />
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImlucHV0IiwiZm9jdXMiLCJ1cGRhdGU6dmFsdWUiLCJldmVudC1uYW1lIiwiZXZlbnROYW1lIiwia2V5ZG93biJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztPQUFDQSxLOzttQkFBT0MsTzttQkFBTyxPOzs7T0FDZEQsSzs7bUJBQU9FLGM7O2dCQUFjLGM7Ozs7T0FDckJGLEs7OzttQkFBT0csWTs7O21CQUFZQyxXOzs7OztrQkFBVyxTOzs7a0JBQWtCLE07OztPQUNoREosSzs7O21CQUNFSyxTO21CQUFTLE07OzttQkFDVEEsUzs7Z0JBQWMsZ0I7Ozs7O21CQUNkQSxTO21CQUFvQiwwQjs7OzttQkFDcEJBLFM7bUJBQXFCLDRCOzs7O21CQUNyQkEsUzttQkFBb0Isc0I7Ozs7bUJBQ3BCQSxTO21CQUFrQjtBQUFBO0FBQUEsRzs7OzttQkFHbEJBLFM7bUJBQWlCO0FBQUE7QUFBQSxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGlucHV0IEBmb2N1cz1cIm9uRm9jdXNcIiAvPlxuPGlucHV0IEB1cGRhdGU6dmFsdWU9XCJ2YWx1ZSA9ICRldmVudFwiIC8+XG48aW5wdXQgQGV2ZW50LW5hbWUgQGV2ZW50TmFtZSBAW2V2ZW50TmFtZV0gdi1vbj1cImV2ZW50c1wiIC8+XG48aW5wdXRcbiAgQGtleWRvd249XCJmbk5hbWVcIlxuICBAa2V5ZG93bi5sZWZ0PVwiY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LmxlZnQ9XCIkZXZlbnQgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LnJpZ2h0PVwiKCRldmVudCkgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LmRvd249XCIoKSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQudXA9XCJmdW5jdGlvbiBteUZ1bmN0aW9uKCRldmVudCkge1xuICAgIGNhbGxNeUZuKCRldmVudClcbiAgfVwiXG4gIEBrZXlkb3duLmN0cmwudXA9XCJmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICAgIGNhbGxNeUZuKCRldmVudClcbiAgfVwiXG4vPlxuIl19
```

## 4.1. v-if/v-else/v-else-if > single if statement

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
```

```tsx
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
          ? <h1>
              Vue is awesome!
            </h1>
          : null
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztTQUFVLE87YUFBVEEsRTtjQUFrQixlO2NBQWlCQSxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbiJdfQ==
```

## 4.2. v-if/v-else/v-else-if > if/else

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
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
          ? <h1>
              Vue is awesome!
            </h1>
          : <h1>
              Oh no 😢
            </h1>
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztTQUFVLE87YUFBVEEsRTtjQUFrQixlO2NBQWlCQSxFO2FBQ25DQSxFO2NBQVUsUTtjQUFVQSxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG4iXX0=
```

## 4.3. v-if/v-else/v-else-if > if on fragment

```vue-html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

```tsx
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImgxIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7U0FBZ0IsRTs7ZUFDYkEsRTtnQkFBRyxLO2dCQUFPQSxFO2VBQ1ZDLEM7Z0JBQUUsVztnQkFBYUEsQztlQUNmQSxDO2dCQUFFLFc7Z0JBQWFBLEMiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgdi1pZj1cIm9rXCI+XG4gIDxoMT5UaXRsZTwvaDE+XG4gIDxwPlBhcmFncmFwaCAxPC9wPlxuICA8cD5QYXJhZ3JhcGggMjwvcD5cbjwvdGVtcGxhdGU+XG4iXX0=
```

## 4.4. v-if/v-else/v-else-if > if/else/if chain

```vue-html
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
```

```tsx
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
          ? <div>
               A 
            </div>
          : (type === 'B')
          ? <div>
               B 
            </div>
          : (type === 'C')
          ? <div>
               C 
            </div>
          : <div>
               Not A/B/C 
            </div>
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7U0FBVyxZO2FBQVZBLEc7Y0FBd0IsRztjQUV2QkEsRzthQUNjLFk7YUFBZkEsRztjQUE2QixHO2NBRTVCQSxHO2FBQ2MsWTthQUFmQSxHO2NBQTZCLEc7Y0FFNUJBLEc7YUFDREEsRztjQUFXLFc7Y0FFVkEsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXYgdi1pZj1cInR5cGUgPT09ICdBJ1wiPlxuICBBXG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ0InXCI+XG4gIEJcbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJ0eXBlID09PSAnQydcIj5cbiAgQ1xuPC9kaXY+XG48ZGl2IHYtZWxzZT5cbiAgTm90IEEvQi9DXG48L2Rpdj5cbiJdfQ==
```

## 4.5. v-if/v-else/v-else-if > no if

```vue-html
<h1 v-else>Vue is awesome!</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1>
      Vue is awesome!
    </h1>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7S0FBQ0EsRTtNQUFVLGU7TUFBaUJBLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1lbHNlPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG4iXX0=
```

## 4.6. v-if/v-else/v-else-if > if condition

```vue-html
<h1 v-if>Vue is awesome!</h1>
```

```tsx
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
            <h1>
              Vue is awesome!
            </h1>
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OzthQUFDQSxFO2NBQVEsZTtjQUFpQkEsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWlmPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG4iXX0=
```

## 4.7. v-if/v-else/v-else-if > else condition

```vue-html
<h1 v-else="ok">Vue is awesome!</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {ok}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1>
      Vue is awesome!
    </h1>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7S0FBQ0EsRTtNQUFlLGU7TUFBaUJBLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1lbHNlPVwib2tcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuIl19
```

## 4.8. v-if/v-else/v-else-if > elif no if

```vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O09BQUNBLEU7UUFBdUIsZTtRQUFpQkEsRTtPQUN4Q0EsRTtRQUFVLFE7UUFBVUEsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWVsc2UtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG4iXX0=
```

## 4.9. v-if/v-else/v-else-if > nested if/else chains

```vue-html
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
```

```tsx
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
          ? <div>
              {
                (foo)
                  ? <div>
                    </div>
                  : (bar)
                  ? <div>
                    </div>
                  : <div>
                    </div>
              }
            </div>
          : (bar)
          ? <div>
              {
                (foo)
                  ? <div>
                    </div>
                  : (bar)
                  ? <div>
                    </div>
                  : <div>
                    </div>
              }
            </div>
          : <div>
              {
                (foo)
                  ? <div>
                    </div>
                  : (bar)
                  ? <div>
                    </div>
                  : <div>
                    </div>
              }
            </div>
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7U0FBVyxHO2FBQVZBLEc7O2lCQUNZLEc7cUJBQVZBLEc7c0JBQWlCQSxHO3FCQUNGLEc7cUJBQWZBLEc7c0JBQXNCQSxHO3FCQUN0QkEsRztzQkFBYUEsRzs7Y0FDZEEsRzthQUNjLEc7YUFBZkEsRzs7aUJBQ1ksRztxQkFBVkEsRztzQkFBaUJBLEc7cUJBQ0YsRztxQkFBZkEsRztzQkFBc0JBLEc7cUJBQ3RCQSxHO3NCQUFhQSxHOztjQUNkQSxHO2FBQ0RBLEc7O2lCQUNZLEc7cUJBQVZBLEc7c0JBQWlCQSxHO3FCQUNGLEc7cUJBQWZBLEc7c0JBQXNCQSxHO3FCQUN0QkEsRztzQkFBYUEsRzs7Y0FDZEEsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXYgdi1pZj1cImZvb1wiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuIl19
```

## 5.1. v-text 

```vue-html
<span v-text="msg"></span>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {msg}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <span data-vuedx-directive-text={VueDX.internal.checkDirective("text", "span", [
        {
           exp: msg,
        },
      ])}>
    </span>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbInNwYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztLQUFDQSxJOztnQkFBYSxHOzs7TUFBT0EsSSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxzcGFuIHYtdGV4dD1cIm1zZ1wiPjwvc3Bhbj5cbiJdfQ==
```

## 6.1. v-html 

```vue-html
<div v-html="html"></div>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {html}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div data-vuedx-directive-html={VueDX.internal.checkDirective("html", "div", [
        {
           exp: html,
        },
      ])}>
    </div>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImRpdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0tBQUNBLEc7O2dCQUFZLEk7OztNQUFRQSxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWh0bWw9XCJodG1sXCI+PC9kaXY+XG4iXX0=
```

## 7.1. v-show 

```vue-html
<h1 v-show="ok">Hello!</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {ok}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1 data-vuedx-directive-show={VueDX.internal.checkDirective("show", "h1", [
        {
           exp: ok,
        },
      ])}>
      Hello!
    </h1>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImgxIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7S0FBQ0EsRTs7Z0JBQVcsRTs7O01BQUksTTtNQUFRQSxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtc2hvdz1cIm9rXCI+SGVsbG8hPC9oMT5cbiJdfQ==
```

## 8.1. v-model > input

```vue-html
<input v-model="foo" />
<input type="number" v-model="foo" />
<input type="tel" v-model="foo" />
<input type="checkbox" v-model="foo" />
<input type="radio" v-model="foo" />
```

```tsx
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
          {
             exp: foo,
          },
        ])} />
      <input type="number" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("number" ?? "text", [
          {
             exp: foo,
          },
        ])} />
      <input type="tel" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("tel" ?? "text", [
          {
             exp: foo,
          },
        ])} />
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("checkbox" ?? "text", [
          {
             exp: foo,
          },
        ])} />
      <input type="radio" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("radio" ?? "text", [
          {
             exp: foo,
          },
        ])} />
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImlucHV0IiwibnVtYmVyIiwidGVsIiwiY2hlY2tib3giLCJyYWRpbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztPQUFDQSxLOztrQkFBZSxHOzs7T0FDZkEsSyxDQUFNLEksQ0FBSyxRLHFFQUFBQyxROztrQkFBa0IsRzs7O09BQzdCRCxLLENBQU0sSSxDQUFLLEsscUVBQUFFLEs7O2tCQUFlLEc7OztPQUMxQkYsSyxDQUFNLEksQ0FBSyxVLHFFQUFBRyxVOztrQkFBb0IsRzs7O09BQy9CSCxLLENBQU0sSSxDQUFLLE8scUVBQUFJLE87O2tCQUFpQixHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGlucHV0IHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwidGVsXCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cInJhZGlvXCIgdi1tb2RlbD1cImZvb1wiIC8+XG4iXX0=
```

## 8.2. v-model > select/textarea

```vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
```

```tsx
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
          {
             exp: foo,
          },
        ])}>
        <option value={foo}>
          {foo}
        </option>
      </select>
      <textarea data-vuedx-directive-model={VueDX.internal.checkModelDirective("textarea", [
          {
             exp: foo,
          },
        ])} />
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbInNlbGVjdCIsIm9wdGlvbiIsInZhbHVlIiwidGV4dGFyZWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7T0FBQ0EsTTs7a0JBQWdCLEc7OztTQUNkQyxNLENBQVFDLEssRUFBTyxHO1dBQU8sRztVQUFPRCxNO1FBQzlCRCxNO09BQ0RHLFE7O2tCQUFrQixHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gOnZhbHVlPVwiZm9vXCI+e3tmb299fTwvb3B0aW9uPlxuPC9zZWxlY3Q+XG48dGV4dGFyZWEgdi1tb2RlbD1cImZvb1wiIC8+XG4iXX0=
```

## 9.1. v-slot > Invalid

```vue-html
<Foo>
  <template #foo>A</template>
  <template #bar="{bar}">{{bar}}</template>
  <template>Invalid</template>
</Foo>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
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
              Invalid
            </>
          )
        },
      }}
    </Foo>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbIkZvbyIsImZvbyIsImJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0tBQUNBLEc7O1FBQ1lDLEc7Ozs7Z0JBQUksQzs7Ozs7UUFDSkMsRyxHQUFLLEs7Ozs7aUJBQVMsRzs7Ozs7Ozs7Y0FDZixPOzs7OztNQUNWRixHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPEZvbz5cbiAgPHRlbXBsYXRlICNmb28+QTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYmFyPVwie2Jhcn1cIj57e2Jhcn19PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlPkludmFsaWQ8L3RlbXBsYXRlPlxuPC9Gb28+XG4iXX0=
```

## 9.2. v-slot > use slots

```vue-html
<FooBar>content</FooBar>
<FooBar #default="{foo}">{{ foo }}</FooBar>
<FooBar #other="{foo}">{{ foo }}</FooBar>
<FooBar>
  <template #default>content</template>
  <template #other="{foo}">{{foo}}</template>
  <template #another="foo">
    <div v-if="foo">{{foo.bar}}</div>
  </template>
  <div>extranous</div>
</FooBar>
```

```tsx
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
                content
              </>
            )
          },
        })}
      </Foo.Bar>
      <Foo.Bar>
        {VueDX.internal.checkSlots(Foo.Bar, {
          default: ({foo}) => {
            return (
              <>
                {foo}
              </>
            )
          },
        })}
      </Foo.Bar>
      <Foo.Bar>
        {VueDX.internal.checkSlots(Foo.Bar, {
          other: ({foo}) => {
            return (
              <>
                {foo}
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
                <>
                  content
                </>
              </>
            )
          },
          other: ({foo}) => {
            return (
              <>
                <>
                  {foo}
                </>
              </>
            )
          },
          another: (foo) => {
            return (
              <>
                <>
                  {
                    (foo)
                      ? <div>
                          {foo.bar}
                        </div>
                      : null
                  }
                </>
              </>
            )
          },
          [Symbol.for('VueDX:UnknownSlot')]: () => {
            return (
              <div>
                extranous
              </div>
            )
          },
        })}
      </Foo.Bar>
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbIkZvb0JhciIsImRlZmF1bHQiLCJvdGhlciIsImFub3RoZXIiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O09BQUNBLE87Ozs7O2dCQUFPLE87Ozs7O1FBQVNBLE87T0FDaEJBLE87O1VBQVFDLE8sR0FBUyxLOzs7aUJBQVUsRzs7Ozs7UUFBUUQsTztPQUNuQ0EsTzs7VUFBUUUsSyxHQUFPLEs7OztpQkFBVSxHOzs7OztRQUFRRixPO09BQ2pDQSxPOztVQUNZQyxPOzs7O2tCQUFRLE87Ozs7O1VBQ1JDLEssR0FBTyxLOzs7O21CQUFTLEc7Ozs7O1VBQ2hCQyxPLEdBQVMsRzs7Ozs7cUJBQ1AsRzt5QkFBVkMsRzsyQkFBaUIsTzswQkFBV0EsRzs7Ozs7Ozs7O2VBRTlCQSxHO2dCQUFJLFM7Z0JBQVdBLEc7Ozs7UUFDaEJKLE8iLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Rm9vQmFyPmNvbnRlbnQ8L0Zvb0Jhcj5cbjxGb29CYXIgI2RlZmF1bHQ9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0JhciAjb3RoZXI9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0Jhcj5cbiAgPHRlbXBsYXRlICNkZWZhdWx0PmNvbnRlbnQ8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI290aGVyPVwie2Zvb31cIj57e2Zvb319PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNhbm90aGVyPVwiZm9vXCI+XG4gICAgPGRpdiB2LWlmPVwiZm9vXCI+e3tmb28uYmFyfX08L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgPGRpdj5leHRyYW5vdXM8L2Rpdj5cbjwvRm9vQmFyPlxuIl19
```

## 10.1. v-pre 

```vue-html
<pre v-pre>{{ interpolation }}</pre>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <pre>
      {"{{ interpolation }}"}
    </pre>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbInByZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0tBQUNBLEc7TUFBVSx1QjtNQUFxQkEsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxwcmUgdi1wcmU+e3sgaW50ZXJwb2xhdGlvbiB9fTwvcHJlPlxuIl19
```

## 11.1. v-once 

```vue-html
<section v-once>{{ largeText }}</section>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {largeText}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <section data-vuedx-directive-once={VueDX.internal.checkDirective("once", "section", [
        {
        },
      ])}>
      {largeText}
    </section>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbInNlY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztLQUFDQSxPOzs7O09BQWtCLFM7TUFBY0EsTyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxzZWN0aW9uIHYtb25jZT57eyBsYXJnZVRleHQgfX08L3NlY3Rpb24+XG4iXX0=
```

## 12.1. v-is 

```vue-html
<table>
  <tbody>
    <tr v-is="MyComponent"></tr>
  </tbody>
</table>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {MyComponent}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <table>
      <tbody>
        <tr data-vuedx-directive-is={VueDX.internal.checkDirective("is", "tr", [
            {
               exp: MyComponent,
            },
          ])}>
        </tr>
      </tbody>
    </table>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbInRhYmxlIiwidGJvZHkiLCJ0ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0tBQUNBLEs7T0FDRUMsSztTQUNFQyxFOztvQkFBUyxXOzs7VUFBZUEsRTtRQUN6QkQsSztNQUNGRCxLIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRhYmxlPlxuICA8dGJvZHk+XG4gICAgPHRyIHYtaXM9XCJNeUNvbXBvbmVudFwiPjwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuIl19
```

## 13.1. v-for 

```vue-html
<div v-for="n of num">{{ n }}</div>
<div v-for="(n, i) of num">{{ n }}:{{ i }}</div>
<div v-for="s of str">{{ s }}</div>
<div v-for="(s, i) of str">{{ s }}:{{ i }}</div>
<div v-for="a of arr">{{ a }}</div>
<div v-for="{ value } of arr">{{ value }}</div>
<div v-for="{ foo } of arr">{{ arr }}</div>
<div v-for="(a, i) of arr">{{ a }}:{{ i }}</div>
<div v-for="({ value }, i) of arr">{{ value }}:{{ i }}</div>
<div v-for="o of obj">{{ o }}</div>
<div v-for="(o, k) of obj">{{ o }}:{{ k }}</div>
<div v-for="(o, k, i) of obj">{{ o }}:{{ k }}:{{ i }}</div>
<div v-for="t of itr">{{ t }}</div>
<div v-for="b of boo">{{ b }}</div>
<div v-for="s of sym">{{ s }}</div>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {num,str,arr,value,obj,itr,boo,sym}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        VueDX.internal.renderList(num, (n) => {
          return (
            <div>
              {n}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(num, (n, i) => {
          return (
            <div>
              {n}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(str, (s) => {
          return (
            <div>
              {s}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(str, (s, i) => {
          return (
            <div>
              {s}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, (a) => {
          return (
            <div>
              {a}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ value }) => {
          return (
            <div>
              {value}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ foo }) => {
          return (
            <div>
              {arr}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, (a, i) => {
          return (
            <div>
              {a}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ value }, i) => {
          return (
            <div>
              {value}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o) => {
          return (
            <div>
              {o}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o, k) => {
          return (
            <div>
              {o}
              :
              {k}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o, k, i) => {
          return (
            <div>
              {o}
              :
              {k}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(itr, (t) => {
          return (
            <div>
              {t}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(boo, (b) => {
          return (
            <div>
              {b}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(sym, (s) => {
          return (
            <div>
              {s}
            </div>
          )
        })
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbIm51bSIsImRpdiIsInN0ciIsImFyciIsIm9iaiIsIml0ciIsImJvbyIsInN5bSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7a0NBQWlCQSxHLEdBQUwsQzs7YUFBWEMsRztlQUF3QixDO2NBQU1BLEc7Ozs7O2tDQUNURCxHLEdBQVQsQyxFQUFHLEM7O2FBQWZDLEc7ZUFBNkIsQztjQUFJLEM7ZUFBSSxDO2NBQU1BLEc7Ozs7O2tDQUMzQkMsRyxHQUFMLEM7O2FBQVhELEc7ZUFBd0IsQztjQUFNQSxHOzs7OztrQ0FDVEMsRyxHQUFULEMsRUFBRyxDOzthQUFmRCxHO2VBQTZCLEM7Y0FBSSxDO2VBQUksQztjQUFNQSxHOzs7OztrQ0FDM0JFLEcsR0FBTCxDOzthQUFYRixHO2VBQXdCLEM7Y0FBTUEsRzs7Ozs7a0NBQ05FLEcsR0FBYixTOzthQUFYRixHO2VBQWdDLEs7Y0FBVUEsRzs7Ozs7a0NBQ3BCRSxHLEdBQVgsTzs7YUFBWEYsRztlQUE4QixHO2NBQVFBLEc7Ozs7O2tDQUNqQkUsRyxHQUFULEMsRUFBRyxDOzthQUFmRixHO2VBQTZCLEM7Y0FBSSxDO2VBQUksQztjQUFNQSxHOzs7OztrQ0FDZEUsRyxHQUFqQixTLEVBQVcsQzs7YUFBdkJGLEc7ZUFBcUMsSztjQUFRLEM7ZUFBSSxDO2NBQU1BLEc7Ozs7O2tDQUN2Q0csRyxHQUFMLEM7O2FBQVhILEc7ZUFBd0IsQztjQUFNQSxHOzs7OztrQ0FDVEcsRyxHQUFULEMsRUFBRyxDOzthQUFmSCxHO2VBQTZCLEM7Y0FBSSxDO2VBQUksQztjQUFNQSxHOzs7OztrQ0FDbkJHLEcsR0FBWixDLEVBQUcsQyxFQUFHLEM7O2FBQWxCSCxHO2VBQWdDLEM7Y0FBSSxDO2VBQUksQztjQUFJLEM7ZUFBSSxDO2NBQU1BLEc7Ozs7O2tDQUN0Q0ksRyxHQUFMLEM7O2FBQVhKLEc7ZUFBd0IsQztjQUFNQSxHOzs7OztrQ0FDZEssRyxHQUFMLEM7O2FBQVhMLEc7ZUFBd0IsQztjQUFNQSxHOzs7OztrQ0FDZE0sRyxHQUFMLEM7O2FBQVhOLEc7ZUFBd0IsQztjQUFNQSxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWZvcj1cIm4gb2YgbnVtXCI+e3sgbiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihuLCBpKSBvZiBudW1cIj57eyBuIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN0clwiPnt7IHMgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIocywgaSkgb2Ygc3RyXCI+e3sgcyB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYSBvZiBhcnJcIj57eyBhIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyB2YWx1ZSB9IG9mIGFyclwiPnt7IHZhbHVlIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyBmb28gfSBvZiBhcnJcIj57eyBhcnIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoYSwgaSkgb2YgYXJyXCI+e3sgYSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHsgdmFsdWUgfSwgaSkgb2YgYXJyXCI+e3sgdmFsdWUgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIm8gb2Ygb2JqXCI+e3sgbyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaywgaSkgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ0IG9mIGl0clwiPnt7IHQgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJiIG9mIGJvb1wiPnt7IGIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN5bVwiPnt7IHMgfX08L2Rpdj5cbiJdfQ==
```

## 14.1. Nested Dynamic components 

```vue-html
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
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import type _Self from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type Example = InstanceType<typeof _Self>
export function render(_ctx: Example, {foo}: Example): any {
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const DynamicComponent0 = foo;

  return (
    <DynamicComponent0>
      {VueDX.internal.checkSlots(DynamicComponent0, {
        default: ({bar}) => {
          return (
            <DynamicComponent1>
              {VueDX.internal.checkSlots(DynamicComponent1, {
                default: ({baz}) => {
                  return (
                    <DynamicComponent2>
                      {VueDX.internal.checkSlots(DynamicComponent2, {
                        other: ({ foo }) => {
                          return (
                            <>
                              <>
                                <DynamicComponent3 />
                              </>
                            </>
                          )
                        },
                        default: ({ bar }) => {
                          return (
                            <>
                              <>
                                <DynamicComponent4 />
                              </>
                            </>
                          )
                        },
                      })}
                    </DynamicComponent2>
                  )
                },
              })}
            </DynamicComponent1>
          )
        },
      })}
    </DynamicComponent0>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImNvbXBvbmVudCIsImRlZmF1bHQiLCJvdGhlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs0QkFBZ0IsRzs7O0tBQWZBLGlCOztRQUFxQkMsTyxHQUFTLEs7O2FBQzVCRCxpQjs7Z0JBQXFCQyxPLEdBQVMsSzs7cUJBQzVCRCxpQjs7d0JBQ1lFLEssR0FBTyxPOzs7O2lDQUNmRixpQjs7Ozs7d0JBRVFDLE8sR0FBUyxPOzs7O2lDQUNqQkQsaUI7Ozs7OztzQkFFSEEsaUI7Ozs7Y0FDRkEsaUI7Ozs7TUFDRkEsaUIiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Y29tcG9uZW50IDppcz1cImZvb1wiICNkZWZhdWx0PVwie2Jhcn1cIj5cbiAgPGNvbXBvbmVudCA6aXM9XCJiYXJcIiAjZGVmYXVsdD1cIntiYXp9XCI+XG4gICAgPGNvbXBvbmVudCA6aXM9XCJiYXpcIj5cbiAgICAgIDx0ZW1wbGF0ZSAjb3RoZXI9XCJ7IGZvbyB9XCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiZm9vXCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGJhciB9XCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG4iXX0=
```

## 15.1. Dynamic component with v-for 

```vue-html
<component :is="bar" v-for="bar of bars">
  <component :is="bar" #default="{baz}">
    <component :is="baz[bar]" v-for="item of baz" >
      <component :is="item" />
    </component>
  </component>
</component>
```

```tsx
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
            <DynamicComponent0>
              {VueDX.internal.checkSlots(DynamicComponent0, {
                default: () => {
                  return (
                    <DynamicComponent1>
                      {VueDX.internal.checkSlots(DynamicComponent1, {
                        default: ({baz}) => {
                          return (
                            <>
                              {
                                VueDX.internal.renderList(baz, (item) => {
                                  const DynamicComponent3 = item;
                                  return (
                                    <DynamicComponent2>
                                      {VueDX.internal.checkSlots(DynamicComponent2, {
                                        default: () => {
                                          return (
                                            <DynamicComponent3 />
                                          )
                                        },
                                      })}
                                    </DynamicComponent2>
                                  )
                                })
                              }
                            </>
                          )
                        },
                      })}
                    </DynamicComponent1>
                  )
                },
              })}
            </DynamicComponent0>
          )
        })
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudHN4Il0sIm5hbWVzIjpbImJhcnMiLCJjb21wb25lbnQiLCJkZWZhdWx0IiwiYmF6Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OzRCQUFnQixHOzs7OztrQ0FBbUJBLEksR0FBUCxHO29DQUNWLEc7O2FBRGpCQyxpQjs7OztxQkFDRUEsaUI7O3dCQUFxQkMsTyxHQUFTLEs7Ozs7MERBQ1lDLEcsR0FBUixJOzREQUNmLEk7O3FDQURqQkYsaUI7Ozs7NkNBQ0VBLGlCOzs7O3NDQUNEQSxpQjs7Ozs7Ozs7c0JBQ0ZBLGlCOzs7O2NBQ0ZBLGlCIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGNvbXBvbmVudCA6aXM9XCJiYXJcIiB2LWZvcj1cImJhciBvZiBiYXJzXCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6W2Jhcl1cIiB2LWZvcj1cIml0ZW0gb2YgYmF6XCIgPlxuICAgICAgPGNvbXBvbmVudCA6aXM9XCJpdGVtXCIgLz5cbiAgICA8L2NvbXBvbmVudD5cbiAgPC9jb21wb25lbnQ+XG48L2NvbXBvbmVudD5cbiJdfQ==
```

