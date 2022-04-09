# Baseline Spec

## 1.1. element > single

```vue-html
<div>foo</div>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div>
      foo
    </div>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"div">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1LFwiZVwiOjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEwLFwiZVwiOjEzfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRztNQUFJQyxHO01BQUtDLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2PmZvbzwvZGl2PlxuIl19
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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const HelloWorld = VueDX.internal.resolveComponent(__VueDX_components, "HelloWorld" as const, "HelloWorld" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let name = __VueDX_ctx.name;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <HelloWorld n />
      <span>
        Name: 
        {VueDX.internal.checkInterpolation(name +)}
      </span>
      <p {...({  })}>
      </p>
      {
        (/*<vuedx:missingExpression>*/)
          ? <p>
            </p>
          : null
      }
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let name = __VueDX_ctx.name;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjEsXCJlXCI6MTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNyxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTgsXCJlXCI6MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjksXCJlXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo0MyxcImVcIjo0N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDksXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUwLFwiZVwiOjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MixcImVcIjo2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyOX0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2NSxcImVcIjo4MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjc4LFwiZVwiOjc5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsVSxDQUFXQyxDO01BQ1pDLENBQUNDLEk7UUFBS0MsTTtTQUFNQyxrQ0FBR0MsTTtRQUFXQyxJO01BQzFCQyxDQUFDQyxDO1FBQVlDLEM7O1NBQ0pDLDZCO1lBQVRDLENBQUNDLEM7Y0FBWUMsQyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxIZWxsb1dvcmxkIG4gLz5cbjxzcGFuPk5hbWU6IHt7IG5hbWUgKyB9fTwvc3Bhbj5cbjxwIHYtYmluZDo+PC9wPlxuPHAgdi1pZj1cIlwiPjwvcD5cbiJdfQ==
```

## 1.3. element > components

```vue-html
<FooBar>foo</FooBar>
<Foo.Bar>foo</Foo.Bar>
<Foo.Bar.Baz>foo</Foo.Bar.Baz>
<fooBar>foo</fooBar>
<foo-bar>foo</foo-bar>
<unknown-element>foo</unknown-element>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const FooBar = VueDX.internal.resolveComponent(__VueDX_components, "FooBar" as const, "FooBar" as const);
const Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
const UnknownElement = VueDX.internal.resolveComponent(__VueDX_components, "unknown-element" as const, "UnknownElement" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <FooBar>
        {VueDX.internal.checkSlots(FooBar, {
          default: () => {
            return (
              <>
                foo
              </>
            ) as any
          },
        })}
      </FooBar>
      <Foo.Bar>
        {VueDX.internal.checkSlots(Foo.Bar, {
          default: () => {
            return (
              <>
                foo
              </>
            ) as any
          },
        })}
      </Foo.Bar>
      <Foo.Bar.Baz>
        {VueDX.internal.checkSlots(Foo.Bar.Baz, {
          default: () => {
            return (
              <>
                foo
              </>
            ) as any
          },
        })}
      </Foo.Bar.Baz>
      <FooBar>
        {VueDX.internal.checkSlots(FooBar, {
          default: () => {
            return (
              <>
                foo
              </>
            ) as any
          },
        })}
      </FooBar>
      <FooBar>
        {VueDX.internal.checkSlots(FooBar, {
          default: () => {
            return (
              <>
                foo
              </>
            ) as any
          },
        })}
      </FooBar>
      <UnknownElement>
        {VueDX.internal.checkSlots(UnknownElement, {
          default: () => {
            return (
              <>
                foo
              </>
            ) as any
          },
        })}
      </UnknownElement>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MCxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxMyxcImVcIjoxOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6NDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6NDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozMCxcImVcIjozM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MzUsXCJlXCI6NDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ0LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MjZ9LFwic1wiOntcInNcIjo0NCxcImVcIjo3NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjU3LFwiZVwiOjYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6NjIsXCJlXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjk1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo3NixcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjk1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo3NixcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6ODMsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjg4LFwiZVwiOjk0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo5NixcImVcIjoxMTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjk3LFwiZVwiOjEwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjk2LFwiZVwiOjExOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6OTcsXCJlXCI6MTA0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMDUsXCJlXCI6MTA4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxMTAsXCJlXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMTksXCJlXCI6MTU3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE0fSxcInNcIjp7XCJzXCI6MTIwLFwiZVwiOjEzNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjExOSxcImVcIjoxNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEzNixcImVcIjoxMzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTR9LFwic1wiOntcInNcIjoxNDEsXCJlXCI6MTU2fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLE07U0FBREMsMEJBQUNELE07VUFBQUUsUzs7O2dCQUFPQyxHOzs7OztRQUFLQyxNO01BQ2JDLENBQUNDLE87U0FBREMsMEJBQUNELE87VUFBQUUsUzs7O2dCQUFRQyxHOzs7OztRQUFLQyxPO01BQ2RDLENBQUNDLFc7U0FBREMsMEJBQUNELFc7VUFBQUUsUzs7O2dCQUFZQyxHOzs7OztRQUFLQyxXO01BQ2xCQyxDQUFDQyxNO1NBQURDLDBCQUFDRCxNO1VBQUFFLFM7OztnQkFBT0MsRzs7Ozs7UUFBS0MsTTtNQUNiQyxDQUFDQyxNO1NBQURDLDBCQUFDRCxNO1VBQUFFLFM7OztnQkFBUUMsRzs7Ozs7UUFBS0MsTTtNQUNkQyxDQUFDQyxjO1NBQURDLDBCQUFDRCxjO1VBQUFFLFM7OztnQkFBZ0JDLEc7Ozs7O1FBQUtDLGMiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Rm9vQmFyPmZvbzwvRm9vQmFyPlxuPEZvby5CYXI+Zm9vPC9Gb28uQmFyPlxuPEZvby5CYXIuQmF6PmZvbzwvRm9vLkJhci5CYXo+XG48Zm9vQmFyPmZvbzwvZm9vQmFyPlxuPGZvby1iYXI+Zm9vPC9mb28tYmFyPlxuPHVua25vd24tZWxlbWVudD5mb288L3Vua25vd24tZWxlbWVudD5cbiJdfQ==
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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let props = __VueDX_ctx.props;
  let value = __VueDX_ctx.value;
  let dynamic = __VueDX_ctx.dynamic;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div>
      {VueDX.internal.renderSlot(__VueDX_ctx.$slots, "default", { }) ?? <>
        fallback content
      </>
      }
      <span>
        {VueDX.internal.renderSlot(__VueDX_ctx.$slots, "other", { ...(props), "myProp": value, }) ?? <>
          fallback content
        </>
        }
      </span>
      {VueDX.internal.renderSlot(__VueDX_ctx.$slots, "another", { ...(props), "myProp": value, })}
      {VueDX.internal.renderSlot(__VueDX_ctx.$slots, dynamic, { ...(props), "myProp": value, })}
    </div>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let props = __VueDX_ctx.props;
  let value = __VueDX_ctx.value;
  let dynamic = __VueDX_ctx.dynamic;
  return VueDX.internal.flat([
    { "default": { } },
    { "other": { ...(props), "myProp": value, } },
    { "another": { ...(props), "myProp": value, } },
    { [dynamic]: { ...(props), "myProp": value, } },
  ])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"div">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjE0LFwiZVwiOjMwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MCxcImVcIjoxMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQ1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo2MixcImVcIjo2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NzgsXCJlXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjg2LFwiZVwiOjkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo5NCxcImVcIjo5OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEwMSxcImVcIjoxMTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjE0OCxcImVcIjoxNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjE2NixcImVcIjoxNzF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjE3NCxcImVcIjoxODB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjE4MixcImVcIjoxODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIxMixcImVcIjoyMTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjIyOSxcImVcIjoyMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjIzNyxcImVcIjoyNDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjI0NSxcImVcIjoyNTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1NyxcImVcIjoyNjB9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxHOztRQUNPQyxnQjs7O01BQ05DLENBQUNDLEk7dURBQ1lDLE8sUUFBZ0JDLEssR0FBUUMsUSxFQUFRQyxLO1VBQU9DLGdCOzs7UUFDbERDLEk7cURBQ1NDLFMsUUFBa0JDLEssR0FBUUMsUSxFQUFRQyxLO3FEQUNoQ0MsTyxRQUFpQkMsSyxHQUFRQyxRLEVBQVFDLEs7TUFDOUNDLEc7Ozs7Ozs7Ozs7cUJBSjZCYixLLEdBQVFDLFEsRUFBUUMsSzt1QkFFaEJJLEssR0FBUUMsUSxFQUFRQyxLO09BQ2hDQyxPLFNBQWlCQyxLLEdBQVFDLFEsRUFBUUMsSyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXY+XG4gIDxzbG90PmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDxzcGFuPlxuICAgIDxzbG90IG5hbWU9XCJvdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cInZhbHVlXCI+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPC9zcGFuPlxuICA8c2xvdCBuYW1lPVwiYW5vdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cInZhbHVlXCI+PC9zbG90PlxuICA8c2xvdCA6bmFtZT1cImR5bmFtaWNcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiIC8+XG48L2Rpdj5cbiJdfQ==
```

## 1.5. element > slots + v-for

```vue-html
<div v-for="items of list">
  <slot>fallback content</slot>
  <span v-for="item of items">
    <slot name="other" v-bind="props" :myProp="item">fallback content</slot>
  </span>
</div>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let list = __VueDX_ctx.list;
  let props = __VueDX_ctx.props;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        VueDX.internal.renderList(list, (items) => {
          return (
            <div>
              {VueDX.internal.renderSlot(__VueDX_ctx.$slots, "default", { }) ?? <>
                fallback content
              </>
              }
              {
                VueDX.internal.renderList(items, (item) => {
                  return (
                    <span>
                      {VueDX.internal.renderSlot(__VueDX_ctx.$slots, "other", { ...(props), "myProp": item, }) ?? <>
                        fallback content
                      </>
                      }
                    </span>
                  )
                })
              }
            </div>
          )
        })
      }
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let list = __VueDX_ctx.list;
  let props = __VueDX_ctx.props;
  return VueDX.internal.flat([
    VueDX.internal.renderList(list, (items) => VueDX.internal.flat((
      { "default": { } }
    ))),
    VueDX.internal.renderList(items, (item) => VueDX.internal.flat((
      VueDX.internal.renderList(list, (items) => VueDX.internal.flat((
        { "other": { ...(props), "myProp": item, } }
      )))
    ))),
  ])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6MjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjE4NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6MzYsXCJlXCI6NTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjgzLFwiZVwiOjg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo3NSxcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjIsXCJlXCI6MTc3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo2MyxcImVcIjo2N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTA2LFwiZVwiOjExM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTIyLFwiZVwiOjEyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo4fSxcInNcIjp7XCJzXCI6MTMwLFwiZVwiOjEzNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTM4LFwiZVwiOjE0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjE0NCxcImVcIjoxNjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjE3MixcImVcIjoxNzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE4MCxcImVcIjoxODN9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQXFCQSxJLEdBQVRDLEs7O1lBQVpDLENBQUNDLEc7O2dCQUNPQyxnQjs7OzswQ0FDZUMsSyxHQUFSQyxJOztvQkFBYkMsQ0FBQ0MsSTtxRUFDWUMsTyxRQUFnQkMsSyxHQUFRQyxRLEVBQVFDLEk7d0JBQU1DLGdCOzs7c0JBQ2pEQyxJOzs7O2NBQ0ZDLEc7Ozs7Ozs7Ozs7Ozs4QkFMbUJmLEksR0FBVEMsSzs7OzhCQUVXSSxLLEdBQVJDLEk7Z0NBRk1OLEksR0FBVEMsSzt5QkFHbUJTLEssR0FBUUMsUSxFQUFRQyxJIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWZvcj1cIml0ZW1zIG9mIGxpc3RcIj5cbiAgPHNsb3Q+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPHNwYW4gdi1mb3I9XCJpdGVtIG9mIGl0ZW1zXCI+XG4gICAgPHNsb3QgbmFtZT1cIm90aGVyXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwiaXRlbVwiPmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19
```

## 2.1. v-bind 

```vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let myInput = __VueDX_ctx.myInput;
  let customName = __VueDX_ctx.customName;
  let rest = __VueDX_ctx.rest;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let myInput = __VueDX_ctx.myInput;
  let customName = __VueDX_ctx.customName;
  let rest = __VueDX_ctx.rest;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo2NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo4LFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxNSxcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjI1LFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjozOSxcImVcIjo0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6NTYsXCJlXCI6NjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjY1LFwiZVwiOjEyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6Njl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjcxLFwiZVwiOjc2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo3OCxcImVcIjo4NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjg4LFwiZVwiOjEwMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAyLFwiZVwiOjEwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTE5LFwiZVwiOjEyM319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsSztRQUFPQyxLLEVBQU9DLE87O1dBQVVDLFUsR0FBY0MsTztjQUFpQkMsSTs7TUFDeERDLENBQUNDLEc7UUFBS0MsSyxFQUFPQyxPOztXQUFVQyxVLEdBQWNDLE87Y0FBaUJDLEkiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aW5wdXQgOnZhbHVlPVwibXlJbnB1dFwiIDpbY3VzdG9tTmFtZV09XCJteUlucHV0XCIgdi1iaW5kPVwicmVzdFwiIC8+XG48Rm9vIDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuIl19
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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let onFocus = __VueDX_ctx.onFocus;
  let value = __VueDX_ctx.value;
  let eventName = __VueDX_ctx.eventName;
  let events = __VueDX_ctx.events;
  let fnName = __VueDX_ctx.fnName;
  let callMyFn = __VueDX_ctx.callMyFn;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input onFocus={VueDX.internal.checkOnDirective("input" as const, "focus" as const, onFocus, {})}  />
      <input onUpdate:value={VueDX.internal.checkOnDirective("input" as const, "update:value" as const, ($event) => {if ($event.target == null || $event.currentTarget == null || !VueDX.internal.checkHTMLElementType("input", $event.currentTarget)) throw new Error("Guard: event.target, event.currentTarget")
          value = $event
        }, {})}  />
      <input
        onEventName={VueDX.internal.union(
          VueDX.internal.checkOnDirective("input" as const, "event-name" as const, undefined, {}),
          VueDX.internal.checkOnDirective("input" as const, "eventName" as const, undefined, {}),
        )}
        {...VueDX.internal.checkOnDirective("input" as const, eventName, undefined, {})}
        {...VueDX.internal.checkOnDirective("input" as const, undefined, events, {})}
       />
      <input
        onKeydown={VueDX.internal.union(
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, fnName, {}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, ($event) => {if ($event.target == null || $event.currentTarget == null || !VueDX.internal.checkHTMLElementType("input", $event.currentTarget)) throw new Error("Guard: event.target, event.currentTarget")
            callMyFn($event)
          }, {"left": true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, $event => callMyFn($event), {"shift": true, "left": true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, ($event) => callMyFn($event), {"shift": true, "right": true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, () => callMyFn($event), {"shift": true, "down": true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, function myFunction($event) {
    callMyFn($event)
  }, {"shift": true, "up": true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, function myFunction() {
    callMyFn($event)
  }, {"ctrl": true, "up": true}),
        )}
       />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let onFocus = __VueDX_ctx.onFocus;
  let value = __VueDX_ctx.value;
  let eventName = __VueDX_ctx.eventName;
  let events = __VueDX_ctx.events;
  let fnName = __VueDX_ctx.fnName;
  let callMyFn = __VueDX_ctx.callMyFn;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo4LFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6NyxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTUsXCJlXCI6MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI3LFwiZVwiOjY3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoyOCxcImVcIjozM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjM1LFwiZVwiOjQ3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6MzQsXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjoyOCxcImVcIjozM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjQ5LFwiZVwiOjYzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2OCxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjY5LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6NzYsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo3NSxcImVcIjo4Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjY5LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjEyfSxcInNcIjp7XCJzXCI6NzYsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo4NyxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjg4LFwiZVwiOjk3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6OTgsXCJlXCI6MTEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo5OSxcImVcIjoxMTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjoxMTEsXCJlXCI6MTI0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxMTcsXCJlXCI6MTIzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMjgsXCJlXCI6NDkxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxMjksXCJlXCI6MTM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxMzgsXCJlXCI6MTQ1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6MTM3LFwiZVwiOjE1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjE0NyxcImVcIjoxNTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTg5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxNTgsXCJlXCI6MTY1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6MTcyLFwiZVwiOjE4OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTY2LFwiZVwiOjE3MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MTY2LFwiZVwiOjE3MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjE5MixcImVcIjoyNDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjE5MyxcImVcIjoyMDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MjZ9LFwic1wiOntcInNcIjoyMTMsXCJlXCI6MjM5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyMDEsXCJlXCI6MjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoyMDEsXCJlXCI6MjA2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoyMDcsXCJlXCI6MjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6MjQzLFwiZVwiOjI5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MjQ0LFwiZVwiOjI1MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyOH0sXCJzXCI6e1wic1wiOjI2NSxcImVcIjoyOTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI1MixcImVcIjoyNjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjI1MixcImVcIjoyNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjI1OCxcImVcIjoyNjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjoyOTcsXCJlXCI6MzQxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyOTgsXCJlXCI6MzA1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjIyfSxcInNcIjp7XCJzXCI6MzE4LFwiZVwiOjM0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzA2LFwiZVwiOjMxNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MzA2LFwiZVwiOjMxMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MzEyLFwiZVwiOjMxNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjM0NCxcImVcIjo0MTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjM0NSxcImVcIjozNTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NTR9LFwic1wiOntcInNcIjozNjMsXCJlXCI6NDE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNTMsXCJlXCI6MzYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjozNTMsXCJlXCI6MzU4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjozNTksXCJlXCI6MzYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6NDIxLFwiZVwiOjQ4OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NDIyLFwiZVwiOjQyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0OH0sXCJzXCI6e1wic1wiOjQzOSxcImVcIjo0ODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQzMCxcImVcIjo0Mzd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjQzMCxcImVcIjo0MzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjQzNSxcImVcIjo0Mzd9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsSyxDQUFPQyxPLEVBQURDLCtCLENBQU5DLGdCLEVBQU9GLE8sV0FBT0csTztNQUNmQyxDQUFDQyxLLENBQU9DLGMsRUFBREMsK0IsQ0FBTkMsZ0IsRUFBT0YsYztVQUFjRyxjOztNQUN0QkMsQ0FBQ0MsSztRQUFPQyxXO1VBQURDLCtCLENBQU5DLGdCLEVBQU9DLFk7VUFBV0MsK0IsQ0FBbEJGLGdCLEVBQW1CRyxXOztZQUFVQywrQixDQUE3QkosZ0IsRUFBOEJLLFM7WUFBWUMsK0IsQ0FBMUNOLGdCLGFBQWdETyxNOztNQUNqREMsQ0FBQ0MsSztRQUNFQyxTO1VBQURDLCtCLENBRERDLGdCLEVBQ0VGLFMsV0FBU0csTTtVQUNWQywrQixDQUZERixnQixFQUVFRyxTO1lBQWNDLGdCO2FBQU5DLENBQUFDLE07VUFDVEMsK0IsQ0FIRFAsZ0IsRUFHRVEsUyxXQUFvQkMsMEIsRUFBWkMsQ0FBQUMsTyxRQUFNQyxNO1VBQ2ZDLCtCLENBSkRiLGdCLEVBSUVjLFMsV0FBcUJDLDRCLEVBQWJDLENBQUFDLE8sUUFBTUMsTztVQUNmQywrQixDQUxEbkIsZ0IsRUFLRW9CLFMsV0FBb0JDLHNCLEVBQVpDLENBQUFDLE8sUUFBTUMsTTtVQUNmQywrQixDQU5EekIsZ0IsRUFNRTBCLFMsV0FBa0JDO0FBQUFBO0FBQUFBLEcsRUFBVkMsQ0FBQUMsTyxRQUFNQyxJO1VBR2ZDLCtCLENBVEQvQixnQixFQVNFZ0MsUyxXQUFpQkM7QUFBQUE7QUFBQUEsRyxFQUFUQyxDQUFBQyxNLFFBQUtDLEkiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aW5wdXQgQGZvY3VzPVwib25Gb2N1c1wiIC8+XG48aW5wdXQgQHVwZGF0ZTp2YWx1ZT1cInZhbHVlID0gJGV2ZW50XCIgLz5cbjxpbnB1dCBAZXZlbnQtbmFtZSBAZXZlbnROYW1lIEBbZXZlbnROYW1lXSB2LW9uPVwiZXZlbnRzXCIgLz5cbjxpbnB1dFxuICBAa2V5ZG93bj1cImZuTmFtZVwiXG4gIEBrZXlkb3duLmxlZnQ9XCJjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQubGVmdD1cIiRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQucmlnaHQ9XCIoJGV2ZW50KSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQuZG93bj1cIigpID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbiAgQGtleWRvd24uY3RybC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbi8+XG4iXX0=
```

## 4.1. v-on multiple events 

```vue-html
<div @click="onClick" @hover="onHover" @press="onPress" />
<div @click="onClick" @hover="onHover" @press="onPress" />
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let onClick = __VueDX_ctx.onClick;
  let onHover = __VueDX_ctx.onHover;
  let onPress = __VueDX_ctx.onPress;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <div
        onClick={VueDX.internal.checkOnDirective("div" as const, "click" as const, onClick, {})}
        onHover={VueDX.internal.checkOnDirective("div" as const, "hover" as const, onHover, {})}
        onPress={VueDX.internal.checkOnDirective("div" as const, "press" as const, onPress, {})}
       />
      <div
        onClick={VueDX.internal.checkOnDirective("div" as const, "click" as const, onClick, {})}
        onHover={VueDX.internal.checkOnDirective("div" as const, "hover" as const, onHover, {})}
        onPress={VueDX.internal.checkOnDirective("div" as const, "press" as const, onPress, {})}
       />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let onClick = __VueDX_ctx.onClick;
  let onHover = __VueDX_ctx.onHover;
  let onPress = __VueDX_ctx.onPress;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo2LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6NSxcImVcIjoyMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTMsXCJlXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjI4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6MjIsXCJlXCI6Mzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjMwLFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo0MCxcImVcIjo0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjM5LFwiZVwiOjU1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo0NyxcImVcIjo1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTksXCJlXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo2MCxcImVcIjo2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6NjUsXCJlXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo2NCxcImVcIjo4MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjYwLFwiZVwiOjYzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo3MixcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6ODIsXCJlXCI6ODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo4MSxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6ODksXCJlXCI6OTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjk5LFwiZVwiOjEwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjExNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTA2LFwiZVwiOjExM319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxHO1FBQUtDLE8sRUFBREMsK0IsQ0FBSkMsYyxFQUFLRixPLFdBQU9HLE87UUFBVUMsTyxFQUFEQywrQixDQUFyQkgsYyxFQUFzQkUsTyxXQUFPRSxPO1FBQVVDLE8sRUFBREMsK0IsQ0FBdENOLGMsRUFBdUNLLE8sV0FBT0UsTzs7TUFDL0NDLENBQUNDLEc7UUFBS0MsTyxFQUFEQywrQixDQUFKQyxjLEVBQUtGLE8sV0FBT0csTztRQUFVQyxPLEVBQURDLCtCLENBQXJCSCxjLEVBQXNCRSxPLFdBQU9FLE87UUFBVUMsTyxFQUFEQywrQixDQUF0Q04sYyxFQUF1Q0ssTyxXQUFPRSxPIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiBAY2xpY2s9XCJvbkNsaWNrXCIgQGhvdmVyPVwib25Ib3ZlclwiIEBwcmVzcz1cIm9uUHJlc3NcIiAvPlxuPGRpdiBAY2xpY2s9XCJvbkNsaWNrXCIgQGhvdmVyPVwib25Ib3ZlclwiIEBwcmVzcz1cIm9uUHJlc3NcIiAvPlxuIl19
```

## 5.1. v-if/v-else/v-else-if > single if statement

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX_ctx.awesome;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let awesome = __VueDX_ctx.awesome;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAsXCJlXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjozNixcImVcIjozOH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1NBQVVBLE87WUFBVkMsQ0FBQ0MsRTtjQUFrQkMsZTtjQUFpQkMsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG4iXX0=
```

## 5.2. v-if/v-else/v-else-if > if/else

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX_ctx.awesome;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let awesome = __VueDX_ctx.awesome;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAsXCJlXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjozNixcImVcIjozOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDAsXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjh9LFwic1wiOntcInNcIjo1MSxcImVcIjo1OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6NjEsXCJlXCI6NjN9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztTQUFVQSxPO1lBQVZDLENBQUNDLEU7Y0FBa0JDLGU7Y0FBaUJDLEU7WUFDcENDLENBQUNDLEU7Y0FBVUMsUTtjQUFVQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG4iXX0=
```

## 5.3. v-if/v-else/v-else-if > if on fragment

```vue-html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX_ctx.ok;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let ok = __VueDX_ctx.ok;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoyNCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjcsXCJlXCI6MzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjM0LFwiZVwiOjM2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MCxcImVcIjo1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDEsXCJlXCI6NDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjo0MyxcImVcIjo1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTYsXCJlXCI6NTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYxLFwiZVwiOjc5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MixcImVcIjo2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjY0LFwiZVwiOjc1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo3NyxcImVcIjo3OH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1NBQWdCQSxFOztjQUNkQyxDQUFDQyxFO2dCQUFHQyxLO2dCQUFPQyxFO2NBQ1hDLENBQUNDLEM7Z0JBQUVDLFc7Z0JBQWFDLEM7Y0FDaEJDLENBQUNDLEM7Z0JBQUVDLFc7Z0JBQWFDLEMiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgdi1pZj1cIm9rXCI+XG4gIDxoMT5UaXRsZTwvaDE+XG4gIDxwPlBhcmFncmFwaCAxPC9wPlxuICA8cD5QYXJhZ3JhcGggMjwvcD5cbjwvdGVtcGxhdGU+XG4iXX0=
```

## 5.4. v-if/v-else/v-else-if > if/else/if chain

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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX_ctx.type;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let type = __VueDX_ctx.type;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMn0sXCJzXCI6e1wic1wiOjExLFwiZVwiOjIzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjM2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1LFwiZVwiOjMwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozMixcImVcIjozNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMn0sXCJzXCI6e1wic1wiOjUzLFwiZVwiOjY1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNyxcImVcIjo3OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzgsXCJlXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjY3LFwiZVwiOjcyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo3NCxcImVcIjo3N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMn0sXCJzXCI6e1wic1wiOjk1LFwiZVwiOjEwN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NzksXCJlXCI6MTIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4MCxcImVcIjo4M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTA5LFwiZVwiOjExNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTE2LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTIxLFwiZVwiOjE1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTIyLFwiZVwiOjEyNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjEzMyxcImVcIjoxNDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE0OCxcImVcIjoxNTF9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztTQUFXQSxZO1lBQVhDLENBQUNDLEc7Y0FBd0JDLEc7Y0FFdkJDLEc7YUFDY0MsWTtZQUFoQkMsQ0FBQ0MsRztjQUE2QkMsRztjQUU1QkMsRzthQUNjQyxZO1lBQWhCQyxDQUFDQyxHO2NBQTZCQyxHO2NBRTVCQyxHO1lBQ0ZDLENBQUNDLEc7Y0FBV0MsVztjQUVWQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWlmPVwidHlwZSA9PT0gJ0EnXCI+XG4gIEFcbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJ0eXBlID09PSAnQidcIj5cbiAgQlxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdDJ1wiPlxuICBDXG48L2Rpdj5cbjxkaXYgdi1lbHNlPlxuICBOb3QgQS9CL0NcbjwvZGl2PlxuIl19
```

## 5.5. v-if/v-else/v-else-if > no if

```vue-html
<h1 v-else>Vue is awesome!</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1>
      Vue is awesome!
    </h1>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"h1">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjI4LFwiZVwiOjMwfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRTtNQUFVQyxlO01BQWlCQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtZWxzZT5WdWUgaXMgYXdlc29tZSE8L2gxPlxuIl19
```

## 5.6. v-if/v-else/v-else-if > if condition

```vue-html
<h1 v-if>Vue is awesome!</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6OSxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MjYsXCJlXCI6Mjh9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O1lBQUFBLENBQUNDLEU7Y0FBUUMsZTtjQUFpQkMsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWlmPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG4iXX0=
```

## 5.7. v-if/v-else/v-else-if > else condition

```vue-html
<h1 v-else="ok">Vue is awesome!</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX_ctx.ok;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1>
      Vue is awesome!
    </h1>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let ok = __VueDX_ctx.ok;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"h1">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MzF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjMzLFwiZVwiOjM1fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEU7TUFBZUMsZTtNQUFpQkMsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWVsc2U9XCJva1wiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG4iXX0=
```

## 5.8. v-if/v-else/v-else-if > elif no if

```vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX_ctx.awesome;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let awesome = __VueDX_ctx.awesome;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MjQsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NSxcImVcIjo2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6NDYsXCJlXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjU2LFwiZVwiOjY0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo2NixcImVcIjo2OH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsRTtRQUF1QkMsZTtRQUFpQkMsRTtNQUN6Q0MsQ0FBQ0MsRTtRQUFVQyxRO1FBQVVDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1lbHNlLWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG48aDEgdi1lbHNlPk9oIG5vIPCfmKI8L2gxPlxuIl19
```

## 5.9. v-if/v-else/v-else-if > nested if/else chains

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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  let bar = __VueDX_ctx.bar;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let foo = __VueDX_ctx.foo;
  let bar = __VueDX_ctx.bar;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzAsXCJlXCI6MzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjQxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMCxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzcsXCJlXCI6NDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjYwLFwiZVwiOjYzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NCxcImVcIjo3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjY3LFwiZVwiOjcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo3NCxcImVcIjo5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NzUsXCJlXCI6Nzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjg4LFwiZVwiOjkxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo5NSxcImVcIjo5OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTE2LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTAwLFwiZVwiOjIwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTAxLFwiZVwiOjEwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTM1LFwiZVwiOjEzOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTI0LFwiZVwiOjE0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTI1LFwiZVwiOjEyOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTQyLFwiZVwiOjE0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTY1LFwiZVwiOjE2OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTQ5LFwiZVwiOjE3Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTUwLFwiZVwiOjE1M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcyLFwiZVwiOjE3NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTc5LFwiZVwiOjE5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTgwLFwiZVwiOjE4M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTkzLFwiZVwiOjE5Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjAwLFwiZVwiOjIwM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjA1LFwiZVwiOjMwMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjA2LFwiZVwiOjIwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjMxLFwiZVwiOjIzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjIwLFwiZVwiOjI0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjIxLFwiZVwiOjIyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjM4LFwiZVwiOjI0MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjYxLFwiZVwiOjI2NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjQ1LFwiZVwiOjI3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ2LFwiZVwiOjI0OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjY4LFwiZVwiOjI3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6Mjc1LFwiZVwiOjI5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjc2LFwiZVwiOjI3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjg5LFwiZVwiOjI5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjk2LFwiZVwiOjI5OX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztTQUFXQSxHO1lBQVhDLENBQUNDLEc7O2lCQUNZQyxHO29CQUFYQyxDQUFDQyxHO3NCQUFpQkMsRztxQkFDRkMsRztvQkFBaEJDLENBQUNDLEc7c0JBQXNCQyxHO29CQUN2QkMsQ0FBQ0MsRztzQkFBYUMsRzs7Y0FDZEMsRzthQUNjQyxHO1lBQWhCQyxDQUFDQyxHOztpQkFDWUMsRztvQkFBWEMsQ0FBQ0MsRztzQkFBaUJDLEc7cUJBQ0ZDLEc7b0JBQWhCQyxDQUFDQyxHO3NCQUFzQkMsRztvQkFDdkJDLENBQUNDLEc7c0JBQWFDLEc7O2NBQ2RDLEc7WUFDRkMsQ0FBQ0MsRzs7aUJBQ1lDLEc7b0JBQVhDLENBQUNDLEc7c0JBQWlCQyxHO3FCQUNGQyxHO29CQUFoQkMsQ0FBQ0MsRztzQkFBc0JDLEc7b0JBQ3ZCQyxDQUFDQyxHO3NCQUFhQyxHOztjQUNkQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWlmPVwiZm9vXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj5cbiAgPGRpdiB2LWlmPVwiZm9vXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlPjwvZGl2PlxuPC9kaXY+XG48ZGl2IHYtZWxzZT5cbiAgPGRpdiB2LWlmPVwiZm9vXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlPjwvZGl2PlxuPC9kaXY+XG4iXX0=
```

## 6.1. v-text 

```vue-html
<span v-text="msg"></span>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let msg = __VueDX_ctx.msg;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <span data-vuedx-directive-text={VueDX.internal.checkDirective("text" as const, "span" as const, undefined, msg, {})}>
    </span>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let msg = __VueDX_ctx.msg;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"span">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MSxcImVcIjo1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6NixcImVcIjoxOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjYsXCJlXCI6MTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTV9LFwic1wiOntcInNcIjoxLFwiZVwiOjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE0LFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoyMSxcImVcIjoyNX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxJLDRCQUFLQyw2QixDQUFBQyxlLEVBQUxDLGUsYUFBYUMsRztNQUFPQyxJIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHNwYW4gdi10ZXh0PVwibXNnXCI+PC9zcGFuPlxuIl19
```

## 7.1. v-html 

```vue-html
<div v-html="html"></div>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let html = __VueDX_ctx.html;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div data-vuedx-directive-html={VueDX.internal.checkDirective("html" as const, "div" as const, undefined, html, {})}>
    </div>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let html = __VueDX_ctx.html;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"div">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6NSxcImVcIjoxOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjUsXCJlXCI6MTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTR9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjEzLFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMSxcImVcIjoyNH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxHLDRCQUFJQyw2QixDQUFBQyxlLEVBQUpDLGMsYUFBWUMsSTtNQUFRQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWh0bWw9XCJodG1sXCI+PC9kaXY+XG4iXX0=
```

## 8.1. v-show 

```vue-html
<h1 v-show="ok">Hello!</h1>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX_ctx.ok;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1 data-vuedx-directive-show={VueDX.internal.checkDirective("show" as const, "h1" as const, undefined, ok, {})}>
      Hello!
    </h1>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let ok = __VueDX_ctx.ok;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"h1">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6NCxcImVcIjoxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjQsXCJlXCI6MTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTN9LFwic1wiOntcInNcIjoxLFwiZVwiOjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNixcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MjQsXCJlXCI6MjZ9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRSw0QkFBR0MsNkIsQ0FBQUMsZSxFQUFIQyxhLGFBQVdDLEU7TUFBSUMsTTtNQUFRQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtc2hvdz1cIm9rXCI+SGVsbG8hPC9oMT5cbiJdfQ==
```

## 9.1. v-model > input

```vue-html
<input v-model="foo" />
<input type="number" v-model="foo" />
<input type="tel" v-model="foo" />
<input type="checkbox" v-model="foo" />
<input type="radio" v-model="foo" />
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {isAssignable: () => {foo=(null as any)},} as const)} />
      <input type="number" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {type: "number" as const,isAssignable: () => {foo=(null as any)},} as const)} />
      <input type="tel" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {type: "tel" as const,isAssignable: () => {foo=(null as any)},} as const)} />
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},} as const)} />
      <input type="radio" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {type: "radio" as const,isAssignable: () => {foo=(null as any)},} as const)} />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let foo = __VueDX_ctx.foo;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NyxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI0LFwiZVwiOjYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoyNSxcImVcIjozMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MzEsXCJlXCI6MzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjM2LFwiZVwiOjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjoyNSxcImVcIjozMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NTQsXCJlXCI6NTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYyLFwiZVwiOjk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo2MyxcImVcIjo2OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6NjksXCJlXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjc5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6ODAsXCJlXCI6OTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjo2MyxcImVcIjo2OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6ODksXCJlXCI6OTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjk3LFwiZVwiOjEzNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6OTgsXCJlXCI6MTAzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxMDQsXCJlXCI6MTA4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6MTA5LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjo5OCxcImVcIjoxMDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEzNyxcImVcIjoxNzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEzOCxcImVcIjoxNDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjE0NCxcImVcIjoxNDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjE0OSxcImVcIjoxNTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6MTM4LFwiZVwiOjE0M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTY2LFwiZVwiOjE2OX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsSyw2QkFBTUMsa0MsQ0FBTkMsZ0IsYUFBZUMsRyw0QkFBQUEsRztNQUNoQkMsQ0FBQ0MsSyxDQUFNQyxJLENBQUtDLFEsNkJBQVNDLGtDLENBQXBCQyxnQixhQUE2QkMsRyxhQUFsQkgsUSwrQkFBa0JHLEc7TUFDOUJDLENBQUNDLEssQ0FBTUMsSSxDQUFLQyxLLDZCQUFNQyxrQyxDQUFqQkMsZ0IsYUFBMEJDLEcsYUFBZkgsSywrQkFBZUcsRztNQUMzQkMsQ0FBQ0MsSyxDQUFNQyxJLENBQUtDLFUsNkJBQVdDLGtDLENBQXRCQyxnQixhQUErQkMsRyxhQUFwQkgsVSwrQkFBb0JHLEc7TUFDaENDLENBQUNDLEssQ0FBTUMsSSxDQUFLQyxPLDZCQUFRQyxrQyxDQUFuQkMsZ0IsYUFBNEJDLEcsYUFBakJILE8sK0JBQWlCRyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGlucHV0IHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwidGVsXCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cInJhZGlvXCIgdi1tb2RlbD1cImZvb1wiIC8+XG4iXX0=
```

## 9.2. v-model > select/textarea

```vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirective("select" as const, undefined, foo, {}, {isAssignable: () => {foo=(null as any)},} as const)}>
        <option value={foo}>
          {VueDX.internal.checkInterpolation(foo)}
        </option>
      </select>
      <textarea data-vuedx-directive-model={VueDX.internal.checkModelDirective("textarea" as const, undefined, foo, {}, {isAssignable: () => {foo=(null as any)},} as const)} />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let foo = __VueDX_ctx.foo;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6OCxcImVcIjoyMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxN30sXCJzXCI6e1wic1wiOjEsXCJlXCI6N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcsXCJlXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI1LFwiZVwiOjYyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoyNixcImVcIjozMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MzQsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NDYsXCJlXCI6NTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQ4LFwiZVwiOjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo1NSxcImVcIjo2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NjUsXCJlXCI6NzF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjczLFwiZVwiOjk5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjh9LFwic1wiOntcInNcIjo3NCxcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjgzLFwiZVwiOjk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE5fSxcInNcIjp7XCJzXCI6NzQsXCJlXCI6ODJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjkyLFwiZVwiOjk1fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxNLDZCQUFPQyxrQyxDQUFQQyxpQixhQUFnQkMsRyw0QkFBQUEsRztRQUNmQyxDQUFDQyxNLENBQVFDLEssRUFBT0MsRztXQUFLQyxrQ0FBRUMsRztVQUFPQyxNO1FBQzlCQyxNO01BQ0ZDLENBQUNDLFEsNkJBQVNDLGtDLENBQVRDLG1CLGFBQWtCQyxHLDRCQUFBQSxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gOnZhbHVlPVwiZm9vXCI+e3tmb299fTwvb3B0aW9uPlxuPC9zZWxlY3Q+XG48dGV4dGFyZWEgdi1tb2RlbD1cImZvb1wiIC8+XG4iXX0=
```

## 9.3. v-model > checkbox

```vue-html
<input type="checkbox" v-model="foo" />
<input type="checkbox" v-model="foo" true-value="yes" />
<input type="checkbox" v-model="foo" false-value="no" />
<input type="checkbox" v-model="foo" :true-value="yes" :false-value="no" />
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  let yes = __VueDX_ctx.yes;
  let no = __VueDX_ctx.no;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},} as const)} />
      <input
        type="checkbox"
        true-value="yes"
        data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},checkbox: ["yes"] as const,} as const)} />
      <input
        type="checkbox"
        false-value="no"
        data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},checkbox: ["no"] as const,} as const)} />
      <input
        type="checkbox"
        true-value={yes}
        false-value={no}
        data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},checkbox: [yes, no] as const,} as const)} />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let foo = __VueDX_ctx.foo;
  let yes = __VueDX_ctx.yes;
  let no = __VueDX_ctx.no;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo3LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6MTIsXCJlXCI6MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoyMyxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzIsXCJlXCI6MzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQwLFwiZVwiOjk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo0MSxcImVcIjo0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6NDcsXCJlXCI6NTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTB9LFwic1wiOntcInNcIjo1MixcImVcIjo2Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjc3LFwiZVwiOjg3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo4OCxcImVcIjo5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjYzLFwiZVwiOjc2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6NDEsXCJlXCI6NDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjcyLFwiZVwiOjc1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo5NyxcImVcIjoxNTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjEwM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTA0LFwiZVwiOjEwOH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjEwOSxcImVcIjoxMTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjoxMzQsXCJlXCI6MTQ1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxNDYsXCJlXCI6MTUwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTIwLFwiZVwiOjEzM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjEwM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTI5LFwiZVwiOjEzMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTU0LFwiZVwiOjIyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTU1LFwiZVwiOjE2MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTYxLFwiZVwiOjE2NX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjE2NixcImVcIjoxNzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTB9LFwic1wiOntcInNcIjoxOTIsXCJlXCI6MjAyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMDQsXCJlXCI6MjA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6MjEwLFwiZVwiOjIyMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MjIzLFwiZVwiOjIyNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjE3NyxcImVcIjoxOTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjoxNTUsXCJlXCI6MTYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxODYsXCJlXCI6MTg5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEssQ0FBTUMsSSxDQUFLQyxVLDZCQUFXQyxrQyxDQUF0QkMsZ0IsYUFBK0JDLEcsYUFBcEJILFUsK0JBQW9CRyxHO01BQ2hDQyxDQUFDQyxLO1FBQU1DLEksQ0FBS0MsVTtRQUF5QkMsVSxDQUFXQyxLO29DQUF6QkMsa0MsQ0FBdEJDLGdCLGFBQStCQyxHLGFBQXBCTCxVLCtCQUFvQkssRztNQUNoQ0MsQ0FBQ0MsSztRQUFNQyxJLENBQUtDLFU7UUFBeUJDLFcsQ0FBWUMsSTtvQ0FBMUJDLGtDLENBQXRCQyxnQixhQUErQkMsRyxhQUFwQkwsVSwrQkFBb0JLLEc7TUFDaENDLENBQUNDLEs7UUFBTUMsSSxDQUFLQyxVO1FBQTBCQyxVLEVBQVlDLEc7UUFBTUMsVyxFQUFhQyxFO29DQUE5Q0Msa0MsQ0FBdEJDLGdCLGFBQStCQyxHLGFBQXBCUCxVLCtCQUFvQk8sRywyQkFBa0JMLEcsRUFBbUJFLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIHRydWUtdmFsdWU9XCJ5ZXNcIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiBmYWxzZS12YWx1ZT1cIm5vXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgOnRydWUtdmFsdWU9XCJ5ZXNcIiA6ZmFsc2UtdmFsdWU9XCJub1wiIC8+XG4iXX0=
```

## 9.4. v-model > select

```vue-html
<select v-model="foo">
  <option value="foo">foo</option>
  <option value="bar">bar</option>
  <option :value="baz">baz</option>
</select>

<select v-model="foo">
  <option value="foo">foo</option>
  <option v-for="val of vals" :value="val">{{ val }}</option>
  <option value="bar">bar</option>
</select>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  let baz = __VueDX_ctx.baz;
  let vals = __VueDX_ctx.vals;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirective("select" as const, undefined, foo, {}, {isAssignable: () => {foo=(null as any)},} as const)}>
        <option value="foo">
          foo
        </option>
        <option value="bar">
          bar
        </option>
        <option value={baz}>
          baz
        </option>
      </select>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirective("select" as const, undefined, foo, {}, {isAssignable: () => {foo=(null as any)},} as const)}>
        <option value="foo">
          foo
        </option>
        {
          VueDX.internal.renderList(vals, (val) => {
            return (
              <option value={val}>
                {VueDX.internal.checkInterpolation(val)}
              </option>
            )
          })
        }
        <option value="bar">
          bar
        </option>
      </select>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let foo = __VueDX_ctx.foo;
  let baz = __VueDX_ctx.baz;
  let vals = __VueDX_ctx.vals;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxMzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjgsXCJlXCI6MjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTd9LFwic1wiOntcInNcIjoxLFwiZVwiOjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE3LFwiZVwiOjIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyNSxcImVcIjo1N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MjYsXCJlXCI6MzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjMzLFwiZVwiOjM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjozOSxcImVcIjo0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjUwLFwiZVwiOjU2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MCxcImVcIjo5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NjEsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjY4LFwiZVwiOjczfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo3NCxcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6ODAsXCJlXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjg1LFwiZVwiOjkxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo5NSxcImVcIjoxMjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjk2LFwiZVwiOjEwMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTA0LFwiZVwiOjEwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTExLFwiZVwiOjExNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTE2LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MTIxLFwiZVwiOjEyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MTMxLFwiZVwiOjEzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTQwLFwiZVwiOjMwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MTQxLFwiZVwiOjE0N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjE0OCxcImVcIjoxNjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTd9LFwic1wiOntcInNcIjoxNDEsXCJlXCI6MTQ3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNjUsXCJlXCI6MTk3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTcyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxNzMsXCJlXCI6MTc4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxNzksXCJlXCI6MTg0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxODUsXCJlXCI6MTg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxOTAsXCJlXCI6MTk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoyMjIsXCJlXCI6MjI2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMTUsXCJlXCI6MjE4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyMDAsXCJlXCI6MjU5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoyMDEsXCJlXCI6MjA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoyMjksXCJlXCI6MjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMzYsXCJlXCI6MjM5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjQxLFwiZVwiOjI1MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ0LFwiZVwiOjI0N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MjUyLFwiZVwiOjI1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjYyLFwiZVwiOjI5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MjYzLFwiZVwiOjI2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjcwLFwiZVwiOjI3NX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6Mjc2LFwiZVwiOjI4MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjgyLFwiZVwiOjI4NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6Mjg3LFwiZVwiOjI5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6Mjk3LFwiZVwiOjMwM319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxNLDZCQUFPQyxrQyxDQUFQQyxpQixhQUFnQkMsRyw0QkFBQUEsRztRQUNmQyxDQUFDQyxNLENBQU9DLEssQ0FBTUMsSztVQUFNQyxHO1VBQUtDLE07UUFDekJDLENBQUNDLE0sQ0FBT0MsSyxDQUFNQyxLO1VBQU1DLEc7VUFBS0MsTTtRQUN6QkMsQ0FBQ0MsTSxDQUFRQyxLLEVBQU9DLEc7VUFBS0MsRztVQUFLQyxNO1FBQzFCQyxNO01BRUZDLENBQUNDLE0sNkJBQU9DLGtDLENBQVBDLGlCLGFBQWdCQyxHLDRCQUFBQSxHO1FBQ2ZDLENBQUNDLE0sQ0FBT0MsSyxDQUFNQyxLO1VBQU1DLEc7VUFBS0MsTTs7b0NBQ0hDLEksR0FBUEMsRzs7Y0FBZkMsQ0FBQ0MsTSxDQUE0QkMsSyxFQUFPQyxHO2lCQUFLQyxrQ0FBR0MsRztnQkFBUUMsTTs7OztRQUNwREMsQ0FBQ0MsTSxDQUFPQyxLLENBQU1DLEs7VUFBTUMsRztVQUFLQyxNO1FBQ3pCQyxNIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gdmFsdWU9XCJmb29cIj5mb288L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImJhclwiPmJhcjwvb3B0aW9uPlxuICA8b3B0aW9uIDp2YWx1ZT1cImJhelwiPmJhejwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIHZhbHVlPVwiZm9vXCI+Zm9vPC9vcHRpb24+XG4gIDxvcHRpb24gdi1mb3I9XCJ2YWwgb2YgdmFsc1wiIDp2YWx1ZT1cInZhbFwiPnt7IHZhbCB9fTwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XG48L3NlbGVjdD5cbiJdfQ==
```

## 10.1. v-slot > Invalid

```vue-html
<Foo>
  <template #foo>A</template>
  <template #bar="{bar}">{{bar}}</template>
  <template>Invalid</template>
</Foo>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <Foo>
      {VueDX.internal.checkSlots(Foo, {
        "foo": () => {
          return (
            <>
              <>
                A
              </>
            </>
          ) as any
        },
        "bar": ({bar}) => {
          return (
            <>
              <>
                {VueDX.internal.checkInterpolation(bar)}
              </>
            </>
          ) as any
        },
        [Symbol.for('VueDX:UnknownSlot')]: () => {
          return (
            <>
              Invalid
            </>
          )
        },
      })}
    </Foo>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"Foo">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxMTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxOSxcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OCxcImVcIjozNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjMsXCJlXCI6MjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjQ5LFwiZVwiOjUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo1NCxcImVcIjo1OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzgsXCJlXCI6Nzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2MSxcImVcIjo2OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjMsXCJlXCI6NjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NDJ9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjgyLFwiZVwiOjExMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6OTIsXCJlXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjExMyxcImVcIjoxMTZ9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRztPQUFEQywwQkFBQ0QsRztRQUNZRSxLOzs7Y0FBWEMsQztnQkFBZUMsQzs7Ozs7UUFDSkMsSyxHQUFLQyxLOzs7Y0FBaEJDLEM7aUJBQXVCQyxrQ0FBRUMsRzs7Ozs7UUFGMUJDLDBDOztZQUdDQyxDO2NBQVVDLE87Ozs7O01BQ1ZDLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Rm9vPlxuICA8dGVtcGxhdGUgI2Zvbz5BPC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNiYXI9XCJ7YmFyfVwiPnt7YmFyfX08L3RlbXBsYXRlPlxuICA8dGVtcGxhdGU+SW52YWxpZDwvdGVtcGxhdGU+XG48L0Zvbz5cbiJdfQ==
```

## 10.2. v-slot > use slots

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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const FooBar = VueDX.internal.resolveComponent(__VueDX_components, "FooBar" as const, "FooBar" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <FooBar>
        {VueDX.internal.checkSlots(FooBar, {
          default: () => {
            return (
              <>
                content
              </>
            ) as any
          },
        })}
      </FooBar>
      <FooBar>
        {VueDX.internal.checkSlots(FooBar, {
          "default": ({foo}) => {
            return (
              <>
                {VueDX.internal.checkInterpolation(foo)}
              </>
            ) as any
          },
        })}
      </FooBar>
      <FooBar>
        {VueDX.internal.checkSlots(FooBar, {
          "other": ({foo}) => {
            return (
              <>
                {VueDX.internal.checkInterpolation(foo)}
              </>
            ) as any
          },
        })}
      </FooBar>
      <FooBar>
        {VueDX.internal.checkSlots(FooBar, {
          "default": () => {
            return (
              <>
                <>
                  content
                </>
              </>
            ) as any
          },
          "other": ({foo}) => {
            return (
              <>
                <>
                  {VueDX.internal.checkInterpolation(foo)}
                </>
              </>
            ) as any
          },
          "another": (foo) => {
            return (
              <>
                <>
                  {
                    (foo)
                      ? <div>
                          {VueDX.internal.checkInterpolation(foo.bar)}
                        </div>
                      : null
                  }
                </>
              </>
            ) as any
          },
          [Symbol.for('VueDX:UnknownSlot')]: () => {
            return (
              <div>
                extranous
              </div>
            )
          },
        })}
      </FooBar>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo4LFwiZVwiOjE1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNyxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6Njh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjI2LFwiZVwiOjMyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6Njh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjM0LFwiZVwiOjQxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo0MyxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjUwLFwiZVwiOjU5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1MyxcImVcIjo1Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NjEsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjY5LFwiZVwiOjExMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NzAsXCJlXCI6NzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MjZ9LFwic1wiOntcInNcIjo2OSxcImVcIjoxMTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjc4LFwiZVwiOjgzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo4NSxcImVcIjo5MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjkyLFwiZVwiOjEwMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6OTUsXCJlXCI6OTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjEwMyxcImVcIjoxMDl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjExMSxcImVcIjozMTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjExMixcImVcIjoxMTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MjZ9LFwic1wiOntcInNcIjoxMTEsXCJlXCI6MzE4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxMzMsXCJlXCI6MTQwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMjIsXCJlXCI6MTU5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxNDEsXCJlXCI6MTQ4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxNzMsXCJlXCI6MTc4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxODAsXCJlXCI6MTg1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNjIsXCJlXCI6MjA1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTg3LFwiZVwiOjE5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTg5LFwiZVwiOjE5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MjE5LFwiZVwiOjIyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjI4LFwiZVwiOjIzMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjA4LFwiZVwiOjI4NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ5LFwiZVwiOjI1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjM4LFwiZVwiOjI3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjM5LFwiZVwiOjI0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjI1NCxcImVcIjoyNjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjI1NixcImVcIjoyNjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI2NyxcImVcIjoyNzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NDJ9LFwic1wiOntcInNcIjoxMTIsXCJlXCI6MTE4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyODgsXCJlXCI6MzA4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyODksXCJlXCI6MjkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyOTMsXCJlXCI6MzAyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozMDQsXCJlXCI6MzA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjozMTEsXCJlXCI6MzE3fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxNO1NBQURDLDBCQUFDRCxNO1VBQUFFLFM7OztnQkFBT0MsTzs7Ozs7UUFBU0MsTTtNQUNqQkMsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUFRRSxTLEdBQVNDLEs7OztpQkFBT0Msa0NBQUdDLEc7Ozs7O1FBQVFDLE07TUFDcENDLENBQUNDLE07U0FBREMsMEJBQUNELE07VUFBUUUsTyxHQUFPQyxLOzs7aUJBQU9DLGtDQUFHQyxHOzs7OztRQUFRQyxNO01BQ2xDQyxDQUFDQyxNO1NBQURDLDBCQUFDRCxNO1VBQ1lFLFM7OztnQkFBWEMsQztrQkFBbUJDLE87Ozs7O1VBQ1JDLE8sR0FBT0MsSzs7O2dCQUFsQkMsQzttQkFBeUJDLGtDQUFFQyxHOzs7OztVQUNoQkMsUyxHQUFTQyxHOzs7Z0JBQXBCQyxDOztxQkFDYUMsRzt3QkFBWEMsQ0FBQ0MsRzsyQkFBZUMsa0NBQUVDLE87MEJBQVdDLEc7Ozs7Ozs7VUFKaENDLDBDOztjQU1DQyxDQUFDQyxHO2dCQUFJQyxTO2dCQUFXQyxHOzs7O1FBQ2hCQyxNIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPEZvb0Jhcj5jb250ZW50PC9Gb29CYXI+XG48Rm9vQmFyICNkZWZhdWx0PVwie2Zvb31cIj57eyBmb28gfX08L0Zvb0Jhcj5cbjxGb29CYXIgI290aGVyPVwie2Zvb31cIj57eyBmb28gfX08L0Zvb0Jhcj5cbjxGb29CYXI+XG4gIDx0ZW1wbGF0ZSAjZGVmYXVsdD5jb250ZW50PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNvdGhlcj1cIntmb299XCI+e3tmb299fTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYW5vdGhlcj1cImZvb1wiPlxuICAgIDxkaXYgdi1pZj1cImZvb1wiPnt7Zm9vLmJhcn19PC9kaXY+XG4gIDwvdGVtcGxhdGU+XG4gIDxkaXY+ZXh0cmFub3VzPC9kaXY+XG48L0Zvb0Jhcj5cbiJdfQ==
```

## 11.1. v-pre 

```vue-html
<pre v-pre>{{ interpolation }}</pre>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <pre>
      {"{{ interpolation }}"}
    </pre>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"pre">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjIzfSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjM1fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRztNQUFVQyx1QjtNQUFxQkMsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxwcmUgdi1wcmU+e3sgaW50ZXJwb2xhdGlvbiB9fTwvcHJlPlxuIl19
```

## 12.1. v-once 

```vue-html
<section v-once>{{ largeText }}</section>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let largeText = __VueDX_ctx.largeText;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <section data-vuedx-directive-once={VueDX.internal.checkDirective("once" as const, "section" as const, undefined, undefined, {})}>
      {VueDX.internal.checkInterpolation(largeText)}
    </section>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let largeText = __VueDX_ctx.largeText;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"section">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo0MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MSxcImVcIjo4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6OSxcImVcIjoxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjksXCJlXCI6MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoxLFwiZVwiOjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxNixcImVcIjozMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTksXCJlXCI6Mjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjMzLFwiZVwiOjQwfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLE8sNEJBQVFDLDZCLENBQUFDLGUsRUFBUkMsa0I7T0FBZUMsa0NBQUdDLFM7TUFBY0MsTyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxzZWN0aW9uIHYtb25jZT57eyBsYXJnZVRleHQgfX08L3NlY3Rpb24+XG4iXX0=
```

## 13.1. v-is 

```vue-html
<table>
  <tbody>
    <tr v-is="MyComponent"></tr>
  </tbody>
</table>
```

```tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let MyComponent = __VueDX_ctx.MyComponent;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const _DynamicComponent0 = VueDX.internal.resolveComponent(__VueDX_components, MyComponent);

  return (
    <table>
      <tbody>
        <_DynamicComponent0>
          {VueDX.internal.checkSlots(_DynamicComponent0, {
            default: () => {
              return (
                <>
                </>
              ) as any
            },
          })}
        </_DynamicComponent0>
      </tbody>
    </table>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let MyComponent = __VueDX_ctx.MyComponent;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"table">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxLFwiZVwiOjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEwLFwiZVwiOjYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxMSxcImVcIjoxNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjIsXCJlXCI6NTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoyMyxcImVcIjozMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjUwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMyxcImVcIjozMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjQ3LFwiZVwiOjUwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo1NSxcImVcIjo2MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NjQsXCJlXCI6Njl9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O2lGQUVjQSxXOzs7SUFGZEMsQ0FBQ0MsSztNQUNDQyxDQUFDQyxLO1FBQ0NDLENBQUNDLGtCO1dBQURDLDBCQUFDRCxrQjtZQUFBRSxTOzs7Ozs7O1VBQXdCQyxrQjtRQUN6QkMsSztNQUNGQyxLIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRhYmxlPlxuICA8dGJvZHk+XG4gICAgPHRyIHYtaXM9XCJNeUNvbXBvbmVudFwiPjwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuIl19
```

## 14.1. v-for 

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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let num = __VueDX_ctx.num;
  let str = __VueDX_ctx.str;
  let arr = __VueDX_ctx.arr;
  let obj = __VueDX_ctx.obj;
  let itr = __VueDX_ctx.itr;
  let boo = __VueDX_ctx.boo;
  let sym = __VueDX_ctx.sym;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        VueDX.internal.renderList(num, (n) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(n)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(num, (n, i) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(n)}
              :
              {VueDX.internal.checkInterpolation(i)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(str, (s) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(s)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(str, (s, i) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(s)}
              :
              {VueDX.internal.checkInterpolation(i)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, (a) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(a)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ value }) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(value)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ foo }) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(arr)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, (a, i) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(a)}
              :
              {VueDX.internal.checkInterpolation(i)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ value }, i) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(value)}
              :
              {VueDX.internal.checkInterpolation(i)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(o)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o, k) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(o)}
              :
              {VueDX.internal.checkInterpolation(k)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o, k, i) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(o)}
              :
              {VueDX.internal.checkInterpolation(k)}
              :
              {VueDX.internal.checkInterpolation(i)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(itr, (t) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(t)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(boo, (b) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(b)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(sym, (s) => {
          return (
            <div>
              {VueDX.internal.checkInterpolation(s)}
            </div>
          )
        })
      }
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let num = __VueDX_ctx.num;
  let str = __VueDX_ctx.str;
  let arr = __VueDX_ctx.arr;
  let obj = __VueDX_ctx.obj;
  let itr = __VueDX_ctx.itr;
  let boo = __VueDX_ctx.boo;
  let sym = __VueDX_ctx.sym;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcsXCJlXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoyMixcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMxLFwiZVwiOjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1OCxcImVcIjo2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDksXCJlXCI6NTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUyLFwiZVwiOjUzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNixcImVcIjo4NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzcsXCJlXCI6NDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2MyxcImVcIjo3MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjcwLFwiZVwiOjcxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NzEsXCJlXCI6Nzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjc1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4MCxcImVcIjo4M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTAyLFwiZVwiOjEwNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OTcsXCJlXCI6OTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjg1LFwiZVwiOjEyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6ODYsXCJlXCI6ODl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxMDcsXCJlXCI6MTE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMTAsXCJlXCI6MTExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMTYsXCJlXCI6MTE5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNDMsXCJlXCI6MTQ2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMzQsXCJlXCI6MTM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMzcsXCJlXCI6MTM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMjEsXCJlXCI6MTY5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMjIsXCJlXCI6MTI1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTQ4LFwiZVwiOjE1NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTUxLFwiZVwiOjE1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTU1LFwiZVwiOjE1Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjE1NixcImVcIjoxNjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE1OSxcImVcIjoxNjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE2NSxcImVcIjoxNjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE4NyxcImVcIjoxOTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE4MixcImVcIjoxODN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE3MCxcImVcIjoyMDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE3MSxcImVcIjoxNzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxOTIsXCJlXCI6MTk5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxOTUsXCJlXCI6MTk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMDEsXCJlXCI6MjA0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMzEsXCJlXCI6MjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMTgsXCJlXCI6MjI3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyMDYsXCJlXCI6MjUzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMDcsXCJlXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjM2LFwiZVwiOjI0N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjM5LFwiZVwiOjI0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ5LFwiZVwiOjI1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjc3LFwiZVwiOjI4MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjY2LFwiZVwiOjI3M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjU0LFwiZVwiOjI5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjU1LFwiZVwiOjI1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjI4MixcImVcIjoyOTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI4NSxcImVcIjoyODh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI5MyxcImVcIjoyOTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMyMCxcImVcIjozMjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjMxMSxcImVcIjozMTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjMxNCxcImVcIjozMTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI5OCxcImVcIjozNDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI5OSxcImVcIjozMDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjozMjUsXCJlXCI6MzMyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozMjgsXCJlXCI6MzI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozMzIsXCJlXCI6MzMzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MzMzLFwiZVwiOjM0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzM2LFwiZVwiOjMzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzQyLFwiZVwiOjM0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mzc3LFwiZVwiOjM4MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MzYwLFwiZVwiOjM2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzcxLFwiZVwiOjM3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzQ3LFwiZVwiOjQwN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzQ4LFwiZVwiOjM1MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjM4MixcImVcIjozOTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjM4NSxcImVcIjozOTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjM5MyxcImVcIjozOTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjozOTQsXCJlXCI6NDAxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozOTcsXCJlXCI6Mzk4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0MDMsXCJlXCI6NDA2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0MjUsXCJlXCI6NDI4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MjAsXCJlXCI6NDIxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MDgsXCJlXCI6NDQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0MDksXCJlXCI6NDEyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NDMwLFwiZVwiOjQzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDMzLFwiZVwiOjQzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDM5LFwiZVwiOjQ0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDY2LFwiZVwiOjQ2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDU3LFwiZVwiOjQ1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDYwLFwiZVwiOjQ2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDQ0LFwiZVwiOjQ5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDQ1LFwiZVwiOjQ0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjQ3MSxcImVcIjo0Nzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ3NCxcImVcIjo0NzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ3OCxcImVcIjo0Nzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo0NzksXCJlXCI6NDg2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0ODIsXCJlXCI6NDgzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0ODgsXCJlXCI6NDkxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1MTgsXCJlXCI6NTIxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1MDYsXCJlXCI6NTA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1MDksXCJlXCI6NTEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1MTIsXCJlXCI6NTEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0OTMsXCJlXCI6NTUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0OTQsXCJlXCI6NDk3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NTIzLFwiZVwiOjUzMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTI2LFwiZVwiOjUyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTMwLFwiZVwiOjUzMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjUzMSxcImVcIjo1Mzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUzNCxcImVcIjo1MzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUzOCxcImVcIjo1Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo1MzksXCJlXCI6NTQ2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1NDIsXCJlXCI6NTQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1NDgsXCJlXCI6NTUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1NzAsXCJlXCI6NTczfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1NjUsXCJlXCI6NTY2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1NTMsXCJlXCI6NTg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1NTQsXCJlXCI6NTU3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NTc1LFwiZVwiOjU4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTc4LFwiZVwiOjU3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NTg0LFwiZVwiOjU4N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjA2LFwiZVwiOjYwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjAxLFwiZVwiOjYwMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTg5LFwiZVwiOjYyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NTkwLFwiZVwiOjU5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjYxMSxcImVcIjo2MTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYxNCxcImVcIjo2MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjYyMCxcImVcIjo2MjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjY0MixcImVcIjo2NDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYzNyxcImVcIjo2Mzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYyNSxcImVcIjo2NjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjYyNixcImVcIjo2Mjl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2NDcsXCJlXCI6NjU0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2NTAsXCJlXCI6NjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo2NTYsXCJlXCI6NjU5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQWlCQSxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUNUQyxHLEdBQVRDLEMsRUFBR0MsQzs7WUFBaEJDLENBQUNDLEc7ZUFBMEJDLGtDQUFHQyxDO2NBQUlDLEM7ZUFBQ0Msa0NBQUdDLEM7Y0FBTUMsRzs7Ozs7a0NBQzNCQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUNUQyxHLEdBQVRDLEMsRUFBR0MsQzs7WUFBaEJDLENBQUNDLEc7ZUFBMEJDLGtDQUFHQyxDO2NBQUlDLEM7ZUFBQ0Msa0NBQUdDLEM7Y0FBTUMsRzs7Ozs7a0NBQzNCQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUNOQyxHLEdBQWJDLFM7O1lBQVpDLENBQUNDLEc7ZUFBNkJDLGtDQUFHQyxLO2NBQVVDLEc7Ozs7O2tDQUNwQkMsRyxHQUFYQyxPOztZQUFaQyxDQUFDQyxHO2VBQTJCQyxrQ0FBR0MsRztjQUFRQyxHOzs7OztrQ0FDakJDLEcsR0FBVEMsQyxFQUFHQyxDOztZQUFoQkMsQ0FBQ0MsRztlQUEwQkMsa0NBQUdDLEM7Y0FBSUMsQztlQUFDQyxrQ0FBR0MsQztjQUFNQyxHOzs7OztrQ0FDZEMsRyxHQUFqQkMsUyxFQUFXQyxDOztZQUF4QkMsQ0FBQ0MsRztlQUFrQ0Msa0NBQUdDLEs7Y0FBUUMsQztlQUFDQyxrQ0FBR0MsQztjQUFNQyxHOzs7OztrQ0FDdkNDLEcsR0FBTEMsQzs7WUFBWkMsQ0FBQ0MsRztlQUFxQkMsa0NBQUdDLEM7Y0FBTUMsRzs7Ozs7a0NBQ1RDLEcsR0FBVEMsQyxFQUFHQyxDOztZQUFoQkMsQ0FBQ0MsRztlQUEwQkMsa0NBQUdDLEM7Y0FBSUMsQztlQUFDQyxrQ0FBR0MsQztjQUFNQyxHOzs7OztrQ0FDbkJDLEcsR0FBWkMsQyxFQUFHQyxDLEVBQUdDLEM7O1lBQW5CQyxDQUFDQyxHO2VBQTZCQyxrQ0FBR0MsQztjQUFJQyxDO2VBQUNDLGtDQUFHQyxDO2NBQUlDLEM7ZUFBQ0Msa0NBQUdDLEM7Y0FBTUMsRzs7Ozs7a0NBQ3RDQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUNkQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUNkQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDO2NBQU1DLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IHYtZm9yPVwibiBvZiBudW1cIj57eyBuIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG4sIGkpIG9mIG51bVwiPnt7IG4gfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInMgb2Ygc3RyXCI+e3sgcyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihzLCBpKSBvZiBzdHJcIj57eyBzIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJhIG9mIGFyclwiPnt7IGEgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ7IHZhbHVlIH0gb2YgYXJyXCI+e3sgdmFsdWUgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ7IGZvbyB9IG9mIGFyclwiPnt7IGFyciB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihhLCBpKSBvZiBhcnJcIj57eyBhIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoeyB2YWx1ZSB9LCBpKSBvZiBhcnJcIj57eyB2YWx1ZSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwibyBvZiBvYmpcIj57eyBvIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG8sIGspIG9mIG9ialwiPnt7IG8gfX06e3sgayB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrLCBpKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInQgb2YgaXRyXCI+e3sgdCB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cImIgb2YgYm9vXCI+e3sgYiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInMgb2Ygc3ltXCI+e3sgcyB9fTwvZGl2PlxuIl19
```

## 15.1. Nested Dynamic components 

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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const _DynamicComponent0 = VueDX.internal.resolveComponent(__VueDX_components, foo);

  return (
    <_DynamicComponent0>
      {VueDX.internal.checkSlots(_DynamicComponent0, {
        "default": ({bar}) => {
          /*<vuedx:templateGlobals>*/
          const _DynamicComponent1 = VueDX.internal.resolveComponent(__VueDX_components, bar);
          /*</vuedx:templateGlobals>*/
          return (
            <_DynamicComponent1>
              {VueDX.internal.checkSlots(_DynamicComponent1, {
                "default": ({baz}) => {
                  /*<vuedx:templateGlobals>*/
                  const _DynamicComponent2 = VueDX.internal.resolveComponent(__VueDX_components, baz);
                  /*</vuedx:templateGlobals>*/
                  return (
                    <_DynamicComponent2>
                      {VueDX.internal.checkSlots(_DynamicComponent2, {
                        "other": ({ foo }) => {
                          /*<vuedx:templateGlobals>*/
                          const _DynamicComponent3 = VueDX.internal.resolveComponent(__VueDX_components, foo);
                          /*</vuedx:templateGlobals>*/
                          return (
                            <>
                              <>
                                <_DynamicComponent3 />
                              </>
                            </>
                          ) as any
                        },
                        "default": ({ bar }) => {
                          /*<vuedx:templateGlobals>*/
                          const _DynamicComponent4 = VueDX.internal.resolveComponent(__VueDX_components, bar);
                          /*</vuedx:templateGlobals>*/
                          return (
                            <>
                              <>
                                <_DynamicComponent4 />
                              </>
                            </>
                          ) as any
                        },
                      })}
                    </_DynamicComponent2>
                  ) as any
                },
              })}
            </_DynamicComponent1>
          ) as any
        },
      })}
    </_DynamicComponent0>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let foo = __VueDX_ctx.foo;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"component">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MzIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MSxcImVcIjoxMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MzIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMixcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MzEsXCJlXCI6MzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjU3LFwiZVwiOjYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MSxcImVcIjozMDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo0MixcImVcIjo1MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjMwN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NjMsXCJlXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjcyLFwiZVwiOjc3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMDAsXCJlXCI6MTAzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo4NCxcImVcIjoyOTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo4NSxcImVcIjo5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjg0LFwiZVwiOjI5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTIzLFwiZVwiOjEyOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTMwLFwiZVwiOjEzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTY0LFwiZVwiOjE2N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTEyLFwiZVwiOjE4OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTQ4LFwiZVwiOjE3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjE0OSxcImVcIjoxNTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjIwNyxcImVcIjoyMTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIxNixcImVcIjoyMjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1MCxcImVcIjoyNTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE5NixcImVcIjoyNzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIzNCxcImVcIjoyNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoyMzUsXCJlXCI6MjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MjgyLFwiZVwiOjI5MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjI5NyxcImVcIjozMDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjozMTAsXCJlXCI6MzE5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztpRkFBZ0JBLEc7OztJQUFoQkMsQ0FBQ0Msa0I7T0FBREMsMEJBQUNELGtCO1FBQXFCRSxTLEdBQVNDLEs7O3lGQUNiQyxHOzs7WUFBaEJDLENBQUNDLGtCO2VBQURDLDBCQUFDRCxrQjtnQkFBcUJFLFMsR0FBU0MsSzs7aUdBQ2JDLEc7OztvQkFBaEJDLENBQUNDLGtCO3VCQUFEQywwQkFBQ0Qsa0I7d0JBQ1lFLE8sR0FBT0MsTzs7eUdBQ0FDLEc7Ozs7OEJBRGxCQyxDO2dDQUNFQyxDQUFDQyxrQjs7Ozs7d0JBRVFDLFMsR0FBU0MsTzs7eUdBQ0ZDLEc7Ozs7OEJBRGxCQyxDO2dDQUNFQyxDQUFDQyxrQjs7Ozs7O3NCQUVIQyxrQjs7OztjQUNGQyxrQjs7OztNQUNGQyxrQiIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxjb21wb25lbnQgOmlzPVwiZm9vXCIgI2RlZmF1bHQ9XCJ7YmFyfVwiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJhelwiPlxuICAgICAgPHRlbXBsYXRlICNvdGhlcj1cInsgZm9vIH1cIj5cbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJmb29cIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgYmFyIH1cIj5cbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJiYXJcIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2NvbXBvbmVudD5cbiAgPC9jb21wb25lbnQ+XG48L2NvbXBvbmVudD5cbiJdfQ==
```

## 16.1. Dynamic component with v-for 

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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let bars = __VueDX_ctx.bars;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const _DynamicComponent0 = VueDX.internal.resolveComponent(__VueDX_components, bar);

  return (
    <>
      {
        VueDX.internal.renderList(bars, (bar) => {
          /*<vuedx:templateGlobals>*/
          const _DynamicComponent1 = VueDX.internal.resolveComponent(__VueDX_components, bar);
          /*</vuedx:templateGlobals>*/
          return (
            <_DynamicComponent0>
              {VueDX.internal.checkSlots(_DynamicComponent0, {
                default: () => {
                  return (
                    <_DynamicComponent1>
                      {VueDX.internal.checkSlots(_DynamicComponent1, {
                        "default": ({baz}) => {
                          /*<vuedx:templateGlobals>*/
                          const _DynamicComponent2 = VueDX.internal.resolveComponent(__VueDX_components, baz[bar]);
                          /*</vuedx:templateGlobals>*/
                          return (
                            <>
                              {
                                VueDX.internal.renderList(baz, (item) => {
                                  /*<vuedx:templateGlobals>*/
                                  const _DynamicComponent3 = VueDX.internal.resolveComponent(__VueDX_components, item);
                                  /*</vuedx:templateGlobals>*/
                                  return (
                                    <_DynamicComponent2>
                                      {VueDX.internal.checkSlots(_DynamicComponent2, {
                                        default: () => {
                                          return (
                                            <_DynamicComponent3 />
                                          ) as any
                                        },
                                      })}
                                    </_DynamicComponent2>
                                  )
                                })
                              }
                            </>
                          ) as any
                        },
                      })}
                    </_DynamicComponent1>
                  ) as any
                },
              })}
            </_DynamicComponent0>
          )
        })
      }
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let bars = __VueDX_ctx.bars;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjM1LFwiZVwiOjM5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyOCxcImVcIjozMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjAsXCJlXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MSxcImVcIjoxMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxLFwiZVwiOjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NCxcImVcIjoxOTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo0NSxcImVcIjo1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjQ0LFwiZVwiOjE5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjgwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjh9LFwic1wiOntcInNcIjoxMDMsXCJlXCI6MTExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMjgsXCJlXCI6MTMxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxMjAsXCJlXCI6MTI0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo4NyxcImVcIjoxODJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo4OCxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjg3LFwiZVwiOjE4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6ODgsXCJlXCI6OTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE0MSxcImVcIjoxNjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoxNDIsXCJlXCI6MTUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MTcyLFwiZVwiOjE4MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjE4NyxcImVcIjoxOTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoyMDAsXCJlXCI6MjA5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztpRkFBZ0JBLEc7Ozs7O2tDQUFtQkMsSSxHQUFQQyxHOzt5RkFDVkMsRzs7O1lBRGxCQyxDQUFDQyxrQjtlQUFEQywwQkFBQ0Qsa0I7Z0JBQUFFLFM7O29CQUNDQyxDQUFDQyxrQjt1QkFBREMsMEJBQUNELGtCO3dCQUFxQkUsUyxHQUFTQyxLOzt5R0FDYkMsUTs7Ozs7MERBQXlCQyxHLEdBQVJDLEk7O2lIQUNmQyxJOzs7b0NBRGxCQyxDQUFDQyxrQjt1Q0FBREMsMEJBQUNELGtCO3dDQUFBRSxTOzs0Q0FDQ0MsQ0FBQ0Msa0I7Ozs7c0NBQ0RDLGtCOzs7Ozs7OztzQkFDRkMsa0I7Ozs7Y0FDRkMsa0IiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Y29tcG9uZW50IDppcz1cImJhclwiIHYtZm9yPVwiYmFyIG9mIGJhcnNcIj5cbiAgPGNvbXBvbmVudCA6aXM9XCJiYXJcIiAjZGVmYXVsdD1cIntiYXp9XCI+XG4gICAgPGNvbXBvbmVudCA6aXM9XCJiYXpbYmFyXVwiIHYtZm9yPVwiaXRlbSBvZiBiYXpcIiA+XG4gICAgICA8Y29tcG9uZW50IDppcz1cIml0ZW1cIiAvPlxuICAgIDwvY29tcG9uZW50PlxuICA8L2NvbXBvbmVudD5cbjwvY29tcG9uZW50PlxuIl19
```

