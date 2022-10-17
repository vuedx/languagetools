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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjM2OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxkaXYKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJmb28ifQogICAgICA8L2Rpdj4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KNDY3AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxHO0EsUSxtQztBLE0sQztBLFEsQ0FBSUMsSyxDO0EsTUFBRyxFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjN8NSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXY+Zm9vPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzA4MQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG5hbWUgPSBfX1Z1ZURYX19jdHgubmFtZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEhlbGxvV29ybGQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9IZWxsb1dvcmxkKCksICJIZWxsb1dvcmxkIiBhcyBjb25zdCwgIkhlbGxvV29ybGQiIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxIZWxsb1dvcmxkCiAgICAgICAgbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CgogICAgICA8c3BhbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7Ik5hbWU6ICJ9CiAgICAgICAgIHtuYW1lICt9IAogICAgICA8L3NwYW4+CiAgICAgIDxwCiAgICAgICAgIAogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9wPgogICAgICB7CiAgICAgICAgPyA8PgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgPC9wPgogICAgICAgICAgPC8+CiAgICAgICAgOiBudWxsCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBuYW1lID0gX19WdWVEWF9fY3R4Lm5hbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAicCI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgo4MjIAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxVLGtKLHFDLEUscUIsRSxxQixFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsVTtBLFFBQVdDLEM7QSxRLG1DO0EsTUFBRSxFO0E7QSxNQUNkLENBQUNDLEk7QSxRLG1DO0EsTSxDO0EsUSxDQUFLQyxRLEM7QSxRQUFNLEVBQUdDLE1BQU8sRTtBLE1BQUUsRSxJLEM7QSxNQUN4QixDQUFDSCxDO0EsUUFBRSxDO0EsUSxtQztBLE0sQztBLE1BQVEsRSxDLEM7QSxNLENBQ0ZJLEE7QSxRLEUsRTtBLFlBQVQsQ0FBQ0osQztBLGMsbUM7QSxZLEM7QSxZQUFVLEUsQyxDO0EsVSxHO0EsTSxRO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGdGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjEwIiwiPDxQPj4xIiwiPDxQPj40IiwiPDxUPj42fDgiLCI8PFA+PjYiLCI8PFA+PjAiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48SGVsbG9Xb3JsZCBuIC8+XG48c3Bhbj5OYW1lOiB7eyBuYW1lICsgfX08L3NwYW4+XG48cCB2LWJpbmQ6PjwvcD5cbjxwIHYtaWY9XCJcIj48L3A+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
      $slots={{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}>

      </FooBar>
      <Foo.Bar
        /*<vuedx:tsx-completions-target/>*/
      $slots={{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}>

      </Foo.Bar>
      <Foo.Bar.Baz
        /*<vuedx:tsx-completions-target/>*/
      $slots={{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}>

      </Foo.Bar.Baz>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      $slots={{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}>

      </FooBar>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      $slots={{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}>

      </FooBar>
      <UnknownElement
        /*<vuedx:tsx-completions-target/>*/
      $slots={{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}>

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDQyMQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgRm9vQmFyID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vQmFyKCksICJGb29CYXIiIGFzIGNvbnN0LCAiRm9vQmFyIiBhcyBjb25zdCk7CiAgY29uc3QgRm9vID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vKCksICJGb28iIGFzIGNvbnN0LCAiRm9vIiBhcyBjb25zdCk7CiAgY29uc3QgVW5rbm93bkVsZW1lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Vbmtub3duRWxlbWVudCgpLCAidW5rbm93bi1lbGVtZW50IiBhcyBjb25zdCwgIlVua25vd25FbGVtZW50IiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgJHNsb3RzPXt7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiZm9vIn0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9fT4KCiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vLkJhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICRzbG90cz17ewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0+CgogICAgICA8L0Zvby5CYXI+CiAgICAgIDxGb28uQmFyLkJhegogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICRzbG90cz17ewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0+CgogICAgICA8L0Zvby5CYXIuQmF6PgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgJHNsb3RzPXt7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiZm9vIn0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9fT4KCiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgJHNsb3RzPXt7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiZm9vIn0KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9fT4KCiAgICAgIDwvRm9vQmFyPgogICAgICA8VW5rbm93bkVsZW1lbnQKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAkc2xvdHM9e3sKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH19PgoKICAgICAgPC9Vbmtub3duRWxlbWVudD4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjEzNjcAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJCO0EsRSxNLE0sa0osaUMsRSxpQixFLGlCLEU7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLE0sYyxrSix5QyxFLDBCLEUseUIsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLE07QSxRLG1DO0EsTSxPLEMsQztBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFPQyxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEMsQyxDO0E7QSxNQUFHLEUsTSxDO0EsTUFDWCxDQUFDQyxPO0EsUSxtQztBLE0sTyxDLEM7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBUUQsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxDLEMsQztBO0EsTUFBRyxFLE8sQztBLE1BQ1osQ0FBQ0UsVztBLFEsbUM7QSxNLE8sQyxDO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQVlGLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsQyxDLEM7QTtBLE1BQUcsRSxXLEM7QSxNQUNoQixDQUFDRyxNO0EsUSxtQztBLE0sTyxDLEM7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBT0gsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxDLEMsQztBO0EsTUFBRyxFLE0sQztBLE1BQ1gsQ0FBQ0ksTTtBLFEsbUM7QSxNLE8sQyxDO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQVFKLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsQyxDLEM7QTtBLE1BQUcsRSxNLEM7QSxNQUNaLENBQUNLLGM7QSxRLG1DO0EsTSxPLEMsQztBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFnQkwsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxDLEMsQztBO0EsTUFBRyxFLGMsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj42IiwiPDxUPj4zfDUiLCI8PFA+PjciLCI8PFA+PjExIiwiPDxUPj42fDYiLCI8PFQ+Pjd8NiIsIjw8VD4+MTV8MTQiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Rm9vQmFyPmZvbzwvRm9vQmFyPlxuPEZvby5CYXI+Zm9vPC9Gb28uQmFyPlxuPEZvby5CYXIuQmF6PmZvbzwvRm9vLkJhci5CYXo+XG48Zm9vQmFyPmZvbzwvZm9vQmFyPlxuPGZvby1iYXI+Zm9vPC9mb28tYmFyPlxuPHVua25vd24tZWxlbWVudD5mb288L3Vua25vd24tZWxlbWVudD5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzYwMgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IHByb3BzID0gX19WdWVEWF9fY3R4LnByb3BzCiAgbGV0IHZhbHVlID0gX19WdWVEWF9fY3R4LnZhbHVlCiAgbGV0IGR5bmFtaWMgPSBfX1Z1ZURYX19jdHguZHluYW1pYwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsKICAgICAgICAgICRzbG90cy5kZWZhdWx0ICE9IG51bGwgPyAkc2xvdHMuZGVmYXVsdCh7fSkgOiAoCiAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgeyJmYWxsYmFjayBjb250ZW50In0KICAgICAgICAgICAgPC8+CiAgICAgICAgICApCgogICAgICAgIH0KICAgICAgICA8c3BhbgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7CiAgICAgICAgICAgICRzbG90cy5vdGhlciAhPSBudWxsID8gJHNsb3RzLm90aGVyKHsKICAgICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgICAgICAgIH0pIDogKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZhbGxiYWNrIGNvbnRlbnQifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCgogICAgICAgICAgfQogICAgICAgIDwvc3Bhbj4KICAgICAgICB7CiAgICAgICAgICAkc2xvdHMuYW5vdGhlciAhPSBudWxsID8gJHNsb3RzLmFub3RoZXIoewogICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICAgICAgfSkgOiBudWxsCiAgICAgICAgfQogICAgICAgIHsKICAgICAgICAgICRzbG90cy4ibmFtZSIgIT0gbnVsbCA/ICRzbG90cy4ibmFtZSIoewogICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICAgICAgfSkgOiBudWxsCiAgICAgICAgfQogICAgICA8L2Rpdj4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wcwogIGxldCB2YWx1ZSA9IF9fVnVlRFhfX2N0eC52YWx1ZQogIGxldCBkeW5hbWljID0gX19WdWVEWF9fY3R4LmR5bmFtaWMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHsKICAgICAgZGVmYXVsdDoge30sCiAgICB9LAogICAgewogICAgICAib3RoZXIiOiB7CiAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICB9LAogICAgfSwKICAgIHsKICAgICAgImFub3RoZXIiOiB7CiAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICB9LAogICAgfSwKICAgIHsKICAgICAgW2R5bmFtaWNdOiB7CiAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICB9LAogICAgfSwKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjE0NTgAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSw4QjtBLEUsOEI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEc7QSxRLG1DO0EsTSxDO0EsUSxDO0EsVSxNLFEsVyxNLFEsRSxFLEcsQztBLFksRTtBLGMsQ0FDT0Msa0IsQztBLFksRztBLFUsQztBO0EsUSxDO0EsUUFDTixDQUFDQyxJO0EsVSxtQztBLFEsQztBLFUsQztBLFksTSxDQUNZQyxLLFcsTSxDQUFBQSxLLEU7QSxjQUFRLElBQVFDLEssQyxDO0EsWUFBTyxFQUFDQyxNLEVBQVFELEssQztBLFksRSxHLEM7QSxjLEU7QSxnQixDQUFPSCxrQixDO0EsYyxHO0EsWSxDO0E7QSxVLEM7QSxRQUNwRCxFLEksQztBLFEsQztBLFUsTSxDQUNXSyxPLFcsTSxDQUFBQSxPLEU7QSxZQUFVLElBQVFGLEssQyxDO0EsVUFBTyxFQUFDQyxNLEVBQVFELEssQztBLFUsRSxHLEk7QSxRLEM7QSxRLEM7QSxVLE0sQ0FDdENHLE0sVyxNLENBQUFBLE0sRTtBLFlBQWUsSUFBUUgsSyxDLEM7QSxVQUFPLEVBQUNDLE0sRUFBUUQsSyxDO0EsVSxFLEcsSTtBLFEsQztBLE1BQ2hELEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsOEI7QSxFLDhCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEksQztBLE0sTyxFLEMsRTtBLEksQyxDO0EsSSxDO0EsTSxPLEUsQztBLFEsSSxLLEMsQztBLE0sRSxNLEUsSyxDO0EsTSxFO0EsSSxDLEM7QSxJLEM7QSxNLFMsRSxDO0EsUSxJLEssQyxDO0EsTSxFLE0sRSxLLEM7QSxNLEU7QSxJLEMsQztBLEksQztBLE0sQyxPLEMsRSxDO0EsUSxJLEssQyxDO0EsTSxFLE0sRSxLLEM7QSxNLEU7QSxJLEMsQztBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+MTZ8MTgiLCI8PFA+PjQiLCI8PFQ+Pjd8NSIsIjw8UD4+NSIsIjw8UD4+NiIsIjw8VD4+OXw3IiwiPDxUPj40fDYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3Bhbj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDwvc3Bhbj5cbiAgPHNsb3QgbmFtZT1cImFub3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPjwvc2xvdD5cbiAgPHNsb3QgOm5hbWU9XCJkeW5hbWljXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIiAvPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDAyNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGxpc3QgPSBfX1Z1ZURYX19jdHgubGlzdAogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wcwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobGlzdCwgKGl0ZW1zKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICRzbG90cy5kZWZhdWx0ICE9IG51bGwgPyAkc2xvdHMuZGVmYXVsdCh7fSkgOiAoCiAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgeyJmYWxsYmFjayBjb250ZW50In0KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICApCgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChpdGVtcywgKGl0ZW0pID0+IHsKICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICA8c3BhbgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICRzbG90cy5vdGhlciAhPSBudWxsID8gJHNsb3RzLm90aGVyKHsKICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICAgICAgICAgICAgICAgIG15UHJvcDogaXRlbSwKICAgICAgICAgICAgICAgICAgICAgICAgfSkgOiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsiZmFsbGJhY2sgY29udGVudCJ9CiAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICkKCiAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGxpc3QgPSBfX1Z1ZURYX19jdHgubGlzdAogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wcwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoCiAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGxpc3QsIChpdGVtcykgPT4gKAogICAgICAgIHsKICAgICAgICAgIGRlZmF1bHQ6IHt9LAogICAgICAgIH0KICAgICAgKSkKICAgICksCiAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdCgKICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobGlzdCwgKGl0ZW1zKSA9PiAoCiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoCiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChpdGVtcywgKGl0ZW0pID0+ICgKICAgICAgICAgICAgewogICAgICAgICAgICAgICJvdGhlciI6IHsKICAgICAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgICAgICBteVByb3A6IGl0ZW0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfQogICAgICAgICAgKSkKICAgICAgICApCiAgICAgICkpCiAgICApLAogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KMTI5NwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDRCO0EsRSw4QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDO0EsUSx1Q0FBcUJBLEksRSxDQUFUQyxLLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0MsRztBLGMsbUM7QSxZLEM7QSxjLEM7QSxnQixNLFEsVyxNLFEsRSxFLEcsQztBLGtCLEU7QSxvQixDQUNPQyxrQixDO0Esa0IsRztBLGdCLEM7QTtBLGMsQztBLGMsQztBLGdCLHVDQUNlRixLLEUsQ0FBUkQsSSxDLEs7QSxrQixRO0Esb0JBQWIsQ0FBQ0EsSTtBLHNCLG1DO0Esb0IsQztBLHNCLEM7QSx3QixNLENBQ1lJLEssVyxNLENBQUFBLEssRTtBLDBCQUFRLElBQVFILEssQyxDO0Esd0JBQU8sRUFBQ0ksTSxFQUFRTCxJLEM7QSx3QixFLEcsQztBLDBCLEU7QSw0QixDQUFNRyxrQixDO0EsMEIsRztBLHdCLEM7QTtBLHNCLEM7QSxvQkFDbkQsRSxJLEM7QSxrQixDO0EsZ0IsQyxDO0EsYyxDO0EsWUFDRixFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLDhCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsSSxnQyxDO0EsTSxzQyxDLEksRSxDLEssQyxLO0EsUSxDO0EsVSxPLEUsQyxFO0EsUSxDO0EsTSxFO0EsSSxDLEM7QSxJLGdDLEM7QSxNLHNDLEMsSSxFLEMsSyxDLEs7QSxRLGdDLEM7QSxVLHNDLEMsSyxFLEMsSSxDLEs7QSxZLEM7QSxjLE8sRSxDO0EsZ0IsSSxLLEMsQztBLGMsRSxNLEUsSSxDO0EsYyxFO0EsWSxDO0EsVSxFO0EsUSxDO0EsTSxFO0EsSSxDLEM7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjQiLCI8PFA+PjUiLCI8PFA+PjMiLCI8PFQ+PjE2fDE4IiwiPDxUPj43fDUiLCI8PFA+PjYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtZm9yPVwiaXRlbXMgb2YgbGlzdFwiPlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3BhbiB2LWZvcj1cIml0ZW0gb2YgaXRlbXNcIj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJpdGVtXCI+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPC9zcGFuPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzA4MABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG15SW5wdXQgPSBfX1Z1ZURYX19jdHgubXlJbnB1dAogIGxldCBjdXN0b21OYW1lID0gX19WdWVEWF9fY3R4LmN1c3RvbU5hbWUKICBsZXQgcmVzdCA9IF9fVnVlRFhfX2N0eC5yZXN0CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgRm9vID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vKCksICJGb28iIGFzIGNvbnN0LCAiRm9vIiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aW5wdXQKICAgICAgICB2YWx1ZT17bXlJbnB1dH0KICAgICAgICB7Li4uKHtbY3VzdG9tTmFtZV06IG15SW5wdXR9KX0KICAgICAgICB7Li4uKHJlc3QpfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxGb28KICAgICAgICB2YWx1ZT17bXlJbnB1dH0KICAgICAgICB7Li4uKHtbY3VzdG9tTmFtZV06IG15SW5wdXR9KX0KICAgICAgICB7Li4uKHJlc3QpfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG15SW5wdXQgPSBfX1Z1ZURYX19jdHgubXlJbnB1dAogIGxldCBjdXN0b21OYW1lID0gX19WdWVEWF9fY3R4LmN1c3RvbU5hbWUKICBsZXQgcmVzdCA9IF9fVnVlRFhfX2N0eC5yZXN0CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImlucHV0Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjgzMQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGtDO0EsRSx3QztBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxLO0EsUUFBT0EsSyxDLENBQU9DLE8sQztBLFEsT0FBV0MsVSxDLEVBQWFELE8sRztBLFEsS0FBaUJFLEksRTtBLFEsbUM7QSxNQUFNLEU7QSxNQUM5RCxDQUFDQyxHO0EsUUFBS0osSyxDLENBQU9DLE8sQztBLFEsT0FBV0MsVSxDLEVBQWFELE8sRztBLFEsS0FBaUJFLEksRTtBLFEsbUM7QSxNQUFNLEU7QTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSx3QztBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLG9GLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjciLCI8PFA+PjEwIiwiPDxQPj40IiwiPDxQPj4zIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuPEZvbyA6dmFsdWU9XCJteUlucHV0XCIgOltjdXN0b21OYW1lXT1cIm15SW5wdXRcIiB2LWJpbmQ9XCJyZXN0XCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mzk1OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9uRm9jdXMgPSBfX1Z1ZURYX19jdHgub25Gb2N1cwogIGxldCB2YWx1ZSA9IF9fVnVlRFhfX2N0eC52YWx1ZQogIGxldCBldmVudE5hbWUgPSBfX1Z1ZURYX19jdHguZXZlbnROYW1lCiAgbGV0IGV2ZW50cyA9IF9fVnVlRFhfX2N0eC5ldmVudHMKICBsZXQgZm5OYW1lID0gX19WdWVEWF9fY3R4LmZuTmFtZQogIGxldCBjYWxsTXlGbiA9IF9fVnVlRFhfX2N0eC5jYWxsTXlGbgogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aW5wdXQKICAgICAgICBvbkZvY3VzPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25Gb2N1cywgCiAgICAgICAgXSl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgb25VcGRhdGU6dmFsdWU9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICAoJGV2ZW50KSA9PiB7CiAgICAgICAgICBpZighKCRldmVudC5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpIHRocm93IG5ldyBFcnJvcjsKICAgICAgICAgIHZhbHVlID0gJGV2ZW50CiAgICAgICAgICB9LCAKICAgICAgICBdKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICBvbkV2ZW50LW5hbWU9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICAvKjx2dWVkeDptaXNzaW5nRXhwcmVzc2lvbj4qLywgCiAgICAgICAgXSl9CiAgICAgICAgb25FdmVudE5hbWU9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICAvKjx2dWVkeDptaXNzaW5nRXhwcmVzc2lvbj4qLywgCiAgICAgICAgICAvKjx2dWVkeDptaXNzaW5nRXhwcmVzc2lvbj4qLywgCiAgICAgICAgXSl9CiAgICAgICAgey4uLihldmVudHMpfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIG9uS2V5ZG93bj17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIGZuTmFtZSwgCiAgICAgICAgICAoJGV2ZW50KSA9PiB7CiAgICAgICAgICBpZighKCRldmVudC5jdXJyZW50VGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkpIHRocm93IG5ldyBFcnJvcjsKICAgICAgICAgIGNhbGxNeUZuKCRldmVudCkKICAgICAgICAgIH0sIAogICAgICAgICAgJGV2ZW50ID0+IGNhbGxNeUZuKCRldmVudCksIAogICAgICAgICAgKCRldmVudCkgPT4gY2FsbE15Rm4oJGV2ZW50KSwgCiAgICAgICAgICAoKSA9PiBjYWxsTXlGbigkZXZlbnQpLCAKICAgICAgICAgIGZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7CiAgICBjYWxsTXlGbigkZXZlbnQpCiAgfSwgCiAgICAgICAgICBmdW5jdGlvbiBteUZ1bmN0aW9uKCkgewogICAgY2FsbE15Rm4oJGV2ZW50KQogIH0sIAogICAgICAgIF0pfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb25Gb2N1cyA9IF9fVnVlRFhfX2N0eC5vbkZvY3VzCiAgbGV0IHZhbHVlID0gX19WdWVEWF9fY3R4LnZhbHVlCiAgbGV0IGV2ZW50TmFtZSA9IF9fVnVlRFhfX2N0eC5ldmVudE5hbWUKICBsZXQgZXZlbnRzID0gX19WdWVEWF9fY3R4LmV2ZW50cwogIGxldCBmbk5hbWUgPSBfX1Z1ZURYX19jdHguZm5OYW1lCiAgbGV0IGNhbGxNeUZuID0gX19WdWVEWF9fY3R4LmNhbGxNeUZuCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KMTYwNwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGtDO0EsRSw4QjtBLEUsc0M7QSxFLGdDO0EsRSxnQztBLEUsb0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsSztBLFFBQU9DLE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRLG1DO0EsTUFBUyxFO0EsTUFDeEIsQ0FBQ0YsSztBLFFBQU9HLGMsQyxDLG1DO0EsVSxhO0EsVSxLLGdDLGdCLG1CO0EsVUFBY0MsYztBLFUsQyxFO0EsUSxFLEM7QSxRLG1DO0EsTUFBZ0IsRTtBLE1BQ3RDLENBQUNKLEs7QSxRQUFPSyxZLEMsQyxtQztBLFVBQUQsNkIsRTtBLFEsRSxDO0EsUUFBYUMsVyxDLEMsbUM7QSxVQUFELDZCLEU7QSxVQUFXLDZCLEU7QSxRLEUsQztBLFEsS0FBbUJDLE0sRTtBLFEsbUM7QSxNQUFRLEU7QSxNQUN6RCxDQUFDUCxLO0EsUUFDRVEsUyxDLEMsbUM7QSxVQUFTRCxNLEU7QSxVLGE7QSxVLEssZ0MsZ0IsbUI7QSxVQUNLRSxnQjtBLFUsQyxFO0EsVUFDTUMsMEIsRTtBLFVBQ0NDLDRCLEU7QSxVQUNEQyxzQixFO0EsVUFDRkM7O0csRTtBLFVBR0RDOztHLEU7QSxRLEUsQztBLFEsbUM7QSxNQUdwQixFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLDhCO0EsRSxzQztBLEUsZ0M7QSxFLGdDO0EsRSxvQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFQ+PjV8NyIsIjw8UD4+NyIsIjw8VD4+MTJ8MTQiLCI8PFA+PjE0IiwiPDxUPj4xMHwxMiIsIjw8VD4+OXwxMSIsIjw8UD4+NiIsIjw8VD4+N3w5IiwiPDxQPj4xNiIsIjw8UD4+MjYiLCI8PFA+PjI4IiwiPDxQPj4yMiIsIjw8UD4+NTQiLCI8PFA+PjQ4Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IEBmb2N1cz1cIm9uRm9jdXNcIiAvPlxuPGlucHV0IEB1cGRhdGU6dmFsdWU9XCJ2YWx1ZSA9ICRldmVudFwiIC8+XG48aW5wdXQgQGV2ZW50LW5hbWUgQGV2ZW50TmFtZSBAW2V2ZW50TmFtZV0gdi1vbj1cImV2ZW50c1wiIC8+XG48aW5wdXRcbiAgQGtleWRvd249XCJmbk5hbWVcIlxuICBAa2V5ZG93bi5sZWZ0PVwiY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LmxlZnQ9XCIkZXZlbnQgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LnJpZ2h0PVwiKCRldmVudCkgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LmRvd249XCIoKSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQudXA9XCJmdW5jdGlvbiBteUZ1bmN0aW9uKCRldmVudCkge1xuICAgIGNhbGxNeUZuKCRldmVudClcbiAgfVwiXG4gIEBrZXlkb3duLmN0cmwudXA9XCJmdW5jdGlvbiBteUZ1bmN0aW9uKCkge1xuICAgIGNhbGxNeUZuKCRldmVudClcbiAgfVwiXG4vPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzA0NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9uQ2xpY2sgPSBfX1Z1ZURYX19jdHgub25DbGljawogIGxldCBvbkhvdmVyID0gX19WdWVEWF9fY3R4Lm9uSG92ZXIKICBsZXQgb25QcmVzcyA9IF9fVnVlRFhfX2N0eC5vblByZXNzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxkaXYKICAgICAgICBvbkNsaWNrPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25DbGljaywgCiAgICAgICAgXSl9CiAgICAgICAgb25Ib3Zlcj17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uSG92ZXIsIAogICAgICAgIF0pfQogICAgICAgIG9uUHJlc3M9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvblByZXNzLCAKICAgICAgICBdKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8ZGl2CiAgICAgICAgb25DbGljaz17X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KFsKICAgICAgICAgIG9uQ2xpY2ssIAogICAgICAgIF0pfQogICAgICAgIG9uSG92ZXI9e19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChbCiAgICAgICAgICBvbkhvdmVyLCAKICAgICAgICBdKX0KICAgICAgICBvblByZXNzPXtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoWwogICAgICAgICAgb25QcmVzcywgCiAgICAgICAgXSl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkNsaWNrID0gX19WdWVEWF9fY3R4Lm9uQ2xpY2sKICBsZXQgb25Ib3ZlciA9IF9fVnVlRFhfX2N0eC5vbkhvdmVyCiAgbGV0IG9uUHJlc3MgPSBfX1Z1ZURYX19jdHgub25QcmVzcwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjg1MwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxrQztBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsRztBLFFBQUtDLE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRQUFVRCxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUUFBVUQsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFEsbUM7QSxNQUFTLEU7QSxNQUN4RCxDQUFDRixHO0EsUUFBS0MsTyxDLEMsbUM7QSxVQUFPQyxPLEU7QSxRLEUsQztBLFFBQVVELE8sQyxDLG1DO0EsVUFBT0MsTyxFO0EsUSxFLEM7QSxRQUFVRCxPLEMsQyxtQztBLFVBQU9DLE8sRTtBLFEsRSxDO0EsUSxtQztBLE1BQVMsRTtBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxrQztBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj41fDciLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU0NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7YXdlc29tZQogICAgICAgID8gPD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICAgIDogbnVsbAogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjU1OQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQVVBLE87QSxRLEUsRTtBLFlBQVYsQ0FBQ0MsRTtBLGMsbUM7QSxZLEM7QSxjLENBQWtCQyxpQixDO0EsWUFBZSxFLEUsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGtDO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj43IiwiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjc3MABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7YXdlc29tZQogICAgICAgID8gPD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICAgIDogPD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiT2ggbm8g8J+YoiJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgo2NzAAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUFVQSxPO0EsUSxFLEU7QSxZQUFWLENBQUNDLEU7QSxjLG1DO0EsWSxDO0EsYyxDQUFrQkMsaUIsQztBLFlBQWUsRSxFLEM7QSxVLEc7QSxRLEUsRTtBLFlBQ2xDLENBQUNELEU7QSxjLG1DO0EsWSxDO0EsYyxDQUFVRSxVLEM7QSxZQUFRLEUsRSxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsa0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxJLGlGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjciLCI8PFA+PjIiLCI8PFQ+PjE1fDE3IiwiPDxUPj44fDEwIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjkzNQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHtvawogICAgICAgID8gPD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVGl0bGUifQogICAgICAgICAgICA8L2gxPgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlBhcmFncmFwaCAxIn0KICAgICAgICAgICAgPC9wPgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlBhcmFncmFwaCAyIn0KICAgICAgICAgICAgPC9wPgogICAgICAgICAgPC8+CiAgICAgICAgOiBudWxsCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vawogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJwIj4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInAiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KNzUzAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FBZ0JBLEU7QSxRLEUsRTtBLFlBQ2QsQ0FBQ0EsRTtBLGMsbUM7QSxZLEM7QSxjLENBQUdDLE8sQztBLFlBQUssRSxFLEM7QSxZQUNULENBQUNDLEM7QSxjLG1DO0EsWSxDO0EsYyxDQUFFQyxhLEM7QSxZQUFXLEUsQyxDO0EsWUFDZCxDQUFDRCxDO0EsYyxtQztBLFksQztBLGMsQ0FBRUMsYSxDO0EsWUFBVyxFLEMsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsSSxnRixDO0EsSSxnRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj41fDciLCI8PFA+PjEiLCI8PFQ+PjExfDEzIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHRlbXBsYXRlIHYtaWY9XCJva1wiPlxuICA8aDE+VGl0bGU8L2gxPlxuICA8cD5QYXJhZ3JhcGggMTwvcD5cbiAgPHA+UGFyYWdyYXBoIDI8L3A+XG48L3RlbXBsYXRlPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzI4MABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IHR5cGUgPSBfX1Z1ZURYX19jdHgudHlwZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7dHlwZSA9PT0gJ0EnCiAgICAgICAgPyA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiIEEgIn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IHR5cGUgPT09ICdCJwogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBCICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiB0eXBlID09PSAnQycKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyIgQyAifQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICAgIDogPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBOb3QgQS9CL0MgIn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IHR5cGUgPSBfX1Z1ZURYX19jdHgudHlwZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KOTU5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FBV0EsWTtBLFEsRSxFO0EsWUFBWCxDQUFDQyxHO0EsYyxtQztBLFksQztBLGMsQ0FBd0JDLEssQztBLFlBRXpCLEUsRyxDO0EsVSxHO0EsUSxFQUNnQkYsWTtBLFEsRSxFO0EsWUFBaEIsQ0FBQ0MsRztBLGMsbUM7QSxZLEM7QSxjLENBQTZCQyxLLEM7QSxZQUU5QixFLEcsQztBLFUsRztBLFEsRUFDZ0JGLFk7QSxRLEUsRTtBLFlBQWhCLENBQUNDLEc7QSxjLG1DO0EsWSxDO0EsYyxDQUE2QkMsSyxDO0EsWUFFOUIsRSxHLEM7QSxVLEc7QSxRLEUsRTtBLFlBQ0EsQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjLENBQVdFLGEsQztBLFlBRVosRSxHLEM7QSxVLEc7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MTIiLCI8PFA+PjMiLCI8PFQ+PjV8NSIsIjw8VD4+MTN8MTMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJ0eXBlID09PSAnQSdcIj5cbiAgQVxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdCJ1wiPlxuICBCXG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ0MnXCI+XG4gIENcbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIE5vdCBBL0IvQ1xuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjM3NwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxoMQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgIDwvaDE+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KNDg3AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxFO0EsUSxtQztBLE0sQztBLFEsQ0FBVUMsaUIsQztBLE1BQWUsRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWVsc2U+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQzOQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHs8PgogICAgICAgICAgICA8aDEKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICAgICAgICA8L2gxPgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJoMSI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgo1MDUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLEMsRTtBLFlBQUEsQ0FBQ0EsRTtBLGMsbUM7QSxZLEM7QSxjLENBQVFDLGlCLEM7QSxZQUFlLEUsRSxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksaUYsQztBLEUsRztBLEEsSzs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+MTV8MTciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1pZj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQzMQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxoMQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgIDwvaDE+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2sKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaDEiPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KNTA4AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsRTtBLFEsbUM7QSxNLEM7QSxRLENBQWVDLGlCLEM7QSxNQUFlLEUsRSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGlGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjE1fDE3Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtZWxzZT1cIm9rXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQ1OABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZQogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICA8L2gxPgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJPaCBubyDwn5iiIn0KICAgICAgPC9oMT4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWUKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgo2MDAAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxFO0EsUSxtQztBLE0sQztBLFEsQ0FBdUJDLGlCLEM7QSxNQUFlLEUsRSxDO0EsTUFDdkMsQ0FBQ0QsRTtBLFEsbUM7QSxNLEM7QSxRLENBQVVFLFUsQztBLE1BQVEsRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxrQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjE1fDE3IiwiPDxUPj44fDEwIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtZWxzZS1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuPGgxIHYtZWxzZT5PaCBubyDwn5iiPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDcyOABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgYmFyID0gX19WdWVEWF9fY3R4LmJhcgogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7Zm9vCiAgICAgICAgPyA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtmb28KICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IGJhcgogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICAgIDogYmFyCiAgICAgICAgPyA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtmb28KICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IGJhcgogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICAgIDogPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiBiYXIKICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgYmFyID0gX19WdWVEWF9fY3R4LmJhcgogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgoxNjExAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQVdBLEc7QSxRLEUsRTtBLFlBQVgsQ0FBQ0EsRztBLGMsbUM7QSxZLEM7QSxjLENBQ1lBLEc7QSxnQixFLEU7QSxvQkFBWCxDQUFDQSxHO0Esc0IsbUM7QSxvQixDO0Esb0JBQWUsRSxHLEM7QSxrQixHO0EsZ0IsRUFDQUEsRztBLGdCLEUsRTtBLG9CQUFoQixDQUFDQSxHO0Esc0IsbUM7QSxvQixDO0Esb0JBQW9CLEUsRyxDO0Esa0IsRztBLGdCLEUsRTtBLG9CQUNyQixDQUFDQSxHO0Esc0IsbUM7QSxvQixDO0Esb0JBQVcsRSxHLEM7QSxrQixHO0EsYyxDO0EsWUFDZCxFLEcsQztBLFUsRztBLFEsRUFDZ0JBLEc7QSxRLEUsRTtBLFlBQWhCLENBQUNBLEc7QSxjLG1DO0EsWSxDO0EsYyxDQUNZQSxHO0EsZ0IsRSxFO0Esb0JBQVgsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFlLEUsRyxDO0Esa0IsRztBLGdCLEVBQ0FBLEc7QSxnQixFLEU7QSxvQkFBaEIsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFvQixFLEcsQztBLGtCLEc7QSxnQixFLEU7QSxvQkFDckIsQ0FBQ0EsRztBLHNCLG1DO0Esb0IsQztBLG9CQUFXLEUsRyxDO0Esa0IsRztBLGMsQztBLFlBQ2QsRSxHLEM7QSxVLEc7QSxRLEUsRTtBLFlBQ0EsQ0FBQ0EsRztBLGMsbUM7QSxZLEM7QSxjLENBQ1lBLEc7QSxnQixFLEU7QSxvQkFBWCxDQUFDQSxHO0Esc0IsbUM7QSxvQixDO0Esb0JBQWUsRSxHLEM7QSxrQixHO0EsZ0IsRUFDQUEsRztBLGdCLEUsRTtBLG9CQUFoQixDQUFDQSxHO0Esc0IsbUM7QSxvQixDO0Esb0JBQW9CLEUsRyxDO0Esa0IsRztBLGdCLEUsRTtBLG9CQUNyQixDQUFDQSxHO0Esc0IsbUM7QSxvQixDO0Esb0JBQVcsRSxHLEM7QSxrQixHO0EsYyxDO0EsWUFDZCxFLEcsQztBLFUsRztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1pZj1cImZvb1wiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQzNwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG1zZyA9IF9fVnVlRFhfX2N0eC5tc2cKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHNwYW4KICAgICAgICBpbm5lckhUTUw9e21zZ30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgIDwvc3Bhbj4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBtc2cgPSBfX1Z1ZURYX19jdHgubXNnCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgInNwYW4iPiwKICBdKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KNTEyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsSTtBLFFBQU9DLFMsQyxDQUFNQyxHLEM7QSxRLG1DO0EsTSxDO0EsTUFBSyxFLEksQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxtRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj40IiwiPDxUPj40fDkiLCI8PFA+PjMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c3BhbiB2LXRleHQ9XCJtc2dcIj48L3NwYW4+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQzOQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGh0bWwgPSBfX1Z1ZURYX19jdHguaHRtbAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgaW5uZXJIVE1MPXtodG1sfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgaHRtbCA9IF9fVnVlRFhfX2N0eC5odG1sCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgo1MTEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxHO0EsUUFBTUMsUyxDLENBQU1DLEksQztBLFEsbUM7QSxNLEM7QSxNQUFNLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsNEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjR8OSIsIjw8UD4+NCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1odG1sPVwiaHRtbFwiPjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU1NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsoKCkgPT4gewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja0RpcmVjdGl2ZSgic2hvdyIgYXMgY29uc3QsICJoMSIgYXMgY29uc3QsIHVuZGVmaW5lZCwgb2ssIHsgIH0pOwogICAgICB9KSgpfQogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJIZWxsbyEifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImgxIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjU2MAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLFM7QSxRLDJDQUFJQSxlLEVBQUgsYSxFLFMsRUFBV0MsRSxFLEUsRSxFO0EsTSxLO0EsTUFBWixDQUFDQSxFO0EsUSxtQztBLE0sQztBLFEsQ0FBZUMsUSxDO0EsTUFBTSxFLEUsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLHdCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFO0EsSSxpRixDO0EsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxUPj42fDE1IiwiPDxQPj4yIiwiPDxUPj42fDgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1zaG93PVwib2tcIj5IZWxsbyE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjc2NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJudW1iZXIiCiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJ0ZWwiCiAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0icmFkaW8iCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjk4NAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFBLENBQUNBLEs7QSxRQUFNQyxLLEVBQVNDLEcsQztBLFEsbUM7QSxNQUFLLEU7QSxNQUNyQixDQUFDRixLO0EsUUFBTUcsSSxDQUFLQyxRO0EsUUFBU0gsSyxFQUFTQyxHLEM7QSxRLG1DO0EsTUFBSyxFO0EsTUFDbkMsQ0FBQ0YsSztBLFFBQU1HLEksQ0FBS0gsSztBLFFBQU1DLEssRUFBU0MsRyxDO0EsUSxtQztBLE1BQUssRTtBLE1BQ2hDLENBQUNGLEs7QSxRQUFNRyxJLENBQUtFLFU7QSxRQUFXQyxPLEVBQVNKLEcsQztBLFEsbUM7QSxNQUFLLEU7QSxNQUNyQyxDQUFDRixLO0EsUUFBTUcsSSxDQUFLSSxPO0EsUUFBUUQsTyxFQUFTSixHLEM7QSxRLG1DO0EsTUFBSyxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj41IiwiPDxUPj43fDUiLCI8PFA+PjMiLCI8PFA+PjQiLCI8PFA+PjgiLCI8PFA+PjEwIiwiPDxUPj43fDciLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJ0ZWxcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2LW1vZGVsPVwiZm9vXCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU2NgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHNlbGVjdAogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgICB7Zm9vfSAKICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICAgIDx0ZXh0YXJlYQogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KNzMyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsTTtBLFFBQU9DLEssRUFBU0MsRyxDO0EsUSxtQztBLE0sQztBLFFBQ2YsQ0FBQ0YsTTtBLFVBQVFHLEssQyxDQUFPRCxHLEM7QSxVLG1DO0EsUSxDO0EsVUFBSyxFQUFFQSxHQUFHLEU7QSxRQUFFLEUsTSxDO0EsTUFDOUIsRSxNLEM7QSxNQUNBLENBQUNFLFE7QSxRQUFTSCxLLEVBQVNDLEcsQztBLFEsbUM7QSxNQUFLLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFQ+Pjd8NSIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIDp2YWx1ZT1cImZvb1wiPnt7Zm9vfX08L29wdGlvbj5cbjwvc2VsZWN0PlxuPHRleHRhcmVhIHYtbW9kZWw9XCJmb29cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjkwNQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgeWVzID0gX19WdWVEWF9fY3R4LnllcwogIGxldCBubyA9IF9fVnVlRFhfX2N0eC5ubwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgY2hlY2tlZD17Zm9vfQogICAgICAgIHRydWUtdmFsdWU9InllcyIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBjaGVja2VkPXtmb299CiAgICAgICAgZmFsc2UtdmFsdWU9Im5vIgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIGNoZWNrZWQ9e2Zvb30KICAgICAgICB0cnVlLXZhbHVlPXt5ZXN9CiAgICAgICAgZmFsc2UtdmFsdWU9e25vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbwogIGxldCB5ZXMgPSBfX1Z1ZURYX19jdHgueWVzCiAgbGV0IG5vID0gX19WdWVEWF9fY3R4Lm5vCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KMTA5MQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDBCO0EsRSwwQjtBLEUsd0I7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsSztBLFFBQU1DLEksQ0FBS0MsVTtBLFFBQVdDLE8sRUFBU0MsRyxDO0EsUSxtQztBLE1BQUssRTtBLE1BQ3JDLENBQUNKLEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUFXQyxPLEVBQVNDLEcsQztBLFFBQUtGLFUsQ0FBV0YsSztBLFEsbUM7QSxNQUFNLEU7QSxNQUN0RCxDQUFDQSxLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBV0MsTyxFQUFTQyxHLEM7QSxRQUFLQyxXLENBQVlKLEk7QSxRLG1DO0EsTUFBSyxFO0EsTUFDdEQsQ0FBQ0QsSztBLFFBQU1DLEksQ0FBS0MsVTtBLFFBQVdDLE8sRUFBU0MsRyxDO0EsUUFBTUYsVSxDLENBQVlFLEcsQztBLFFBQU1DLFcsQyxDQUFhQyxFLEM7QSxRLG1DO0EsTUFBSSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSx3QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjQiLCI8PFA+PjEwIiwiPDxUPj43fDciLCI8PFA+PjMiLCI8PFA+PjExIiwiPDxQPj4yIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiB0cnVlLXZhbHVlPVwieWVzXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgZmFsc2UtdmFsdWU9XCJub1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIDp0cnVlLXZhbHVlPVwieWVzXCIgOmZhbHNlLXZhbHVlPVwibm9cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzUxOQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgYmF6ID0gX19WdWVEWF9fY3R4LmJhegogIGxldCB2YWxzID0gX19WdWVEWF9fY3R4LnZhbHMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHNlbGVjdAogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJmb28iCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiZm9vIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iYmFyIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImJhciJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9e2Jhen0KICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgeyJiYXoifQogICAgICAgIDwvb3B0aW9uPgogICAgICA8L3NlbGVjdD4KICAgICAgPHNlbGVjdAogICAgICAgIHZhbHVlPXtmb299CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJmb28iCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiZm9vIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICB7CiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdCh2YWxzLCAodmFsKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPG9wdGlvbgogICAgICAgICAgICAgICAgdmFsdWU9e3ZhbH0KICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgIHt2YWx9IAogICAgICAgICAgICAgIDwvb3B0aW9uPgogICAgICAgICAgICApCiAgICAgICAgICB9KQogICAgICAgIH0KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iYmFyIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImJhciJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgIDwvc2VsZWN0PgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgYmF6ID0gX19WdWVEWF9fY3R4LmJhegogIGxldCB2YWxzID0gX19WdWVEWF9fY3R4LnZhbHMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgoxNDQxAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxNO0EsUUFBT0MsSyxFQUFTQyxHLEM7QSxRLG1DO0EsTSxDO0EsUUFDZixDQUFDRixNO0EsVUFBT0csSyxDQUFNQSxLO0EsVSxtQztBLFEsQztBLFUsQ0FBTUMsSyxDO0EsUUFBRyxFLE0sQztBLFFBQ3ZCLENBQUNKLE07QSxVQUFPRyxLLENBQU1BLEs7QSxVLG1DO0EsUSxDO0EsVSxDQUFNQyxLLEM7QSxRQUFHLEUsTSxDO0EsUUFDdkIsQ0FBQ0osTTtBLFVBQVFHLEssQyxDQUFPRCxHLEM7QSxVLG1DO0EsUSxDO0EsVSxDQUFLRSxLLEM7QSxRQUFHLEUsTSxDO0EsTUFDMUIsRSxNLEM7QSxNQUVBLENBQUNKLE07QSxRQUFPQyxLLEVBQVNDLEcsQztBLFEsbUM7QSxNLEM7QSxRQUNmLENBQUNGLE07QSxVQUFPRyxLLENBQU1BLEs7QSxVLG1DO0EsUSxDO0EsVSxDQUFNQyxLLEM7QSxRQUFHLEUsTSxDO0EsUSxDO0EsVSx1Q0FDREMsSSxFLENBQVBILEcsQyxLO0EsWSxRO0EsY0FBZixDQUFDRixNO0EsZ0JBQTRCRyxLLEMsQ0FBT0QsRyxDO0EsZ0IsbUM7QSxjLEM7QSxnQkFBSyxFQUFHQSxHQUFJLEU7QSxjQUFFLEUsTSxDO0EsWSxDO0EsVSxDLEM7QSxRLEM7QSxRQUNsRCxDQUFDRixNO0EsVUFBT0csSyxDQUFNQSxLO0EsVSxtQztBLFEsQztBLFUsQ0FBTUMsSyxDO0EsUUFBRyxFLE0sQztBLE1BQ3pCLEUsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLDBCO0EsRSw0QjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFQ+Pjd8NSIsIjw8UD4+MyIsIjw8UD4+NSIsIjw8VD4+M3w1IiwiPDxQPj40Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gdmFsdWU9XCJmb29cIj5mb288L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImJhclwiPmJhcjwvb3B0aW9uPlxuICA8b3B0aW9uIDp2YWx1ZT1cImJhelwiPmJhejwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIHZhbHVlPVwiZm9vXCI+Zm9vPC9vcHRpb24+XG4gIDxvcHRpb24gdi1mb3I9XCJ2YWwgb2YgdmFsc1wiIDp2YWx1ZT1cInZhbFwiPnt7IHZhbCB9fTwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XG48L3NlbGVjdD5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
      $slots={{
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
        }}>

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjgzNABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgRm9vID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vKCksICJGb28iIGFzIGNvbnN0LCAiRm9vIiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8Rm9vCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgJHNsb3RzPXt7CiAgICAgICAgICAiZm9vIjogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7IkEifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgICAgImJhciI6ICh7YmFyfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAge2Jhcn0gCiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0+CgogICAgICA8L0Zvbz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoW3t9XSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjc0MwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxHO0EsUSxtQztBLE0sTyxDLEM7QSxVQUNZLEssRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBSUMsRyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsVUFDSixLLEdBQUtDLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLEVBQUVGLEdBQUcsRTtBLGMsRztBLFksQztBLFUsRTtBLFEsQyxDLEM7QTtBLE1BRTlCLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjF8MyIsIjw8UD4+NSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb28+XG4gIDx0ZW1wbGF0ZSAjZm9vPkE8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI2Jhcj1cIntiYXJ9XCI+e3tiYXJ9fTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZT5JbnZhbGlkPC90ZW1wbGF0ZT5cbjwvRm9vPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
      $slots={{
          default: () => {
            return (
              <>
                {"content"}
              </>
            )
          },
        }}>

      </FooBar>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      $slots={{
          "default": ({foo}) => {
            return (
              <>
                 {foo} 
              </>
            )
          },
        }}>

      </FooBar>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      $slots={{
          "other": ({foo}) => {
            return (
              <>
                 {foo} 
              </>
            )
          },
        }}>

      </FooBar>
      <FooBar
        /*<vuedx:tsx-completions-target/>*/
      $slots={{
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
        }}>

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mzk5MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgRm9vQmFyID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBfX1Z1ZURYX19fZ2V0X2lkZW50aWZpZXJfRm9vQmFyKCksICJGb29CYXIiIGFzIGNvbnN0LCAiRm9vQmFyIiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgJHNsb3RzPXt7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiY29udGVudCJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0+CgogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICRzbG90cz17ewogICAgICAgICAgImRlZmF1bHQiOiAoe2Zvb30pID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgIHtmb299IAogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH19PgoKICAgICAgPC9Gb29CYXI+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAkc2xvdHM9e3sKICAgICAgICAgICJvdGhlciI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAge2Zvb30gCiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0+CgogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICRzbG90cz17ewogICAgICAgICAgImRlZmF1bHQiOiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiY29udGVudCJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgICAib3RoZXIiOiAoe2Zvb30pID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgIHtmb299IAogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgICAgImFub3RoZXIiOiAoZm9vKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHtmb28KICAgICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAge2Zvby5iYXJ9IAogICAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgIDogbnVsbAogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH19PgoKICAgICAgPC9Gb29CYXI+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgoxNTA1AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyQjtBLEUsTSxNLGtKLGlDLEUsaUIsRSxpQixFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsTTtBLFEsbUM7QSxNLE8sQyxDO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQU9DLFMsQztBLGMsRztBLFksQztBLFUsRTtBLFEsQyxDLEM7QTtBLE1BQU8sRSxNLEM7QSxNQUNmLENBQUNELE07QSxRLG1DO0EsTSxPLEMsQztBLFVBQVEsUyxHQUFTRSxLLE07QSxZLFE7QSxjLEU7QSxnQkFBTyxFQUFHQyxHQUFJLEU7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEMsQyxDO0E7QSxNQUFFLEUsTSxDO0EsTUFDbEMsQ0FBQ0gsTTtBLFEsbUM7QSxNLE8sQyxDO0EsVUFBUSxPLEdBQU9FLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLEVBQUdDLEdBQUksRTtBLGMsRztBLFksQztBLFUsRTtBLFEsQyxDLEM7QTtBLE1BQUUsRSxNLEM7QSxNQUNoQyxDQUFDSCxNO0EsUSxtQztBLE0sTyxDLEM7QSxVQUNZLFMsRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBUUMsUyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsVUFDUixPLEdBQU9DLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLEVBQUVDLEdBQUcsRTtBLGMsRztBLFksQztBLFUsRTtBLFVBQ25CLFMsR0FBU0EsRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FDUEEsRztBLGtCLEUsRTtBLHNCQUFYLENBQUNBLEc7QSx3QixtQztBLHNCLEM7QSx3QkFBZSxFQUFFQyxPQUFPLEU7QSxzQkFBRSxFLEcsQztBLG9CLEc7QSxnQixRO0EsZ0IsQztBLGMsRztBLFksQztBLFUsRTtBLFEsQyxDLEM7QTtBLE1BRy9CLEUsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFQ+Pjd8OSIsIjw8UD4+NSIsIjw8UD4+MyIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb29CYXI+Y29udGVudDwvRm9vQmFyPlxuPEZvb0JhciAjZGVmYXVsdD1cIntmb299XCI+e3sgZm9vIH19PC9Gb29CYXI+XG48Rm9vQmFyICNvdGhlcj1cIntmb299XCI+e3sgZm9vIH19PC9Gb29CYXI+XG48Rm9vQmFyPlxuICA8dGVtcGxhdGUgI2RlZmF1bHQ+Y29udGVudDwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjb3RoZXI9XCJ7Zm9vfVwiPnt7Zm9vfX08L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI2Fub3RoZXI9XCJmb29cIj5cbiAgICA8ZGl2IHYtaWY9XCJmb29cIj57e2Zvby5iYXJ9fTwvZGl2PlxuICA8L3RlbXBsYXRlPlxuICA8ZGl2PmV4dHJhbm91czwvZGl2PlxuPC9Gb29CYXI+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjM4NABpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxwcmUKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJ7eyBpbnRlcnBvbGF0aW9uIH19In0KICAgICAgPC9wcmU+CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAicHJlIj4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjQ5MwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQUEsQ0FBQ0EsRztBLFEsbUM7QSxNLEM7QSxRLENBQVVDLHFCLEM7QSxNQUFtQixFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLGtGLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFQ+PjE5fDIxIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHByZSB2LXByZT57eyBpbnRlcnBvbGF0aW9uIH19PC9wcmU+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjYxMwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGxhcmdlVGV4dCA9IF9fVnVlRFhfX2N0eC5sYXJnZVRleHQKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgeygoKSA9PiB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrRGlyZWN0aXZlKCJvbmNlIiBhcyBjb25zdCwgInNlY3Rpb24iIGFzIGNvbnN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgeyAgfSk7CiAgICAgIH0pKCl9CiAgICAgIDxzZWN0aW9uCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgICB7bGFyZ2VUZXh0fSAKICAgICAgPC9zZWN0aW9uPgogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGxhcmdlVGV4dCA9IF9fVnVlRFhfX2N0eC5sYXJnZVRleHQKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAic2VjdGlvbiI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgo1NzMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSxzQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxTO0EsUSwyQ0FBU0EsZSxFQUFSLGtCLEUsUyxFLFMsRSxFLEUsRTtBLE0sSztBLE1BQUQsQ0FBQ0MsTztBLFEsbUM7QSxNLEM7QSxRQUFlLEVBQUdDLFNBQVUsRTtBLE1BQUUsRSxPLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSxzQztBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksc0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8VD4+NnwxNSIsIjw8UD4+NyIsIjw8UD4+OSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWN0aW9uIHYtb25jZT57eyBsYXJnZVRleHQgfX08L3NlY3Rpb24+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
              $slots={{
                  default: () => {
                    return (
                      <>
                      </>
                    )
                  },
                }}>

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzIxNgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IE15Q29tcG9uZW50ID0gX19WdWVEWF9fY3R4Lk15Q29tcG9uZW50CiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDx0YWJsZQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8dGJvZHkKICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIE15Q29tcG9uZW50LCBNeUNvbXBvbmVudCwgTXlDb21wb25lbnQpOwogICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgJHNsb3RzPXt7CiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIH19PgoKICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgKTsKICAgICAgICAgIH0pKCl9CiAgICAgICAgPC90Ym9keT4KICAgICAgPC90YWJsZT4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBNeUNvbXBvbmVudCA9IF9fVnVlRFhfX2N0eC5NeUNvbXBvbmVudAogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpjb25zdCBfX1Z1ZURYX19fYXR0cnMgPSAoKCkgPT4gewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmlyc3QoX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJ0YWJsZSI+LAogIF0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgo3NTQAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQztBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxLO0EsUSxtQztBLE0sQztBLFFBQ0MsQ0FBQ0EsSztBLFUsbUM7QSxRLEM7QSxVLFM7QTtBLFksMEtBQ1dDLFcsRUFBQUEsVyxFQUFBQSxXLEU7QSxZLCtDO0EsWSxRO0EsY0FBVixDQUFDQyxrQjtBLGdCLG1DO0EsYyxPLEMsQztBLGtCLE8sRyxNO0Esb0IsUTtBLHNCLEU7QSxzQixHO0Esb0IsQztBLGtCLEU7QSxnQixDLEMsQztBO0EsY0FBc0IsRSxrQixDO0EsWSxFO0EsVSxLO0EsUUFDekIsRSxLLEM7QSxNQUNGLEUsSyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsMEM7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEU7QSxJLG9GLEM7QSxFLEc7QSxBLEs7Ozs7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjExIiwiPDxUPj4yfDE4Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHRhYmxlPlxuICA8dGJvZHk+XG4gICAgPHRyIHYtaXM9XCJNeUNvbXBvbmVudFwiPjwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuXG48L3RlbXBsYXRlPiJdfQ==)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NzgzMgBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG51bSA9IF9fVnVlRFhfX2N0eC5udW0KICBsZXQgc3RyID0gX19WdWVEWF9fY3R4LnN0cgogIGxldCBhcnIgPSBfX1Z1ZURYX19jdHguYXJyCiAgbGV0IG9iaiA9IF9fVnVlRFhfX2N0eC5vYmoKICBsZXQgaXRyID0gX19WdWVEWF9fY3R4Lml0cgogIGxldCBib28gPSBfX1Z1ZURYX19jdHguYm9vCiAgbGV0IHN5bSA9IF9fVnVlRFhfX2N0eC5zeW0KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG51bSwgKG4pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgIHtufSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobnVtLCAobiwgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge259IAogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAgIHtpfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qoc3RyLCAocykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge3N9IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChzdHIsIChzLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7c30gCiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICAge2l9IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsIChhKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7YX0gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKHsgdmFsdWUgfSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge3ZhbHVlfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyBmb28gfSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge2Fycn0gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKGEsIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgIHthfSAKICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgICB7aX0gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKHsgdmFsdWUgfSwgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge3ZhbHVlfSAKICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgICB7aX0gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG9iaiwgKG8pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgIHtvfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobywgaykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge299IAogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAgIHtrfSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobywgaywgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge299IAogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAgIHtrfSAKICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgICB7aX0gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGl0ciwgKHQpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgIHt0fSAKICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYm9vLCAoYikgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICAge2J9IAogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChzeW0sIChzKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgICB7c30gCiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBudW0gPSBfX1Z1ZURYX19jdHgubnVtCiAgbGV0IHN0ciA9IF9fVnVlRFhfX2N0eC5zdHIKICBsZXQgYXJyID0gX19WdWVEWF9fY3R4LmFycgogIGxldCBvYmogPSBfX1Z1ZURYX19jdHgub2JqCiAgbGV0IGl0ciA9IF9fVnVlRFhfX2N0eC5pdHIKICBsZXQgYm9vID0gX19WdWVEWF9fY3R4LmJvbwogIGxldCBzeW0gPSBfX1Z1ZURYX19jdHguc3ltCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgICB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5Qcm9wc09mPEpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiI+LAogICAge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuUHJvcHNPZjxKU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiPiwKICAgIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlByb3BzT2Y8SlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2Ij4sCiAgXSkpCn0pKCk7Ci8vI2VuZHJlZ2lvbgpyZXR1cm4ge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9O307CmNvbnN0IHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fSA9IF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCk7Ci8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzLCB0eXBlb2YgX19WdWVEWF9fX2F0dHJzPiAmIHskc2xvdHM6IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19fc2xvdHM+Pn07Cn0KLy8jZW5kcmVnaW9uCjM0ODUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0EsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDO0EsUSx1Q0FBaUJBLEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUFxQixFQUFHQyxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNQRCxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBMEIsRUFBR0MsQ0FBRSxFO0EsYyxDQUFFQyxHLEM7QSxjQUFDLEVBQUdELENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3pCRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBcUIsRUFBR0MsQ0FBRSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDUEQsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQTBCLEVBQUdDLENBQUUsRTtBLGMsQ0FBRUMsRyxDO0EsY0FBQyxFQUFHRCxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUN6QkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQXFCLEVBQUdDLENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ0pELEcsRSxDQUFiRyxTLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0gsRztBLGMsbUM7QSxZLEM7QSxjQUE2QixFQUFHSSxLQUFNLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNsQkosRyxFLENBQVhLLE8sQyxLO0EsVSxRO0EsWUFBWixDQUFDTCxHO0EsYyxtQztBLFksQztBLGNBQTJCLEVBQUdBLEdBQUksRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ2ZBLEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUEwQixFQUFHQyxDQUFFLEU7QSxjLENBQUVDLEcsQztBLGNBQUMsRUFBR0QsQ0FBRSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDWkQsRyxFLENBQWpCRyxTLEVBQVdGLEMsQyxLO0EsVSxRO0EsWUFBeEIsQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUFrQyxFQUFHSSxLQUFNLEU7QSxjLENBQUVGLEcsQztBLGNBQUMsRUFBR0QsQ0FBRSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDckNELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUFxQixFQUFHQyxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNQRCxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBMEIsRUFBR0MsQ0FBRSxFO0EsYyxDQUFFQyxHLEM7QSxjQUFDLEVBQUdELENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ2pCRCxHLEUsQ0FBWkMsQyxFQUFHQSxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBbkIsQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUE2QixFQUFHQyxDQUFFLEU7QSxjLENBQUVDLEcsQztBLGNBQUMsRUFBR0QsQ0FBRSxFO0EsYyxDQUFFQyxHLEM7QSxjQUFDLEVBQUdELENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3BDRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjLG1DO0EsWSxDO0EsY0FBcUIsRUFBR0MsQ0FBRSxFO0EsWUFBRSxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDWkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsYyxtQztBLFksQztBLGNBQXFCLEVBQUdDLENBQUUsRTtBLFlBQUUsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1pELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGMsbUM7QSxZLEM7QSxjQUFxQixFQUFHQyxDQUFFLEU7QSxZQUFFLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLGtCO0EsQSw2QjtBLEEsNEI7QSxFLDJCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsMEI7QSxFLDBCO0EsRSwwQjtBLEUsZ0M7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7QSxBLGdDO0EsRSxPLGlDLEMsZ0MsRTtBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEksa0YsQztBLEUsRztBLEEsSzs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8UD4+MSIsIjw8VD4+MXwzIiwiPDxQPj45IiwiPDxQPj41IiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWZvcj1cIm4gb2YgbnVtXCI+e3sgbiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihuLCBpKSBvZiBudW1cIj57eyBuIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN0clwiPnt7IHMgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIocywgaSkgb2Ygc3RyXCI+e3sgcyB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYSBvZiBhcnJcIj57eyBhIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyB2YWx1ZSB9IG9mIGFyclwiPnt7IHZhbHVlIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyBmb28gfSBvZiBhcnJcIj57eyBhcnIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoYSwgaSkgb2YgYXJyXCI+e3sgYSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHsgdmFsdWUgfSwgaSkgb2YgYXJyXCI+e3sgdmFsdWUgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIm8gb2Ygb2JqXCI+e3sgbyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaywgaSkgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ0IG9mIGl0clwiPnt7IHQgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJiIG9mIGJvb1wiPnt7IGIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN5bVwiPnt7IHMgfX08L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
          $slots={{
              "default": ({bar}) => {
                return (
                  <>
                    {(() => {

                      const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, bar, bar, bar);
                      if (__VueDX__component == null) throw new Error
                      return (
                        <__VueDX__component
                          /*<vuedx:tsx-completions-target/>*/
                        $slots={{
                            "default": ({baz}) => {
                              return (
                                <>
                                  {(() => {

                                    const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, baz, baz, baz);
                                    if (__VueDX__component == null) throw new Error
                                    return (
                                      <__VueDX__component
                                        /*<vuedx:tsx-completions-target/>*/
                                      $slots={{
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
                                        }}>

                                      </__VueDX__component>
                                    );
                                  })()}
                                </>
                              )
                            },
                          }}>

                        </__VueDX__component>
                      );
                    })()}
                  </>
                )
              },
            }}>

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NjYwOQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgeygoKSA9PiB7CgogICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgZm9vLCBmb28sIGZvbyk7CiAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICByZXR1cm4gKAogICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgJHNsb3RzPXt7CiAgICAgICAgICAgICAgImRlZmF1bHQiOiAoe2Jhcn0pID0+IHsKICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBiYXIsIGJhciwgYmFyKTsKICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgJHNsb3RzPXt7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7YmF6fSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmF6LCBiYXosIGJheik7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xvdHM9e3sKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm90aGVyIjogKHsgZm9vIH0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgZm9vLCBmb28sIGZvbyk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4KCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgImRlZmF1bHQiOiAoeyBiYXIgfSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBiYXIsIGJhciwgYmFyKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPgoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgICB9fT4KCiAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9fT4KCiAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICApOwogICAgICB9KSgpfQogICAgPC8+CiAgKQp9Cl9fVnVlRFhfX3JlbmRlcigpOwovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb28KICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KY29uc3QgX19WdWVEWF9fX2F0dHJzID0gKCgpID0+IHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZpcnN0KF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFt7fV0pKQp9KSgpOwovLyNlbmRyZWdpb24KcmV0dXJuIHtfX1Z1ZURYX19fYXR0cnMsIF9fVnVlRFhfX19zbG90cywgX19WdWVEWF9fY3R4fTt9Owpjb25zdCB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH0gPSBfX1Z1ZURYX19TY3JpcHRTZXR1cF9zY29wZSgpOwovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuTWVyZ2VBdHRyczx0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wcywgdHlwZW9mIF9fVnVlRFhfX19hdHRycz4gJiB7JHNsb3RzOiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj59Owp9Ci8vI2VuZHJlZ2lvbgoxNjAzAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsMEI7QSxFLGdDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sUztBO0EsUSwwS0FBZ0JBLEcsRUFBQUEsRyxFQUFBQSxHLEU7QSxRLCtDO0EsUSxRO0EsVUFBaEIsQ0FBQ0Msa0I7QSxZLG1DO0EsVSxPLEMsQztBLGNBQXFCLFMsR0FBU0MsSyxNO0EsZ0IsUTtBLGtCLEU7QSxvQixTO0E7QSxzQiwwS0FDYkYsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLHNCLCtDO0Esc0IsUTtBLHdCQUFoQixDQUFDQyxrQjtBLDBCLG1DO0Esd0IsTyxDLEM7QSw0QkFBcUIsUyxHQUFTQyxLLE07QSw4QixRO0EsZ0MsRTtBLGtDLFM7QTtBLG9DLDBLQUNiRixHLEVBQUFBLEcsRUFBQUEsRyxFO0Esb0MsK0M7QSxvQyxRO0Esc0NBQWhCLENBQUNDLGtCO0Esd0MsbUM7QSxzQyxPLEMsQztBLDBDQUNZLE8sR0FBT0UsTyxNO0EsNEMsUTtBLDhDLEU7QSxnRCxTO0E7QSxrRCwwS0FDQUgsRyxFQUFBQSxHLEVBQUFBLEcsRTtBLGtELCtDO0Esa0QsUTtBLG9EQUFoQixDQUFDQyxrQjtBLHNELG1DO0Esb0RBQW9CLEU7QTtBLGtELEU7QSxnRCxLO0EsOEMsRztBLDRDLEM7QSwwQyxFO0EsMENBRVosUyxHQUFTRSxPLE07QSw0QyxRO0EsOEMsRTtBLGdELFM7QTtBLGtELDBLQUNGSCxHLEVBQUFBLEcsRUFBQUEsRyxFO0Esa0QsK0M7QSxrRCxRO0Esb0RBQWhCLENBQUNDLGtCO0Esc0QsbUM7QSxvREFBb0IsRTtBO0Esa0QsRTtBLGdELEs7QSw4QyxHO0EsNEMsQztBLDBDLEU7QSx3QyxDLEMsQztBO0Esc0NBRXpCLEUsa0IsQztBLG9DLEU7QSxrQyxLO0EsZ0MsRztBLDhCLEM7QSw0QixFO0EsMEIsQyxDLEM7QTtBLHdCQUNGLEUsa0IsQztBLHNCLEU7QSxvQixLO0Esa0IsRztBLGdCLEM7QSxjLEU7QSxZLEMsQyxDO0E7QSxVQUNGLEUsa0IsQztBLFEsRTtBLE0sSztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDBCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+OXwxOCIsIjw8UD4+NSIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxjb21wb25lbnQgOmlzPVwiZm9vXCIgI2RlZmF1bHQ9XCJ7YmFyfVwiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJhelwiPlxuICAgICAgPHRlbXBsYXRlICNvdGhlcj1cInsgZm9vIH1cIj5cbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJmb29cIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSAjZGVmYXVsdD1cInsgYmFyIH1cIj5cbiAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJiYXJcIiAvPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2NvbXBvbmVudD5cbiAgPC9jb21wb25lbnQ+XG48L2NvbXBvbmVudD5cblxuPC90ZW1wbGF0ZT4iXX0=)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
                $slots={{
                    default: () => {
                      return (
                        <>
                          {(() => {

                            const __VueDX__component = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__GlobalComponents, {} as unknown as JSX.IntrinsicElements, __VueDX__ctx, bar, bar, bar);
                            if (__VueDX__component == null) throw new Error
                            return (
                              <__VueDX__component
                                /*<vuedx:tsx-completions-target/>*/
                              $slots={{
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
                                                  $slots={{
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
                                                    }}>

                                                  </__VueDX__component>
                                                );
                                              })()}
                                            )
                                          })
                                        }
                                      </>
                                    )
                                  },
                                }}>

                              </__VueDX__component>
                            );
                          })()}
                        </>
                      )
                    },
                  }}>

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NjQ5MwBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGJhcnMgPSBfX1Z1ZURYX19jdHguYmFycwogIGxldCAkc2xvdHMgPSBfX1Z1ZURYX19jdHguJHNsb3RzCiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYmFycywgKGJhcikgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgeygoKSA9PiB7CgogICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmFyLCBiYXIsIGJhcik7CiAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgJHNsb3RzPXt7CiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19jb21wb25lbnQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyLCBiYXIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9fVnVlRFhfX2NvbXBvbmVudCA9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19jb21wb25lbnQKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xvdHM9e3sKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJkZWZhdWx0IjogKHtiYXp9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYmF6LCAoaXRlbSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX2NvbXBvbmVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBKU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmF6W2Jhcl0sIGJheltiYXJdLCBiYXpbYmFyXSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfX1Z1ZURYX19jb21wb25lbnQgPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX2NvbXBvbmVudAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xvdHM9e3sKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KCgpID0+IHsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fY29tcG9uZW50ID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIEpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBpdGVtLCBpdGVtLCBpdGVtKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX19WdWVEWF9fY29tcG9uZW50ID09IG51bGwpIHRocm93IG5ldyBFcnJvcgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fY29tcG9uZW50CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPgoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSgpfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fY29tcG9uZW50PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX2NvbXBvbmVudD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgfX0+CgogICAgICAgICAgICAgICAgPC9fX1Z1ZURYX19jb21wb25lbnQ+CiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgfSkoKX0KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICA8Lz4KICApCn0KX19WdWVEWF9fcmVuZGVyKCk7Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYmFycyA9IF9fVnVlRFhfX2N0eC5iYXJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KMTQ0NAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLEM7QSxRLHVDQUFtQ0EsSSxFLENBQVBDLEcsQyxLO0EsVSxRO0EsWSxTO0E7QSxjLDBLQUFaQSxHLEVBQUFBLEcsRUFBQUEsRyxFO0EsYywrQztBLGMsUTtBLGdCQUFoQixDQUFDQyxrQjtBLGtCLG1DO0EsZ0IsTyxDLEM7QSxvQixPLEcsTTtBLHNCLFE7QSx3QixFO0EsMEIsUztBO0EsNEIsMEtBQ2lCRCxHLEVBQUFBLEcsRUFBQUEsRyxFO0EsNEIsK0M7QSw0QixRO0EsOEJBQWhCLENBQUNDLGtCO0EsZ0MsbUM7QSw4QixPLEMsQztBLGtDQUFxQixTLEdBQVNDLEssTTtBLG9DLFE7QSxzQyxFO0Esd0MsQztBLDBDLHVDQUNZRixHLEUsQ0FBUkQsSSxDLEs7QSw0QyxRO0EsOEMsUztBO0EsZ0QsMEtBQWpCSSxRLEVBQUFBLFEsRUFBQUEsUSxFO0EsZ0QsK0M7QSxnRCxRO0Esa0RBQWhCLENBQUNGLGtCO0Esb0QsbUM7QSxrRCxPLEMsQztBLHNELE8sRyxNO0Esd0QsUTtBLDBELEU7QSw0RCxTO0E7QSw4RCwwS0FDaUJGLEksRUFBQUEsSSxFQUFBQSxJLEU7QSw4RCwrQztBLDhELFE7QSxnRUFBaEIsQ0FBQ0Usa0I7QSxrRSxtQztBLGdFQUFxQixFO0E7QSw4RCxFO0EsNEQsSztBLDBELEc7QSx3RCxDO0Esc0QsRTtBLG9ELEMsQyxDO0E7QSxrREFDeEIsRSxrQixDO0EsZ0QsRTtBLDhDLEs7QSw0QyxDO0EsMEMsQyxDO0Esd0MsQztBLHNDLEc7QSxvQyxDO0Esa0MsRTtBLGdDLEMsQyxDO0E7QSw4QkFDRixFLGtCLEM7QSw0QixFO0EsMEIsSztBLHdCLEc7QSxzQixDO0Esb0IsRTtBLGtCLEMsQyxDO0E7QSxnQkFDRixFLGtCLEM7QSxjLEU7QSxZLEs7QSxVLEM7QSxRLEMsQztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsa0I7QSxBLDZCO0EsQSw0QjtBLEUsMkI7QSxFLDRCO0EsRSxnQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4QjtBLEEsZ0M7QSxFLE8saUMsQyxnQyxFLEUsRztBLEEsSzs7Ozs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NCIsIjw8UD4+MyIsIjw8VD4+OXwxOCIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxjb21wb25lbnQgOmlzPVwiYmFyXCIgdi1mb3I9XCJiYXIgb2YgYmFyc1wiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJheltiYXJdXCIgdi1mb3I9XCJpdGVtIG9mIGJhelwiID5cbiAgICAgIDxjb21wb25lbnQgOmlzPVwiaXRlbVwiIC8+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)

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

function __VueDX__ScriptSetup_scope() {
const __VueDX__ScriptSetup_internalProps = {};
const __VueDX__ScriptSetup_ComponentPrivate = __VueDX__defineComponent((_: typeof __VueDX__ScriptSetup_internalProps)=> {});
const __VueDX__ScriptSetup_props = defineProps({});
const __VueDX__ScriptSetup_emits = ({});
class __VueDX__ScriptSetup_Component {
$props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ScriptSetup_props & __VueDX__TypeCheck.internal.EmitsToProps<typeof __VueDX__ScriptSetup_emits>, typeof __VueDX___attrs>;
$slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>;
}

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
      $slots={{
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
        }}>

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
return {__VueDX___attrs, __VueDX___slots, __VueDX__ctx};};
const {__VueDX___attrs, __VueDX___slots, __VueDX__ctx} = __VueDX__ScriptSetup_scope();
//#region public component definition
export default class Example {
  $props = null as unknown as __VueDX__TypeCheck.internal.MergeAttrs<typeof __VueDX__ctx.$props, typeof __VueDX___attrs> & {$slots: __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX___slots>>};
}
//#endregion

```

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mjg3NQBpbXBvcnQgKiBhcyBfX1Z1ZURYX19UeXBlQ2hlY2sgZnJvbSAndnVlZHh+cnVudGltZSc7CmRlY2xhcmUgY29uc3QgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50OiB0eXBlb2YgaW1wb3J0KCJ2dWUiKS5kZWZpbmVDb21wb25lbnQ7CnR5cGUgX19WdWVEWF9fR2xvYmFsQ29tcG9uZW50cyA9IGltcG9ydCgidnVlIikuR2xvYmFsQ29tcG9uZW50czsKLy8jcmVnaW9uIDxzY3JpcHQ+Cgpjb25zdCBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPHNjcmlwdCBzZXR1cD4KCmZ1bmN0aW9uIF9fVnVlRFhfX1NjcmlwdFNldHVwX3Njb3BlKCkgewpjb25zdCBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzID0ge307CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX0NvbXBvbmVudFByaXZhdGUgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoKF86IHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9pbnRlcm5hbFByb3BzKT0+IHt9KTsKY29uc3QgX19WdWVEWF9fU2NyaXB0U2V0dXBfcHJvcHMgPSBkZWZpbmVQcm9wcyh7fSk7CmNvbnN0IF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzID0gKHt9KTsKY2xhc3MgX19WdWVEWF9fU2NyaXB0U2V0dXBfQ29tcG9uZW50IHsKJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5NZXJnZUF0dHJzPHR5cGVvZiBfX1Z1ZURYX19TY3JpcHRTZXR1cF9wcm9wcyAmIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5FbWl0c1RvUHJvcHM8dHlwZW9mIF9fVnVlRFhfX1NjcmlwdFNldHVwX2VtaXRzPiwgdHlwZW9mIF9fVnVlRFhfX19hdHRycz47CiRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fX3Nsb3RzPj47Cn0KCi8vI2VuZHJlZ2lvbgpmdW5jdGlvbiBfX1Z1ZURYX19SZWdpc3RlclNlbGY8VD4oY3R4OiBUKSB7CiAgcmV0dXJuIHsgLi4uY3R4LCBbIkV4YW1wbGUiXTogRXhhbXBsZSB9Cn0KY29uc3QgX19WdWVEWF9fY3R4ID0gX19WdWVEWF9fUmVnaXN0ZXJTZWxmKG5ldyBfX1Z1ZURYX19fU2NyaXB0X0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRhdHRycyA9IF9fVnVlRFhfX2N0eC4kYXR0cnMKICBsZXQgJHNsb3RzID0gX19WdWVEWF9fY3R4LiRzbG90cwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0dsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIF9fVnVlRFhfX19nZXRfaWRlbnRpZmllcl9Gb28oKSwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb28KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAkc2xvdHM9e3sKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgPGlucHV0CiAgICAgICAgICAgICAgICAgIHsuLi4oJGF0dHJzKX0KICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgIC8+CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0+CgogICAgICA8L0Zvbz4KICAgIDwvPgogICkKfQpfX1Z1ZURYX19yZW5kZXIoKTsKLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkYXR0cnMgPSBfX1Z1ZURYX19jdHguJGF0dHJzCiAgbGV0ICRzbG90cyA9IF9fVnVlRFhfX2N0eC4kc2xvdHMKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmNvbnN0IF9fVnVlRFhfX19hdHRycyA9ICgoKSA9PiB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5maXJzdChfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbe31dKSkKfSkoKTsKLy8jZW5kcmVnaW9uCnJldHVybiB7X19WdWVEWF9fX2F0dHJzLCBfX1Z1ZURYX19fc2xvdHMsIF9fVnVlRFhfX2N0eH07fTsKY29uc3Qge19fVnVlRFhfX19hdHRycywgX19WdWVEWF9fX3Nsb3RzLCBfX1Z1ZURYX19jdHh9ID0gX19WdWVEWF9fU2NyaXB0U2V0dXBfc2NvcGUoKTsKLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLk1lcmdlQXR0cnM8dHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHMsIHR5cGVvZiBfX1Z1ZURYX19fYXR0cnM+ICYgeyRzbG90czogX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX19zbG90cz4+fTsKfQovLyNlbmRyZWdpb24KNjM3AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLGdDO0EsRSw0QjtBLEUsMkI7QSxFLE0sRyxrSiw4QixFLGMsRSxjLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBQSxDQUFDQSxHO0EsUSxtQztBLE0sTyxDLEM7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0JBQ0MsQ0FBQ0MsSztBLGtCLEtBQWNDLE0sRTtBLGtCLG1DO0EsZ0JBQVEsRTtBLGMsRztBLFksQztBLFUsRTtBLFEsQyxDLEM7QTtBLE1BQ3pCLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSxrQjtBLEEsNkI7QSxBLDRCO0EsRSwyQjtBLEUsZ0M7QSxFLGdDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCO0EsQSxnQztBLEUsTyxpQyxDLGdDLEUsRSxHO0EsQSxLOzs7Ozs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxQPj41IiwiPDxQPj42Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvbz5cbiAgPGlucHV0IHYtYmluZD1cIiRhdHRyc1wiIC8+XG48L0Zvbz5cblxuPC90ZW1wbGF0ZT4iXX0=)

