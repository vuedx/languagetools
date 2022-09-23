# Baseline Spec

## 1.1. element > single

```vue-html
<div>foo</div>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        /*<vuedx:tsx-completions-target/>*/
      >
        {"foo"}
      </div>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTYwMABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiZm9vIn0KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNDY3AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxHO0EsUUFBRyxtQztBLE0sQztBLFEsQ0FBQ0MsSyxDO0EsTUFBRyxFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjN8NSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXY+Zm9vPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

## 1.2. element > fragment with errors

```vue-html
<HelloWorld n />
<span>Name: {{ name + }}</span>
<p v-bind:></p>
<p v-if=""></p>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
/*<vuedx:templateGlobals>*/
const __VueDX___get_identifier_HelloWorld = () => HelloWorld;
/*</vuedx:templateGlobals>*/
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let name = __VueDX__ctx.name
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const HelloWorld = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, __VueDX___get_identifier_HelloWorld(), "HelloWorld" as const, "HelloWorld" as const);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <HelloWorld
        n
        /*<vuedx:tsx-completions-target/>*/
      />

      <span
        /*<vuedx:tsx-completions-target/>*/
      >
        {"Name: "}
        {name +}
      </span>
      <p
        {...(/*<vuedx:missingExpression>*/)}
        /*<vuedx:tsx-completions-target/>*/
      >
      </p>
      {
        ? <>
            <p
              /*<vuedx:tsx-completions-target/>*/
            >
            </p>
          </>
        : null
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let name = __VueDX__ctx.name
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "p">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQ2NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9IZWxsb1dvcmxkID0gKCkgPT4gSGVsbG9Xb3JsZDsKLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG5hbWUgPSBfX1Z1ZURYX19jdHgubmFtZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEhlbGxvV29ybGQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9IZWxsb1dvcmxkKCksICJIZWxsb1dvcmxkIiBhcyBjb25zdCwgIkhlbGxvV29ybGQiIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxIZWxsb1dvcmxkCiAgICAgICAgbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CgogICAgICA8c3BhbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7Ik5hbWU6ICJ9CiAgICAgICAge25hbWUgK30KICAgICAgPC9zcGFuPgogICAgICA8cAogICAgICAgIHsuLi4oLyo8dnVlZHg6bWlzc2luZ0V4cHJlc3Npb24+Ki8pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9wPgogICAgICB7CiAgICAgICAgPyA8PgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgPC9wPgogICAgICAgICAgPC8+CiAgICAgICAgOiBudWxsCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG5hbWUgPSBfX1Z1ZURYX19jdHgubmFtZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInAiPiwKICBdKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjgzMwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQTtBLDZEO0EsQTtBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sVSxrSixxQyxFLHFCLEUscUIsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUMsVTtBLFFBQVdBLEM7QSxRQUFELG1DO0EsTSxFO0E7QSxNQUNYLENBQUNDLEk7QSxRQUFJLG1DO0EsTSxDO0EsUSxDQUFDQyxRLEM7QSxRQUFNLENBQUdDLE1BQU0sQztBLE1BQUcsRSxJLEM7QSxNQUN4QixDQUFDSCxDO0EsUSxLQUFTLDZCLEU7QSxRQUFSLG1DO0EsTSxDO0EsTUFBUyxFLEMsQztBLE0sQ0FDRkksQTtBLFEsRSxFO0EsWUFBVCxDQUFDSixDO0EsY0FBQyxtQztBLFksQztBLFlBQVMsRSxDLEM7QSxVLEc7QSxNLFE7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRTtBLEksZ0YsQztBLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MSIsIjw8UD4+NCIsIjw8VD4+Nnw4IiwiPDxQPj42IiwiPDxQPj4wIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEhlbGxvV29ybGQgbiAvPlxuPHNwYW4+TmFtZToge3sgbmFtZSArIH19PC9zcGFuPlxuPHAgdi1iaW5kOj48L3A+XG48cCB2LWlmPVwiXCI+PC9wPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
/*<vuedx:templateGlobals>*/
const __VueDX___get_identifier_FooBar = () => FooBar;
const __VueDX___get_identifier_Foo = () => Foo;
const __VueDX___get_identifier_fooBar = () => fooBar;
const __VueDX___get_identifier_UnknownElement = () => UnknownElement;
/*</vuedx:templateGlobals>*/
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const FooBar = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, __VueDX___get_identifier_FooBar(), "FooBar" as const, "FooBar" as const);
  const Foo = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, __VueDX___get_identifier_Foo(), "Foo" as const, "Foo" as const);
  const UnknownElement = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, __VueDX___get_identifier_UnknownElement(), "unknown-element" as const, "UnknownElement" as const);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(FooBar, {
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        })}
      </FooBar>
      <Foo.Bar
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(Foo.Bar, {
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        })}
      </Foo.Bar>
      <Foo.Bar.Baz
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(Foo.Bar.Baz, {
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        })}
      </Foo.Bar.Baz>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(FooBar, {
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        })}
      </FooBar>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(FooBar, {
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        })}
      </FooBar>
      <UnknownElement
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(UnknownElement, {
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        })}
      </UnknownElement>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDI0NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIgPSAoKSA9PiBGb29CYXI7CmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28gPSAoKSA9PiBGb287CmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9mb29CYXIgPSAoKSA9PiBmb29CYXI7CmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Vbmtub3duRWxlbWVudCA9ICgpID0+IFVua25vd25FbGVtZW50OwovKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb29CYXIgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIoKSwgIkZvb0JhciIgYXMgY29uc3QsICJGb29CYXIiIGFzIGNvbnN0KTsKICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28oKSwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICBjb25zdCBVbmtub3duRWxlbWVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX1Vua25vd25FbGVtZW50KCksICJ1bmtub3duLWVsZW1lbnQiIGFzIGNvbnN0LCAiVW5rbm93bkVsZW1lbnQiIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vLkJhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLkJhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vLkJhcj4KICAgICAgPEZvby5CYXIuQmF6CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb28uQmFyLkJheiwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vLkJhci5CYXo+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPFVua25vd25FbGVtZW50CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhVbmtub3duRWxlbWVudCwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvVW5rbm93bkVsZW1lbnQ+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjEzNTAAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTs7Ozs7Ozs7QTtBO0E7QSx5RTtBLEE7QSxxRDtBLEEsK0M7QSxBLHFEO0EsQSxxRTtBLEE7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sTSxrSixpQyxFLGlCLEUsaUIsRTtBLEUsTSxHLGtKLDhCLEUsYyxFLGMsRTtBLEUsTSxjLGtKLHlDLEUsMEIsRSx5QixFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxNO0EsUUFBTSxtQztBLE0sQztBLFEsQyxnRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxNLEM7QSxNQUNYLENBQUMsTztBLFFBQU8sbUM7QSxNLEM7QSxRLEMsaUQ7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBQ0EsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTyxDO0EsTUFDWixDQUFDLFc7QSxRQUFXLG1DO0EsTSxDO0EsUSxDLHFEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUNBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLFcsQztBLE1BQ2hCLENBQUMsTTtBLFFBQU0sbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBQ0EsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTSxDO0EsTUFDWCxDQUFDLE07QSxRQUFPLG1DO0EsTSxDO0EsUSxDLGdEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUNBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE0sQztBLE1BQ1osQ0FBQyxjO0EsUUFBZSxtQztBLE0sQztBLFEsQyx3RDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxjLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8VD4+M3w1Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvb0Jhcj5mb288L0Zvb0Jhcj5cbjxGb28uQmFyPmZvbzwvRm9vLkJhcj5cbjxGb28uQmFyLkJhej5mb288L0Zvby5CYXIuQmF6PlxuPGZvb0Jhcj5mb288L2Zvb0Jhcj5cbjxmb28tYmFyPmZvbzwvZm9vLWJhcj5cbjx1bmtub3duLWVsZW1lbnQ+Zm9vPC91bmtub3duLWVsZW1lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let props = __VueDX__ctx.props
  let value = __VueDX__ctx.value
  let dynamic = __VueDX__ctx.dynamic
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        /*<vuedx:tsx-completions-target/>*/
      >
        {
          $slots.default != null ? $slots.default({}) : (
            <>
              {"fallback content"}
            </>
          )

        }
        <span
          /*<vuedx:tsx-completions-target/>*/
        >
          {
            $slots.other != null ? $slots.other({
              ...(props),
              myProp: value,
            }) : (
              <>
                {"fallback content"}
              </>
            )

          }
        </span>
        {
          $slots.another != null ? $slots.another({
            ...(props),
            myProp: value,
          }) : null
        }
        {
          $slots."name" != null ? $slots."name"({
            ...(props),
            myProp: value,
          }) : null
        }
      </div>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let props = __VueDX__ctx.props
  let value = __VueDX__ctx.value
  let dynamic = __VueDX__ctx.dynamic
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
    {
      default: {},
    },
    {
      "other": {
        ...(props),
        myProp: value,
      },
    },
    {
      "another": {
        ...(props),
        myProp: value,
      },
    },
    {
      [dynamic]: {
        ...(props),
        myProp: value,
      },
    },
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjgzNABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wcwogIGxldCB2YWx1ZSA9IF9fVnVlRFhfX2N0eC52YWx1ZQogIGxldCBkeW5hbWljID0gX19WdWVEWF9fY3R4LmR5bmFtaWMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7CiAgICAgICAgICAkc2xvdHMuZGVmYXVsdCAhPSBudWxsID8gJHNsb3RzLmRlZmF1bHQoe30pIDogKAogICAgICAgICAgICA8PgogICAgICAgICAgICAgIHsiZmFsbGJhY2sgY29udGVudCJ9CiAgICAgICAgICAgIDwvPgogICAgICAgICAgKQoKICAgICAgICB9CiAgICAgICAgPHNwYW4KICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgewogICAgICAgICAgICAkc2xvdHMub3RoZXIgIT0gbnVsbCA/ICRzbG90cy5vdGhlcih7CiAgICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICAgICAgICB9KSA6ICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmYWxsYmFjayBjb250ZW50In0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQoKICAgICAgICAgIH0KICAgICAgICA8L3NwYW4+CiAgICAgICAgewogICAgICAgICAgJHNsb3RzLmFub3RoZXIgIT0gbnVsbCA/ICRzbG90cy5hbm90aGVyKHsKICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgbXlQcm9wOiB2YWx1ZSwKICAgICAgICAgIH0pIDogbnVsbAogICAgICAgIH0KICAgICAgICB7CiAgICAgICAgICAkc2xvdHMuIm5hbWUiICE9IG51bGwgPyAkc2xvdHMuIm5hbWUiKHsKICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgbXlQcm9wOiB2YWx1ZSwKICAgICAgICAgIH0pIDogbnVsbAogICAgICAgIH0KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wcwogIGxldCB2YWx1ZSA9IF9fVnVlRFhfX2N0eC52YWx1ZQogIGxldCBkeW5hbWljID0gX19WdWVEWF9fY3R4LmR5bmFtaWMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHsKICAgICAgZGVmYXVsdDoge30sCiAgICB9LAogICAgewogICAgICAib3RoZXIiOiB7CiAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICB9LAogICAgfSwKICAgIHsKICAgICAgImFub3RoZXIiOiB7CiAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICB9LAogICAgfSwKICAgIHsKICAgICAgW2R5bmFtaWNdOiB7CiAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICB9LAogICAgfSwKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE0NjEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTs7Ozs7Ozs7QTtBO0E7QSx5RTtBLEEsNEI7QSxFLDJCO0EsRSw4QjtBLEUsOEI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEc7QSxRQUFHLG1DO0EsTSxDO0EsUSxDO0EsVSxNLFEsVyxNLFEsRSxFLEcsQztBLFksRTtBLGMsQ0FDSUMsa0IsQztBLFksRztBLFUsQztBO0EsUSxDO0EsUUFDTixDQUFDQyxJO0EsVUFBSSxtQztBLFEsQztBLFUsQztBLFksTSxDQUNRQyxLLFcsTSxDQUFBQSxLLEU7QSxjQUFRLElBQVFDLEssQyxDO0EsWUFBTyxFQUFDQyxNLEVBQVFELEssQztBLFksRSxHLEM7QSxjLEU7QSxnQixDQUFPSCxrQixDO0EsYyxHO0EsWSxDO0E7QSxVLEM7QSxRQUNwRCxFLEksQztBLFEsQztBLFUsTSxDQUNXSyxPLFcsTSxDQUFBQSxPLEU7QSxZQUFVLElBQVFGLEssQyxDO0EsVUFBTyxFQUFDQyxNLEVBQVFELEssQztBLFUsRSxHLEk7QSxRLEM7QSxRLEM7QSxVLE0sQ0FDdENHLE0sVyxNLENBQUFBLE0sRTtBLFlBQWUsSUFBUUgsSyxDLEM7QSxVQUFPLEVBQUNDLE0sRUFBUUQsSyxDO0EsVSxFLEcsSTtBLFEsQztBLE1BQ2hELEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsOEI7QSxFLDhCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEksQztBLE0sTyxFLEMsRTtBLEksQyxDO0EsSSxDO0EsTSxPLEUsQztBLFEsSSxLLEMsQztBLE0sRSxNLEUsSyxDO0EsTSxFO0EsSSxDLEM7QSxJLEM7QSxNLFMsRSxDO0EsUSxJLEssQyxDO0EsTSxFLE0sRSxLLEM7QSxNLEU7QSxJLEMsQztBLEksQztBLE0sQyxPLEMsRSxDO0EsUSxJLEssQyxDO0EsTSxFLE0sRSxLLEM7QSxNLEU7QSxJLEMsQztBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+MTZ8MTgiLCI8PFA+PjQiLCI8PFQ+Pjd8NSIsIjw8UD4+NSIsIjw8UD4+NiIsIjw8VD4+OXw3IiwiPDxUPj40fDYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3Bhbj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDwvc3Bhbj5cbiAgPHNsb3QgbmFtZT1cImFub3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPjwvc2xvdD5cbiAgPHNsb3QgOm5hbWU9XCJkeW5hbWljXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIiAvPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let list = __VueDX__ctx.list
  let props = __VueDX__ctx.props
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {
        __VueDX__TypeCheck.internal.renderList(list, (items) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {
                $slots.default != null ? $slots.default({}) : (
                  <>
                    {"fallback content"}
                  </>
                )

              }
              {
                __VueDX__TypeCheck.internal.renderList(items, (item) => {
                  return (
                    <span
                      /*<vuedx:tsx-completions-target/>*/
                    >
                      {
                        $slots.other != null ? $slots.other({
                          ...(props),
                          myProp: item,
                        }) : (
                          <>
                            {"fallback content"}
                          </>
                        )

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
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let list = __VueDX__ctx.list
  let props = __VueDX__ctx.props
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
    __VueDX__TypeCheck.internal.flat(
      __VueDX__TypeCheck.internal.renderList(list, (items) => (
        {
          default: {},
        }
      ))
    ),
    __VueDX__TypeCheck.internal.flat(
      __VueDX__TypeCheck.internal.renderList(list, (items) => (
        __VueDX__TypeCheck.internal.flat(
          __VueDX__TypeCheck.internal.renderList(items, (item) => (
            {
              "other": {
                ...(props),
                myProp: item,
              },
            }
          ))
        )
      ))
    ),
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzI1OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsaXN0ID0gX19WdWVEWF9fY3R4Lmxpc3QKICBsZXQgcHJvcHMgPSBfX1Z1ZURYX19jdHgucHJvcHMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGxpc3QsIChpdGVtcykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAkc2xvdHMuZGVmYXVsdCAhPSBudWxsID8gJHNsb3RzLmRlZmF1bHQoe30pIDogKAogICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgIHsiZmFsbGJhY2sgY29udGVudCJ9CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgKQoKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoaXRlbXMsIChpdGVtKSA9PiB7CiAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgPHNwYW4KICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAkc2xvdHMub3RoZXIgIT0gbnVsbCA/ICRzbG90cy5vdGhlcih7CiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgICAgICAgICAgICAgICBteVByb3A6IGl0ZW0sCiAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogKAogICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ImZhbGxiYWNrIGNvbnRlbnQifQogICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICApCgogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGxpc3QgPSBfX1Z1ZURYX19jdHgubGlzdAogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wcwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoCiAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGxpc3QsIChpdGVtcykgPT4gKAogICAgICAgIHsKICAgICAgICAgIGRlZmF1bHQ6IHt9LAogICAgICAgIH0KICAgICAgKSkKICAgICksCiAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdCgKICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobGlzdCwgKGl0ZW1zKSA9PiAoCiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoCiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChpdGVtcywgKGl0ZW0pID0+ICgKICAgICAgICAgICAgewogICAgICAgICAgICAgICJvdGhlciI6IHsKICAgICAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgICAgICBteVByb3A6IGl0ZW0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfQogICAgICAgICAgKSkKICAgICAgICApCiAgICAgICkpCiAgICApLAogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTMwMAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLDRCO0EsRSw4QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDO0EsUSx1Q0FDcUJBLEksRSxDQUFUQyxLLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0MsRztBLGNBQUcsbUM7QSxZLEM7QSxjLEM7QSxnQixNLFEsVyxNLFEsRSxFLEcsQztBLGtCLEU7QSxvQixDQUNJQyxrQixDO0Esa0IsRztBLGdCLEM7QTtBLGMsQztBLGMsQztBLGdCLHVDQUNlRixLLEUsQ0FBUkQsSSxDLEs7QSxrQixRO0Esb0JBQWIsQ0FBQ0EsSTtBLHNCQUFJLG1DO0Esb0IsQztBLHNCLEM7QSx3QixNLENBQ1FJLEssVyxNLENBQUFBLEssRTtBLDBCQUFRLElBQVFILEssQyxDO0Esd0JBQU8sRUFBQ0ksTSxFQUFRTCxJLEM7QSx3QixFLEcsQztBLDBCLEU7QSw0QixDQUFNRyxrQixDO0EsMEIsRztBLHdCLEM7QTtBLHNCLEM7QSxvQkFDbkQsRSxJLEM7QSxrQixDO0EsZ0IsQyxDO0EsYyxDO0EsWUFDRixFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsNEI7QSxFLDhCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsSSxnQyxDO0EsTSxzQyxDLEksRSxDLEssQyxLO0EsUSxDO0EsVSxPLEUsQyxFO0EsUSxDO0EsTSxFO0EsSSxDLEM7QSxJLGdDLEM7QSxNLHNDLEMsSSxFLEMsSyxDLEs7QSxRLGdDLEM7QSxVLHNDLEMsSyxFLEMsSSxDLEs7QSxZLEM7QSxjLE8sRSxDO0EsZ0IsSSxLLEMsQztBLGMsRSxNLEUsSSxDO0EsYyxFO0EsWSxDO0EsVSxFO0EsUSxDO0EsTSxFO0EsSSxDLEM7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjQiLCI8PFA+PjUiLCI8PFA+PjMiLCI8PFQ+PjE2fDE4IiwiPDxUPj43fDUiLCI8PFA+PjYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtZm9yPVwiaXRlbXMgb2YgbGlzdFwiPlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3BhbiB2LWZvcj1cIml0ZW0gb2YgaXRlbXNcIj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJpdGVtXCI+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

## 2.1. v-bind 

```vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
/*<vuedx:templateGlobals>*/
const __VueDX___get_identifier_Foo = () => Foo;
/*</vuedx:templateGlobals>*/
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let myInput = __VueDX__ctx.myInput
  let customName = __VueDX__ctx.customName
  let rest = __VueDX__ctx.rest
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const Foo = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, __VueDX___get_identifier_Foo(), "Foo" as const, "Foo" as const);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        value={myInput}
        {...({[customName]: myInput})}
        {...(rest)}
        /*<vuedx:tsx-completions-target/>*/
      />
      <Foo
        value={myInput}
        {...({[customName]: myInput})}
        {...(rest)}
        /*<vuedx:tsx-completions-target/>*/
      />

    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let myInput = __VueDX__ctx.myInput
  let customName = __VueDX__ctx.customName
  let rest = __VueDX__ctx.rest
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "input">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQxNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28gPSAoKSA9PiBGb287Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBteUlucHV0ID0gX19WdWVEWF9fY3R4Lm15SW5wdXQKICBsZXQgY3VzdG9tTmFtZSA9IF9fVnVlRFhfX2N0eC5jdXN0b21OYW1lCiAgbGV0IHJlc3QgPSBfX1Z1ZURYX19jdHgucmVzdAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvbyA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0ZvbygpLCAiRm9vIiBhcyBjb25zdCwgIkZvbyIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgdmFsdWU9e215SW5wdXR9CiAgICAgICAgey4uLih7W2N1c3RvbU5hbWVdOiBteUlucHV0fSl9CiAgICAgICAgey4uLihyZXN0KX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8Rm9vCiAgICAgICAgdmFsdWU9e215SW5wdXR9CiAgICAgICAgey4uLih7W2N1c3RvbU5hbWVdOiBteUlucHV0fSl9CiAgICAgICAgey4uLihyZXN0KX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgoKICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG15SW5wdXQgPSBfX1Z1ZURYX19jdHgubXlJbnB1dAogIGxldCBjdXN0b21OYW1lID0gX19WdWVEWF9fY3R4LmN1c3RvbU5hbWUKICBsZXQgcmVzdCA9IF9fVnVlRFhfX2N0eC5yZXN0CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaW5wdXQiPiwKICBdKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjgzMAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQTtBLCtDO0EsQTtBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLHdDO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxHLGtKLDhCLEUsYyxFLGMsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEs7QSxRQUFPQSxLLEMsQ0FBT0MsTyxDO0EsUSxPQUFXQyxVLEMsRUFBYUQsTyxHO0EsUSxLQUFpQkUsSSxFO0EsUUFBbEQsbUM7QSxNLEU7QSxNQUNOLENBQUMsRztBLFFBQUtILEssQyxDQUFPQyxPLEM7QSxRLE9BQVdDLFUsQyxFQUFhRCxPLEc7QSxRLEtBQWlCRSxJLEU7QSxRQUFsRCxtQztBLE0sRTtBO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsa0M7QSxFLHdDO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRTtBLEksb0YsQztBLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+NyIsIjw8UD4+MTAiLCI8PFA+PjQiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgOnZhbHVlPVwibXlJbnB1dFwiIDpbY3VzdG9tTmFtZV09XCJteUlucHV0XCIgdi1iaW5kPVwicmVzdFwiIC8+XG48Rm9vIDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let onFocus = __VueDX__ctx.onFocus
  let value = __VueDX__ctx.value
  let eventName = __VueDX__ctx.eventName
  let events = __VueDX__ctx.events
  let fnName = __VueDX__ctx.fnName
  let callMyFn = __VueDX__ctx.callMyFn
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        onFocus={__VueDX__TypeCheck.internal.first([
          onFocus, 
        ])}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        onUpdate:value={__VueDX__TypeCheck.internal.first([
          ($event) => {
          value = $event
          }, 
        ])}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        onEvent-name={__VueDX__TypeCheck.internal.first([
          /*<vuedx:missingExpression>*/, 
        ])}
        onEventName={__VueDX__TypeCheck.internal.first([
          /*<vuedx:missingExpression>*/, 
          /*<vuedx:missingExpression>*/, 
        ])}
        {...(events)}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        onKeydown={__VueDX__TypeCheck.internal.first([
          fnName, 
          ($event) => {
          callMyFn($event)
          }, 
          $event => callMyFn($event), 
          ($event) => callMyFn($event), 
          () => callMyFn($event), 
          function myFunction($event) {
    callMyFn($event)
  }, 
          function myFunction() {
    callMyFn($event)
  }, 
        ])}
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let onFocus = __VueDX__ctx.onFocus
  let value = __VueDX__ctx.value
  let eventName = __VueDX__ctx.eventName
  let events = __VueDX__ctx.events
  let fnName = __VueDX__ctx.fnName
  let callMyFn = __VueDX__ctx.callMyFn
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzAyNABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkZvY3VzID0gX19WdWVEWF9fY3R4Lm9uRm9jdXMKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWUKICBsZXQgZXZlbnROYW1lID0gX19WdWVEWF9fY3R4LmV2ZW50TmFtZQogIGxldCBldmVudHMgPSBfX1Z1ZURYX19jdHguZXZlbnRzCiAgbGV0IGZuTmFtZSA9IF9fVnVlRFhfX2N0eC5mbk5hbWUKICBsZXQgY2FsbE15Rm4gPSBfX1Z1ZURYX19jdHguY2FsbE15Rm4KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgb25Gb2N1cz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uRm9jdXMsIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIG9uVXBkYXRlOnZhbHVlPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgKCRldmVudCkgPT4gewogICAgICAgICAgdmFsdWUgPSAkZXZlbnQKICAgICAgICAgIH0sIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIG9uRXZlbnQtbmFtZT17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICBdKX0KICAgICAgICBvbkV2ZW50TmFtZT17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICBdKX0KICAgICAgICB7Li4uKGV2ZW50cyl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgb25LZXlkb3duPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgZm5OYW1lLCAKICAgICAgICAgICgkZXZlbnQpID0+IHsKICAgICAgICAgIGNhbGxNeUZuKCRldmVudCkKICAgICAgICAgIH0sIAogICAgICAgICAgJGV2ZW50ID0+IGNhbGxNeUZuKCRldmVudCksIAogICAgICAgICAgKCRldmVudCkgPT4gY2FsbE15Rm4oJGV2ZW50KSwgCiAgICAgICAgICAoKSA9PiBjYWxsTXlGbigkZXZlbnQpLCAKICAgICAgICAgIGZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7CiAgICBjYWxsTXlGbigkZXZlbnQpCiAgfSwgCiAgICAgICAgICBmdW5jdGlvbiBteUZ1bmN0aW9uKCkgewogICAgY2FsbE15Rm4oJGV2ZW50KQogIH0sIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkZvY3VzID0gX19WdWVEWF9fY3R4Lm9uRm9jdXMKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWUKICBsZXQgZXZlbnROYW1lID0gX19WdWVEWF9fY3R4LmV2ZW50TmFtZQogIGxldCBldmVudHMgPSBfX1Z1ZURYX19jdHguZXZlbnRzCiAgbGV0IGZuTmFtZSA9IF9fVnVlRFhfX2N0eC5mbk5hbWUKICBsZXQgY2FsbE15Rm4gPSBfX1Z1ZURYX19jdHguY2FsbE15Rm4KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNTcxAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLDhCO0EsRSxzQztBLEUsZ0M7QSxFLGdDO0EsRSxvQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxLO0EsUUFBT0MsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFFBQVQsbUM7QSxNLEU7QSxNQUNOLENBQUNGLEs7QSxRQUFPRyxjLEMsQyxtQztBLFUsYTtBLFVBQWNDLGM7QSxVLEMsRTtBLFEsRSxDO0EsUUFBaEIsbUM7QSxNLEU7QSxNQUNOLENBQUNKLEs7QSxRQUFPSyxZLEMsQyxtQztBLFVBQUQsNkIsRTtBLFEsRSxDO0EsUUFBYUMsVyxDLEMsbUM7QSxVQUFELDZCLEU7QSxVQUFXLDZCLEU7QSxRLEUsQztBLFEsS0FBbUJDLE0sRTtBLFFBQTNDLG1DO0EsTSxFO0EsTUFDTixDQUFDUCxLO0EsUUFDRVEsUyxDLEMsbUM7QSxVQUFTRCxNLEU7QSxVLGE7QSxVQUNLRSxnQjtBLFUsQyxFO0EsVUFDTUMsMEIsRTtBLFVBQ0NDLDRCLEU7QSxVQUNEQyxzQixFO0EsVUFDRkM7O0csRTtBLFVBR0RDOztHLEU7QSxRLEUsQztBLFFBVGQsbUM7QSxNLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxrQztBLEUsOEI7QSxFLHNDO0EsRSxnQztBLEUsZ0M7QSxFLG9DO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8VD4+NXw3IiwiPDxQPj43IiwiPDxUPj4xMnwxNCIsIjw8UD4+MTQiLCI8PFQ+PjEwfDEyIiwiPDxUPj45fDExIiwiPDxQPj42IiwiPDxUPj43fDkiLCI8PFA+PjE2IiwiPDxQPj4yNiIsIjw8UD4+MjgiLCI8PFA+PjIyIiwiPDxQPj41NCIsIjw8UD4+NDgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgQGZvY3VzPVwib25Gb2N1c1wiIC8+XG48aW5wdXQgQHVwZGF0ZTp2YWx1ZT1cInZhbHVlID0gJGV2ZW50XCIgLz5cbjxpbnB1dCBAZXZlbnQtbmFtZSBAZXZlbnROYW1lIEBbZXZlbnROYW1lXSB2LW9uPVwiZXZlbnRzXCIgLz5cbjxpbnB1dFxuICBAa2V5ZG93bj1cImZuTmFtZVwiXG4gIEBrZXlkb3duLmxlZnQ9XCJjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQubGVmdD1cIiRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQucmlnaHQ9XCIoJGV2ZW50KSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQuZG93bj1cIigpID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbiAgQGtleWRvd24uY3RybC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbi8+XG5cbjwvdGVtcGxhdGU+Il19)

## 4.1. v-on multiple events 

```vue-html
<div @click="onClick" @hover="onHover" @press="onPress" />
<div @click="onClick" @hover="onHover" @press="onPress" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let onClick = __VueDX__ctx.onClick
  let onHover = __VueDX__ctx.onHover
  let onPress = __VueDX__ctx.onPress
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        onClick={__VueDX__TypeCheck.internal.first([
          onClick, 
        ])}
        onHover={__VueDX__TypeCheck.internal.first([
          onHover, 
        ])}
        onPress={__VueDX__TypeCheck.internal.first([
          onPress, 
        ])}
        /*<vuedx:tsx-completions-target/>*/
      />
      <div
        onClick={__VueDX__TypeCheck.internal.first([
          onClick, 
        ])}
        onHover={__VueDX__TypeCheck.internal.first([
          onHover, 
        ])}
        onPress={__VueDX__TypeCheck.internal.first([
          onPress, 
        ])}
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let onClick = __VueDX__ctx.onClick
  let onHover = __VueDX__ctx.onHover
  let onPress = __VueDX__ctx.onPress
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjI3OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkNsaWNrID0gX19WdWVEWF9fY3R4Lm9uQ2xpY2sKICBsZXQgb25Ib3ZlciA9IF9fVnVlRFhfX2N0eC5vbkhvdmVyCiAgbGV0IG9uUHJlc3MgPSBfX1Z1ZURYX19jdHgub25QcmVzcwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgb25DbGljaz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uQ2xpY2ssIAogICAgICAgIF0pfQogICAgICAgIG9uSG92ZXI9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkhvdmVyLCAKICAgICAgICBdKX0KICAgICAgICBvblByZXNzPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25QcmVzcywgCiAgICAgICAgXSl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGRpdgogICAgICAgIG9uQ2xpY2s9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkNsaWNrLCAKICAgICAgICBdKX0KICAgICAgICBvbkhvdmVyPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25Ib3ZlciwgCiAgICAgICAgXSl9CiAgICAgICAgb25QcmVzcz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uUHJlc3MsIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkNsaWNrID0gX19WdWVEWF9fY3R4Lm9uQ2xpY2sKICBsZXQgb25Ib3ZlciA9IF9fVnVlRFhfX2N0eC5vbkhvdmVyCiAgbGV0IG9uUHJlc3MgPSBfX1Z1ZURYX19jdHgub25QcmVzcwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjg1MQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxrQztBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRztBLFFBQUtDLE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRQUFVRCxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBVUQsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFFBQTNDLG1DO0EsTSxFO0EsTUFDSixDQUFDRixHO0EsUUFBS0MsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFFBQVVELE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRQUFVRCxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBM0MsbUM7QSxNLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxrQztBLEUsa0M7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+NXw3IiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiBAY2xpY2s9XCJvbkNsaWNrXCIgQGhvdmVyPVwib25Ib3ZlclwiIEBwcmVzcz1cIm9uUHJlc3NcIiAvPlxuPGRpdiBAY2xpY2s9XCJvbkNsaWNrXCIgQGhvdmVyPVwib25Ib3ZlclwiIEBwcmVzcz1cIm9uUHJlc3NcIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 5.1. v-if/v-else/v-else-if > single if statement

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {awesome
        ? <>
            <h1
              /*<vuedx:tsx-completions-target/>*/
            >
              {"Vue is awesome!"}
            </h1>
          </>
        : null
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTc3OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge2F3ZXNvbWUKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgICA6IG51bGwKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICBdKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjU1OQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQ1VBLE87QSxRLEUsRTtBLFlBQVYsQ0FBQ0MsRTtBLGNBQUUsbUM7QSxZLEM7QSxjLENBQWdCQyxpQixDO0EsWUFBZSxFLEUsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj43IiwiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

## 5.2. v-if/v-else/v-else-if > if/else

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {awesome
        ? <>
            <h1
              /*<vuedx:tsx-completions-target/>*/
            >
              {"Vue is awesome!"}
            </h1>
          </>
        : <>
            <h1
              /*<vuedx:tsx-completions-target/>*/
            >
              {"Oh no 😢"}
            </h1>
          </>
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjAwMgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge2F3ZXNvbWUKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Ik9oIG5vIPCfmKIifQogICAgICAgICAgICA8L2gxPgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgXSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo2NzMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTs7Ozs7Ozs7QTtBO0E7QSx5RTtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUNVQSxPO0EsUSxFLEU7QSxZQUFWLENBQUNDLEU7QSxjQUFFLG1DO0EsWSxDO0EsYyxDQUFnQkMsaUIsQztBLFlBQWUsRSxFLEM7QSxVLEc7QSxRLEUsRTtBLFlBQ2xDLENBQUNELEU7QSxjQUFFLG1DO0EsWSxDO0EsYyxDQUFRRSxVLEM7QSxZQUFRLEUsRSxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxJLGlGLEM7QSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjciLCI8PFA+PjIiLCI8PFQ+PjE1fDE3IiwiPDxUPj44fDEwIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

## 5.3. v-if/v-else/v-else-if > if on fragment

```vue-html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {ok
        ? <>
            <h1
              /*<vuedx:tsx-completions-target/>*/
            >
              {"Title"}
            </h1>
            <p
              /*<vuedx:tsx-completions-target/>*/
            >
              {"Paragraph 1"}
            </p>
            <p
              /*<vuedx:tsx-completions-target/>*/
            >
              {"Paragraph 2"}
            </p>
          </>
        : null
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "p">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "p">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjE2NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7b2sKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlRpdGxlIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgICAgPHAKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJQYXJhZ3JhcGggMSJ9CiAgICAgICAgICAgIDwvcD4KICAgICAgICAgICAgPHAKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJQYXJhZ3JhcGggMiJ9CiAgICAgICAgICAgIDwvcD4KICAgICAgICAgIDwvPgogICAgICAgIDogbnVsbAogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInAiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAicCI+LAogIF0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNzU5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FDZ0JBLEU7QSxRLEUsRTtBLFlBQ2QsQ0FBQ0EsRTtBLGNBQUUsbUM7QSxZLEM7QSxjLENBQUNDLE8sQztBLFlBQUssRSxFLEM7QSxZQUNULENBQUNDLEM7QSxjQUFDLG1DO0EsWSxDO0EsYyxDQUFDQyxhLEM7QSxZQUFXLEUsQyxDO0EsWUFDZCxDQUFDRCxDO0EsY0FBQyxtQztBLFksQztBLGMsQ0FBQ0MsYSxDO0EsWUFBVyxFLEMsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsSSxnRixDO0EsSSxnRixDO0EsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj41fDciLCI8PFA+PjEiLCI8PFQ+PjExfDEzIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHRlbXBsYXRlIHYtaWY9XCJva1wiPlxuICA8aDE+VGl0bGU8L2gxPlxuICA8cD5QYXJhZ3JhcGggMTwvcD5cbiAgPHA+UGFyYWdyYXBoIDI8L3A+XG48L3RlbXBsYXRlPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {type === 'A'
        ? <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {" A "}
            </div>
          </>
        : type === 'B'
        ? <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {" B "}
            </div>
          </>
        : type === 'C'
        ? <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {" C "}
            </div>
          </>
        : <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {" Not A/B/C "}
            </div>
          </>
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjUxMgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCB0eXBlID0gX19WdWVEWF9fY3R4LnR5cGUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge3R5cGUgPT09ICdBJwogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBBICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiB0eXBlID09PSAnQicKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyIgQiAifQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICAgIDogdHlwZSA9PT0gJ0MnCiAgICAgICAgPyA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiIEMgIn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyIgTm90IEEvQi9DICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IHR5cGUgPSBfX1Z1ZURYX19jdHgudHlwZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KOTY4AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FDV0EsWTtBLFEsRSxFO0EsWUFBWCxDQUFDQyxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FBcUJDLEssQztBLFlBRXpCLEUsRyxDO0EsVSxHO0EsUSxFQUNnQkYsWTtBLFEsRSxFO0EsWUFBaEIsQ0FBQ0MsRztBLGNBQUcsbUM7QSxZLEM7QSxjLENBQTBCQyxLLEM7QSxZQUU5QixFLEcsQztBLFUsRztBLFEsRUFDZ0JGLFk7QSxRLEUsRTtBLFlBQWhCLENBQUNDLEc7QSxjQUFHLG1DO0EsWSxDO0EsYyxDQUEwQkMsSyxDO0EsWUFFOUIsRSxHLEM7QSxVLEc7QSxRLEUsRTtBLFlBQ0EsQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjLENBQVFFLGEsQztBLFlBRVosRSxHLEM7QSxVLEc7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MTIiLCI8PFA+PjMiLCI8PFQ+PjV8NSIsIjw8VD4+MTN8MTMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJ0eXBlID09PSAnQSdcIj5cbiAgQVxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdCJ1wiPlxuICBCXG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ0MnXCI+XG4gIENcbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIE5vdCBBL0IvQ1xuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

## 5.5. v-if/v-else/v-else-if > no if

```vue-html
<h1 v-else>Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <h1
        /*<vuedx:tsx-completions-target/>*/
      >
        {"Vue is awesome!"}
      </h1>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTYwOQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogIF0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNDg3AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxFO0EsUUFBRSxtQztBLE0sQztBLFEsQ0FBUUMsaUIsQztBLE1BQWUsRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWVsc2U+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 5.6. v-if/v-else/v-else-if > if condition

```vue-html
<h1 v-if>Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {<>
            <h1
              /*<vuedx:tsx-completions-target/>*/
            >
              {"Vue is awesome!"}
            </h1>
          </>
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTY3MQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7PD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgXSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo1MDUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTs7Ozs7Ozs7QTtBO0E7QSx5RTtBLEEsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLEMsRTtBLFlBQ0EsQ0FBQ0EsRTtBLGNBQUUsbUM7QSxZLEM7QSxjLENBQU1DLGlCLEM7QSxZQUFlLEUsRSxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRTtBLEksaUYsQztBLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+MTV8MTciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1pZj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 5.7. v-if/v-else/v-else-if > else condition

```vue-html
<h1 v-else="ok">Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <h1
        /*<vuedx:tsx-completions-target/>*/
      >
        {"Vue is awesome!"}
      </h1>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTY2MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2sKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogIF0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTA4AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRTtBLFFBQUUsbUM7QSxNLEM7QSxRLENBQWFDLGlCLEM7QSxNQUFlLEUsRSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjE1fDE3Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtZWxzZT1cIm9rXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 5.8. v-if/v-else/v-else-if > elif no if

```vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <h1
        /*<vuedx:tsx-completions-target/>*/
      >
        {"Vue is awesome!"}
      </h1>
      <h1
        /*<vuedx:tsx-completions-target/>*/
      >
        {"Oh no 😢"}
      </h1>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTY5MABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgPC9oMT4KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiT2ggbm8g8J+YoiJ9CiAgICAgIDwvaDE+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo2MDMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTs7Ozs7Ozs7QTtBO0E7QSx5RTtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxFO0EsUUFBRSxtQztBLE0sQztBLFEsQ0FBcUJDLGlCLEM7QSxNQUFlLEUsRSxDO0EsTUFDdkMsQ0FBQ0QsRTtBLFFBQUUsbUM7QSxNLEM7QSxRLENBQVFFLFUsQztBLE1BQVEsRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjE1fDE3IiwiPDxUPj44fDEwIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtZWxzZS1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuPGgxIHYtZWxzZT5PaCBubyDwn5iiPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let bar = __VueDX__ctx.bar
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {foo
        ? <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {foo
                ? <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
                : bar
                ? <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
                : <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
              }
            </div>
          </>
        : bar
        ? <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {foo
                ? <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
                : bar
                ? <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
                : <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
              }
            </div>
          </>
        : <>
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {foo
                ? <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
                : bar
                ? <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
                : <>
                    <div
                      /*<vuedx:tsx-completions-target/>*/
                    >
                    </div>
                  </>
              }
            </div>
          </>
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let bar = __VueDX__ctx.bar
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mzk2MABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IGJhciA9IF9fVnVlRFhfX2N0eC5iYXIKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge2ZvbwogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiBiYXIKICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IGJhcgogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiBiYXIKICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2ZvbwogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogYmFyCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgYmFyID0gX19WdWVEWF9fY3R4LmJhcgogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNjQ0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQ1dBLEc7QSxRLEUsRTtBLFlBQVgsQ0FBQ0EsRztBLGNBQUcsbUM7QSxZLEM7QSxjLENBQ1NBLEc7QSxnQixFLEU7QSxvQkFBWCxDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQVksRSxHLEM7QSxrQixHO0EsZ0IsRUFDQUEsRztBLGdCLEUsRTtBLG9CQUFoQixDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQWlCLEUsRyxDO0Esa0IsRztBLGdCLEUsRTtBLG9CQUNyQixDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQVEsRSxHLEM7QSxrQixHO0EsYyxDO0EsWUFDZCxFLEcsQztBLFUsRztBLFEsRUFDZ0JBLEc7QSxRLEUsRTtBLFlBQWhCLENBQUNBLEc7QSxjQUFHLG1DO0EsWSxDO0EsYyxDQUNTQSxHO0EsZ0IsRSxFO0Esb0JBQVgsQ0FBQ0EsRztBLHNCQUFHLG1DO0Esb0IsQztBLG9CQUFZLEUsRyxDO0Esa0IsRztBLGdCLEVBQ0FBLEc7QSxnQixFLEU7QSxvQkFBaEIsQ0FBQ0EsRztBLHNCQUFHLG1DO0Esb0IsQztBLG9CQUFpQixFLEcsQztBLGtCLEc7QSxnQixFLEU7QSxvQkFDckIsQ0FBQ0EsRztBLHNCQUFHLG1DO0Esb0IsQztBLG9CQUFRLEUsRyxDO0Esa0IsRztBLGMsQztBLFlBQ2QsRSxHLEM7QSxVLEc7QSxRLEUsRTtBLFlBQ0EsQ0FBQ0EsRztBLGNBQUcsbUM7QSxZLEM7QSxjLENBQ1NBLEc7QSxnQixFLEU7QSxvQkFBWCxDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQVksRSxHLEM7QSxrQixHO0EsZ0IsRUFDQUEsRztBLGdCLEUsRTtBLG9CQUFoQixDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQWlCLEUsRyxDO0Esa0IsRztBLGdCLEUsRTtBLG9CQUNyQixDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQVEsRSxHLEM7QSxrQixHO0EsYyxDO0EsWUFDZCxFLEcsQztBLFUsRztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1pZj1cImZvb1wiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 6.1. v-text 

```vue-html
<span v-text="msg"></span>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let msg = __VueDX__ctx.msg
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <span
        innerHTML={msg}
        /*<vuedx:tsx-completions-target/>*/
      >
      </span>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let msg = __VueDX__ctx.msg
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "span">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTY2OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBtc2cgPSBfX1Z1ZURYX19jdHgubXNnCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzcGFuCiAgICAgICAgaW5uZXJIVE1MPXttc2d9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICA8L3NwYW4+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBtc2cgPSBfX1Z1ZURYX19jdHgubXNnCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAic3BhbiI+LAogIF0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTEyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsSTtBLFFBQU9DLFMsQyxDQUFNQyxHLEM7QSxRQUFULG1DO0EsTSxDO0EsTUFBYyxFLEksQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFO0EsSSxtRixDO0EsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj40IiwiPDxUPj40fDkiLCI8PFA+PjMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c3BhbiB2LXRleHQ9XCJtc2dcIj48L3NwYW4+XG5cbjwvdGVtcGxhdGU+Il19)

## 7.1. v-html 

```vue-html
<div v-html="html"></div>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let html = __VueDX__ctx.html
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        innerHTML={html}
        /*<vuedx:tsx-completions-target/>*/
      >
      </div>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let html = __VueDX__ctx.html
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTY3MQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBodG1sID0gX19WdWVEWF9fY3R4Lmh0bWwKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIGlubmVySFRNTD17aHRtbH0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgIDwvZGl2PgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgaHRtbCA9IF9fVnVlRFhfX2N0eC5odG1sCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo1MTEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTs7Ozs7Ozs7QTtBO0E7QSx5RTtBLEEsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxHO0EsUUFBTUMsUyxDLENBQU1DLEksQztBLFFBQVQsbUM7QSxNLEM7QSxNQUFlLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjR8OSIsIjw8UD4+NCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1odG1sPVwiaHRtbFwiPjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 8.1. v-show 

```vue-html
<h1 v-show="ok">Hello!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {(() => {
        __VueDX__TypeCheck.internal.checkDirective("show" as const, "h1" as const, undefined, ok, {  });
      })()}
      <h1
        /*<vuedx:tsx-completions-target/>*/
      >
        {"Hello!"}
      </h1>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTc4NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7KCgpID0+IHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tEaXJlY3RpdmUoInNob3ciIGFzIGNvbnN0LCAiaDEiIGFzIGNvbnN0LCB1bmRlZmluZWQsIG9rLCB7ICB9KTsKICAgICAgfSkoKX0KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiSGVsbG8hIn0KICAgICAgPC9oMT4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICBdKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjU2MAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLFM7QSxRLDJDQUNJQSxlLEVBQUgsYSxFLFMsRUFBV0MsRSxFLEUsRSxFO0EsTSxLO0EsTUFBWixDQUFDQSxFO0EsUUFBRSxtQztBLE0sQztBLFEsQ0FBYUMsUSxDO0EsTUFBTSxFLEUsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxUPj42fDE1IiwiPDxQPj4yIiwiPDxUPj42fDgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1zaG93PVwib2tcIj5IZWxsbyE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 9.1. v-model > input

```vue-html
<input v-model="foo" />
<input type="number" v-model="foo" />
<input type="tel" v-model="foo" />
<input type="checkbox" v-model="foo" />
<input type="radio" v-model="foo" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        value={foo}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="number"
        value={foo}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="tel"
        value={foo}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="checkbox"
        checked={foo}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="radio"
        checked={foo}
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTk5NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0ibnVtYmVyIgogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0idGVsIgogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9InJhZGlvIgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjk1NAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEs7QSxRQUFNLEssRUFBU0MsRyxDO0EsUUFBVixtQztBLE0sRTtBLE1BQ04sQ0FBQ0QsSztBLFFBQU1FLEksQ0FBS0MsUTtBLFFBQVMsSyxFQUFTRixHLEM7QSxRQUF4QixtQztBLE0sRTtBLE1BQ04sQ0FBQ0QsSztBLFFBQU1FLEksQ0FBS0YsSztBLFFBQU0sSyxFQUFTQyxHLEM7QSxRQUFyQixtQztBLE0sRTtBLE1BQ04sQ0FBQ0QsSztBLFFBQU1FLEksQ0FBS0UsVTtBLFFBQVcsTyxFQUFTSCxHLEM7QSxRQUExQixtQztBLE0sRTtBLE1BQ04sQ0FBQ0QsSztBLFFBQU1FLEksQ0FBS0csTztBLFFBQVEsTyxFQUFTSixHLEM7QSxRQUF2QixtQztBLE0sRTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+MyIsIjw8UD4+NCIsIjw8UD4+OCIsIjw8UD4+MTAiLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJ0ZWxcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2LW1vZGVsPVwiZm9vXCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 9.2. v-model > select/textarea

```vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <select
        value={foo}
        /*<vuedx:tsx-completions-target/>*/
      >
        <option
          value={foo}
          /*<vuedx:tsx-completions-target/>*/
        >
          {foo}
        </option>
      </select>
      <textarea
        value={foo}
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTc5NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzZWxlY3QKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7Zm9vfQogICAgICAgIDwvb3B0aW9uPgogICAgICA8L3NlbGVjdD4KICAgICAgPHRleHRhcmVhCiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjcyMgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLE07QSxRQUFPLEssRUFBU0MsRyxDO0EsUUFBVixtQztBLE0sQztBLFFBQ0wsQ0FBQ0QsTTtBLFVBQVFFLEssQyxDQUFPRCxHLEM7QSxVQUFULG1DO0EsUSxDO0EsVUFBYyxDQUFFQSxHQUFHLEM7QSxRQUFFLEUsTSxDO0EsTUFDOUIsRSxNLEM7QSxNQUNBLENBQUNFLFE7QSxRQUFTLEssRUFBU0YsRyxDO0EsUUFBVixtQztBLE0sRTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NiIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIDp2YWx1ZT1cImZvb1wiPnt7Zm9vfX08L29wdGlvbj5cbjwvc2VsZWN0PlxuPHRleHRhcmVhIHYtbW9kZWw9XCJmb29cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 9.3. v-model > checkbox

```vue-html
<input type="checkbox" v-model="foo" />
<input type="checkbox" v-model="foo" true-value="yes" />
<input type="checkbox" v-model="foo" false-value="no" />
<input type="checkbox" v-model="foo" :true-value="yes" :false-value="no" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let yes = __VueDX__ctx.yes
  let no = __VueDX__ctx.no
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        type="checkbox"
        checked={foo}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="checkbox"
        checked={foo}
        true-value="yes"
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="checkbox"
        checked={foo}
        false-value="no"
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="checkbox"
        checked={foo}
        true-value={yes}
        false-value={no}
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let yes = __VueDX__ctx.yes
  let no = __VueDX__ctx.no
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjEzNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IHllcyA9IF9fVnVlRFhfX2N0eC55ZXMKICBsZXQgbm8gPSBfX1Z1ZURYX19jdHgubm8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICB0cnVlLXZhbHVlPSJ5ZXMiCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIGZhbHNlLXZhbHVlPSJubyIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgdHJ1ZS12YWx1ZT17eWVzfQogICAgICAgIGZhbHNlLXZhbHVlPXtub30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCB5ZXMgPSBfX1Z1ZURYX19jdHgueWVzCiAgbGV0IG5vID0gX19WdWVEWF9fY3R4Lm5vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTA3NAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsSztBLFFBQU1DLEksQ0FBS0MsVTtBLFFBQVcsTyxFQUFTQyxHLEM7QSxRQUExQixtQztBLE0sRTtBLE1BQ04sQ0FBQ0gsSztBLFFBQU1DLEksQ0FBS0MsVTtBLFFBQVcsTyxFQUFTQyxHLEM7QSxRQUFLRCxVLENBQVdGLEs7QSxRQUExQyxtQztBLE0sRTtBLE1BQ04sQ0FBQ0EsSztBLFFBQU1DLEksQ0FBS0MsVTtBLFFBQVcsTyxFQUFTQyxHLEM7QSxRQUFLQyxXLENBQVlILEk7QSxRQUEzQyxtQztBLE0sRTtBLE1BQ04sQ0FBQ0QsSztBLFFBQU1DLEksQ0FBS0MsVTtBLFFBQVcsTyxFQUFTQyxHLEM7QSxRQUFNRCxVLEMsQ0FBWUMsRyxDO0EsUUFBTUMsVyxDLENBQWFDLEUsQztBLFFBQS9ELG1DO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjQiLCI8PFA+PjEwIiwiPDxQPj4zIiwiPDxQPj4xMSIsIjw8UD4+MiJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgdHJ1ZS12YWx1ZT1cInllc1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIGZhbHNlLXZhbHVlPVwibm9cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiA6dHJ1ZS12YWx1ZT1cInllc1wiIDpmYWxzZS12YWx1ZT1cIm5vXCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let baz = __VueDX__ctx.baz
  let vals = __VueDX__ctx.vals
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <select
        value={foo}
        /*<vuedx:tsx-completions-target/>*/
      >
        <option
          value="foo"
          /*<vuedx:tsx-completions-target/>*/
        >
          {"foo"}
        </option>
        <option
          value="bar"
          /*<vuedx:tsx-completions-target/>*/
        >
          {"bar"}
        </option>
        <option
          value={baz}
          /*<vuedx:tsx-completions-target/>*/
        >
          {"baz"}
        </option>
      </select>
      <select
        value={foo}
        /*<vuedx:tsx-completions-target/>*/
      >
        <option
          value="foo"
          /*<vuedx:tsx-completions-target/>*/
        >
          {"foo"}
        </option>
        {
          __VueDX__TypeCheck.internal.renderList(vals, (val) => {
            return (
              <option
                value={val}
                /*<vuedx:tsx-completions-target/>*/
              >
                {val}
              </option>
            )
          })
        }
        <option
          value="bar"
          /*<vuedx:tsx-completions-target/>*/
        >
          {"bar"}
        </option>
      </select>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let baz = __VueDX__ctx.baz
  let vals = __VueDX__ctx.vals
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjc0OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IGJheiA9IF9fVnVlRFhfX2N0eC5iYXoKICBsZXQgdmFscyA9IF9fVnVlRFhfX2N0eC52YWxzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzZWxlY3QKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iZm9vIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9ImJhciIKICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgeyJiYXIifQogICAgICAgIDwvb3B0aW9uPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPXtiYXp9CiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmF6In0KICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICAgIDxzZWxlY3QKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iZm9vIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgICAgewogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QodmFscywgKHZhbCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDxvcHRpb24KICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx9CiAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIHt2YWx9CiAgICAgICAgICAgICAgPC9vcHRpb24+CiAgICAgICAgICAgICkKICAgICAgICAgIH0pCiAgICAgICAgfQogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJiYXIiCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmFyIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IGJheiA9IF9fVnVlRFhfX2N0eC5iYXoKICBsZXQgdmFscyA9IF9fVnVlRFhfX2N0eC52YWxzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTQ1MQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsTTtBLFFBQU8sSyxFQUFTQyxHLEM7QSxRQUFWLG1DO0EsTSxDO0EsUUFDTCxDQUFDRCxNO0EsVUFBT0UsSyxDQUFNQSxLO0EsVUFBUCxtQztBLFEsQztBLFUsQ0FBYUMsSyxDO0EsUUFBRyxFLE0sQztBLFFBQ3ZCLENBQUNILE07QSxVQUFPRSxLLENBQU1BLEs7QSxVQUFQLG1DO0EsUSxDO0EsVSxDQUFhQyxLLEM7QSxRQUFHLEUsTSxDO0EsUUFDdkIsQ0FBQ0gsTTtBLFVBQVFFLEssQyxDQUFPRCxHLEM7QSxVQUFULG1DO0EsUSxDO0EsVSxDQUFjRSxLLEM7QSxRQUFHLEUsTSxDO0EsTUFDMUIsRSxNLEM7QSxNQUVBLENBQUNILE07QSxRQUFPLEssRUFBU0MsRyxDO0EsUUFBVixtQztBLE0sQztBLFFBQ0wsQ0FBQ0QsTTtBLFVBQU9FLEssQ0FBTUEsSztBLFVBQVAsbUM7QSxRLEM7QSxVLENBQWFDLEssQztBLFFBQUcsRSxNLEM7QSxRLEM7QSxVLHVDQUNEQyxJLEUsQ0FBUEgsRyxDLEs7QSxZLFE7QSxjQUFmLENBQUNELE07QSxnQkFBNEJFLEssQyxDQUFPRCxHLEM7QSxnQkFBN0IsbUM7QSxjLEM7QSxnQkFBa0MsQ0FBR0EsR0FBRyxDO0EsY0FBRyxFLE0sQztBLFksQztBLFUsQyxDO0EsUSxDO0EsUUFDbEQsQ0FBQ0QsTTtBLFVBQU9FLEssQ0FBTUEsSztBLFVBQVAsbUM7QSxRLEM7QSxVLENBQWFDLEssQztBLFFBQUcsRSxNLEM7QSxNQUN6QixFLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj42IiwiPDxQPj4zIiwiPDxQPj41IiwiPDxUPj4zfDUiLCI8PFA+PjQiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c2VsZWN0IHYtbW9kZWw9XCJmb29cIj5cbiAgPG9wdGlvbiB2YWx1ZT1cImZvb1wiPmZvbzwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XG4gIDxvcHRpb24gOnZhbHVlPVwiYmF6XCI+YmF6PC9vcHRpb24+XG48L3NlbGVjdD5cblxuPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gdmFsdWU9XCJmb29cIj5mb288L29wdGlvbj5cbiAgPG9wdGlvbiB2LWZvcj1cInZhbCBvZiB2YWxzXCIgOnZhbHVlPVwidmFsXCI+e3sgdmFsIH19PC9vcHRpb24+XG4gIDxvcHRpb24gdmFsdWU9XCJiYXJcIj5iYXI8L29wdGlvbj5cbjwvc2VsZWN0PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 10.1. v-slot > Invalid

```vue-html
<Foo>
  <template #foo>A</template>
  <template #bar="{bar}">{{bar}}</template>
  <template>Invalid</template>
</Foo>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
/*<vuedx:templateGlobals>*/
const __VueDX___get_identifier_Foo = () => Foo;
/*</vuedx:templateGlobals>*/
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const Foo = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, __VueDX___get_identifier_Foo(), "Foo" as const, "Foo" as const);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <Foo
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(Foo, {
          "foo": () => {
            return (
              <>
                {"A"}
              </>
            )
          },
          "bar": ({bar}) => {
            return (
              <>
                {bar}
              </>
            )
          },
        })}
      </Foo>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjIxNQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28gPSAoKSA9PiBGb287Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvbyA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0ZvbygpLCAiRm9vIiBhcyBjb25zdCwgIkZvbyIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEZvbwogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLCB7CiAgICAgICAgICAiZm9vIjogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7IkEifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgICAgImJhciI6ICh7YmFyfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7YmFyfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvbz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNzU0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBO0EsK0M7QSxBO0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLEcsa0osOEIsRSxjLEUsYyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxHO0EsUUFBRyxtQztBLE0sQztBLFEsQyw2QztBLFVBQ1MsSyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFJQSxHLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxVQUNKLEssR0FBS0MsSyxNO0EsWSxRO0EsYyxFO0EsZ0JBQU8sQ0FBRUMsR0FBRyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUU5QixFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxUPj4xfDMiLCI8PFA+PjUiLCI8PFA+PjMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Rm9vPlxuICA8dGVtcGxhdGUgI2Zvbz5BPC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNiYXI9XCJ7YmFyfVwiPnt7YmFyfX08L3RlbXBsYXRlPlxuICA8dGVtcGxhdGU+SW52YWxpZDwvdGVtcGxhdGU+XG48L0Zvbz5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
/*<vuedx:templateGlobals>*/
const __VueDX___get_identifier_FooBar = () => FooBar;
/*</vuedx:templateGlobals>*/
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const FooBar = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, __VueDX___get_identifier_FooBar(), "FooBar" as const, "FooBar" as const);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(FooBar, {
          default: () => {
            return (
              <>
                {"content"}
              </>
            )
          },
        })}
      </FooBar>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(FooBar, {
          "default": ({foo}) => {
            return (
              <>
                {foo}
              </>
            )
          },
        })}
      </FooBar>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(FooBar, {
          "other": ({foo}) => {
            return (
              <>
                {foo}
              </>
            )
          },
        })}
      </FooBar>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(FooBar, {
          "default": () => {
            return (
              <>
                {"content"}
              </>
            )
          },
          "other": ({foo}) => {
            return (
              <>
                {foo}
              </>
            )
          },
          "another": (foo) => {
            return (
              <>
                {foo
                  ? <>
                      <div
                        /*<vuedx:tsx-completions-target/>*/
                      >
                        {foo.bar}
                      </div>
                    </>
                  : null
                }
              </>
            )
          },
        })}
      </FooBar>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzUyNABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIgPSAoKSA9PiBGb29CYXI7Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvb0JhciA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0Zvb0JhcigpLCAiRm9vQmFyIiBhcyBjb25zdCwgIkZvb0JhciIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiY29udGVudCJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgICJkZWZhdWx0IjogKHtmb299KSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHtmb299CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgICJvdGhlciI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7Zm9vfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICAiZGVmYXVsdCI6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJjb250ZW50In0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICAgICJvdGhlciI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7Zm9vfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgICAgImFub3RoZXIiOiAoZm9vKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHtmb28KICAgICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICB7Zm9vLmJhcn0KICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICA6IG51bGwKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9KX0KICAgICAgPC9Gb29CYXI+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE1MTkAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTs7Ozs7Ozs7QTtBO0E7QSx5RTtBLEE7QSxxRDtBLEE7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sTSxrSixpQyxFLGlCLEUsaUIsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUMsTTtBLFFBQU0sbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBQ0EsUyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFPLEUsTSxDO0EsTUFDZixDQUFDLE07QSxRQUFNLG1DO0EsTSxDO0EsUSxDLGdEO0EsVUFBRSxTLEdBQVNDLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLENBQUdDLEdBQUcsQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE0sQztBLE1BQ2xDLENBQUMsTTtBLFFBQU0sbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVQUFFLE8sR0FBT0QsSyxNO0EsWSxRO0EsYyxFO0EsZ0JBQU8sQ0FBR0MsR0FBRyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTSxDO0EsTUFDaEMsQ0FBQyxNO0EsUUFBTSxtQztBLE0sQztBLFEsQyxnRDtBLFVBQ00sUyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFRRixTLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxVQUNSLE8sR0FBT0MsSyxNO0EsWSxRO0EsYyxFO0EsZ0JBQU8sQ0FBRUMsR0FBRyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsVUFDbkIsUyxHQUFTQSxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUNQQSxHO0Esa0IsRSxFO0Esc0JBQVgsQ0FBQ0EsRztBLHdCQUFHLG1DO0Esc0IsQztBLHdCQUFZLENBQUVDLE9BQU8sQztBLHNCQUFFLEUsRyxDO0Esb0IsRztBLGdCLFE7QSxnQixDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUcvQixFLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxUPj43fDkiLCI8PFA+PjUiLCI8PFA+PjMiLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Rm9vQmFyPmNvbnRlbnQ8L0Zvb0Jhcj5cbjxGb29CYXIgI2RlZmF1bHQ9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0JhciAjb3RoZXI9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0Jhcj5cbiAgPHRlbXBsYXRlICNkZWZhdWx0PmNvbnRlbnQ8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI290aGVyPVwie2Zvb31cIj57e2Zvb319PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNhbm90aGVyPVwiZm9vXCI+XG4gICAgPGRpdiB2LWlmPVwiZm9vXCI+e3tmb28uYmFyfX08L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgPGRpdj5leHRyYW5vdXM8L2Rpdj5cbjwvRm9vQmFyPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 11.1. v-pre 

```vue-html
<pre v-pre>{{ interpolation }}</pre>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <pre
        /*<vuedx:tsx-completions-target/>*/
      >
        {"{{ interpolation }}"}
      </pre>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "pre">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTYxNgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8cHJlCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsie3sgaW50ZXJwb2xhdGlvbiB9fSJ9CiAgICAgIDwvcHJlPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJwcmUiPiwKICBdKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjQ5MwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRztBLFFBQUcsbUM7QSxNLEM7QSxRLENBQU9DLHFCLEM7QSxNQUFtQixFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjE5fDIxIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHByZSB2LXByZT57eyBpbnRlcnBvbGF0aW9uIH19PC9wcmU+XG5cbjwvdGVtcGxhdGU+Il19)

## 12.1. v-once 

```vue-html
<section v-once>{{ largeText }}</section>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let largeText = __VueDX__ctx.largeText
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {(() => {
        __VueDX__TypeCheck.internal.checkDirective("once" as const, "section" as const, undefined, undefined, {  });
      })()}
      <section
        /*<vuedx:tsx-completions-target/>*/
      >
        {largeText}
      </section>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let largeText = __VueDX__ctx.largeText
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "section">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTg0MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsYXJnZVRleHQgPSBfX1Z1ZURYX19jdHgubGFyZ2VUZXh0CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsoKCkgPT4gewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja0RpcmVjdGl2ZSgib25jZSIgYXMgY29uc3QsICJzZWN0aW9uIiBhcyBjb25zdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHsgIH0pOwogICAgICB9KSgpfQogICAgICA8c2VjdGlvbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7bGFyZ2VUZXh0fQogICAgICA8L3NlY3Rpb24+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsYXJnZVRleHQgPSBfX1Z1ZURYX19jdHgubGFyZ2VUZXh0CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAic2VjdGlvbiI+LAogIF0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTczAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsc0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sUztBLFEsMkNBQ1NBLGUsRUFBUixrQixFLFMsRSxTLEUsRSxFLEU7QSxNLEs7QSxNQUFELENBQUNDLE87QSxRQUFPLG1DO0EsTSxDO0EsUUFBUSxDQUFHQyxTQUFTLEM7QSxNQUFHLEUsTyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsc0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEU7QSxJLHNGLEM7QSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFQ+PjZ8MTUiLCI8PFA+PjciLCI8PFA+PjkiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c2VjdGlvbiB2LW9uY2U+e3sgbGFyZ2VUZXh0IH19PC9zZWN0aW9uPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 13.1. v-is 

```vue-html
<table>
  <tbody>
    <tr v-is="MyComponent"></tr>
  </tbody>
</table>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let MyComponent = __VueDX__ctx.MyComponent
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <table
        /*<vuedx:tsx-completions-target/>*/
      >
        <tbody
          /*<vuedx:tsx-completions-target/>*/
        >
          {(() => {

            const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, MyComponent, MyComponent, MyComponent);
            if (__VueDX__component == null) throw new Error
            return (
              <__VueDX__component
                /*<vuedx:tsx-completions-target/>*/
              >
                {__VueDX__TypeCheck.internal.checkSlots(__VueDX__component, {
                  default: () => {
                    return (
                      <>
                      </>
                    )
                  },
                })}
              </__VueDX__component>
            );
          })()}
        </tbody>
      </table>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let MyComponent = __VueDX__ctx.MyComponent
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "table">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjUxNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBNeUNvbXBvbmVudCA9IF9fVnVlRFhfX2N0eC5NeUNvbXBvbmVudAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8dGFibGUKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPHRib2R5CiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBNeUNvbXBvbmVudCwgTXlDb21wb25lbnQsIE15Q29tcG9uZW50KTsKICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19jb21wb25lbnQsIHsKICAgICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgPC9fX1Z1ZURYX19jb21wb25lbnQ+CiAgICAgICAgICAgICk7CiAgICAgICAgICB9KSgpfQogICAgICAgIDwvdGJvZHk+CiAgICAgIDwvdGFibGU+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBNeUNvbXBvbmVudCA9IF9fVnVlRFhfX2N0eC5NeUNvbXBvbmVudAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInRhYmxlIj4sCiAgXSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo3NDkAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTs7Ozs7Ozs7QTtBO0E7QSx5RTtBLEEsNEI7QSxFLDJCO0EsRSwwQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxLO0EsUUFBSyxtQztBLE0sQztBLFFBQ0osQ0FBQ0EsSztBLFVBQUssbUM7QSxRLEM7QSxVLFM7QTtBLFksMEtBQ01DLFcsRUFBQUEsVyxFQUFBQSxXLEU7QSxZLCtDO0EsWSxRO0EsY0FBVixDQUFDLGtCO0EsZ0JBQUUsbUM7QSxjLEM7QSxnQixDLDREO0Esa0IsTyxHLE07QSxvQixRO0Esc0IsRTtBLHNCLEc7QSxvQixDO0Esa0IsRTtBLGdCLEUsQztBLGNBQW9CLEUsa0IsQztBLFksRTtBLFUsSztBLFFBQ3pCLEUsSyxDO0EsTUFDRixFLEssQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDBDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFO0EsSSxvRixDO0EsRSxHO0EsQSxLOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj41IiwiPDxQPj4xMSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjx0YWJsZT5cbiAgPHRib2R5PlxuICAgIDx0ciB2LWlzPVwiTXlDb21wb25lbnRcIj48L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let num = __VueDX__ctx.num
  let str = __VueDX__ctx.str
  let arr = __VueDX__ctx.arr
  let obj = __VueDX__ctx.obj
  let itr = __VueDX__ctx.itr
  let boo = __VueDX__ctx.boo
  let sym = __VueDX__ctx.sym
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {
        __VueDX__TypeCheck.internal.renderList(num, (n) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {n}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(num, (n, i) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {n}
              {":"}
              {i}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(str, (s) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {s}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(str, (s, i) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {s}
              {":"}
              {i}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(arr, (a) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {a}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(arr, ({ value }) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {value}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(arr, ({ foo }) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {arr}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(arr, (a, i) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {a}
              {":"}
              {i}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(arr, ({ value }, i) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {value}
              {":"}
              {i}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(obj, (o) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {o}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(obj, (o, k) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {o}
              {":"}
              {k}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(obj, (o, k, i) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {o}
              {":"}
              {k}
              {":"}
              {i}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(itr, (t) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {t}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(boo, (b) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {b}
            </div>
          )
        })
      }
      {
        __VueDX__TypeCheck.internal.renderList(sym, (s) => {
          return (
            <div
              /*<vuedx:tsx-completions-target/>*/
            >
              {s}
            </div>
          )
        })
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let num = __VueDX__ctx.num
  let str = __VueDX__ctx.str
  let arr = __VueDX__ctx.arr
  let obj = __VueDX__ctx.obj
  let itr = __VueDX__ctx.itr
  let boo = __VueDX__ctx.boo
  let sym = __VueDX__ctx.sym
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NzAyMABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBudW0gPSBfX1Z1ZURYX19jdHgubnVtCiAgbGV0IHN0ciA9IF9fVnVlRFhfX2N0eC5zdHIKICBsZXQgYXJyID0gX19WdWVEWF9fY3R4LmFycgogIGxldCBvYmogPSBfX1Z1ZURYX19jdHgub2JqCiAgbGV0IGl0ciA9IF9fVnVlRFhfX2N0eC5pdHIKICBsZXQgYm9vID0gX19WdWVEWF9fY3R4LmJvbwogIGxldCBzeW0gPSBfX1Z1ZURYX19jdHguc3ltCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChudW0sIChuKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtufQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChudW0sIChuLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtufQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHN0ciwgKHMpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3N9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHN0ciwgKHMsIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3N9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoYSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7YX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyB2YWx1ZSB9KSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHt2YWx1ZX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyBmb28gfSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7YXJyfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsIChhLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHthfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKHsgdmFsdWUgfSwgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7dmFsdWV9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7b30KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobywgaykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7b30KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtrfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChvYmosIChvLCBrLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtvfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2t9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoaXRyLCAodCkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7dH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYm9vLCAoYikgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Yn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qoc3ltLCAocykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7c30KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbnVtID0gX19WdWVEWF9fY3R4Lm51bQogIGxldCBzdHIgPSBfX1Z1ZURYX19jdHguc3RyCiAgbGV0IGFyciA9IF9fVnVlRFhfX2N0eC5hcnIKICBsZXQgb2JqID0gX19WdWVEWF9fY3R4Lm9iagogIGxldCBpdHIgPSBfX1Z1ZURYX19jdHguaXRyCiAgbGV0IGJvbyA9IF9fVnVlRFhfX2N0eC5ib28KICBsZXQgc3ltID0gX19WdWVEWF9fY3R4LnN5bQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgozNTI3AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQztBLFEsdUNBQ2lCQSxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDUEQsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQXVCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUN6QkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1BELEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUF1QixDQUFHQyxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDekJELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNKRCxHLEUsQ0FBYkcsUyxDLEs7QSxVLFE7QSxZQUFaLENBQUNILEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBMEIsQ0FBR0ksS0FBSyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDbEJKLEcsRSxDQUFYSyxPLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0wsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUF3QixDQUFHQSxHQUFHLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNmQSxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBdUIsQ0FBR0MsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1pELEcsRSxDQUFqQkcsUyxFQUFXRixDLEMsSztBLFUsUTtBLFlBQXhCLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBK0IsQ0FBR0ksS0FBSyxDO0EsYyxDQUFHRixHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3JDRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDUEQsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQXVCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNqQkQsRyxFLENBQVpDLEMsRUFBR0EsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQW5CLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBMEIsQ0FBR0MsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNwQ0QsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1pELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNaRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSwrQjtBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFA+PjEiLCI8PFQ+PjF8MyIsIjw8UD4+OSIsIjw8UD4+NSIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1mb3I9XCJuIG9mIG51bVwiPnt7IG4gfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobiwgaSkgb2YgbnVtXCI+e3sgbiB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwicyBvZiBzdHJcIj57eyBzIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHMsIGkpIG9mIHN0clwiPnt7IHMgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cImEgb2YgYXJyXCI+e3sgYSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInsgdmFsdWUgfSBvZiBhcnJcIj57eyB2YWx1ZSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInsgZm9vIH0gb2YgYXJyXCI+e3sgYXJyIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKGEsIGkpIG9mIGFyclwiPnt7IGEgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIih7IHZhbHVlIH0sIGkpIG9mIGFyclwiPnt7IHZhbHVlIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJvIG9mIG9ialwiPnt7IG8gfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaykgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG8sIGssIGkpIG9mIG9ialwiPnt7IG8gfX06e3sgayB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwidCBvZiBpdHJcIj57eyB0IH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYiBvZiBib29cIj57eyBiIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwicyBvZiBzeW1cIj57eyBzIH19PC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {(() => {

        const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, foo, foo, foo);
        if (__VueDX__component == null) throw new Error
        return (
          <__VueDX__component
            /*<vuedx:tsx-completions-target/>*/
          >
            {__VueDX__TypeCheck.internal.checkSlots(__VueDX__component, {
              "default": ({bar}) => {
                return (
                  <>
                    {(() => {

                      const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, bar, bar, bar);
                      if (__VueDX__component == null) throw new Error
                      return (
                        <__VueDX__component
                          /*<vuedx:tsx-completions-target/>*/
                        >
                          {__VueDX__TypeCheck.internal.checkSlots(__VueDX__component, {
                            "default": ({baz}) => {
                              return (
                                <>
                                  {(() => {

                                    const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, baz, baz, baz);
                                    if (__VueDX__component == null) throw new Error
                                    return (
                                      <__VueDX__component
                                        /*<vuedx:tsx-completions-target/>*/
                                      >
                                        {__VueDX__TypeCheck.internal.checkSlots(__VueDX__component, {
                                          "other": ({ foo }) => {
                                            return (
                                              <>
                                                {(() => {

                                                  const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, foo, foo, foo);
                                                  if (__VueDX__component == null) throw new Error
                                                  return (
                                                    <__VueDX__component
                                                      /*<vuedx:tsx-completions-target/>*/
                                                    />

                                                  );
                                                })()}
                                              </>
                                            )
                                          },
                                          "default": ({ bar }) => {
                                            return (
                                              <>
                                                {(() => {

                                                  const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, bar, bar, bar);
                                                  if (__VueDX__component == null) throw new Error
                                                  return (
                                                    <__VueDX__component
                                                      /*<vuedx:tsx-completions-target/>*/
                                                    />

                                                  );
                                                })()}
                                              </>
                                            )
                                          },
                                        })}
                                      </__VueDX__component>
                                    );
                                  })()}
                                </>
                              )
                            },
                          })}
                        </__VueDX__component>
                      );
                    })()}
                  </>
                )
              },
            })}
          </__VueDX__component>
        );
      })()}
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NjA3OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsoKCkgPT4gewoKICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGZvbywgZm9vLCBmb28pOwogICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgcmV0dXJuICgKICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgID4KICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICJkZWZhdWx0IjogKHtiYXJ9KSA9PiB7CiAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmFyLCBiYXIsIGJhcik7CiAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7YmF6fSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmF6LCBiYXosIGJheik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvdGhlciI6ICh7IGZvbyB9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGZvbywgZm9vLCBmb28pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJkZWZhdWx0IjogKHsgYmFyIH0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmFyLCBiYXIsIGJhcik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4KCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgICAgICAgICAgPC9fX1Z1ZURYX19jb21wb25lbnQ+CiAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIH0pfQogICAgICAgICAgPC9fX1Z1ZURYX19jb21wb25lbnQ+CiAgICAgICAgKTsKICAgICAgfSkoKX0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7CgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNTkyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7Ozs7Ozs7O0E7QTtBO0EseUU7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sUztBO0EsUSwwS0FDZ0JBLEcsRUFBQUEsRyxFQUFBQSxHLEU7QSxRLCtDO0EsUSxRO0EsVUFBaEIsQ0FBQyxrQjtBLFlBQVMsbUM7QSxVLEM7QSxZLEMsNEQ7QSxjQUFZLFMsR0FBU0MsSyxNO0EsZ0IsUTtBLGtCLEU7QSxvQixTO0E7QSxzQiwwS0FDYkQsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLHNCLCtDO0Esc0IsUTtBLHdCQUFoQixDQUFDLGtCO0EsMEJBQVMsbUM7QSx3QixDO0EsMEIsQyw0RDtBLDRCQUFZLFMsR0FBU0MsSyxNO0EsOEIsUTtBLGdDLEU7QSxrQyxTO0E7QSxvQywwS0FDYkQsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLG9DLCtDO0Esb0MsUTtBLHNDQUFoQixDQUFDLGtCO0Esd0NBQVMsbUM7QSxzQyxDO0Esd0MsQyw0RDtBLDBDQUNHLE8sR0FBT0UsTyxNO0EsNEMsUTtBLDhDLEU7QSxnRCxTO0E7QSxrRCwwS0FDQUYsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLGtELCtDO0Esa0QsUTtBLG9EQUFoQixDQUFDLGtCO0Esc0RBQVMsbUM7QSxvRCxFO0E7QSxrRCxFO0EsZ0QsSztBLDhDLEc7QSw0QyxDO0EsMEMsRTtBLDBDQUVELFMsR0FBU0UsTyxNO0EsNEMsUTtBLDhDLEU7QSxnRCxTO0E7QSxrRCwwS0FDRkYsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLGtELCtDO0Esa0QsUTtBLG9EQUFoQixDQUFDLGtCO0Esc0RBQVMsbUM7QSxvRCxFO0E7QSxrRCxFO0EsZ0QsSztBLDhDLEc7QSw0QyxDO0EsMEMsRTtBLHdDLEUsQztBLHNDQUVkLEUsa0IsQztBLG9DLEU7QSxrQyxLO0EsZ0MsRztBLDhCLEM7QSw0QixFO0EsMEIsRSxDO0Esd0JBQ0YsRSxrQixDO0Esc0IsRTtBLG9CLEs7QSxrQixHO0EsZ0IsQztBLGMsRTtBLFksRSxDO0EsVUFDRixFLGtCLEM7QSxRLEU7QSxNLEs7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFA+PjUiLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Y29tcG9uZW50IDppcz1cImZvb1wiICNkZWZhdWx0PVwie2Jhcn1cIj5cbiAgPGNvbXBvbmVudCA6aXM9XCJiYXJcIiAjZGVmYXVsdD1cIntiYXp9XCI+XG4gICAgPGNvbXBvbmVudCA6aXM9XCJiYXpcIj5cbiAgICAgIDx0ZW1wbGF0ZSAjb3RoZXI9XCJ7IGZvbyB9XCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiZm9vXCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGJhciB9XCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)

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
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let bars = __VueDX__ctx.bars
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {
        __VueDX__TypeCheck.internal.renderList(bars, (bar) => {
          return (
            {(() => {

              const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, bar, bar, bar);
              if (__VueDX__component == null) throw new Error
              return (
                <__VueDX__component
                  /*<vuedx:tsx-completions-target/>*/
                >
                  {__VueDX__TypeCheck.internal.checkSlots(__VueDX__component, {
                    default: () => {
                      return (
                        <>
                          {(() => {

                            const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, bar, bar, bar);
                            if (__VueDX__component == null) throw new Error
                            return (
                              <__VueDX__component
                                /*<vuedx:tsx-completions-target/>*/
                              >
                                {__VueDX__TypeCheck.internal.checkSlots(__VueDX__component, {
                                  "default": ({baz}) => {
                                    return (
                                      <>
                                        {
                                          __VueDX__TypeCheck.internal.renderList(baz, (item) => {
                                            return (
                                              {(() => {

                                                const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, baz[bar], baz[bar], baz[bar]);
                                                if (__VueDX__component == null) throw new Error
                                                return (
                                                  <__VueDX__component
                                                    /*<vuedx:tsx-completions-target/>*/
                                                  >
                                                    {__VueDX__TypeCheck.internal.checkSlots(__VueDX__component, {
                                                      default: () => {
                                                        return (
                                                          <>
                                                            {(() => {

                                                              const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, item, item, item);
                                                              if (__VueDX__component == null) throw new Error
                                                              return (
                                                                <__VueDX__component
                                                                  /*<vuedx:tsx-completions-target/>*/
                                                                />

                                                              );
                                                            })()}
                                                          </>
                                                        )
                                                      },
                                                    })}
                                                  </__VueDX__component>
                                                );
                                              })()}
                                            )
                                          })
                                        }
                                      </>
                                    )
                                  },
                                })}
                              </__VueDX__component>
                            );
                          })()}
                        </>
                      )
                    },
                  })}
                </__VueDX__component>
              );
            })()}
          )
        })
      }
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let bars = __VueDX__ctx.bars
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NTk4NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBiYXJzID0gX19WdWVEWF9fY3R4LmJhcnMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGJhcnMsIChiYXIpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyLCBiYXIpOwogICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBiYXIsIGJhciwgYmFyKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19jb21wb25lbnQsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJkZWZhdWx0IjogKHtiYXp9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYmF6LCAoaXRlbSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmF6W2Jhcl0sIGJheltiYXJdLCBiYXpbYmFyXSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgaXRlbSwgaXRlbSwgaXRlbSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4KCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICk7CiAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYmFycyA9IF9fVnVlRFhfX2N0eC5iYXJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTQzNQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLEM7QSxRLHVDQUNtQ0EsSSxFLENBQVBDLEcsQyxLO0EsVSxRO0EsWSxTO0E7QSxjLDBLQUFaQSxHLEVBQUFBLEcsRUFBQUEsRyxFO0EsYywrQztBLGMsUTtBLGdCQUFoQixDQUFDLGtCO0Esa0JBQVMsbUM7QSxnQixDO0Esa0IsQyw0RDtBLG9CLE8sRyxNO0Esc0IsUTtBLHdCLEU7QSwwQixTO0E7QSw0QiwwS0FDUUEsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLDRCLCtDO0EsNEIsUTtBLDhCQUFoQixDQUFDLGtCO0EsZ0NBQVMsbUM7QSw4QixDO0EsZ0MsQyw0RDtBLGtDQUFZLFMsR0FBU0MsSyxNO0Esb0MsUTtBLHNDLEU7QSx3QyxDO0EsMEMsdUNBQ1lELEcsRSxDQUFSRCxJLEMsSztBLDRDLFE7QSw4QyxTO0E7QSxnRCwwS0FBakJHLFEsRUFBQUEsUSxFQUFBQSxRLEU7QSxnRCwrQztBLGdELFE7QSxrREFBaEIsQ0FBQyxrQjtBLG9EQUFTLG1DO0Esa0QsQztBLG9ELEMsNEQ7QSxzRCxPLEcsTTtBLHdELFE7QSwwRCxFO0EsNEQsUztBO0EsOEQsMEtBQ1FILEksRUFBQUEsSSxFQUFBQSxJLEU7QSw4RCwrQztBLDhELFE7QSxnRUFBaEIsQ0FBQyxrQjtBLGtFQUFTLG1DO0EsZ0UsRTtBO0EsOEQsRTtBLDRELEs7QSwwRCxHO0Esd0QsQztBLHNELEU7QSxvRCxFLEM7QSxrREFDWixFLGtCLEM7QSxnRCxFO0EsOEMsSztBLDRDLEM7QSwwQyxDLEM7QSx3QyxDO0Esc0MsRztBLG9DLEM7QSxrQyxFO0EsZ0MsRSxDO0EsOEJBQ0YsRSxrQixDO0EsNEIsRTtBLDBCLEs7QSx3QixHO0Esc0IsQztBLG9CLEU7QSxrQixFLEM7QSxnQkFDRixFLGtCLEM7QSxjLEU7QSxZLEs7QSxVLEM7QSxRLEMsQztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsK0I7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NCIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxjb21wb25lbnQgOmlzPVwiYmFyXCIgdi1mb3I9XCJiYXIgb2YgYmFyc1wiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJheltiYXJdXCIgdi1mb3I9XCJpdGVtIG9mIGJhelwiID5cbiAgICAgIDxjb21wb25lbnQgOmlzPVwiaXRlbVwiIC8+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)

## 17.1. \$attrs binding 

```vue-html
<Foo>
  <input v-bind="$attrs" />
</Foo>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__Script_defineComponent } from "vue";

const __VueDX__Script_Component = __VueDX__Script_defineComponent({});
function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Script_Component())
//#region <template>
import type { GlobalComponents as __VueDX__GlobalComponents } from 'vue';
/*<vuedx:templateGlobals>*/
const __VueDX___get_identifier_Foo = () => Foo;
/*</vuedx:templateGlobals>*/
function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $attrs = __VueDX__ctx.$attrs
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const Foo = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, __VueDX___get_identifier_Foo(), "Foo" as const, "Foo" as const);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <Foo
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(Foo, {
          default: () => {
            return (
              <>
                <input
                  {...($attrs)}
                  /*<vuedx:tsx-completions-target/>*/
                />
              </>
            )
          },
        })}
      </Foo>
    </>
  )
}
__VueDX__render();
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $attrs = __VueDX__ctx.$attrs
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX__attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX__attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjI1OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCB9IGZyb20gInZ1ZSI7Cgpjb25zdCBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50ID0gX19WdWVEWF9fU2NyaXB0X2RlZmluZUNvbXBvbmVudCh7fSk7CmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUIGV4dGVuZHMge30+KGFyZzA6IFQpIHsKICBjb25zdCBrZXkgPSAiRXhhbXBsZSIgYXMgY29uc3Q7CiAgcmV0dXJuIHsgLi4uYXJnMCwgW2tleV06IEV4YW1wbGUgfTsKfQovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCB0eXBlIHsgR2xvYmFsQ29tcG9uZW50cyBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzIH0gZnJvbSAndnVlJzsKLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28gPSAoKSA9PiBGb287Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkYXR0cnMgPSBfX1Z1ZURYX19jdHguJGF0dHJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgRm9vID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vKCksICJGb28iIGFzIGNvbnN0LCAiRm9vIiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8Rm9vCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb28sIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgPGlucHV0CiAgICAgICAgICAgICAgICAgIHsuLi4oJGF0dHJzKX0KICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJGF0dHJzID0gX19WdWVEWF9fY3R4LiRhdHRycwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjYzOAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBOzs7Ozs7OztBO0E7QTtBLHlFO0EsQTtBLCtDO0EsQTtBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDLEc7QSxRQUFHLG1DO0EsTSxDO0EsUSxDLDZDO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCQUNGLENBQUNBLEs7QSxrQixLQUFjQyxNLEU7QSxrQkFBVCxtQztBLGdCLEU7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQ1IsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxnQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLCtCO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Rm9vPlxuICA8aW5wdXQgdi1iaW5kPVwiJGF0dHJzXCIgLz5cbjwvRm9vPlxuXG48L3RlbXBsYXRlPiJdfQ==)

