# Baseline Spec

## 1.1. element > single

```vue-html
<div>foo</div>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQ3NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7ImZvbyJ9CiAgICAgIDwvZGl2PgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjQ2NgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsRztBLFEsbUM7QSxNLEM7QSxRLENBQUlDLEssQztBLE1BQUcsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxrRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjN8NSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXY+Zm9vPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

## 1.2. element > fragment with errors

```vue-html
<HelloWorld n />
<span>Name: {{ name + }}</span>
<p v-bind:></p>
<p v-if=""></p>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let name = __VueDX__ctx.name
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "p">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzM0MgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+Ci8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfSGVsbG9Xb3JsZCA9ICgpID0+IEhlbGxvV29ybGQ7Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBuYW1lID0gX19WdWVEWF9fY3R4Lm5hbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBIZWxsb1dvcmxkID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfSGVsbG9Xb3JsZCgpLCAiSGVsbG9Xb3JsZCIgYXMgY29uc3QsICJIZWxsb1dvcmxkIiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8SGVsbG9Xb3JsZAogICAgICAgIG4KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgoKICAgICAgPHNwYW4KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJOYW1lOiAifQogICAgICAgIHtuYW1lICt9CiAgICAgIDwvc3Bhbj4KICAgICAgPHAKICAgICAgICB7Li4uKC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgIDwvcD4KICAgICAgewogICAgICAgID8gPD4KICAgICAgICAgICAgPHAKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgIDwvcD4KICAgICAgICAgIDwvPgogICAgICAgIDogbnVsbAogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbmFtZSA9IF9fVnVlRFhfX2N0eC5uYW1lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInAiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo4MjMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0E7QSw2RDtBLEE7QSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLFUsa0oscUMsRSxxQixFLHFCLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDLFU7QSxRQUFXQSxDO0EsUSxtQztBLE0sRTtBO0EsTUFDWixDQUFDQyxJO0EsUSxtQztBLE0sQztBLFEsQ0FBS0MsUSxDO0EsUUFBTSxDQUFHQyxNQUFNLEM7QSxNQUFHLEUsSSxDO0EsTUFDeEIsQ0FBQ0gsQztBLFEsS0FBUyw2QixFO0EsUSxtQztBLE0sQztBLE1BQUMsRSxDLEM7QSxNLENBQ0ZJLEE7QSxRLEUsRTtBLFlBQVQsQ0FBQ0osQztBLGMsbUM7QSxZLEM7QSxZQUFVLEUsQyxDO0EsVSxHO0EsTSxRO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGdGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MSIsIjw8UD4+NCIsIjw8VD4+Nnw4IiwiPDxQPj42IiwiPDxQPj4wIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEhlbGxvV29ybGQgbiAvPlxuPHNwYW4+TmFtZToge3sgbmFtZSArIH19PC9zcGFuPlxuPHAgdi1iaW5kOj48L3A+XG48cCB2LWlmPVwiXCI+PC9wPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NTEyMQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+Ci8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vQmFyID0gKCkgPT4gRm9vQmFyOwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vID0gKCkgPT4gRm9vOwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfZm9vQmFyID0gKCkgPT4gZm9vQmFyOwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfVW5rbm93bkVsZW1lbnQgPSAoKSA9PiBVbmtub3duRWxlbWVudDsKLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgRm9vQmFyID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vQmFyKCksICJGb29CYXIiIGFzIGNvbnN0LCAiRm9vQmFyIiBhcyBjb25zdCk7CiAgY29uc3QgRm9vID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vKCksICJGb28iIGFzIGNvbnN0LCAiRm9vIiBhcyBjb25zdCk7CiAgY29uc3QgVW5rbm93bkVsZW1lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Vbmtub3duRWxlbWVudCgpLCAidW5rbm93bi1lbGVtZW50IiBhcyBjb25zdCwgIlVua25vd25FbGVtZW50IiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvby5CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvby5CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvby5CYXI+CiAgICAgIDxGb28uQmFyLkJhegogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLkJhci5CYXosIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvby5CYXIuQmF6PgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiZm9vIn0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9KX0KICAgICAgPC9Gb29CYXI+CiAgICAgIDxVbmtub3duRWxlbWVudAogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoVW5rbm93bkVsZW1lbnQsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L1Vua25vd25FbGVtZW50PgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxMzM1AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBO0EscUQ7QSxBLCtDO0EsQSxxRDtBLEEscUU7QSxBO0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLE0sa0osaUMsRSxpQixFLGlCLEU7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLE0sYyxrSix5QyxFLDBCLEUseUIsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUMsTTtBLFEsbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBT0EsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTSxDO0EsTUFDWCxDQUFDLE87QSxRLG1DO0EsTSxDO0EsUSxDLGlEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQVFBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE8sQztBLE1BQ1osQ0FBQyxXO0EsUSxtQztBLE0sQztBLFEsQyxxRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFZQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxXLEM7QSxNQUNoQixDQUFDLE07QSxRLG1DO0EsTSxDO0EsUSxDLGdEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQU9BLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE0sQztBLE1BQ1gsQ0FBQyxNO0EsUSxtQztBLE0sQztBLFEsQyxnRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFRQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxNLEM7QSxNQUNaLENBQUMsYztBLFEsbUM7QSxNLEM7QSxRLEMsd0Q7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBZ0JBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLGMsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFQ+PjN8NSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb29CYXI+Zm9vPC9Gb29CYXI+XG48Rm9vLkJhcj5mb288L0Zvby5CYXI+XG48Rm9vLkJhci5CYXo+Zm9vPC9Gb28uQmFyLkJhej5cbjxmb29CYXI+Zm9vPC9mb29CYXI+XG48Zm9vLWJhcj5mb288L2Zvby1iYXI+XG48dW5rbm93bi1lbGVtZW50PmZvbzwvdW5rbm93bi1lbGVtZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
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
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzcxMQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgcHJvcHMgPSBfX1Z1ZURYX19jdHgucHJvcHMKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWUKICBsZXQgZHluYW1pYyA9IF9fVnVlRFhfX2N0eC5keW5hbWljCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxkaXYKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgewogICAgICAgICAgJHNsb3RzLmRlZmF1bHQgIT0gbnVsbCA/ICRzbG90cy5kZWZhdWx0KHt9KSA6ICgKICAgICAgICAgICAgPD4KICAgICAgICAgICAgICB7ImZhbGxiYWNrIGNvbnRlbnQifQogICAgICAgICAgICA8Lz4KICAgICAgICAgICkKCiAgICAgICAgfQogICAgICAgIDxzcGFuCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsKICAgICAgICAgICAgJHNsb3RzLm90aGVyICE9IG51bGwgPyAkc2xvdHMub3RoZXIoewogICAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgICAgbXlQcm9wOiB2YWx1ZSwKICAgICAgICAgICAgfSkgOiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiZmFsbGJhY2sgY29udGVudCJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKCiAgICAgICAgICB9CiAgICAgICAgPC9zcGFuPgogICAgICAgIHsKICAgICAgICAgICRzbG90cy5hbm90aGVyICE9IG51bGwgPyAkc2xvdHMuYW5vdGhlcih7CiAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgICAgICB9KSA6IG51bGwKICAgICAgICB9CiAgICAgICAgewogICAgICAgICAgJHNsb3RzLiJuYW1lIiAhPSBudWxsID8gJHNsb3RzLiJuYW1lIih7CiAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgICAgICB9KSA6IG51bGwKICAgICAgICB9CiAgICAgIDwvZGl2PgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IHByb3BzID0gX19WdWVEWF9fY3R4LnByb3BzCiAgbGV0IHZhbHVlID0gX19WdWVEWF9fY3R4LnZhbHVlCiAgbGV0IGR5bmFtaWMgPSBfX1Z1ZURYX19jdHguZHluYW1pYwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAgewogICAgICBkZWZhdWx0OiB7fSwKICAgIH0sCiAgICB7CiAgICAgICJvdGhlciI6IHsKICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgIH0sCiAgICB9LAogICAgewogICAgICAiYW5vdGhlciI6IHsKICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgIH0sCiAgICB9LAogICAgewogICAgICBbZHluYW1pY106IHsKICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgIH0sCiAgICB9LAogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNDU3AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsOEI7QSxFLDhCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxHO0EsUSxtQztBLE0sQztBLFEsQztBLFUsTSxRLFcsTSxRLEUsRSxHLEM7QSxZLEU7QSxjLENBQ09DLGtCLEM7QSxZLEc7QSxVLEM7QTtBLFEsQztBLFFBQ04sQ0FBQ0MsSTtBLFUsbUM7QSxRLEM7QSxVLEM7QSxZLE0sQ0FDWUMsSyxXLE0sQ0FBQUEsSyxFO0EsY0FBUSxJQUFRQyxLLEMsQztBLFlBQU8sRUFBQ0MsTSxFQUFRRCxLLEM7QSxZLEUsRyxDO0EsYyxFO0EsZ0IsQ0FBT0gsa0IsQztBLGMsRztBLFksQztBO0EsVSxDO0EsUUFDcEQsRSxJLEM7QSxRLEM7QSxVLE0sQ0FDV0ssTyxXLE0sQ0FBQUEsTyxFO0EsWUFBVSxJQUFRRixLLEMsQztBLFVBQU8sRUFBQ0MsTSxFQUFRRCxLLEM7QSxVLEUsRyxJO0EsUSxDO0EsUSxDO0EsVSxNLENBQ3RDRyxNLFcsTSxDQUFBQSxNLEU7QSxZQUFlLElBQVFILEssQyxDO0EsVUFBTyxFQUFDQyxNLEVBQVFELEssQztBLFUsRSxHLEk7QSxRLEM7QSxNQUNoRCxFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDhCO0EsRSw4QjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxJLEM7QSxNLE8sRSxDLEU7QSxJLEMsQztBLEksQztBLE0sTyxFLEM7QSxRLEksSyxDLEM7QSxNLEUsTSxFLEssQztBLE0sRTtBLEksQyxDO0EsSSxDO0EsTSxTLEUsQztBLFEsSSxLLEMsQztBLE0sRSxNLEUsSyxDO0EsTSxFO0EsSSxDLEM7QSxJLEM7QSxNLEMsTyxDLEUsQztBLFEsSSxLLEMsQztBLE0sRSxNLEUsSyxDO0EsTSxFO0EsSSxDLEM7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+MTZ8MTgiLCI8PFA+PjQiLCI8PFQ+Pjd8NSIsIjw8UD4+NSIsIjw8UD4+NiIsIjw8VD4+OXw3IiwiPDxUPj40fDYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3Bhbj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDwvc3Bhbj5cbiAgPHNsb3QgbmFtZT1cImFub3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPjwvc2xvdD5cbiAgPHNsb3QgOm5hbWU9XCJkeW5hbWljXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIiAvPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
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
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDEzNgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGlzdCA9IF9fVnVlRFhfX2N0eC5saXN0CiAgbGV0IHByb3BzID0gX19WdWVEWF9fY3R4LnByb3BzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChsaXN0LCAoaXRlbXMpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgJHNsb3RzLmRlZmF1bHQgIT0gbnVsbCA/ICRzbG90cy5kZWZhdWx0KHt9KSA6ICgKICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICB7ImZhbGxiYWNrIGNvbnRlbnQifQogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICkKCiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGl0ZW1zLCAoaXRlbSkgPT4gewogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgIDxzcGFuCiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgJHNsb3RzLm90aGVyICE9IG51bGwgPyAkc2xvdHMub3RoZXIoewogICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgICAgICAgICAgICAgICAgbXlQcm9wOiBpdGVtLAogICAgICAgICAgICAgICAgICAgICAgICB9KSA6ICgKICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgeyJmYWxsYmFjayBjb250ZW50In0KICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgKQoKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICA8L3NwYW4+CiAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGlzdCA9IF9fVnVlRFhfX2N0eC5saXN0CiAgbGV0IHByb3BzID0gX19WdWVEWF9fY3R4LnByb3BzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdCgKICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobGlzdCwgKGl0ZW1zKSA9PiAoCiAgICAgICAgewogICAgICAgICAgZGVmYXVsdDoge30sCiAgICAgICAgfQogICAgICApKQogICAgKSwKICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KAogICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChsaXN0LCAoaXRlbXMpID0+ICgKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdCgKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGl0ZW1zLCAoaXRlbSkgPT4gKAogICAgICAgICAgICB7CiAgICAgICAgICAgICAgIm90aGVyIjogewogICAgICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgICAgIG15UHJvcDogaXRlbSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9CiAgICAgICAgICApKQogICAgICAgICkKICAgICAgKSkKICAgICksCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjEyOTYAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSw0QjtBLEUsOEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQztBLFEsdUNBQXFCQSxJLEUsQ0FBVEMsSyxDLEs7QSxVLFE7QSxZQUFaLENBQUNDLEc7QSxjLG1DO0EsWSxDO0EsYyxDO0EsZ0IsTSxRLFcsTSxRLEUsRSxHLEM7QSxrQixFO0Esb0IsQ0FDT0Msa0IsQztBLGtCLEc7QSxnQixDO0E7QSxjLEM7QSxjLEM7QSxnQix1Q0FDZUYsSyxFLENBQVJELEksQyxLO0Esa0IsUTtBLG9CQUFiLENBQUNBLEk7QSxzQixtQztBLG9CLEM7QSxzQixDO0Esd0IsTSxDQUNZSSxLLFcsTSxDQUFBQSxLLEU7QSwwQkFBUSxJQUFRSCxLLEMsQztBLHdCQUFPLEVBQUNJLE0sRUFBUUwsSSxDO0Esd0IsRSxHLEM7QSwwQixFO0EsNEIsQ0FBTUcsa0IsQztBLDBCLEc7QSx3QixDO0E7QSxzQixDO0Esb0JBQ25ELEUsSSxDO0Esa0IsQztBLGdCLEMsQztBLGMsQztBLFlBQ0YsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDRCO0EsRSw4QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEksZ0MsQztBLE0sc0MsQyxJLEUsQyxLLEMsSztBLFEsQztBLFUsTyxFLEMsRTtBLFEsQztBLE0sRTtBLEksQyxDO0EsSSxnQyxDO0EsTSxzQyxDLEksRSxDLEssQyxLO0EsUSxnQyxDO0EsVSxzQyxDLEssRSxDLEksQyxLO0EsWSxDO0EsYyxPLEUsQztBLGdCLEksSyxDLEM7QSxjLEUsTSxFLEksQztBLGMsRTtBLFksQztBLFUsRTtBLFEsQztBLE0sRTtBLEksQyxDO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxrRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjQiLCI8PFA+PjUiLCI8PFA+PjMiLCI8PFQ+PjE2fDE4IiwiPDxUPj43fDUiLCI8PFA+PjYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtZm9yPVwiaXRlbXMgb2YgbGlzdFwiPlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3BhbiB2LWZvcj1cIml0ZW0gb2YgaXRlbXNcIj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJpdGVtXCI+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

## 2.1. v-bind 

```vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
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
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "input">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzI5NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+Ci8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vID0gKCkgPT4gRm9vOwovKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXlJbnB1dCA9IF9fVnVlRFhfX2N0eC5teUlucHV0CiAgbGV0IGN1c3RvbU5hbWUgPSBfX1Z1ZURYX19jdHguY3VzdG9tTmFtZQogIGxldCByZXN0ID0gX19WdWVEWF9fY3R4LnJlc3QKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28oKSwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIHZhbHVlPXtteUlucHV0fQogICAgICAgIHsuLi4oe1tjdXN0b21OYW1lXTogbXlJbnB1dH0pfQogICAgICAgIHsuLi4ocmVzdCl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPEZvbwogICAgICAgIHZhbHVlPXtteUlucHV0fQogICAgICAgIHsuLi4oe1tjdXN0b21OYW1lXTogbXlJbnB1dH0pfQogICAgICAgIHsuLi4ocmVzdCl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KCiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXlJbnB1dCA9IF9fVnVlRFhfX2N0eC5teUlucHV0CiAgbGV0IGN1c3RvbU5hbWUgPSBfX1Z1ZURYX19jdHguY3VzdG9tTmFtZQogIGxldCByZXN0ID0gX19WdWVEWF9fY3R4LnJlc3QKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaW5wdXQiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo4MjUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0E7QSwrQztBLEE7QSw0QjtBLEUsMkI7QSxFLGtDO0EsRSx3QztBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxLO0EsUUFBT0EsSyxDLENBQU9DLE8sQztBLFEsT0FBV0MsVSxDLEVBQWFELE8sRztBLFEsS0FBaUJFLEksRTtBLFEsbUM7QSxNLEU7QSxNQUN4RCxDQUFDLEc7QSxRQUFLSCxLLEMsQ0FBT0MsTyxDO0EsUSxPQUFXQyxVLEMsRUFBYUQsTyxHO0EsUSxLQUFpQkUsSSxFO0EsUSxtQztBLE0sRTtBO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLHdDO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksb0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj41IiwiPDxQPj43IiwiPDxQPj4xMCIsIjw8UD4+NCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxpbnB1dCA6dmFsdWU9XCJteUlucHV0XCIgOltjdXN0b21OYW1lXT1cIm15SW5wdXRcIiB2LWJpbmQ9XCJyZXN0XCIgLz5cbjxGb28gOnZhbHVlPVwibXlJbnB1dFwiIDpbY3VzdG9tTmFtZV09XCJteUlucHV0XCIgdi1iaW5kPVwicmVzdFwiIC8+XG5cbjwvdGVtcGxhdGU+Il19)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
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
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzkwMQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb25Gb2N1cyA9IF9fVnVlRFhfX2N0eC5vbkZvY3VzCiAgbGV0IHZhbHVlID0gX19WdWVEWF9fY3R4LnZhbHVlCiAgbGV0IGV2ZW50TmFtZSA9IF9fVnVlRFhfX2N0eC5ldmVudE5hbWUKICBsZXQgZXZlbnRzID0gX19WdWVEWF9fY3R4LmV2ZW50cwogIGxldCBmbk5hbWUgPSBfX1Z1ZURYX19jdHguZm5OYW1lCiAgbGV0IGNhbGxNeUZuID0gX19WdWVEWF9fY3R4LmNhbGxNeUZuCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIG9uRm9jdXM9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkZvY3VzLCAKICAgICAgICBdKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICBvblVwZGF0ZTp2YWx1ZT17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgICgkZXZlbnQpID0+IHsKICAgICAgICAgIHZhbHVlID0gJGV2ZW50CiAgICAgICAgICB9LCAKICAgICAgICBdKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICBvbkV2ZW50LW5hbWU9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICAvKjx2dWVkeDptaXNzaW5nRXhwcmVzc2lvbj4qLywgCiAgICAgICAgXSl9CiAgICAgICAgb25FdmVudE5hbWU9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICAvKjx2dWVkeDptaXNzaW5nRXhwcmVzc2lvbj4qLywgCiAgICAgICAgICAvKjx2dWVkeDptaXNzaW5nRXhwcmVzc2lvbj4qLywgCiAgICAgICAgXSl9CiAgICAgICAgey4uLihldmVudHMpfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIG9uS2V5ZG93bj17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIGZuTmFtZSwgCiAgICAgICAgICAoJGV2ZW50KSA9PiB7CiAgICAgICAgICBjYWxsTXlGbigkZXZlbnQpCiAgICAgICAgICB9LCAKICAgICAgICAgICRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpLCAKICAgICAgICAgICgkZXZlbnQpID0+IGNhbGxNeUZuKCRldmVudCksIAogICAgICAgICAgKCkgPT4gY2FsbE15Rm4oJGV2ZW50KSwgCiAgICAgICAgICBmdW5jdGlvbiBteUZ1bmN0aW9uKCRldmVudCkgewogICAgY2FsbE15Rm4oJGV2ZW50KQogIH0sIAogICAgICAgICAgZnVuY3Rpb24gbXlGdW5jdGlvbigpIHsKICAgIGNhbGxNeUZuKCRldmVudCkKICB9LCAKICAgICAgICBdKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9uRm9jdXMgPSBfX1Z1ZURYX19jdHgub25Gb2N1cwogIGxldCB2YWx1ZSA9IF9fVnVlRFhfX2N0eC52YWx1ZQogIGxldCBldmVudE5hbWUgPSBfX1Z1ZURYX19jdHguZXZlbnROYW1lCiAgbGV0IGV2ZW50cyA9IF9fVnVlRFhfX2N0eC5ldmVudHMKICBsZXQgZm5OYW1lID0gX19WdWVEWF9fY3R4LmZuTmFtZQogIGxldCBjYWxsTXlGbiA9IF9fVnVlRFhfX2N0eC5jYWxsTXlGbgogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTU2MQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGtDO0EsRSw4QjtBLEUsc0M7QSxFLGdDO0EsRSxnQztBLEUsb0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsSztBLFFBQU9DLE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRLG1DO0EsTSxFO0EsTUFDZixDQUFDRixLO0EsUUFBT0csYyxDLEMsbUM7QSxVLGE7QSxVQUFjQyxjO0EsVSxDLEU7QSxRLEUsQztBLFEsbUM7QSxNLEU7QSxNQUN0QixDQUFDSixLO0EsUUFBT0ssWSxDLEMsbUM7QSxVQUFELDZCLEU7QSxRLEUsQztBLFFBQWFDLFcsQyxDLG1DO0EsVUFBRCw2QixFO0EsVUFBVyw2QixFO0EsUSxFLEM7QSxRLEtBQW1CQyxNLEU7QSxRLG1DO0EsTSxFO0EsTUFDakQsQ0FBQ1AsSztBLFFBQ0VRLFMsQyxDLG1DO0EsVUFBU0QsTSxFO0EsVSxhO0EsVUFDS0UsZ0I7QSxVLEMsRTtBLFVBQ01DLDBCLEU7QSxVQUNDQyw0QixFO0EsVUFDREMsc0IsRTtBLFVBQ0ZDOztHLEU7QSxVQUdEQzs7RyxFO0EsUSxFLEM7QSxRLG1DO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLDhCO0EsRSxzQztBLEUsZ0M7QSxFLGdDO0EsRSxvQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8VD4+NXw3IiwiPDxQPj43IiwiPDxUPj4xMnwxNCIsIjw8UD4+MTQiLCI8PFQ+PjEwfDEyIiwiPDxUPj45fDExIiwiPDxQPj42IiwiPDxUPj43fDkiLCI8PFA+PjE2IiwiPDxQPj4yNiIsIjw8UD4+MjgiLCI8PFA+PjIyIiwiPDxQPj41NCIsIjw8UD4+NDgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgQGZvY3VzPVwib25Gb2N1c1wiIC8+XG48aW5wdXQgQHVwZGF0ZTp2YWx1ZT1cInZhbHVlID0gJGV2ZW50XCIgLz5cbjxpbnB1dCBAZXZlbnQtbmFtZSBAZXZlbnROYW1lIEBbZXZlbnROYW1lXSB2LW9uPVwiZXZlbnRzXCIgLz5cbjxpbnB1dFxuICBAa2V5ZG93bj1cImZuTmFtZVwiXG4gIEBrZXlkb3duLmxlZnQ9XCJjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQubGVmdD1cIiRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQucmlnaHQ9XCIoJGV2ZW50KSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQuZG93bj1cIigpID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbiAgQGtleWRvd24uY3RybC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbi8+XG5cbjwvdGVtcGxhdGU+Il19)

## 4.1. v-on multiple events 

```vue-html
<div @click="onClick" @hover="onHover" @press="onPress" />
<div @click="onClick" @hover="onHover" @press="onPress" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
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
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzE1NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb25DbGljayA9IF9fVnVlRFhfX2N0eC5vbkNsaWNrCiAgbGV0IG9uSG92ZXIgPSBfX1Z1ZURYX19jdHgub25Ib3ZlcgogIGxldCBvblByZXNzID0gX19WdWVEWF9fY3R4Lm9uUHJlc3MKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIG9uQ2xpY2s9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkNsaWNrLCAKICAgICAgICBdKX0KICAgICAgICBvbkhvdmVyPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25Ib3ZlciwgCiAgICAgICAgXSl9CiAgICAgICAgb25QcmVzcz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uUHJlc3MsIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxkaXYKICAgICAgICBvbkNsaWNrPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25DbGljaywgCiAgICAgICAgXSl9CiAgICAgICAgb25Ib3Zlcj17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uSG92ZXIsIAogICAgICAgIF0pfQogICAgICAgIG9uUHJlc3M9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvblByZXNzLCAKICAgICAgICBdKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9uQ2xpY2sgPSBfX1Z1ZURYX19jdHgub25DbGljawogIGxldCBvbkhvdmVyID0gX19WdWVEWF9fY3R4Lm9uSG92ZXIKICBsZXQgb25QcmVzcyA9IF9fVnVlRFhfX2N0eC5vblByZXNzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo4NDYAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsa0M7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEc7QSxRQUFLQyxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBVUQsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFFBQVVELE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRLG1DO0EsTSxFO0EsTUFDL0MsQ0FBQ0YsRztBLFFBQUtDLE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRQUFVRCxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBVUQsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFEsbUM7QSxNLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsa0M7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj41fDciLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG5cbjwvdGVtcGxhdGU+Il19)

## 5.1. v-if/v-else/v-else-if > single if statement

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjY1NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHthd2Vzb21lCiAgICAgICAgPyA8PgogICAgICAgICAgICA8aDEKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICAgICAgICA8L2gxPgogICAgICAgICAgPC8+CiAgICAgICAgOiBudWxsCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo1NTgAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUFVQSxPO0EsUSxFLEU7QSxZQUFWLENBQUNDLEU7QSxjLG1DO0EsWSxDO0EsYyxDQUFrQkMsaUIsQztBLFlBQWUsRSxFLEM7QSxVLEc7QSxNLFE7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksaUYsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj43IiwiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

## 5.2. v-if/v-else/v-else-if > if/else

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjg3OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHthd2Vzb21lCiAgICAgICAgPyA8PgogICAgICAgICAgICA8aDEKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICAgICAgICA8L2gxPgogICAgICAgICAgPC8+CiAgICAgICAgOiA8PgogICAgICAgICAgICA8aDEKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJPaCBubyDwn5iiIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNjY5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FBVUEsTztBLFEsRSxFO0EsWUFBVixDQUFDQyxFO0EsYyxtQztBLFksQztBLGMsQ0FBa0JDLGlCLEM7QSxZQUFlLEUsRSxDO0EsVSxHO0EsUSxFLEU7QSxZQUNsQyxDQUFDRCxFO0EsYyxtQztBLFksQztBLGMsQ0FBVUUsVSxDO0EsWUFBUSxFLEUsQztBLFUsRztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsSSxpRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjciLCI8PFA+PjIiLCI8PFQ+PjE1fDE3IiwiPDxUPj44fDEwIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "p">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "p">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzA0NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2sKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge29rCiAgICAgICAgPyA8PgogICAgICAgICAgICA8aDEKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJUaXRsZSJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICAgIDxwCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiUGFyYWdyYXBoIDEifQogICAgICAgICAgICA8L3A+CiAgICAgICAgICAgIDxwCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiUGFyYWdyYXBoIDIifQogICAgICAgICAgICA8L3A+CiAgICAgICAgICA8Lz4KICAgICAgICA6IG51bGwKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInAiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAicCI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjc1MgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQWdCQSxFO0EsUSxFLEU7QSxZQUNkLENBQUNBLEU7QSxjLG1DO0EsWSxDO0EsYyxDQUFHQyxPLEM7QSxZQUFLLEUsRSxDO0EsWUFDVCxDQUFDQyxDO0EsYyxtQztBLFksQztBLGMsQ0FBRUMsYSxDO0EsWUFBVyxFLEMsQztBLFlBQ2QsQ0FBQ0QsQztBLGMsbUM7QSxZLEM7QSxjLENBQUVDLGEsQztBLFlBQVcsRSxDLEM7QSxVLEc7QSxNLFE7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksaUYsQztBLEksZ0YsQztBLEksZ0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj41fDciLCI8PFA+PjEiLCI8PFQ+PjExfDEzIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHRlbXBsYXRlIHYtaWY9XCJva1wiPlxuICA8aDE+VGl0bGU8L2gxPlxuICA8cD5QYXJhZ3JhcGggMTwvcD5cbiAgPHA+UGFyYWdyYXBoIDI8L3A+XG48L3RlbXBsYXRlPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzM4OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgdHlwZSA9IF9fVnVlRFhfX2N0eC50eXBlCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHt0eXBlID09PSAnQScKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyIgQSAifQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICAgIDogdHlwZSA9PT0gJ0InCiAgICAgICAgPyA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiIEIgIn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IHR5cGUgPT09ICdDJwogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBDICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiIE5vdCBBL0IvQyAifQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgdHlwZSA9IF9fVnVlRFhfX2N0eC50eXBlCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjk1OAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQVdBLFk7QSxRLEUsRTtBLFlBQVgsQ0FBQ0MsRztBLGMsbUM7QSxZLEM7QSxjLENBQXdCQyxLLEM7QSxZQUV6QixFLEcsQztBLFUsRztBLFEsRUFDZ0JGLFk7QSxRLEUsRTtBLFlBQWhCLENBQUNDLEc7QSxjLG1DO0EsWSxDO0EsYyxDQUE2QkMsSyxDO0EsWUFFOUIsRSxHLEM7QSxVLEc7QSxRLEVBQ2dCRixZO0EsUSxFLEU7QSxZQUFoQixDQUFDQyxHO0EsYyxtQztBLFksQztBLGMsQ0FBNkJDLEssQztBLFlBRTlCLEUsRyxDO0EsVSxHO0EsUSxFLEU7QSxZQUNBLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsYyxDQUFXRSxhLEM7QSxZQUVaLEUsRyxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MTIiLCI8PFA+PjMiLCI8PFQ+PjV8NSIsIjw8VD4+MTN8MTMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJ0eXBlID09PSAnQSdcIj5cbiAgQVxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdCJ1wiPlxuICBCXG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ0MnXCI+XG4gIENcbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIE5vdCBBL0IvQ1xuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

## 5.5. v-if/v-else/v-else-if > no if

```vue-html
<h1 v-else>Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQ4NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgPC9oMT4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjQ4NgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsRTtBLFEsbUM7QSxNLEM7QSxRLENBQVVDLGlCLEM7QSxNQUFlLEUsRSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksaUYsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWVsc2U+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 5.6. v-if/v-else/v-else-if > if condition

```vue-html
<h1 v-if>Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU0OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgezw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTA0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDLEU7QSxZQUFBLENBQUNBLEU7QSxjLG1DO0EsWSxDO0EsYyxDQUFRQyxpQixDO0EsWUFBZSxFLEUsQztBLFUsRztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+MTV8MTciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1pZj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 5.7. v-if/v-else/v-else-if > else condition

```vue-html
<h1 v-else="ok">Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU0MABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2sKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgPC9oMT4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjUwNwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEU7QSxRLG1DO0EsTSxDO0EsUSxDQUFlQyxpQixDO0EsTUFBZSxFLEUsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjE1fDE3Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtZWxzZT1cIm9rXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 5.8. v-if/v-else/v-else-if > elif no if

```vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU2NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxoMQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgIDwvaDE+CiAgICAgIDxoMQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7Ik9oIG5vIPCfmKIifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTk5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsRTtBLFEsbUM7QSxNLEM7QSxRLENBQXVCQyxpQixDO0EsTUFBZSxFLEUsQztBLE1BQ3ZDLENBQUNELEU7QSxRLG1DO0EsTSxDO0EsUSxDQUFVRSxVLEM7QSxNQUFRLEUsRSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjE1fDE3IiwiPDxUPj44fDEwIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtZWxzZS1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuPGgxIHYtZWxzZT5PaCBubyDwn5iiPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let bar = __VueDX__ctx.bar
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDgzNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCBiYXIgPSBfX1Z1ZURYX19jdHguYmFyCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHtmb28KICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2ZvbwogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogYmFyCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiBiYXIKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2ZvbwogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogYmFyCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtmb28KICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IGJhcgogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCBiYXIgPSBfX1Z1ZURYX19jdHguYmFyCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTYxMAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUFXQSxHO0EsUSxFLEU7QSxZQUFYLENBQUNBLEc7QSxjLG1DO0EsWSxDO0EsYyxDQUNZQSxHO0EsZ0IsRSxFO0Esb0JBQVgsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFlLEUsRyxDO0Esa0IsRztBLGdCLEVBQ0FBLEc7QSxnQixFLEU7QSxvQkFBaEIsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFvQixFLEcsQztBLGtCLEc7QSxnQixFLEU7QSxvQkFDckIsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFXLEUsRyxDO0Esa0IsRztBLGMsQztBLFlBQ2QsRSxHLEM7QSxVLEc7QSxRLEVBQ2dCQSxHO0EsUSxFLEU7QSxZQUFoQixDQUFDQSxHO0EsYyxtQztBLFksQztBLGMsQ0FDWUEsRztBLGdCLEUsRTtBLG9CQUFYLENBQUNBLEc7QSxzQixtQztBLG9CLEM7QSxvQkFBZSxFLEcsQztBLGtCLEc7QSxnQixFQUNBQSxHO0EsZ0IsRSxFO0Esb0JBQWhCLENBQUNBLEc7QSxzQixtQztBLG9CLEM7QSxvQkFBb0IsRSxHLEM7QSxrQixHO0EsZ0IsRSxFO0Esb0JBQ3JCLENBQUNBLEc7QSxzQixtQztBLG9CLEM7QSxvQkFBVyxFLEcsQztBLGtCLEc7QSxjLEM7QSxZQUNkLEUsRyxDO0EsVSxHO0EsUSxFLEU7QSxZQUNBLENBQUNBLEc7QSxjLG1DO0EsWSxDO0EsYyxDQUNZQSxHO0EsZ0IsRSxFO0Esb0JBQVgsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFlLEUsRyxDO0Esa0IsRztBLGdCLEVBQ0FBLEc7QSxnQixFLEU7QSxvQkFBaEIsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFvQixFLEcsQztBLGtCLEc7QSxnQixFLEU7QSxvQkFDckIsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFXLEUsRyxDO0Esa0IsRztBLGMsQztBLFlBQ2QsRSxHLEM7QSxVLEc7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1pZj1cImZvb1wiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 6.1. v-text 

```vue-html
<span v-text="msg"></span>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let msg = __VueDX__ctx.msg
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "span">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU0NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXNnID0gX19WdWVEWF9fY3R4Lm1zZwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8c3BhbgogICAgICAgIGlubmVySFRNTD17bXNnfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9zcGFuPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG1zZyA9IF9fVnVlRFhfX2N0eC5tc2cKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAic3BhbiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjUxMQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEk7QSxRQUFPQyxTLEMsQ0FBTUMsRyxDO0EsUSxtQztBLE0sQztBLE1BQUssRSxJLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksbUYsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj40IiwiPDxUPj40fDkiLCI8PFA+PjMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c3BhbiB2LXRleHQ9XCJtc2dcIj48L3NwYW4+XG5cbjwvdGVtcGxhdGU+Il19)

## 7.1. v-html 

```vue-html
<div v-html="html"></div>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let html = __VueDX__ctx.html
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "div">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU0OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgaHRtbCA9IF9fVnVlRFhfX2N0eC5odG1sCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxkaXYKICAgICAgICBpbm5lckhUTUw9e2h0bWx9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICA8L2Rpdj4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBodG1sID0gX19WdWVEWF9fY3R4Lmh0bWwKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTEwAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsRztBLFFBQU1DLFMsQyxDQUFNQyxJLEM7QSxRLG1DO0EsTSxDO0EsTUFBTSxFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxrRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjR8OSIsIjw8UD4+NCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1odG1sPVwiaHRtbFwiPjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 8.1. v-show 

```vue-html
<h1 v-show="ok">Hello!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "h1">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjY2NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2sKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgeygoKSA9PiB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrRGlyZWN0aXZlKCJzaG93IiBhcyBjb25zdCwgImgxIiBhcyBjb25zdCwgdW5kZWZpbmVkLCBvaywgeyAgfSk7CiAgICAgIH0pKCl9CiAgICAgIDxoMQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7IkhlbGxvISJ9CiAgICAgIDwvaDE+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2sKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo1NTkAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxTO0EsUSwyQ0FBSUEsZSxFQUFILGEsRSxTLEVBQVdDLEUsRSxFLEUsRTtBLE0sSztBLE1BQVosQ0FBQ0EsRTtBLFEsbUM7QSxNLEM7QSxRLENBQWVDLFEsQztBLE1BQU0sRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksaUYsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxUPj42fDE1IiwiPDxQPj4yIiwiPDxUPj42fDgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1zaG93PVwib2tcIj5IZWxsbyE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjg3NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aW5wdXQKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9Im51bWJlciIKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9InRlbCIKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJyYWRpbyIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo5NDEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxLO0EsUUFBTSxLLEVBQVNDLEcsQztBLFEsbUM7QSxNLEU7QSxNQUNoQixDQUFDRCxLO0EsUUFBTUUsSSxDQUFLQyxRO0EsUUFBUyxLLEVBQVNGLEcsQztBLFEsbUM7QSxNLEU7QSxNQUM5QixDQUFDRCxLO0EsUUFBTUUsSSxDQUFLRixLO0EsUUFBTSxLLEVBQVNDLEcsQztBLFEsbUM7QSxNLEU7QSxNQUMzQixDQUFDRCxLO0EsUUFBTUUsSSxDQUFLRSxVO0EsUUFBVyxPLEVBQVNILEcsQztBLFEsbUM7QSxNLEU7QSxNQUNoQyxDQUFDRCxLO0EsUUFBTUUsSSxDQUFLRyxPO0EsUUFBUSxPLEVBQVNKLEcsQztBLFEsbUM7QSxNLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+MyIsIjw8UD4+NCIsIjw8UD4+OCIsIjw8UD4+MTAiLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJ0ZWxcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2LW1vZGVsPVwiZm9vXCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 9.2. v-model > select/textarea

```vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjY3MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8c2VsZWN0CiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAge2Zvb30KICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICAgIDx0ZXh0YXJlYQogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo3MTUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxNO0EsUUFBTyxLLEVBQVNDLEcsQztBLFEsbUM7QSxNLEM7QSxRQUNmLENBQUNELE07QSxVQUFRRSxLLEMsQ0FBT0QsRyxDO0EsVSxtQztBLFEsQztBLFVBQUssQ0FBRUEsR0FBRyxDO0EsUUFBRSxFLE0sQztBLE1BQzlCLEUsTSxDO0EsTUFDQSxDQUFDRSxRO0EsUUFBUyxLLEVBQVNGLEcsQztBLFEsbUM7QSxNLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NiIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIDp2YWx1ZT1cImZvb1wiPnt7Zm9vfX08L29wdGlvbj5cbjwvc2VsZWN0PlxuPHRleHRhcmVhIHYtbW9kZWw9XCJmb29cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 9.3. v-model > checkbox

```vue-html
<input type="checkbox" v-model="foo" />
<input type="checkbox" v-model="foo" true-value="yes" />
<input type="checkbox" v-model="foo" false-value="no" />
<input type="checkbox" v-model="foo" :true-value="yes" :false-value="no" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
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
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzAxNABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCB5ZXMgPSBfX1Z1ZURYX19jdHgueWVzCiAgbGV0IG5vID0gX19WdWVEWF9fY3R4Lm5vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgdHJ1ZS12YWx1ZT0ieWVzIgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICBmYWxzZS12YWx1ZT0ibm8iCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIHRydWUtdmFsdWU9e3llc30KICAgICAgICBmYWxzZS12YWx1ZT17bm99CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IHllcyA9IF9fVnVlRFhfX2N0eC55ZXMKICBsZXQgbm8gPSBfX1Z1ZURYX19jdHgubm8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjEwNjMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUFXLE8sRUFBU0MsRyxDO0EsUSxtQztBLE0sRTtBLE1BQ2hDLENBQUNILEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUFXLE8sRUFBU0MsRyxDO0EsUUFBS0QsVSxDQUFXRixLO0EsUSxtQztBLE0sRTtBLE1BQ2hELENBQUNBLEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUFXLE8sRUFBU0MsRyxDO0EsUUFBS0MsVyxDQUFZSCxJO0EsUSxtQztBLE0sRTtBLE1BQ2pELENBQUNELEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUFXLE8sRUFBU0MsRyxDO0EsUUFBTUQsVSxDLENBQVlDLEcsQztBLFFBQU1DLFcsQyxDQUFhQyxFLEM7QSxRLG1DO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+NCIsIjw8UD4+MTAiLCI8PFA+PjMiLCI8PFA+PjExIiwiPDxQPj4yIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiB0cnVlLXZhbHVlPVwieWVzXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgZmFsc2UtdmFsdWU9XCJub1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIDp0cnVlLXZhbHVlPVwieWVzXCIgOmZhbHNlLXZhbHVlPVwibm9cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
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
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzYyNgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCBiYXogPSBfX1Z1ZURYX19jdHguYmF6CiAgbGV0IHZhbHMgPSBfX1Z1ZURYX19jdHgudmFscwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8c2VsZWN0CiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9ImZvbyIKICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgeyJmb28ifQogICAgICAgIDwvb3B0aW9uPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJiYXIiCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmFyIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT17YmF6fQogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImJheiJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgIDwvc2VsZWN0PgogICAgICA8c2VsZWN0CiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9ImZvbyIKICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgeyJmb28ifQogICAgICAgIDwvb3B0aW9uPgogICAgICAgIHsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHZhbHMsICh2YWwpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8b3B0aW9uCiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsfQogICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICB7dmFsfQogICAgICAgICAgICAgIDwvb3B0aW9uPgogICAgICAgICAgICApCiAgICAgICAgICB9KQogICAgICAgIH0KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iYmFyIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImJhciJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgIDwvc2VsZWN0PgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgYmF6ID0gX19WdWVEWF9fY3R4LmJhegogIGxldCB2YWxzID0gX19WdWVEWF9fY3R4LnZhbHMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE0MjcAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLE07QSxRQUFPLEssRUFBU0MsRyxDO0EsUSxtQztBLE0sQztBLFFBQ2YsQ0FBQ0QsTTtBLFVBQU9FLEssQ0FBTUEsSztBLFUsbUM7QSxRLEM7QSxVLENBQU1DLEssQztBLFFBQUcsRSxNLEM7QSxRQUN2QixDQUFDSCxNO0EsVUFBT0UsSyxDQUFNQSxLO0EsVSxtQztBLFEsQztBLFUsQ0FBTUMsSyxDO0EsUUFBRyxFLE0sQztBLFFBQ3ZCLENBQUNILE07QSxVQUFRRSxLLEMsQ0FBT0QsRyxDO0EsVSxtQztBLFEsQztBLFUsQ0FBS0UsSyxDO0EsUUFBRyxFLE0sQztBLE1BQzFCLEUsTSxDO0EsTUFFQSxDQUFDSCxNO0EsUUFBTyxLLEVBQVNDLEcsQztBLFEsbUM7QSxNLEM7QSxRQUNmLENBQUNELE07QSxVQUFPRSxLLENBQU1BLEs7QSxVLG1DO0EsUSxDO0EsVSxDQUFNQyxLLEM7QSxRQUFHLEUsTSxDO0EsUSxDO0EsVSx1Q0FDREMsSSxFLENBQVBILEcsQyxLO0EsWSxRO0EsY0FBZixDQUFDRCxNO0EsZ0JBQTRCRSxLLEMsQ0FBT0QsRyxDO0EsZ0IsbUM7QSxjLEM7QSxnQkFBSyxDQUFHQSxHQUFHLEM7QSxjQUFHLEUsTSxDO0EsWSxDO0EsVSxDLEM7QSxRLEM7QSxRQUNsRCxDQUFDRCxNO0EsVUFBT0UsSyxDQUFNQSxLO0EsVSxtQztBLFEsQztBLFUsQ0FBTUMsSyxDO0EsUUFBRyxFLE0sQztBLE1BQ3pCLEUsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NiIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8VD4+M3w1IiwiPDxQPj40Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gdmFsdWU9XCJmb29cIj5mb288L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImJhclwiPmJhcjwvb3B0aW9uPlxuICA8b3B0aW9uIDp2YWx1ZT1cImJhelwiPmJhejwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIHZhbHVlPVwiZm9vXCI+Zm9vPC9vcHRpb24+XG4gIDxvcHRpb24gdi1mb3I9XCJ2YWwgb2YgdmFsc1wiIDp2YWx1ZT1cInZhbFwiPnt7IHZhbCB9fTwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XG48L3NlbGVjdD5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzA5MgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+Ci8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vID0gKCkgPT4gRm9vOwovKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28oKSwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb28KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvbywgewogICAgICAgICAgImZvbyI6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJBIn0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICAgICJiYXIiOiAoe2Jhcn0pID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAge2Jhcn0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9KX0KICAgICAgPC9Gb28+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjc1MwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QTtBLCtDO0EsQTtBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxHLGtKLDhCLEUsYyxFLGMsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUMsRztBLFEsbUM7QSxNLEM7QSxRLEMsNkM7QSxVQUNZLEssRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBSUEsRyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsVUFDSixLLEdBQUtDLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLENBQUVDLEdBQUcsQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFFOUIsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxUPj4xfDMiLCI8PFA+PjUiLCI8PFA+PjMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Rm9vPlxuICA8dGVtcGxhdGUgI2Zvbz5BPC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNiYXI9XCJ7YmFyfVwiPnt7YmFyfX08L3RlbXBsYXRlPlxuICA8dGVtcGxhdGU+SW52YWxpZDwvdGVtcGxhdGU+XG48L0Zvbz5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDQwMQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+Ci8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vQmFyID0gKCkgPT4gRm9vQmFyOwovKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb29CYXIgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIoKSwgIkZvb0JhciIgYXMgY29uc3QsICJGb29CYXIiIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImNvbnRlbnQifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICAiZGVmYXVsdCI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7Zm9vfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICAib3RoZXIiOiAoe2Zvb30pID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAge2Zvb30KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9KX0KICAgICAgPC9Gb29CYXI+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgImRlZmF1bHQiOiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiY29udGVudCJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgICAib3RoZXIiOiAoe2Zvb30pID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAge2Zvb30KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICAgICJhbm90aGVyIjogKGZvbykgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgICAge2Zvby5iYXJ9CiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgOiBudWxsCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNTA2AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBO0EscUQ7QSxBO0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLE0sa0osaUMsRSxpQixFLGlCLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDLE07QSxRLG1DO0EsTSxDO0EsUSxDLGdEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQU9BLFMsQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBTyxFLE0sQztBLE1BQ2YsQ0FBQyxNO0EsUSxtQztBLE0sQztBLFEsQyxnRDtBLFVBQVEsUyxHQUFTQyxLLE07QSxZLFE7QSxjLEU7QSxnQkFBTyxDQUFHQyxHQUFHLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxNLEM7QSxNQUNsQyxDQUFDLE07QSxRLG1DO0EsTSxDO0EsUSxDLGdEO0EsVUFBUSxPLEdBQU9ELEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLENBQUdDLEdBQUcsQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE0sQztBLE1BQ2hDLENBQUMsTTtBLFEsbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVQUNZLFMsRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBUUYsUyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsVUFDUixPLEdBQU9DLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLENBQUVDLEdBQUcsQztBLGMsRztBLFksQztBLFUsRTtBLFVBQ25CLFMsR0FBU0EsRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FDUEEsRztBLGtCLEUsRTtBLHNCQUFYLENBQUNBLEc7QSx3QixtQztBLHNCLEM7QSx3QkFBZSxDQUFFQyxPQUFPLEM7QSxzQkFBRSxFLEcsQztBLG9CLEc7QSxnQixRO0EsZ0IsQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFHL0IsRSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxUPj43fDkiLCI8PFA+PjUiLCI8PFA+PjMiLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Rm9vQmFyPmNvbnRlbnQ8L0Zvb0Jhcj5cbjxGb29CYXIgI2RlZmF1bHQ9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0JhciAjb3RoZXI9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0Jhcj5cbiAgPHRlbXBsYXRlICNkZWZhdWx0PmNvbnRlbnQ8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI290aGVyPVwie2Zvb31cIj57e2Zvb319PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNhbm90aGVyPVwiZm9vXCI+XG4gICAgPGRpdiB2LWlmPVwiZm9vXCI+e3tmb28uYmFyfX08L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgPGRpdj5leHRyYW5vdXM8L2Rpdj5cbjwvRm9vQmFyPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 11.1. v-pre 

```vue-html
<pre v-pre>{{ interpolation }}</pre>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "pre">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQ5MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHByZQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7Int7IGludGVycG9sYXRpb24gfX0ifQogICAgICA8L3ByZT4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJwcmUiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo0OTIAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEc7QSxRLG1DO0EsTSxDO0EsUSxDQUFVQyxxQixDO0EsTUFBbUIsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxrRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjE5fDIxIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHByZSB2LXByZT57eyBpbnRlcnBvbGF0aW9uIH19PC9wcmU+XG5cbjwvdGVtcGxhdGU+Il19)

## 12.1. v-once 

```vue-html
<section v-once>{{ largeText }}</section>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let largeText = __VueDX__ctx.largeText
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "section">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjcyMABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGFyZ2VUZXh0ID0gX19WdWVEWF9fY3R4LmxhcmdlVGV4dAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7KCgpID0+IHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tEaXJlY3RpdmUoIm9uY2UiIGFzIGNvbnN0LCAic2VjdGlvbiIgYXMgY29uc3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7ICB9KTsKICAgICAgfSkoKX0KICAgICAgPHNlY3Rpb24KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge2xhcmdlVGV4dH0KICAgICAgPC9zZWN0aW9uPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGxhcmdlVGV4dCA9IF9fVnVlRFhfX2N0eC5sYXJnZVRleHQKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAic2VjdGlvbiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjU3MgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLHNDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLFM7QSxRLDJDQUFTQSxlLEVBQVIsa0IsRSxTLEUsUyxFLEUsRSxFO0EsTSxLO0EsTUFBRCxDQUFDQyxPO0EsUSxtQztBLE0sQztBLFFBQWUsQ0FBR0MsU0FBUyxDO0EsTUFBRyxFLE8sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLHNDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxzRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFQ+PjZ8MTUiLCI8PFA+PjciLCI8PFA+PjkiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c2VjdGlvbiB2LW9uY2U+e3sgbGFyZ2VUZXh0IH19PC9zZWN0aW9uPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let MyComponent = __VueDX__ctx.MyComponent
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([
    {} as unknown as __VueDX__TypeCheck.internal.PropsOf<JSX.IntrinsicElements, "table">,
  ]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzM5NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgTXlDb21wb25lbnQgPSBfX1Z1ZURYX19jdHguTXlDb21wb25lbnQKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHRhYmxlCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIDx0Ym9keQogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgTXlDb21wb25lbnQsIE15Q29tcG9uZW50LCBNeUNvbXBvbmVudCk7CiAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICApOwogICAgICAgICAgfSkoKX0KICAgICAgICA8L3Rib2R5PgogICAgICA8L3RhYmxlPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IE15Q29tcG9uZW50ID0gX19WdWVEWF9fY3R4Lk15Q29tcG9uZW50CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInRhYmxlIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNzQyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEM7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsSztBLFEsbUM7QSxNLEM7QSxRQUNDLENBQUNBLEs7QSxVLG1DO0EsUSxDO0EsVSxTO0E7QSxZLDBLQUNXQyxXLEVBQUFBLFcsRUFBQUEsVyxFO0EsWSwrQztBLFksUTtBLGNBQVYsQ0FBQyxrQjtBLGdCLG1DO0EsYyxDO0EsZ0IsQyw0RDtBLGtCLE8sRyxNO0Esb0IsUTtBLHNCLEU7QSxzQixHO0Esb0IsQztBLGtCLEU7QSxnQixFLEM7QSxjQUFzQixFLGtCLEM7QSxZLEU7QSxVLEs7QSxRQUN6QixFLEssQztBLE1BQ0YsRSxLLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksb0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj41IiwiPDxQPj4xMSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjx0YWJsZT5cbiAgPHRib2R5PlxuICAgIDx0ciB2LWlzPVwiTXlDb21wb25lbnRcIj48L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
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
const __VueDX___attrs = (() => {
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
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Nzg5NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbnVtID0gX19WdWVEWF9fY3R4Lm51bQogIGxldCBzdHIgPSBfX1Z1ZURYX19jdHguc3RyCiAgbGV0IGFyciA9IF9fVnVlRFhfX2N0eC5hcnIKICBsZXQgb2JqID0gX19WdWVEWF9fY3R4Lm9iagogIGxldCBpdHIgPSBfX1Z1ZURYX19jdHguaXRyCiAgbGV0IGJvbyA9IF9fVnVlRFhfX2N0eC5ib28KICBsZXQgc3ltID0gX19WdWVEWF9fY3R4LnN5bQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobnVtLCAobikgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7bn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobnVtLCAobiwgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7bn0KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtpfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChzdHIsIChzKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtzfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChzdHIsIChzLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtzfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKGEpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2F9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKHsgdmFsdWUgfSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7dmFsdWV9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKHsgZm9vIH0pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2Fycn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoYSwgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7YX0KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtpfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsICh7IHZhbHVlIH0sIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3ZhbHVlfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG9iaiwgKG8pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge299CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG9iaiwgKG8sIGspID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge299CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7a30KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobywgaywgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7b30KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtrfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGl0ciwgKHQpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3R9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGJvbywgKGIpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2J9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHN5bSwgKHMpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3N9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBudW0gPSBfX1Z1ZURYX19jdHgubnVtCiAgbGV0IHN0ciA9IF9fVnVlRFhfX2N0eC5zdHIKICBsZXQgYXJyID0gX19WdWVEWF9fY3R4LmFycgogIGxldCBvYmogPSBfX1Z1ZURYX19jdHgub2JqCiAgbGV0IGl0ciA9IF9fVnVlRFhfX2N0eC5pdHIKICBsZXQgYm9vID0gX19WdWVEWF9fY3R4LmJvbwogIGxldCBzeW0gPSBfX1Z1ZURYX19jdHguc3ltCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMzQ4NAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLEM7QSxRLHVDQUFpQkEsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQXFCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1BELEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUEwQixDQUFHQyxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDekJELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUFxQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNQRCxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBMEIsQ0FBR0MsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3pCRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBcUIsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDSkQsRyxFLENBQWJHLFMsQyxLO0EsVSxRO0EsWUFBWixDQUFDSCxHO0EsYyxtQztBLFksQztBLGNBQTZCLENBQUdJLEtBQUssQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ2xCSixHLEUsQ0FBWEssTyxDLEs7QSxVLFE7QSxZQUFaLENBQUNMLEc7QSxjLG1DO0EsWSxDO0EsY0FBMkIsQ0FBR0EsR0FBRyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDZkEsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQTBCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNaRCxHLEUsQ0FBakJHLFMsRUFBV0YsQyxDLEs7QSxVLFE7QSxZQUF4QixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQWtDLENBQUdJLEtBQUssQztBLGMsQ0FBR0YsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNyQ0QsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQXFCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1BELEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUEwQixDQUFHQyxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDakJELEcsRSxDQUFaQyxDLEVBQUdBLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFuQixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQTZCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDcENELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUFxQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNaRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBcUIsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDWkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQXFCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFA+PjEiLCI8PFQ+PjF8MyIsIjw8UD4+OSIsIjw8UD4+NSIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1mb3I9XCJuIG9mIG51bVwiPnt7IG4gfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobiwgaSkgb2YgbnVtXCI+e3sgbiB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwicyBvZiBzdHJcIj57eyBzIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHMsIGkpIG9mIHN0clwiPnt7IHMgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cImEgb2YgYXJyXCI+e3sgYSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInsgdmFsdWUgfSBvZiBhcnJcIj57eyB2YWx1ZSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInsgZm9vIH0gb2YgYXJyXCI+e3sgYXJyIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKGEsIGkpIG9mIGFyclwiPnt7IGEgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIih7IHZhbHVlIH0sIGkpIG9mIGFyclwiPnt7IHZhbHVlIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJvIG9mIG9ialwiPnt7IG8gfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaykgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG8sIGssIGkpIG9mIG9ialwiPnt7IG8gfX06e3sgayB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwidCBvZiBpdHJcIj57eyB0IH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYiBvZiBib29cIj57eyBiIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwicyBvZiBzeW1cIj57eyBzIH19PC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Njk1NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7KCgpID0+IHsKCiAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBmb28sIGZvbywgZm9vKTsKICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgIHJldHVybiAoCiAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICA+CiAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19jb21wb25lbnQsIHsKICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7YmFyfSkgPT4gewogICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyLCBiYXIpOwogICAgICAgICAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgImRlZmF1bHQiOiAoe2Jhen0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJheiwgYmF6LCBiYXopOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3RoZXIiOiAoeyBmb28gfSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBmb28sIGZvbywgZm9vKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPgoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7IGJhciB9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyLCBiYXIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9KX0KICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICk7CiAgICAgIH0pKCl9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTU4MQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLFM7QTtBLFEsMEtBQWdCQSxHLEVBQUFBLEcsRUFBQUEsRyxFO0EsUSwrQztBLFEsUTtBLFVBQWhCLENBQUMsa0I7QSxZLG1DO0EsVSxDO0EsWSxDLDREO0EsY0FBcUIsUyxHQUFTQyxLLE07QSxnQixRO0Esa0IsRTtBLG9CLFM7QTtBLHNCLDBLQUNiRCxHLEVBQUFBLEcsRUFBQUEsRyxFO0Esc0IsK0M7QSxzQixRO0Esd0JBQWhCLENBQUMsa0I7QSwwQixtQztBLHdCLEM7QSwwQixDLDREO0EsNEJBQXFCLFMsR0FBU0MsSyxNO0EsOEIsUTtBLGdDLEU7QSxrQyxTO0E7QSxvQywwS0FDYkQsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLG9DLCtDO0Esb0MsUTtBLHNDQUFoQixDQUFDLGtCO0Esd0MsbUM7QSxzQyxDO0Esd0MsQyw0RDtBLDBDQUNZLE8sR0FBT0UsTyxNO0EsNEMsUTtBLDhDLEU7QSxnRCxTO0E7QSxrRCwwS0FDQUYsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLGtELCtDO0Esa0QsUTtBLG9EQUFoQixDQUFDLGtCO0Esc0QsbUM7QSxvRCxFO0E7QSxrRCxFO0EsZ0QsSztBLDhDLEc7QSw0QyxDO0EsMEMsRTtBLDBDQUVRLFMsR0FBU0UsTyxNO0EsNEMsUTtBLDhDLEU7QSxnRCxTO0E7QSxrRCwwS0FDRkYsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLGtELCtDO0Esa0QsUTtBLG9EQUFoQixDQUFDLGtCO0Esc0QsbUM7QSxvRCxFO0E7QSxrRCxFO0EsZ0QsSztBLDhDLEc7QSw0QyxDO0EsMEMsRTtBLHdDLEUsQztBLHNDQUVMLEUsa0IsQztBLG9DLEU7QSxrQyxLO0EsZ0MsRztBLDhCLEM7QSw0QixFO0EsMEIsRSxDO0Esd0JBQ0YsRSxrQixDO0Esc0IsRTtBLG9CLEs7QSxrQixHO0EsZ0IsQztBLGMsRTtBLFksRSxDO0EsVUFDRixFLGtCLEM7QSxRLEU7QSxNLEs7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8UD4+NSIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxjb21wb25lbnQgOmlzPVwiZm9vXCIgI2RlZmF1bHQ9XCJ7YmFyfVwiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJhelwiPlxuICAgICAgPHRlbXBsYXRlICNvdGhlcj1cInsgZm9vIH1cIj5cbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJmb29cIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgYmFyIH1cIj5cbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJiYXJcIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2NvbXBvbmVudD5cbiAgPC9jb21wb25lbnQ+XG48L2NvbXBvbmVudD5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let bars = __VueDX__ctx.bars
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Njg2MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYmFycyA9IF9fVnVlRFhfX2N0eC5iYXJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChiYXJzLCAoYmFyKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBiYXIsIGJhciwgYmFyKTsKICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19jb21wb25lbnQsIHsKICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmFyLCBiYXIsIGJhcik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7YmF6fSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGJheiwgKGl0ZW0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJheltiYXJdLCBiYXpbYmFyXSwgYmF6W2Jhcl0pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGl0ZW0sIGl0ZW0sIGl0ZW0pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICApOwogICAgICAgICAgICB9KSgpfQogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBiYXJzID0gX19WdWVEWF9fY3R4LmJhcnMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE0MjgAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDO0EsUSx1Q0FBbUNBLEksRSxDQUFQQyxHLEMsSztBLFUsUTtBLFksUztBO0EsYywwS0FBWkEsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLGMsK0M7QSxjLFE7QSxnQkFBaEIsQ0FBQyxrQjtBLGtCLG1DO0EsZ0IsQztBLGtCLEMsNEQ7QSxvQixPLEcsTTtBLHNCLFE7QSx3QixFO0EsMEIsUztBO0EsNEIsMEtBQ2lCQSxHLEVBQUFBLEcsRUFBQUEsRyxFO0EsNEIsK0M7QSw0QixRO0EsOEJBQWhCLENBQUMsa0I7QSxnQyxtQztBLDhCLEM7QSxnQyxDLDREO0Esa0NBQXFCLFMsR0FBU0MsSyxNO0Esb0MsUTtBLHNDLEU7QSx3QyxDO0EsMEMsdUNBQ1lELEcsRSxDQUFSRCxJLEMsSztBLDRDLFE7QSw4QyxTO0E7QSxnRCwwS0FBakJHLFEsRUFBQUEsUSxFQUFBQSxRLEU7QSxnRCwrQztBLGdELFE7QSxrREFBaEIsQ0FBQyxrQjtBLG9ELG1DO0Esa0QsQztBLG9ELEMsNEQ7QSxzRCxPLEcsTTtBLHdELFE7QSwwRCxFO0EsNEQsUztBO0EsOEQsMEtBQ2lCSCxJLEVBQUFBLEksRUFBQUEsSSxFO0EsOEQsK0M7QSw4RCxRO0EsZ0VBQWhCLENBQUMsa0I7QSxrRSxtQztBLGdFLEU7QTtBLDhELEU7QSw0RCxLO0EsMEQsRztBLHdELEM7QSxzRCxFO0Esb0QsRSxDO0Esa0RBQ0gsRSxrQixDO0EsZ0QsRTtBLDhDLEs7QSw0QyxDO0EsMEMsQyxDO0Esd0MsQztBLHNDLEc7QSxvQyxDO0Esa0MsRTtBLGdDLEUsQztBLDhCQUNGLEUsa0IsQztBLDRCLEU7QSwwQixLO0Esd0IsRztBLHNCLEM7QSxvQixFO0Esa0IsRSxDO0EsZ0JBQ0YsRSxrQixDO0EsYyxFO0EsWSxLO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NCIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxjb21wb25lbnQgOmlzPVwiYmFyXCIgdi1mb3I9XCJiYXIgb2YgYmFyc1wiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJheltiYXJdXCIgdi1mb3I9XCJpdGVtIG9mIGJhelwiID5cbiAgICAgIDxjb21wb25lbnQgOmlzPVwiaXRlbVwiIC8+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)

## 17.1. \$attrs binding 

```vue-html
<Foo>
  <input v-bind="$attrs" />
</Foo>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
declare const __VueDX__defineComponent: typeof import("vue").defineComponent;
type __VueDX__GlobalComponents = import("vue").GlobalComponents;
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>

const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
const __VueDX___ScriptSetup_props = defineProps({});
const __VueDX___ScriptSetup_emits = ({});
const __VueDX___ScriptSetup_expose = {};
const __VueDX___ScriptSetup_internalProps = {};
const __VueDX___ScriptSetup_Component = __VueDX__defineComponent((_: typeof __VueDX___ScriptSetup_internalProps)=> {});

//#endregion
function __VueDX__RegisterSelf<T>(ctx: T) {
  return { ...ctx, ["Example"]: Example }
}
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX___Script_Component())
//#region <template>
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
function __VueDX___slots() {
  /*<vuedx:templateGlobals>*/
  let $attrs = __VueDX__ctx.$attrs
  let $slots = __VueDX__ctx.$slots
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/
const __VueDX___attrs = (() => {
  return __VueDX__TypeCheck.internal.first(__VueDX__TypeCheck.internal.flat([{}]))
})();
//#endregion
return {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx};});
const {__VueDX___ScriptSetup_Component, __VueDX___ScriptSetup_props, __VueDX___ScriptSetup_emits, __VueDX___ScriptSetup_expose, __VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX___ScriptSetup_scope;
//#region public component definition
const ExamplePublic = null as unknown as new () => typeof __VueDX___ScriptSetup_expose;
export default class Example extends ExamplePublic {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs>;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzEzNQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+Ci8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpjb25zdCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vID0gKCkgPT4gRm9vOwovKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJGF0dHJzID0gX19WdWVEWF9fY3R4LiRhdHRycwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvbyA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0ZvbygpLCAiRm9vIiBhcyBjb25zdCwgIkZvbyIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEZvbwogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLCB7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIDxpbnB1dAogICAgICAgICAgICAgICAgICB7Li4uKCRhdHRycyl9CiAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvbz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkYXR0cnMgPSBfX1Z1ZURYX19jdHguJGF0dHJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo2MzUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0E7QSwrQztBLEE7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLEcsa0osOEIsRSxjLEUsYyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQyxHO0EsUSxtQztBLE0sQztBLFEsQyw2QztBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQkFDQyxDQUFDQSxLO0Esa0IsS0FBY0MsTSxFO0Esa0IsbUM7QSxnQixFO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUNqQixFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj41IiwiPDxQPj42Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvbz5cbiAgPGlucHV0IHYtYmluZD1cIiRhdHRyc1wiIC8+XG48L0Zvbz5cblxuPC90ZW1wbGF0ZT4iXX0=)

