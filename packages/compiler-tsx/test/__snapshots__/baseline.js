// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Baseline Spec \\$attrs binding default 1`] = `
## 17.1. \\$attrs binding 

\`\`\`vue-html
<Foo>
  <input v-bind="$attrs" />
</Foo>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $attrs = __VueDX__ctx.$attrs;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const Foo = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, null, "Foo" as const, "Foo" as const);
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $attrs = __VueDX__ctx.$attrs;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTg2MQAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCAkYXR0cnMgPSBfX1Z1ZURYX19jdHguJGF0dHJzOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgbnVsbCwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb28KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvbywgewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICA8aW5wdXQKICAgICAgICAgICAgICAgICAgey4uLigkYXR0cnMpfQogICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9KX0KICAgICAgPC9Gb28+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRhdHRycyA9IF9fVnVlRFhfX2N0eC4kYXR0cnM7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTY5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsaUM7QSxFLDRCO0EsRSwyQjtBLEUsTSxHLG1LLEksRSxjLEUsYyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxHO0EsUUFBRyxtQztBLE0sQztBLFEsQyw2QztBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQkFDRixDQUFDQSxLO0Esa0IsS0FBY0MsTSxFO0Esa0JBQVQsbUM7QSxnQixFO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUNSLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxpQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+NiJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb28+XG4gIDxpbnB1dCB2LWJpbmQ9XCIkYXR0cnNcIiAvPlxuPC9Gb28+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec Dynamic component with v-for default 1`] = `
## 16.1. Dynamic component with v-for 

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
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let bars = __VueDX__ctx.bars;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const __VueDX___Component0 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, bar, bar);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {
        __VueDX__TypeCheck.internal.renderList(bars, (bar) => {
          /*<vuedx:templateGlobals>*/
          const __VueDX___Component1 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, bar, bar);
          /*</vuedx:templateGlobals>*/
          return (
            <__VueDX___Component0
              /*<vuedx:tsx-completions-target/>*/
            >
              {__VueDX__TypeCheck.internal.checkSlots(__VueDX___Component0, {
                default: () => {
                  return (
                    <>
                      <__VueDX___Component1
                        /*<vuedx:tsx-completions-target/>*/
                      >
                        {__VueDX__TypeCheck.internal.checkSlots(__VueDX___Component1, {
                          "default": ({baz}) => {
                            /*<vuedx:templateGlobals>*/
                            const __VueDX___Component2 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, baz[bar], baz[bar]);
                            /*</vuedx:templateGlobals>*/
                            return (
                              <>
                                {
                                  __VueDX__TypeCheck.internal.renderList(baz, (item) => {
                                    /*<vuedx:templateGlobals>*/
                                    const __VueDX___Component3 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, item, item);
                                    /*</vuedx:templateGlobals>*/
                                    return (
                                      <__VueDX___Component2
                                        /*<vuedx:tsx-completions-target/>*/
                                      >
                                        {__VueDX__TypeCheck.internal.checkSlots(__VueDX___Component2, {
                                          default: () => {
                                            return (
                                              <>
                                                <__VueDX___Component3
                                                  /*<vuedx:tsx-completions-target/>*/
                                                />

                                              </>
                                            )
                                          },
                                        })}
                                      </__VueDX___Component2>
                                    )
                                  })
                                }
                              </>
                            )
                          },
                        })}
                      </__VueDX___Component1>
                    </>
                  )
                },
              })}
            </__VueDX___Component0>
          )
        })
      }
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let bars = __VueDX__ctx.bars;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDY0MQAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBiYXJzID0gX19WdWVEWF9fY3R4LmJhcnM7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IF9fVnVlRFhfX19Db21wb25lbnQwID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyKTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChiYXJzLCAoYmFyKSA9PiB7CiAgICAgICAgICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX19Db21wb25lbnQxID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJhciwgYmFyKTsKICAgICAgICAgIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxfX1Z1ZURYX19fQ29tcG9uZW50MAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fX0NvbXBvbmVudDAsIHsKICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX19Db21wb25lbnQxCiAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19fQ29tcG9uZW50MSwgewogICAgICAgICAgICAgICAgICAgICAgICAgICJkZWZhdWx0IjogKHtiYXp9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX19Db21wb25lbnQyID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGJheltiYXJdLCBiYXpbYmFyXSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGJheiwgKGl0ZW0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX19Db21wb25lbnQzID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guR2xvYmFsQ29tcG9uZW50cywge30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCBfX1Z1ZURYX19jdHgsIGl0ZW0sIGl0ZW0pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX19Db21wb25lbnQyCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19fQ29tcG9uZW50MiwgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19fQ29tcG9uZW50MwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9fX1Z1ZURYX19fQ29tcG9uZW50Mj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgIH0pfQogICAgICAgICAgICAgICAgICAgICAgPC9fX1Z1ZURYX19fQ29tcG9uZW50MT4KICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgPC9fX1Z1ZURYX19fQ29tcG9uZW50MD4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGJhcnMgPSBfX1Z1ZURYX19jdHguYmFyczsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxMjcxAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsNkI7QSxFLDRCO0EsRSwyQjtBLEUsTSxvQixtS0FDZ0JBLEcsRUFBQUEsRyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQztBLFEsdUNBQW1CQyxJLEUsQ0FBUEQsRyxDLEs7QSxVLDJCO0EsVSxNLG9CLG1LQUNWQSxHLEVBQUFBLEcsRTtBLFUsNEI7QSxVLFE7QSxZQURsQixDQUFDLG9CO0EsY0FBUyxtQztBLFksQztBLGMsQyw4RDtBLGdCLE8sRyxNO0Esa0IsUTtBLG9CLEU7QSxzQkFDUixDQUFDLG9CO0Esd0JBQVMsbUM7QSxzQixDO0Esd0IsQyw4RDtBLDBCQUFZLFMsR0FBU0UsSyxNO0EsNEIsMkI7QSw0QixNLG9CLG1LQUNiQyxRLEVBQUFBLFEsRTtBLDRCLDRCO0EsNEIsUTtBLDhCLEU7QSxnQyxDO0Esa0MsdUNBQXlCSCxHLEUsQ0FBUkMsSSxDLEs7QSxvQywyQjtBLG9DLE0sb0IsbUtBQ2ZBLEksRUFBQUEsSSxFO0Esb0MsNEI7QSxvQyxRO0Esc0NBRGxCLENBQUMsb0I7QSx3Q0FBUyxtQztBLHNDLEM7QSx3QyxDLDhEO0EsMEMsTyxHLE07QSw0QyxRO0EsOEMsRTtBLGdEQUNSLENBQUMsb0I7QSxrREFBUyxtQztBLGdELEU7QTtBLDhDLEc7QSw0QyxDO0EsMEMsRTtBLHdDLEUsQztBLHNDQUNaLEUsb0IsQztBLG9DLEM7QSxrQyxDLEM7QSxnQyxDO0EsOEIsRztBLDRCLEM7QSwwQixFO0Esd0IsRSxDO0Esc0JBQ0YsRSxvQixDO0Esb0IsRztBLGtCLEM7QSxnQixFO0EsYyxFLEM7QSxZQUNGLEUsb0IsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSw2QjtBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8UD4+NCIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxjb21wb25lbnQgOmlzPVwiYmFyXCIgdi1mb3I9XCJiYXIgb2YgYmFyc1wiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJheltiYXJdXCIgdi1mb3I9XCJpdGVtIG9mIGJhelwiID5cbiAgICAgIDxjb21wb25lbnQgOmlzPVwiaXRlbVwiIC8+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec Nested Dynamic components default 1`] = `
## 15.1. Nested Dynamic components 

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
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const __VueDX___Component0 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, foo, foo);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <__VueDX___Component0
        /*<vuedx:tsx-completions-target/>*/
      >
        {__VueDX__TypeCheck.internal.checkSlots(__VueDX___Component0, {
          "default": ({bar}) => {
            /*<vuedx:templateGlobals>*/
            const __VueDX___Component1 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, bar, bar);
            /*</vuedx:templateGlobals>*/
            return (
              <>
                <__VueDX___Component1
                  /*<vuedx:tsx-completions-target/>*/
                >
                  {__VueDX__TypeCheck.internal.checkSlots(__VueDX___Component1, {
                    "default": ({baz}) => {
                      /*<vuedx:templateGlobals>*/
                      const __VueDX___Component2 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, baz, baz);
                      /*</vuedx:templateGlobals>*/
                      return (
                        <>
                          <__VueDX___Component2
                            /*<vuedx:tsx-completions-target/>*/
                          >
                            {__VueDX__TypeCheck.internal.checkSlots(__VueDX___Component2, {
                              "other": ({ foo }) => {
                                /*<vuedx:templateGlobals>*/
                                const __VueDX___Component3 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, foo, foo);
                                /*</vuedx:templateGlobals>*/
                                return (
                                  <>
                                    <>
                                      <__VueDX___Component3
                                        /*<vuedx:tsx-completions-target/>*/
                                      />

                                    </>
                                  </>
                                )
                              },
                            })}
                          </__VueDX___Component2>
                        </>
                      )
                    },
                  })}
                </__VueDX___Component1>
              </>
            )
          },
        })}
      </__VueDX___Component0>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mzk3NgAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBfX1Z1ZURYX19fQ29tcG9uZW50MCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkdsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBmb28sIGZvbyk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8X19WdWVEWF9fX0NvbXBvbmVudDAKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKF9fVnVlRFhfX19Db21wb25lbnQwLCB7CiAgICAgICAgICAiZGVmYXVsdCI6ICh7YmFyfSkgPT4gewogICAgICAgICAgICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fX0NvbXBvbmVudDEgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgYmFyLCBiYXIpOwogICAgICAgICAgICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19fQ29tcG9uZW50MQogICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fX0NvbXBvbmVudDEsIHsKICAgICAgICAgICAgICAgICAgICAiZGVmYXVsdCI6ICh7YmF6fSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19fQ29tcG9uZW50MiA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkdsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBiYXosIGJheik7CiAgICAgICAgICAgICAgICAgICAgICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19fQ29tcG9uZW50MgogICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoX19WdWVEWF9fX0NvbXBvbmVudDIsIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIm90aGVyIjogKHsgZm9vIH0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19fQ29tcG9uZW50MyA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkdsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBmb28sIGZvbyk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19fQ29tcG9uZW50MwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPgoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX19Db21wb25lbnQyPgogICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICB9KX0KICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fX0NvbXBvbmVudDE+CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvX19WdWVEWF9fX0NvbXBvbmVudDA+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb287CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTI4MwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUsMkI7QSxFLE0sb0IsbUtBQ2dCQSxHLEVBQUFBLEcsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUFoQixDQUFDLG9CO0EsUUFBUyxtQztBLE0sQztBLFEsQyw4RDtBLFVBQVksUyxHQUFTQyxLLE07QSxZLDJCO0EsWSxNLG9CLG1LQUNiRCxHLEVBQUFBLEcsRTtBLFksNEI7QSxZLFE7QSxjLEU7QSxnQkFBaEIsQ0FBQyxvQjtBLGtCQUFTLG1DO0EsZ0IsQztBLGtCLEMsOEQ7QSxvQkFBWSxTLEdBQVNDLEssTTtBLHNCLDJCO0Esc0IsTSxvQixtS0FDYkQsRyxFQUFBQSxHLEU7QSxzQiw0QjtBLHNCLFE7QSx3QixFO0EsMEJBQWhCLENBQUMsb0I7QSw0QkFBUyxtQztBLDBCLEM7QSw0QixDLDhEO0EsOEJBQ0csTyxHQUFPRSxPLE07QSxnQywyQjtBLGdDLE0sb0IsbUtBQ0FGLEcsRUFBQUEsRyxFO0EsZ0MsNEI7QSxnQyxRO0Esa0MsRTtBLG9DLEU7QSxzQ0FBaEIsQ0FBQyxvQjtBLHdDQUFTLG1DO0Esc0MsRTtBO0Esb0MsRztBLGtDLEc7QSxnQyxDO0EsOEIsRTtBLDRCLEUsQztBLDBCQUNaLEUsb0IsQztBLHdCLEc7QSxzQixDO0Esb0IsRTtBLGtCLEUsQztBLGdCQUFBLEUsb0IsQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBQSxFLG9CLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj4zIiwiPDxQPj41IiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGNvbXBvbmVudCA6aXM9XCJmb29cIiAjZGVmYXVsdD1cIntiYXJ9XCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6XCI+XG4gICAgICA8dGVtcGxhdGUgI290aGVyPVwieyBmb28gfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImZvb1wiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBiYXIgfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImJhclwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvY29tcG9uZW50PlxuICA8L2NvbXBvbmVudD5cbjwvY29tcG9uZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec element  components 1`] = `
## 1.3. element > components

\`\`\`vue-html
<FooBar>foo</FooBar>
<Foo.Bar>foo</Foo.Bar>
<Foo.Bar.Baz>foo</Foo.Bar.Baz>
<fooBar>foo</fooBar>
<foo-bar>foo</foo-bar>
<unknown-element>foo</unknown-element>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  const FooBar = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, null, "FooBar" as const, "FooBar" as const);
  const Foo.Bar = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, null, "Foo" as const, "Foo" as const);
  const UnknownElement = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, null, "unknown-element" as const, "UnknownElement" as const);
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
      <foo-bar
        /*<vuedx:tsx-completions-target/>*/
      >
        {"foo"}
      </foo-bar>
      <unknown-element
        /*<vuedx:tsx-completions-target/>*/
      >
        {"foo"}
      </unknown-element>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzEzNwAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvb0JhciA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkdsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBudWxsLCAiRm9vQmFyIiBhcyBjb25zdCwgIkZvb0JhciIgYXMgY29uc3QpOwogIGNvbnN0IEZvby5CYXIgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgbnVsbCwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICBjb25zdCBVbmtub3duRWxlbWVudCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkdsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBudWxsLCAidW5rbm93bi1lbGVtZW50IiBhcyBjb25zdCwgIlVua25vd25FbGVtZW50IiBhcyBjb25zdCk7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvby5CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge19fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja1Nsb3RzKEZvby5CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvby5CYXI+CiAgICAgIDxGb28uQmFyLkJhegogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLkJhci5CYXosIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvby5CYXIuQmF6PgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPGZvby1iYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJmb28ifQogICAgICA8L2Zvby1iYXI+CiAgICAgIDx1bmtub3duLWVsZW1lbnQKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJmb28ifQogICAgICA8L3Vua25vd24tZWxlbWVudD4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyB0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wczsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjExMzUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLDJCO0EsRSxNLE0sbUssSSxFLGlCLEUsaUIsRTtBLEUsTSxPLG1LLEksRSxjLEUsYyxFO0EsRSxNLGMsbUssSSxFLDBCLEUseUIsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUMsTTtBLFFBQU0sbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBQ0EsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTSxDO0EsTUFDWCxDQUFDLE87QSxRQUFPLG1DO0EsTSxDO0EsUSxDLGlEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUNBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE8sQztBLE1BQ1osQ0FBQyxXO0EsUUFBVyxtQztBLE0sQztBLFEsQyxxRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxXLEM7QSxNQUNoQixDQUFDLE07QSxRQUFNLG1DO0EsTSxDO0EsUSxDLGdEO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUNBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBRyxFLE0sQztBLE1BQ1gsQ0FBQ0MsTztBLFFBQU8sbUM7QSxNLEM7QSxRLENBQUNELEssQztBLE1BQUcsRSxPLEM7QSxNQUNaLENBQUNFLGU7QSxRQUFlLG1DO0EsTSxDO0EsUSxDQUFDRixLLEM7QSxNQUFHLEUsZSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8VD4+M3w1IiwiPDxQPj43IiwiPDxQPj4xNSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb29CYXI+Zm9vPC9Gb29CYXI+XG48Rm9vLkJhcj5mb288L0Zvby5CYXI+XG48Rm9vLkJhci5CYXo+Zm9vPC9Gb28uQmFyLkJhej5cbjxmb29CYXI+Zm9vPC9mb29CYXI+XG48Zm9vLWJhcj5mb288L2Zvby1iYXI+XG48dW5rbm93bi1lbGVtZW50PmZvbzwvdW5rbm93bi1lbGVtZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec element  fragment with errors 1`] = `
## 1.2. element > fragment with errors

\`\`\`vue-html
<HelloWorld n />
<span>Name: {{ name + }}</span>
<p v-bind:></p>
<p v-if=""></p>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let name = __VueDX__ctx.name;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const HelloWorld = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, null, "HelloWorld" as const, "HelloWorld" as const);
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let name = __VueDX__ctx.name;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTk2MAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBuYW1lID0gX19WdWVEWF9fY3R4Lm5hbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEhlbGxvV29ybGQgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgbnVsbCwgIkhlbGxvV29ybGQiIGFzIGNvbnN0LCAiSGVsbG9Xb3JsZCIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEhlbGxvV29ybGQKICAgICAgICBuCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KCiAgICAgIDxzcGFuCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiTmFtZTogIn0KICAgICAgICB7bmFtZSArfQogICAgICA8L3NwYW4+CiAgICAgIDxwCiAgICAgICAgey4uLigvKjx2dWVkeDptaXNzaW5nRXhwcmVzc2lvbj4qLyl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICA8L3A+CiAgICAgIHsKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxwCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICA8L3A+CiAgICAgICAgICA8Lz4KICAgICAgICA6IG51bGwKICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBuYW1lID0gX19WdWVEWF9fY3R4Lm5hbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNzUzAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsNkI7QSxFLDRCO0EsRSwyQjtBLEUsTSxVLG1LLEksRSxxQixFLHFCLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDLFU7QSxRQUFXQSxDO0EsUUFBRCxtQztBLE0sRTtBO0EsTUFDWCxDQUFDQyxJO0EsUUFBSSxtQztBLE0sQztBLFEsQ0FBQ0MsUSxDO0EsUUFBTSxDQUFHQyxNQUFNLEM7QSxNQUFHLEUsSSxDO0EsTUFDeEIsQ0FBQ0gsQztBLFEsS0FBUyw2QixFO0EsUUFBUixtQztBLE0sQztBLE1BQVMsRSxDLEM7QSxNLENBQ0ZJLEE7QSxRLEUsRTtBLFlBQVQsQ0FBQ0osQztBLGNBQUMsbUM7QSxZLEM7QSxZQUFTLEUsQyxDO0EsVSxHO0EsTSxRO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSw2QjtBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MSIsIjw8UD4+NCIsIjw8VD4+Nnw4IiwiPDxQPj42IiwiPDxQPj4wIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEhlbGxvV29ybGQgbiAvPlxuPHNwYW4+TmFtZToge3sgbmFtZSArIH19PC9zcGFuPlxuPHAgdi1iaW5kOj48L3A+XG48cCB2LWlmPVwiXCI+PC9wPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec element  single 1`] = `
## 1.1. element > single

\`\`\`vue-html
<div>foo</div>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTEwNAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiZm9vIn0KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgozNzEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEc7QSxRQUFHLG1DO0EsTSxDO0EsUSxDQUFDQyxLLEM7QSxNQUFHLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+M3w1Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdj5mb288L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec element  slots + v-for 1`] = `
## 1.5. element > slots + v-for

\`\`\`vue-html
<div v-for="items of list">
  <slot>fallback content</slot>
  <span v-for="item of items">
    <slot name="other" v-bind="props" :myProp="item">fallback content</slot>
  </span>
</div>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let list = __VueDX__ctx.list;
  let props = __VueDX__ctx.props;
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
                __VueDX__ctx.$slots['default']?.({
                }) ?? (
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
                        __VueDX__ctx.$slots["other"]?.({
                          ...(props),
                          myProp: item,
                        }) ?? (
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let list = __VueDX__ctx.list;
  let props = __VueDX__ctx.props;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
    __VueDX__TypeCheck.internal.flat(
      __VueDX__TypeCheck.internal.renderList(list, (items) => (
        {
          default: {
          },
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

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjkwNQAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsaXN0ID0gX19WdWVEWF9fY3R4Lmxpc3Q7CiAgbGV0IHByb3BzID0gX19WdWVEWF9fY3R4LnByb3BzOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGxpc3QsIChpdGVtcykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBfX1Z1ZURYX19jdHguJHNsb3RzWydkZWZhdWx0J10/Lih7CiAgICAgICAgICAgICAgICB9KSA/PyAoCiAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgeyJmYWxsYmFjayBjb250ZW50In0KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGl0ZW1zLCAoaXRlbSkgPT4gewogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgIDxzcGFuCiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgICAgICAgICAgX19WdWVEWF9fY3R4LiRzbG90c1sib3RoZXIiXT8uKHsKICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICAgICAgICAgICAgICAgIG15UHJvcDogaXRlbSwKICAgICAgICAgICAgICAgICAgICAgICAgfSkgPz8gKAogICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ImZhbGxiYWNrIGNvbnRlbnQifQogICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPgogICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsaXN0ID0gX19WdWVEWF9fY3R4Lmxpc3Q7CiAgbGV0IHByb3BzID0gX19WdWVEWF9fY3R4LnByb3BzOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KAogICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChsaXN0LCAoaXRlbXMpID0+ICgKICAgICAgICB7CiAgICAgICAgICBkZWZhdWx0OiB7CiAgICAgICAgICB9LAogICAgICAgIH0KICAgICAgKSkKICAgICksCiAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdCgKICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobGlzdCwgKGl0ZW1zKSA9PiAoCiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoCiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChpdGVtcywgKGl0ZW0pID0+ICgKICAgICAgICAgICAgewogICAgICAgICAgICAgICJvdGhlciI6IHsKICAgICAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgICAgICBteVByb3A6IGl0ZW0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfQogICAgICAgICAgKSkKICAgICAgICApCiAgICAgICkpCiAgICApLAogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTI2MAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLDZCO0EsRSwrQjtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLEM7QSxRLHVDQUNxQkEsSSxFLENBQVRDLEssQyxLO0EsVSxRO0EsWUFBWixDQUFDQyxHO0EsY0FBRyxtQztBLFksQztBLGMsQztBLGdCLG9CLFMsSztBLGdCLEUsSSxDO0Esa0IsRTtBLG9CLENBQ0lDLGtCLEM7QSxrQixHO0EsZ0IsQztBLGMsQztBLGMsQztBLGdCLHVDQUNlRixLLEUsQ0FBUkQsSSxDLEs7QSxrQixRO0Esb0JBQWIsQ0FBQ0EsSTtBLHNCQUFJLG1DO0Esb0IsQztBLHNCLEM7QSx3QixvQkFDUUksTyxLO0EsMEJBQVEsSUFBUUgsSyxDLEM7QSx3QkFBTyxFQUFDSSxNLEVBQVFMLEksQztBLHdCLEUsSSxDO0EsMEIsRTtBLDRCLENBQU1HLGtCLEM7QSwwQixHO0Esd0IsQztBLHNCLEM7QSxvQkFDbkQsRSxJLEM7QSxrQixDO0EsZ0IsQyxDO0EsYyxDO0EsWUFDRixFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSw2QjtBLEUsK0I7QSxFLDRCO0EsRSwyRTtBLEksZ0MsQztBLE0sc0MsQ0FMcUJILEksRSxDQUFUQyxLLEMsSztBLFEsQztBLFUsTyxFLEM7QSxVLEU7QSxRLEM7QSxNLEU7QSxJLEMsQztBLEksZ0MsQztBLE0sc0MsQ0FBU0QsSSxFLENBQVRDLEssQyxLO0EsUSxnQyxDO0EsVSxzQyxDQUVXQSxLLEUsQ0FBUkQsSSxDLEs7QSxZLEM7QSxjLE8sRSxDO0EsZ0JBQ1EsSUFBUUMsSyxDLEM7QSxjQUFPLEVBQUNJLE0sRUFBUUwsSSxDO0EsYyxFO0EsWSxDO0EsVSxFO0EsUSxDO0EsTSxFO0EsSSxDLEM7QSxFLEc7QSxBLEM7QSxBLDhCOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj40IiwiPDxQPj41IiwiPDxQPj4zIiwiPDxUPj4xNnwxOCIsIjw8UD4+NyIsIjw8UD4+NiJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1mb3I9XCJpdGVtcyBvZiBsaXN0XCI+XG4gIDxzbG90PmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDxzcGFuIHYtZm9yPVwiaXRlbSBvZiBpdGVtc1wiPlxuICAgIDxzbG90IG5hbWU9XCJvdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cIml0ZW1cIj5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8L3NwYW4+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec element  slots 1`] = `
## 1.4. element > slots

\`\`\`vue-html
<div>
  <slot>fallback content</slot>
  <span>
    <slot name="other" v-bind="props" :myProp="value">fallback content</slot>
  </span>
  <slot name="another" v-bind="props" :myProp="value"></slot>
  <slot :name="dynamic" v-bind="props" :myProp="value" />
</div>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let props = __VueDX__ctx.props;
  let value = __VueDX__ctx.value;
  let dynamic = __VueDX__ctx.dynamic;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        /*<vuedx:tsx-completions-target/>*/
      >
        {
          __VueDX__ctx.$slots['default']?.({
          }) ?? (
            <>
              {"fallback content"}
            </>
          )
        }
        <span
          /*<vuedx:tsx-completions-target/>*/
        >
          {
            __VueDX__ctx.$slots["other"]?.({
              ...(props),
              myProp: value,
            }) ?? (
              <>
                {"fallback content"}
              </>
            )
          }
        </span>
        {
          __VueDX__ctx.$slots["another"]?.({
            ...(props),
            myProp: value,
          })}
        {
          __VueDX__ctx.$slots["name"]?.({
            ...(props),
            myProp: value,
          })}
      </div>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let props = __VueDX__ctx.props;
  let value = __VueDX__ctx.value;
  let dynamic = __VueDX__ctx.dynamic;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
    {
      default: {
      },
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

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQyNQAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wczsKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWU7CiAgbGV0IGR5bmFtaWMgPSBfX1Z1ZURYX19jdHguZHluYW1pYzsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxkaXYKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgewogICAgICAgICAgX19WdWVEWF9fY3R4LiRzbG90c1snZGVmYXVsdCddPy4oewogICAgICAgICAgfSkgPz8gKAogICAgICAgICAgICA8PgogICAgICAgICAgICAgIHsiZmFsbGJhY2sgY29udGVudCJ9CiAgICAgICAgICAgIDwvPgogICAgICAgICAgKQogICAgICAgIH0KICAgICAgICA8c3BhbgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7CiAgICAgICAgICAgIF9fVnVlRFhfX2N0eC4kc2xvdHNbIm90aGVyIl0/Lih7CiAgICAgICAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICAgICAgICB9KSA/PyAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiZmFsbGJhY2sgY29udGVudCJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0KICAgICAgICA8L3NwYW4+CiAgICAgICAgewogICAgICAgICAgX19WdWVEWF9fY3R4LiRzbG90c1siYW5vdGhlciJdPy4oewogICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICAgICAgfSl9CiAgICAgICAgewogICAgICAgICAgX19WdWVEWF9fY3R4LiRzbG90c1sibmFtZSJdPy4oewogICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICBteVByb3A6IHZhbHVlLAogICAgICAgICAgfSl9CiAgICAgIDwvZGl2PgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wczsKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWU7CiAgbGV0IGR5bmFtaWMgPSBfX1Z1ZURYX19jdHguZHluYW1pYzsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgICB7CiAgICAgIGRlZmF1bHQ6IHsKICAgICAgfSwKICAgIH0sCiAgICB7CiAgICAgICJvdGhlciI6IHsKICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgIH0sCiAgICB9LAogICAgewogICAgICAiYW5vdGhlciI6IHsKICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgIH0sCiAgICB9LAogICAgewogICAgICBbZHluYW1pY106IHsKICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgIG15UHJvcDogdmFsdWUsCiAgICAgIH0sCiAgICB9LAogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTM5NAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLCtCO0EsRSwrQjtBLEUsbUM7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxHO0EsUUFBRyxtQztBLE0sQztBLFEsQztBLFUsb0IsUyxLO0EsVSxFLEksQztBLFksRTtBLGMsQ0FDSUMsa0IsQztBLFksRztBLFUsQztBLFEsQztBLFFBQ04sQ0FBQ0MsSTtBLFVBQUksbUM7QSxRLEM7QSxVLEM7QSxZLG9CQUNRQyxPLEs7QSxjQUFRLElBQVFDLEssQyxDO0EsWUFBTyxFQUFDQyxNLEVBQVFELEssQztBLFksRSxJLEM7QSxjLEU7QSxnQixDQUFPSCxrQixDO0EsYyxHO0EsWSxDO0EsVSxDO0EsUUFDcEQsRSxJLEM7QSxRLEM7QSxVLG9CQUNXSyxTLEs7QSxZQUFVLElBQVFGLEssQyxDO0EsVUFBTyxFQUFDQyxNLEVBQVFELEssQztBLFUsRSxDO0EsUSxDO0EsVSxvQkFDdENHLE0sSztBLFlBQWUsSUFBUUgsSyxDLEM7QSxVQUFPLEVBQUNDLE0sRUFBUUQsSyxDO0EsVSxFLEM7QSxNQUNoRCxFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsK0I7QSxFLCtCO0EsRSxtQztBLEUsNEI7QSxFLDJFO0EsSSxDO0EsTSxPLEUsQztBLE0sRTtBLEksQyxDO0EsSSxDO0EsTSxPLEUsQztBLFFBSnVCLElBQVFBLEssQyxDO0EsTUFBTyxFQUFDQyxNLEVBQVFELEssQztBLE0sRTtBLEksQyxDO0EsSSxDO0EsTSxTLEUsQztBLFFBRXhCLElBQVFBLEssQyxDO0EsTUFBTyxFQUFDQyxNLEVBQVFELEssQztBLE0sRTtBLEksQyxDO0EsSSxDO0EsTSxDQUNoQ0QsTyxDLEUsQztBLFFBQVMsSUFBUUMsSyxDLEM7QSxNQUFPLEVBQUNDLE0sRUFBUUQsSyxDO0EsTSxFO0EsSSxDLEM7QSxFLEc7QSxBLEM7QSxBLDhCOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj4xNnwxOCIsIjw8UD4+NCIsIjw8UD4+NyIsIjw8UD4+NSIsIjw8UD4+NiIsIjw8UD4+OSIsIjw8VD4+NHw2Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdj5cbiAgPHNsb3Q+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPHNwYW4+XG4gICAgPHNsb3QgbmFtZT1cIm90aGVyXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIj5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8L3NwYW4+XG4gIDxzbG90IG5hbWU9XCJhbm90aGVyXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIj48L3Nsb3Q+XG4gIDxzbG90IDpuYW1lPVwiZHluYW1pY1wiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cInZhbHVlXCIgLz5cbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-bind default 1`] = `
## 2.1. v-bind 

\`\`\`vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let myInput = __VueDX__ctx.myInput;
  let customName = __VueDX__ctx.customName;
  let rest = __VueDX__ctx.rest;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const Foo = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, null, "Foo" as const, "Foo" as const);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        "value"={myInput}
        {...({[customName]: myInput})}
        {...(rest)}
        /*<vuedx:tsx-completions-target/>*/
      />
      <Foo
        "value"={myInput}
        {...({[customName]: myInput})}
        {...(rest)}
        /*<vuedx:tsx-completions-target/>*/
      />

    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let myInput = __VueDX__ctx.myInput;
  let customName = __VueDX__ctx.customName;
  let rest = __VueDX__ctx.rest;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTkzNwAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBteUlucHV0ID0gX19WdWVEWF9fY3R4Lm15SW5wdXQ7CiAgbGV0IGN1c3RvbU5hbWUgPSBfX1Z1ZURYX19jdHguY3VzdG9tTmFtZTsKICBsZXQgcmVzdCA9IF9fVnVlRFhfX2N0eC5yZXN0OwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBGb28gPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgbnVsbCwgIkZvbyIgYXMgY29uc3QsICJGb28iIGFzIGNvbnN0KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgICJ2YWx1ZSI9e215SW5wdXR9CiAgICAgICAgey4uLih7W2N1c3RvbU5hbWVdOiBteUlucHV0fSl9CiAgICAgICAgey4uLihyZXN0KX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8Rm9vCiAgICAgICAgInZhbHVlIj17bXlJbnB1dH0KICAgICAgICB7Li4uKHtbY3VzdG9tTmFtZV06IG15SW5wdXR9KX0KICAgICAgICB7Li4uKHJlc3QpfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBteUlucHV0ID0gX19WdWVEWF9fY3R4Lm15SW5wdXQ7CiAgbGV0IGN1c3RvbU5hbWUgPSBfX1Z1ZURYX19jdHguY3VzdG9tTmFtZTsKICBsZXQgcmVzdCA9IF9fVnVlRFhfX2N0eC5yZXN0OwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyB0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wczsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjc2MQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLG1DO0EsRSx5QztBLEUsNkI7QSxFLDRCO0EsRSwyQjtBLEUsTSxHLG1LLEksRSxjLEUsYyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsSztBLFFBQU9DLE8sQyxDQUFPQyxPLEM7QSxRLE9BQVdDLFUsQyxFQUFhRCxPLEc7QSxRLEtBQWlCRSxJLEU7QSxRQUFsRCxtQztBLE0sRTtBLE1BQ04sQ0FBQyxHO0EsUUFBS0gsTyxDLENBQU9DLE8sQztBLFEsT0FBV0MsVSxDLEVBQWFELE8sRztBLFEsS0FBaUJFLEksRTtBLFFBQWxELG1DO0EsTSxFO0E7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLG1DO0EsRSx5QztBLEUsNkI7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFQ+PjV8NyIsIjw8UD4+NyIsIjw8UD4+MTAiLCI8PFA+PjQiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgOnZhbHVlPVwibXlJbnB1dFwiIDpbY3VzdG9tTmFtZV09XCJteUlucHV0XCIgdi1iaW5kPVwicmVzdFwiIC8+XG48Rm9vIDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-for default 1`] = `
## 14.1. v-for 

\`\`\`vue-html
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
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let num = __VueDX__ctx.num;
  let str = __VueDX__ctx.str;
  let arr = __VueDX__ctx.arr;
  let obj = __VueDX__ctx.obj;
  let itr = __VueDX__ctx.itr;
  let boo = __VueDX__ctx.boo;
  let sym = __VueDX__ctx.sym;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let num = __VueDX__ctx.num;
  let str = __VueDX__ctx.str;
  let arr = __VueDX__ctx.arr;
  let obj = __VueDX__ctx.obj;
  let itr = __VueDX__ctx.itr;
  let boo = __VueDX__ctx.boo;
  let sym = __VueDX__ctx.sym;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NTQyOAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBudW0gPSBfX1Z1ZURYX19jdHgubnVtOwogIGxldCBzdHIgPSBfX1Z1ZURYX19jdHguc3RyOwogIGxldCBhcnIgPSBfX1Z1ZURYX19jdHguYXJyOwogIGxldCBvYmogPSBfX1Z1ZURYX19jdHgub2JqOwogIGxldCBpdHIgPSBfX1Z1ZURYX19jdHguaXRyOwogIGxldCBib28gPSBfX1Z1ZURYX19jdHguYm9vOwogIGxldCBzeW0gPSBfX1Z1ZURYX19jdHguc3ltOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG51bSwgKG4pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge259CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG51bSwgKG4sIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge259CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qoc3RyLCAocykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7c30KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qoc3RyLCAocywgaSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7c30KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtpfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsIChhKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHthfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsICh7IHZhbHVlIH0pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3ZhbHVlfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsICh7IGZvbyB9KSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHthcnJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKGEsIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2F9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyB2YWx1ZSB9LCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHt2YWx1ZX0KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtpfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChvYmosIChvKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtvfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChvYmosIChvLCBrKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtvfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2t9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG9iaiwgKG8sIGssIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge299CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7a30KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtpfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChpdHIsICh0KSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHt0fQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChib28sIChiKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtifQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChzeW0sIChzKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtzfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG51bSA9IF9fVnVlRFhfX2N0eC5udW07CiAgbGV0IHN0ciA9IF9fVnVlRFhfX2N0eC5zdHI7CiAgbGV0IGFyciA9IF9fVnVlRFhfX2N0eC5hcnI7CiAgbGV0IG9iaiA9IF9fVnVlRFhfX2N0eC5vYmo7CiAgbGV0IGl0ciA9IF9fVnVlRFhfX2N0eC5pdHI7CiAgbGV0IGJvbyA9IF9fVnVlRFhfX2N0eC5ib287CiAgbGV0IHN5bSA9IF9fVnVlRFhfX2N0eC5zeW07CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMzMzMwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQztBLFEsdUNBQ2lCQSxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDUEQsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQXVCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUN6QkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1BELEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUF1QixDQUFHQyxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDekJELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNKRCxHLEUsQ0FBYkcsUyxDLEs7QSxVLFE7QSxZQUFaLENBQUNILEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBMEIsQ0FBR0ksS0FBSyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDbEJKLEcsRSxDQUFYSyxPLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0wsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUF3QixDQUFHQSxHQUFHLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNmQSxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBdUIsQ0FBR0MsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1pELEcsRSxDQUFqQkcsUyxFQUFXRixDLEMsSztBLFUsUTtBLFlBQXhCLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBK0IsQ0FBR0ksS0FBSyxDO0EsYyxDQUFHRixHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3JDRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDUEQsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQXVCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNqQkQsRyxFLENBQVpDLEMsRUFBR0EsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQW5CLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBMEIsQ0FBR0MsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNwQ0QsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1pELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsbUM7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNaRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLG1DO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8UD4+MSIsIjw8VD4+MXwzIiwiPDxQPj45IiwiPDxQPj41IiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWZvcj1cIm4gb2YgbnVtXCI+e3sgbiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihuLCBpKSBvZiBudW1cIj57eyBuIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN0clwiPnt7IHMgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIocywgaSkgb2Ygc3RyXCI+e3sgcyB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYSBvZiBhcnJcIj57eyBhIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyB2YWx1ZSB9IG9mIGFyclwiPnt7IHZhbHVlIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyBmb28gfSBvZiBhcnJcIj57eyBhcnIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoYSwgaSkgb2YgYXJyXCI+e3sgYSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHsgdmFsdWUgfSwgaSkgb2YgYXJyXCI+e3sgdmFsdWUgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIm8gb2Ygb2JqXCI+e3sgbyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaywgaSkgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ0IG9mIGl0clwiPnt7IHQgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJiIG9mIGJvb1wiPnt7IGIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN5bVwiPnt7IHMgfX08L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-html default 1`] = `
## 7.1. v-html 

\`\`\`vue-html
<div v-html="html"></div>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let html = __VueDX__ctx.html;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let html = __VueDX__ctx.html;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTI5OQAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBodG1sID0gX19WdWVEWF9fY3R4Lmh0bWw7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgaW5uZXJIVE1MPXtodG1sfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGh0bWwgPSBfX1Z1ZURYX19jdHguaHRtbDsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo0NDMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLDJCO0EsRSw2QjtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEc7QSxRQUFNQyxTLEMsQ0FBTUMsSSxDO0EsUUFBVCxtQztBLE0sQztBLE1BQWUsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDZCO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj40fDkiLCI8PFA+PjQiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaHRtbD1cImh0bWxcIj48L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  elif no if 1`] = `
## 5.8. v-if/v-else/v-else-if > elif no if

\`\`\`vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTQwNwAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICA8L2gxPgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJPaCBubyDwn5iiIn0KICAgICAgPC9oMT4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyB0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wczsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjU0NgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLG1DO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRTtBLFFBQUUsbUM7QSxNLEM7QSxRLENBQXFCQyxpQixDO0EsTUFBZSxFLEUsQztBLE1BQ3ZDLENBQUNELEU7QSxRQUFFLG1DO0EsTSxDO0EsUSxDQUFRRSxVLEM7QSxNQUFRLEUsRSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxtQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+MTV8MTciLCI8PFQ+Pjh8MTAiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1lbHNlLWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG48aDEgdi1lbHNlPk9oIG5vIPCfmKI8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  else condition 1`] = `
## 5.7. v-if/v-else/v-else-if > else condition

\`\`\`vue-html
<h1 v-else="ok">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTI5MgAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vazsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxoMQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgIDwvaDE+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyB0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wczsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjQ0MAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLHlCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRTtBLFFBQUUsbUM7QSxNLEM7QSxRLENBQWFDLGlCLEM7QSxNQUFlLEUsRSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSx5QjtBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+MTV8MTciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1lbHNlPVwib2tcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  if condition 1`] = `
## 5.6. v-if/v-else/v-else-if > if condition

\`\`\`vue-html
<h1 v-if>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTE3NgAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIHJldHVybiAoCiAgICA8PgogICAgICB7PD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICB9CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo0MDkAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLFE7QSxJLEU7QSxNLEMsRTtBLFlBQ0EsQ0FBQ0EsRTtBLGNBQUUsbUM7QSxZLEM7QSxjLENBQU1DLGlCLEM7QSxZQUFlLEUsRSxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+MTV8MTciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1pZj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  if on fragment 1`] = `
## 5.3. v-if/v-else/v-else-if > if on fragment

\`\`\`vue-html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTYyNAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vazsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHtvawogICAgICAgID8gPD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVGl0bGUifQogICAgICAgICAgICA8L2gxPgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlBhcmFncmFwaCAxIn0KICAgICAgICAgICAgPC9wPgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlBhcmFncmFwaCAyIn0KICAgICAgICAgICAgPC9wPgogICAgICAgICAgPC8+CiAgICAgICAgOiBudWxsCiAgICAgIH0KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2s7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNjczAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUseUI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUNnQkEsRTtBLFEsRSxFO0EsWUFDZCxDQUFDQSxFO0EsY0FBRSxtQztBLFksQztBLGMsQ0FBQ0MsTyxDO0EsWUFBSyxFLEUsQztBLFlBQ1QsQ0FBQ0MsQztBLGNBQUMsbUM7QSxZLEM7QSxjLENBQUNDLGEsQztBLFlBQVcsRSxDLEM7QSxZQUNkLENBQUNELEM7QSxjQUFDLG1DO0EsWSxDO0EsYyxDQUFDQyxhLEM7QSxZQUFXLEUsQyxDO0EsVSxHO0EsTSxRO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSx5QjtBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MiIsIjw8VD4+NXw3IiwiPDxQPj4xIiwiPDxUPj4xMXwxMyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjx0ZW1wbGF0ZSB2LWlmPVwib2tcIj5cbiAgPGgxPlRpdGxlPC9oMT5cbiAgPHA+UGFyYWdyYXBoIDE8L3A+XG4gIDxwPlBhcmFncmFwaCAyPC9wPlxuPC90ZW1wbGF0ZT5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  if/else 1`] = `
## 5.2. v-if/v-else/v-else-if > if/else

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTU0NAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7YXdlc29tZQogICAgICAgID8gPD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICAgIDogPD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiT2ggbm8g8J+YoiJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTk2AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsbUM7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUNVQSxPO0EsUSxFLEU7QSxZQUFWLENBQUNDLEU7QSxjQUFFLG1DO0EsWSxDO0EsYyxDQUFnQkMsaUIsQztBLFlBQWUsRSxFLEM7QSxVLEc7QSxRLEUsRTtBLFlBQ2xDLENBQUNELEU7QSxjQUFFLG1DO0EsWSxDO0EsYyxDQUFRRSxVLEM7QSxZQUFRLEUsRSxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxtQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NyIsIjw8UD4+MiIsIjw8VD4+MTV8MTciLCI8PFQ+Pjh8MTAiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aDEgdi1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuPGgxIHYtZWxzZT5PaCBubyDwn5iiPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  if/else/if chain 1`] = `
## 5.4. v-if/v-else/v-else-if > if/else/if chain

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
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTg3NgAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCB0eXBlID0gX19WdWVEWF9fY3R4LnR5cGU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7dHlwZSA9PT0gJ0EnCiAgICAgICAgPyA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiIEEgIn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IHR5cGUgPT09ICdCJwogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBCICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiB0eXBlID09PSAnQycKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyIgQyAifQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvPgogICAgICAgIDogPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBOb3QgQS9CL0MgIn0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCB0eXBlID0gX19WdWVEWF9fY3R4LnR5cGU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KODczAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsNkI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUNXQSxZO0EsUSxFLEU7QSxZQUFYLENBQUNDLEc7QSxjQUFHLG1DO0EsWSxDO0EsYyxDQUFxQkMsSyxDO0EsWUFFekIsRSxHLEM7QSxVLEc7QSxRLEVBQ2dCRixZO0EsUSxFLEU7QSxZQUFoQixDQUFDQyxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FBMEJDLEssQztBLFlBRTlCLEUsRyxDO0EsVSxHO0EsUSxFQUNnQkYsWTtBLFEsRSxFO0EsWUFBaEIsQ0FBQ0MsRztBLGNBQUcsbUM7QSxZLEM7QSxjLENBQTBCQyxLLEM7QSxZQUU5QixFLEcsQztBLFUsRztBLFEsRSxFO0EsWUFDQSxDQUFDRCxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FBUUUsYSxDO0EsWUFFWixFLEcsQztBLFUsRztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsNkI7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjEyIiwiPDxQPj4zIiwiPDxUPj41fDUiLCI8PFQ+PjEzfDEzIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwidHlwZSA9PT0gJ0EnXCI+XG4gIEFcbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJ0eXBlID09PSAnQidcIj5cbiAgQlxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdDJ1wiPlxuICBDXG48L2Rpdj5cbjxkaXYgdi1lbHNlPlxuICBOb3QgQS9CL0NcbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  nested if/else chains 1`] = `
## 5.9. v-if/v-else/v-else-if > nested if/else chains

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
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let bar = __VueDX__ctx.bar;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let bar = __VueDX__ctx.bar;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzQxNAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIGxldCBiYXIgPSBfX1Z1ZURYX19jdHguYmFyOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge2ZvbwogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiBiYXIKICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IGJhcgogICAgICAgID8gPD4KICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiBiYXIKICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2ZvbwogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogYmFyCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbzsKICBsZXQgYmFyID0gX19WdWVEWF9fY3R4LmJhcjsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxNTU4AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FDV0EsRztBLFEsRSxFO0EsWUFBWCxDQUFDQSxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FDU0EsRztBLGdCLEUsRTtBLG9CQUFYLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBWSxFLEcsQztBLGtCLEc7QSxnQixFQUNBQSxHO0EsZ0IsRSxFO0Esb0JBQWhCLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBaUIsRSxHLEM7QSxrQixHO0EsZ0IsRSxFO0Esb0JBQ3JCLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBUSxFLEcsQztBLGtCLEc7QSxjLEM7QSxZQUNkLEUsRyxDO0EsVSxHO0EsUSxFQUNnQkEsRztBLFEsRSxFO0EsWUFBaEIsQ0FBQ0EsRztBLGNBQUcsbUM7QSxZLEM7QSxjLENBQ1NBLEc7QSxnQixFLEU7QSxvQkFBWCxDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQVksRSxHLEM7QSxrQixHO0EsZ0IsRUFDQUEsRztBLGdCLEUsRTtBLG9CQUFoQixDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQWlCLEUsRyxDO0Esa0IsRztBLGdCLEUsRTtBLG9CQUNyQixDQUFDQSxHO0Esc0JBQUcsbUM7QSxvQixDO0Esb0JBQVEsRSxHLEM7QSxrQixHO0EsYyxDO0EsWUFDZCxFLEcsQztBLFUsRztBLFEsRSxFO0EsWUFDQSxDQUFDQSxHO0EsY0FBRyxtQztBLFksQztBLGMsQ0FDU0EsRztBLGdCLEUsRTtBLG9CQUFYLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBWSxFLEcsQztBLGtCLEc7QSxnQixFQUNBQSxHO0EsZ0IsRSxFO0Esb0JBQWhCLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBaUIsRSxHLEM7QSxrQixHO0EsZ0IsRSxFO0Esb0JBQ3JCLENBQUNBLEc7QSxzQkFBRyxtQztBLG9CLEM7QSxvQkFBUSxFLEcsQztBLGtCLEc7QSxjLEM7QSxZQUNkLEUsRyxDO0EsVSxHO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IHYtaWY9XCJmb29cIj5cbiAgPGRpdiB2LWlmPVwiZm9vXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlPjwvZGl2PlxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cImJhclwiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  no if 1`] = `
## 5.5. v-if/v-else/v-else-if > no if

\`\`\`vue-html
<h1 v-else>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTExNAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMzkxAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxFO0EsUUFBRSxtQztBLE0sQztBLFEsQ0FBUUMsaUIsQztBLE1BQWUsRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWVsc2U+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  single if statement 1`] = `
## 5.1. v-if/v-else/v-else-if > single if statement

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTQwNwAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7YXdlc29tZQogICAgICAgID8gPD4KICAgICAgICAgICAgPGgxCiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICAgIDogbnVsbAogICAgICB9CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo0OTEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLDJCO0EsRSxtQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQ1VBLE87QSxRLEUsRTtBLFlBQVYsQ0FBQ0MsRTtBLGNBQUUsbUM7QSxZLEM7QSxjLENBQWdCQyxpQixDO0EsWUFBZSxFLEUsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsbUM7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjciLCI8PFA+PjIiLCI8PFQ+PjE1fDE3Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-is default 1`] = `
## 13.1. v-is 

\`\`\`vue-html
<table>
  <tbody>
    <tr v-is="MyComponent"></tr>
  </tbody>
</table>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let MyComponent = __VueDX__ctx.MyComponent;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const __VueDX___Component0 = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, MyComponent, MyComponent);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <table
        /*<vuedx:tsx-completions-target/>*/
      >
        <tbody
          /*<vuedx:tsx-completions-target/>*/
        >
          <__VueDX___Component0
            /*<vuedx:tsx-completions-target/>*/
          >
            {__VueDX__TypeCheck.internal.checkSlots(__VueDX___Component0, {
              default: () => {
                return (
                  <>
                  </>
                )
              },
            })}
          </__VueDX___Component0>
        </tbody>
      </table>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let MyComponent = __VueDX__ctx.MyComponent;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjAyNQAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBNeUNvbXBvbmVudCA9IF9fVnVlRFhfX2N0eC5NeUNvbXBvbmVudDsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgX19WdWVEWF9fX0NvbXBvbmVudDAgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudCh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5HbG9iYWxDb21wb25lbnRzLCB7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsIF9fVnVlRFhfX2N0eCwgTXlDb21wb25lbnQsIE15Q29tcG9uZW50KTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDx0YWJsZQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8dGJvZHkKICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgPF9fVnVlRFhfX19Db21wb25lbnQwCiAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICA+CiAgICAgICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhfX1Z1ZURYX19fQ29tcG9uZW50MCwgewogICAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIH0pfQogICAgICAgICAgPC9fX1Z1ZURYX19fQ29tcG9uZW50MD4KICAgICAgICA8L3Rib2R5PgogICAgICA8L3RhYmxlPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBNeUNvbXBvbmVudCA9IF9fVnVlRFhfX2N0eC5NeUNvbXBvbmVudDsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo2NTQAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLDJCO0EsRSwyQztBLEUsNEI7QSxFLDJCO0EsRSxNLG9CLG1LQUdjQSxXLEVBQUFBLFcsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUZkLENBQUNDLEs7QSxRQUFLLG1DO0EsTSxDO0EsUUFDSixDQUFDQSxLO0EsVUFBSyxtQztBLFEsQztBLFVBQ0osQ0FBQyxvQjtBLFlBQUUsbUM7QSxVLEM7QSxZLEMsOEQ7QSxjLE8sRyxNO0EsZ0IsUTtBLGtCLEU7QSxrQixHO0EsZ0IsQztBLGMsRTtBLFksRSxDO0EsVUFBb0IsRSxvQixDO0EsUUFDekIsRSxLLEM7QSxNQUNGLEUsSyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSwyQztBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MTEiLCI8PFA+PjUiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48dGFibGU+XG4gIDx0Ym9keT5cbiAgICA8dHIgdi1pcz1cIk15Q29tcG9uZW50XCI+PC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-model  checkbox 1`] = `
## 9.3. v-model > checkbox

\`\`\`vue-html
<input type="checkbox" v-model="foo" />
<input type="checkbox" v-model="foo" true-value="yes" />
<input type="checkbox" v-model="foo" false-value="no" />
<input type="checkbox" v-model="foo" :true-value="yes" :false-value="no" />
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let yes = __VueDX__ctx.yes;
  let no = __VueDX__ctx.no;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        type="checkbox"
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="checkbox"
        true-value="yes"
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="checkbox"
        false-value="no"
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="checkbox"
        "true-value"={yes}
        "false-value"={no}
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let yes = __VueDX__ctx.yes;
  let no = __VueDX__ctx.no;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTc3NAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIGxldCB5ZXMgPSBfX1Z1ZURYX19jdHgueWVzOwogIGxldCBubyA9IF9fVnVlRFhfX2N0eC5ubzsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIHRydWUtdmFsdWU9InllcyIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBmYWxzZS12YWx1ZT0ibm8iCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgInRydWUtdmFsdWUiPXt5ZXN9CiAgICAgICAgImZhbHNlLXZhbHVlIj17bm99CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbzsKICBsZXQgeWVzID0gX19WdWVEWF9fY3R4LnllczsKICBsZXQgbm8gPSBfX1Z1ZURYX19jdHgubm87CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KOTY5AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSx5QjtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUFOLG1DO0EsTSxFO0EsTUFDTixDQUFDRixLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBeUJBLFUsQ0FBV0YsSztBLFFBQTFDLG1DO0EsTSxFO0EsTUFDTixDQUFDQSxLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBeUJDLFcsQ0FBWUYsSTtBLFFBQTNDLG1DO0EsTSxFO0EsTUFDTixDQUFDRCxLO0EsUUFBTUMsSSxDQUFLQyxVO0EsUUFBMEJFLFksQyxDQUFZQyxHLEM7QSxRQUFNQyxhLEMsQ0FBYUMsRSxDO0EsUUFBL0QsbUM7QSxNLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUseUI7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjQiLCI8PFA+PjEwIiwiPDxQPj4xMSIsIjw8VD4+MTB8MTIiLCI8PFA+PjMiLCI8PFQ+PjExfDEzIiwiPDxQPj4yIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiB0cnVlLXZhbHVlPVwieWVzXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgZmFsc2UtdmFsdWU9XCJub1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIDp0cnVlLXZhbHVlPVwieWVzXCIgOmZhbHNlLXZhbHVlPVwibm9cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-model  input 1`] = `
## 9.1. v-model > input

\`\`\`vue-html
<input v-model="foo" />
<input type="number" v-model="foo" />
<input type="tel" v-model="foo" />
<input type="checkbox" v-model="foo" />
<input type="radio" v-model="foo" />
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="number"
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="tel"
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="checkbox"
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        type="radio"
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTYxMAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0ibnVtYmVyIgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9InRlbCIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJyYWRpbyIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyB0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wczsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjc4OQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsSztBLFFBQUssbUM7QSxNLEU7QSxNQUNOLENBQUNBLEs7QSxRQUFNQyxJLENBQUtDLFE7QSxRQUFOLG1DO0EsTSxFO0EsTUFDTixDQUFDRixLO0EsUUFBTUMsSSxDQUFLRCxLO0EsUUFBTixtQztBLE0sRTtBLE1BQ04sQ0FBQ0EsSztBLFFBQU1DLEksQ0FBS0UsVTtBLFFBQU4sbUM7QSxNLEU7QSxNQUNOLENBQUNILEs7QSxRQUFNQyxJLENBQUtHLE87QSxRQUFOLG1DO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSwyQjtBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+NCIsIjw8UD4+OCIsIjw8UD4+MTAiLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cIm51bWJlclwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJ0ZWxcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwicmFkaW9cIiB2LW1vZGVsPVwiZm9vXCIgLz5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-model  select 1`] = `
## 9.4. v-model > select

\`\`\`vue-html
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
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let baz = __VueDX__ctx.baz;
  let vals = __VueDX__ctx.vals;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <select
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
          "value"={baz}
          /*<vuedx:tsx-completions-target/>*/
        >
          {"baz"}
        </option>
      </select>
      <select
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
                "value"={val}
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let baz = __VueDX__ctx.baz;
  let vals = __VueDX__ctx.vals;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjQzNAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIGxldCBiYXogPSBfX1Z1ZURYX19jdHguYmF6OwogIGxldCB2YWxzID0gX19WdWVEWF9fY3R4LnZhbHM7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8c2VsZWN0CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJmb28iCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiZm9vIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iYmFyIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImJhciJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgInZhbHVlIj17YmF6fQogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImJheiJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgIDwvc2VsZWN0PgogICAgICA8c2VsZWN0CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIDxvcHRpb24KICAgICAgICAgIHZhbHVlPSJmb28iCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiZm9vIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICB7CiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdCh2YWxzLCAodmFsKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPG9wdGlvbgogICAgICAgICAgICAgICAgInZhbHVlIj17dmFsfQogICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICB7dmFsfQogICAgICAgICAgICAgIDwvb3B0aW9uPgogICAgICAgICAgICApCiAgICAgICAgICB9KQogICAgICAgIH0KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iYmFyIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7ImJhciJ9CiAgICAgICAgPC9vcHRpb24+CiAgICAgIDwvc2VsZWN0PgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIGxldCBiYXogPSBfX1Z1ZURYX19jdHguYmF6OwogIGxldCB2YWxzID0gX19WdWVEWF9fY3R4LnZhbHM7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMTM2NwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsNkI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxNO0EsUUFBTSxtQztBLE0sQztBLFFBQ0wsQ0FBQ0EsTTtBLFVBQU9DLEssQ0FBTUEsSztBLFVBQVAsbUM7QSxRLEM7QSxVLENBQWFDLEssQztBLFFBQUcsRSxNLEM7QSxRQUN2QixDQUFDRixNO0EsVUFBT0MsSyxDQUFNQSxLO0EsVUFBUCxtQztBLFEsQztBLFUsQ0FBYUMsSyxDO0EsUUFBRyxFLE0sQztBLFFBQ3ZCLENBQUNGLE07QSxVQUFRRyxPLEMsQ0FBT0MsRyxDO0EsVUFBVCxtQztBLFEsQztBLFUsQ0FBY0YsSyxDO0EsUUFBRyxFLE0sQztBLE1BQzFCLEUsTSxDO0EsTUFFQSxDQUFDRixNO0EsUUFBTSxtQztBLE0sQztBLFFBQ0wsQ0FBQ0EsTTtBLFVBQU9DLEssQ0FBTUEsSztBLFVBQVAsbUM7QSxRLEM7QSxVLENBQWFDLEssQztBLFFBQUcsRSxNLEM7QSxRLEM7QSxVLHVDQUNERyxJLEUsQ0FBUEQsRyxDLEs7QSxZLFE7QSxjQUFmLENBQUNKLE07QSxnQkFBNEJHLE8sQyxDQUFPQyxHLEM7QSxnQkFBN0IsbUM7QSxjLEM7QSxnQkFBa0MsQ0FBR0EsR0FBRyxDO0EsY0FBRyxFLE0sQztBLFksQztBLFUsQyxDO0EsUSxDO0EsUUFDbEQsQ0FBQ0osTTtBLFVBQU9DLEssQ0FBTUEsSztBLFVBQVAsbUM7QSxRLEM7QSxVLENBQWFDLEssQztBLFFBQUcsRSxNLEM7QSxNQUN6QixFLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw2QjtBLEUsNEI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+NiIsIjw8UD4+NSIsIjw8VD4+M3w1IiwiPDxUPj41fDciLCI8PFA+PjMiLCI8PFA+PjQiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c2VsZWN0IHYtbW9kZWw9XCJmb29cIj5cbiAgPG9wdGlvbiB2YWx1ZT1cImZvb1wiPmZvbzwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XG4gIDxvcHRpb24gOnZhbHVlPVwiYmF6XCI+YmF6PC9vcHRpb24+XG48L3NlbGVjdD5cblxuPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gdmFsdWU9XCJmb29cIj5mb288L29wdGlvbj5cbiAgPG9wdGlvbiB2LWZvcj1cInZhbCBvZiB2YWxzXCIgOnZhbHVlPVwidmFsXCI+e3sgdmFsIH19PC9vcHRpb24+XG4gIDxvcHRpb24gdmFsdWU9XCJiYXJcIj5iYXI8L29wdGlvbj5cbjwvc2VsZWN0PlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-model  select/textarea 1`] = `
## 9.2. v-model > select/textarea

\`\`\`vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <select
        /*<vuedx:tsx-completions-target/>*/
      >
        <option
          "value"={foo}
          /*<vuedx:tsx-completions-target/>*/
        >
          {foo}
        </option>
      </select>
      <textarea
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTQ3NQAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHNlbGVjdAogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICAidmFsdWUiPXtmb299CiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHtmb299CiAgICAgICAgPC9vcHRpb24+CiAgICAgIDwvc2VsZWN0PgogICAgICA8dGV4dGFyZWEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyB0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wczsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjYyOQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsTTtBLFFBQU0sbUM7QSxNLEM7QSxRQUNMLENBQUNBLE07QSxVQUFRQyxPLEMsQ0FBT0MsRyxDO0EsVUFBVCxtQztBLFEsQztBLFVBQWMsQ0FBRUEsR0FBRyxDO0EsUUFBRSxFLE0sQztBLE1BQzlCLEUsTSxDO0EsTUFDQSxDQUFDQyxRO0EsUUFBUSxtQztBLE0sRTtBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFQ+PjV8NyIsIjw8UD4+MyIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIDp2YWx1ZT1cImZvb1wiPnt7Zm9vfX08L29wdGlvbj5cbjwvc2VsZWN0PlxuPHRleHRhcmVhIHYtbW9kZWw9XCJmb29cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-on default 1`] = `
## 3.1. v-on 

\`\`\`vue-html
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
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let onFocus = __VueDX__ctx.onFocus;
  let value = __VueDX__ctx.value;
  let eventName = __VueDX__ctx.eventName;
  let events = __VueDX__ctx.events;
  let fnName = __VueDX__ctx.fnName;
  let callMyFn = __VueDX__ctx.callMyFn;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        onFocus={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "focus" as const, onFocus, {  });
        }}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        onUpdate:value={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "update:value" as const, ($event) => {
          value = $event
          }, {  });
        }}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        onEvent-name={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "event-name" as const, () => {}, {  });
        }}
        onEventName={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "eventName" as const, () => {}, {  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, eventName, () => {}, {  });
        }}
        {...(events)}
        /*<vuedx:tsx-completions-target/>*/
      />
      <input
        onKeydown={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "keydown" as const, fnName, {  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "keydown" as const, ($event) => {
          callMyFn($event)
          }, { "left": true as const,  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "keydown" as const, $event => callMyFn($event), { "shift": true as const, "left": true as const,  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "keydown" as const, ($event) => callMyFn($event), { "shift": true as const, "right": true as const,  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "keydown" as const, () => callMyFn($event), { "shift": true as const, "down": true as const,  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "keydown" as const, function myFunction($event) {
    callMyFn($event)
  }, { "shift": true as const, "up": true as const,  });
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "input" as const, "keydown" as const, function myFunction() {
    callMyFn($event)
  }, { "ctrl": true as const, "up": true as const,  });
        }}
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let onFocus = __VueDX__ctx.onFocus;
  let value = __VueDX__ctx.value;
  let eventName = __VueDX__ctx.eventName;
  let events = __VueDX__ctx.events;
  let fnName = __VueDX__ctx.fnName;
  let callMyFn = __VueDX__ctx.callMyFn;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NDUwMAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkZvY3VzID0gX19WdWVEWF9fY3R4Lm9uRm9jdXM7CiAgbGV0IHZhbHVlID0gX19WdWVEWF9fY3R4LnZhbHVlOwogIGxldCBldmVudE5hbWUgPSBfX1Z1ZURYX19jdHguZXZlbnROYW1lOwogIGxldCBldmVudHMgPSBfX1Z1ZURYX19jdHguZXZlbnRzOwogIGxldCBmbk5hbWUgPSBfX1Z1ZURYX19jdHguZm5OYW1lOwogIGxldCBjYWxsTXlGbiA9IF9fVnVlRFhfX2N0eC5jYWxsTXlGbjsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxpbnB1dAogICAgICAgIG9uRm9jdXM9eygpID0+IHsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja09uRGlyZWN0aXZlKHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgImlucHV0IiBhcyBjb25zdCwgImZvY3VzIiBhcyBjb25zdCwgb25Gb2N1cywgeyAgfSk7CiAgICAgICAgfX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICBvblVwZGF0ZTp2YWx1ZT17KCkgPT4gewogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrT25EaXJlY3RpdmUoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaW5wdXQiIGFzIGNvbnN0LCAidXBkYXRlOnZhbHVlIiBhcyBjb25zdCwgKCRldmVudCkgPT4gewogICAgICAgICAgdmFsdWUgPSAkZXZlbnQKICAgICAgICAgIH0sIHsgIH0pOwogICAgICAgIH19CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgb25FdmVudC1uYW1lPXsoKSA9PiB7CiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tPbkRpcmVjdGl2ZSh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsICJpbnB1dCIgYXMgY29uc3QsICJldmVudC1uYW1lIiBhcyBjb25zdCwgKCkgPT4ge30sIHsgIH0pOwogICAgICAgIH19CiAgICAgICAgb25FdmVudE5hbWU9eygpID0+IHsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja09uRGlyZWN0aXZlKHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgImlucHV0IiBhcyBjb25zdCwgImV2ZW50TmFtZSIgYXMgY29uc3QsICgpID0+IHt9LCB7ICB9KTsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja09uRGlyZWN0aXZlKHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgImlucHV0IiBhcyBjb25zdCwgZXZlbnROYW1lLCAoKSA9PiB7fSwgeyAgfSk7CiAgICAgICAgfX0KICAgICAgICB7Li4uKGV2ZW50cyl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgb25LZXlkb3duPXsoKSA9PiB7CiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tPbkRpcmVjdGl2ZSh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsICJpbnB1dCIgYXMgY29uc3QsICJrZXlkb3duIiBhcyBjb25zdCwgZm5OYW1lLCB7ICB9KTsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja09uRGlyZWN0aXZlKHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgImlucHV0IiBhcyBjb25zdCwgImtleWRvd24iIGFzIGNvbnN0LCAoJGV2ZW50KSA9PiB7CiAgICAgICAgICBjYWxsTXlGbigkZXZlbnQpCiAgICAgICAgICB9LCB7ICJsZWZ0IjogdHJ1ZSBhcyBjb25zdCwgIH0pOwogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrT25EaXJlY3RpdmUoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaW5wdXQiIGFzIGNvbnN0LCAia2V5ZG93biIgYXMgY29uc3QsICRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpLCB7ICJzaGlmdCI6IHRydWUgYXMgY29uc3QsICJsZWZ0IjogdHJ1ZSBhcyBjb25zdCwgIH0pOwogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrT25EaXJlY3RpdmUoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaW5wdXQiIGFzIGNvbnN0LCAia2V5ZG93biIgYXMgY29uc3QsICgkZXZlbnQpID0+IGNhbGxNeUZuKCRldmVudCksIHsgInNoaWZ0IjogdHJ1ZSBhcyBjb25zdCwgInJpZ2h0IjogdHJ1ZSBhcyBjb25zdCwgIH0pOwogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrT25EaXJlY3RpdmUoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCAiaW5wdXQiIGFzIGNvbnN0LCAia2V5ZG93biIgYXMgY29uc3QsICgpID0+IGNhbGxNeUZuKCRldmVudCksIHsgInNoaWZ0IjogdHJ1ZSBhcyBjb25zdCwgImRvd24iOiB0cnVlIGFzIGNvbnN0LCAgfSk7CiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tPbkRpcmVjdGl2ZSh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsICJpbnB1dCIgYXMgY29uc3QsICJrZXlkb3duIiBhcyBjb25zdCwgZnVuY3Rpb24gbXlGdW5jdGlvbigkZXZlbnQpIHsKICAgIGNhbGxNeUZuKCRldmVudCkKICB9LCB7ICJzaGlmdCI6IHRydWUgYXMgY29uc3QsICJ1cCI6IHRydWUgYXMgY29uc3QsICB9KTsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja09uRGlyZWN0aXZlKHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgImlucHV0IiBhcyBjb25zdCwgImtleWRvd24iIGFzIGNvbnN0LCBmdW5jdGlvbiBteUZ1bmN0aW9uKCkgewogICAgY2FsbE15Rm4oJGV2ZW50KQogIH0sIHsgImN0cmwiOiB0cnVlIGFzIGNvbnN0LCAidXAiOiB0cnVlIGFzIGNvbnN0LCAgfSk7CiAgICAgICAgfX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkZvY3VzID0gX19WdWVEWF9fY3R4Lm9uRm9jdXM7CiAgbGV0IHZhbHVlID0gX19WdWVEWF9fY3R4LnZhbHVlOwogIGxldCBldmVudE5hbWUgPSBfX1Z1ZURYX19jdHguZXZlbnROYW1lOwogIGxldCBldmVudHMgPSBfX1Z1ZURYX19jdHguZXZlbnRzOwogIGxldCBmbk5hbWUgPSBfX1Z1ZURYX19jdHguZm5OYW1lOwogIGxldCBjYWxsTXlGbiA9IF9fVnVlRFhfX2N0eC5jYWxsTXlGbjsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgoxOTg0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsbUM7QSxFLCtCO0EsRSx1QztBLEUsaUM7QSxFLGlDO0EsRSxxQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEs7QSxRQUFPQyxPLEMsQyxPO0EsVSxrR0FBUCxnQixFQUFPLGdCLEVBQU9DLE8sRSxFLEUsRTtBLFEsQyxDO0EsUUFBVCxtQztBLE0sRTtBLE1BQ04sQ0FBQ0YsSztBLFFBQU9HLGMsQyxDLE87QSxVLGtHQUFQLGdCLEVBQU8sdUIsRSxhO0EsVUFBY0MsYztBLFUsQyxFLEUsRSxFO0EsUSxDLEM7QSxRQUFoQixtQztBLE0sRTtBLE1BQ04sQ0FBQ0osSztBLFFBQU9LLFksQyxDLE87QSxVLGtHQUFQLGdCLEVBQU8scUIsRSxRLEUsRSxFLEU7QSxRLEMsQztBLFFBQVlDLFcsQyxDLE87QSxVLGtHQUFuQixnQixFQUFtQixvQixFLFEsRSxFLEUsRTtBLFUsa0dBQW5CLGdCLEVBQStCQyxTLEUsUSxFLEUsRSxFO0EsUSxDLEM7QSxRLEtBQWlCQyxNLEU7QSxRQUEzQyxtQztBLE0sRTtBLE1BQ04sQ0FBQ1IsSztBLFFBQ0VTLFMsQyxDLE87QSxVLGtHQURGLGdCLEVBQ0Usa0IsRUFBU0QsTSxFLEUsRSxFO0EsVSxrR0FEWCxnQixFQUVFLGtCLEUsYTtBLFVBQWNFLGdCO0EsVSxDLEUsRUFBTkMsTSxFLGEsRSxFLEU7QSxVLGtHQUZWLGdCLEVBR0Usa0IsRUFBb0JDLDBCLEUsRUFBWkMsTyxFLGEsRUFBTUYsTSxFLGEsRSxFLEU7QSxVLGtHQUhoQixnQixFQUlFLGtCLEVBQXFCRyw0QixFLEVBQWJELE8sRSxhLEVBQU1BLE8sRSxhLEUsRSxFO0EsVSxrR0FKaEIsZ0IsRUFLRSxrQixFQUFvQkUsc0IsRSxFQUFaRixPLEUsYSxFQUFNRixNLEUsYSxFLEUsRTtBLFUsa0dBTGhCLGdCLEVBTUUsa0IsRUFBa0JLOztHLEUsRUFBVkgsTyxFLGEsRUFBTUksSSxFLGEsRSxFLEU7QSxVLGtHQU5oQixnQixFQVNFLGtCLEVBQWlCQzs7RyxFLEVBQVRQLE0sRSxhLEVBQUtNLEksRSxhLEUsRSxFO0EsUSxDLEM7QSxRQVRWLG1DO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxtQztBLEUsK0I7QSxFLHVDO0EsRSxpQztBLEUsaUM7QSxFLHFDO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj41IiwiPDxUPj41fDciLCI8PFA+PjciLCI8PFQ+PjEyfDE0IiwiPDxQPj4xNCIsIjw8VD4+MTB8MTIiLCI8PFQ+Pjl8MTEiLCI8PFA+PjkiLCI8PFA+PjYiLCI8PFQ+Pjd8OSIsIjw8UD4+MTYiLCI8PFQ+PjB8NiIsIjw8UD4+MjYiLCI8PFQ+PjB8NyIsIjw8UD4+MjgiLCI8PFA+PjIyIiwiPDxQPj41NCIsIjw8VD4+MHw0IiwiPDxQPj40OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxpbnB1dCBAZm9jdXM9XCJvbkZvY3VzXCIgLz5cbjxpbnB1dCBAdXBkYXRlOnZhbHVlPVwidmFsdWUgPSAkZXZlbnRcIiAvPlxuPGlucHV0IEBldmVudC1uYW1lIEBldmVudE5hbWUgQFtldmVudE5hbWVdIHYtb249XCJldmVudHNcIiAvPlxuPGlucHV0XG4gIEBrZXlkb3duPVwiZm5OYW1lXCJcbiAgQGtleWRvd24ubGVmdD1cImNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC5sZWZ0PVwiJGV2ZW50ID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC5yaWdodD1cIigkZXZlbnQpID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC5kb3duPVwiKCkgPT4gY2FsbE15Rm4oJGV2ZW50KVwiXG4gIEBrZXlkb3duLnNoaWZ0LnVwPVwiZnVuY3Rpb24gbXlGdW5jdGlvbigkZXZlbnQpIHtcbiAgICBjYWxsTXlGbigkZXZlbnQpXG4gIH1cIlxuICBAa2V5ZG93bi5jdHJsLnVwPVwiZnVuY3Rpb24gbXlGdW5jdGlvbigpIHtcbiAgICBjYWxsTXlGbigkZXZlbnQpXG4gIH1cIlxuLz5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-on multiple events default 1`] = `
## 4.1. v-on multiple events 

\`\`\`vue-html
<div @click="onClick" @hover="onHover" @press="onPress" />
<div @click="onClick" @hover="onHover" @press="onPress" />
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let onClick = __VueDX__ctx.onClick;
  let onHover = __VueDX__ctx.onHover;
  let onPress = __VueDX__ctx.onPress;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        onClick={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "click" as const, onClick, {  });
        }}
        onHover={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "hover" as const, onHover, {  });
        }}
        onPress={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "press" as const, onPress, {  });
        }}
        /*<vuedx:tsx-completions-target/>*/
      />
      <div
        onClick={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "click" as const, onClick, {  });
        }}
        onHover={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "hover" as const, onHover, {  });
        }}
        onPress={() => {
          __VueDX__TypeCheck.internal.checkOnDirective({} as unknown as __VueDX__JSX.JSX.IntrinsicElements, "div" as const, "press" as const, onPress, {  });
        }}
        /*<vuedx:tsx-completions-target/>*/
      />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let onClick = __VueDX__ctx.onClick;
  let onHover = __VueDX__ctx.onHover;
  let onPress = __VueDX__ctx.onPress;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjY1NAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkNsaWNrID0gX19WdWVEWF9fY3R4Lm9uQ2xpY2s7CiAgbGV0IG9uSG92ZXIgPSBfX1Z1ZURYX19jdHgub25Ib3ZlcjsKICBsZXQgb25QcmVzcyA9IF9fVnVlRFhfX2N0eC5vblByZXNzOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIG9uQ2xpY2s9eygpID0+IHsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja09uRGlyZWN0aXZlKHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiIgYXMgY29uc3QsICJjbGljayIgYXMgY29uc3QsIG9uQ2xpY2ssIHsgIH0pOwogICAgICAgIH19CiAgICAgICAgb25Ib3Zlcj17KCkgPT4gewogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrT25EaXJlY3RpdmUoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2IiBhcyBjb25zdCwgImhvdmVyIiBhcyBjb25zdCwgb25Ib3ZlciwgeyAgfSk7CiAgICAgICAgfX0KICAgICAgICBvblByZXNzPXsoKSA9PiB7CiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tPbkRpcmVjdGl2ZSh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiIGFzIGNvbnN0LCAicHJlc3MiIGFzIGNvbnN0LCBvblByZXNzLCB7ICB9KTsKICAgICAgICB9fQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxkaXYKICAgICAgICBvbkNsaWNrPXsoKSA9PiB7CiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tPbkRpcmVjdGl2ZSh7fSBhcyB1bmtub3duIGFzIF9fVnVlRFhfX0pTWC5KU1guSW50cmluc2ljRWxlbWVudHMsICJkaXYiIGFzIGNvbnN0LCAiY2xpY2siIGFzIGNvbnN0LCBvbkNsaWNrLCB7ICB9KTsKICAgICAgICB9fQogICAgICAgIG9uSG92ZXI9eygpID0+IHsKICAgICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja09uRGlyZWN0aXZlKHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgImRpdiIgYXMgY29uc3QsICJob3ZlciIgYXMgY29uc3QsIG9uSG92ZXIsIHsgIH0pOwogICAgICAgIH19CiAgICAgICAgb25QcmVzcz17KCkgPT4gewogICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrT25EaXJlY3RpdmUoe30gYXMgdW5rbm93biBhcyBfX1Z1ZURYX19KU1guSlNYLkludHJpbnNpY0VsZW1lbnRzLCAiZGl2IiBhcyBjb25zdCwgInByZXNzIiBhcyBjb25zdCwgb25QcmVzcywgeyAgfSk7CiAgICAgICAgfX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkNsaWNrID0gX19WdWVEWF9fY3R4Lm9uQ2xpY2s7CiAgbGV0IG9uSG92ZXIgPSBfX1Z1ZURYX19jdHgub25Ib3ZlcjsKICBsZXQgb25QcmVzcyA9IF9fVnVlRFhfX2N0eC5vblByZXNzOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyB0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wczsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjk0MAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiQTtBO0E7QTs7Ozs7Ozs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLG1DO0EsRSxtQztBLEUsbUM7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxHO0EsUUFBS0MsTyxDLEMsTztBLFUsa0dBQUwsYyxFQUFLLGdCLEVBQU9DLE8sRSxFLEUsRTtBLFEsQyxDO0EsUUFBVUQsTyxDLEMsTztBLFUsa0dBQXRCLGMsRUFBc0IsZ0IsRUFBT0MsTyxFLEUsRSxFO0EsUSxDLEM7QSxRQUFVRCxPLEMsQyxPO0EsVSxrR0FBdkMsYyxFQUF1QyxnQixFQUFPQyxPLEUsRSxFLEU7QSxRLEMsQztBLFFBQTNDLG1DO0EsTSxFO0EsTUFDSixDQUFDRixHO0EsUUFBS0MsTyxDLEMsTztBLFUsa0dBQUwsYyxFQUFLLGdCLEVBQU9DLE8sRSxFLEUsRTtBLFEsQyxDO0EsUUFBVUQsTyxDLEMsTztBLFUsa0dBQXRCLGMsRUFBc0IsZ0IsRUFBT0MsTyxFLEUsRSxFO0EsUSxDLEM7QSxRQUFVRCxPLEMsQyxPO0EsVSxrR0FBdkMsYyxFQUF1QyxnQixFQUFPQyxPLEUsRSxFLEU7QSxRLEMsQztBLFFBQTNDLG1DO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxtQztBLEUsbUM7QSxFLG1DO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj41fDciLCI8PFA+PjciXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-once default 1`] = `
## 12.1. v-once 

\`\`\`vue-html
<section v-once>{{ largeText }}</section>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let largeText = __VueDX__ctx.largeText;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let largeText = __VueDX__ctx.largeText;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTQ2NwAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsYXJnZVRleHQgPSBfX1Z1ZURYX19jdHgubGFyZ2VUZXh0OwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgeygoKSA9PiB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrRGlyZWN0aXZlKCJvbmNlIiBhcyBjb25zdCwgInNlY3Rpb24iIGFzIGNvbnN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgeyAgfSk7CiAgICAgIH0pKCl9CiAgICAgIDxzZWN0aW9uCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtsYXJnZVRleHR9CiAgICAgIDwvc2VjdGlvbj4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGFyZ2VUZXh0ID0gX19WdWVEWF9fY3R4LmxhcmdlVGV4dDsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo1MDUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLDJCO0EsRSx1QztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLFM7QSxRLDJDQUNTQSxlLEVBQVIsa0IsRSxTLEUsUyxFLEUsRSxFO0EsTSxLO0EsTUFBRCxDQUFDQyxPO0EsUUFBTyxtQztBLE0sQztBLFFBQVEsQ0FBR0MsU0FBUyxDO0EsTUFBRyxFLE8sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsdUM7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFQ+PjZ8MTUiLCI8PFA+PjciLCI8PFA+PjkiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c2VjdGlvbiB2LW9uY2U+e3sgbGFyZ2VUZXh0IH19PC9zZWN0aW9uPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-pre default 1`] = `
## 11.1. v-pre 

\`\`\`vue-html
<pre v-pre>{{ interpolation }}</pre>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTEyMAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIHJldHVybiAoCiAgICA8PgogICAgICA8cHJlCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsie3sgaW50ZXJwb2xhdGlvbiB9fSJ9CiAgICAgIDwvcHJlPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KMzk3AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxHO0EsUUFBRyxtQztBLE0sQztBLFEsQ0FBT0MscUIsQztBLE1BQW1CLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+MTl8MjEiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48cHJlIHYtcHJlPnt7IGludGVycG9sYXRpb24gfX08L3ByZT5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-show default 1`] = `
## 8.1. v-show 

\`\`\`vue-html
<h1 v-show="ok">Hello!</h1>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTQxNgAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vazsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHsoKCkgPT4gewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5jaGVja0RpcmVjdGl2ZSgic2hvdyIgYXMgY29uc3QsICJoMSIgYXMgY29uc3QsIHVuZGVmaW5lZCwgb2ssIHsgIH0pOwogICAgICB9KSgpfQogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJIZWxsbyEifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vazsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo0OTIAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLDJCO0EsRSx5QjtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLFM7QSxRLDJDQUNJQSxlLEVBQUgsYSxFLFMsRUFBV0MsRSxFLEUsRSxFO0EsTSxLO0EsTUFBWixDQUFDQSxFO0EsUUFBRSxtQztBLE0sQztBLFEsQ0FBYUMsUSxDO0EsTUFBTSxFLEUsQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUseUI7QSxFLDRCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFQ+PjZ8MTUiLCI8PFA+PjIiLCI8PFQ+PjZ8OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LXNob3c9XCJva1wiPkhlbGxvITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-slot  Invalid 1`] = `
## 10.1. v-slot > Invalid

\`\`\`vue-html
<Foo>
  <template #foo>A</template>
  <template #bar="{bar}">{{bar}}</template>
  <template>Invalid</template>
</Foo>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  const Foo = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, null, "Foo" as const, "Foo" as const);
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
                <>
                  {"A"}
                </>
              </>
            )
          },
        })}
      </Foo>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTYwMAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvbyA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkdsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBudWxsLCAiRm9vIiBhcyBjb25zdCwgIkZvbyIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEZvbwogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vLCB7CiAgICAgICAgICAiZm9vIjogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICB7IkEifQogICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwudW5pb24oX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwoKLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhhbXBsZSB7CiAgJHByb3BzID0gbnVsbCBhcyB1bmtub3duIGFzIHR5cGVvZiBfX1Z1ZURYX19jdHguJHByb3BzOwogICRzbG90cyA9IG51bGwgYXMgdW5rbm93biBhcyBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuU2xvdHM8UmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+PjsKfQovLyNlbmRyZWdpb24KNTgyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiJBO0E7QTtBOzs7Ozs7OztBO0E7QTtBLG1DO0EsRSwyQjtBLEUsTSxHLG1LLEksRSxjLEUsYyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxHO0EsUUFBRyxtQztBLE0sQztBLFEsQyw2QztBLFVBQ1MsSyxHLE07QSxZLFE7QSxjLEU7QSxnQixFO0Esa0IsQ0FBSUEsRyxDO0EsZ0IsRztBLGMsRztBLFksQztBLFUsRTtBLFEsRSxDO0EsTUFBQyxFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyRTtBLEUsRztBLEEsQztBLEEsOEI7O0E7QTtBO0E7QTtBO0EiLCJuYW1lcyI6WyI8PFQ+PjF8MyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb28+XG4gIDx0ZW1wbGF0ZSAjZm9vPkE8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI2Jhcj1cIntiYXJ9XCI+e3tiYXJ9fTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZT5JbnZhbGlkPC90ZW1wbGF0ZT5cbjwvRm9vPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-slot  use slots 1`] = `
## 10.2. v-slot > use slots

\`\`\`vue-html
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
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
//#region <div>

//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  const FooBar = __VueDX__TypeCheck.internal.resolveComponent({} as unknown as __VueDX__JSX.GlobalComponents, {} as unknown as __VueDX__JSX.JSX.IntrinsicElements, __VueDX__ctx, null, "FooBar" as const, "FooBar" as const);
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
                <>
                  {"content"}
                </>
              </>
            )
          },
        })}
      </FooBar>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjUyOAAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgovLyNyZWdpb24gPGRpdj4KCi8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IEZvb0JhciA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkdsb2JhbENvbXBvbmVudHMsIHt9IGFzIHVua25vd24gYXMgX19WdWVEWF9fSlNYLkpTWC5JbnRyaW5zaWNFbGVtZW50cywgX19WdWVEWF9fY3R4LCBudWxsLCAiRm9vQmFyIiBhcyBjb25zdCwgIkZvb0JhciIgYXMgY29uc3QpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHsiY29udGVudCJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgICJkZWZhdWx0IjogKHtmb299KSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHtmb299CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfSl9CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBsZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHtfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuY2hlY2tTbG90cyhGb29CYXIsIHsKICAgICAgICAgICJvdGhlciI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7Zm9vfQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgICAgPEZvb0JhcgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wbGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7X19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmNoZWNrU2xvdHMoRm9vQmFyLCB7CiAgICAgICAgICAiZGVmYXVsdCI6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgeyJjb250ZW50In0KICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH0pfQogICAgICA8L0Zvb0Jhcj4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnVuaW9uKF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4YW1wbGUgewogICRwcm9wcyA9IG51bGwgYXMgdW5rbm93biBhcyB0eXBlb2YgX19WdWVEWF9fY3R4LiRwcm9wczsKICAkc2xvdHMgPSBudWxsIGFzIHVua25vd24gYXMgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLlNsb3RzPFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPj47Cn0KLy8jZW5kcmVnaW9uCjExOTkAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTs7QTtBO0E7QSxtQztBLEUsMkI7QSxFLE0sTSxtSyxJLEUsaUIsRSxpQixFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxNO0EsUUFBTSxtQztBLE0sQztBLFEsQyxnRDtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxTLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQU8sRSxNLEM7QSxNQUNmLENBQUMsTTtBLFFBQU0sbUM7QSxNLEM7QSxRLEMsZ0Q7QSxVQUFFLFMsR0FBU0MsSyxNO0EsWSxRO0EsYyxFO0EsZ0JBQU8sQ0FBR0MsR0FBRyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFHLEUsTSxDO0EsTUFDbEMsQ0FBQyxNO0EsUUFBTSxtQztBLE0sQztBLFEsQyxnRDtBLFVBQUUsTyxHQUFPRCxLLE07QSxZLFE7QSxjLEU7QSxnQkFBTyxDQUFHQyxHQUFHLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEUsQztBLE1BQUcsRSxNLEM7QSxNQUNoQyxDQUFDLE07QSxRQUFNLG1DO0EsTSxDO0EsUSxDLGdEO0EsVUFDTSxTLEcsTTtBLFksUTtBLGMsRTtBLGdCLEU7QSxrQixDQUFRRixTLEM7QSxnQixHO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFLEM7QSxNQUFPLEUsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJFO0EsRSxHO0EsQSxDO0EsQSw4Qjs7QTtBO0E7QTtBO0E7QSIsIm5hbWVzIjpbIjw8VD4+N3w5IiwiPDxQPj41IiwiPDxQPj4zIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvb0Jhcj5jb250ZW50PC9Gb29CYXI+XG48Rm9vQmFyICNkZWZhdWx0PVwie2Zvb31cIj57eyBmb28gfX08L0Zvb0Jhcj5cbjxGb29CYXIgI290aGVyPVwie2Zvb31cIj57eyBmb28gfX08L0Zvb0Jhcj5cbjxGb29CYXI+XG4gIDx0ZW1wbGF0ZSAjZGVmYXVsdD5jb250ZW50PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNvdGhlcj1cIntmb299XCI+e3tmb299fTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYW5vdGhlcj1cImZvb1wiPlxuICAgIDxkaXYgdi1pZj1cImZvb1wiPnt7Zm9vLmJhcn19PC9kaXY+XG4gIDwvdGVtcGxhdGU+XG4gIDxkaXY+ZXh0cmFub3VzPC9kaXY+XG48L0Zvb0Jhcj5cblxuPC90ZW1wbGF0ZT4iXX0=)


`;

exports[`Baseline Spec v-text default 1`] = `
## 6.1. v-text 

\`\`\`vue-html
<span v-text="msg"></span>
\`\`\`

\`\`\`tsx
/** @jsx __VueDX__JSX.createElement */
import * as __VueDX__JSX from 'vue';
import * as __VueDX__TypeCheck from 'vuedx~runtime';
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});

function __VueDX__RegisterSelf<T extends {}>(arg0: T) {
  const key = "Example" as const;
  return { ...arg0, [key]: Example };
}
//#endregion
const __VueDX__ctx = __VueDX__RegisterSelf(new __VueDX__Component())
//#region <template>
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let msg = __VueDX__ctx.msg;
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
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let msg = __VueDX__ctx.msg;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.union(__VueDX__TypeCheck.internal.flat([
  ]))
}
/*</vuedx:diagnosticsIgnore>*/

//#endregion
//#region public component definition
export default class Example {
  $props = null as unknown as typeof __VueDX__ctx.$props;
  $slots = null as unknown as __VueDX__TypeCheck.internal.Slots<ReturnType<typeof __VueDX__slots>>;
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTI5NgAvKiogQGpzeCBfX1Z1ZURYX19KU1guY3JlYXRlRWxlbWVudCAqLwppbXBvcnQgKiBhcyBfX1Z1ZURYX19KU1ggZnJvbSAndnVlJzsKaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrIGZyb20gJ3Z1ZWR4fnJ1bnRpbWUnOwovLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwoKZnVuY3Rpb24gX19WdWVEWF9fUmVnaXN0ZXJTZWxmPFQgZXh0ZW5kcyB7fT4oYXJnMDogVCkgewogIGNvbnN0IGtleSA9ICJFeGFtcGxlIiBhcyBjb25zdDsKICByZXR1cm4geyAuLi5hcmcwLCBba2V5XTogRXhhbXBsZSB9Owp9Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBfX1Z1ZURYX19SZWdpc3RlclNlbGYobmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpKQovLyNyZWdpb24gPHRlbXBsYXRlPgpleHBvcnQgZnVuY3Rpb24gX19WdWVEWF9fcmVuZGVyKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBtc2cgPSBfX1Z1ZURYX19jdHgubXNnOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHNwYW4KICAgICAgICBpbm5lckhUTUw9e21zZ30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGxldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgIDwvc3Bhbj4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXNnID0gX19WdWVEWF9fY3R4Lm1zZzsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC51bmlvbihfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkpCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCgovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGFtcGxlIHsKICAkcHJvcHMgPSBudWxsIGFzIHVua25vd24gYXMgdHlwZW9mIF9fVnVlRFhfX2N0eC4kcHJvcHM7CiAgJHNsb3RzID0gbnVsbCBhcyB1bmtub3duIGFzIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5TbG90czxSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4+Owp9Ci8vI2VuZHJlZ2lvbgo0NDQAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6IkE7QTtBO0E7Ozs7Ozs7O0E7QTtBO0EsbUM7QSxFLDJCO0EsRSwyQjtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEk7QSxRQUFPQyxTLEMsQ0FBTUMsRyxDO0EsUUFBVCxtQztBLE0sQztBLE1BQWMsRSxJLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUsMkU7QSxFLEc7QSxBLEM7QSxBLDhCOztBO0E7QTtBO0E7QTtBIiwibmFtZXMiOlsiPDxQPj40IiwiPDxUPj40fDkiLCI8PFA+PjMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c3BhbiB2LXRleHQ9XCJtc2dcIj48L3NwYW4+XG5cbjwvdGVtcGxhdGU+Il19)


`;
