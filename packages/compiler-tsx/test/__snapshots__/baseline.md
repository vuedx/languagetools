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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzE5MABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbmFtZSA9IF9fVnVlRFhfX2N0eC5uYW1lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgSGVsbG9Xb3JsZCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0hlbGxvV29ybGQoKSwgIkhlbGxvV29ybGQiIGFzIGNvbnN0LCAiSGVsbG9Xb3JsZCIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEhlbGxvV29ybGQKICAgICAgICBuCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KCiAgICAgIDxzcGFuCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiTmFtZTogIn0KICAgICAgICAge25hbWUgK30gCiAgICAgIDwvc3Bhbj4KICAgICAgPHAKICAgICAgICAgCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICA8L3A+CiAgICAgIHsKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxwCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICA8L3A+CiAgICAgICAgICA8Lz4KICAgICAgICA6IG51bGwKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG5hbWUgPSBfX1Z1ZURYX19jdHgubmFtZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJwIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KODIxAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sVSxrSixxQyxFLHFCLEUscUIsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLFU7QSxRQUFXQyxDO0EsUSxtQztBLE1BQUUsRTtBO0EsTUFDZCxDQUFDQyxJO0EsUSxtQztBLE0sQztBLFEsQ0FBS0MsUSxDO0EsUUFBTSxFQUFHQyxNQUFPLEU7QSxNQUFFLEUsSSxDO0EsTUFDeEIsQ0FBQ0gsQztBLFFBQUUsQztBLFEsbUM7QSxNLEM7QSxNQUFRLEUsQyxDO0EsTSxDQUNGSSxBO0EsUSxFLEU7QSxZQUFULENBQUNKLEM7QSxjLG1DO0EsWSxDO0EsWUFBVSxFLEMsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxnRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjEwIiwiPDxQPj4xIiwiPDxQPj40IiwiPDxUPj42fDgiLCI8PFA+PjYiLCI8PFA+PjAiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48SGVsbG9Xb3JsZCBuIC8+XG48c3Bhbj5OYW1lOiB7eyBuYW1lICsgfX08L3NwYW4+XG48cCB2LWJpbmQ6PjwvcD5cbjxwIHYtaWY9XCJcIj48L3A+XG5cbjwvdGVtcGxhdGU+Il19)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDgzOABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb29CYXIgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIoKSwgIkZvb0JhciIgYXMgY29uc3QsICJGb29CYXIiIGFzIGNvbnN0KTsKICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28oKSwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICBjb25zdCBVbmtub3duRWxlbWVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX1Vua25vd25FbGVtZW50KCksICJ1bmtub3duLWVsZW1lbnQiIGFzIGNvbnN0LCAiVW5rbm93bkVsZW1lbnQiIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vLkJhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLkJhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vLkJhcj4KICAgICAgPEZvby5CYXIuQmF6CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb28uQmFyLkJheiwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vLkJhci5CYXo+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPFVua25vd25FbGVtZW50CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhVbmtub3duRWxlbWVudCwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvVW5rbm93bkVsZW1lbnQ+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjEzNzIAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLE0sa0osaUMsRSxpQixFLGlCLEU7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLE0sYyxrSix5QyxFLDBCLEUseUIsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLE07QSxRLG1DO0EsTSxDO0EsUSxDLGdEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQU9DLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE0sQztBLE1BQ1gsQ0FBQ0MsTztBLFEsbUM7QSxNLEM7QSxRLEMsaUQ7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBUUQsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTyxDO0EsTUFDWixDQUFDRSxXO0EsUSxtQztBLE0sQztBLFEsQyxxRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFZRixLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxXLEM7QSxNQUNoQixDQUFDRyxNO0EsUSxtQztBLE0sQztBLFEsQyxnRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFPSCxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxNLEM7QSxNQUNYLENBQUNJLE07QSxRLG1DO0EsTSxDO0EsUSxDLGdEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQVFKLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE0sQztBLE1BQ1osQ0FBQ0ssYztBLFEsbUM7QSxNLEM7QSxRLEMsd0Q7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBZ0JMLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLGMsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFQ+PjN8NSIsIjw8UD4+NyIsIjw8UD4+MTEiLCI8PFQ+PjZ8NiIsIjw8VD4+N3w2IiwiPDxUPj4xNXwxNCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb29CYXI+Zm9vPC9Gb29CYXI+XG48Rm9vLkJhcj5mb288L0Zvby5CYXI+XG48Rm9vLkJhci5CYXo+Zm9vPC9Gb28uQmFyLkJhej5cbjxmb29CYXI+Zm9vPC9mb29CYXI+XG48Zm9vLWJhcj5mb288L2Zvby1iYXI+XG48dW5rbm93bi1lbGVtZW50PmZvbzwvdW5rbm93bi1lbGVtZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzE4OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXlJbnB1dCA9IF9fVnVlRFhfX2N0eC5teUlucHV0CiAgbGV0IGN1c3RvbU5hbWUgPSBfX1Z1ZURYX19jdHguY3VzdG9tTmFtZQogIGxldCByZXN0ID0gX19WdWVEWF9fY3R4LnJlc3QKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28oKSwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIHZhbHVlPXtteUlucHV0fQogICAgICAgIHsuLi4oe1tjdXN0b21OYW1lXTogbXlJbnB1dH0pfQogICAgICAgIHsuLi4ocmVzdCl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPEZvbwogICAgICAgIHZhbHVlPXtteUlucHV0fQogICAgICAgIHsuLi4oe1tjdXN0b21OYW1lXTogbXlJbnB1dH0pfQogICAgICAgIHsuLi4ocmVzdCl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KCiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXlJbnB1dCA9IF9fVnVlRFhfX2N0eC5teUlucHV0CiAgbGV0IGN1c3RvbU5hbWUgPSBfX1Z1ZURYX19jdHguY3VzdG9tTmFtZQogIGxldCByZXN0ID0gX19WdWVEWF9fY3R4LnJlc3QKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaW5wdXQiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo4MzAAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsd0M7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLEcsa0osOEIsRSxjLEUsYyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsSztBLFFBQU9BLEssQyxDQUFPQyxPLEM7QSxRLE9BQVdDLFUsQyxFQUFhRCxPLEc7QSxRLEtBQWlCRSxJLEU7QSxRLG1DO0EsTUFBTSxFO0EsTUFDOUQsQ0FBQ0MsRztBLFFBQUtKLEssQyxDQUFPQyxPLEM7QSxRLE9BQVdDLFUsQyxFQUFhRCxPLEc7QSxRLEtBQWlCRSxJLEU7QSxRLG1DO0EsTUFBTSxFO0E7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsd0M7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxvRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjciLCI8PFA+PjEwIiwiPDxQPj40IiwiPDxQPj4zIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuPEZvbyA6dmFsdWU9XCJteUlucHV0XCIgOltjdXN0b21OYW1lXT1cIm15SW5wdXRcIiB2LWJpbmQ9XCJyZXN0XCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
          if(!($event.currentTarget instanceof HTMLInputElement)) throw new Error;
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
          if(!($event.currentTarget instanceof HTMLInputElement)) throw new Error;
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDA2NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb25Gb2N1cyA9IF9fVnVlRFhfX2N0eC5vbkZvY3VzCiAgbGV0IHZhbHVlID0gX19WdWVEWF9fY3R4LnZhbHVlCiAgbGV0IGV2ZW50TmFtZSA9IF9fVnVlRFhfX2N0eC5ldmVudE5hbWUKICBsZXQgZXZlbnRzID0gX19WdWVEWF9fY3R4LmV2ZW50cwogIGxldCBmbk5hbWUgPSBfX1Z1ZURYX19jdHguZm5OYW1lCiAgbGV0IGNhbGxNeUZuID0gX19WdWVEWF9fY3R4LmNhbGxNeUZuCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIG9uRm9jdXM9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkZvY3VzLCAKICAgICAgICBdKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICBvblVwZGF0ZTp2YWx1ZT17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgICgkZXZlbnQpID0+IHsKICAgICAgICAgIGlmKCEoJGV2ZW50LmN1cnJlbnRUYXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yOwogICAgICAgICAgdmFsdWUgPSAkZXZlbnQKICAgICAgICAgIH0sIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIG9uRXZlbnQtbmFtZT17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICBdKX0KICAgICAgICBvbkV2ZW50TmFtZT17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICBdKX0KICAgICAgICB7Li4uKGV2ZW50cyl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgb25LZXlkb3duPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgZm5OYW1lLCAKICAgICAgICAgICgkZXZlbnQpID0+IHsKICAgICAgICAgIGlmKCEoJGV2ZW50LmN1cnJlbnRUYXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSkgdGhyb3cgbmV3IEVycm9yOwogICAgICAgICAgY2FsbE15Rm4oJGV2ZW50KQogICAgICAgICAgfSwgCiAgICAgICAgICAkZXZlbnQgPT4gY2FsbE15Rm4oJGV2ZW50KSwgCiAgICAgICAgICAoJGV2ZW50KSA9PiBjYWxsTXlGbigkZXZlbnQpLCAKICAgICAgICAgICgpID0+IGNhbGxNeUZuKCRldmVudCksIAogICAgICAgICAgZnVuY3Rpb24gbXlGdW5jdGlvbigkZXZlbnQpIHsKICAgIGNhbGxNeUZuKCRldmVudCkKICB9LCAKICAgICAgICAgIGZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7CiAgICBjYWxsTXlGbigkZXZlbnQpCiAgfSwgCiAgICAgICAgXSl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkZvY3VzID0gX19WdWVEWF9fY3R4Lm9uRm9jdXMKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWUKICBsZXQgZXZlbnROYW1lID0gX19WdWVEWF9fY3R4LmV2ZW50TmFtZQogIGxldCBldmVudHMgPSBfX1Z1ZURYX19jdHguZXZlbnRzCiAgbGV0IGZuTmFtZSA9IF9fVnVlRFhfX2N0eC5mbk5hbWUKICBsZXQgY2FsbE15Rm4gPSBfX1Z1ZURYX19jdHguY2FsbE15Rm4KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE2MDYAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsOEI7QSxFLHNDO0EsRSxnQztBLEUsZ0M7QSxFLG9DO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEs7QSxRQUFPQyxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUSxtQztBLE1BQVMsRTtBLE1BQ3hCLENBQUNGLEs7QSxRQUFPRyxjLEMsQyxtQztBLFUsYTtBLFUsSyxnQyxnQixtQjtBLFVBQWNDLGM7QSxVLEMsRTtBLFEsRSxDO0EsUSxtQztBLE1BQWdCLEU7QSxNQUN0QyxDQUFDSixLO0EsUUFBT0ssWSxDLEMsbUM7QSxVQUFELDZCLEU7QSxRLEUsQztBLFFBQWFDLFcsQyxDLG1DO0EsVUFBRCw2QixFO0EsVUFBVyw2QixFO0EsUSxFLEM7QSxRLEtBQW1CQyxNLEU7QSxRLG1DO0EsTUFBUSxFO0EsTUFDekQsQ0FBQ1AsSztBLFFBQ0VRLFMsQyxDLG1DO0EsVUFBU0QsTSxFO0EsVSxhO0EsVSxLLGdDLGdCLG1CO0EsVUFDS0UsZ0I7QSxVLEMsRTtBLFVBQ01DLDBCLEU7QSxVQUNDQyw0QixFO0EsVUFDREMsc0IsRTtBLFVBQ0ZDOztHLEU7QSxVQUdEQzs7RyxFO0EsUSxFLEM7QSxRLG1DO0EsTUFHcEIsRTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSw4QjtBLEUsc0M7QSxFLGdDO0EsRSxnQztBLEUsb0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFQ+PjV8NyIsIjw8UD4+NyIsIjw8VD4+MTJ8MTQiLCI8PFA+PjE0IiwiPDxUPj4xMHwxMiIsIjw8VD4+OXwxMSIsIjw8UD4+NiIsIjw8VD4+N3w5IiwiPDxQPj4xNiIsIjw8UD4+MjYiLCI8PFA+PjI4IiwiPDxQPj4yMiIsIjw8UD4+NTQiLCI8PFA+PjQ4Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IEBmb2N1cz1cIm9uRm9jdXNcIiAvPlxuPGlucHV0IEB1cGRhdGU6dmFsdWU9XCJ2YWx1ZSA9ICRldmVudFwiIC8+XG48aW5wdXQgQGV2ZW50LW5hbWUgQGV2ZW50TmFtZSBAW2V2ZW50TmFtZV0gdi1vbj1cImV2ZW50c1wiIC8+XG48aW5wdXRcbiAgQGtleWRvd249XCJmbk5hbWVcIlxuICBAa2V5ZG93bi5sZWZ0PVwiY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LmxlZnQ9XCIkZXZlbnQgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LnJpZ2h0PVwiKCRldmVudCkgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LmRvd249XCIoKSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQudXA9XCJmdW5jdGlvbiBteUZ1bmN0aW9uKCRldmVudCkge1xuICAgIGNhbGxNeUZuKCRldmVudClcbiAgfVwiXG4gIEBrZXlkb3duLmN0cmwudXA9XCJmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICAgIGNhbGxNeUZuKCRldmVudClcbiAgfVwiXG4vPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzE1NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb25DbGljayA9IF9fVnVlRFhfX2N0eC5vbkNsaWNrCiAgbGV0IG9uSG92ZXIgPSBfX1Z1ZURYX19jdHgub25Ib3ZlcgogIGxldCBvblByZXNzID0gX19WdWVEWF9fY3R4Lm9uUHJlc3MKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIG9uQ2xpY2s9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkNsaWNrLCAKICAgICAgICBdKX0KICAgICAgICBvbkhvdmVyPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25Ib3ZlciwgCiAgICAgICAgXSl9CiAgICAgICAgb25QcmVzcz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uUHJlc3MsIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxkaXYKICAgICAgICBvbkNsaWNrPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25DbGljaywgCiAgICAgICAgXSl9CiAgICAgICAgb25Ib3Zlcj17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uSG92ZXIsIAogICAgICAgIF0pfQogICAgICAgIG9uUHJlc3M9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvblByZXNzLCAKICAgICAgICBdKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9uQ2xpY2sgPSBfX1Z1ZURYX19jdHgub25DbGljawogIGxldCBvbkhvdmVyID0gX19WdWVEWF9fY3R4Lm9uSG92ZXIKICBsZXQgb25QcmVzcyA9IF9fVnVlRFhfX2N0eC5vblByZXNzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo4NTIAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsa0M7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEc7QSxRQUFLQyxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBVUQsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFFBQVVELE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRLG1DO0EsTUFBUyxFO0EsTUFDeEQsQ0FBQ0YsRztBLFFBQUtDLE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRQUFVRCxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBVUQsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFEsbUM7QSxNQUFTLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsa0M7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj41fDciLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG5cbjwvdGVtcGxhdGU+Il19)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjg3NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aW5wdXQKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9Im51bWJlciIKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9InRlbCIKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJyYWRpbyIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo5ODMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxLO0EsUUFBTUMsSyxFQUFTQyxHLEM7QSxRLG1DO0EsTUFBSyxFO0EsTUFDckIsQ0FBQ0YsSztBLFFBQU1HLEksQ0FBS0MsUTtBLFFBQVNILEssRUFBU0MsRyxDO0EsUSxtQztBLE1BQUssRTtBLE1BQ25DLENBQUNGLEs7QSxRQUFNRyxJLENBQUtILEs7QSxRQUFNQyxLLEVBQVNDLEcsQztBLFEsbUM7QSxNQUFLLEU7QSxNQUNoQyxDQUFDRixLO0EsUUFBTUcsSSxDQUFLRSxVO0EsUUFBV0MsTyxFQUFTSixHLEM7QSxRLG1DO0EsTUFBSyxFO0EsTUFDckMsQ0FBQ0YsSztBLFFBQU1HLEksQ0FBS0ksTztBLFFBQVFELE8sRUFBU0osRyxDO0EsUSxtQztBLE1BQUssRTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj41IiwiPDxUPj43fDUiLCI8PFA+PjMiLCI8PFA+PjQiLCI8PFA+PjgiLCI8PFA+PjEwIiwiPDxUPj43fDciLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJ0ZWxcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2LW1vZGVsPVwiZm9vXCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjY3NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8c2VsZWN0CiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgIHtmb299IAogICAgICAgIDwvb3B0aW9uPgogICAgICA8L3NlbGVjdD4KICAgICAgPHRleHRhcmVhCiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjczMQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLE07QSxRQUFPQyxLLEVBQVNDLEcsQztBLFEsbUM7QSxNLEM7QSxRQUNmLENBQUNGLE07QSxVQUFRRyxLLEMsQ0FBT0QsRyxDO0EsVSxtQztBLFEsQztBLFVBQUssRUFBRUEsR0FBRyxFO0EsUUFBRSxFLE0sQztBLE1BQzlCLEUsTSxDO0EsTUFDQSxDQUFDRSxRO0EsUUFBU0gsSyxFQUFTQyxHLEM7QSxRLG1DO0EsTUFBSyxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFQ+Pjd8NSIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIDp2YWx1ZT1cImZvb1wiPnt7Zm9vfX08L29wdGlvbj5cbjwvc2VsZWN0PlxuPHRleHRhcmVhIHYtbW9kZWw9XCJmb29cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzAxNABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCB5ZXMgPSBfX1Z1ZURYX19jdHgueWVzCiAgbGV0IG5vID0gX19WdWVEWF9fY3R4Lm5vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgdHJ1ZS12YWx1ZT0ieWVzIgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICBmYWxzZS12YWx1ZT0ibm8iCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIHRydWUtdmFsdWU9e3llc30KICAgICAgICBmYWxzZS12YWx1ZT17bm99CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IHllcyA9IF9fVnVlRFhfX2N0eC55ZXMKICBsZXQgbm8gPSBfX1Z1ZURYX19jdHgubm8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjEwOTAAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUFXQyxPLEVBQVNDLEcsQztBLFEsbUM7QSxNQUFLLEU7QSxNQUNyQyxDQUFDSixLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBV0MsTyxFQUFTQyxHLEM7QSxRQUFLRixVLENBQVdGLEs7QSxRLG1DO0EsTUFBTSxFO0EsTUFDdEQsQ0FBQ0EsSztBLFFBQU1DLEksQ0FBS0MsVTtBLFFBQVdDLE8sRUFBU0MsRyxDO0EsUUFBS0MsVyxDQUFZSixJO0EsUSxtQztBLE1BQUssRTtBLE1BQ3RELENBQUNELEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUFXQyxPLEVBQVNDLEcsQztBLFFBQU1GLFUsQyxDQUFZRSxHLEM7QSxRQUFNQyxXLEMsQ0FBYUMsRSxDO0EsUSxtQztBLE1BQUksRTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjQiLCI8PFA+PjEwIiwiPDxUPj43fDciLCI8PFA+PjMiLCI8PFA+PjExIiwiPDxQPj4yIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiB0cnVlLXZhbHVlPVwieWVzXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgZmFsc2UtdmFsdWU9XCJub1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIDp0cnVlLXZhbHVlPVwieWVzXCIgOmZhbHNlLXZhbHVlPVwibm9cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzYyOABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCBiYXogPSBfX1Z1ZURYX19jdHguYmF6CiAgbGV0IHZhbHMgPSBfX1Z1ZURYX19jdHgudmFscwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8c2VsZWN0CiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9ImZvbyIKICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgeyJmb28ifQogICAgICAgIDwvb3B0aW9uPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJiYXIiCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmFyIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT17YmF6fQogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImJheiJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgIDwvc2VsZWN0PgogICAgICA8c2VsZWN0CiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9ImZvbyIKICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgeyJmb28ifQogICAgICAgIDwvb3B0aW9uPgogICAgICAgIHsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHZhbHMsICh2YWwpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8b3B0aW9uCiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsfQogICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAge3ZhbH0gCiAgICAgICAgICAgICAgPC9vcHRpb24+CiAgICAgICAgICAgICkKICAgICAgICAgIH0pCiAgICAgICAgfQogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJiYXIiCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmFyIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCBiYXogPSBfX1Z1ZURYX19jdHguYmF6CiAgbGV0IHZhbHMgPSBfX1Z1ZURYX19jdHgudmFscwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTQ0MAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsTTtBLFFBQU9DLEssRUFBU0MsRyxDO0EsUSxtQztBLE0sQztBLFFBQ2YsQ0FBQ0YsTTtBLFVBQU9HLEssQ0FBTUEsSztBLFUsbUM7QSxRLEM7QSxVLENBQU1DLEssQztBLFFBQUcsRSxNLEM7QSxRQUN2QixDQUFDSixNO0EsVUFBT0csSyxDQUFNQSxLO0EsVSxtQztBLFEsQztBLFUsQ0FBTUMsSyxDO0EsUUFBRyxFLE0sQztBLFFBQ3ZCLENBQUNKLE07QSxVQUFRRyxLLEMsQ0FBT0QsRyxDO0EsVSxtQztBLFEsQztBLFUsQ0FBS0UsSyxDO0EsUUFBRyxFLE0sQztBLE1BQzFCLEUsTSxDO0EsTUFFQSxDQUFDSixNO0EsUUFBT0MsSyxFQUFTQyxHLEM7QSxRLG1DO0EsTSxDO0EsUUFDZixDQUFDRixNO0EsVUFBT0csSyxDQUFNQSxLO0EsVSxtQztBLFEsQztBLFUsQ0FBTUMsSyxDO0EsUUFBRyxFLE0sQztBLFEsQztBLFUsdUNBQ0RDLEksRSxDQUFQSCxHLEMsSztBLFksUTtBLGNBQWYsQ0FBQ0YsTTtBLGdCQUE0QkcsSyxDLENBQU9ELEcsQztBLGdCLG1DO0EsYyxDO0EsZ0JBQUssRUFBR0EsR0FBSSxFO0EsY0FBRSxFLE0sQztBLFksQztBLFUsQyxDO0EsUSxDO0EsUUFDbEQsQ0FBQ0YsTTtBLFVBQU9HLEssQ0FBTUEsSztBLFUsbUM7QSxRLEM7QSxVLENBQU1DLEssQztBLFFBQUcsRSxNLEM7QSxNQUN6QixFLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFQ+Pjd8NSIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8VD4+M3w1IiwiPDxQPj40Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gdmFsdWU9XCJmb29cIj5mb288L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImJhclwiPmJhcjwvb3B0aW9uPlxuICA8b3B0aW9uIDp2YWx1ZT1cImJhelwiPmJhejwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIHZhbHVlPVwiZm9vXCI+Zm9vPC9vcHRpb24+XG4gIDxvcHRpb24gdi1mb3I9XCJ2YWwgb2YgdmFsc1wiIDp2YWx1ZT1cInZhbFwiPnt7IHZhbCB9fTwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XG48L3NlbGVjdD5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjk4OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28oKSwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb28KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvbywgewogICAgICAgICAgImZvbyI6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJBIn0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICAgICJiYXIiOiAoe2Jhcn0pID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgIHtiYXJ9IAogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvbz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNzQzAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxHLGtKLDhCLEUsYyxFLGMsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEc7QSxRLG1DO0EsTSxDO0EsUSxDLDZDO0EsVUFDWSxLLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUlDLEcsQztBLGMsRztBLFksQztBLFUsRTtBLFVBQ0osSyxHQUFLQyxLLE07QSxZLFE7QSxjLEU7QSxnQkFBTyxFQUFFRixHQUFHLEU7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BRTlCLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+MXwzIiwiPDxQPj41Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvbz5cbiAgPHRlbXBsYXRlICNmb28+QTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYmFyPVwie2Jhcn1cIj57e2Jhcn19PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlPkludmFsaWQ8L3RlbXBsYXRlPlxuPC9Gb28+XG5cbjwvdGVtcGxhdGU+Il19)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDI5OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb29CYXIgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIoKSwgIkZvb0JhciIgYXMgY29uc3QsICJGb29CYXIiIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImNvbnRlbnQifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICAiZGVmYXVsdCI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAge2Zvb30gCiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgICJvdGhlciI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAge2Zvb30gCiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgICJkZWZhdWx0IjogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImNvbnRlbnQifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgICAgIm90aGVyIjogKHtmb299KSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICB7Zm9vfSAKICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICAgICJhbm90aGVyIjogKGZvbykgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgICAgIHtmb28uYmFyfSAKICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICA6IG51bGwKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9KX0KICAgICAgPC9Gb29CYXI+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE1MDgAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLE0sa0osaUMsRSxpQixFLGlCLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxNO0EsUSxtQztBLE0sQztBLFEsQyxnRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFPQyxTLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQU8sRSxNLEM7QSxNQUNmLENBQUNELE07QSxRLG1DO0EsTSxDO0EsUSxDLGdEO0EsVUFBUSxTLEdBQVNFLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLEVBQUdDLEdBQUksRTtBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRSxFLE0sQztBLE1BQ2xDLENBQUNILE07QSxRLG1DO0EsTSxDO0EsUSxDLGdEO0EsVUFBUSxPLEdBQU9FLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLEVBQUdDLEdBQUksRTtBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRSxFLE0sQztBLE1BQ2hDLENBQUNILE07QSxRLG1DO0EsTSxDO0EsUSxDLGdEO0EsVUFDWSxTLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQVFDLFMsQztBLGMsRztBLFksQztBLFUsRTtBLFVBQ1IsTyxHQUFPQyxLLE07QSxZLFE7QSxjLEU7QSxnQkFBTyxFQUFFQyxHQUFHLEU7QSxjLEc7QSxZLEM7QSxVLEU7QSxVQUNuQixTLEdBQVNBLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQ1BBLEc7QSxrQixFLEU7QSxzQkFBWCxDQUFDQSxHO0Esd0IsbUM7QSxzQixDO0Esd0JBQWUsRUFBRUMsT0FBTyxFO0Esc0JBQUUsRSxHLEM7QSxvQixHO0EsZ0IsUTtBLGdCLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BRy9CLEUsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NiIsIjw8VD4+N3w5IiwiPDxQPj41IiwiPDxQPj4zIiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvb0Jhcj5jb250ZW50PC9Gb29CYXI+XG48Rm9vQmFyICNkZWZhdWx0PVwie2Zvb31cIj57eyBmb28gfX08L0Zvb0Jhcj5cbjxGb29CYXIgI290aGVyPVwie2Zvb31cIj57eyBmb28gfX08L0Zvb0Jhcj5cbjxGb29CYXI+XG4gIDx0ZW1wbGF0ZSAjZGVmYXVsdD5jb250ZW50PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNvdGhlcj1cIntmb299XCI+e3tmb299fTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYW5vdGhlcj1cImZvb1wiPlxuICAgIDxkaXYgdi1pZj1cImZvb1wiPnt7Zm9vLmJhcn19PC9kaXY+XG4gIDwvdGVtcGxhdGU+XG4gIDxkaXY+ZXh0cmFub3VzPC9kaXY+XG48L0Zvb0Jhcj5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjcyMgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGFyZ2VUZXh0ID0gX19WdWVEWF9fY3R4LmxhcmdlVGV4dAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7KCgpID0+IHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tEaXJlY3RpdmUoIm9uY2UiIGFzIGNvbnN0LCAic2VjdGlvbiIgYXMgY29uc3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7ICB9KTsKICAgICAgfSkoKX0KICAgICAgPHNlY3Rpb24KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgIHtsYXJnZVRleHR9IAogICAgICA8L3NlY3Rpb24+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGFyZ2VUZXh0ID0gX19WdWVEWF9fY3R4LmxhcmdlVGV4dAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJzZWN0aW9uIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTcyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsc0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sUztBLFEsMkNBQVNBLGUsRUFBUixrQixFLFMsRSxTLEUsRSxFLEU7QSxNLEs7QSxNQUFELENBQUNDLE87QSxRLG1DO0EsTSxDO0EsUUFBZSxFQUFHQyxTQUFVLEU7QSxNQUFFLEUsTyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsc0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLHNGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8VD4+NnwxNSIsIjw8UD4+NyIsIjw8UD4+OSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWN0aW9uIHYtb25jZT57eyBsYXJnZVRleHQgfX08L3NlY3Rpb24+XG5cbjwvdGVtcGxhdGU+Il19)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzM5NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgTXlDb21wb25lbnQgPSBfX1Z1ZURYX19jdHguTXlDb21wb25lbnQKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHRhYmxlCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIDx0Ym9keQogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgTXlDb21wb25lbnQsIE15Q29tcG9uZW50LCBNeUNvbXBvbmVudCk7CiAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICApOwogICAgICAgICAgfSkoKX0KICAgICAgICA8L3Rib2R5PgogICAgICA8L3RhYmxlPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IE15Q29tcG9uZW50ID0gX19WdWVEWF9fY3R4Lk15Q29tcG9uZW50CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInRhYmxlIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNzU1AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEM7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsSztBLFEsbUM7QSxNLEM7QSxRQUNDLENBQUNBLEs7QSxVLG1DO0EsUSxDO0EsVSxTO0E7QSxZLDBLQUNXQyxXLEVBQUFBLFcsRUFBQUEsVyxFO0EsWSwrQztBLFksUTtBLGNBQVYsQ0FBQ0Msa0I7QSxnQixtQztBLGMsQztBLGdCLEMsNEQ7QSxrQixPLEcsTTtBLG9CLFE7QSxzQixFO0Esc0IsRztBLG9CLEM7QSxrQixFO0EsZ0IsRSxDO0EsY0FBc0IsRSxrQixDO0EsWSxFO0EsVSxLO0EsUUFDekIsRSxLLEM7QSxNQUNGLEUsSyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEM7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLG9GLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+MTEiLCI8PFQ+PjJ8MTgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48dGFibGU+XG4gIDx0Ym9keT5cbiAgICA8dHIgdi1pcz1cIk15Q29tcG9uZW50XCI+PC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG5cbjwvdGVtcGxhdGU+Il19)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Nzk0MQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbnVtID0gX19WdWVEWF9fY3R4Lm51bQogIGxldCBzdHIgPSBfX1Z1ZURYX19jdHguc3RyCiAgbGV0IGFyciA9IF9fVnVlRFhfX2N0eC5hcnIKICBsZXQgb2JqID0gX19WdWVEWF9fY3R4Lm9iagogIGxldCBpdHIgPSBfX1Z1ZURYX19jdHguaXRyCiAgbGV0IGJvbyA9IF9fVnVlRFhfX2N0eC5ib28KICBsZXQgc3ltID0gX19WdWVEWF9fY3R4LnN5bQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobnVtLCAobikgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge259IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChudW0sIChuLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7bn0gCiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICAge2l9IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChzdHIsIChzKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7c30gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHN0ciwgKHMsIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgIHtzfSAKICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgICB7aX0gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKGEpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgIHthfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyB2YWx1ZSB9KSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7dmFsdWV9IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsICh7IGZvbyB9KSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7YXJyfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoYSwgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge2F9IAogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAgIHtpfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyB2YWx1ZSB9LCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7dmFsdWV9IAogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAgIHtpfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge299IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChvYmosIChvLCBrKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7b30gCiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICAge2t9IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChvYmosIChvLCBrLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7b30gCiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICAge2t9IAogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAgIHtpfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoaXRyLCAodCkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge3R9IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChib28sIChiKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7Yn0gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHN5bSwgKHMpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgIHtzfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG51bSA9IF9fVnVlRFhfX2N0eC5udW0KICBsZXQgc3RyID0gX19WdWVEWF9fY3R4LnN0cgogIGxldCBhcnIgPSBfX1Z1ZURYX19jdHguYXJyCiAgbGV0IG9iaiA9IF9fVnVlRFhfX2N0eC5vYmoKICBsZXQgaXRyID0gX19WdWVEWF9fY3R4Lml0cgogIGxldCBib28gPSBfX1Z1ZURYX19jdHguYm9vCiAgbGV0IHN5bSA9IF9fVnVlRFhfX2N0eC5zeW0KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgozNDg0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQztBLFEsdUNBQWlCQSxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBcUIsRUFBR0MsQ0FBRSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDUEQsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQTBCLEVBQUdDLENBQUUsRTtBLGMsQ0FBRUMsRyxDO0EsY0FBQyxFQUFHRCxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUN6QkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQXFCLEVBQUdDLENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1BELEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUEwQixFQUFHQyxDQUFFLEU7QSxjLENBQUVDLEcsQztBLGNBQUMsRUFBR0QsQ0FBRSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDekJELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUFxQixFQUFHQyxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNKRCxHLEUsQ0FBYkcsUyxDLEs7QSxVLFE7QSxZQUFaLENBQUNILEc7QSxjLG1DO0EsWSxDO0EsY0FBNkIsRUFBR0ksS0FBTSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDbEJKLEcsRSxDQUFYSyxPLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0wsRztBLGMsbUM7QSxZLEM7QSxjQUEyQixFQUFHQSxHQUFJLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNmQSxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBMEIsRUFBR0MsQ0FBRSxFO0EsYyxDQUFFQyxHLEM7QSxjQUFDLEVBQUdELENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1pELEcsRSxDQUFqQkcsUyxFQUFXRixDLEMsSztBLFUsUTtBLFlBQXhCLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBa0MsRUFBR0ksS0FBTSxFO0EsYyxDQUFFRixHLEM7QSxjQUFDLEVBQUdELENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3JDRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBcUIsRUFBR0MsQ0FBRSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDUEQsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQTBCLEVBQUdDLENBQUUsRTtBLGMsQ0FBRUMsRyxDO0EsY0FBQyxFQUFHRCxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNqQkQsRyxFLENBQVpDLEMsRUFBR0EsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQW5CLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBNkIsRUFBR0MsQ0FBRSxFO0EsYyxDQUFFQyxHLEM7QSxjQUFDLEVBQUdELENBQUUsRTtBLGMsQ0FBRUMsRyxDO0EsY0FBQyxFQUFHRCxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNwQ0QsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQXFCLEVBQUdDLENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1pELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUFxQixFQUFHQyxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNaRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBcUIsRUFBR0MsQ0FBRSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxJLGtGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8UD4+MSIsIjw8VD4+MXwzIiwiPDxQPj45IiwiPDxQPj41IiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWZvcj1cIm4gb2YgbnVtXCI+e3sgbiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihuLCBpKSBvZiBudW1cIj57eyBuIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN0clwiPnt7IHMgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIocywgaSkgb2Ygc3RyXCI+e3sgcyB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYSBvZiBhcnJcIj57eyBhIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyB2YWx1ZSB9IG9mIGFyclwiPnt7IHZhbHVlIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyBmb28gfSBvZiBhcnJcIj57eyBhcnIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoYSwgaSkgb2YgYXJyXCI+e3sgYSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHsgdmFsdWUgfSwgaSkgb2YgYXJyXCI+e3sgdmFsdWUgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIm8gb2Ygb2JqXCI+e3sgbyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaywgaSkgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ0IG9mIGl0clwiPnt7IHQgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJiIG9mIGJvb1wiPnt7IGIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN5bVwiPnt7IHMgfX08L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Njk1NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7KCgpID0+IHsKCiAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBmb28sIGZvbywgZm9vKTsKICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgIHJldHVybiAoCiAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICA+CiAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19jb21wb25lbnQsIHsKICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7YmFyfSkgPT4gewogICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyLCBiYXIpOwogICAgICAgICAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgImRlZmF1bHQiOiAoe2Jhen0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJheiwgYmF6LCBiYXopOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3RoZXIiOiAoeyBmb28gfSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBmb28sIGZvbywgZm9vKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPgoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7IGJhciB9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyLCBiYXIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9KX0KICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICk7CiAgICAgIH0pKCl9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTYwNwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLFM7QTtBLFEsMEtBQWdCQSxHLEVBQUFBLEcsRUFBQUEsRyxFO0EsUSwrQztBLFEsUTtBLFVBQWhCLENBQUNDLGtCO0EsWSxtQztBLFUsQztBLFksQyw0RDtBLGNBQXFCLFMsR0FBU0MsSyxNO0EsZ0IsUTtBLGtCLEU7QSxvQixTO0E7QSxzQiwwS0FDYkYsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLHNCLCtDO0Esc0IsUTtBLHdCQUFoQixDQUFDQyxrQjtBLDBCLG1DO0Esd0IsQztBLDBCLEMsNEQ7QSw0QkFBcUIsUyxHQUFTQyxLLE07QSw4QixRO0EsZ0MsRTtBLGtDLFM7QTtBLG9DLDBLQUNiRixHLEVBQUFBLEcsRUFBQUEsRyxFO0Esb0MsK0M7QSxvQyxRO0Esc0NBQWhCLENBQUNDLGtCO0Esd0MsbUM7QSxzQyxDO0Esd0MsQyw0RDtBLDBDQUNZLE8sR0FBT0UsTyxNO0EsNEMsUTtBLDhDLEU7QSxnRCxTO0E7QSxrRCwwS0FDQUgsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLGtELCtDO0Esa0QsUTtBLG9EQUFoQixDQUFDQyxrQjtBLHNELG1DO0Esb0RBQW9CLEU7QTtBLGtELEU7QSxnRCxLO0EsOEMsRztBLDRDLEM7QSwwQyxFO0EsMENBRVosUyxHQUFTRSxPLE07QSw0QyxRO0EsOEMsRTtBLGdELFM7QTtBLGtELDBLQUNGSCxHLEVBQUFBLEcsRUFBQUEsRyxFO0Esa0QsK0M7QSxrRCxRO0Esb0RBQWhCLENBQUNDLGtCO0Esc0QsbUM7QSxvREFBb0IsRTtBO0Esa0QsRTtBLGdELEs7QSw4QyxHO0EsNEMsQztBLDBDLEU7QSx3QyxFLEM7QSxzQ0FFekIsRSxrQixDO0Esb0MsRTtBLGtDLEs7QSxnQyxHO0EsOEIsQztBLDRCLEU7QSwwQixFLEM7QSx3QkFDRixFLGtCLEM7QSxzQixFO0Esb0IsSztBLGtCLEc7QSxnQixDO0EsYyxFO0EsWSxFLEM7QSxVQUNGLEUsa0IsQztBLFEsRTtBLE0sSztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj45fDE4IiwiPDxQPj41IiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGNvbXBvbmVudCA6aXM9XCJmb29cIiAjZGVmYXVsdD1cIntiYXJ9XCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6XCI+XG4gICAgICA8dGVtcGxhdGUgI290aGVyPVwieyBmb28gfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImZvb1wiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBiYXIgfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImJhclwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvY29tcG9uZW50PlxuICA8L2NvbXBvbmVudD5cbjwvY29tcG9uZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Njg2MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYmFycyA9IF9fVnVlRFhfX2N0eC5iYXJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChiYXJzLCAoYmFyKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBiYXIsIGJhciwgYmFyKTsKICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19jb21wb25lbnQsIHsKICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmFyLCBiYXIsIGJhcik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7YmF6fSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGJheiwgKGl0ZW0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJheltiYXJdLCBiYXpbYmFyXSwgYmF6W2Jhcl0pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGl0ZW0sIGl0ZW0sIGl0ZW0pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICApOwogICAgICAgICAgICB9KSgpfQogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBiYXJzID0gX19WdWVEWF9fY3R4LmJhcnMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE0NDkAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDO0EsUSx1Q0FBbUNBLEksRSxDQUFQQyxHLEMsSztBLFUsUTtBLFksUztBO0EsYywwS0FBWkEsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLGMsK0M7QSxjLFE7QSxnQkFBaEIsQ0FBQ0Msa0I7QSxrQixtQztBLGdCLEM7QSxrQixDLDREO0Esb0IsTyxHLE07QSxzQixRO0Esd0IsRTtBLDBCLFM7QTtBLDRCLDBLQUNpQkQsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLDRCLCtDO0EsNEIsUTtBLDhCQUFoQixDQUFDQyxrQjtBLGdDLG1DO0EsOEIsQztBLGdDLEMsNEQ7QSxrQ0FBcUIsUyxHQUFTQyxLLE07QSxvQyxRO0Esc0MsRTtBLHdDLEM7QSwwQyx1Q0FDWUYsRyxFLENBQVJELEksQyxLO0EsNEMsUTtBLDhDLFM7QTtBLGdELDBLQUFqQkksUSxFQUFBQSxRLEVBQUFBLFEsRTtBLGdELCtDO0EsZ0QsUTtBLGtEQUFoQixDQUFDRixrQjtBLG9ELG1DO0Esa0QsQztBLG9ELEMsNEQ7QSxzRCxPLEcsTTtBLHdELFE7QSwwRCxFO0EsNEQsUztBO0EsOEQsMEtBQ2lCRixJLEVBQUFBLEksRUFBQUEsSSxFO0EsOEQsK0M7QSw4RCxRO0EsZ0VBQWhCLENBQUNFLGtCO0Esa0UsbUM7QSxnRUFBcUIsRTtBO0EsOEQsRTtBLDRELEs7QSwwRCxHO0Esd0QsQztBLHNELEU7QSxvRCxFLEM7QSxrREFDeEIsRSxrQixDO0EsZ0QsRTtBLDhDLEs7QSw0QyxDO0EsMEMsQyxDO0Esd0MsQztBLHNDLEc7QSxvQyxDO0Esa0MsRTtBLGdDLEUsQztBLDhCQUNGLEUsa0IsQztBLDRCLEU7QSwwQixLO0Esd0IsRztBLHNCLEM7QSxvQixFO0Esa0IsRSxDO0EsZ0JBQ0YsRSxrQixDO0EsYyxFO0EsWSxLO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NCIsIjw8UD4+MyIsIjw8VD4+OXwxOCIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxjb21wb25lbnQgOmlzPVwiYmFyXCIgdi1mb3I9XCJiYXIgb2YgYmFyc1wiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJheltiYXJdXCIgdi1mb3I9XCJpdGVtIG9mIGJhelwiID5cbiAgICAgIDxjb21wb25lbnQgOmlzPVwiaXRlbVwiIC8+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)

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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzAzMABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5zY29wZShhc3luYyAoKSA9PiB7CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcyA9IGRlZmluZVByb3BzKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyA9IHt9Owpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50ID0gX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50KChfOiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2ludGVybmFsUHJvcHMpPT4ge30pOwoKLy8jZW5kcmVnaW9uCmZ1bmN0aW9uIF9fVnVlRFhfX1JlZ2lzdGVyU2VsZjxUPihjdHg6IFQpIHsKICByZXR1cm4geyAuLi5jdHgsIFsiRXhhbXBsZSJdOiBFeGFtcGxlIH0KfQpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX19TY3JpcHRfQ29tcG9uZW50KCkpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJGF0dHJzID0gX19WdWVEWF9fY3R4LiRhdHRycwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvbyA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0ZvbygpLCAiRm9vIiBhcyBjb25zdCwgIkZvbyIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEZvbwogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLCB7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIDxpbnB1dAogICAgICAgICAgICAgICAgICB7Li4uKCRhdHRycyl9CiAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAvPgogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvbz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkYXR0cnMgPSBfX1Z1ZURYX19jdHguJGF0dHJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo2MzcAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxHLGtKLDhCLEUsYyxFLGMsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEc7QSxRLG1DO0EsTSxDO0EsUSxDLDZDO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCQUNDLENBQUNDLEs7QSxrQixLQUFjQyxNLEU7QSxrQixtQztBLGdCQUFRLEU7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQ3pCLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFA+PjUiLCI8PFA+PjYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Rm9vPlxuICA8aW5wdXQgdi1iaW5kPVwiJGF0dHJzXCIgLz5cbjwvRm9vPlxuXG48L3RlbXBsYXRlPiJdfQ==)

