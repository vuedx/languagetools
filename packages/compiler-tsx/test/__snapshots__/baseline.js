// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Baseline Spec \\$attrs binding default 1`] = `
## 17.1. \\$attrs binding 

\`\`\`vue-html
<Foo>
  <input v-bind="$attrs" />
</Foo>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let $attrs = __VueDX__ctx.$attrs;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <Foo
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          default: () => {
            return (
              <>
                <input
                  {...($attrs)}
                  /*<vuedx:tsx-competions-target/>*/
                />
              </>
            )
          },
        }}
      </Foo>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let $attrs = __VueDX__ctx.$attrs;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTE4MAAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0ICRhdHRycyA9IF9fVnVlRFhfX2N0eC4kYXR0cnM7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8Rm9vCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge3sKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgPGlucHV0CiAgICAgICAgICAgICAgICAgIHsuLi4oJGF0dHJzKX0KICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9fQogICAgICA8L0Zvbz4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgJGF0dHJzID0gX19WdWVEWF9fY3R4LiRhdHRyczsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KNTEwAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsMkI7QSxFLGlDO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxHO0EsUUFBRyxrQztBLE0sQztBLFEsRTtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQkFDRixDQUFDQSxLO0Esa0IsS0FBY0MsTSxFO0Esa0JBQVQsa0M7QSxnQixFO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFO0EsTUFDUixFLEcsQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsaUM7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjUiLCI8PFA+PjYiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48Rm9vPlxuICA8aW5wdXQgdi1iaW5kPVwiJGF0dHJzXCIgLz5cbjwvRm9vPlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let bars = __VueDX__ctx.bars;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const __VueDX___Component0 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, bar);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {
        __VueDX__TypeCheck.internal.renderList(bars, (bar) => {
          /*<vuedx:templateGlobals>*/
          const __VueDX___Component1 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, bar);
          /*</vuedx:templateGlobals>*/
          return (
            <__VueDX___Component0
              /*<vuedx:tsx-competions-target/>*/
            >
              {{
                default: () => {
                  return (
                    <>
                      <__VueDX___Component1
                        /*<vuedx:tsx-competions-target/>*/
                      >
                        {{
                          "default": ({baz}) => {
                            /*<vuedx:templateGlobals>*/
                            const __VueDX___Component2 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, baz[bar]);
                            /*</vuedx:templateGlobals>*/
                            return (
                              <>
                                {
                                  __VueDX__TypeCheck.internal.renderList(baz, (item) => {
                                    /*<vuedx:templateGlobals>*/
                                    const __VueDX___Component3 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, item);
                                    /*</vuedx:templateGlobals>*/
                                    return (
                                      <__VueDX___Component2
                                        /*<vuedx:tsx-competions-target/>*/
                                      >
                                        {{
                                          default: () => {
                                            return (
                                              <>
                                                <__VueDX___Component3
                                                  /*<vuedx:tsx-competions-target/>*/
                                                />

                                              </>
                                            )
                                          },
                                        }}
                                      </__VueDX___Component2>
                                    )
                                  })
                                }
                              </>
                            )
                          },
                        }}
                      </__VueDX___Component1>
                    </>
                  )
                },
              }}
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzY2MQAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGJhcnMgPSBfX1Z1ZURYX19jdHguYmFyczsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgY29uc3QgX19WdWVEWF9fX0NvbXBvbmVudDAgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudChfX1Z1ZURYX19jdHgsIGJhcik7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYmFycywgKGJhcikgPT4gewogICAgICAgICAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICBjb25zdCBfX1Z1ZURYX19fQ29tcG9uZW50MSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KF9fVnVlRFhfX2N0eCwgYmFyKTsKICAgICAgICAgIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxfX1Z1ZURYX19fQ29tcG9uZW50MAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHt7CiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgIDxfX1Z1ZURYX19fQ29tcG9uZW50MQogICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgIHt7CiAgICAgICAgICAgICAgICAgICAgICAgICAgImRlZmF1bHQiOiAoe2Jhen0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fX0NvbXBvbmVudDIgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudChfX1Z1ZURYX19jdHgsIGJheltiYXJdKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYmF6LCAoaXRlbSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgX19WdWVEWF9fX0NvbXBvbmVudDMgPSBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVzb2x2ZUNvbXBvbmVudChfX1Z1ZURYX19jdHgsIGl0ZW0pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX19Db21wb25lbnQyCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fX0NvbXBvbmVudDMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+CgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX19Db21wb25lbnQyPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgICAgICAgICAgIDwvX19WdWVEWF9fX0NvbXBvbmVudDE+CiAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgPC9fX1Z1ZURYX19fQ29tcG9uZW50MD4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGJhcnMgPSBfX1Z1ZURYX19jdHguYmFyczsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KMTIwNwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLDJCO0EsRSw2QjtBLEUsNEI7QSxFLDJCO0EsRSxNLG9CLDhEQUNnQkEsRyxFO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQztBLFEsdUNBQW1CQyxJLEUsQ0FBUEQsRyxDLEs7QSxVLDJCO0EsVSxNLG9CLDhEQUNWQSxHLEU7QSxVLDRCO0EsVSxRO0EsWUFEbEIsQ0FBQyxvQjtBLGNBQVMsa0M7QSxZLEM7QSxjLEU7QSxnQixPLEcsTTtBLGtCLFE7QSxvQixFO0Esc0JBQ1IsQ0FBQyxvQjtBLHdCQUFTLGtDO0Esc0IsQztBLHdCLEU7QSwwQkFBWSxTLEdBQVNFLEssTTtBLDRCLDJCO0EsNEIsTSxvQiw4REFDYkMsUSxFO0EsNEIsNEI7QSw0QixRO0EsOEIsRTtBLGdDLEM7QSxrQyx1Q0FBeUJILEcsRSxDQUFSQyxJLEMsSztBLG9DLDJCO0Esb0MsTSxvQiw4REFDZkEsSSxFO0Esb0MsNEI7QSxvQyxRO0Esc0NBRGxCLENBQUMsb0I7QSx3Q0FBUyxrQztBLHNDLEM7QSx3QyxFO0EsMEMsTyxHLE07QSw0QyxRO0EsOEMsRTtBLGdEQUNSLENBQUMsb0I7QSxrREFBUyxrQztBLGdELEU7QTtBLDhDLEc7QSw0QyxDO0EsMEMsRTtBLHdDLEU7QSxzQ0FDWixFLG9CLEM7QSxvQyxDO0Esa0MsQyxDO0EsZ0MsQztBLDhCLEc7QSw0QixDO0EsMEIsRTtBLHdCLEU7QSxzQkFDRixFLG9CLEM7QSxvQixHO0Esa0IsQztBLGdCLEU7QSxjLEU7QSxZQUNGLEUsb0IsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSw2QjtBLEUsNEI7QSxFLHlDO0EsRSxFO0EsQSxDO0EsQSw4Qjs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8UD4+NCIsIjw8UD4+NSIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxjb21wb25lbnQgOmlzPVwiYmFyXCIgdi1mb3I9XCJiYXIgb2YgYmFyc1wiPlxuICA8Y29tcG9uZW50IDppcz1cImJhclwiICNkZWZhdWx0PVwie2Jhen1cIj5cbiAgICA8Y29tcG9uZW50IDppcz1cImJheltiYXJdXCIgdi1mb3I9XCJpdGVtIG9mIGJhelwiID5cbiAgICAgIDxjb21wb25lbnQgOmlzPVwiaXRlbVwiIC8+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const __VueDX___Component0 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, foo);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <__VueDX___Component0
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          "default": ({bar}) => {
            /*<vuedx:templateGlobals>*/
            const __VueDX___Component1 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, bar);
            /*</vuedx:templateGlobals>*/
            return (
              <>
                <__VueDX___Component1
                  /*<vuedx:tsx-competions-target/>*/
                >
                  {{
                    "default": ({baz}) => {
                      /*<vuedx:templateGlobals>*/
                      const __VueDX___Component2 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, baz);
                      /*</vuedx:templateGlobals>*/
                      return (
                        <>
                          <__VueDX___Component2
                            /*<vuedx:tsx-competions-target/>*/
                          >
                            {{
                              "other": ({ foo }) => {
                                /*<vuedx:templateGlobals>*/
                                const __VueDX___Component3 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, foo);
                                /*</vuedx:templateGlobals>*/
                                return (
                                  <>
                                    <>
                                      <__VueDX___Component3
                                        /*<vuedx:tsx-competions-target/>*/
                                      />

                                    </>
                                  </>
                                )
                              },
                              "default": ({ bar }) => {
                                /*<vuedx:templateGlobals>*/
                                const __VueDX___Component4 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, bar);
                                /*</vuedx:templateGlobals>*/
                                return (
                                  <>
                                    <>
                                      <__VueDX___Component4
                                        /*<vuedx:tsx-competions-target/>*/
                                      />

                                    </>
                                  </>
                                )
                              },
                            }}
                          </__VueDX___Component2>
                        </>
                      )
                    },
                  }}
                </__VueDX___Component1>
              </>
            )
          },
        }}
      </__VueDX___Component0>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#Mzc0NAAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb287CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGNvbnN0IF9fVnVlRFhfX19Db21wb25lbnQwID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoX19WdWVEWF9fY3R4LCBmb28pOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPF9fVnVlRFhfX19Db21wb25lbnQwCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge3sKICAgICAgICAgICJkZWZhdWx0IjogKHtiYXJ9KSA9PiB7CiAgICAgICAgICAgIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19fQ29tcG9uZW50MSA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KF9fVnVlRFhfX2N0eCwgYmFyKTsKICAgICAgICAgICAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICA8X19WdWVEWF9fX0NvbXBvbmVudDEKICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICB7ewogICAgICAgICAgICAgICAgICAgICJkZWZhdWx0IjogKHtiYXp9KSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX19Db21wb25lbnQyID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoX19WdWVEWF9fY3R4LCBiYXopOwogICAgICAgICAgICAgICAgICAgICAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fX0NvbXBvbmVudDIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAib3RoZXIiOiAoeyBmb28gfSkgPT4gewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9fVnVlRFhfX19Db21wb25lbnQzID0gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlc29sdmVDb21wb25lbnQoX19WdWVEWF9fY3R4LCBmb28pOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8X19WdWVEWF9fX0NvbXBvbmVudDMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPgoKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJkZWZhdWx0IjogKHsgYmFyIH0pID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfX1Z1ZURYX19fQ29tcG9uZW50NCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KF9fVnVlRFhfX2N0eCwgYmFyKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPF9fVnVlRFhfX19Db21wb25lbnQ0CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4KCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgICAgICAgICAgICAgICA8L19fVnVlRFhfX19Db21wb25lbnQyPgogICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICB9fQogICAgICAgICAgICAgICAgPC9fX1Z1ZURYX19fQ29tcG9uZW50MT4KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9fQogICAgICA8L19fVnVlRFhfX19Db21wb25lbnQwPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgoxMzYyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUsMkI7QSxFLE0sb0IsOERBQ2dCQSxHLEU7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFBaEIsQ0FBQyxvQjtBLFFBQVMsa0M7QSxNLEM7QSxRLEU7QSxVQUFZLFMsR0FBU0MsSyxNO0EsWSwyQjtBLFksTSxvQiw4REFDYkQsRyxFO0EsWSw0QjtBLFksUTtBLGMsRTtBLGdCQUFoQixDQUFDLG9CO0Esa0JBQVMsa0M7QSxnQixDO0Esa0IsRTtBLG9CQUFZLFMsR0FBU0MsSyxNO0Esc0IsMkI7QSxzQixNLG9CLDhEQUNiRCxHLEU7QSxzQiw0QjtBLHNCLFE7QSx3QixFO0EsMEJBQWhCLENBQUMsb0I7QSw0QkFBUyxrQztBLDBCLEM7QSw0QixFO0EsOEJBQ0csTyxHQUFPRSxPLE07QSxnQywyQjtBLGdDLE0sb0IsOERBQ0FGLEcsRTtBLGdDLDRCO0EsZ0MsUTtBLGtDLEU7QSxvQyxFO0Esc0NBQWhCLENBQUMsb0I7QSx3Q0FBUyxrQztBLHNDLEU7QTtBLG9DLEc7QSxrQyxHO0EsZ0MsQztBLDhCLEU7QSw4QkFFRCxTLEdBQVNFLE8sTTtBLGdDLDJCO0EsZ0MsTSxvQiw4REFDRkYsRyxFO0EsZ0MsNEI7QSxnQyxRO0Esa0MsRTtBLG9DLEU7QSxzQ0FBaEIsQ0FBQyxvQjtBLHdDQUFTLGtDO0Esc0MsRTtBO0Esb0MsRztBLGtDLEc7QSxnQyxDO0EsOEIsRTtBLDRCLEU7QSwwQkFFZCxFLG9CLEM7QSx3QixHO0Esc0IsQztBLG9CLEU7QSxrQixFO0EsZ0JBQ0YsRSxvQixDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFO0EsTUFDRixFLG9CLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxQPj41IiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGNvbXBvbmVudCA6aXM9XCJmb29cIiAjZGVmYXVsdD1cIntiYXJ9XCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6XCI+XG4gICAgICA8dGVtcGxhdGUgI290aGVyPVwieyBmb28gfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImZvb1wiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBiYXIgfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImJhclwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvY29tcG9uZW50PlxuICA8L2NvbXBvbmVudD5cbjwvY29tcG9uZW50PlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  return (
    <>
      <FooBar
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}
      </FooBar>
      <Foo.Bar
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}
      </Foo.Bar>
      <Foo.Bar.Baz
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}
      </Foo.Bar.Baz>
      <FooBar
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          default: () => {
            return (
              <>
                {"foo"}
              </>
            )
          },
        }}
      </FooBar>
      <foo-bar
        /*<vuedx:tsx-competions-target/>*/
      >
        {"foo"}
      </foo-bar>
      <unknown-element
        /*<vuedx:tsx-competions-target/>*/
      >
        {"foo"}
      </unknown-element>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTgyNgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7ewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0KICAgICAgPC9Gb29CYXI+CiAgICAgIDxGb28uQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge3sKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH19CiAgICAgIDwvRm9vLkJhcj4KICAgICAgPEZvby5CYXIuQmF6CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge3sKICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgeyJmb28ifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH19CiAgICAgIDwvRm9vLkJhci5CYXo+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7ewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZvbyJ9CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0KICAgICAgPC9Gb29CYXI+CiAgICAgIDxmb28tYmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJmb28ifQogICAgICA8L2Zvby1iYXI+CiAgICAgIDx1bmtub3duLWVsZW1lbnQKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7ImZvbyJ9CiAgICAgIDwvdW5rbm93bi1lbGVtZW50PgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBfX1Z1ZURYX19Db21wb25lbnQgewogICRzbG90czogUmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+Cn0KLy8jZW5kcmVnaW9uCjEwMTEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDLE07QSxRQUFNLGtDO0EsTSxDO0EsUSxFO0EsVSxPLEcsTTtBLFksUTtBLGMsRTtBLGdCLENBQUNBLEssQztBLGMsRztBLFksQztBLFUsRTtBLFEsRTtBLE1BQUcsRSxNLEM7QSxNQUNYLENBQUMsTztBLFFBQU8sa0M7QSxNLEM7QSxRLEU7QSxVLE8sRyxNO0EsWSxRO0EsYyxFO0EsZ0IsQ0FBQ0EsSyxDO0EsYyxHO0EsWSxDO0EsVSxFO0EsUSxFO0EsTUFBRyxFLE8sQztBLE1BQ1osQ0FBQyxXO0EsUUFBVyxrQztBLE0sQztBLFEsRTtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEU7QSxNQUFHLEUsVyxDO0EsTUFDaEIsQ0FBQyxNO0EsUUFBTSxrQztBLE0sQztBLFEsRTtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxLLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEU7QSxNQUFHLEUsTSxDO0EsTUFDWCxDQUFDQyxPO0EsUUFBTyxrQztBLE0sQztBLFEsQ0FBQ0QsSyxDO0EsTUFBRyxFLE8sQztBLE1BQ1osQ0FBQ0UsZTtBLFFBQWUsa0M7QSxNLEM7QSxRLENBQUNGLEssQztBLE1BQUcsRSxlLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxUPj4zfDUiLCI8PFA+PjciLCI8PFA+PjE1Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvb0Jhcj5mb288L0Zvb0Jhcj5cbjxGb28uQmFyPmZvbzwvRm9vLkJhcj5cbjxGb28uQmFyLkJhej5mb288L0Zvby5CYXIuQmF6PlxuPGZvb0Jhcj5mb288L2Zvb0Jhcj5cbjxmb28tYmFyPmZvbzwvZm9vLWJhcj5cbjx1bmtub3duLWVsZW1lbnQ+Zm9vPC91bmtub3duLWVsZW1lbnQ+XG5cbjwvdGVtcGxhdGU+Il19)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let name = __VueDX__ctx.name;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <HelloWorld
        n
        /*<vuedx:tsx-competions-target/>*/
      />

      <span
        /*<vuedx:tsx-competions-target/>*/
      >
        {"Name: "}
        {name +}
      </span>
      <p
        {...(/*<vuedx:missingExpression>*/)}
        /*<vuedx:tsx-competions-target/>*/
      >
      </p>
      {
        ? <>
            <p
              /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTMwMQAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG5hbWUgPSBfX1Z1ZURYX19jdHgubmFtZTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxIZWxsb1dvcmxkCiAgICAgICAgbgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KCiAgICAgIDxzcGFuCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJOYW1lOiAifQogICAgICAgIHtuYW1lICt9CiAgICAgIDwvc3Bhbj4KICAgICAgPHAKICAgICAgICB7Li4uKC8qPHZ1ZWR4Om1pc3NpbmdFeHByZXNzaW9uPiovKX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9wPgogICAgICB7CiAgICAgICAgPyA8PgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICA8L3A+CiAgICAgICAgICA8Lz4KICAgICAgICA6IG51bGwKICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBuYW1lID0gX19WdWVEWF9fY3R4Lm5hbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBfX1Z1ZURYX19Db21wb25lbnQgewogICRzbG90czogUmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+Cn0KLy8jZW5kcmVnaW9uCjY5NwB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLDJCO0EsRSw2QjtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUMsVTtBLFFBQVdBLEM7QSxRQUFELGtDO0EsTSxFO0E7QSxNQUNYLENBQUNDLEk7QSxRQUFJLGtDO0EsTSxDO0EsUSxDQUFDQyxRLEM7QSxRQUFNLENBQUdDLE1BQU0sQztBLE1BQUcsRSxJLEM7QSxNQUN4QixDQUFDSCxDO0EsUSxLQUFTLDZCLEU7QSxRQUFSLGtDO0EsTSxDO0EsTUFBUyxFLEMsQztBLE0sQ0FDRkksQTtBLFEsRSxFO0EsWUFBVCxDQUFDSixDO0EsY0FBQyxrQztBLFksQztBLFlBQVMsRSxDLEM7QSxVLEc7QSxNLFE7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDZCO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4xIiwiPDxQPj40IiwiPDxUPj42fDgiLCI8PFA+PjYiLCI8PFA+PjAiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48SGVsbG9Xb3JsZCBuIC8+XG48c3Bhbj5OYW1lOiB7eyBuYW1lICsgfX08L3NwYW4+XG48cCB2LWJpbmQ6PjwvcD5cbjxwIHYtaWY9XCJcIj48L3A+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec element  single 1`] = `
## 1.1. element > single

\`\`\`vue-html
<div>foo</div>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  return (
    <>
      <div
        /*<vuedx:tsx-competions-target/>*/
      >
        {"foo"}
      </div>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NzQzAC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiZm9vIn0KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KMzU0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRztBLFFBQUcsa0M7QSxNLEM7QSxRLENBQUNDLEssQztBLE1BQUcsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj4zfDUiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PmZvbzwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
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
              /*<vuedx:tsx-competions-target/>*/
            >
              {
                __VueDX__ctx.$slots['default']({
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
                      /*<vuedx:tsx-competions-target/>*/
                    >
                      {
                        __VueDX__ctx.$slots["other"]({
                          ...(props),
                          myProp: : item,
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
  return __VueDX__TypeCheck.internal.flat([
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
                myProp: : item,
              },
            }
          ))
        )
      ))
    ),
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjU0MwAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGxpc3QgPSBfX1Z1ZURYX19jdHgubGlzdDsKICBsZXQgcHJvcHMgPSBfX1Z1ZURYX19jdHgucHJvcHM7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobGlzdCwgKGl0ZW1zKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgX19WdWVEWF9fY3R4LiRzbG90c1snZGVmYXVsdCddKHsKICAgICAgICAgICAgICAgIH0pID8/ICgKICAgICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgICB7ImZhbGxiYWNrIGNvbnRlbnQifQogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoaXRlbXMsIChpdGVtKSA9PiB7CiAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgPHNwYW4KICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgIF9fVnVlRFhfX2N0eC4kc2xvdHNbIm90aGVyIl0oewogICAgICAgICAgICAgICAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgICAgICAgICAgICAgICAgbXlQcm9wOiA6IGl0ZW0sCiAgICAgICAgICAgICAgICAgICAgICAgIH0pID8/ICgKICAgICAgICAgICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgeyJmYWxsYmFjayBjb250ZW50In0KICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4KICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGlzdCA9IF9fVnVlRFhfX2N0eC5saXN0OwogIGxldCBwcm9wcyA9IF9fVnVlRFhfX2N0eC5wcm9wczsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KAogICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChsaXN0LCAoaXRlbXMpID0+ICgKICAgICAgICB7CiAgICAgICAgICBkZWZhdWx0OiB7CiAgICAgICAgICB9LAogICAgICAgIH0KICAgICAgKSkKICAgICksCiAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdCgKICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobGlzdCwgKGl0ZW1zKSA9PiAoCiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoCiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChpdGVtcywgKGl0ZW0pID0+ICgKICAgICAgICAgICAgewogICAgICAgICAgICAgICJvdGhlciI6IHsKICAgICAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgICAgICBteVByb3A6IDogaXRlbSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9CiAgICAgICAgICApKQogICAgICAgICkKICAgICAgKSkKICAgICksCiAgXSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBfX1Z1ZURYX19Db21wb25lbnQgewogICRzbG90czogUmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+Cn0KLy8jZW5kcmVnaW9uCjEyNDcAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUsNkI7QSxFLCtCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQztBLFEsdUNBQ3FCQSxJLEUsQ0FBVEMsSyxDLEs7QSxVLFE7QSxZQUFaLENBQUNDLEc7QSxjQUFHLGtDO0EsWSxDO0EsYyxDO0EsZ0Isb0IsUyxHO0EsZ0IsRSxJLEM7QSxrQixFO0Esb0IsQ0FDSUMsa0IsQztBLGtCLEc7QSxnQixDO0EsYyxDO0EsYyxDO0EsZ0IsdUNBQ2VGLEssRSxDQUFSRCxJLEMsSztBLGtCLFE7QSxvQkFBYixDQUFDQSxJO0Esc0JBQUksa0M7QSxvQixDO0Esc0IsQztBLHdCLG9CQUNRSSxPLEc7QSwwQkFBUSxJQUFRSCxLLEMsQztBLHdCQUFPLEVBQUNJLE0sRSxFQUFRTCxJLEM7QSx3QixFLEksQztBLDBCLEU7QSw0QixDQUFNRyxrQixDO0EsMEIsRztBLHdCLEM7QSxzQixDO0Esb0JBQ25ELEUsSSxDO0Esa0IsQztBLGdCLEMsQztBLGMsQztBLFlBQ0YsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsNkI7QSxFLCtCO0EsRSw0QjtBLEUseUM7QSxJLGdDLEM7QSxNLHNDLENBTHFCSCxJLEUsQ0FBVEMsSyxDLEs7QSxRLEM7QSxVLE8sRSxDO0EsVSxFO0EsUSxDO0EsTSxFO0EsSSxDLEM7QSxJLGdDLEM7QSxNLHNDLENBQVNELEksRSxDQUFUQyxLLEMsSztBLFEsZ0MsQztBLFUsc0MsQ0FFV0EsSyxFLENBQVJELEksQyxLO0EsWSxDO0EsYyxPLEUsQztBLGdCQUNRLElBQVFDLEssQyxDO0EsY0FBTyxFQUFDSSxNLEUsRUFBUUwsSSxDO0EsYyxFO0EsWSxDO0EsVSxFO0EsUSxDO0EsTSxFO0EsSSxDLEM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj40IiwiPDxQPj41IiwiPDxQPj4zIiwiPDxUPj4xNnwxOCIsIjw8UD4+NyIsIjw8UD4+NiJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1mb3I9XCJpdGVtcyBvZiBsaXN0XCI+XG4gIDxzbG90PmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDxzcGFuIHYtZm9yPVwiaXRlbSBvZiBpdGVtc1wiPlxuICAgIDxzbG90IG5hbWU9XCJvdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cIml0ZW1cIj5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8L3NwYW4+XG48L2Rpdj5cblxuPC90ZW1wbGF0ZT4iXX0=)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let props = __VueDX__ctx.props;
  let value = __VueDX__ctx.value;
  let dynamic = __VueDX__ctx.dynamic;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        /*<vuedx:tsx-competions-target/>*/
      >
        {
          __VueDX__ctx.$slots['default']({
          }) ?? (
            <>
              {"fallback content"}
            </>
          )
        }
        <span
          /*<vuedx:tsx-competions-target/>*/
        >
          {
            __VueDX__ctx.$slots["other"]({
              ...(props),
              myProp: : value,
            }) ?? (
              <>
                {"fallback content"}
              </>
            )
          }
        </span>
        {
          __VueDX__ctx.$slots["another"]({
            ...(props),
            myProp: : value,
          })}
        {
          __VueDX__ctx.$slots[name]({
            ...(props),
            myProp: : value,
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
  return __VueDX__TypeCheck.internal.flat([
    {
      default: {
      },
    },
    {
      "other": {
        ...(props),
        myProp: : value,
      },
    },
    {
      "another": {
        ...(props),
        myProp: : value,
      },
    },
    {
      [dynamic]: {
        ...(props),
        myProp: : value,
      },
    },
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjA2NQAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IHByb3BzID0gX19WdWVEWF9fY3R4LnByb3BzOwogIGxldCB2YWx1ZSA9IF9fVnVlRFhfX2N0eC52YWx1ZTsKICBsZXQgZHluYW1pYyA9IF9fVnVlRFhfX2N0eC5keW5hbWljOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsKICAgICAgICAgIF9fVnVlRFhfX2N0eC4kc2xvdHNbJ2RlZmF1bHQnXSh7CiAgICAgICAgICB9KSA/PyAoCiAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgeyJmYWxsYmFjayBjb250ZW50In0KICAgICAgICAgICAgPC8+CiAgICAgICAgICApCiAgICAgICAgfQogICAgICAgIDxzcGFuCiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgewogICAgICAgICAgICBfX1Z1ZURYX19jdHguJHNsb3RzWyJvdGhlciJdKHsKICAgICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICAgIG15UHJvcDogOiB2YWx1ZSwKICAgICAgICAgICAgfSkgPz8gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImZhbGxiYWNrIGNvbnRlbnQifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9CiAgICAgICAgPC9zcGFuPgogICAgICAgIHsKICAgICAgICAgIF9fVnVlRFhfX2N0eC4kc2xvdHNbImFub3RoZXIiXSh7CiAgICAgICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgICAgIG15UHJvcDogOiB2YWx1ZSwKICAgICAgICAgIH0pfQogICAgICAgIHsKICAgICAgICAgIF9fVnVlRFhfX2N0eC4kc2xvdHNbbmFtZV0oewogICAgICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgICAgICBteVByb3A6IDogdmFsdWUsCiAgICAgICAgICB9KX0KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IHByb3BzID0gX19WdWVEWF9fY3R4LnByb3BzOwogIGxldCB2YWx1ZSA9IF9fVnVlRFhfX2N0eC52YWx1ZTsKICBsZXQgZHluYW1pYyA9IF9fVnVlRFhfX2N0eC5keW5hbWljOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogICAgewogICAgICBkZWZhdWx0OiB7CiAgICAgIH0sCiAgICB9LAogICAgewogICAgICAib3RoZXIiOiB7CiAgICAgICAgLi4uKHByb3BzKSwKICAgICAgICBteVByb3A6IDogdmFsdWUsCiAgICAgIH0sCiAgICB9LAogICAgewogICAgICAiYW5vdGhlciI6IHsKICAgICAgICAuLi4ocHJvcHMpLAogICAgICAgIG15UHJvcDogOiB2YWx1ZSwKICAgICAgfSwKICAgIH0sCiAgICB7CiAgICAgIFtkeW5hbWljXTogewogICAgICAgIC4uLihwcm9wcyksCiAgICAgICAgbXlQcm9wOiA6IHZhbHVlLAogICAgICB9LAogICAgfSwKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KMTM3OAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLDJCO0EsRSwrQjtBLEUsK0I7QSxFLG1DO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRztBLFFBQUcsa0M7QSxNLEM7QSxRLEM7QSxVLG9CLFMsRztBLFUsRSxJLEM7QSxZLEU7QSxjLENBQ0lDLGtCLEM7QSxZLEc7QSxVLEM7QSxRLEM7QSxRQUNOLENBQUNDLEk7QSxVQUFJLGtDO0EsUSxDO0EsVSxDO0EsWSxvQkFDUUMsTyxHO0EsY0FBUSxJQUFRQyxLLEMsQztBLFlBQU8sRUFBQ0MsTSxFLEVBQVFELEssQztBLFksRSxJLEM7QSxjLEU7QSxnQixDQUFPSCxrQixDO0EsYyxHO0EsWSxDO0EsVSxDO0EsUUFDcEQsRSxJLEM7QSxRLEM7QSxVLG9CQUNXSyxTLEc7QSxZQUFVLElBQVFGLEssQyxDO0EsVUFBTyxFQUFDQyxNLEUsRUFBUUQsSyxDO0EsVSxFLEM7QSxRLEM7QSxVLG9CQUN0Q0YsSSxHO0EsWUFBZSxJQUFRRSxLLEMsQztBLFVBQU8sRUFBQ0MsTSxFLEVBQVFELEssQztBLFUsRSxDO0EsTUFDaEQsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLCtCO0EsRSwrQjtBLEUsbUM7QSxFLDRCO0EsRSx5QztBLEksQztBLE0sTyxFLEM7QSxNLEU7QSxJLEMsQztBLEksQztBLE0sTyxFLEM7QSxRQUp1QixJQUFRQSxLLEMsQztBLE1BQU8sRUFBQ0MsTSxFLEVBQVFELEssQztBLE0sRTtBLEksQyxDO0EsSSxDO0EsTSxTLEUsQztBLFFBRXhCLElBQVFBLEssQyxDO0EsTUFBTyxFQUFDQyxNLEUsRUFBUUQsSyxDO0EsTSxFO0EsSSxDLEM7QSxJLEM7QSxNLENBQ2hDRCxPLEMsRSxDO0EsUUFBUyxJQUFRQyxLLEMsQztBLE1BQU8sRUFBQ0MsTSxFLEVBQVFELEssQztBLE0sRTtBLEksQyxDO0EsRSxFO0EsQSxDO0EsQSw4Qjs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8VD4+MTZ8MTgiLCI8PFA+PjQiLCI8PFA+PjciLCI8PFA+PjUiLCI8PFA+PjYiLCI8PFA+PjkiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2PlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3Bhbj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDwvc3Bhbj5cbiAgPHNsb3QgbmFtZT1cImFub3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPjwvc2xvdD5cbiAgPHNsb3QgOm5hbWU9XCJkeW5hbWljXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIiAvPlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-bind default 1`] = `
## 2.1. v-bind 

\`\`\`vue-html
<input :value="myInput" :[customName]="myInput" v-bind="rest" />
<Foo :value="myInput" :[customName]="myInput" v-bind="rest" />
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let myInput = __VueDX__ctx.myInput;
  let customName = __VueDX__ctx.customName;
  let rest = __VueDX__ctx.rest;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        value={myInput}
        {...({[customName]: myInput})}
        {...(rest)}
        /*<vuedx:tsx-competions-target/>*/
      />
      <Foo
        value={myInput}
        {...({[customName]: myInput})}
        {...(rest)}
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTI5NwAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG15SW5wdXQgPSBfX1Z1ZURYX19jdHgubXlJbnB1dDsKICBsZXQgY3VzdG9tTmFtZSA9IF9fVnVlRFhfX2N0eC5jdXN0b21OYW1lOwogIGxldCByZXN0ID0gX19WdWVEWF9fY3R4LnJlc3Q7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aW5wdXQKICAgICAgICB2YWx1ZT17bXlJbnB1dH0KICAgICAgICB7Li4uKHtbY3VzdG9tTmFtZV06IG15SW5wdXR9KX0KICAgICAgICB7Li4uKHJlc3QpfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPEZvbwogICAgICAgIHZhbHVlPXtteUlucHV0fQogICAgICAgIHsuLi4oe1tjdXN0b21OYW1lXTogbXlJbnB1dH0pfQogICAgICAgIHsuLi4ocmVzdCl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgoKICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXlJbnB1dCA9IF9fVnVlRFhfX2N0eC5teUlucHV0OwogIGxldCBjdXN0b21OYW1lID0gX19WdWVEWF9fY3R4LmN1c3RvbU5hbWU7CiAgbGV0IHJlc3QgPSBfX1Z1ZURYX19jdHgucmVzdDsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KNjk2AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsMkI7QSxFLG1DO0EsRSx5QztBLEUsNkI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxLO0EsUUFBT0EsSyxDLENBQU9DLE8sQztBLFEsT0FBV0MsVSxDLEVBQWFELE8sRztBLFEsS0FBaUJFLEksRTtBLFFBQWxELGtDO0EsTSxFO0EsTUFDTixDQUFDLEc7QSxRQUFLSCxLLEMsQ0FBT0MsTyxDO0EsUSxPQUFXQyxVLEMsRUFBYUQsTyxHO0EsUSxLQUFpQkUsSSxFO0EsUUFBbEQsa0M7QSxNLEU7QTtBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsbUM7QSxFLHlDO0EsRSw2QjtBLEUsNEI7QSxFLHlDO0EsRSxFO0EsQSxDO0EsQSw4Qjs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+NyIsIjw8UD4+MTAiLCI8PFA+PjQiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgOnZhbHVlPVwibXlJbnB1dFwiIDpbY3VzdG9tTmFtZV09XCJteUlucHV0XCIgdi1iaW5kPVwicmVzdFwiIC8+XG48Rm9vIDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
              /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NTA1MwAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG51bSA9IF9fVnVlRFhfX2N0eC5udW07CiAgbGV0IHN0ciA9IF9fVnVlRFhfX2N0eC5zdHI7CiAgbGV0IGFyciA9IF9fVnVlRFhfX2N0eC5hcnI7CiAgbGV0IG9iaiA9IF9fVnVlRFhfX2N0eC5vYmo7CiAgbGV0IGl0ciA9IF9fVnVlRFhfX2N0eC5pdHI7CiAgbGV0IGJvbyA9IF9fVnVlRFhfX2N0eC5ib287CiAgbGV0IHN5bSA9IF9fVnVlRFhfX2N0eC5zeW07CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QobnVtLCAobikgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtufQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChudW0sIChuLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge259CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qoc3RyLCAocykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtzfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChzdHIsIChzLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3N9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoYSkgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHthfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsICh7IHZhbHVlIH0pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7dmFsdWV9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGFyciwgKHsgZm9vIH0pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7YXJyfQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChhcnIsIChhLCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2F9CiAgICAgICAgICAgICAgeyI6In0KICAgICAgICAgICAgICB7aX0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYXJyLCAoeyB2YWx1ZSB9LCBpKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3ZhbHVlfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG9iaiwgKG8pID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7b30KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3Qob2JqLCAobywgaykgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtvfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2t9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KG9iaiwgKG8sIGssIGkpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7b30KICAgICAgICAgICAgICB7IjoifQogICAgICAgICAgICAgIHtrfQogICAgICAgICAgICAgIHsiOiJ9CiAgICAgICAgICAgICAge2l9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgICAgewogICAgICAgIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZW5kZXJMaXN0KGl0ciwgKHQpID0+IHsKICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7dH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICApCiAgICAgICAgfSkKICAgICAgfQogICAgICB7CiAgICAgICAgX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLnJlbmRlckxpc3QoYm9vLCAoYikgPT4gewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHtifQogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICkKICAgICAgICB9KQogICAgICB9CiAgICAgIHsKICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdChzeW0sIChzKSA9PiB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge3N9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgKQogICAgICAgIH0pCiAgICAgIH0KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbnVtID0gX19WdWVEWF9fY3R4Lm51bTsKICBsZXQgc3RyID0gX19WdWVEWF9fY3R4LnN0cjsKICBsZXQgYXJyID0gX19WdWVEWF9fY3R4LmFycjsKICBsZXQgb2JqID0gX19WdWVEWF9fY3R4Lm9iajsKICBsZXQgaXRyID0gX19WdWVEWF9fY3R4Lml0cjsKICBsZXQgYm9vID0gX19WdWVEWF9fY3R4LmJvbzsKICBsZXQgc3ltID0gX19WdWVEWF9fY3R4LnN5bTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KMzMxNgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLEM7QSxRLHVDQUNpQkEsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxrQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1BELEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGNBQUcsa0M7QSxZLEM7QSxjQUF1QixDQUFHQyxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDekJELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsa0M7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNQRCxHLEUsQ0FBVEMsQyxFQUFHQSxDLEMsSztBLFUsUTtBLFlBQWhCLENBQUNELEc7QSxjQUFHLGtDO0EsWSxDO0EsY0FBdUIsQ0FBR0MsQ0FBQyxDO0EsYyxDQUFHQyxHLEM7QSxjQUFDLENBQUdELENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ3pCRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLGtDO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDSkQsRyxFLENBQWJHLFMsQyxLO0EsVSxRO0EsWUFBWixDQUFDSCxHO0EsY0FBRyxrQztBLFksQztBLGNBQTBCLENBQUdJLEtBQUssQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ2xCSixHLEUsQ0FBWEssTyxDLEs7QSxVLFE7QSxZQUFaLENBQUNMLEc7QSxjQUFHLGtDO0EsWSxDO0EsY0FBd0IsQ0FBR0EsR0FBRyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDZkEsRyxFLENBQVRDLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFoQixDQUFDRCxHO0EsY0FBRyxrQztBLFksQztBLGNBQXVCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNaRCxHLEUsQ0FBakJHLFMsRUFBV0YsQyxDLEs7QSxVLFE7QSxZQUF4QixDQUFDRCxHO0EsY0FBRyxrQztBLFksQztBLGNBQStCLENBQUdJLEtBQUssQztBLGMsQ0FBR0YsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNyQ0QsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxrQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLE0sQztBLFEsdUNBQ1BELEcsRSxDQUFUQyxDLEVBQUdBLEMsQyxLO0EsVSxRO0EsWUFBaEIsQ0FBQ0QsRztBLGNBQUcsa0M7QSxZLEM7QSxjQUF1QixDQUFHQyxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDakJELEcsRSxDQUFaQyxDLEVBQUdBLEMsRUFBR0EsQyxDLEs7QSxVLFE7QSxZQUFuQixDQUFDRCxHO0EsY0FBRyxrQztBLFksQztBLGNBQTBCLENBQUdDLENBQUMsQztBLGMsQ0FBR0MsRyxDO0EsY0FBQyxDQUFHRCxDQUFDLEM7QSxjLENBQUdDLEcsQztBLGNBQUMsQ0FBR0QsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDcENELEcsRSxDQUFMQyxDLEMsSztBLFUsUTtBLFlBQVosQ0FBQ0QsRztBLGNBQUcsa0M7QSxZLEM7QSxjQUFrQixDQUFHQyxDQUFDLEM7QSxZQUFHLEUsRyxDO0EsVSxDO0EsUSxDLEM7QSxNLEM7QSxNLEM7QSxRLHVDQUNaRCxHLEUsQ0FBTEMsQyxDLEs7QSxVLFE7QSxZQUFaLENBQUNELEc7QSxjQUFHLGtDO0EsWSxDO0EsY0FBa0IsQ0FBR0MsQ0FBQyxDO0EsWUFBRyxFLEcsQztBLFUsQztBLFEsQyxDO0EsTSxDO0EsTSxDO0EsUSx1Q0FDWkQsRyxFLENBQUxDLEMsQyxLO0EsVSxRO0EsWUFBWixDQUFDRCxHO0EsY0FBRyxrQztBLFksQztBLGNBQWtCLENBQUdDLENBQUMsQztBLFlBQUcsRSxHLEM7QSxVLEM7QSxRLEMsQztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjMiLCI8PFA+PjEiLCI8PFQ+PjF8MyIsIjw8UD4+OSIsIjw8UD4+NSIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1mb3I9XCJuIG9mIG51bVwiPnt7IG4gfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobiwgaSkgb2YgbnVtXCI+e3sgbiB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwicyBvZiBzdHJcIj57eyBzIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHMsIGkpIG9mIHN0clwiPnt7IHMgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cImEgb2YgYXJyXCI+e3sgYSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInsgdmFsdWUgfSBvZiBhcnJcIj57eyB2YWx1ZSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInsgZm9vIH0gb2YgYXJyXCI+e3sgYXJyIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKGEsIGkpIG9mIGFyclwiPnt7IGEgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIih7IHZhbHVlIH0sIGkpIG9mIGFyclwiPnt7IHZhbHVlIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJvIG9mIG9ialwiPnt7IG8gfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaykgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG8sIGssIGkpIG9mIG9ialwiPnt7IG8gfX06e3sgayB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwidCBvZiBpdHJcIj57eyB0IH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYiBvZiBib29cIj57eyBiIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwicyBvZiBzeW1cIj57eyBzIH19PC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-html default 1`] = `
## 7.1. v-html 

\`\`\`vue-html
<div v-html="html"></div>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let html = __VueDX__ctx.html;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        innerHTML={html}
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#OTM4AC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgaHRtbCA9IF9fVnVlRFhfX2N0eC5odG1sOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGRpdgogICAgICAgIGlubmVySFRNTD17aHRtbH0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9kaXY+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGh0bWwgPSBfX1Z1ZURYX19jdHguaHRtbDsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KNDE0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsMkI7QSxFLDZCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsRztBLFFBQUksUyxDLENBQVFDLEksQztBLFFBQVQsa0M7QSxNLEM7QSxNQUFlLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSw2QjtBLEUsNEI7QSxFLHlDO0EsRSxFO0EsQSxDO0EsQSw4Qjs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+MyIsIjw8UD4+NCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgdi1odG1sPVwiaHRtbFwiPjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  elif no if 1`] = `
## 5.8. v-if/v-else/v-else-if > elif no if

\`\`\`vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <h1
        /*<vuedx:tsx-competions-target/>*/
      >
        {"Vue is awesome!"}
      </h1>
      <h1
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTA0NQAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxoMQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgPC9oMT4KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJPaCBubyDwn5iiIn0KICAgICAgPC9oMT4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgYXdlc29tZSA9IF9fVnVlRFhfX2N0eC5hd2Vzb21lOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo1MjkAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUsbUM7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxFO0EsUUFBRSxrQztBLE0sQztBLFEsQ0FBcUJDLGlCLEM7QSxNQUFlLEUsRSxDO0EsTUFDdkMsQ0FBQ0QsRTtBLFFBQUUsa0M7QSxNLEM7QSxRLENBQVFFLFUsQztBLE1BQVEsRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLG1DO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyIsIjw8VD4+OHwxMCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWVsc2UtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  else condition 1`] = `
## 5.7. v-if/v-else/v-else-if > else condition

\`\`\`vue-html
<h1 v-else="ok">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <h1
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#OTMxAC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2s7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgIDwvaDE+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo0MjMAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUseUI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxFO0EsUUFBRSxrQztBLE0sQztBLFEsQ0FBYUMsaUIsQztBLE1BQWUsRSxFLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLHlCO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWVsc2U9XCJva1wiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  if condition 1`] = `
## 5.6. v-if/v-else/v-else-if > if condition

\`\`\`vue-html
<h1 v-if>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  return (
    <>
      {<>
            <h1
              /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#ODE1AC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICByZXR1cm4gKAogICAgPD4KICAgICAgezw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiVnVlIGlzIGF3ZXNvbWUhIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgIDwvPgogICAgICB9CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KMzkyAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsUTtBLEksRTtBLE0sQyxFO0EsWUFDQSxDQUFDQSxFO0EsY0FBRSxrQztBLFksQztBLGMsQ0FBTUMsaUIsQztBLFlBQWUsRSxFLEM7QSxVLEc7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4yIiwiPDxUPj4xNXwxNyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWlmPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {ok
        ? <>
            <h1
              /*<vuedx:tsx-competions-target/>*/
            >
              {"Title"}
            </h1>
            <p
              /*<vuedx:tsx-competions-target/>*/
            >
              {"Paragraph 1"}
            </p>
            <p
              /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTI2MQAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAge29rCiAgICAgICAgPyA8PgogICAgICAgICAgICA8aDEKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlRpdGxlIn0KICAgICAgICAgICAgPC9oMT4KICAgICAgICAgICAgPHAKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlBhcmFncmFwaCAxIn0KICAgICAgICAgICAgPC9wPgogICAgICAgICAgICA8cAogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiUGFyYWdyYXBoIDIifQogICAgICAgICAgICA8L3A+CiAgICAgICAgICA8Lz4KICAgICAgICA6IG51bGwKICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvayA9IF9fVnVlRFhfX2N0eC5vazsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KNjU2AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsMkI7QSxFLHlCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE0sQ0FDZ0JBLEU7QSxRLEUsRTtBLFlBQ2QsQ0FBQ0EsRTtBLGNBQUUsa0M7QSxZLEM7QSxjLENBQUNDLE8sQztBLFlBQUssRSxFLEM7QSxZQUNULENBQUNDLEM7QSxjQUFDLGtDO0EsWSxDO0EsYyxDQUFDQyxhLEM7QSxZQUFXLEUsQyxDO0EsWUFDZCxDQUFDRCxDO0EsY0FBQyxrQztBLFksQztBLGMsQ0FBQ0MsYSxDO0EsWUFBVyxFLEMsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUseUI7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjV8NyIsIjw8UD4+MSIsIjw8VD4+MTF8MTMiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48dGVtcGxhdGUgdi1pZj1cIm9rXCI+XG4gIDxoMT5UaXRsZTwvaDE+XG4gIDxwPlBhcmFncmFwaCAxPC9wPlxuICA8cD5QYXJhZ3JhcGggMjwvcD5cbjwvdGVtcGxhdGU+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  if/else 1`] = `
## 5.2. v-if/v-else/v-else-if > if/else

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {awesome
        ? <>
            <h1
              /*<vuedx:tsx-competions-target/>*/
            >
              {"Vue is awesome!"}
            </h1>
          </>
        : <>
            <h1
              /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTE4MgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHthd2Vzb21lCiAgICAgICAgPyA8PgogICAgICAgICAgICA8aDEKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxoMQogICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgPgogICAgICAgICAgICAgIHsiT2ggbm8g8J+YoiJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBfX1Z1ZURYX19Db21wb25lbnQgewogICRzbG90czogUmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+Cn0KLy8jZW5kcmVnaW9uCjU3OQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLDJCO0EsRSxtQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQ1VBLE87QSxRLEUsRTtBLFlBQVYsQ0FBQ0MsRTtBLGNBQUUsa0M7QSxZLEM7QSxjLENBQWdCQyxpQixDO0EsWUFBZSxFLEUsQztBLFUsRztBLFEsRSxFO0EsWUFDbEMsQ0FBQ0QsRTtBLGNBQUUsa0M7QSxZLEM7QSxjLENBQVFFLFUsQztBLFlBQVEsRSxFLEM7QSxVLEc7QSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLG1DO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj43IiwiPDxQPj4yIiwiPDxUPj4xNXwxNyIsIjw8VD4+OHwxMCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG48aDEgdi1lbHNlPk9oIG5vIPCfmKI8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX__ctx.type;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {type === 'A'
        ? <>
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {" A "}
            </div>
          </>
        : type === 'B'
        ? <>
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {" B "}
            </div>
          </>
        : type === 'C'
        ? <>
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {" C "}
            </div>
          </>
        : <>
            <div
              /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTUxMgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IHR5cGUgPSBfX1Z1ZURYX19jdHgudHlwZTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHt0eXBlID09PSAnQScKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBBICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiB0eXBlID09PSAnQicKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBCICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiB0eXBlID09PSAnQycKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IiBDICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAgeyIgTm90IEEvQi9DICJ9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgIH0KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgdHlwZSA9IF9fVnVlRFhfX2N0eC50eXBlOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo4NTYAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUsNkI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTSxDQUNXQSxZO0EsUSxFLEU7QSxZQUFYLENBQUNDLEc7QSxjQUFHLGtDO0EsWSxDO0EsYyxDQUFxQkMsSyxDO0EsWUFFekIsRSxHLEM7QSxVLEc7QSxRLEVBQ2dCRixZO0EsUSxFLEU7QSxZQUFoQixDQUFDQyxHO0EsY0FBRyxrQztBLFksQztBLGMsQ0FBMEJDLEssQztBLFlBRTlCLEUsRyxDO0EsVSxHO0EsUSxFQUNnQkYsWTtBLFEsRSxFO0EsWUFBaEIsQ0FBQ0MsRztBLGNBQUcsa0M7QSxZLEM7QSxjLENBQTBCQyxLLEM7QSxZQUU5QixFLEcsQztBLFUsRztBLFEsRSxFO0EsWUFDQSxDQUFDRCxHO0EsY0FBRyxrQztBLFksQztBLGMsQ0FBUUUsYSxDO0EsWUFFWixFLEcsQztBLFUsRztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsNkI7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjEyIiwiPDxQPj4zIiwiPDxUPj41fDUiLCI8PFQ+PjEzfDEzIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwidHlwZSA9PT0gJ0EnXCI+XG4gIEFcbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJ0eXBlID09PSAnQidcIj5cbiAgQlxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdDJ1wiPlxuICBDXG48L2Rpdj5cbjxkaXYgdi1lbHNlPlxuICBOb3QgQS9CL0NcbjwvZGl2PlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
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
              /*<vuedx:tsx-competions-target/>*/
            >
              {foo
                ? <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
                    >
                    </div>
                  </>
                : bar
                ? <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
                    >
                    </div>
                  </>
                : <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
                    >
                    </div>
                  </>
              }
            </div>
          </>
        : bar
        ? <>
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {foo
                ? <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
                    >
                    </div>
                  </>
                : bar
                ? <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
                    >
                    </div>
                  </>
                : <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
                    >
                    </div>
                  </>
              }
            </div>
          </>
        : <>
            <div
              /*<vuedx:tsx-competions-target/>*/
            >
              {foo
                ? <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
                    >
                    </div>
                  </>
                : bar
                ? <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
                    >
                    </div>
                  </>
                : <>
                    <div
                      /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MzA0MgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb287CiAgbGV0IGJhciA9IF9fVnVlRFhfX2N0eC5iYXI7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICB7Zm9vCiAgICAgICAgPyA8PgogICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICA+CiAgICAgICAgICAgICAge2ZvbwogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiBiYXIKICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgIDogPD4KICAgICAgICAgICAgICAgICAgICA8ZGl2CiAgICAgICAgICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC8+CiAgICAgICAgOiBiYXIKICAgICAgICA/IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IGJhcgogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgICA6IDw+CiAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7Zm9vCiAgICAgICAgICAgICAgICA/IDw+CiAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgICAgICAgICAgICAgID4KICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgICA6IGJhcgogICAgICAgICAgICAgICAgPyA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgOiA8PgogICAgICAgICAgICAgICAgICAgIDxkaXYKICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8Lz4KICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIGxldCBiYXIgPSBfX1Z1ZURYX19jdHguYmFyOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgoxNTQxAHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQ1dBLEc7QSxRLEUsRTtBLFlBQVgsQ0FBQ0EsRztBLGNBQUcsa0M7QSxZLEM7QSxjLENBQ1NBLEc7QSxnQixFLEU7QSxvQkFBWCxDQUFDQSxHO0Esc0JBQUcsa0M7QSxvQixDO0Esb0JBQVksRSxHLEM7QSxrQixHO0EsZ0IsRUFDQUEsRztBLGdCLEUsRTtBLG9CQUFoQixDQUFDQSxHO0Esc0JBQUcsa0M7QSxvQixDO0Esb0JBQWlCLEUsRyxDO0Esa0IsRztBLGdCLEUsRTtBLG9CQUNyQixDQUFDQSxHO0Esc0JBQUcsa0M7QSxvQixDO0Esb0JBQVEsRSxHLEM7QSxrQixHO0EsYyxDO0EsWUFDZCxFLEcsQztBLFUsRztBLFEsRUFDZ0JBLEc7QSxRLEUsRTtBLFlBQWhCLENBQUNBLEc7QSxjQUFHLGtDO0EsWSxDO0EsYyxDQUNTQSxHO0EsZ0IsRSxFO0Esb0JBQVgsQ0FBQ0EsRztBLHNCQUFHLGtDO0Esb0IsQztBLG9CQUFZLEUsRyxDO0Esa0IsRztBLGdCLEVBQ0FBLEc7QSxnQixFLEU7QSxvQkFBaEIsQ0FBQ0EsRztBLHNCQUFHLGtDO0Esb0IsQztBLG9CQUFpQixFLEcsQztBLGtCLEc7QSxnQixFLEU7QSxvQkFDckIsQ0FBQ0EsRztBLHNCQUFHLGtDO0Esb0IsQztBLG9CQUFRLEUsRyxDO0Esa0IsRztBLGMsQztBLFlBQ2QsRSxHLEM7QSxVLEc7QSxRLEUsRTtBLFlBQ0EsQ0FBQ0EsRztBLGNBQUcsa0M7QSxZLEM7QSxjLENBQ1NBLEc7QSxnQixFLEU7QSxvQkFBWCxDQUFDQSxHO0Esc0JBQUcsa0M7QSxvQixDO0Esb0JBQVksRSxHLEM7QSxrQixHO0EsZ0IsRUFDQUEsRztBLGdCLEUsRTtBLG9CQUFoQixDQUFDQSxHO0Esc0JBQUcsa0M7QSxvQixDO0Esb0JBQWlCLEUsRyxDO0Esa0IsRztBLGdCLEUsRTtBLG9CQUNyQixDQUFDQSxHO0Esc0JBQUcsa0M7QSxvQixDO0Esb0JBQVEsRSxHLEM7QSxrQixHO0EsYyxDO0EsWUFDZCxFLEcsQztBLFUsRztBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiB2LWlmPVwiZm9vXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj5cbiAgPGRpdiB2LWlmPVwiZm9vXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlPjwvZGl2PlxuPC9kaXY+XG48ZGl2IHYtZWxzZT5cbiAgPGRpdiB2LWlmPVwiZm9vXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+PC9kaXY+XG4gIDxkaXYgdi1lbHNlPjwvZGl2PlxuPC9kaXY+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  no if 1`] = `
## 5.5. v-if/v-else/v-else-if > no if

\`\`\`vue-html
<h1 v-else>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  return (
    <>
      <h1
        /*<vuedx:tsx-competions-target/>*/
      >
        {"Vue is awesome!"}
      </h1>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NzUzAC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICByZXR1cm4gKAogICAgPD4KICAgICAgPGgxCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgeyJWdWUgaXMgYXdlc29tZSEifQogICAgICA8L2gxPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBfX1Z1ZURYX19Db21wb25lbnQgewogICRzbG90czogUmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+Cn0KLy8jZW5kcmVnaW9uCjM3NAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEU7QSxRQUFFLGtDO0EsTSxDO0EsUSxDQUFRQyxpQixDO0EsTUFBZSxFLEUsQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjE1fDE3Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtZWxzZT5WdWUgaXMgYXdlc29tZSE8L2gxPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-if/v-else/v-else-if  single if statement 1`] = `
## 5.1. v-if/v-else/v-else-if > single if statement

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX__ctx.awesome;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      {awesome
        ? <>
            <h1
              /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTA0NgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGF3ZXNvbWUgPSBfX1Z1ZURYX19jdHguYXdlc29tZTsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIHthd2Vzb21lCiAgICAgICAgPyA8PgogICAgICAgICAgICA8aDEKICAgICAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgICAgID4KICAgICAgICAgICAgICB7IlZ1ZSBpcyBhd2Vzb21lISJ9CiAgICAgICAgICAgIDwvaDE+CiAgICAgICAgICA8Lz4KICAgICAgICA6IG51bGwKICAgICAgfQogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBhd2Vzb21lID0gX19WdWVEWF9fY3R4LmF3ZXNvbWU7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBfX1Z1ZURYX19Db21wb25lbnQgewogICRzbG90czogUmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+Cn0KLy8jZW5kcmVnaW9uCjQ3NAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLDJCO0EsRSxtQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNLENBQ1VBLE87QSxRLEUsRTtBLFlBQVYsQ0FBQ0MsRTtBLGNBQUUsa0M7QSxZLEM7QSxjLENBQWdCQyxpQixDO0EsWUFBZSxFLEUsQztBLFUsRztBLE0sUTtBLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsbUM7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjciLCI8PFA+PjIiLCI8PFQ+PjE1fDE3Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cblxuPC90ZW1wbGF0ZT4iXX0=)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let MyComponent = __VueDX__ctx.MyComponent;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:templateGlobals>*/
  const __VueDX___Component0 = __VueDX__TypeCheck.internal.resolveComponent(__VueDX__ctx, MyComponent);
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <table
        /*<vuedx:tsx-competions-target/>*/
      >
        <tbody
          /*<vuedx:tsx-competions-target/>*/
        >
          <__VueDX___Component0
            /*<vuedx:tsx-competions-target/>*/
          >
            {{
              default: () => {
                return (
                  <>
                  </>
                )
              },
            }}
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTQ4NgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IE15Q29tcG9uZW50ID0gX19WdWVEWF9fY3R4Lk15Q29tcG9uZW50OwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBjb25zdCBfX1Z1ZURYX19fQ29tcG9uZW50MCA9IF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5yZXNvbHZlQ29tcG9uZW50KF9fVnVlRFhfX2N0eCwgTXlDb21wb25lbnQpOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPHRhYmxlCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPHRib2R5CiAgICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgICAgPgogICAgICAgICAgPF9fVnVlRFhfX19Db21wb25lbnQwCiAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgID4KICAgICAgICAgICAge3sKICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9fQogICAgICAgICAgPC9fX1Z1ZURYX19fQ29tcG9uZW50MD4KICAgICAgICA8L3Rib2R5PgogICAgICA8L3RhYmxlPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBNeUNvbXBvbmVudCA9IF9fVnVlRFhfX2N0eC5NeUNvbXBvbmVudDsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KNjI0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsMkI7QSxFLDJDO0EsRSw0QjtBLEUsMkI7QSxFLE0sb0IsOERBR2NBLFcsRTtBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUZkLENBQUNDLEs7QSxRQUFLLGtDO0EsTSxDO0EsUUFDSixDQUFDQSxLO0EsVUFBSyxrQztBLFEsQztBLFVBQ0osQ0FBQyxvQjtBLFlBQUUsa0M7QSxVLEM7QSxZLEU7QSxjLE8sRyxNO0EsZ0IsUTtBLGtCLEU7QSxrQixHO0EsZ0IsQztBLGMsRTtBLFksRTtBLFVBQW9CLEUsb0IsQztBLFFBQ3pCLEUsSyxDO0EsTUFDRixFLEssQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsMkM7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjExIiwiPDxQPj41Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHRhYmxlPlxuICA8dGJvZHk+XG4gICAgPHRyIHYtaXM9XCJNeUNvbXBvbmVudFwiPjwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
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
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        type="checkbox"
        true-value="yes"
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        type="checkbox"
        false-value="no"
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        type="checkbox"
        true-value={yes}
        false-value={no}
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTQwNgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb287CiAgbGV0IHllcyA9IF9fVnVlRFhfX2N0eC55ZXM7CiAgbGV0IG5vID0gX19WdWVEWF9fY3R4Lm5vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0iY2hlY2tib3giCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICB0cnVlLXZhbHVlPSJ5ZXMiCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICBmYWxzZS12YWx1ZT0ibm8iCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICB0eXBlPSJjaGVja2JveCIKICAgICAgICB0cnVlLXZhbHVlPXt5ZXN9CiAgICAgICAgZmFsc2UtdmFsdWU9e25vfQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgZm9vID0gX19WdWVEWF9fY3R4LmZvbzsKICBsZXQgeWVzID0gX19WdWVEWF9fY3R4LnllczsKICBsZXQgbm8gPSBfX1Z1ZURYX19jdHgubm87CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBfX1Z1ZURYX19Db21wb25lbnQgewogICRzbG90czogUmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+Cn0KLy8jZW5kcmVnaW9uCjkyNgB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLHlCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsSztBLFFBQU1DLEksQ0FBS0MsVTtBLFFBQU4sa0M7QSxNLEU7QSxNQUNOLENBQUNGLEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUF5QkEsVSxDQUFXRixLO0EsUUFBMUMsa0M7QSxNLEU7QSxNQUNOLENBQUNBLEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUF5QkMsVyxDQUFZRixJO0EsUUFBM0Msa0M7QSxNLEU7QSxNQUNOLENBQUNELEs7QSxRQUFNQyxJLENBQUtDLFU7QSxRQUEwQkEsVSxDLENBQVlFLEcsQztBLFFBQU1ELFcsQyxDQUFhRSxFLEM7QSxRQUEvRCxrQztBLE0sRTtBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDJCO0EsRSx5QjtBLEUsNEI7QSxFLHlDO0EsRSxFO0EsQSxDO0EsQSw4Qjs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+NCIsIjw8UD4+MTAiLCI8PFA+PjExIiwiPDxQPj4zIiwiPDxQPj4yIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiB0cnVlLXZhbHVlPVwieWVzXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgZmFsc2UtdmFsdWU9XCJub1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIDp0cnVlLXZhbHVlPVwieWVzXCIgOmZhbHNlLXZhbHVlPVwibm9cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <input
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        type="number"
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        type="tel"
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        type="checkbox"
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        type="radio"
        /*<vuedx:tsx-competions-target/>*/
      />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTI0NQAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb287CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aW5wdXQKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9Im51bWJlciIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9InRlbCIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICAgIDxpbnB1dAogICAgICAgIHR5cGU9ImNoZWNrYm94IgogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgdHlwZT0icmFkaW8iCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo3NzIAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUsMkI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxLO0EsUUFBSyxrQztBLE0sRTtBLE1BQ04sQ0FBQ0EsSztBLFFBQU1DLEksQ0FBS0MsUTtBLFFBQU4sa0M7QSxNLEU7QSxNQUNOLENBQUNGLEs7QSxRQUFNQyxJLENBQUtELEs7QSxRQUFOLGtDO0EsTSxFO0EsTUFDTixDQUFDQSxLO0EsUUFBTUMsSSxDQUFLRSxVO0EsUUFBTixrQztBLE0sRTtBLE1BQ04sQ0FBQ0gsSztBLFFBQU1DLEksQ0FBS0csTztBLFFBQU4sa0M7QSxNLEU7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj41IiwiPDxQPj40IiwiPDxQPj44IiwiPDxQPj4xMCIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxpbnB1dCB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cInRlbFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJyYWRpb1wiIHYtbW9kZWw9XCJmb29cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  let baz = __VueDX__ctx.baz;
  let vals = __VueDX__ctx.vals;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <select
        /*<vuedx:tsx-competions-target/>*/
      >
        <option
          value="foo"
          /*<vuedx:tsx-competions-target/>*/
        >
          {"foo"}
        </option>
        <option
          value="bar"
          /*<vuedx:tsx-competions-target/>*/
        >
          {"bar"}
        </option>
        <option
          value={baz}
          /*<vuedx:tsx-competions-target/>*/
        >
          {"baz"}
        </option>
      </select>
      <select
        /*<vuedx:tsx-competions-target/>*/
      >
        <option
          value="foo"
          /*<vuedx:tsx-competions-target/>*/
        >
          {"foo"}
        </option>
        {
          __VueDX__TypeCheck.internal.renderList(vals, (val) => {
            return (
              <option
                value={val}
                /*<vuedx:tsx-competions-target/>*/
              >
                {val}
              </option>
            )
          })
        }
        <option
          value="bar"
          /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjA2MgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb287CiAgbGV0IGJheiA9IF9fVnVlRFhfX2N0eC5iYXo7CiAgbGV0IHZhbHMgPSBfX1Z1ZURYX19jdHgudmFsczsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzZWxlY3QKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iZm9vIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiZm9vIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iYmFyIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmFyIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT17YmF6fQogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmF6In0KICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICAgIDxzZWxlY3QKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iZm9vIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiZm9vIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgICB7CiAgICAgICAgICBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwucmVuZGVyTGlzdCh2YWxzLCAodmFsKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPG9wdGlvbgogICAgICAgICAgICAgICAgdmFsdWU9e3ZhbH0KICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICB7dmFsfQogICAgICAgICAgICAgIDwvb3B0aW9uPgogICAgICAgICAgICApCiAgICAgICAgICB9KQogICAgICAgIH0KICAgICAgICA8b3B0aW9uCiAgICAgICAgICB2YWx1ZT0iYmFyIgogICAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAgID4KICAgICAgICAgIHsiYmFyIn0KICAgICAgICA8L29wdGlvbj4KICAgICAgPC9zZWxlY3Q+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb287CiAgbGV0IGJheiA9IF9fVnVlRFhfX2N0eC5iYXo7CiAgbGV0IHZhbHMgPSBfX1Z1ZURYX19jdHgudmFsczsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KMTMzOQB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLDJCO0EsRSwyQjtBLEUsMkI7QSxFLDZCO0EsRSw0QjtBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQ0EsTTtBLFFBQU0sa0M7QSxNLEM7QSxRQUNMLENBQUNBLE07QSxVQUFPQyxLLENBQU1BLEs7QSxVQUFQLGtDO0EsUSxDO0EsVSxDQUFhQyxLLEM7QSxRQUFHLEUsTSxDO0EsUUFDdkIsQ0FBQ0YsTTtBLFVBQU9DLEssQ0FBTUEsSztBLFVBQVAsa0M7QSxRLEM7QSxVLENBQWFDLEssQztBLFFBQUcsRSxNLEM7QSxRQUN2QixDQUFDRixNO0EsVUFBUUMsSyxDLENBQU9FLEcsQztBLFVBQVQsa0M7QSxRLEM7QSxVLENBQWNELEssQztBLFFBQUcsRSxNLEM7QSxNQUMxQixFLE0sQztBLE1BRUEsQ0FBQ0YsTTtBLFFBQU0sa0M7QSxNLEM7QSxRQUNMLENBQUNBLE07QSxVQUFPQyxLLENBQU1BLEs7QSxVQUFQLGtDO0EsUSxDO0EsVSxDQUFhQyxLLEM7QSxRQUFHLEUsTSxDO0EsUSxDO0EsVSx1Q0FDREUsSSxFLENBQVBELEcsQyxLO0EsWSxRO0EsY0FBZixDQUFDSCxNO0EsZ0JBQTRCQyxLLEMsQ0FBT0UsRyxDO0EsZ0JBQTdCLGtDO0EsYyxDO0EsZ0JBQWtDLENBQUdBLEdBQUcsQztBLGNBQUcsRSxNLEM7QSxZLEM7QSxVLEMsQztBLFEsQztBLFFBQ2xELENBQUNILE07QSxVQUFPQyxLLENBQU1BLEs7QSxVQUFQLGtDO0EsUSxDO0EsVSxDQUFhQyxLLEM7QSxRQUFHLEUsTSxDO0EsTUFDekIsRSxNLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDJCO0EsRSwyQjtBLEUsNkI7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjYiLCI8PFA+PjUiLCI8PFQ+PjN8NSIsIjw8UD4+MyIsIjw8UD4+NCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIHZhbHVlPVwiZm9vXCI+Zm9vPC9vcHRpb24+XG4gIDxvcHRpb24gdmFsdWU9XCJiYXJcIj5iYXI8L29wdGlvbj5cbiAgPG9wdGlvbiA6dmFsdWU9XCJiYXpcIj5iYXo8L29wdGlvbj5cbjwvc2VsZWN0PlxuXG48c2VsZWN0IHYtbW9kZWw9XCJmb29cIj5cbiAgPG9wdGlvbiB2YWx1ZT1cImZvb1wiPmZvbzwvb3B0aW9uPlxuICA8b3B0aW9uIHYtZm9yPVwidmFsIG9mIHZhbHNcIiA6dmFsdWU9XCJ2YWxcIj57eyB2YWwgfX08L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImJhclwiPmJhcjwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbjwvdGVtcGxhdGU+Il19)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <select
        /*<vuedx:tsx-competions-target/>*/
      >
        <option
          value={foo}
          /*<vuedx:tsx-competions-target/>*/
        >
          {foo}
        </option>
      </select>
      <textarea
        /*<vuedx:tsx-competions-target/>*/
      />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX__ctx.foo;
  /*</vuedx:templateGlobals>*/
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTExMAAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IGZvbyA9IF9fVnVlRFhfX2N0eC5mb287CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8c2VsZWN0CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAgPG9wdGlvbgogICAgICAgICAgdmFsdWU9e2Zvb30KICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICA+CiAgICAgICAgICB7Zm9vfQogICAgICAgIDwvb3B0aW9uPgogICAgICA8L3NlbGVjdD4KICAgICAgPHRleHRhcmVhCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBmb28gPSBfX1Z1ZURYX19jdHguZm9vOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo2MTAAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUsMkI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxNO0EsUUFBTSxrQztBLE0sQztBLFFBQ0wsQ0FBQ0EsTTtBLFVBQVFDLEssQyxDQUFPQyxHLEM7QSxVQUFULGtDO0EsUSxDO0EsVUFBYyxDQUFFQSxHQUFHLEM7QSxRQUFFLEUsTSxDO0EsTUFDOUIsRSxNLEM7QSxNQUNBLENBQUNDLFE7QSxRQUFRLGtDO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSwyQjtBLEUsNEI7QSxFLHlDO0EsRSxFO0EsQSxDO0EsQSw4Qjs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NiIsIjw8UD4+NSIsIjw8UD4+MyIsIjw8UD4+OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIDp2YWx1ZT1cImZvb1wiPnt7Zm9vfX08L29wdGlvbj5cbjwvc2VsZWN0PlxuPHRleHRhcmVhIHYtbW9kZWw9XCJmb29cIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
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
        onFocus={$event => {
          (onFocus)($event);
        }}
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        onUpdate:value={$event => {
          (($event) => {
          value = $event
          })($event);
        }}
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        onEvent-name={$event => {
        }}
        onEventName={$event => {
        }}
        {...(events)}
        /*<vuedx:tsx-competions-target/>*/
      />
      <input
        onKeydown={$event => {
          (fnName)($event);
          (($event) => {
          callMyFn($event)
          })($event);
          ($event => callMyFn($event))($event);
          (($event) => callMyFn($event))($event);
          (() => callMyFn($event))($event);
          (function myFunction($event) {
    callMyFn($event)
  })($event);
          (function myFunction() {
    callMyFn($event)
  })($event);
        }}
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjIxNwAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9uRm9jdXMgPSBfX1Z1ZURYX19jdHgub25Gb2N1czsKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWU7CiAgbGV0IGV2ZW50TmFtZSA9IF9fVnVlRFhfX2N0eC5ldmVudE5hbWU7CiAgbGV0IGV2ZW50cyA9IF9fVnVlRFhfX2N0eC5ldmVudHM7CiAgbGV0IGZuTmFtZSA9IF9fVnVlRFhfX2N0eC5mbk5hbWU7CiAgbGV0IGNhbGxNeUZuID0gX19WdWVEWF9fY3R4LmNhbGxNeUZuOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gKAogICAgPD4KICAgICAgPGlucHV0CiAgICAgICAgb25Gb2N1cz17JGV2ZW50ID0+IHsKICAgICAgICAgIChvbkZvY3VzKSgkZXZlbnQpOwogICAgICAgIH19CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICBvblVwZGF0ZTp2YWx1ZT17JGV2ZW50ID0+IHsKICAgICAgICAgICgoJGV2ZW50KSA9PiB7CiAgICAgICAgICB2YWx1ZSA9ICRldmVudAogICAgICAgICAgfSkoJGV2ZW50KTsKICAgICAgICB9fQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgLz4KICAgICAgPGlucHV0CiAgICAgICAgb25FdmVudC1uYW1lPXskZXZlbnQgPT4gewogICAgICAgIH19CiAgICAgICAgb25FdmVudE5hbWU9eyRldmVudCA9PiB7CiAgICAgICAgfX0KICAgICAgICB7Li4uKGV2ZW50cyl9CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8aW5wdXQKICAgICAgICBvbktleWRvd249eyRldmVudCA9PiB7CiAgICAgICAgICAoZm5OYW1lKSgkZXZlbnQpOwogICAgICAgICAgKCgkZXZlbnQpID0+IHsKICAgICAgICAgIGNhbGxNeUZuKCRldmVudCkKICAgICAgICAgIH0pKCRldmVudCk7CiAgICAgICAgICAoJGV2ZW50ID0+IGNhbGxNeUZuKCRldmVudCkpKCRldmVudCk7CiAgICAgICAgICAoKCRldmVudCkgPT4gY2FsbE15Rm4oJGV2ZW50KSkoJGV2ZW50KTsKICAgICAgICAgICgoKSA9PiBjYWxsTXlGbigkZXZlbnQpKSgkZXZlbnQpOwogICAgICAgICAgKGZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7CiAgICBjYWxsTXlGbigkZXZlbnQpCiAgfSkoJGV2ZW50KTsKICAgICAgICAgIChmdW5jdGlvbiBteUZ1bmN0aW9uKCkgewogICAgY2FsbE15Rm4oJGV2ZW50KQogIH0pKCRldmVudCk7CiAgICAgICAgfX0KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgIC8+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9uRm9jdXMgPSBfX1Z1ZURYX19jdHgub25Gb2N1czsKICBsZXQgdmFsdWUgPSBfX1Z1ZURYX19jdHgudmFsdWU7CiAgbGV0IGV2ZW50TmFtZSA9IF9fVnVlRFhfX2N0eC5ldmVudE5hbWU7CiAgbGV0IGV2ZW50cyA9IF9fVnVlRFhfX2N0eC5ldmVudHM7CiAgbGV0IGZuTmFtZSA9IF9fVnVlRFhfX2N0eC5mbk5hbWU7CiAgbGV0IGNhbGxNeUZuID0gX19WdWVEWF9fY3R4LmNhbGxNeUZuOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgoxNDU0AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsMkI7QSxFLG1DO0EsRSwrQjtBLEUsdUM7QSxFLGlDO0EsRSxpQztBLEUscUM7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxLO0EsUUFBTSxBLE8sQyxDLFc7QSxVLENBQVFDLE8sVTtBLFEsQyxDO0EsUUFBVCxrQztBLE0sRTtBLE1BQ04sQ0FBQ0QsSztBLFFBQU0sQSxjLEMsQyxXO0EsVSxDLGE7QSxVQUFlRSxjO0EsVSxDLFU7QSxRLEMsQztBLFFBQWhCLGtDO0EsTSxFO0EsTUFDTixDQUFDRixLO0EsUUFBTSxBLFksQyxDLFc7QSxRLEMsQztBLFFBQVksQUFBVyxBLFcsQyxDLFc7QSxRLEMsQztBLFEsS0FBbUJHLE0sRTtBLFFBQTNDLGtDO0EsTSxFO0EsTUFDTixDQUFDSCxLO0EsUUFDQyxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFHQSxBLFMsQyxDLFc7QSxVLENBUlVHLE0sVTtBLFUsQyxhO0EsVUFDS0MsZ0I7QSxVLEMsVTtBLFUsQ0FDTUMsMEIsVTtBLFUsQ0FDQ0MsNEIsVTtBLFUsQ0FDREMsc0IsVTtBLFUsQ0FDRkM7O0csVTtBLFUsQ0FHREM7O0csVTtBLFEsQyxDO0EsUUFUZCxrQztBLE0sRTtBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsbUM7QSxFLCtCO0EsRSx1QztBLEUsaUM7QSxFLGlDO0EsRSxxQztBLEUsNEI7QSxFLHlDO0EsRSxFO0EsQSxDO0EsQSw4Qjs7Ozs7OyIsIm5hbWVzIjpbIjw8UD4+NSIsIjw8UD4+NyIsIjw8UD4+MTQiLCI8PFA+PjYiLCI8PFA+PjE2IiwiPDxQPj4yNiIsIjw8UD4+MjgiLCI8PFA+PjIyIiwiPDxQPj41NCIsIjw8UD4+NDgiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48aW5wdXQgQGZvY3VzPVwib25Gb2N1c1wiIC8+XG48aW5wdXQgQHVwZGF0ZTp2YWx1ZT1cInZhbHVlID0gJGV2ZW50XCIgLz5cbjxpbnB1dCBAZXZlbnQtbmFtZSBAZXZlbnROYW1lIEBbZXZlbnROYW1lXSB2LW9uPVwiZXZlbnRzXCIgLz5cbjxpbnB1dFxuICBAa2V5ZG93bj1cImZuTmFtZVwiXG4gIEBrZXlkb3duLmxlZnQ9XCJjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQubGVmdD1cIiRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQucmlnaHQ9XCIoJGV2ZW50KSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQuZG93bj1cIigpID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbiAgQGtleWRvd24uY3RybC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbi8+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-on multiple events default 1`] = `
## 4.1. v-on multiple events 

\`\`\`vue-html
<div @click="onClick" @hover="onHover" @press="onPress" />
<div @click="onClick" @hover="onHover" @press="onPress" />
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let onClick = __VueDX__ctx.onClick;
  let onHover = __VueDX__ctx.onHover;
  let onPress = __VueDX__ctx.onPress;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <div
        onClick={$event => {
          (onClick)($event);
        }}
        onHover={$event => {
          (onHover)($event);
        }}
        onPress={$event => {
          (onPress)($event);
        }}
        /*<vuedx:tsx-competions-target/>*/
      />
      <div
        onClick={$event => {
          (onClick)($event);
        }}
        onHover={$event => {
          (onHover)($event);
        }}
        onPress={$event => {
          (onPress)($event);
        }}
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTU0MgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9uQ2xpY2sgPSBfX1Z1ZURYX19jdHgub25DbGljazsKICBsZXQgb25Ib3ZlciA9IF9fVnVlRFhfX2N0eC5vbkhvdmVyOwogIGxldCBvblByZXNzID0gX19WdWVEWF9fY3R4Lm9uUHJlc3M7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8ZGl2CiAgICAgICAgb25DbGljaz17JGV2ZW50ID0+IHsKICAgICAgICAgIChvbkNsaWNrKSgkZXZlbnQpOwogICAgICAgIH19CiAgICAgICAgb25Ib3Zlcj17JGV2ZW50ID0+IHsKICAgICAgICAgIChvbkhvdmVyKSgkZXZlbnQpOwogICAgICAgIH19CiAgICAgICAgb25QcmVzcz17JGV2ZW50ID0+IHsKICAgICAgICAgIChvblByZXNzKSgkZXZlbnQpOwogICAgICAgIH19CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgICA8ZGl2CiAgICAgICAgb25DbGljaz17JGV2ZW50ID0+IHsKICAgICAgICAgIChvbkNsaWNrKSgkZXZlbnQpOwogICAgICAgIH19CiAgICAgICAgb25Ib3Zlcj17JGV2ZW50ID0+IHsKICAgICAgICAgIChvbkhvdmVyKSgkZXZlbnQpOwogICAgICAgIH19CiAgICAgICAgb25QcmVzcz17JGV2ZW50ID0+IHsKICAgICAgICAgIChvblByZXNzKSgkZXZlbnQpOwogICAgICAgIH19CiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICAvPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBvbkNsaWNrID0gX19WdWVEWF9fY3R4Lm9uQ2xpY2s7CiAgbGV0IG9uSG92ZXIgPSBfX1Z1ZURYX19jdHgub25Ib3ZlcjsKICBsZXQgb25QcmVzcyA9IF9fVnVlRFhfX2N0eC5vblByZXNzOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo3NzgAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUsbUM7QSxFLG1DO0EsRSxtQztBLEUsNEI7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEc7QSxRQUFJLEEsTyxDLEMsVztBLFUsQ0FBUUMsTyxVO0EsUSxDLEM7QSxRQUFTLEEsTyxDLEMsVztBLFUsQ0FBUUEsTyxVO0EsUSxDLEM7QSxRQUFTLEEsTyxDLEMsVztBLFUsQ0FBUUEsTyxVO0EsUSxDLEM7QSxRQUEzQyxrQztBLE0sRTtBLE1BQ0osQ0FBQ0QsRztBLFFBQUksQSxPLEMsQyxXO0EsVSxDQUFRQyxPLFU7QSxRLEMsQztBLFFBQVMsQSxPLEMsQyxXO0EsVSxDQUFRQSxPLFU7QSxRLEMsQztBLFFBQVMsQSxPLEMsQyxXO0EsVSxDQUFRQSxPLFU7QSxRLEMsQztBLFFBQTNDLGtDO0EsTSxFO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLDJCO0EsRSxtQztBLEUsbUM7QSxFLG1DO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxQPj43Il0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdiBAY2xpY2s9XCJvbkNsaWNrXCIgQGhvdmVyPVwib25Ib3ZlclwiIEBwcmVzcz1cIm9uUHJlc3NcIiAvPlxuPGRpdiBAY2xpY2s9XCJvbkNsaWNrXCIgQGhvdmVyPVwib25Ib3ZlclwiIEBwcmVzcz1cIm9uUHJlc3NcIiAvPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-once default 1`] = `
## 12.1. v-once 

\`\`\`vue-html
<section v-once>{{ largeText }}</section>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let largeText = __VueDX__ctx.largeText;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <section
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#OTYxAC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbGFyZ2VUZXh0ID0gX19WdWVEWF9fY3R4LmxhcmdlVGV4dDsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzZWN0aW9uCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge2xhcmdlVGV4dH0KICAgICAgPC9zZWN0aW9uPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBsYXJnZVRleHQgPSBfX1Z1ZURYX19jdHgubGFyZ2VUZXh0OwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo0MjcAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUsdUM7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxPO0EsUUFBTyxrQztBLE0sQztBLFFBQVEsQ0FBR0MsU0FBUyxDO0EsTUFBRyxFLE8sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUsdUM7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjciLCI8PFA+PjkiXSwic291cmNlcyI6WyIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48c2VjdGlvbiB2LW9uY2U+e3sgbGFyZ2VUZXh0IH19PC9zZWN0aW9uPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-pre default 1`] = `
## 11.1. v-pre 

\`\`\`vue-html
<pre v-pre>{{ interpolation }}</pre>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  return (
    <>
      <pre
        /*<vuedx:tsx-competions-target/>*/
      >
        {"{{ interpolation }}"}
      </pre>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#NzU5AC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICByZXR1cm4gKAogICAgPD4KICAgICAgPHByZQogICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgPgogICAgICAgIHsie3sgaW50ZXJwb2xhdGlvbiB9fSJ9CiAgICAgIDwvcHJlPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIHJldHVybiBfX1Z1ZURYX19UeXBlQ2hlY2suaW50ZXJuYWwuZmxhdChbCiAgXSkKfQovKjwvdnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KLy8jZW5kcmVnaW9uCi8vI3JlZ2lvbiBwdWJsaWMgY29tcG9uZW50IGRlZmluaXRpb24KZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBfX1Z1ZURYX19Db21wb25lbnQgewogICRzbG90czogUmV0dXJuVHlwZTx0eXBlb2YgX19WdWVEWF9fc2xvdHM+Cn0KLy8jZW5kcmVnaW9uCjM4MAB7InZlcnNpb24iOjMsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QSxxRDtBLEEsbUM7QSxFLFE7QSxJLEU7QSxNQUNBLENBQUNBLEc7QSxRQUFHLGtDO0EsTSxDO0EsUSxDQUFPQyxxQixDO0EsTUFBbUIsRSxHLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj4zIiwiPDxUPj4xOXwyMSJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxwcmUgdi1wcmU+e3sgaW50ZXJwb2xhdGlvbiB9fTwvcHJlPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;

exports[`Baseline Spec v-show default 1`] = `
## 8.1. v-show 

\`\`\`vue-html
<h1 v-show="ok">Hello!</h1>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX__ctx.ok;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <h1
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#OTIyAC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgb2sgPSBfX1Z1ZURYX19jdHgub2s7CiAgLyo8L3Z1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIHJldHVybiAoCiAgICA8PgogICAgICA8aDEKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7IkhlbGxvISJ9CiAgICAgIDwvaDE+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgLyo8dnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgbGV0IG9rID0gX19WdWVEWF9fY3R4Lm9rOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo0MTEAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUseUI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxFO0EsUUFBRSxrQztBLE0sQztBLFEsQ0FBYUMsUSxDO0EsTUFBTSxFLEUsQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSwyQjtBLEUseUI7QSxFLDRCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFA+PjIiLCI8PFQ+PjZ8OCJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxoMSB2LXNob3c9XCJva1wiPkhlbGxvITwvaDE+XG5cbjwvdGVtcGxhdGU+Il19)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  return (
    <>
      <Foo
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          "foo": () => {
            return (
              <>
                <>
                  {"A"}
                </>
              </>
            )
          },
          "bar": ({bar}) => {
            return (
              <>
                <>
                  {bar}
                </>
              </>
            )
          },
        }}
      </Foo>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MTA5NgAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb28KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7ewogICAgICAgICAgImZvbyI6ICgpID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAgeyJBIn0KICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgICAgImJhciI6ICh7YmFyfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICB7YmFyfQogICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0KICAgICAgPC9Gb28+CiAgICA8Lz4KICApCn0KLyo8dnVlZHg6ZGlhZ25vc3RpY3NJZ25vcmU+Ki8KZnVuY3Rpb24gX19WdWVEWF9fc2xvdHMoKSB7CiAgcmV0dXJuIF9fVnVlRFhfX1R5cGVDaGVjay5pbnRlcm5hbC5mbGF0KFsKICBdKQp9Ci8qPC92dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwovLyNlbmRyZWdpb24KLy8jcmVnaW9uIHB1YmxpYyBjb21wb25lbnQgZGVmaW5pdGlvbgpleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIF9fVnVlRFhfX0NvbXBvbmVudCB7CiAgJHNsb3RzOiBSZXR1cm5UeXBlPHR5cGVvZiBfX1Z1ZURYX19zbG90cz4KfQovLyNlbmRyZWdpb24KNjI2AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxHO0EsUUFBRyxrQztBLE0sQztBLFEsRTtBLFVBQ1MsSyxHLE07QSxZLFE7QSxjLEU7QSxnQixFO0Esa0IsQ0FBSUEsRyxDO0EsZ0IsRztBLGMsRztBLFksQztBLFUsRTtBLFVBQ0osSyxHQUFLQyxLLE07QSxZLFE7QSxjLEU7QSxnQixFO0Esa0JBQU8sQ0FBRUMsR0FBRyxDO0EsZ0IsRztBLGMsRztBLFksQztBLFUsRTtBLFEsRTtBLE1BRTlCLEUsRyxDO0EsSSxHO0EsRSxDO0EsQSxDO0EsQSw2QjtBLEEsMkI7QSxFLHlDO0EsRSxFO0EsQSxDO0EsQSw4Qjs7Ozs7OyIsIm5hbWVzIjpbIjw8VD4+MXwzIiwiPDxQPj41IiwiPDxQPj4zIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPEZvbz5cbiAgPHRlbXBsYXRlICNmb28+QTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYmFyPVwie2Jhcn1cIj57e2Jhcn19PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlPkludmFsaWQ8L3RlbXBsYXRlPlxuPC9Gb28+XG5cbjwvdGVtcGxhdGU+Il19)


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
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  return (
    <>
      <FooBar
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          default: () => {
            return (
              <>
                {"content"}
              </>
            )
          },
        }}
      </FooBar>
      <FooBar
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          "default": ({foo}) => {
            return (
              <>
                {foo}
              </>
            )
          },
        }}
      </FooBar>
      <FooBar
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          "other": ({foo}) => {
            return (
              <>
                {foo}
              </>
            )
          },
        }}
      </FooBar>
      <FooBar
        /*<vuedx:tsx-competions-target/>*/
      >
        {{
          "default": () => {
            return (
              <>
                <>
                  {"content"}
                </>
              </>
            )
          },
          "other": ({foo}) => {
            return (
              <>
                <>
                  {foo}
                </>
              </>
            )
          },
          "another": (foo) => {
            return (
              <>
                <>
                  {foo
                    ? <>
                        <div
                          /*<vuedx:tsx-competions-target/>*/
                        >
                          {foo.bar}
                        </div>
                      </>
                    : null
                  }
                </>
              </>
            )
          },
        }}
      </FooBar>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX__slots() {
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#MjI5NQAvLyNyZWdpb24gPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IGFzIF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBjb25zdCBfX1Z1ZURYX19Db21wb25lbnQgPSBfX1Z1ZURYX19kZWZpbmVDb21wb25lbnQoe30pOwovLyNlbmRyZWdpb24KY29uc3QgX19WdWVEWF9fY3R4ID0gbmV3IF9fVnVlRFhfX0NvbXBvbmVudCgpCi8vI3JlZ2lvbiA8dGVtcGxhdGU+CmltcG9ydCAqIGFzIF9fVnVlRFhfX1R5cGVDaGVjayAgZnJvbSAndnVlZHh+cnVudGltZSc7CmV4cG9ydCBmdW5jdGlvbiBfX1Z1ZURYX19yZW5kZXIoKSB7CiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7ewogICAgICAgICAgZGVmYXVsdDogKCkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICB7ImNvbnRlbnQifQogICAgICAgICAgICAgIDwvPgogICAgICAgICAgICApCiAgICAgICAgICB9LAogICAgICAgIH19CiAgICAgIDwvRm9vQmFyPgogICAgICA8Rm9vQmFyCiAgICAgICAgLyo8dnVlZHg6dHN4LWNvbXBldGlvbnMtdGFyZ2V0Lz4qLwogICAgICA+CiAgICAgICAge3sKICAgICAgICAgICJkZWZhdWx0IjogKHtmb299KSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHtmb299CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0KICAgICAgPC9Gb29CYXI+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7ewogICAgICAgICAgIm90aGVyIjogKHtmb299KSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIHtmb299CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgfX0KICAgICAgPC9Gb29CYXI+CiAgICAgIDxGb29CYXIKICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgICB7ewogICAgICAgICAgImRlZmF1bHQiOiAoKSA9PiB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICAgIHsiY29udGVudCJ9CiAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICAgICJvdGhlciI6ICh7Zm9vfSkgPT4gewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIDw+CiAgICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgICB7Zm9vfQogICAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICAgPC8+CiAgICAgICAgICAgICkKICAgICAgICAgIH0sCiAgICAgICAgICAiYW5vdGhlciI6IChmb28pID0+IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICA8PgogICAgICAgICAgICAgICAgPD4KICAgICAgICAgICAgICAgICAge2ZvbwogICAgICAgICAgICAgICAgICAgID8gPD4KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdgogICAgICAgICAgICAgICAgICAgICAgICAgIC8qPHZ1ZWR4OnRzeC1jb21wZXRpb25zLXRhcmdldC8+Ki8KICAgICAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICAgIHtmb28uYmFyfQogICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgICAgICAgICAgIDwvPgogICAgICAgICAgICAgICAgICAgIDogbnVsbAogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgICA8Lz4KICAgICAgICAgICAgKQogICAgICAgICAgfSwKICAgICAgICB9fQogICAgICA8L0Zvb0Jhcj4KICAgIDwvPgogICkKfQovKjx2dWVkeDpkaWFnbm9zdGljc0lnbm9yZT4qLwpmdW5jdGlvbiBfX1Z1ZURYX19zbG90cygpIHsKICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgoxMzg4AHsidmVyc2lvbiI6MywiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBLHFEO0EsQSxtQztBLEUsUTtBLEksRTtBLE1BQ0EsQ0FBQyxNO0EsUUFBTSxrQztBLE0sQztBLFEsRTtBLFUsTyxHLE07QSxZLFE7QSxjLEU7QSxnQixDQUFDQSxTLEM7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEU7QSxNQUFPLEUsTSxDO0EsTUFDZixDQUFDLE07QSxRQUFNLGtDO0EsTSxDO0EsUSxFO0EsVUFBRSxTLEdBQVNDLEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLENBQUdDLEdBQUcsQztBLGMsRztBLFksQztBLFUsRTtBLFEsRTtBLE1BQUcsRSxNLEM7QSxNQUNsQyxDQUFDLE07QSxRQUFNLGtDO0EsTSxDO0EsUSxFO0EsVUFBRSxPLEdBQU9ELEssTTtBLFksUTtBLGMsRTtBLGdCQUFPLENBQUdDLEdBQUcsQztBLGMsRztBLFksQztBLFUsRTtBLFEsRTtBLE1BQUcsRSxNLEM7QSxNQUNoQyxDQUFDLE07QSxRQUFNLGtDO0EsTSxDO0EsUSxFO0EsVUFDTSxTLEcsTTtBLFksUTtBLGMsRTtBLGdCLEU7QSxrQixDQUFRRixTLEM7QSxnQixHO0EsYyxHO0EsWSxDO0EsVSxFO0EsVUFDUixPLEdBQU9DLEssTTtBLFksUTtBLGMsRTtBLGdCLEU7QSxrQkFBTyxDQUFFQyxHQUFHLEM7QSxnQixHO0EsYyxHO0EsWSxDO0EsVSxFO0EsVUFDbkIsUyxHQUFTQSxHLE07QSxZLFE7QSxjLEU7QSxnQixFO0Esa0IsQ0FDUEEsRztBLG9CLEUsRTtBLHdCQUFYLENBQUNBLEc7QSwwQkFBRyxrQztBLHdCLEM7QSwwQkFBWSxDQUFFQyxPQUFPLEM7QSx3QkFBRSxFLEcsQztBLHNCLEc7QSxrQixRO0Esa0IsQztBLGdCLEc7QSxjLEc7QSxZLEM7QSxVLEU7QSxRLEU7QSxNQUcvQixFLE0sQztBLEksRztBLEUsQztBLEEsQztBLEEsNkI7QSxBLDJCO0EsRSx5QztBLEUsRTtBLEEsQztBLEEsOEI7Ozs7OzsiLCJuYW1lcyI6WyI8PFQ+Pjd8OSIsIjw8UD4+NSIsIjw8UD4+MyIsIjw8UD4+NyJdLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxGb29CYXI+Y29udGVudDwvRm9vQmFyPlxuPEZvb0JhciAjZGVmYXVsdD1cIntmb299XCI+e3sgZm9vIH19PC9Gb29CYXI+XG48Rm9vQmFyICNvdGhlcj1cIntmb299XCI+e3sgZm9vIH19PC9Gb29CYXI+XG48Rm9vQmFyPlxuICA8dGVtcGxhdGUgI2RlZmF1bHQ+Y29udGVudDwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjb3RoZXI9XCJ7Zm9vfVwiPnt7Zm9vfX08L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI2Fub3RoZXI9XCJmb29cIj5cbiAgICA8ZGl2IHYtaWY9XCJmb29cIj57e2Zvby5iYXJ9fTwvZGl2PlxuICA8L3RlbXBsYXRlPlxuICA8ZGl2PmV4dHJhbm91czwvZGl2PlxuPC9Gb29CYXI+XG5cbjwvdGVtcGxhdGU+Il19)


`;

exports[`Baseline Spec v-text default 1`] = `
## 6.1. v-text 

\`\`\`vue-html
<span v-text="msg"></span>
\`\`\`

\`\`\`tsx
//#region <script>
import { defineComponent as __VueDX__defineComponent } from 'vue';
export const __VueDX__Component = __VueDX__defineComponent({});
//#endregion
const __VueDX__ctx = new __VueDX__Component()
//#region <template>
import * as __VueDX__TypeCheck  from 'vuedx~runtime';
export function __VueDX__render() {
  /*<vuedx:templateGlobals>*/
  let msg = __VueDX__ctx.msg;
  /*</vuedx:templateGlobals>*/
  return (
    <>
      <span
        textContent={msg}
        /*<vuedx:tsx-competions-target/>*/
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
  return __VueDX__TypeCheck.internal.flat([
  ])
}
/*</vuedx:diagnosticsIgnore>*/
//#endregion
//#region public component definition
export default class extends __VueDX__Component {
  $slots: ReturnType<typeof __VueDX__slots>
}
//#endregion

\`\`\`

[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#OTM3AC8vI3JlZ2lvbiA8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgYXMgX19WdWVEWF9fZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKZXhwb3J0IGNvbnN0IF9fVnVlRFhfX0NvbXBvbmVudCA9IF9fVnVlRFhfX2RlZmluZUNvbXBvbmVudCh7fSk7Ci8vI2VuZHJlZ2lvbgpjb25zdCBfX1Z1ZURYX19jdHggPSBuZXcgX19WdWVEWF9fQ29tcG9uZW50KCkKLy8jcmVnaW9uIDx0ZW1wbGF0ZT4KaW1wb3J0ICogYXMgX19WdWVEWF9fVHlwZUNoZWNrICBmcm9tICd2dWVkeH5ydW50aW1lJzsKZXhwb3J0IGZ1bmN0aW9uIF9fVnVlRFhfX3JlbmRlcigpIHsKICAvKjx2dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICBsZXQgbXNnID0gX19WdWVEWF9fY3R4Lm1zZzsKICAvKjwvdnVlZHg6dGVtcGxhdGVHbG9iYWxzPiovCiAgcmV0dXJuICgKICAgIDw+CiAgICAgIDxzcGFuCiAgICAgICAgdGV4dENvbnRlbnQ9e21zZ30KICAgICAgICAvKjx2dWVkeDp0c3gtY29tcGV0aW9ucy10YXJnZXQvPiovCiAgICAgID4KICAgICAgPC9zcGFuPgogICAgPC8+CiAgKQp9Ci8qPHZ1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCmZ1bmN0aW9uIF9fVnVlRFhfX3Nsb3RzKCkgewogIC8qPHZ1ZWR4OnRlbXBsYXRlR2xvYmFscz4qLwogIGxldCBtc2cgPSBfX1Z1ZURYX19jdHgubXNnOwogIC8qPC92dWVkeDp0ZW1wbGF0ZUdsb2JhbHM+Ki8KICByZXR1cm4gX19WdWVEWF9fVHlwZUNoZWNrLmludGVybmFsLmZsYXQoWwogIF0pCn0KLyo8L3Z1ZWR4OmRpYWdub3N0aWNzSWdub3JlPiovCi8vI2VuZHJlZ2lvbgovLyNyZWdpb24gcHVibGljIGNvbXBvbmVudCBkZWZpbml0aW9uCmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgX19WdWVEWF9fQ29tcG9uZW50IHsKICAkc2xvdHM6IFJldHVyblR5cGU8dHlwZW9mIF9fVnVlRFhfX3Nsb3RzPgp9Ci8vI2VuZHJlZ2lvbgo0MTUAeyJ2ZXJzaW9uIjozLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0EscUQ7QSxBLG1DO0EsRSwyQjtBLEUsMkI7QSxFLDRCO0EsRSxRO0EsSSxFO0EsTUFDQSxDQUFDQSxJO0EsUUFBSyxXLEMsQ0FBUUMsRyxDO0EsUUFBVCxrQztBLE0sQztBLE1BQWMsRSxJLEM7QSxJLEc7QSxFLEM7QSxBLEM7QSxBLDZCO0EsQSwyQjtBLEUsMkI7QSxFLDJCO0EsRSw0QjtBLEUseUM7QSxFLEU7QSxBLEM7QSxBLDhCOzs7Ozs7IiwibmFtZXMiOlsiPDxQPj40IiwiPDxQPj4zIl0sInNvdXJjZXMiOlsiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPHNwYW4gdi10ZXh0PVwibXNnXCI+PC9zcGFuPlxuXG48L3RlbXBsYXRlPiJdfQ==)


`;
