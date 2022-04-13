// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Baseline Spec \\$attrs binding default 1`] = `
## 17.1. \\$attrs binding 

\`\`\`vue-html
<Foo>
  <input v-bind="$attrs" />
</Foo>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let $attrs = __VueDX_ctx.$attrs;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <Foo data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", Foo)}>
      {VueDX.internal.checkSlots(Foo, {
        default: () => {
          return (
            <input {...({ ...($attrs), })} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
          ) as any
        },
      })}
    </Foo>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function __VueDX_slots(__VueDX_ctx: __VueDX_Self) {
  let $attrs = __VueDX_ctx.$attrs;
  return VueDX.internal.flat([])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"input">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MCxcImVcIjo0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo4LFwiZVwiOjMzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo5LFwiZVwiOjE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoyMyxcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzQsXCJlXCI6NDB9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRztPQUFEQywwQkFBQ0QsRztRQUFBRSxTOztZQUNDQyxDQUFDQyxLLFlBQWNDLE07Ozs7TUFDakJDLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Rm9vPlxuICA8aW5wdXQgdi1iaW5kPVwiJGF0dHJzXCIgLz5cbjwvRm9vPlxuIl19
\`\`\`


`

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
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let bars = __VueDX_ctx.bars;
  /*</vuedx:templateGlobals>*/
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
            <_DynamicComponent0 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent0)}>
              {VueDX.internal.checkSlots(_DynamicComponent0, {
                default: () => {
                  return (
                    <_DynamicComponent1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent1)}>
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
                                    <_DynamicComponent2 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent2)}>
                                      {VueDX.internal.checkSlots(_DynamicComponent2, {
                                        default: () => {
                                          return (
                                            <_DynamicComponent3 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent3)} />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjM1LFwiZVwiOjM5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyOCxcImVcIjozMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjAsXCJlXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MSxcImVcIjoxMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxLFwiZVwiOjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NCxcImVcIjoxOTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo0NSxcImVcIjo1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjQ0LFwiZVwiOjE5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjgwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjh9LFwic1wiOntcInNcIjoxMDMsXCJlXCI6MTExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMjgsXCJlXCI6MTMxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxMjAsXCJlXCI6MTI0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo4NyxcImVcIjoxODJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo4OCxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjg3LFwiZVwiOjE4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6ODgsXCJlXCI6OTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE0MSxcImVcIjoxNjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoxNDIsXCJlXCI6MTUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MTk3LFwiZVwiOjE5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjE5OCxcImVcIjoyMTB9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7aUZBQWdCQSxHOzs7OztrQ0FBbUJDLEksR0FBUEMsRzs7eUZBQ1ZDLEc7OztZQURsQkMsQ0FBQ0Msa0I7ZUFBREMsMEJBQUNELGtCO2dCQUFBRSxTOztvQkFDQ0MsQ0FBQ0Msa0I7dUJBQURDLDBCQUFDRCxrQjt3QkFBcUJFLFMsR0FBU0MsSzs7eUdBQ2JDLFE7Ozs7OzBEQUF5QkMsRyxHQUFSQyxJOztpSEFDZkMsSTs7O29DQURsQkMsQ0FBQ0Msa0I7dUNBQURDLDBCQUFDRCxrQjt3Q0FBQUUsUzs7NENBQ0NDLENBQUNDLGtCOzs7Ozs7Ozs7Ozs7c0JBRU9DLGtCOzs7O2NBQ2RDLGtCIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGNvbXBvbmVudCA6aXM9XCJiYXJcIiB2LWZvcj1cImJhciBvZiBiYXJzXCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6W2Jhcl1cIiB2LWZvcj1cIml0ZW0gb2YgYmF6XCIgPlxuICAgICAgPGNvbXBvbmVudCA6aXM9XCJpdGVtXCIgLz5cbiAgICA8L2NvbXBvbmVudD5cbiAgPC9jb21wb25lbnQ+XG48L2NvbXBvbmVudD5cbiJdfQ==
\`\`\`


`

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
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const _DynamicComponent0 = VueDX.internal.resolveComponent(__VueDX_components, foo);

  return (
    <_DynamicComponent0 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent0)}>
      {VueDX.internal.checkSlots(_DynamicComponent0, {
        "default": ({bar}) => {
          /*<vuedx:templateGlobals>*/
          const _DynamicComponent1 = VueDX.internal.resolveComponent(__VueDX_components, bar);
          /*</vuedx:templateGlobals>*/
          return (
            <_DynamicComponent1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent1)}>
              {VueDX.internal.checkSlots(_DynamicComponent1, {
                "default": ({baz}) => {
                  /*<vuedx:templateGlobals>*/
                  const _DynamicComponent2 = VueDX.internal.resolveComponent(__VueDX_components, baz);
                  /*</vuedx:templateGlobals>*/
                  return (
                    <_DynamicComponent2 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent2)}>
                      {VueDX.internal.checkSlots(_DynamicComponent2, {
                        "other": ({ foo }) => {
                          /*<vuedx:templateGlobals>*/
                          const _DynamicComponent3 = VueDX.internal.resolveComponent(__VueDX_components, foo);
                          /*</vuedx:templateGlobals>*/
                          return (
                            <>
                              <>
                                <_DynamicComponent3 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent3)} />
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
                                <_DynamicComponent4 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent4)} />
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
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MzIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MSxcImVcIjoxMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MzIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMixcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MzEsXCJlXCI6MzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjU3LFwiZVwiOjYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MSxcImVcIjozMDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo0MixcImVcIjo1MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjMwN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NjMsXCJlXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjcyLFwiZVwiOjc3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMDAsXCJlXCI6MTAzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo4NCxcImVcIjoyOTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo4NSxcImVcIjo5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjg0LFwiZVwiOjI5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTIzLFwiZVwiOjEyOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTMwLFwiZVwiOjEzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTY0LFwiZVwiOjE2N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTEyLFwiZVwiOjE4OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTQ4LFwiZVwiOjE3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjE0OSxcImVcIjoxNTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjIwNyxcImVcIjoyMTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIxNixcImVcIjoyMjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1MCxcImVcIjoyNTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE5NixcImVcIjoyNzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIzNCxcImVcIjoyNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoyMzUsXCJlXCI6MjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MjkyLFwiZVwiOjI5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjMwNyxcImVcIjozMDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjozMDgsXCJlXCI6MzIwfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2lGQUFnQkEsRzs7O0lBQWhCQyxDQUFDQyxrQjtPQUFEQywwQkFBQ0Qsa0I7UUFBcUJFLFMsR0FBU0MsSzs7eUZBQ2JDLEc7OztZQUFoQkMsQ0FBQ0Msa0I7ZUFBREMsMEJBQUNELGtCO2dCQUFxQkUsUyxHQUFTQyxLOztpR0FDYkMsRzs7O29CQUFoQkMsQ0FBQ0Msa0I7dUJBQURDLDBCQUFDRCxrQjt3QkFDWUUsTyxHQUFPQyxPOzt5R0FDQUMsRzs7Ozs4QkFEbEJDLEM7Z0NBQ0VDLENBQUNDLGtCOzs7Ozt3QkFFUUMsUyxHQUFTQyxPOzt5R0FDRkMsRzs7Ozs4QkFEbEJDLEM7Z0NBQ0VDLENBQUNDLGtCOzs7Ozs7c0JBRU9DLGtCOzs7O2NBQ0ZDLGtCOzs7O01BQ2RDLGtCIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGNvbXBvbmVudCA6aXM9XCJmb29cIiAjZGVmYXVsdD1cIntiYXJ9XCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6XCI+XG4gICAgICA8dGVtcGxhdGUgI290aGVyPVwieyBmb28gfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImZvb1wiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBiYXIgfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImJhclwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvY29tcG9uZW50PlxuICA8L2NvbXBvbmVudD5cbjwvY29tcG9uZW50PlxuIl19
\`\`\`


`

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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <FooBar data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", FooBar)}>
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
      <Foo.Bar data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", Foo.Bar)}>
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
      <Foo.Bar.Baz data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", Foo.Bar.Baz)}>
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
      <FooBar data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", FooBar)}>
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
      <FooBar data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", FooBar)}>
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
      <UnknownElement data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", UnknownElement)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MCxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxMSxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6NDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6NDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozMCxcImVcIjozM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDQsXCJlXCI6NzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjo0NSxcImVcIjo1Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjQ0LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo0NSxcImVcIjo1Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NTcsXCJlXCI6NjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjk1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo3NixcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjk1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo3NixcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6ODMsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjk2LFwiZVwiOjExOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6OTcsXCJlXCI6MTA0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6OTYsXCJlXCI6MTE4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo5NyxcImVcIjoxMDR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEwNSxcImVcIjoxMDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjExOSxcImVcIjoxNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTR9LFwic1wiOntcInNcIjoxMjAsXCJlXCI6MTM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MTE5LFwiZVwiOjE1N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTIwLFwiZVwiOjEzNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTM2LFwiZVwiOjEzOX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLE07U0FBREMsMEJBQUNELE07VUFBQUUsUzs7O2dCQUFPQyxHOzs7OztRQUFHQyxNO01BQ1hDLENBQUNDLE87U0FBREMsMEJBQUNELE87VUFBQUUsUzs7O2dCQUFRQyxHOzs7Ozs7TUFDVEMsQ0FBQ0MsVztTQUFEQywwQkFBQ0QsVztVQUFBRSxTOzs7Z0JBQVlDLEc7Ozs7OztNQUNiQyxDQUFDQyxNO1NBQURDLDBCQUFDRCxNO1VBQUFFLFM7OztnQkFBT0MsRzs7Ozs7O01BQ1JDLENBQUNDLE07U0FBREMsMEJBQUNELE07VUFBQUUsUzs7O2dCQUFRQyxHOzs7Ozs7TUFDVEMsQ0FBQ0MsYztTQUFEQywwQkFBQ0QsYztVQUFBRSxTOzs7Z0JBQWdCQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPEZvb0Jhcj5mb288L0Zvb0Jhcj5cbjxGb28uQmFyPmZvbzwvRm9vLkJhcj5cbjxGb28uQmFyLkJhej5mb288L0Zvby5CYXIuQmF6PlxuPGZvb0Jhcj5mb288L2Zvb0Jhcj5cbjxmb28tYmFyPmZvbzwvZm9vLWJhcj5cbjx1bmtub3duLWVsZW1lbnQ+Zm9vPC91bmtub3duLWVsZW1lbnQ+XG4iXX0=
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
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const HelloWorld = VueDX.internal.resolveComponent(__VueDX_components, "HelloWorld" as const, "HelloWorld" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let name = __VueDX_ctx.name;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <HelloWorld n data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", HelloWorld)} />
      <span data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "span" as const)}>
        Name: 
        {VueDX.internal.checkInterpolation(name +)}
      </span>
      <p {...({  })} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "p" as const)}>
      </p>
      {
        (/*<vuedx:missingExpression>*/)
          ? <p data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "p" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjEsXCJlXCI6MTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNyxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTgsXCJlXCI6MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjksXCJlXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo0OCxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDksXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUwLFwiZVwiOjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6NzQsXCJlXCI6NzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjY1LFwiZVwiOjgwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2NixcImVcIjo2N319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsVSxDQUFXQyxDO01BQ1pDLENBQUNDLEk7UUFBS0MsTTtTQUFNQyxrQ0FBR0MsTTtRQUFnQkMsSTtNQUMvQkMsQ0FBQ0MsQzs7O1NBQ1FDLDZCO1lBQVRDLENBQUNDLEMiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8SGVsbG9Xb3JsZCBuIC8+XG48c3Bhbj5OYW1lOiB7eyBuYW1lICsgfX08L3NwYW4+XG48cCB2LWJpbmQ6PjwvcD5cbjxwIHYtaWY9XCJcIj48L3A+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec element  single 1`] = `
## 1.1. element > single

\`\`\`vue-html
<div>foo</div>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1LFwiZVwiOjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjgsXCJlXCI6MTR9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEc7TUFBSUMsRztNQUFHQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdj5mb288L2Rpdj5cbiJdfQ==
\`\`\`


`

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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        VueDX.internal.renderList(list, (items) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.renderSlot(__VueDX_ctx.$slots, "default", { }) ?? <>
                fallback content
              </>
              }
              {
                VueDX.internal.renderList(items, (item) => {
                  return (
                    <span data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "span" as const)}>
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
    VueDX.internal.flat(VueDX.internal.renderList(list, (items) => VueDX.internal.flat([
      VueDX.internal.flat([{ "default": { } }])
    ]))),
    VueDX.internal.flat(VueDX.internal.renderList(items, (item) => VueDX.internal.flat([
      VueDX.internal.flat(VueDX.internal.renderList(list, (items) => VueDX.internal.flat([
        VueDX.internal.flat([{ "other": { ...(props), "myProp": item, } }])
      ])))
    ]))),
  ])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6MjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjE4NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6MzYsXCJlXCI6NTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjgzLFwiZVwiOjg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo3NSxcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjIsXCJlXCI6MTc3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo2MyxcImVcIjo2N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTA2LFwiZVwiOjExM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTIyLFwiZVwiOjEyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo4fSxcInNcIjp7XCJzXCI6MTMwLFwiZVwiOjEzNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTM4LFwiZVwiOjE0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjE0NCxcImVcIjoxNjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjE3NyxcImVcIjoxNzd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE3OCxcImVcIjoxODR9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBcUJBLEksR0FBVEMsSzs7WUFBWkMsQ0FBQ0MsRzs7Z0JBQ09DLGdCOzs7OzBDQUNlQyxLLEdBQVJDLEk7O29CQUFiQyxDQUFDQyxJO3FFQUNZQyxPLFFBQWdCQyxLLEdBQVFDLFEsRUFBUUMsSTt3QkFBTUMsZ0I7OztzQkFDNUNDLEk7Ozs7Y0FDVEMsRzs7Ozs7Ozs7Ozs7O2tEQUxxQmYsSSxHQUFUQyxLOzs7a0RBRVdJLEssR0FBUkMsSTtvREFGTU4sSSxHQUFUQyxLOzhDQUdtQlMsSyxHQUFRQyxRLEVBQVFDLEkiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IHYtZm9yPVwiaXRlbXMgb2YgbGlzdFwiPlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3BhbiB2LWZvcj1cIml0ZW0gb2YgaXRlbXNcIj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJpdGVtXCI+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPC9zcGFuPlxuPC9kaXY+XG4iXX0=
\`\`\`


`

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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
      {VueDX.internal.renderSlot(__VueDX_ctx.$slots, "default", { }) ?? <>
        fallback content
      </>
      }
      <span data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "span" as const)}>
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
    VueDX.internal.flat([{ "default": { } }]),
    VueDX.internal.flat([{ "other": { ...(props), "myProp": value, } }]),
    VueDX.internal.flat([{ "another": { ...(props), "myProp": value, } }]),
    VueDX.internal.flat([{ [dynamic]: { ...(props), "myProp": value, } }]),
  ])
}
export type __VueDX_Slots = VueDX.internal.Slots<ReturnType<typeof __VueDX_slots>>
export type __VueDX_Attrs = VueDX.internal.AttrsOf<"div">;
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjE0LFwiZVwiOjMwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MCxcImVcIjoxMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQ1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo2MixcImVcIjo2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NzgsXCJlXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjg2LFwiZVwiOjkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo5NCxcImVcIjo5OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEwMSxcImVcIjoxMTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjEzNCxcImVcIjoxMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjE0OCxcImVcIjoxNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjE2NixcImVcIjoxNzF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjE3NCxcImVcIjoxODB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjE4MixcImVcIjoxODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIxMixcImVcIjoyMTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjIyOSxcImVcIjoyMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjIzNyxcImVcIjoyNDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjI0NSxcImVcIjoyNTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1NSxcImVcIjoyNjF9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEc7O1FBQ09DLGdCOzs7TUFDTkMsQ0FBQ0MsSTt1REFDWUMsTyxRQUFnQkMsSyxHQUFRQyxRLEVBQVFDLEs7VUFBT0MsZ0I7OztRQUM3Q0MsSTtxREFDSUMsUyxRQUFrQkMsSyxHQUFRQyxRLEVBQVFDLEs7cURBQ2hDQyxPLFFBQWlCQyxLLEdBQVFDLFEsRUFBUUMsSztNQUNoREMsRzs7Ozs7Ozs7OzswQ0FKK0JiLEssR0FBUUMsUSxFQUFRQyxLOzRDQUVoQkksSyxHQUFRQyxRLEVBQVFDLEs7NEJBQ2hDQyxPLFNBQWlCQyxLLEdBQVFDLFEsRUFBUUMsSyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXY+XG4gIDxzbG90PmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDxzcGFuPlxuICAgIDxzbG90IG5hbWU9XCJvdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cInZhbHVlXCI+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPC9zcGFuPlxuICA8c2xvdCBuYW1lPVwiYW5vdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cInZhbHVlXCI+PC9zbG90PlxuICA8c2xvdCA6bmFtZT1cImR5bmFtaWNcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiIC8+XG48L2Rpdj5cbiJdfQ==
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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input
        value={myInput}
        {...({
          [customName]: myInput,
          ...(rest),
        })} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <Foo
        value={myInput}
        {...({
          [customName]: myInput,
          ...(rest),
        })} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", Foo)} />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo2NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo4LFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxNSxcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjI1LFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjozOSxcImVcIjo0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6NTYsXCJlXCI6NjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjY1LFwiZVwiOjEyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6Njl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjcxLFwiZVwiOjc2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo3OCxcImVcIjo4NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjg4LFwiZVwiOjEwMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAyLFwiZVwiOjEwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTE5LFwiZVwiOjEyM319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxLO1FBQU9DLEssRUFBT0MsTzs7V0FBVUMsVSxHQUFjQyxPO2NBQWlCQyxJOztNQUN4REMsQ0FBQ0MsRztRQUFLQyxLLEVBQU9DLE87O1dBQVVDLFUsR0FBY0MsTztjQUFpQkMsSSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxpbnB1dCA6dmFsdWU9XCJteUlucHV0XCIgOltjdXN0b21OYW1lXT1cIm15SW5wdXRcIiB2LWJpbmQ9XCJyZXN0XCIgLz5cbjxGb28gOnZhbHVlPVwibXlJbnB1dFwiIDpbY3VzdG9tTmFtZV09XCJteUlucHV0XCIgdi1iaW5kPVwicmVzdFwiIC8+XG4iXX0=
\`\`\`


`

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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        VueDX.internal.renderList(num, (n) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.checkInterpolation(n)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(num, (n, i) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.checkInterpolation(s)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(str, (s, i) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.checkInterpolation(a)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ value }) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.checkInterpolation(value)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ foo }) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.checkInterpolation(arr)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, (a, i) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.checkInterpolation(o)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o, k) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.checkInterpolation(t)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(boo, (b) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {VueDX.internal.checkInterpolation(b)}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(sym, (s) => {
          return (
            <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcsXCJlXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoyMixcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI5LFwiZVwiOjM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1OCxcImVcIjo2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDksXCJlXCI6NTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUyLFwiZVwiOjUzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNixcImVcIjo4NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzcsXCJlXCI6NDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2MyxcImVcIjo3MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjcwLFwiZVwiOjcxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NzEsXCJlXCI6Nzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjc1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMDIsXCJlXCI6MTA1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo5NyxcImVcIjo5OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6ODUsXCJlXCI6MTIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4NixcImVcIjo4OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjEwNyxcImVcIjoxMTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjExMCxcImVcIjoxMTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE0MyxcImVcIjoxNDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEzNCxcImVcIjoxMzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEzNyxcImVcIjoxMzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyMSxcImVcIjoxNjl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEyMixcImVcIjoxMjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxNDgsXCJlXCI6MTU1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNTEsXCJlXCI6MTUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNTUsXCJlXCI6MTU2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTU2LFwiZVwiOjE2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTU5LFwiZVwiOjE2MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTg3LFwiZVwiOjE5MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTgyLFwiZVwiOjE4M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTcwLFwiZVwiOjIwNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcxLFwiZVwiOjE3NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjE5MixcImVcIjoxOTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE5NSxcImVcIjoxOTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjIzMSxcImVcIjoyMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjIxOCxcImVcIjoyMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIwNixcImVcIjoyNTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjIwNyxcImVcIjoyMTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoyMzYsXCJlXCI6MjQ3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoyMzksXCJlXCI6MjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyNzcsXCJlXCI6MjgwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoyNjYsXCJlXCI6MjczfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyNTQsXCJlXCI6Mjk3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyNTUsXCJlXCI6MjU4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjgyLFwiZVwiOjI5MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjg1LFwiZVwiOjI4OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzIwLFwiZVwiOjMyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzExLFwiZVwiOjMxMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzE0LFwiZVwiOjMxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6Mjk4LFwiZVwiOjM0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjk5LFwiZVwiOjMwMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjMyNSxcImVcIjozMzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjMyOCxcImVcIjozMjl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjMzMixcImVcIjozMzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjozMzMsXCJlXCI6MzQwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozMzYsXCJlXCI6MzM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozNzcsXCJlXCI6MzgwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjozNjAsXCJlXCI6MzY5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNzEsXCJlXCI6MzcyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNDcsXCJlXCI6NDA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozNDgsXCJlXCI6MzUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MzgyLFwiZVwiOjM5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6Mzg1LFwiZVwiOjM5MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzkzLFwiZVwiOjM5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjM5NCxcImVcIjo0MDF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjM5NyxcImVcIjozOTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQyNSxcImVcIjo0Mjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQyMCxcImVcIjo0MjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQwOCxcImVcIjo0NDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQwOSxcImVcIjo0MTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo0MzAsXCJlXCI6NDM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MzMsXCJlXCI6NDM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0NjYsXCJlXCI6NDY5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NTcsXCJlXCI6NDU4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NjAsXCJlXCI6NDYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NDQsXCJlXCI6NDkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0NDUsXCJlXCI6NDQ4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NDcxLFwiZVwiOjQ3OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDc0LFwiZVwiOjQ3NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDc4LFwiZVwiOjQ3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjQ3OSxcImVcIjo0ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ4MixcImVcIjo0ODN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjUxOCxcImVcIjo1MjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUwNixcImVcIjo1MDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUwOSxcImVcIjo1MTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUxMixcImVcIjo1MTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ5MyxcImVcIjo1NTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQ5NCxcImVcIjo0OTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo1MjMsXCJlXCI6NTMwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1MjYsXCJlXCI6NTI3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1MzAsXCJlXCI6NTMxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NTMxLFwiZVwiOjUzOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTM0LFwiZVwiOjUzNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTM4LFwiZVwiOjUzOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjUzOSxcImVcIjo1NDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjU0MixcImVcIjo1NDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjU3MCxcImVcIjo1NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjU2NSxcImVcIjo1NjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjU1MyxcImVcIjo1ODh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjU1NCxcImVcIjo1NTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo1NzUsXCJlXCI6NTgyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1NzgsXCJlXCI6NTc5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo2MDYsXCJlXCI6NjA5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MDEsXCJlXCI6NjAyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1ODksXCJlXCI6NjI0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1OTAsXCJlXCI6NTkzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NjExLFwiZVwiOjYxOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjE0LFwiZVwiOjYxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjQyLFwiZVwiOjY0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjM3LFwiZVwiOjYzOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjI1LFwiZVwiOjY2MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjI2LFwiZVwiOjYyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjY0NyxcImVcIjo2NTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjY1MCxcImVcIjo2NTF9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFpQkEsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQztjQUFJQyxHOzs7OztrQ0FDUEMsRyxHQUFUQyxDLEVBQUdDLEM7O1lBQWhCQyxDQUFDQyxHO2VBQTBCQyxrQ0FBR0MsQztjQUFJQyxDO2VBQUNDLGtDQUFHQyxDOzs7Ozs7a0NBQ3JCQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDOzs7Ozs7a0NBQ0hDLEcsR0FBVEMsQyxFQUFHQyxDOztZQUFoQkMsQ0FBQ0MsRztlQUEwQkMsa0NBQUdDLEM7Y0FBSUMsQztlQUFDQyxrQ0FBR0MsQzs7Ozs7O2tDQUNyQkMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQzs7Ozs7O2tDQUNBQyxHLEdBQWJDLFM7O1lBQVpDLENBQUNDLEc7ZUFBNkJDLGtDQUFHQyxLOzs7Ozs7a0NBQ1ZDLEcsR0FBWEMsTzs7WUFBWkMsQ0FBQ0MsRztlQUEyQkMsa0NBQUdDLEc7Ozs7OztrQ0FDVEMsRyxHQUFUQyxDLEVBQUdDLEM7O1lBQWhCQyxDQUFDQyxHO2VBQTBCQyxrQ0FBR0MsQztjQUFJQyxDO2VBQUNDLGtDQUFHQyxDOzs7Ozs7a0NBQ1JDLEcsR0FBakJDLFMsRUFBV0MsQzs7WUFBeEJDLENBQUNDLEc7ZUFBa0NDLGtDQUFHQyxLO2NBQVFDLEM7ZUFBQ0Msa0NBQUdDLEM7Ozs7OztrQ0FDakNDLEcsR0FBTEMsQzs7WUFBWkMsQ0FBQ0MsRztlQUFxQkMsa0NBQUdDLEM7Ozs7OztrQ0FDSEMsRyxHQUFUQyxDLEVBQUdDLEM7O1lBQWhCQyxDQUFDQyxHO2VBQTBCQyxrQ0FBR0MsQztjQUFJQyxDO2VBQUNDLGtDQUFHQyxDOzs7Ozs7a0NBQ2JDLEcsR0FBWkMsQyxFQUFHQyxDLEVBQUdDLEM7O1lBQW5CQyxDQUFDQyxHO2VBQTZCQyxrQ0FBR0MsQztjQUFJQyxDO2VBQUNDLGtDQUFHQyxDO2NBQUlDLEM7ZUFBQ0Msa0NBQUdDLEM7Ozs7OztrQ0FDaENDLEcsR0FBTEMsQzs7WUFBWkMsQ0FBQ0MsRztlQUFxQkMsa0NBQUdDLEM7Ozs7OztrQ0FDUkMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQzs7Ozs7O2tDQUNSQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWZvcj1cIm4gb2YgbnVtXCI+e3sgbiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihuLCBpKSBvZiBudW1cIj57eyBuIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN0clwiPnt7IHMgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIocywgaSkgb2Ygc3RyXCI+e3sgcyB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYSBvZiBhcnJcIj57eyBhIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyB2YWx1ZSB9IG9mIGFyclwiPnt7IHZhbHVlIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyBmb28gfSBvZiBhcnJcIj57eyBhcnIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoYSwgaSkgb2YgYXJyXCI+e3sgYSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHsgdmFsdWUgfSwgaSkgb2YgYXJyXCI+e3sgdmFsdWUgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIm8gb2Ygb2JqXCI+e3sgbyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaywgaSkgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ0IG9mIGl0clwiPnt7IHQgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJiIG9mIGJvb1wiPnt7IGIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN5bVwiPnt7IHMgfX08L2Rpdj5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-html default 1`] = `
## 7.1. v-html 

\`\`\`vue-html
<div v-html="html"></div>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let html = __VueDX_ctx.html;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div data-vuedx-directive-html={VueDX.internal.checkDirective("html" as const, "div" as const, undefined, html, {""/*<VueDX:directiveCompletion/>*/:true})} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6NSxcImVcIjoxOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjUsXCJlXCI6MTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTR9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjUsXCJlXCI6MTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjEzLFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxOSxcImVcIjoyNX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEcsNEJBQUlDLDZCLENBQUFDLGUsRUFBSkMsYyxFQUFJQyxTLEVBQVFDLEk7TUFBTUMsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXYgdi1odG1sPVwiaHRtbFwiPjwvZGl2PlxuIl19
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  elif no if 1`] = `
## 5.8. v-if/v-else/v-else-if > elif no if

\`\`\`vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX_ctx.awesome;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
        Vue is awesome!
      </h1>
      <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MjQsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjM5LFwiZVwiOjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NSxcImVcIjo2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6NDYsXCJlXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjU2LFwiZVwiOjY0fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEU7UUFBdUJDLGU7UUFBZUMsRTtNQUN2Q0MsQ0FBQ0MsRTtRQUFVQyxRIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtZWxzZS1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuPGgxIHYtZWxzZT5PaCBubyDwn5iiPC9oMT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  else condition 1`] = `
## 5.7. v-if/v-else/v-else-if > else condition

\`\`\`vue-html
<h1 v-else="ok">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX_ctx.ok;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MzF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjMxLFwiZVwiOjM2fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRTtNQUFlQyxlO01BQWVDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1lbHNlPVwib2tcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if condition 1`] = `
## 5.6. v-if/v-else/v-else-if > if condition

\`\`\`vue-html
<h1 v-if>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
            <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6OSxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MjQsXCJlXCI6Mjl9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7WUFBQUEsQ0FBQ0MsRTtjQUFRQyxlO2NBQWVDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1pZj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuIl19
\`\`\`


`

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
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX_ctx.ok;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (ok)
          ? <>
              <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
                Title
              </h1>
              <p data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "p" as const)}>
                Paragraph 1
              </p>
              <p data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "p" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoyNCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjcsXCJlXCI6MzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQwLFwiZVwiOjU4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MSxcImVcIjo0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjQzLFwiZVwiOjU0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MSxcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjIsXCJlXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjo2NCxcImVcIjo3NX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7U0FBZ0JBLEU7O2NBQ2RDLENBQUNDLEU7Z0JBQUdDLEs7O2NBQ0pDLENBQUNDLEM7Z0JBQUVDLFc7O2NBQ0hDLENBQUNDLEM7Z0JBQUVDLFciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGUgdi1pZj1cIm9rXCI+XG4gIDxoMT5UaXRsZTwvaDE+XG4gIDxwPlBhcmFncmFwaCAxPC9wPlxuICA8cD5QYXJhZ3JhcGggMjwvcD5cbjwvdGVtcGxhdGU+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if/else 1`] = `
## 5.2. v-if/v-else/v-else-if > if/else

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX_ctx.awesome;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (awesome)
          ? <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
              Vue is awesome!
            </h1>
          : <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAsXCJlXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjozNCxcImVcIjozOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDAsXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjh9LFwic1wiOntcInNcIjo1MSxcImVcIjo1OX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7U0FBVUEsTztZQUFWQyxDQUFDQyxFO2NBQWtCQyxlO2NBQWVDLEU7WUFDbENDLENBQUNDLEU7Y0FBVUMsUSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG48aDEgdi1lbHNlPk9oIG5vIPCfmKI8L2gxPlxuIl19
\`\`\`


`

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
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let type = __VueDX_ctx.type;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (type === 'A')
          ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
               A 
            </div>
          : (type === 'B')
          ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
               B 
            </div>
          : (type === 'C')
          ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
               C 
            </div>
          : <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMn0sXCJzXCI6e1wic1wiOjExLFwiZVwiOjIzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjM2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1LFwiZVwiOjMwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozMCxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMn0sXCJzXCI6e1wic1wiOjUzLFwiZVwiOjY1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNyxcImVcIjo3OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzgsXCJlXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjY3LFwiZVwiOjcyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjEyfSxcInNcIjp7XCJzXCI6OTUsXCJlXCI6MTA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo3OSxcImVcIjoxMjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjgwLFwiZVwiOjgzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMDksXCJlXCI6MTE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMjEsXCJlXCI6MTUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMjIsXCJlXCI6MTI1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6MTMzLFwiZVwiOjE0Nn19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7U0FBV0EsWTtZQUFYQyxDQUFDQyxHO2NBQXdCQyxHO2NBRXpCQyxHO2FBQ2dCQyxZO1lBQWhCQyxDQUFDQyxHO2NBQTZCQyxHOzthQUdkQyxZO1lBQWhCQyxDQUFDQyxHO2NBQTZCQyxHOztZQUc5QkMsQ0FBQ0MsRztjQUFXQyxXIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWlmPVwidHlwZSA9PT0gJ0EnXCI+XG4gIEFcbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJ0eXBlID09PSAnQidcIj5cbiAgQlxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdDJ1wiPlxuICBDXG48L2Rpdj5cbjxkaXYgdi1lbHNlPlxuICBOb3QgQS9CL0NcbjwvZGl2PlxuIl19
\`\`\`


`

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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (foo)
          ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {
                (foo)
                  ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                    </div>
                  : (bar)
                  ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                    </div>
                  : <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                    </div>
              }
            </div>
          : (bar)
          ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {
                (foo)
                  ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                    </div>
                  : (bar)
                  ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                    </div>
                  : <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                    </div>
              }
            </div>
          : <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
              {
                (foo)
                  ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                    </div>
                  : (bar)
                  ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                    </div>
                  : <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzAsXCJlXCI6MzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjQxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMCxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjAsXCJlXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ0LFwiZVwiOjcxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0NSxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NzQsXCJlXCI6OTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjc4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo5MyxcImVcIjo5OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTE2LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTAwLFwiZVwiOjIwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTAxLFwiZVwiOjEwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTM1LFwiZVwiOjEzOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTI0LFwiZVwiOjE0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTI1LFwiZVwiOjEyOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTY1LFwiZVwiOjE2OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTQ5LFwiZVwiOjE3Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTUwLFwiZVwiOjE1M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTc5LFwiZVwiOjE5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTgwLFwiZVwiOjE4M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjA1LFwiZVwiOjMwMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjA2LFwiZVwiOjIwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjMxLFwiZVwiOjIzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjIwLFwiZVwiOjI0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjIxLFwiZVwiOjIyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjYxLFwiZVwiOjI2NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjQ1LFwiZVwiOjI3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ2LFwiZVwiOjI0OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6Mjc1LFwiZVwiOjI5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjc2LFwiZVwiOjI3OX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O1NBQVdBLEc7WUFBWEMsQ0FBQ0MsRzs7aUJBQ1lDLEc7b0JBQVhDLENBQUNDLEc7O3FCQUNlQyxHO29CQUFoQkMsQ0FBQ0MsRzs7b0JBQ0RDLENBQUNDLEc7OztjQUNIQyxHO2FBQ2dCQyxHO1lBQWhCQyxDQUFDQyxHOztpQkFDWUMsRztvQkFBWEMsQ0FBQ0MsRzs7cUJBQ2VDLEc7b0JBQWhCQyxDQUFDQyxHOztvQkFDREMsQ0FBQ0MsRzs7OztZQUVIQyxDQUFDQyxHOztpQkFDWUMsRztvQkFBWEMsQ0FBQ0MsRzs7cUJBQ2VDLEc7b0JBQWhCQyxDQUFDQyxHOztvQkFDREMsQ0FBQ0MsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXYgdi1pZj1cImZvb1wiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuIl19
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  no if 1`] = `
## 5.5. v-if/v-else/v-else-if > no if

\`\`\`vue-html
<h1 v-else>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjI2LFwiZVwiOjMxfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxFO01BQVVDLGU7TUFBZUMsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWVsc2U+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  single if statement 1`] = `
## 5.1. v-if/v-else/v-else-if > single if statement

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = __VueDX_ctx.awesome;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        (awesome)
          ? <h1 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAsXCJlXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjozNCxcImVcIjozOX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7U0FBVUEsTztZQUFWQyxDQUFDQyxFO2NBQWtCQyxlO2NBQWVDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuIl19
\`\`\`


`

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
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let MyComponent = __VueDX_ctx.MyComponent;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const _DynamicComponent0 = VueDX.internal.resolveComponent(__VueDX_components, MyComponent);

  return (
    <table data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "table" as const)}>
      <tbody data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "tbody" as const)}>
        <_DynamicComponent0 data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", _DynamicComponent0)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxLFwiZVwiOjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEwLFwiZVwiOjYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxMSxcImVcIjoxNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjIsXCJlXCI6NTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoyMyxcImVcIjozMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjUwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMyxcImVcIjozMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NjAsXCJlXCI6NjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjYyLFwiZVwiOjcwfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O2lGQUVjQSxXOzs7SUFGZEMsQ0FBQ0MsSztNQUNDQyxDQUFDQyxLO1FBQ0NDLENBQUNDLGtCO1dBQURDLDBCQUFDRCxrQjtZQUFBRSxTOzs7Ozs7OztRQUNJQyxLO01BQ1RDLEsiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8dGFibGU+XG4gIDx0Ym9keT5cbiAgICA8dHIgdi1pcz1cIk15Q29tcG9uZW50XCI+PC90cj5cbiAgPC90Ym9keT5cbjwvdGFibGU+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-model  checkbox 1`] = `
## 9.3. v-model > checkbox

\`\`\`vue-html
<input type="checkbox" v-model="foo" />
<input type="checkbox" v-model="foo" true-value="yes" />
<input type="checkbox" v-model="foo" false-value="no" />
<input type="checkbox" v-model="foo" :true-value="yes" :false-value="no" />
\`\`\`

\`\`\`tsx
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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input
        type="checkbox"
        true-value="yes"
        data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},checkbox: ["yes"] as const,} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input
        type="checkbox"
        false-value="no"
        data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},checkbox: ["no"] as const,} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input
        type="checkbox"
        true-value={yes}
        false-value={no}
        data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},checkbox: [yes, no] as const,} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo3LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6MTIsXCJlXCI6MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoyMyxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MjMsXCJlXCI6MzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MCxcImVcIjo5Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NDEsXCJlXCI6NDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjQ3LFwiZVwiOjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6NTIsXCJlXCI6NjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTB9LFwic1wiOntcInNcIjo3NyxcImVcIjo4N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6ODgsXCJlXCI6OTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2MyxcImVcIjo3Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQ2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo2MyxcImVcIjo3Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NzIsXCJlXCI6NzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjk3LFwiZVwiOjE1M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6OTgsXCJlXCI6MTAzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxMDQsXCJlXCI6MTA4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6MTA5LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjEzNCxcImVcIjoxNDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjE0NixcImVcIjoxNTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxMjAsXCJlXCI6MTMzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6OTgsXCJlXCI6MTAzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxMjAsXCJlXCI6MTMzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMjksXCJlXCI6MTMyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNTQsXCJlXCI6MjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxNTUsXCJlXCI6MTYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxNjEsXCJlXCI6MTY1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6MTY2LFwiZVwiOjE3Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjE5MixcImVcIjoyMDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjIwNCxcImVcIjoyMDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjoyMTAsXCJlXCI6MjIxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoyMjMsXCJlXCI6MjI1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTc3LFwiZVwiOjE5MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjE1NSxcImVcIjoxNjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjE3NyxcImVcIjoxOTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE4NixcImVcIjoxODl9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxLLENBQU1DLEksQ0FBS0MsVSw2QkFBV0Msa0MsQ0FBdEJDLGdCLEVBQXNCQyxTLEVBQVNDLEcsb0RBQXBCSixVLCtCQUFvQkksRztNQUNoQ0MsQ0FBQ0MsSztRQUFNQyxJLENBQUtDLFU7UUFBeUJDLFUsQ0FBV0MsSztvQ0FBekJDLGtDLENBQXRCQyxnQixFQUFzQkMsUyxFQUFTQyxHLG9EQUFwQk4sVSwrQkFBb0JNLEc7TUFDaENDLENBQUNDLEs7UUFBTUMsSSxDQUFLQyxVO1FBQXlCQyxXLENBQVlDLEk7b0NBQTFCQyxrQyxDQUF0QkMsZ0IsRUFBc0JDLFMsRUFBU0MsRyxvREFBcEJOLFUsK0JBQW9CTSxHO01BQ2hDQyxDQUFDQyxLO1FBQU1DLEksQ0FBS0MsVTtRQUEwQkMsVSxFQUFZQyxHO1FBQU1DLFcsRUFBYUMsRTtvQ0FBOUNDLGtDLENBQXRCQyxnQixFQUFzQkMsUyxFQUFTQyxHLG9EQUFwQlIsVSwrQkFBb0JRLEcsMkJBQWtCTixHLEVBQW1CRSxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiB0cnVlLXZhbHVlPVwieWVzXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgZmFsc2UtdmFsdWU9XCJub1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIDp0cnVlLXZhbHVlPVwieWVzXCIgOmZhbHNlLXZhbHVlPVwibm9cIiAvPlxuIl19
\`\`\`


`

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
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input type="number" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {type: "number" as const,isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input type="tel" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {type: "tel" as const,isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {type: "checkbox" as const,isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input type="radio" data-vuedx-directive-model={VueDX.internal.checkModelDirective("input" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {type: "radio" as const,isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NyxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NyxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI0LFwiZVwiOjYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoyNSxcImVcIjozMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MzEsXCJlXCI6MzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjM2LFwiZVwiOjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjoyNSxcImVcIjozMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjU0LFwiZVwiOjU3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MixcImVcIjo5Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NjMsXCJlXCI6Njh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjY5LFwiZVwiOjczfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo3NCxcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjgwLFwiZVwiOjkzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6NjMsXCJlXCI6Njh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjgwLFwiZVwiOjkzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4OSxcImVcIjo5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OTcsXCJlXCI6MTM2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo5OCxcImVcIjoxMDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjEwNCxcImVcIjoxMDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTB9LFwic1wiOntcInNcIjoxMDksXCJlXCI6MTE5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTIwLFwiZVwiOjEzM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjEwM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTIwLFwiZVwiOjEzM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTI5LFwiZVwiOjEzMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTM3LFwiZVwiOjE3M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTM4LFwiZVwiOjE0M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTQ0LFwiZVwiOjE0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTQ5LFwiZVwiOjE1Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjE1NyxcImVcIjoxNzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjoxMzgsXCJlXCI6MTQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTY5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEssNkJBQU1DLGtDLENBQU5DLGdCLEVBQU1DLFMsRUFBU0MsRyxtRUFBQUEsRztNQUNoQkMsQ0FBQ0MsSyxDQUFNQyxJLENBQUtDLFEsNkJBQVNDLGtDLENBQXBCQyxnQixFQUFvQkMsUyxFQUFTQyxHLG9EQUFsQkosUSwrQkFBa0JJLEc7TUFDOUJDLENBQUNDLEssQ0FBTUMsSSxDQUFLQyxLLDZCQUFNQyxrQyxDQUFqQkMsZ0IsRUFBaUJDLFMsRUFBU0MsRyxvREFBZkosSywrQkFBZUksRztNQUMzQkMsQ0FBQ0MsSyxDQUFNQyxJLENBQUtDLFUsNkJBQVdDLGtDLENBQXRCQyxnQixFQUFzQkMsUyxFQUFTQyxHLG9EQUFwQkosVSwrQkFBb0JJLEc7TUFDaENDLENBQUNDLEssQ0FBTUMsSSxDQUFLQyxPLDZCQUFRQyxrQyxDQUFuQkMsZ0IsRUFBbUJDLFMsRUFBU0MsRyxvREFBakJKLE8sK0JBQWlCSSxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGlucHV0IHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwidGVsXCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cInJhZGlvXCIgdi1tb2RlbD1cImZvb1wiIC8+XG4iXX0=
\`\`\`


`

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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirective("select" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "select" as const)}>
        <option value="foo" data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "option" as const)}>
          foo
        </option>
        <option value="bar" data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "option" as const)}>
          bar
        </option>
        <option value={baz} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "option" as const)}>
          baz
        </option>
      </select>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirective("select" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "select" as const)}>
        <option value="foo" data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "option" as const)}>
          foo
        </option>
        {
          VueDX.internal.renderList(vals, (val) => {
            return (
              <option value={val} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "option" as const)}>
                {VueDX.internal.checkInterpolation(val)}
              </option>
            )
          })
        }
        <option value="bar" data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "option" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxMzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjgsXCJlXCI6MjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTd9LFwic1wiOntcInNcIjoxLFwiZVwiOjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjgsXCJlXCI6MjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE3LFwiZVwiOjIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyNSxcImVcIjo1N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MjYsXCJlXCI6MzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjMzLFwiZVwiOjM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjozOSxcImVcIjo0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYwLFwiZVwiOjkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo2MSxcImVcIjo2N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NjgsXCJlXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjc5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4MCxcImVcIjo4M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OTUsXCJlXCI6MTI4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo5NixcImVcIjoxMDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEwNCxcImVcIjoxMDl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjExMSxcImVcIjoxMTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjExNixcImVcIjoxMTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE0MCxcImVcIjozMDR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjE0MSxcImVcIjoxNDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxNDgsXCJlXCI6MTYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE3fSxcInNcIjp7XCJzXCI6MTQxLFwiZVwiOjE0N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTQ4LFwiZVwiOjE2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTU3LFwiZVwiOjE2MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTY1LFwiZVwiOjE5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MTY2LFwiZVwiOjE3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTczLFwiZVwiOjE3OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTc5LFwiZVwiOjE4NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTg1LFwiZVwiOjE4OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MjIyLFwiZVwiOjIyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjE1LFwiZVwiOjIxOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjAwLFwiZVwiOjI1OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MjAxLFwiZVwiOjIwN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjI5LFwiZVwiOjIzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjM2LFwiZVwiOjIzOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjI0MSxcImVcIjoyNTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI0NCxcImVcIjoyNDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI2MixcImVcIjoyOTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjI2MyxcImVcIjoyNjl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjI3MCxcImVcIjoyNzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjI3NixcImVcIjoyODF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI4MixcImVcIjoyODV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjMwNCxcImVcIjozMDR9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxNLDZCQUFPQyxrQyxDQUFQQyxpQixFQUFPQyxTLEVBQVNDLEcsbUVBQUFBLEc7UUFDZkMsQ0FBQ0MsTSxDQUFPQyxLLENBQU1DLEs7VUFBTUMsRzs7UUFDcEJDLENBQUNDLE0sQ0FBT0MsSyxDQUFNQyxLO1VBQU1DLEc7O1FBQ3BCQyxDQUFDQyxNLENBQVFDLEssRUFBT0MsRztVQUFLQyxHOztRQUN2QkMsTTtNQUVBQyxDQUFDQyxNLDZCQUFPQyxrQyxDQUFQQyxpQixFQUFPQyxTLEVBQVNDLEcsbUVBQUFBLEc7UUFDZkMsQ0FBQ0MsTSxDQUFPQyxLLENBQU1DLEs7VUFBTUMsRzs7O29DQUNFQyxJLEdBQVBDLEc7O2NBQWZDLENBQUNDLE0sQ0FBNEJDLEssRUFBT0MsRztpQkFBS0Msa0NBQUdDLEc7Ozs7O1FBQzVDQyxDQUFDQyxNLENBQU9DLEssQ0FBTUMsSztVQUFNQyxHOztRQUNiQyxNIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gdmFsdWU9XCJmb29cIj5mb288L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImJhclwiPmJhcjwvb3B0aW9uPlxuICA8b3B0aW9uIDp2YWx1ZT1cImJhelwiPmJhejwvb3B0aW9uPlxuPC9zZWxlY3Q+XG5cbjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIHZhbHVlPVwiZm9vXCI+Zm9vPC9vcHRpb24+XG4gIDxvcHRpb24gdi1mb3I9XCJ2YWwgb2YgdmFsc1wiIDp2YWx1ZT1cInZhbFwiPnt7IHZhbCB9fTwvb3B0aW9uPlxuICA8b3B0aW9uIHZhbHVlPVwiYmFyXCI+YmFyPC9vcHRpb24+XG48L3NlbGVjdD5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-model  select/textarea 1`] = `
## 9.2. v-model > select/textarea

\`\`\`vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = __VueDX_ctx.foo;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirective("select" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "select" as const)}>
        <option value={foo} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "option" as const)}>
          {VueDX.internal.checkInterpolation(foo)}
        </option>
      </select>
      <textarea data-vuedx-directive-model={VueDX.internal.checkModelDirective("textarea" as const, undefined, foo, {""/*<VueDX:directiveCompletion/>*/:true}, {isAssignable: () => {foo=(null as any)},} as const)} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "textarea" as const)} />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6OCxcImVcIjoyMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxN30sXCJzXCI6e1wic1wiOjEsXCJlXCI6N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6OCxcImVcIjoyMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcsXCJlXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI1LFwiZVwiOjYyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoyNixcImVcIjozMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MzQsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NDYsXCJlXCI6NTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQ4LFwiZVwiOjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo2MyxcImVcIjo3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NzMsXCJlXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjgyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6ODMsXCJlXCI6OTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTl9LFwic1wiOntcInNcIjo3NCxcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6ODMsXCJlXCI6OTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjkyLFwiZVwiOjk1fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLE0sNkJBQU9DLGtDLENBQVBDLGlCLEVBQU9DLFMsRUFBU0MsRyxtRUFBQUEsRztRQUNmQyxDQUFDQyxNLENBQVFDLEssRUFBT0MsRztXQUFLQyxrQ0FBRUMsRzs7UUFDekJDLE07TUFDQUMsQ0FBQ0MsUSw2QkFBU0Msa0MsQ0FBVEMsbUIsRUFBU0MsUyxFQUFTQyxHLG1FQUFBQSxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gOnZhbHVlPVwiZm9vXCI+e3tmb299fTwvb3B0aW9uPlxuPC9zZWxlY3Q+XG48dGV4dGFyZWEgdi1tb2RlbD1cImZvb1wiIC8+XG4iXX0=
\`\`\`


`

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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input onFocus={VueDX.internal.checkOnDirective("input" as const, "focus" as const, onFocus, {""/*<VueDX:directiveCompletion/>*/:true})}  data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input onUpdate:value={VueDX.internal.checkOnDirective("input" as const, "update:value" as const, ($event) => {if ($event.target == null || $event.currentTarget == null || !VueDX.internal.checkHTMLElementType("input", $event.currentTarget)) throw new Error("Guard: event.target, event.currentTarget")
          value = $event
        }, {""/*<VueDX:directiveCompletion/>*/:true})}  data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input
        onEventName={VueDX.internal.union(
          VueDX.internal.checkOnDirective("input" as const, "event-name" as const, undefined, {""/*<VueDX:directiveCompletion/>*/:true}),
          VueDX.internal.checkOnDirective("input" as const, "eventName" as const, undefined, {""/*<VueDX:directiveCompletion/>*/:true}),
        )}
        {...VueDX.internal.checkOnDirective("input" as const, eventName, undefined, {""/*<VueDX:directiveCompletion/>*/:true})}
        {...VueDX.internal.checkOnDirective("input" as const, undefined, events, {""/*<VueDX:directiveCompletion/>*/:true})}
       data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
      <input
        onKeydown={VueDX.internal.union(
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, fnName, {""/*<VueDX:directiveCompletion/>*/:true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, ($event) => {if ($event.target == null || $event.currentTarget == null || !VueDX.internal.checkHTMLElementType("input", $event.currentTarget)) throw new Error("Guard: event.target, event.currentTarget")
            callMyFn($event)
          }, {"left": true, ""/*<VueDX:directiveCompletion/>*/:true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, $event => callMyFn($event), {"shift": true, "left": true, ""/*<VueDX:directiveCompletion/>*/:true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, ($event) => callMyFn($event), {"shift": true, "right": true, ""/*<VueDX:directiveCompletion/>*/:true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, () => callMyFn($event), {"shift": true, "down": true, ""/*<VueDX:directiveCompletion/>*/:true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, function myFunction($event) {
    callMyFn($event)
  }, {"shift": true, "up": true, ""/*<VueDX:directiveCompletion/>*/:true}),
          VueDX.internal.checkOnDirective("input" as const, "keydown" as const, function myFunction() {
    callMyFn($event)
  }, {"ctrl": true, "up": true, ""/*<VueDX:directiveCompletion/>*/:true}),
        )}
       data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "input" as const)} />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo4LFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6NyxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTUsXCJlXCI6MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI3LFwiZVwiOjY3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoyOCxcImVcIjozM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjM1LFwiZVwiOjQ3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6MzQsXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjoyOCxcImVcIjozM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjQ5LFwiZVwiOjYzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2OCxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjY5LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6NzYsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo3NSxcImVcIjo4Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjY5LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjEyfSxcInNcIjp7XCJzXCI6NzYsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjg2LFwiZVwiOjg2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6ODcsXCJlXCI6OTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjo4OCxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6OTcsXCJlXCI6OTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo5OCxcImVcIjoxMTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjk5LFwiZVwiOjExMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTEwLFwiZVwiOjExMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjExMSxcImVcIjoxMjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjExMSxcImVcIjoxMjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjExNyxcImVcIjoxMjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyOCxcImVcIjo0OTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjEzOCxcImVcIjoxNDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjoxMzcsXCJlXCI6MTU0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6MTI5LFwiZVwiOjEzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MTQ3LFwiZVwiOjE1M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjE1NyxcImVcIjoxODl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjE1OCxcImVcIjoxNjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTZ9LFwic1wiOntcInNcIjoxNzIsXCJlXCI6MTg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6MTkyLFwiZVwiOjI0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTkzLFwiZVwiOjIwMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjIxMyxcImVcIjoyMzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIwMSxcImVcIjoyMTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIwMSxcImVcIjoyMDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjIwNyxcImVcIjoyMTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjoyNDMsXCJlXCI6Mjk0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyNDQsXCJlXCI6MjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjI4fSxcInNcIjp7XCJzXCI6MjY1LFwiZVwiOjI5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjUyLFwiZVwiOjI2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjUyLFwiZVwiOjI1N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjU4LFwiZVwiOjI2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjI5NyxcImVcIjozNDF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjI5OCxcImVcIjozMDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MjJ9LFwic1wiOntcInNcIjozMTgsXCJlXCI6MzQwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozMDYsXCJlXCI6MzE2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjozMDYsXCJlXCI6MzExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjozMTIsXCJlXCI6MzE2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6MzQ0LFwiZVwiOjQxOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MzQ1LFwiZVwiOjM1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1NH0sXCJzXCI6e1wic1wiOjM2MyxcImVcIjo0MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjM1MyxcImVcIjozNjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjM1MyxcImVcIjozNTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjM1OSxcImVcIjozNjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo0MjEsXCJlXCI6NDg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo0MjIsXCJlXCI6NDI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjQ4fSxcInNcIjp7XCJzXCI6NDM5LFwiZVwiOjQ4N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDMwLFwiZVwiOjQzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NDMwLFwiZVwiOjQzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6NDM1LFwiZVwiOjQzN319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEssQ0FBT0MsTyxFQUFEQywrQixDQUFOQyxnQixFQUFPRixPLFdBQU9HLE87TUFDZkMsQ0FBQ0MsSyxDQUFPQyxjLEVBQURDLCtCLENBQU5DLGdCLEVBQU9GLGM7VUFBY0csYzs7TUFDdEJDLENBQUNDLEs7UUFBT0MsVztVQUFEQywrQixDQUFOQyxnQixFQUFPQyxZLFdBQVVDLFM7VUFBQ0MsK0IsQ0FBbEJILGdCLEVBQW1CSSxXLFdBQVNDLFM7O1lBQUNDLCtCLENBQTdCTixnQixFQUE4Qk8sUyxFQUFXQyxTO1lBQUNDLCtCLENBQTFDVCxnQixFQUEwQ1UsUyxFQUFNQyxNOztNQUNqREMsQ0FBQ0MsSztRQUNFQyxTO1VBQURDLCtCLENBRERDLGdCLEVBQ0VGLFMsV0FBU0csTTtVQUNWQywrQixDQUZERixnQixFQUVFRyxTO1lBQWNDLGdCO2FBQU5DLENBQUFDLE07VUFDVEMsK0IsQ0FIRFAsZ0IsRUFHRVEsUyxXQUFvQkMsMEIsRUFBWkMsQ0FBQUMsTyxRQUFNQyxNO1VBQ2ZDLCtCLENBSkRiLGdCLEVBSUVjLFMsV0FBcUJDLDRCLEVBQWJDLENBQUFDLE8sUUFBTUMsTztVQUNmQywrQixDQUxEbkIsZ0IsRUFLRW9CLFMsV0FBb0JDLHNCLEVBQVpDLENBQUFDLE8sUUFBTUMsTTtVQUNmQywrQixDQU5EekIsZ0IsRUFNRTBCLFMsV0FBa0JDO0FBQUFBO0FBQUFBLEcsRUFBVkMsQ0FBQUMsTyxRQUFNQyxJO1VBR2ZDLCtCLENBVEQvQixnQixFQVNFZ0MsUyxXQUFpQkM7QUFBQUE7QUFBQUEsRyxFQUFUQyxDQUFBQyxNLFFBQUtDLEkiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aW5wdXQgQGZvY3VzPVwib25Gb2N1c1wiIC8+XG48aW5wdXQgQHVwZGF0ZTp2YWx1ZT1cInZhbHVlID0gJGV2ZW50XCIgLz5cbjxpbnB1dCBAZXZlbnQtbmFtZSBAZXZlbnROYW1lIEBbZXZlbnROYW1lXSB2LW9uPVwiZXZlbnRzXCIgLz5cbjxpbnB1dFxuICBAa2V5ZG93bj1cImZuTmFtZVwiXG4gIEBrZXlkb3duLmxlZnQ9XCJjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQubGVmdD1cIiRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQucmlnaHQ9XCIoJGV2ZW50KSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQuZG93bj1cIigpID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbiAgQGtleWRvd24uY3RybC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbi8+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-on multiple events default 1`] = `
## 4.1. v-on multiple events 

\`\`\`vue-html
<div @click="onClick" @hover="onHover" @press="onPress" />
<div @click="onClick" @hover="onHover" @press="onPress" />
\`\`\`

\`\`\`tsx
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
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <div
        onClick={VueDX.internal.checkOnDirective("div" as const, "click" as const, onClick, {""/*<VueDX:directiveCompletion/>*/:true})}
        onHover={VueDX.internal.checkOnDirective("div" as const, "hover" as const, onHover, {""/*<VueDX:directiveCompletion/>*/:true})}
        onPress={VueDX.internal.checkOnDirective("div" as const, "press" as const, onPress, {""/*<VueDX:directiveCompletion/>*/:true})}
       data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)} />
      <div
        onClick={VueDX.internal.checkOnDirective("div" as const, "click" as const, onClick, {""/*<VueDX:directiveCompletion/>*/:true})}
        onHover={VueDX.internal.checkOnDirective("div" as const, "hover" as const, onHover, {""/*<VueDX:directiveCompletion/>*/:true})}
        onPress={VueDX.internal.checkOnDirective("div" as const, "press" as const, onPress, {""/*<VueDX:directiveCompletion/>*/:true})}
       data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)} />
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo2LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6NSxcImVcIjoyMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTMsXCJlXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjI4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMxfSxcInNcIjp7XCJzXCI6MjIsXCJlXCI6Mzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjMwLFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo0MCxcImVcIjo0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjM5LFwiZVwiOjU1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo0NyxcImVcIjo1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTksXCJlXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo2MCxcImVcIjo2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6NjUsXCJlXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo2NCxcImVcIjo4MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjYwLFwiZVwiOjYzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo3MixcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6ODIsXCJlXCI6ODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzF9LFwic1wiOntcInNcIjo4MSxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6ODksXCJlXCI6OTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjk5LFwiZVwiOjEwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMX0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjExNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTA2LFwiZVwiOjExM319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEc7UUFBS0MsTyxFQUFEQywrQixDQUFKQyxjLEVBQUtGLE8sV0FBT0csTztRQUFVQyxPLEVBQURDLCtCLENBQXJCSCxjLEVBQXNCRSxPLFdBQU9FLE87UUFBVUMsTyxFQUFEQywrQixDQUF0Q04sYyxFQUF1Q0ssTyxXQUFPRSxPOztNQUMvQ0MsQ0FBQ0MsRztRQUFLQyxPLEVBQURDLCtCLENBQUpDLGMsRUFBS0YsTyxXQUFPRyxPO1FBQVVDLE8sRUFBREMsK0IsQ0FBckJILGMsRUFBc0JFLE8sV0FBT0UsTztRQUFVQyxPLEVBQURDLCtCLENBQXRDTixjLEVBQXVDSyxPLFdBQU9FLE8iLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-once default 1`] = `
## 12.1. v-once 

\`\`\`vue-html
<section v-once>{{ largeText }}</section>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let largeText = __VueDX_ctx.largeText;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <section data-vuedx-directive-once={VueDX.internal.checkDirective("once" as const, "section" as const, undefined, undefined, {""/*<VueDX:directiveCompletion/>*/:true})} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "section" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo0MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MSxcImVcIjo4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6OSxcImVcIjoxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjksXCJlXCI6MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoxLFwiZVwiOjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjksXCJlXCI6MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjE0LFwiZVwiOjE1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MzF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjI4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjozMSxcImVcIjo0MX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLE8sNEJBQVFDLDZCLENBQUFDLGUsRUFBUkMsa0IsRUFBUUMsUyxFQUFLQyxTO09BQUVDLGtDQUFHQyxTO01BQVlDLE8iLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8c2VjdGlvbiB2LW9uY2U+e3sgbGFyZ2VUZXh0IH19PC9zZWN0aW9uPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-pre default 1`] = `
## 11.1. v-pre 

\`\`\`vue-html
<pre v-pre>{{ interpolation }}</pre>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <pre data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "pre" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjIzfSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMwLFwiZVwiOjM2fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxHO01BQVVDLHVCO01BQW1CQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHByZSB2LXByZT57eyBpbnRlcnBvbGF0aW9uIH19PC9wcmU+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-show default 1`] = `
## 8.1. v-show 

\`\`\`vue-html
<h1 v-show="ok">Hello!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = __VueDX_ctx.ok;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1 data-vuedx-directive-show={VueDX.internal.checkDirective("show" as const, "h1" as const, undefined, ok, {""/*<VueDX:directiveCompletion/>*/:true})} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "h1" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6NCxcImVcIjoxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjQsXCJlXCI6MTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTN9LFwic1wiOntcInNcIjoxLFwiZVwiOjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjQsXCJlXCI6MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNixcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MjIsXCJlXCI6Mjd9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxFLDRCQUFHQyw2QixDQUFBQyxlLEVBQUhDLGEsRUFBR0MsUyxFQUFRQyxFO01BQUlDLE07TUFBTUMsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LXNob3c9XCJva1wiPkhlbGxvITwvaDE+XG4iXX0=
\`\`\`


`

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
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <Foo data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", Foo)}>
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
              < data-vuedx-directive-slot={VueDX.internal.checkDirective("slot" as const, "template" as const, "foo" as const, undefined, {""/*<VueDX:directiveCompletion/>*/:true})}>
                <>
                  A
                </>
              </>
              < data-vuedx-directive-slot={VueDX.internal.checkDirective("slot" as const, "template" as const, "bar" as const, {bar}, {""/*<VueDX:directiveCompletion/>*/:true})}>
                <>
                  {VueDX.internal.checkInterpolation(bar)}
                </>
              </>
              <>
                Invalid
              </>
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
export type __VueDX_Attrs = {};
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxMTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxOSxcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OCxcImVcIjozNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjMsXCJlXCI6MjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjQ5LFwiZVwiOjUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo1NCxcImVcIjo1OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzgsXCJlXCI6Nzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2MSxcImVcIjo2OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjMsXCJlXCI6NjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NDJ9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mjl9LFwic1wiOntcInNcIjoxOCxcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjE4LFwiZVwiOjE5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMixcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyOX0sXCJzXCI6e1wic1wiOjQ4LFwiZVwiOjYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6NDgsXCJlXCI6NDl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjgyLFwiZVwiOjExMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6OTIsXCJlXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjExMSxcImVcIjoxMTd9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxHO09BQURDLDBCQUFDRCxHO1FBQ1lFLEs7OztjQUFYQyxDO2dCQUFlQyxDOzs7OztRQUNKQyxLLEdBQUtDLEs7OztjQUFoQkMsQztpQkFBdUJDLGtDQUFFQyxHOzs7OztRQUYxQkMsMEM7OzsyQ0FDV0MsNkIsQ0FBQUMsZSx1QkFBQ1YsSyxXQUFHVyxTO2dCQUFkVixDO2tCQUFlQyxDOzs7MkNBQ0xVLDZCLENBQUFDLGUsdUJBQUNWLEssV0FBS0MsSztnQkFBaEJDLEM7bUJBQXVCQyxrQ0FBRUMsRzs7O2NBQ3pCTyxDO2dCQUFVQyxPOzs7Ozs7TUFDWkMsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxGb28+XG4gIDx0ZW1wbGF0ZSAjZm9vPkE8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI2Jhcj1cIntiYXJ9XCI+e3tiYXJ9fTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZT5JbnZhbGlkPC90ZW1wbGF0ZT5cbjwvRm9vPlxuIl19
\`\`\`


`

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
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
const FooBar = VueDX.internal.resolveComponent(__VueDX_components, "FooBar" as const, "FooBar" as const);
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <FooBar data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", FooBar)}>
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
      <FooBar data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", FooBar)}>
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
      <FooBar data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", FooBar)}>
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
      <FooBar data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", FooBar)}>
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
                      ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
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
              <>
                < data-vuedx-directive-slot={VueDX.internal.checkDirective("slot" as const, "template" as const, "default" as const, undefined, {""/*<VueDX:directiveCompletion/>*/:true})}>
                  <>
                    content
                  </>
                </>
                < data-vuedx-directive-slot={VueDX.internal.checkDirective("slot" as const, "template" as const, "other" as const, {foo}, {""/*<VueDX:directiveCompletion/>*/:true})}>
                  <>
                    {VueDX.internal.checkInterpolation(foo)}
                  </>
                </>
                < data-vuedx-directive-slot={VueDX.internal.checkDirective("slot" as const, "template" as const, "another" as const, foo, {""/*<VueDX:directiveCompletion/>*/:true})}>
                  <>
                    {
                      (foo)
                        ? <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                            {VueDX.internal.checkInterpolation(foo.bar)}
                          </div>
                        : null
                    }
                  </>
                </>
                <div data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "div" as const)}>
                  extranous
                </div>
              </>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo4LFwiZVwiOjE1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNSxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6Njh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjI2LFwiZVwiOjMyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6Njh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjM0LFwiZVwiOjQxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo0MyxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjUwLFwiZVwiOjU5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1MyxcImVcIjo1Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjksXCJlXCI6MTEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo3MCxcImVcIjo3Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjY5LFwiZVwiOjExMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6NzgsXCJlXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjg1LFwiZVwiOjkwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6OTIsXCJlXCI6MTAxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo5NSxcImVcIjo5OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTExLFwiZVwiOjMxOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MTEyLFwiZVwiOjExOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjExMSxcImVcIjozMTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjEzMyxcImVcIjoxNDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyMixcImVcIjoxNTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjE0MSxcImVcIjoxNDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjE3MyxcImVcIjoxNzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjE4MCxcImVcIjoxODV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE2MixcImVcIjoyMDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxODcsXCJlXCI6MTk0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxODksXCJlXCI6MTkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMTksXCJlXCI6MjI2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMjgsXCJlXCI6MjMxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyMDgsXCJlXCI6Mjg1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyNDksXCJlXCI6MjUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyMzgsXCJlXCI6MjcxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMzksXCJlXCI6MjQyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjU0LFwiZVwiOjI2NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjU2LFwiZVwiOjI2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo0Mn0sXCJzXCI6e1wic1wiOjExMixcImVcIjoxMTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mjl9LFwic1wiOntcInNcIjoxMzIsXCJlXCI6MTQwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MTMyLFwiZVwiOjEzM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTQwLFwiZVwiOjE0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyOX0sXCJzXCI6e1wic1wiOjE3MixcImVcIjoxODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTV9LFwic1wiOntcInNcIjoxNzIsXCJlXCI6MTczfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6MjE4LFwiZVwiOjIzMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjIxOCxcImVcIjoyMTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI4OCxcImVcIjozMDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI4OSxcImVcIjoyOTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjI5MyxcImVcIjozMDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjMxOCxcImVcIjozMTh9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUFBRSxTOzs7Z0JBQU9DLE87Ozs7O1FBQU9DLE07TUFDZkMsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUFRRSxTLEdBQVNDLEs7OztpQkFBT0Msa0NBQUdDLEc7Ozs7OztNQUM1QkMsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUFRRSxPLEdBQU9DLEs7OztpQkFBT0Msa0NBQUdDLEc7Ozs7OztNQUMxQkMsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUNZRSxTOzs7Z0JBQVhDLEM7a0JBQW1CQyxPOzs7OztVQUNSQyxPLEdBQU9DLEs7OztnQkFBbEJDLEM7bUJBQXlCQyxrQ0FBRUMsRzs7Ozs7VUFDaEJDLFMsR0FBU0MsRzs7O2dCQUFwQkMsQzs7cUJBQ2FDLEc7d0JBQVhDLENBQUNDLEc7MkJBQWVDLGtDQUFFQyxPOzs7Ozs7OztVQUpyQkMsMEM7Ozs2Q0FDV0MsNkIsQ0FBQUMsZSx1QkFBQ2xCLFMsV0FBT21CLFM7a0JBQWxCbEIsQztvQkFBbUJDLE87Ozs2Q0FDVGtCLDZCLENBQUFDLGUsdUJBQUNsQixPLFdBQU9DLEs7a0JBQWxCQyxDO3FCQUF5QkMsa0NBQUVDLEc7Ozs2Q0FDakJlLDZCLENBQUFDLGUsdUJBQUNmLFMsV0FBU0MsRztrQkFBcEJDLEM7O3VCQUNhQyxHOzBCQUFYQyxDQUFDQyxHOzZCQUFlQyxrQ0FBRUMsTzs7Ozs7O2dCQUVwQlMsQ0FBQ0MsRztrQkFBSUMsUzs7Ozs7O1FBQ0VDLE0iLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Rm9vQmFyPmNvbnRlbnQ8L0Zvb0Jhcj5cbjxGb29CYXIgI2RlZmF1bHQ9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0JhciAjb3RoZXI9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0Jhcj5cbiAgPHRlbXBsYXRlICNkZWZhdWx0PmNvbnRlbnQ8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI290aGVyPVwie2Zvb31cIj57e2Zvb319PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNhbm90aGVyPVwiZm9vXCI+XG4gICAgPGRpdiB2LWlmPVwiZm9vXCI+e3tmb28uYmFyfX08L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgPGRpdj5leHRyYW5vdXM8L2Rpdj5cbjwvRm9vQmFyPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-text default 1`] = `
## 6.1. v-text 

\`\`\`vue-html
<span v-text="msg"></span>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import { __VueDX_DefineComponent as Example, __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type __VueDX_Self = InstanceType<typeof Example>
/*<vuedx:templateGlobals>*/
/*</vuedx:templateGlobals>*/
export function __VueDX_render(__VueDX_ctx: __VueDX_Self): any {
  /*<vuedx:templateGlobals>*/
  let msg = __VueDX_ctx.msg;
  /*</vuedx:templateGlobals>*/
  __VueDX_ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <span data-vuedx-directive-text={VueDX.internal.checkDirective("text" as const, "span" as const, undefined, msg, {""/*<VueDX:directiveCompletion/>*/:true})} data-vuedx-prop-completion-helper={VueDX.internal.propCompletionHelper("", "span" as const)}>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MSxcImVcIjo1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjI5fSxcInNcIjp7XCJzXCI6NixcImVcIjoxOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjYsXCJlXCI6MTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTV9LFwic1wiOntcInNcIjoxLFwiZVwiOjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjYsXCJlXCI6MTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE0LFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxOSxcImVcIjoyNn19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEksNEJBQUtDLDZCLENBQUFDLGUsRUFBTEMsZSxFQUFLQyxTLEVBQVFDLEc7TUFBS0MsSSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxzcGFuIHYtdGV4dD1cIm1zZ1wiPjwvc3Bhbj5cbiJdfQ==
\`\`\`


`
