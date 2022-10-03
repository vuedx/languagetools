# Baseline Spec

## 1.1. element > single

```vue-html
<div>foo</div>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQ0OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiZm9vIn0KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNDU5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEc7QSxRQUFHLG1DO0EsTSxDO0EsUSxDQUFDQyxLLEM7QSxNQUFHLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj4zfDUiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PmZvbzwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 1.2. element > fragment with errors

```vue-html
<HelloWorld n />
<span>Name: {{ name + }}</span>
<p v-bind:></p>
<p v-if=""></p>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzMxNABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9IZWxsb1dvcmxkID0gKCkgPT4gSGVsbG9Xb3JsZDsKLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG5hbWUgPSBfX1Z1ZURYX19jdHgubmFtZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEhlbGxvV29ybGQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9IZWxsb1dvcmxkKCksICJIZWxsb1dvcmxkIiBhcyBjb25zdCwgIkhlbGxvV29ybGQiIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxIZWxsb1dvcmxkCiAgICAgICAgbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CgogICAgICA8c3BhbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7Ik5hbWU6ICJ9CiAgICAgICAge25hbWUgK30KICAgICAgPC9zcGFuPgogICAgICA8cAogICAgICAgIHsuLi4oLyo8dnVlZHg6bWlzc2luZ0V4cHJlc3Npb24+Ki8pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9wPgogICAgICB7CiAgICAgICAgPyA8PgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgPC9wPgogICAgICAgICAgPC8+CiAgICAgICAgOiBudWxsCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBuYW1lID0gX19WdWVEWF9fY3R4Lm5hbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAicCI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjgyNQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBO0EsNkQ7QSxBO0EsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxVLGtKLHFDLEUscUIsRSxxQixFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxVO0EsUUFBV0EsQztBLFFBQUQsbUM7QSxNLEU7QTtBLE1BQ1gsQ0FBQ0MsSTtBLFFBQUksbUM7QSxNLEM7QSxRLENBQUNDLFEsQztBLFFBQU0sQ0FBR0MsTUFBTSxDO0EsTUFBRyxFLEksQztBLE1BQ3hCLENBQUNILEM7QSxRLEtBQVMsNkIsRTtBLFFBQVIsbUM7QSxNLEM7QSxNQUFTLEUsQyxDO0EsTSxDQUNGSSxBO0EsUSxFLEU7QSxZQUFULENBQUNKLEM7QSxjQUFDLG1DO0EsWSxDO0EsWUFBUyxFLEMsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxnRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjEiLCI8PFA+PjQiLCI8PFQ+PjZ8OCIsIjw8UD4+NiIsIjw8UD4+MCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxIZWxsb1dvcmxkIG4gLz5cbjxzcGFuPk5hbWU6IHt7IG5hbWUgKyB9fTwvc3Bhbj5cbjxwIHYtYmluZDo+PC9wPlxuPHAgdi1pZj1cIlwiPjwvcD5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NTA5MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIgPSAoKSA9PiBGb29CYXI7CmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28gPSAoKSA9PiBGb287CmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9mb29CYXIgPSAoKSA9PiBmb29CYXI7CmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Vbmtub3duRWxlbWVudCA9ICgpID0+IFVua25vd25FbGVtZW50OwovKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb29CYXIgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIoKSwgIkZvb0JhciIgYXMgY29uc3QsICJGb29CYXIiIGFzIGNvbnN0KTsKICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28oKSwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICBjb25zdCBVbmtub3duRWxlbWVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX1Vua25vd25FbGVtZW50KCksICJ1bmtub3duLWVsZW1lbnQiIGFzIGNvbnN0LCAiVW5rbm93bkVsZW1lbnQiIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vLkJhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLkJhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vLkJhcj4KICAgICAgPEZvby5CYXIuQmF6CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb28uQmFyLkJheiwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vLkJhci5CYXo+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvb0JhciwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPFVua25vd25FbGVtZW50CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhVbmtub3duRWxlbWVudCwgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvVW5rbm93bkVsZW1lbnQ+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjEzNDIAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QTtBLHFEO0EsQSwrQztBLEEscUQ7QSxBLHFFO0EsQTtBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxNLGtKLGlDLEUsaUIsRSxpQixFO0EsRSxNLEcsa0osOEIsRSxjLEUsYyxFO0EsRSxNLGMsa0oseUMsRSwwQixFLHlCLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDLE07QSxRQUFNLG1DO0EsTSxDO0EsUSxDLGdEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUNBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE0sQztBLE1BQ1gsQ0FBQyxPO0EsUUFBTyxtQztBLE0sQztBLFEsQyxpRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxPLEM7QSxNQUNaLENBQUMsVztBLFFBQVcsbUM7QSxNLEM7QSxRLEMscUQ7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBQ0EsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsVyxDO0EsTUFDaEIsQ0FBQyxNO0EsUUFBTSxtQztBLE0sQztBLFEsQyxnRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxNLEM7QSxNQUNYLENBQUMsTTtBLFFBQU8sbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBQ0EsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTSxDO0EsTUFDWixDQUFDLGM7QSxRQUFlLG1DO0EsTSxDO0EsUSxDLHdEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUNBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLGMsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFQ+PjN8NSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb29CYXI+Zm9vPC9Gb29CYXI+XG48Rm9vLkJhcj5mb288L0Zvby5CYXI+XG48Rm9vLkJhci5CYXo+Zm9vPC9Gb28uQmFyLkJhej5cbjxmb29CYXI+Zm9vPC9mb29CYXI+XG48Zm9vLWJhcj5mb288L2Zvby1iYXI+XG48dW5rbm93bi1lbGVtZW50PmZvbzwvdW5rbm93bi1lbGVtZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzY4MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wcwogIGxldCB2YWx1ZSA9IF9fVnVlRFhfX2N0eC52YWx1ZQogIGxldCBkeW5hbWljID0gX19WdWVEWF9fY3R4LmR5bmFtaWMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7CiAgICAgICAgICAkc2xvdHMuZGVmYXVsdCAhPSBudWxsID8gJHNsb3RzLmRlZmF1bHQoe30pIDogKAogICAgICAgICAgICA8PgogICAgICAgICAgICAgIHsiZmFsbGJhY2sgY29udGVudCJ9CiAgICAgICAgICAgIDwvPgogICAgICAgICAgKQoKICAgICAgICB9CiAgICAgICAgPHNwYW4KICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgewogICAgICAgICAgICAkc2xvdHMub3RoZXIgIT0gbnVsbCA/ICRzbG90cy5vdGhlcih7CiAgICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICAgICAgICB9KSA6ICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmYWxsYmFjayBjb250ZW50In0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQoKICAgICAgICAgIH0KICAgICAgICA8L3NwYW4+CiAgICAgICAgewogICAgICAgICAgJHNsb3RzLmFub3RoZXIgIT0gbnVsbCA/ICRzbG90cy5hbm90aGVyKHsKICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgbXlQcm9wOiB2YWx1ZSwKICAgICAgICAgIH0pIDogbnVsbAogICAgICAgIH0KICAgICAgICB7CiAgICAgICAgICAkc2xvdHMuIm5hbWUiICE9IG51bGwgPyAkc2xvdHMuIm5hbWUiKHsKICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgbXlQcm9wOiB2YWx1ZSwKICAgICAgICAgIH0pIDogbnVsbAogICAgICAgIH0KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgcHJvcHMgPSBfX1Z1ZURYX19jdHgucHJvcHMKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWUKICBsZXQgZHluYW1pYyA9IF9fVnVlRFhfX2N0eC5keW5hbWljCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7CiAgICAgIGRlZmF1bHQ6IHt9LAogICAgfSwKICAgIHsKICAgICAgIm90aGVyIjogewogICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgbXlQcm9wOiB2YWx1ZSwKICAgICAgfSwKICAgIH0sCiAgICB7CiAgICAgICJhbm90aGVyIjogewogICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgbXlQcm9wOiB2YWx1ZSwKICAgICAgfSwKICAgIH0sCiAgICB7CiAgICAgIFtkeW5hbWljXTogewogICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgbXlQcm9wOiB2YWx1ZSwKICAgICAgfSwKICAgIH0sCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE0NTMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDhCO0EsRSw4QjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRztBLFFBQUcsbUM7QSxNLEM7QSxRLEM7QSxVLE0sUSxXLE0sUSxFLEUsRyxDO0EsWSxFO0EsYyxDQUNJQyxrQixDO0EsWSxHO0EsVSxDO0E7QSxRLEM7QSxRQUNOLENBQUNDLEk7QSxVQUFJLG1DO0EsUSxDO0EsVSxDO0EsWSxNLENBQ1FDLEssVyxNLENBQUFBLEssRTtBLGNBQVEsSUFBUUMsSyxDLEM7QSxZQUFPLEVBQUNDLE0sRUFBUUQsSyxDO0EsWSxFLEcsQztBLGMsRTtBLGdCLENBQU9ILGtCLEM7QSxjLEc7QSxZLEM7QTtBLFUsQztBLFFBQ3BELEUsSSxDO0EsUSxDO0EsVSxNLENBQ1dLLE8sVyxNLENBQUFBLE8sRTtBLFlBQVUsSUFBUUYsSyxDLEM7QSxVQUFPLEVBQUNDLE0sRUFBUUQsSyxDO0EsVSxFLEcsSTtBLFEsQztBLFEsQztBLFUsTSxDQUN0Q0csTSxXLE0sQ0FBQUEsTSxFO0EsWUFBZSxJQUFRSCxLLEMsQztBLFVBQU8sRUFBQ0MsTSxFQUFRRCxLLEM7QSxVLEUsRyxJO0EsUSxDO0EsTUFDaEQsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSw4QjtBLEUsOEI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsSSxDO0EsTSxPLEUsQyxFO0EsSSxDLEM7QSxJLEM7QSxNLE8sRSxDO0EsUSxJLEssQyxDO0EsTSxFLE0sRSxLLEM7QSxNLEU7QSxJLEMsQztBLEksQztBLE0sUyxFLEM7QSxRLEksSyxDLEM7QSxNLEUsTSxFLEssQztBLE0sRTtBLEksQyxDO0EsSSxDO0EsTSxDLE8sQyxFLEM7QSxRLEksSyxDLEM7QSxNLEUsTSxFLEssQztBLE0sRTtBLEksQyxDO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxrRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjE2fDE4IiwiPDxQPj40IiwiPDxUPj43fDUiLCI8PFA+PjUiLCI8PFA+PjYiLCI8PFQ+Pjl8NyIsIjw8VD4+NHw2Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdj5cbiAgPHNsb3Q+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPHNwYW4+XG4gICAgPHNsb3QgbmFtZT1cIm90aGVyXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIj5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8L3NwYW4+XG4gIDxzbG90IG5hbWU9XCJhbm90aGVyXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIj48L3Nsb3Q+XG4gIDxzbG90IDpuYW1lPVwiZHluYW1pY1wiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cInZhbHVlXCIgLz5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDEwOABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsaXN0ID0gX19WdWVEWF9fY3R4Lmxpc3QKICBsZXQgcHJvcHMgPSBfX1Z1ZURYX19jdHgucHJvcHMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGxpc3QsIChpdGVtcykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAkc2xvdHMuZGVmYXVsdCAhPSBudWxsID8gJHNsb3RzLmRlZmF1bHQoe30pIDogKAogICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgIHsiZmFsbGJhY2sgY29udGVudCJ9CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgKQoKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoaXRlbXMsIChpdGVtKSA9PiB7CiAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgPHNwYW4KICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAkc2xvdHMub3RoZXIgIT0gbnVsbCA/ICRzbG90cy5vdGhlcih7CiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgICAgICAgICAgICAgICBteVByb3A6IGl0ZW0sCiAgICAgICAgICAgICAgICAgICAgICAgIH0pIDogKAogICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ImZhbGxiYWNrIGNvbnRlbnQifQogICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICApCgogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsaXN0ID0gX19WdWVEWF9fY3R4Lmxpc3QKICBsZXQgcHJvcHMgPSBfX1Z1ZURYX19jdHgucHJvcHMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KAogICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChsaXN0LCAoaXRlbXMpID0+ICgKICAgICAgICB7CiAgICAgICAgICBkZWZhdWx0OiB7fSwKICAgICAgICB9CiAgICAgICkpCiAgICApLAogICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoCiAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGxpc3QsIChpdGVtcykgPT4gKAogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KAogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoaXRlbXMsIChpdGVtKSA9PiAoCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAib3RoZXIiOiB7CiAgICAgICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICAgICAgbXlQcm9wOiBpdGVtLAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIH0KICAgICAgICAgICkpCiAgICAgICAgKQogICAgICApKQogICAgKSwKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTI5MgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLDhCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLEM7QSxRLHVDQUNxQkEsSSxFLENBQVRDLEssQyxLO0EsVSxRO0EsWUFBWixDQUFDQyxHO0EsY0FBRyxtQztBLFksQztBLGMsQztBLGdCLE0sUSxXLE0sUSxFLEUsRyxDO0Esa0IsRTtBLG9CLENBQ0lDLGtCLEM7QSxrQixHO0EsZ0IsQztBO0EsYyxDO0EsYyxDO0EsZ0IsdUNBQ2VGLEssRSxDQUFSRCxJLEMsSztBLGtCLFE7QSxvQkFBYixDQUFDQSxJO0Esc0JBQUksbUM7QSxvQixDO0Esc0IsQztBLHdCLE0sQ0FDUUksSyxXLE0sQ0FBQUEsSyxFO0EsMEJBQVEsSUFBUUgsSyxDLEM7QSx3QkFBTyxFQUFDSSxNLEVBQVFMLEksQztBLHdCLEUsRyxDO0EsMEIsRTtBLDRCLENBQU1HLGtCLEM7QSwwQixHO0Esd0IsQztBO0Esc0IsQztBLG9CQUNuRCxFLEksQztBLGtCLEM7QSxnQixDLEM7QSxjLEM7QSxZQUNGLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSw0QjtBLEUsOEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxJLGdDLEM7QSxNLHNDLEMsSSxFLEMsSyxDLEs7QSxRLEM7QSxVLE8sRSxDLEU7QSxRLEM7QSxNLEU7QSxJLEMsQztBLEksZ0MsQztBLE0sc0MsQyxJLEUsQyxLLEMsSztBLFEsZ0MsQztBLFUsc0MsQyxLLEUsQyxJLEMsSztBLFksQztBLGMsTyxFLEM7QSxnQixJLEssQyxDO0EsYyxFLE0sRSxJLEM7QSxjLEU7QSxZLEM7QSxVLEU7QSxRLEM7QSxNLEU7QSxJLEMsQztBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj40IiwiPDxQPj41IiwiPDxQPj4zIiwiPDxUPj4xNnwxOCIsIjw8VD4+N3w1IiwiPDxQPj42Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWZvcj1cIml0ZW1zIG9mIGxpc3RcIj5cbiAgPHNsb3Q+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPHNwYW4gdi1mb3I9XCJpdGVtIG9mIGl0ZW1zXCI+XG4gICAgPHNsb3QgbmFtZT1cIm90aGVyXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwiaXRlbVwiPmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDwvc3Bhbj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 2.1. v-bind 

```vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzI2NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28gPSAoKSA9PiBGb287Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBteUlucHV0ID0gX19WdWVEWF9fY3R4Lm15SW5wdXQKICBsZXQgY3VzdG9tTmFtZSA9IF9fVnVlRFhfX2N0eC5jdXN0b21OYW1lCiAgbGV0IHJlc3QgPSBfX1Z1ZURYX19jdHgucmVzdAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvbyA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0ZvbygpLCAiRm9vIiBhcyBjb25zdCwgIkZvbyIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgdmFsdWU9e215SW5wdXR9CiAgICAgICAgey4uLih7W2N1c3RvbU5hbWVdOiBteUlucHV0fSl9CiAgICAgICAgey4uLihyZXN0KX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8Rm9vCiAgICAgICAgdmFsdWU9e215SW5wdXR9CiAgICAgICAgey4uLih7W2N1c3RvbU5hbWVdOiBteUlucHV0fSl9CiAgICAgICAgey4uLihyZXN0KX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgoKICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBteUlucHV0ID0gX19WdWVEWF9fY3R4Lm15SW5wdXQKICBsZXQgY3VzdG9tTmFtZSA9IF9fVnVlRFhfX2N0eC5jdXN0b21OYW1lCiAgbGV0IHJlc3QgPSBfX1Z1ZURYX19jdHgucmVzdAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJpbnB1dCI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjgyMgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBO0EsK0M7QSxBO0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsd0M7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLEcsa0osOEIsRSxjLEUsYyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsSztBLFFBQU9BLEssQyxDQUFPQyxPLEM7QSxRLE9BQVdDLFUsQyxFQUFhRCxPLEc7QSxRLEtBQWlCRSxJLEU7QSxRQUFsRCxtQztBLE0sRTtBLE1BQ04sQ0FBQyxHO0EsUUFBS0gsSyxDLENBQU9DLE8sQztBLFEsT0FBV0MsVSxDLEVBQWFELE8sRztBLFEsS0FBaUJFLEksRTtBLFFBQWxELG1DO0EsTSxFO0E7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsd0M7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxvRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjciLCI8PFA+PjEwIiwiPDxQPj40Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuPEZvbyA6dmFsdWU9XCJteUlucHV0XCIgOltjdXN0b21OYW1lXT1cIm15SW5wdXRcIiB2LWJpbmQ9XCJyZXN0XCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mzg3MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkZvY3VzID0gX19WdWVEWF9fY3R4Lm9uRm9jdXMKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWUKICBsZXQgZXZlbnROYW1lID0gX19WdWVEWF9fY3R4LmV2ZW50TmFtZQogIGxldCBldmVudHMgPSBfX1Z1ZURYX19jdHguZXZlbnRzCiAgbGV0IGZuTmFtZSA9IF9fVnVlRFhfX2N0eC5mbk5hbWUKICBsZXQgY2FsbE15Rm4gPSBfX1Z1ZURYX19jdHguY2FsbE15Rm4KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgb25Gb2N1cz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uRm9jdXMsIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIG9uVXBkYXRlOnZhbHVlPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgKCRldmVudCkgPT4gewogICAgICAgICAgdmFsdWUgPSAkZXZlbnQKICAgICAgICAgIH0sIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIG9uRXZlbnQtbmFtZT17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICBdKX0KICAgICAgICBvbkV2ZW50TmFtZT17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICAgIC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovLCAKICAgICAgICBdKX0KICAgICAgICB7Li4uKGV2ZW50cyl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgb25LZXlkb3duPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgZm5OYW1lLCAKICAgICAgICAgICgkZXZlbnQpID0+IHsKICAgICAgICAgIGNhbGxNeUZuKCRldmVudCkKICAgICAgICAgIH0sIAogICAgICAgICAgJGV2ZW50ID0+IGNhbGxNeUZuKCRldmVudCksIAogICAgICAgICAgKCRldmVudCkgPT4gY2FsbE15Rm4oJGV2ZW50KSwgCiAgICAgICAgICAoKSA9PiBjYWxsTXlGbigkZXZlbnQpLCAKICAgICAgICAgIGZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7CiAgICBjYWxsTXlGbigkZXZlbnQpCiAgfSwgCiAgICAgICAgICBmdW5jdGlvbiBteUZ1bmN0aW9uKCkgewogICAgY2FsbE15Rm4oJGV2ZW50KQogIH0sIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb25Gb2N1cyA9IF9fVnVlRFhfX2N0eC5vbkZvY3VzCiAgbGV0IHZhbHVlID0gX19WdWVEWF9fY3R4LnZhbHVlCiAgbGV0IGV2ZW50TmFtZSA9IF9fVnVlRFhfX2N0eC5ldmVudE5hbWUKICBsZXQgZXZlbnRzID0gX19WdWVEWF9fY3R4LmV2ZW50cwogIGxldCBmbk5hbWUgPSBfX1Z1ZURYX19jdHguZm5OYW1lCiAgbGV0IGNhbGxNeUZuID0gX19WdWVEWF9fY3R4LmNhbGxNeUZuCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNTYzAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsOEI7QSxFLHNDO0EsRSxnQztBLEUsZ0M7QSxFLG9DO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEs7QSxRQUFPQyxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBVCxtQztBLE0sRTtBLE1BQ04sQ0FBQ0YsSztBLFFBQU9HLGMsQyxDLG1DO0EsVSxhO0EsVUFBY0MsYztBLFUsQyxFO0EsUSxFLEM7QSxRQUFoQixtQztBLE0sRTtBLE1BQ04sQ0FBQ0osSztBLFFBQU9LLFksQyxDLG1DO0EsVUFBRCw2QixFO0EsUSxFLEM7QSxRQUFhQyxXLEMsQyxtQztBLFVBQUQsNkIsRTtBLFVBQVcsNkIsRTtBLFEsRSxDO0EsUSxLQUFtQkMsTSxFO0EsUUFBM0MsbUM7QSxNLEU7QSxNQUNOLENBQUNQLEs7QSxRQUNFUSxTLEMsQyxtQztBLFVBQVNELE0sRTtBLFUsYTtBLFVBQ0tFLGdCO0EsVSxDLEU7QSxVQUNNQywwQixFO0EsVUFDQ0MsNEIsRTtBLFVBQ0RDLHNCLEU7QSxVQUNGQzs7RyxFO0EsVUFHREM7O0csRTtBLFEsRSxDO0EsUUFUZCxtQztBLE0sRTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSw4QjtBLEUsc0M7QSxFLGdDO0EsRSxnQztBLEUsb0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFQ+PjV8NyIsIjw8UD4+NyIsIjw8VD4+MTJ8MTQiLCI8PFA+PjE0IiwiPDxUPj4xMHwxMiIsIjw8VD4+OXwxMSIsIjw8UD4+NiIsIjw8VD4+N3w5IiwiPDxQPj4xNiIsIjw8UD4+MjYiLCI8PFA+PjI4IiwiPDxQPj4yMiIsIjw8UD4+NTQiLCI8PFA+PjQ4Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IEBmb2N1cz1cIm9uRm9jdXNcIiAvPlxuPGlucHV0IEB1cGRhdGU6dmFsdWU9XCJ2YWx1ZSA9ICRldmVudFwiIC8+XG48aW5wdXQgQGV2ZW50LW5hbWUgQGV2ZW50TmFtZSBAW2V2ZW50TmFtZV0gdi1vbj1cImV2ZW50c1wiIC8+XG48aW5wdXRcbiAgQGtleWRvd249XCJmbk5hbWVcIlxuICBAa2V5ZG93bi5sZWZ0PVwiY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LmxlZnQ9XCIkZXZlbnQgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LnJpZ2h0PVwiKCRldmVudCkgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LmRvd249XCIoKSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQudXA9XCJmdW5jdGlvbiBteUZ1bmN0aW9uKCRldmVudCkge1xuICAgIGNhbGxNeUZuKCRldmVudClcbiAgfVwiXG4gIEBrZXlkb3duLmN0cmwudXA9XCJmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICAgIGNhbGxNeUZuKCRldmVudClcbiAgfVwiXG4vPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 4.1. v-on multiple events 

```vue-html
<div @click="onClick" @hover="onHover" @press="onPress" />
<div @click="onClick" @hover="onHover" @press="onPress" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzEyOABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkNsaWNrID0gX19WdWVEWF9fY3R4Lm9uQ2xpY2sKICBsZXQgb25Ib3ZlciA9IF9fVnVlRFhfX2N0eC5vbkhvdmVyCiAgbGV0IG9uUHJlc3MgPSBfX1Z1ZURYX19jdHgub25QcmVzcwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgb25DbGljaz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uQ2xpY2ssIAogICAgICAgIF0pfQogICAgICAgIG9uSG92ZXI9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkhvdmVyLCAKICAgICAgICBdKX0KICAgICAgICBvblByZXNzPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25QcmVzcywgCiAgICAgICAgXSl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGRpdgogICAgICAgIG9uQ2xpY2s9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkNsaWNrLCAKICAgICAgICBdKX0KICAgICAgICBvbkhvdmVyPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25Ib3ZlciwgCiAgICAgICAgXSl9CiAgICAgICAgb25QcmVzcz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uUHJlc3MsIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb25DbGljayA9IF9fVnVlRFhfX2N0eC5vbkNsaWNrCiAgbGV0IG9uSG92ZXIgPSBfX1Z1ZURYX19jdHgub25Ib3ZlcgogIGxldCBvblByZXNzID0gX19WdWVEWF9fY3R4Lm9uUHJlc3MKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjg0MwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLGtDO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxHO0EsUUFBS0MsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFFBQVVELE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRQUFVRCxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBM0MsbUM7QSxNLEU7QSxNQUNKLENBQUNGLEc7QSxRQUFLQyxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBVUQsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFFBQVVELE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRQUEzQyxtQztBLE0sRTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxrQztBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjV8NyIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgQGNsaWNrPVwib25DbGlja1wiIEBob3Zlcj1cIm9uSG92ZXJcIiBAcHJlc3M9XCJvblByZXNzXCIgLz5cbjxkaXYgQGNsaWNrPVwib25DbGlja1wiIEBob3Zlcj1cIm9uSG92ZXJcIiBAcHJlc3M9XCJvblByZXNzXCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 5.1. v-if/v-else/v-else-if > single if statement

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjYyNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge2F3ZXNvbWUKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgICA6IG51bGwKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjU1MQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FDVUEsTztBLFEsRSxFO0EsWUFBVixDQUFDQyxFO0EsY0FBRSxtQztBLFksQztBLGMsQ0FBZ0JDLGlCLEM7QSxZQUFlLEUsRSxDO0EsVSxHO0EsTSxRO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NyIsIjw8UD4+MiIsIjw8VD4+MTV8MTciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 5.2. v-if/v-else/v-else-if > if/else

```vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjg1MQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge2F3ZXNvbWUKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Ik9oIG5vIPCfmKIifQogICAgICAgICAgICA8L2gxPgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo2NjUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQ1VBLE87QSxRLEUsRTtBLFlBQVYsQ0FBQ0MsRTtBLGNBQUUsbUM7QSxZLEM7QSxjLENBQWdCQyxpQixDO0EsWUFBZSxFLEUsQztBLFUsRztBLFEsRSxFO0EsWUFDbEMsQ0FBQ0QsRTtBLGNBQUUsbUM7QSxZLEM7QSxjLENBQVFFLFUsQztBLFlBQVEsRSxFLEM7QSxVLEc7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksaUYsQztBLEksaUYsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj43IiwiPDxQPj4yIiwiPDxUPj4xNXwxNyIsIjw8VD4+OHwxMCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG48aDEgdi1lbHNlPk9oIG5vIPCfmKI8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzAxNgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7b2sKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlRpdGxlIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgICAgPHAKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJQYXJhZ3JhcGggMSJ9CiAgICAgICAgICAgIDwvcD4KICAgICAgICAgICAgPHAKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJQYXJhZ3JhcGggMiJ9CiAgICAgICAgICAgIDwvcD4KICAgICAgICAgIDwvPgogICAgICAgIDogbnVsbAogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2sKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAicCI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJwIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNzUxAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUNnQkEsRTtBLFEsRSxFO0EsWUFDZCxDQUFDQSxFO0EsY0FBRSxtQztBLFksQztBLGMsQ0FBQ0MsTyxDO0EsWUFBSyxFLEUsQztBLFlBQ1QsQ0FBQ0MsQztBLGNBQUMsbUM7QSxZLEM7QSxjLENBQUNDLGEsQztBLFlBQVcsRSxDLEM7QSxZQUNkLENBQUNELEM7QSxjQUFDLG1DO0EsWSxDO0EsYyxDQUFDQyxhLEM7QSxZQUFXLEUsQyxDO0EsVSxHO0EsTSxRO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxJLGdGLEM7QSxJLGdGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+NXw3IiwiPDxQPj4xIiwiPDxUPj4xMXwxMyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjx0ZW1wbGF0ZSB2LWlmPVwib2tcIj5cbiAgPGgxPlRpdGxlPC9oMT5cbiAgPHA+UGFyYWdyYXBoIDE8L3A+XG4gIDxwPlBhcmFncmFwaCAyPC9wPlxuPC90ZW1wbGF0ZT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzM2MQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCB0eXBlID0gX19WdWVEWF9fY3R4LnR5cGUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge3R5cGUgPT09ICdBJwogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBBICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiB0eXBlID09PSAnQicKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyIgQiAifQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICAgIDogdHlwZSA9PT0gJ0MnCiAgICAgICAgPyA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiIEMgIn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyIgTm90IEEvQi9DICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCB0eXBlID0gX19WdWVEWF9fY3R4LnR5cGUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KOTYwAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUNXQSxZO0EsUSxFLEU7QSxZQUFYLENBQUNDLEc7QSxjQUFHLG1DO0EsWSxDO0EsYyxDQUFxQkMsSyxDO0EsWUFFekIsRSxHLEM7QSxVLEc7QSxRLEVBQ2dCRixZO0EsUSxFLEU7QSxZQUFoQixDQUFDQyxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FBMEJDLEssQztBLFlBRTlCLEUsRyxDO0EsVSxHO0EsUSxFQUNnQkYsWTtBLFEsRSxFO0EsWUFBaEIsQ0FBQ0MsRztBLGNBQUcsbUM7QSxZLEM7QSxjLENBQTBCQyxLLEM7QSxZQUU5QixFLEcsQztBLFUsRztBLFEsRSxFO0EsWUFDQSxDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FBUUUsYSxDO0EsWUFFWixFLEcsQztBLFUsRztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjEyIiwiPDxQPj4zIiwiPDxUPj41fDUiLCI8PFQ+PjEzfDEzIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwidHlwZSA9PT0gJ0EnXCI+XG4gIEFcbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJ0eXBlID09PSAnQidcIj5cbiAgQlxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdDJ1wiPlxuICBDXG48L2Rpdj5cbjxkaXYgdi1lbHNlPlxuICBOb3QgQS9CL0NcbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 5.5. v-if/v-else/v-else-if > no if

```vue-html
<h1 v-else>Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQ1OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNDc5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEU7QSxRQUFFLG1DO0EsTSxDO0EsUSxDQUFRQyxpQixDO0EsTUFBZSxFLEUsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+MTV8MTciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1lbHNlPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

## 5.6. v-if/v-else/v-else-if > if condition

```vue-html
<h1 v-if>Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjUyMABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7PD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo0OTcAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQyxFO0EsWUFDQSxDQUFDQSxFO0EsY0FBRSxtQztBLFksQztBLGMsQ0FBTUMsaUIsQztBLFlBQWUsRSxFLEM7QSxVLEc7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjE1fDE3Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtaWY+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 5.7. v-if/v-else/v-else-if > else condition

```vue-html
<h1 v-else="ok">Vue is awesome!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjUxMgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTAwAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxFO0EsUUFBRSxtQztBLE0sQztBLFEsQ0FBYUMsaUIsQztBLE1BQWUsRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksaUYsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWVsc2U9XCJva1wiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

## 5.8. v-if/v-else/v-else-if > elif no if

```vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjUzOQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgPC9oMT4KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiT2ggbm8g8J+YoiJ9CiAgICAgIDwvaDE+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo1OTUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEU7QSxRQUFFLG1DO0EsTSxDO0EsUSxDQUFxQkMsaUIsQztBLE1BQWUsRSxFLEM7QSxNQUN2QyxDQUFDRCxFO0EsUUFBRSxtQztBLE0sQztBLFEsQ0FBUUUsVSxDO0EsTUFBUSxFLEUsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyIsIjw8VD4+OHwxMCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWVsc2UtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDgwOQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IGJhciA9IF9fVnVlRFhfX2N0eC5iYXIKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge2ZvbwogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiBiYXIKICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IGJhcgogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiBiYXIKICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2ZvbwogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogYmFyCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IGJhciA9IF9fVnVlRFhfX2N0eC5iYXIKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNjM2AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FDV0EsRztBLFEsRSxFO0EsWUFBWCxDQUFDQSxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FDU0EsRztBLGdCLEUsRTtBLG9CQUFYLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBWSxFLEcsQztBLGtCLEc7QSxnQixFQUNBQSxHO0EsZ0IsRSxFO0Esb0JBQWhCLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBaUIsRSxHLEM7QSxrQixHO0EsZ0IsRSxFO0Esb0JBQ3JCLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBUSxFLEcsQztBLGtCLEc7QSxjLEM7QSxZQUNkLEUsRyxDO0EsVSxHO0EsUSxFQUNnQkEsRztBLFEsRSxFO0EsWUFBaEIsQ0FBQ0EsRztBLGNBQUcsbUM7QSxZLEM7QSxjLENBQ1NBLEc7QSxnQixFLEU7QSxvQkFBWCxDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQVksRSxHLEM7QSxrQixHO0EsZ0IsRUFDQUEsRztBLGdCLEUsRTtBLG9CQUFoQixDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQWlCLEUsRyxDO0Esa0IsRztBLGdCLEUsRTtBLG9CQUNyQixDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQVEsRSxHLEM7QSxrQixHO0EsYyxDO0EsWUFDZCxFLEcsQztBLFUsRztBLFEsRSxFO0EsWUFDQSxDQUFDQSxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FDU0EsRztBLGdCLEUsRTtBLG9CQUFYLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBWSxFLEcsQztBLGtCLEc7QSxnQixFQUNBQSxHO0EsZ0IsRSxFO0Esb0JBQWhCLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBaUIsRSxHLEM7QSxrQixHO0EsZ0IsRSxFO0Esb0JBQ3JCLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBUSxFLEcsQztBLGtCLEc7QSxjLEM7QSxZQUNkLEUsRyxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxrRixDO0EsSSxrRixDO0EsSSxrRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJmb29cIj5cbiAgPGRpdiB2LWlmPVwiZm9vXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlPjwvZGl2PlxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cImJhclwiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 6.1. v-text 

```vue-html
<span v-text="msg"></span>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjUxOABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBtc2cgPSBfX1Z1ZURYX19jdHgubXNnCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzcGFuCiAgICAgICAgaW5uZXJIVE1MPXttc2d9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICA8L3NwYW4+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXNnID0gX19WdWVEWF9fY3R4Lm1zZwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJzcGFuIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTA0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxJO0EsUUFBT0MsUyxDLENBQU1DLEcsQztBLFFBQVQsbUM7QSxNLEM7QSxNQUFjLEUsSSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLG1GLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NCIsIjw8VD4+NHw5IiwiPDxQPj4zIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNwYW4gdi10ZXh0PVwibXNnXCI+PC9zcGFuPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 7.1. v-html 

```vue-html
<div v-html="html"></div>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjUyMABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBodG1sID0gX19WdWVEWF9fY3R4Lmh0bWwKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIGlubmVySFRNTD17aHRtbH0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgIDwvZGl2PgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGh0bWwgPSBfX1Z1ZURYX19jdHguaHRtbAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo1MDMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEc7QSxRQUFNQyxTLEMsQ0FBTUMsSSxDO0EsUUFBVCxtQztBLE0sQztBLE1BQWUsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj40fDkiLCI8PFA+PjQiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaHRtbD1cImh0bWxcIj48L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 8.1. v-show 

```vue-html
<h1 v-show="ok">Hello!</h1>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjYzNgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7KCgpID0+IHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tEaXJlY3RpdmUoInNob3ciIGFzIGNvbnN0LCAiaDEiIGFzIGNvbnN0LCB1bmRlZmluZWQsIG9rLCB7ICB9KTsKICAgICAgfSkoKX0KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiSGVsbG8hIn0KICAgICAgPC9oMT4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjU1MgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sUztBLFEsMkNBQ0lBLGUsRUFBSCxhLEUsUyxFQUFXQyxFLEUsRSxFLEU7QSxNLEs7QSxNQUFaLENBQUNBLEU7QSxRQUFFLG1DO0EsTSxDO0EsUSxDQUFhQyxRLEM7QSxNQUFNLEUsRSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8VD4+NnwxNSIsIjw8UD4+MiIsIjw8VD4+Nnw4Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtc2hvdz1cIm9rXCI+SGVsbG8hPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjg0NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0ibnVtYmVyIgogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0idGVsIgogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9InJhZGlvIgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjk0NgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsSztBLFFBQU0sSyxFQUFTQyxHLEM7QSxRQUFWLG1DO0EsTSxFO0EsTUFDTixDQUFDRCxLO0EsUUFBTUUsSSxDQUFLQyxRO0EsUUFBUyxLLEVBQVNGLEcsQztBLFFBQXhCLG1DO0EsTSxFO0EsTUFDTixDQUFDRCxLO0EsUUFBTUUsSSxDQUFLRixLO0EsUUFBTSxLLEVBQVNDLEcsQztBLFFBQXJCLG1DO0EsTSxFO0EsTUFDTixDQUFDRCxLO0EsUUFBTUUsSSxDQUFLRSxVO0EsUUFBVyxPLEVBQVNILEcsQztBLFFBQTFCLG1DO0EsTSxFO0EsTUFDTixDQUFDRCxLO0EsUUFBTUUsSSxDQUFLRyxPO0EsUUFBUSxPLEVBQVNKLEcsQztBLFFBQXZCLG1DO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjMiLCI8PFA+PjQiLCI8PFA+PjgiLCI8PFA+PjEwIiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwidGVsXCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cInJhZGlvXCIgdi1tb2RlbD1cImZvb1wiIC8+XG5cbjwvdGVtcGxhdGU+Il19)

## 9.2. v-model > select/textarea

```vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjY0NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzZWxlY3QKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7Zm9vfQogICAgICAgIDwvb3B0aW9uPgogICAgICA8L3NlbGVjdD4KICAgICAgPHRleHRhcmVhCiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjcxNAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsTTtBLFFBQU8sSyxFQUFTQyxHLEM7QSxRQUFWLG1DO0EsTSxDO0EsUUFDTCxDQUFDRCxNO0EsVUFBUUUsSyxDLENBQU9ELEcsQztBLFVBQVQsbUM7QSxRLEM7QSxVQUFjLENBQUVBLEdBQUcsQztBLFFBQUUsRSxNLEM7QSxNQUM5QixFLE0sQztBLE1BQ0EsQ0FBQ0UsUTtBLFFBQVMsSyxFQUFTRixHLEM7QSxRQUFWLG1DO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFA+PjMiLCI8PFA+PjUiLCI8PFA+PjgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c2VsZWN0IHYtbW9kZWw9XCJmb29cIj5cbiAgPG9wdGlvbiA6dmFsdWU9XCJmb29cIj57e2Zvb319PC9vcHRpb24+XG48L3NlbGVjdD5cbjx0ZXh0YXJlYSB2LW1vZGVsPVwiZm9vXCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 9.3. v-model > checkbox

```vue-html
<input type="checkbox" v-model="foo" />
<input type="checkbox" v-model="foo" true-value="yes" />
<input type="checkbox" v-model="foo" false-value="no" />
<input type="checkbox" v-model="foo" :true-value="yes" :false-value="no" />
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjk4NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IHllcyA9IF9fVnVlRFhfX2N0eC55ZXMKICBsZXQgbm8gPSBfX1Z1ZURYX19jdHgubm8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICB0cnVlLXZhbHVlPSJ5ZXMiCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIGZhbHNlLXZhbHVlPSJubyIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgdHJ1ZS12YWx1ZT17eWVzfQogICAgICAgIGZhbHNlLXZhbHVlPXtub30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgeWVzID0gX19WdWVEWF9fY3R4LnllcwogIGxldCBubyA9IF9fVnVlRFhfX2N0eC5ubwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTA2NgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBVyxPLEVBQVNDLEcsQztBLFFBQTFCLG1DO0EsTSxFO0EsTUFDTixDQUFDSCxLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBVyxPLEVBQVNDLEcsQztBLFFBQUtELFUsQ0FBV0YsSztBLFFBQTFDLG1DO0EsTSxFO0EsTUFDTixDQUFDQSxLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBVyxPLEVBQVNDLEcsQztBLFFBQUtDLFcsQ0FBWUgsSTtBLFFBQTNDLG1DO0EsTSxFO0EsTUFDTixDQUFDRCxLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBVyxPLEVBQVNDLEcsQztBLFFBQU1ELFUsQyxDQUFZQyxHLEM7QSxRQUFNQyxXLEMsQ0FBYUMsRSxDO0EsUUFBL0QsbUM7QSxNLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj41IiwiPDxQPj40IiwiPDxQPj4xMCIsIjw8UD4+MyIsIjw8UD4+MTEiLCI8PFA+PjIiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIHRydWUtdmFsdWU9XCJ5ZXNcIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiBmYWxzZS12YWx1ZT1cIm5vXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgOnRydWUtdmFsdWU9XCJ5ZXNcIiA6ZmFsc2UtdmFsdWU9XCJub1wiIC8+XG5cbjwvdGVtcGxhdGU+Il19)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzU5OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0IGJheiA9IF9fVnVlRFhfX2N0eC5iYXoKICBsZXQgdmFscyA9IF9fVnVlRFhfX2N0eC52YWxzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzZWxlY3QKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iZm9vIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9ImJhciIKICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgeyJiYXIifQogICAgICAgIDwvb3B0aW9uPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPXtiYXp9CiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmF6In0KICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICAgIDxzZWxlY3QKICAgICAgICB2YWx1ZT17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iZm9vIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgICAgewogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QodmFscywgKHZhbCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDxvcHRpb24KICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx9CiAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIHt2YWx9CiAgICAgICAgICAgICAgPC9vcHRpb24+CiAgICAgICAgICAgICkKICAgICAgICAgIH0pCiAgICAgICAgfQogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJiYXIiCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmFyIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCBiYXogPSBfX1Z1ZURYX19jdHguYmF6CiAgbGV0IHZhbHMgPSBfX1Z1ZURYX19jdHgudmFscwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTQ0MwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxNO0EsUUFBTyxLLEVBQVNDLEcsQztBLFFBQVYsbUM7QSxNLEM7QSxRQUNMLENBQUNELE07QSxVQUFPRSxLLENBQU1BLEs7QSxVQUFQLG1DO0EsUSxDO0EsVSxDQUFhQyxLLEM7QSxRQUFHLEUsTSxDO0EsUUFDdkIsQ0FBQ0gsTTtBLFVBQU9FLEssQ0FBTUEsSztBLFVBQVAsbUM7QSxRLEM7QSxVLENBQWFDLEssQztBLFFBQUcsRSxNLEM7QSxRQUN2QixDQUFDSCxNO0EsVUFBUUUsSyxDLENBQU9ELEcsQztBLFVBQVQsbUM7QSxRLEM7QSxVLENBQWNFLEssQztBLFFBQUcsRSxNLEM7QSxNQUMxQixFLE0sQztBLE1BRUEsQ0FBQ0gsTTtBLFFBQU8sSyxFQUFTQyxHLEM7QSxRQUFWLG1DO0EsTSxDO0EsUUFDTCxDQUFDRCxNO0EsVUFBT0UsSyxDQUFNQSxLO0EsVUFBUCxtQztBLFEsQztBLFUsQ0FBYUMsSyxDO0EsUUFBRyxFLE0sQztBLFEsQztBLFUsdUNBQ0RDLEksRSxDQUFQSCxHLEMsSztBLFksUTtBLGNBQWYsQ0FBQ0QsTTtBLGdCQUE0QkUsSyxDLENBQU9ELEcsQztBLGdCQUE3QixtQztBLGMsQztBLGdCQUFrQyxDQUFHQSxHQUFHLEM7QSxjQUFHLEUsTSxDO0EsWSxDO0EsVSxDLEM7QSxRLEM7QSxRQUNsRCxDQUFDRCxNO0EsVUFBT0UsSyxDQUFNQSxLO0EsVUFBUCxtQztBLFEsQztBLFUsQ0FBYUMsSyxDO0EsUUFBRyxFLE0sQztBLE1BQ3pCLEUsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NiIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8VD4+M3w1IiwiPDxQPj40Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gdmFsdWU9XCJmb29cIj5mb288L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImJhclwiPmJhcjwvb3B0aW9uPlxuICA8b3B0aW9uIDp2YWx1ZT1cImJhelwiPmJhejwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIHZhbHVlPVwiZm9vXCI+Zm9vPC9vcHRpb24+XG4gIDxvcHRpb24gdi1mb3I9XCJ2YWwgb2YgdmFsc1wiIDp2YWx1ZT1cInZhbFwiPnt7IHZhbCB9fTwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XG48L3NlbGVjdD5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzA2NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28gPSAoKSA9PiBGb287Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvbyA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0ZvbygpLCAiRm9vIiBhcyBjb25zdCwgIkZvbyIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEZvbwogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLCB7CiAgICAgICAgICAiZm9vIjogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7IkEifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgICAgImJhciI6ICh7YmFyfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7YmFyfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvbz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNzQ2AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0E7QSwrQztBLEE7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDLEc7QSxRQUFHLG1DO0EsTSxDO0EsUSxDLDZDO0EsVUFDUyxLLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUlBLEcsQztBLGMsRztBLFksQztBLFUsRTtBLFVBQ0osSyxHQUFLQyxLLE07QSxZLFE7QSxjLEU7QSxnQkFBTyxDQUFFQyxHQUFHLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BRTlCLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8VD4+MXwzIiwiPDxQPj41IiwiPDxQPj4zIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvbz5cbiAgPHRlbXBsYXRlICNmb28+QTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYmFyPVwie2Jhcn1cIj57e2Jhcn19PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlPkludmFsaWQ8L3RlbXBsYXRlPlxuPC9Gb28+XG5cbjwvdGVtcGxhdGU+Il19)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDM3MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb29CYXIgPSAoKSA9PiBGb29CYXI7Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvb0JhciA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgX19WdWVEWF9fX2dldF9pZGVudGlmaWVyX0Zvb0JhcigpLCAiRm9vQmFyIiBhcyBjb25zdCwgIkZvb0JhciIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiY29udGVudCJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgICJkZWZhdWx0IjogKHtmb299KSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHtmb299CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgICJvdGhlciI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7Zm9vfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICAiZGVmYXVsdCI6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJjb250ZW50In0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICAgICJvdGhlciI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7Zm9vfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgICAgImFub3RoZXIiOiAoZm9vKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHtmb28KICAgICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICB7Zm9vLmJhcn0KICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICA6IG51bGwKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9KX0KICAgICAgPC9Gb29CYXI+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjE1MTEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QTtBLHFEO0EsQTtBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxNLGtKLGlDLEUsaUIsRSxpQixFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxNO0EsUUFBTSxtQztBLE0sQztBLFEsQyxnRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxTLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQU8sRSxNLEM7QSxNQUNmLENBQUMsTTtBLFFBQU0sbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVQUFFLFMsR0FBU0MsSyxNO0EsWSxRO0EsYyxFO0EsZ0JBQU8sQ0FBR0MsR0FBRyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTSxDO0EsTUFDbEMsQ0FBQyxNO0EsUUFBTSxtQztBLE0sQztBLFEsQyxnRDtBLFVBQUUsTyxHQUFPRCxLLE07QSxZLFE7QSxjLEU7QSxnQkFBTyxDQUFHQyxHQUFHLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxNLEM7QSxNQUNoQyxDQUFDLE07QSxRQUFNLG1DO0EsTSxDO0EsUSxDLGdEO0EsVUFDTSxTLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQVFGLFMsQztBLGMsRztBLFksQztBLFUsRTtBLFVBQ1IsTyxHQUFPQyxLLE07QSxZLFE7QSxjLEU7QSxnQkFBTyxDQUFFQyxHQUFHLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxVQUNuQixTLEdBQVNBLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQ1BBLEc7QSxrQixFLEU7QSxzQkFBWCxDQUFDQSxHO0Esd0JBQUcsbUM7QSxzQixDO0Esd0JBQVksQ0FBRUMsT0FBTyxDO0Esc0JBQUUsRSxHLEM7QSxvQixHO0EsZ0IsUTtBLGdCLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BRy9CLEUsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8VD4+N3w5IiwiPDxQPj41IiwiPDxQPj4zIiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvb0Jhcj5jb250ZW50PC9Gb29CYXI+XG48Rm9vQmFyICNkZWZhdWx0PVwie2Zvb31cIj57eyBmb28gfX08L0Zvb0Jhcj5cbjxGb29CYXIgI290aGVyPVwie2Zvb31cIj57eyBmb28gfX08L0Zvb0Jhcj5cbjxGb29CYXI+XG4gIDx0ZW1wbGF0ZSAjZGVmYXVsdD5jb250ZW50PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNvdGhlcj1cIntmb299XCI+e3tmb299fTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYW5vdGhlcj1cImZvb1wiPlxuICAgIDxkaXYgdi1pZj1cImZvb1wiPnt7Zm9vLmJhcn19PC9kaXY+XG4gIDwvdGVtcGxhdGU+XG4gIDxkaXY+ZXh0cmFub3VzPC9kaXY+XG48L0Zvb0Jhcj5cblxuPC90ZW1wbGF0ZT4iXX0=)

## 11.1. v-pre 

```vue-html
<pre v-pre>{{ interpolation }}</pre>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQ2NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8cHJlCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsie3sgaW50ZXJwb2xhdGlvbiB9fSJ9CiAgICAgIDwvcHJlPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInByZSI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjQ4NQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxHO0EsUUFBRyxtQztBLE0sQztBLFEsQ0FBT0MscUIsQztBLE1BQW1CLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj4xOXwyMSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxwcmUgdi1wcmU+e3sgaW50ZXJwb2xhdGlvbiB9fTwvcHJlPlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 12.1. v-once 

```vue-html
<section v-once>{{ largeText }}</section>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjY5MgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsYXJnZVRleHQgPSBfX1Z1ZURYX19jdHgubGFyZ2VUZXh0CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsoKCkgPT4gewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja0RpcmVjdGl2ZSgib25jZSIgYXMgY29uc3QsICJzZWN0aW9uIiBhcyBjb25zdCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHsgIH0pOwogICAgICB9KSgpfQogICAgICA8c2VjdGlvbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7bGFyZ2VUZXh0fQogICAgICA8L3NlY3Rpb24+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGFyZ2VUZXh0ID0gX19WdWVEWF9fY3R4LmxhcmdlVGV4dAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJzZWN0aW9uIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTY1AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxzQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxTO0EsUSwyQ0FDU0EsZSxFQUFSLGtCLEUsUyxFLFMsRSxFLEUsRTtBLE0sSztBLE1BQUQsQ0FBQ0MsTztBLFFBQU8sbUM7QSxNLEM7QSxRQUFRLENBQUdDLFNBQVMsQztBLE1BQUcsRSxPLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxzQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksc0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxUPj42fDE1IiwiPDxQPj43IiwiPDxQPj45Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNlY3Rpb24gdi1vbmNlPnt7IGxhcmdlVGV4dCB9fTwvc2VjdGlvbj5cblxuPC90ZW1wbGF0ZT4iXX0=)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzM2NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBNeUNvbXBvbmVudCA9IF9fVnVlRFhfX2N0eC5NeUNvbXBvbmVudAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8dGFibGUKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPHRib2R5CiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBNeUNvbXBvbmVudCwgTXlDb21wb25lbnQsIE15Q29tcG9uZW50KTsKICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19jb21wb25lbnQsIHsKICAgICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgPC9fX1Z1ZURYX19jb21wb25lbnQ+CiAgICAgICAgICAgICk7CiAgICAgICAgICB9KSgpfQogICAgICAgIDwvdGJvZHk+CiAgICAgIDwvdGFibGU+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgTXlDb21wb25lbnQgPSBfX1Z1ZURYX19jdHguTXlDb21wb25lbnQKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAidGFibGUiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo3NDEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEs7QSxRQUFLLG1DO0EsTSxDO0EsUUFDSixDQUFDQSxLO0EsVUFBSyxtQztBLFEsQztBLFUsUztBO0EsWSwwS0FDTUMsVyxFQUFBQSxXLEVBQUFBLFcsRTtBLFksK0M7QSxZLFE7QSxjQUFWLENBQUMsa0I7QSxnQkFBRSxtQztBLGMsQztBLGdCLEMsNEQ7QSxrQixPLEcsTTtBLG9CLFE7QSxzQixFO0Esc0IsRztBLG9CLEM7QSxrQixFO0EsZ0IsRSxDO0EsY0FBb0IsRSxrQixDO0EsWSxFO0EsVSxLO0EsUUFDekIsRSxLLEM7QSxNQUNGLEUsSyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEM7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLG9GLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+MTEiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48dGFibGU+XG4gIDx0Ym9keT5cbiAgICA8dHIgdi1pcz1cIk15Q29tcG9uZW50XCI+PC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG5cbjwvdGVtcGxhdGU+Il19)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Nzg2OQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBudW0gPSBfX1Z1ZURYX19jdHgubnVtCiAgbGV0IHN0ciA9IF9fVnVlRFhfX2N0eC5zdHIKICBsZXQgYXJyID0gX19WdWVEWF9fY3R4LmFycgogIGxldCBvYmogPSBfX1Z1ZURYX19jdHgub2JqCiAgbGV0IGl0ciA9IF9fVnVlRFhfX2N0eC5pdHIKICBsZXQgYm9vID0gX19WdWVEWF9fY3R4LmJvbwogIGxldCBzeW0gPSBfX1Z1ZURYX19jdHguc3ltCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChudW0sIChuKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtufQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChudW0sIChuLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtufQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHN0ciwgKHMpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3N9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KHN0ciwgKHMsIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3N9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoYSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7YX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyB2YWx1ZSB9KSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHt2YWx1ZX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyBmb28gfSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7YXJyfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsIChhLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHthfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKHsgdmFsdWUgfSwgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7dmFsdWV9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7b30KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobywgaykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7b30KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtrfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChvYmosIChvLCBrLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtvfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2t9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoaXRyLCAodCkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7dH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYm9vLCAoYikgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Yn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qoc3ltLCAocykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7c30KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG51bSA9IF9fVnVlRFhfX2N0eC5udW0KICBsZXQgc3RyID0gX19WdWVEWF9fY3R4LnN0cgogIGxldCBhcnIgPSBfX1Z1ZURYX19jdHguYXJyCiAgbGV0IG9iaiA9IF9fVnVlRFhfX2N0eC5vYmoKICBsZXQgaXRyID0gX19WdWVEWF9fY3R4Lml0cgogIGxldCBib28gPSBfX1Z1ZURYX19jdHguYm9vCiAgbGV0IHN5bSA9IF9fVnVlRFhfX2N0eC5zeW0KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgozNTE5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDO0EsUSx1Q0FDaUJBLEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNQRCxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBdUIsQ0FBR0MsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3pCRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDUEQsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQXVCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUN6QkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ0pELEcsRSxDQUFiRyxTLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0gsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUEwQixDQUFHSSxLQUFLLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNsQkosRyxFLENBQVhLLE8sQyxLO0EsVSxRO0EsWUFBWixDQUFDTCxHO0EsY0FBRyxtQztBLFksQztBLGNBQXdCLENBQUdBLEdBQUcsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ2ZBLEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUF1QixDQUFHQyxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDWkQsRyxFLENBQWpCRyxTLEVBQVdGLEMsQyxLO0EsVSxRO0EsWUFBeEIsQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUErQixDQUFHSSxLQUFLLEM7QSxjLENBQUdGLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDckNELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNQRCxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBdUIsQ0FBR0MsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ2pCRCxHLEUsQ0FBWkMsQyxFQUFHQSxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBbkIsQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUEwQixDQUFHQyxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3BDRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDWkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1pELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxQPj4xIiwiPDxUPj4xfDMiLCI8PFA+PjkiLCI8PFA+PjUiLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtZm9yPVwibiBvZiBudW1cIj57eyBuIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG4sIGkpIG9mIG51bVwiPnt7IG4gfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInMgb2Ygc3RyXCI+e3sgcyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihzLCBpKSBvZiBzdHJcIj57eyBzIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJhIG9mIGFyclwiPnt7IGEgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ7IHZhbHVlIH0gb2YgYXJyXCI+e3sgdmFsdWUgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ7IGZvbyB9IG9mIGFyclwiPnt7IGFyciB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihhLCBpKSBvZiBhcnJcIj57eyBhIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoeyB2YWx1ZSB9LCBpKSBvZiBhcnJcIj57eyB2YWx1ZSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwibyBvZiBvYmpcIj57eyBvIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG8sIGspIG9mIG9ialwiPnt7IG8gfX06e3sgayB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrLCBpKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInQgb2YgaXRyXCI+e3sgdCB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cImIgb2YgYm9vXCI+e3sgYiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInMgb2Ygc3ltXCI+e3sgcyB9fTwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NjkyNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsoKCkgPT4gewoKICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGZvbywgZm9vLCBmb28pOwogICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgcmV0dXJuICgKICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgID4KICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICJkZWZhdWx0IjogKHtiYXJ9KSA9PiB7CiAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmFyLCBiYXIsIGJhcik7CiAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7YmF6fSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmF6LCBiYXosIGJheik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvdGhlciI6ICh7IGZvbyB9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGZvbywgZm9vLCBmb28pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJkZWZhdWx0IjogKHsgYmFyIH0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmFyLCBiYXIsIGJhcik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4KCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgICAgICAgICAgPC9fX1Z1ZURYX19jb21wb25lbnQ+CiAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIH0pfQogICAgICAgICAgPC9fX1Z1ZURYX19jb21wb25lbnQ+CiAgICAgICAgKTsKICAgICAgfSkoKX0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O30pOwpjb25zdCB7X19WdWVEWF9fX1NjcmlwdFNldHVwX0NvbXBvbmVudCwgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2UsIF9fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmNvbnN0IEV4YW1wbGVQdWJsaWMgPSBudWxsIGFzIHVua25vd24gYXMgbmV3ICgpID0+IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlOwpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIGV4dGVuZHMgRXhhbXBsZVB1YmxpYyB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPjsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNTg0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxTO0E7QSxRLDBLQUNnQkEsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLFEsK0M7QSxRLFE7QSxVQUFoQixDQUFDLGtCO0EsWUFBUyxtQztBLFUsQztBLFksQyw0RDtBLGNBQVksUyxHQUFTQyxLLE07QSxnQixRO0Esa0IsRTtBLG9CLFM7QTtBLHNCLDBLQUNiRCxHLEVBQUFBLEcsRUFBQUEsRyxFO0Esc0IsK0M7QSxzQixRO0Esd0JBQWhCLENBQUMsa0I7QSwwQkFBUyxtQztBLHdCLEM7QSwwQixDLDREO0EsNEJBQVksUyxHQUFTQyxLLE07QSw4QixRO0EsZ0MsRTtBLGtDLFM7QTtBLG9DLDBLQUNiRCxHLEVBQUFBLEcsRUFBQUEsRyxFO0Esb0MsK0M7QSxvQyxRO0Esc0NBQWhCLENBQUMsa0I7QSx3Q0FBUyxtQztBLHNDLEM7QSx3QyxDLDREO0EsMENBQ0csTyxHQUFPRSxPLE07QSw0QyxRO0EsOEMsRTtBLGdELFM7QTtBLGtELDBLQUNBRixHLEVBQUFBLEcsRUFBQUEsRyxFO0Esa0QsK0M7QSxrRCxRO0Esb0RBQWhCLENBQUMsa0I7QSxzREFBUyxtQztBLG9ELEU7QTtBLGtELEU7QSxnRCxLO0EsOEMsRztBLDRDLEM7QSwwQyxFO0EsMENBRUQsUyxHQUFTRSxPLE07QSw0QyxRO0EsOEMsRTtBLGdELFM7QTtBLGtELDBLQUNGRixHLEVBQUFBLEcsRUFBQUEsRyxFO0Esa0QsK0M7QSxrRCxRO0Esb0RBQWhCLENBQUMsa0I7QSxzREFBUyxtQztBLG9ELEU7QTtBLGtELEU7QSxnRCxLO0EsOEMsRztBLDRDLEM7QSwwQyxFO0Esd0MsRSxDO0Esc0NBRWQsRSxrQixDO0Esb0MsRTtBLGtDLEs7QSxnQyxHO0EsOEIsQztBLDRCLEU7QSwwQixFLEM7QSx3QkFDRixFLGtCLEM7QSxzQixFO0Esb0IsSztBLGtCLEc7QSxnQixDO0EsYyxFO0EsWSxFLEM7QSxVQUNGLEUsa0IsQztBLFEsRTtBLE0sSztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxQPj41IiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGNvbXBvbmVudCA6aXM9XCJmb29cIiAjZGVmYXVsdD1cIntiYXJ9XCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6XCI+XG4gICAgICA8dGVtcGxhdGUgI290aGVyPVwieyBmb28gfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImZvb1wiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBiYXIgfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImJhclwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvY29tcG9uZW50PlxuICA8L2NvbXBvbmVudD5cbjwvY29tcG9uZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NjgzNQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBiYXJzID0gX19WdWVEWF9fY3R4LmJhcnMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGJhcnMsIChiYXIpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIHsoKCkgPT4gewoKICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyLCBiYXIpOwogICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX2NvbXBvbmVudCwgewogICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBiYXIsIGJhciwgYmFyKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19jb21wb25lbnQsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJkZWZhdWx0IjogKHtiYXp9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYmF6LCAoaXRlbSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmF6W2Jhcl0sIGJheltiYXJdLCBiYXpbYmFyXSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fY29tcG9uZW50LCB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgaXRlbSwgaXRlbSwgaXRlbSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4KCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICk7CiAgICAgICAgICAgIH0pKCl9CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGJhcnMgPSBfX1Z1ZURYX19jdHguYmFycwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9KTsKY29uc3Qge19fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9wcm9wcywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2VtaXRzLCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlLCBfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9zY29wZTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpjb25zdCBFeGFtcGxlUHVibGljID0gbnVsbCBhcyB1bmtub3duIGFzIG5ldyAoKSA9PiB0eXBlb2YgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZTsKZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSBleHRlbmRzIEV4YW1wbGVQdWJsaWMgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTQyNwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQztBLFEsdUNBQ21DQSxJLEUsQ0FBUEMsRyxDLEs7QSxVLFE7QSxZLFM7QTtBLGMsMEtBQVpBLEcsRUFBQUEsRyxFQUFBQSxHLEU7QSxjLCtDO0EsYyxRO0EsZ0JBQWhCLENBQUMsa0I7QSxrQkFBUyxtQztBLGdCLEM7QSxrQixDLDREO0Esb0IsTyxHLE07QSxzQixRO0Esd0IsRTtBLDBCLFM7QTtBLDRCLDBLQUNRQSxHLEVBQUFBLEcsRUFBQUEsRyxFO0EsNEIsK0M7QSw0QixRO0EsOEJBQWhCLENBQUMsa0I7QSxnQ0FBUyxtQztBLDhCLEM7QSxnQyxDLDREO0Esa0NBQVksUyxHQUFTQyxLLE07QSxvQyxRO0Esc0MsRTtBLHdDLEM7QSwwQyx1Q0FDWUQsRyxFLENBQVJELEksQyxLO0EsNEMsUTtBLDhDLFM7QTtBLGdELDBLQUFqQkcsUSxFQUFBQSxRLEVBQUFBLFEsRTtBLGdELCtDO0EsZ0QsUTtBLGtEQUFoQixDQUFDLGtCO0Esb0RBQVMsbUM7QSxrRCxDO0Esb0QsQyw0RDtBLHNELE8sRyxNO0Esd0QsUTtBLDBELEU7QSw0RCxTO0E7QSw4RCwwS0FDUUgsSSxFQUFBQSxJLEVBQUFBLEksRTtBLDhELCtDO0EsOEQsUTtBLGdFQUFoQixDQUFDLGtCO0Esa0VBQVMsbUM7QSxnRSxFO0E7QSw4RCxFO0EsNEQsSztBLDBELEc7QSx3RCxDO0Esc0QsRTtBLG9ELEUsQztBLGtEQUNaLEUsa0IsQztBLGdELEU7QSw4QyxLO0EsNEMsQztBLDBDLEMsQztBLHdDLEM7QSxzQyxHO0Esb0MsQztBLGtDLEU7QSxnQyxFLEM7QSw4QkFDRixFLGtCLEM7QSw0QixFO0EsMEIsSztBLHdCLEc7QSxzQixDO0Esb0IsRTtBLGtCLEUsQztBLGdCQUNGLEUsa0IsQztBLGMsRTtBLFksSztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjQiLCI8PFA+PjMiLCI8PFA+PjUiLCI8PFA+PjgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Y29tcG9uZW50IDppcz1cImJhclwiIHYtZm9yPVwiYmFyIG9mIGJhcnNcIj5cbiAgPGNvbXBvbmVudCA6aXM9XCJiYXJcIiAjZGVmYXVsdD1cIntiYXp9XCI+XG4gICAgPGNvbXBvbmVudCA6aXM9XCJiYXpbYmFyXVwiIHYtZm9yPVwiaXRlbSBvZiBiYXpcIiA+XG4gICAgICA8Y29tcG9uZW50IDppcz1cIml0ZW1cIiAvPlxuICAgIDwvY29tcG9uZW50PlxuICA8L2NvbXBvbmVudD5cbjwvY29tcG9uZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)

## 17.1. \$attrs binding 

```vue-html
<Foo>
  <input v-bind="$attrs" />
</Foo>
```

```tsx
import * as __VueDX__TypeCheck from 'vuedx~runtime';
import { defineComponent as __VueDX__defineComponent, GlobalComponents as __VueDX__GlobalComponents } from 'vue';
//#region <script>

const __VueDX___Script_Component = __VueDX__defineComponent({});
//#endregion
//#region <script setup>
 ;const __VueDX___ScriptSetup_scope = __VueDX__TypeCheck.internal.scope(async () => {
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

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzEwNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCBhcyBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQsIEdsb2JhbENvbXBvbmVudHMgYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyB9IGZyb20gJ3Z1ZSc7Ci8vI3JlZ2lvbiA8c2NyaXB0PgoKY29uc3QgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIDxzY3JpcHQgc2V0dXA+CiA7Y29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Njb3BlID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnNjb3BlKGFzeW5jICgpID0+IHsKY29uc3QgX19WdWVEWF9fX1NjcmlwdFNldHVwX3Byb3BzID0gZGVmaW5lUHJvcHMoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZW1pdHMgPSAoe30pOwpjb25zdCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfZXhwb3NlID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX19TY3JpcHRTZXR1cF9Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfaW50ZXJuYWxQcm9wcyk9PiB7fSk7CgovLyNlbmRyZWdpb24KZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQ+KGN0eDogVCkgewogIHJldHVybiB7IC4uLmN0eCwgWyJFeGFtcGxlIl06IEV4YW1wbGUgfQp9CmNvbnN0IF9fVnVlRFhfX2N0eCA9IF9fVnVlRFhfX1JlZ2lzdGVyU2VsZihuZXcgX19WdWVEWF9fX1NjcmlwdF9Db21wb25lbnQoKSkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCmNvbnN0IF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28gPSAoKSA9PiBGb287Ci8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkYXR0cnMgPSBfX1Z1ZURYX19jdHguJGF0dHJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgRm9vID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vKCksICJGb28iIGFzIGNvbnN0LCAiRm9vIiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8Rm9vCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb28sIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgPGlucHV0CiAgICAgICAgICAgICAgICAgIHsuLi4oJGF0dHJzKX0KICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRhdHRycyA9IF9fVnVlRFhfX2N0eC4kYXR0cnMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fSk7CmNvbnN0IHtfX1Z1ZURYX19fU2NyaXB0U2V0dXBfQ29tcG9uZW50LCBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfcHJvcHMsIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9lbWl0cywgX19WdWVEWF9fX1NjcmlwdFNldHVwX2V4cG9zZSwgX19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19fU2NyaXB0U2V0dXBfc2NvcGU7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KY29uc3QgRXhhbXBsZVB1YmxpYyA9IG51bGwgYXMgdW5rbm93biBhcyBuZXcgKCkgPT4gdHlwZW9mIF9fVnVlRFhfX19TY3JpcHRTZXR1cF9leHBvc2U7CmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgZXh0ZW5kcyBFeGFtcGxlUHVibGljIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+OwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjYzMAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBO0EsK0M7QSxBO0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxHLGtKLDhCLEUsYyxFLGMsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUMsRztBLFFBQUcsbUM7QSxNLEM7QSxRLEMsNkM7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0JBQ0YsQ0FBQ0EsSztBLGtCLEtBQWNDLE0sRTtBLGtCQUFULG1DO0EsZ0IsRTtBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFDUixFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj41IiwiPDxQPj42Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvbz5cbiAgPGlucHV0IHYtYmluZD1cIiRhdHRyc1wiIC8+XG48L0Zvbz5cblxuPC90ZW1wbGF0ZT4iXX0=)

