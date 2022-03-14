// Jest Snapshot v1, https://goo.gl/fbAQLP

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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let bars = _ctx.bars;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const _DynamicComponent0 = VueDX.internal.resolveComponent(__VueDX_components, bar);

  return (
    <>
      {
        VueDX.internal.renderList(bars, (bar) => {
          const _DynamicComponent1 = VueDX.internal.resolveComponent(__VueDX_components, bar);
          return (
            <_DynamicComponent0>
              {VueDX.internal.checkSlots(_DynamicComponent0, {
                default: () => {
                  return (
                    <_DynamicComponent1>
                      {VueDX.internal.checkSlots(_DynamicComponent1, {
                        "default": ({baz}) => {
                          const _DynamicComponent2 = VueDX.internal.resolveComponent(__VueDX_components, baz[bar]);
                          return (
                            <>
                              {
                                VueDX.internal.renderList(baz, (item) => {
                                  const _DynamicComponent3 = VueDX.internal.resolveComponent(__VueDX_components, item);
                                  return (
                                    <_DynamicComponent2>
                                      {VueDX.internal.checkSlots(_DynamicComponent2, {
                                        default: () => {
                                          return (
                                            <_DynamicComponent3 />
                                          )
                                        },
                                      })}
                                    </_DynamicComponent2>
                                  )
                                })
                              }
                            </>
                          )
                        },
                      })}
                    </_DynamicComponent1>
                  )
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
function _slots(_ctx: _Self) {
  let bars = _ctx.bars;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjM1LFwiZVwiOjM5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyOCxcImVcIjozMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjAsXCJlXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MSxcImVcIjoxMH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxLFwiZVwiOjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NCxcImVcIjoxOTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo0NSxcImVcIjo1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjQ0LFwiZVwiOjE5N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjgwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjh9LFwic1wiOntcInNcIjoxMDMsXCJlXCI6MTExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMjgsXCJlXCI6MTMxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxMjAsXCJlXCI6MTI0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTYxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo4NyxcImVcIjoxODJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo4OCxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjg3LFwiZVwiOjE4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6ODgsXCJlXCI6OTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE0MSxcImVcIjoxNjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoxNDIsXCJlXCI6MTUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MTcyLFwiZVwiOjE4MX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjE4NyxcImVcIjoxOTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoyMDAsXCJlXCI6MjA5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7aUZBQWdCQSxHOzs7OztrQ0FBbUJDLEksR0FBUEMsRzt5RkFDVkMsRzs7WUFEbEJDLENBQUNDLGtCO2VBQURDLDBCQUFDRCxrQjtnQkFBQUUsUzs7b0JBQ0NDLENBQUNDLGtCO3VCQUFEQywwQkFBQ0Qsa0I7d0JBQXFCRSxTLEdBQVNDLEs7eUdBQ2JDLFE7Ozs7MERBQXlCQyxHLEdBQVJDLEk7aUhBQ2ZDLEk7O29DQURsQkMsQ0FBQ0Msa0I7dUNBQURDLDBCQUFDRCxrQjt3Q0FBQUUsUzs7NENBQ0NDLENBQUNDLGtCOzs7O3NDQUNEQyxrQjs7Ozs7Ozs7c0JBQ0ZDLGtCOzs7O2NBQ0ZDLGtCIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGNvbXBvbmVudCA6aXM9XCJiYXJcIiB2LWZvcj1cImJhciBvZiBiYXJzXCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6W2Jhcl1cIiB2LWZvcj1cIml0ZW0gb2YgYmF6XCIgPlxuICAgICAgPGNvbXBvbmVudCA6aXM9XCJpdGVtXCIgLz5cbiAgICA8L2NvbXBvbmVudD5cbiAgPC9jb21wb25lbnQ+XG48L2NvbXBvbmVudD5cbiJdfQ==
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = _ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/
  const _DynamicComponent0 = VueDX.internal.resolveComponent(__VueDX_components, foo);

  return (
    <_DynamicComponent0>
      {VueDX.internal.checkSlots(_DynamicComponent0, {
        "default": ({bar}) => {
          const _DynamicComponent1 = VueDX.internal.resolveComponent(__VueDX_components, bar);
          return (
            <_DynamicComponent1>
              {VueDX.internal.checkSlots(_DynamicComponent1, {
                "default": ({baz}) => {
                  const _DynamicComponent2 = VueDX.internal.resolveComponent(__VueDX_components, baz);
                  return (
                    <_DynamicComponent2>
                      {VueDX.internal.checkSlots(_DynamicComponent2, {
                        "other": ({ foo }) => {
                          const _DynamicComponent3 = VueDX.internal.resolveComponent(__VueDX_components, foo);
                          return (
                            <>
                              <>
                                <_DynamicComponent3 />
                              </>
                            </>
                          )
                        },
                        "default": ({ bar }) => {
                          const _DynamicComponent4 = VueDX.internal.resolveComponent(__VueDX_components, bar);
                          return (
                            <>
                              <>
                                <_DynamicComponent4 />
                              </>
                            </>
                          )
                        },
                      })}
                    </_DynamicComponent2>
                  )
                },
              })}
            </_DynamicComponent1>
          )
        },
      })}
    </_DynamicComponent0>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let foo = _ctx.foo;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MzIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MSxcImVcIjoxMH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MzIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMixcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MzEsXCJlXCI6MzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjU3LFwiZVwiOjYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MSxcImVcIjozMDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo0MixcImVcIjo1MX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjMwN319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NjMsXCJlXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjcyLFwiZVwiOjc3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMDAsXCJlXCI6MTAzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo4NCxcImVcIjoyOTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjo4NSxcImVcIjo5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjg0LFwiZVwiOjI5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTIzLFwiZVwiOjEyOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTMwLFwiZVwiOjEzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTY0LFwiZVwiOjE2N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTEyLFwiZVwiOjE4OX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTQ4LFwiZVwiOjE3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjE0OSxcImVcIjoxNTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjIwNyxcImVcIjoyMTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIxNixcImVcIjoyMjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1MCxcImVcIjoyNTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE5NixcImVcIjoyNzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIzNCxcImVcIjoyNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjoyMzUsXCJlXCI6MjQ0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6MjgyLFwiZVwiOjI5MX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxOH0sXCJzXCI6e1wic1wiOjI5NyxcImVcIjozMDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTh9LFwic1wiOntcInNcIjozMTAsXCJlXCI6MzE5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7aUZBQWdCQSxHOzs7SUFBaEJDLENBQUNDLGtCO09BQURDLDBCQUFDRCxrQjtRQUFxQkUsUyxHQUFTQyxLO3lGQUNiQyxHOztZQUFoQkMsQ0FBQ0Msa0I7ZUFBREMsMEJBQUNELGtCO2dCQUFxQkUsUyxHQUFTQyxLO2lHQUNiQyxHOztvQkFBaEJDLENBQUNDLGtCO3VCQUFEQywwQkFBQ0Qsa0I7d0JBQ1lFLE8sR0FBT0MsTzt5R0FDQUMsRzs7OzhCQURsQkMsQztnQ0FDRUMsQ0FBQ0Msa0I7Ozs7O3dCQUVRQyxTLEdBQVNDLE87eUdBQ0ZDLEc7Ozs4QkFEbEJDLEM7Z0NBQ0VDLENBQUNDLGtCOzs7Ozs7c0JBRUhDLGtCOzs7O2NBQ0ZDLGtCOzs7O01BQ0ZDLGtCIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGNvbXBvbmVudCA6aXM9XCJmb29cIiAjZGVmYXVsdD1cIntiYXJ9XCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6XCI+XG4gICAgICA8dGVtcGxhdGUgI290aGVyPVwieyBmb28gfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImZvb1wiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHRlbXBsYXRlICNkZWZhdWx0PVwieyBiYXIgfVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImJhclwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvY29tcG9uZW50PlxuICA8L2NvbXBvbmVudD5cbjwvY29tcG9uZW50PlxuIl19
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
const FooBar = VueDX.internal.resolveComponent(__VueDX_components, "FooBar" as const, "FooBar" as const);
const Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
const UnknownElement = VueDX.internal.resolveComponent(__VueDX_components, "unknown-element" as const, "UnknownElement" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
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
            )
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
            )
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
            )
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
            )
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
            )
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
            )
          },
        })}
      </UnknownElement>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MCxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxMyxcImVcIjoxOX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6NDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6NDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozMCxcImVcIjozM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MzUsXCJlXCI6NDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ0LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MjZ9LFwic1wiOntcInNcIjo0NCxcImVcIjo3NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjU3LFwiZVwiOjYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6NjIsXCJlXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjk1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo3NixcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjk1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo3NixcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6ODMsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjg4LFwiZVwiOjk0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo5NixcImVcIjoxMTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjk3LFwiZVwiOjEwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjk2LFwiZVwiOjExOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6OTcsXCJlXCI6MTA0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMDUsXCJlXCI6MTA4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxMTAsXCJlXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMTksXCJlXCI6MTU3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE0fSxcInNcIjp7XCJzXCI6MTIwLFwiZVwiOjEzNX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjExOSxcImVcIjoxNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEzNixcImVcIjoxMzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTR9LFwic1wiOntcInNcIjoxNDEsXCJlXCI6MTU2fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxNO1NBQURDLDBCQUFDRCxNO1VBQUFFLFM7OztnQkFBT0MsRzs7Ozs7UUFBS0MsTTtNQUNiQyxDQUFDQyxPO1NBQURDLDBCQUFDRCxPO1VBQUFFLFM7OztnQkFBUUMsRzs7Ozs7UUFBS0MsTztNQUNkQyxDQUFDQyxXO1NBQURDLDBCQUFDRCxXO1VBQUFFLFM7OztnQkFBWUMsRzs7Ozs7UUFBS0MsVztNQUNsQkMsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUFBRSxTOzs7Z0JBQU9DLEc7Ozs7O1FBQUtDLE07TUFDYkMsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUFBRSxTOzs7Z0JBQVFDLEc7Ozs7O1FBQUtDLE07TUFDZEMsQ0FBQ0MsYztTQUFEQywwQkFBQ0QsYztVQUFBRSxTOzs7Z0JBQWdCQyxHOzs7OztRQUFLQyxjIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPEZvb0Jhcj5mb288L0Zvb0Jhcj5cbjxGb28uQmFyPmZvbzwvRm9vLkJhcj5cbjxGb28uQmFyLkJhej5mb288L0Zvby5CYXIuQmF6PlxuPGZvb0Jhcj5mb288L2Zvb0Jhcj5cbjxmb28tYmFyPmZvbzwvZm9vLWJhcj5cbjx1bmtub3duLWVsZW1lbnQ+Zm9vPC91bmtub3duLWVsZW1lbnQ+XG4iXX0=
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
const HelloWorld = VueDX.internal.resolveComponent(__VueDX_components, "HelloWorld" as const, "HelloWorld" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let name = _ctx.name;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
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
function _slots(_ctx: _Self) {
  let name = _ctx.name;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjEsXCJlXCI6MTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNyxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTgsXCJlXCI6MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjksXCJlXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo0MyxcImVcIjo0N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDksXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUwLFwiZVwiOjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MixcImVcIjo2M319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyOX0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjc0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2NSxcImVcIjo4MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjc4LFwiZVwiOjc5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLFUsQ0FBV0MsQztNQUNaQyxDQUFDQyxJO1FBQUtDLE07U0FBTUMsa0NBQUdDLE07UUFBV0MsSTtNQUMxQkMsQ0FBQ0MsQztRQUFZQyxDOztTQUNKQyw2QjtZQUFUQyxDQUFDQyxDO2NBQVlDLEMiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8SGVsbG9Xb3JsZCBuIC8+XG48c3Bhbj5OYW1lOiB7eyBuYW1lICsgfX08L3NwYW4+XG48cCB2LWJpbmQ6PjwvcD5cbjxwIHYtaWY9XCJcIj48L3A+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec element  single 1`] = `
## 1.1. element > single

\`\`\`vue-html
<div>foo</div>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div>
      foo
    </div>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1LFwiZVwiOjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEwLFwiZVwiOjEzfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEc7TUFBSUMsRztNQUFLQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdj5mb288L2Rpdj5cbiJdfQ==
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let list = _ctx.list;
  let props = _ctx.props;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      {
        VueDX.internal.renderList(list, (items) => {
          return (
            <div>
              {VueDX.internal.renderSlot(_ctx.$slots, "default", { }) ?? <>
                fallback content
              </>
              }
              {
                VueDX.internal.renderList(items, (item) => {
                  return (
                    <span>
                      {VueDX.internal.renderSlot(_ctx.$slots, "other", { ...(props), "myProp": item, }) ?? <>
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
function _slots(_ctx: _Self) {
  let list = _ctx.list;
  let props = _ctx.props;
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
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MjEsXCJlXCI6MjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjE4NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6MzYsXCJlXCI6NTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjgzLFwiZVwiOjg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo3NSxcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjIsXCJlXCI6MTc3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo2MyxcImVcIjo2N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTA2LFwiZVwiOjExM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTIyLFwiZVwiOjEyN319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo4fSxcInNcIjp7XCJzXCI6MTMwLFwiZVwiOjEzNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTM4LFwiZVwiOjE0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjE0NCxcImVcIjoxNjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjE3MixcImVcIjoxNzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE4MCxcImVcIjoxODN9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O2tDQUFxQkEsSSxHQUFUQyxLOztZQUFaQyxDQUFDQyxHOztnQkFDT0MsZ0I7Ozs7MENBQ2VDLEssR0FBUkMsSTs7b0JBQWJDLENBQUNDLEk7OERBQ1lDLE8sUUFBZ0JDLEssR0FBUUMsUSxFQUFRQyxJO3dCQUFNQyxnQjs7O3NCQUNqREMsSTs7OztjQUNGQyxHOzs7Ozs7Ozs7Ozs7OEJBTG1CZixJLEdBQVRDLEs7Ozs4QkFFV0ksSyxHQUFSQyxJO2dDQUZNTixJLEdBQVRDLEs7eUJBR21CUyxLLEdBQVFDLFEsRUFBUUMsSSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXYgdi1mb3I9XCJpdGVtcyBvZiBsaXN0XCI+XG4gIDxzbG90PmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDxzcGFuIHYtZm9yPVwiaXRlbSBvZiBpdGVtc1wiPlxuICAgIDxzbG90IG5hbWU9XCJvdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cIml0ZW1cIj5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8L3NwYW4+XG48L2Rpdj5cbiJdfQ==
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let props = _ctx.props;
  let value = _ctx.value;
  let dynamic = _ctx.dynamic;
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let props = _ctx.props;
  let value = _ctx.value;
  let dynamic = _ctx.dynamic;
  return VueDX.internal.flat([
    { "default": { } },
    { "other": { ...(props), "myProp": value, } },
    { "another": { ...(props), "myProp": value, } },
    { [dynamic]: { ...(props), "myProp": value, } },
  ])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjE0LFwiZVwiOjMwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MCxcImVcIjoxMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQ1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo2MixcImVcIjo2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NzgsXCJlXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjg2LFwiZVwiOjkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo5NCxcImVcIjo5OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEwMSxcImVcIjoxMTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjE0OCxcImVcIjoxNTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjE2NixcImVcIjoxNzF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjE3NCxcImVcIjoxODB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjE4MixcImVcIjoxODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIxMixcImVcIjoyMTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjIyOSxcImVcIjoyMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjIzNyxcImVcIjoyNDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjI0NSxcImVcIjoyNTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1NyxcImVcIjoyNjB9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRzs7UUFDT0MsZ0I7OztNQUNOQyxDQUFDQyxJO2dEQUNZQyxPLFFBQWdCQyxLLEdBQVFDLFEsRUFBUUMsSztVQUFPQyxnQjs7O1FBQ2xEQyxJOzhDQUNTQyxTLFFBQWtCQyxLLEdBQVFDLFEsRUFBUUMsSzs4Q0FDaENDLE8sUUFBaUJDLEssR0FBUUMsUSxFQUFRQyxLO01BQzlDQyxHOzs7Ozs7Ozs7O3FCQUo2QmIsSyxHQUFRQyxRLEVBQVFDLEs7dUJBRWhCSSxLLEdBQVFDLFEsRUFBUUMsSztPQUNoQ0MsTyxTQUFpQkMsSyxHQUFRQyxRLEVBQVFDLEsiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2PlxuICA8c2xvdD5mYWxsYmFjayBjb250ZW50PC9zbG90PlxuICA8c3Bhbj5cbiAgICA8c2xvdCBuYW1lPVwib3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDwvc3Bhbj5cbiAgPHNsb3QgbmFtZT1cImFub3RoZXJcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiPjwvc2xvdD5cbiAgPHNsb3QgOm5hbWU9XCJkeW5hbWljXCIgdi1iaW5kPVwicHJvcHNcIiA6bXlQcm9wPVwidmFsdWVcIiAvPlxuPC9kaXY+XG4iXX0=
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
const Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let myInput = _ctx.myInput;
  let customName = _ctx.customName;
  let rest = _ctx.rest;
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let myInput = _ctx.myInput;
  let customName = _ctx.customName;
  let rest = _ctx.rest;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo2NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo4LFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxNSxcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjI1LFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjozOSxcImVcIjo0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6NTYsXCJlXCI6NjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjY1LFwiZVwiOjEyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6Njl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjcxLFwiZVwiOjc2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo3OCxcImVcIjo4NX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjg4LFwiZVwiOjEwMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAyLFwiZVwiOjEwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTE5LFwiZVwiOjEyM319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEs7UUFBT0MsSyxFQUFPQyxPOztXQUFVQyxVLEdBQWNDLE87Y0FBaUJDLEk7O01BQ3hEQyxDQUFDQyxHO1FBQUtDLEssRUFBT0MsTzs7V0FBVUMsVSxHQUFjQyxPO2NBQWlCQyxJIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGlucHV0IDp2YWx1ZT1cIm15SW5wdXRcIiA6W2N1c3RvbU5hbWVdPVwibXlJbnB1dFwiIHYtYmluZD1cInJlc3RcIiAvPlxuPEZvbyA6dmFsdWU9XCJteUlucHV0XCIgOltjdXN0b21OYW1lXT1cIm15SW5wdXRcIiB2LWJpbmQ9XCJyZXN0XCIgLz5cbiJdfQ==
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let num = _ctx.num;
  let str = _ctx.str;
  let arr = _ctx.arr;
  let obj = _ctx.obj;
  let itr = _ctx.itr;
  let boo = _ctx.boo;
  let sym = _ctx.sym;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
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
function _slots(_ctx: _Self) {
  let num = _ctx.num;
  let str = _ctx.str;
  let arr = _ctx.arr;
  let obj = _ctx.obj;
  let itr = _ctx.itr;
  let boo = _ctx.boo;
  let sym = _ctx.sym;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcsXCJlXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoyMixcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMxLFwiZVwiOjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1OCxcImVcIjo2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDksXCJlXCI6NTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUyLFwiZVwiOjUzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNixcImVcIjo4NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzcsXCJlXCI6NDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2MyxcImVcIjo3MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjYsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjcwLFwiZVwiOjcxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NzEsXCJlXCI6Nzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjc1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4MCxcImVcIjo4M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTAyLFwiZVwiOjEwNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OTcsXCJlXCI6OTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjg1LFwiZVwiOjEyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6ODYsXCJlXCI6ODl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxMDcsXCJlXCI6MTE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMTAsXCJlXCI6MTExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMTYsXCJlXCI6MTE5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNDMsXCJlXCI6MTQ2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMzQsXCJlXCI6MTM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMzcsXCJlXCI6MTM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMjEsXCJlXCI6MTY5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMjIsXCJlXCI6MTI1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTQ4LFwiZVwiOjE1NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTUxLFwiZVwiOjE1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTU1LFwiZVwiOjE1Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjE1NixcImVcIjoxNjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE1OSxcImVcIjoxNjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE2NSxcImVcIjoxNjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE4NyxcImVcIjoxOTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE4MixcImVcIjoxODN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE3MCxcImVcIjoyMDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE3MSxcImVcIjoxNzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjoxOTIsXCJlXCI6MTk5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxOTUsXCJlXCI6MTk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMDEsXCJlXCI6MjA0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMzEsXCJlXCI6MjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyMTgsXCJlXCI6MjI3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyMDYsXCJlXCI6MjUzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMDcsXCJlXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjM2LFwiZVwiOjI0N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjM5LFwiZVwiOjI0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ5LFwiZVwiOjI1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjc3LFwiZVwiOjI4MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjY2LFwiZVwiOjI3M319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjU0LFwiZVwiOjI5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjU1LFwiZVwiOjI1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjI4MixcImVcIjoyOTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI4NSxcImVcIjoyODh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI5MyxcImVcIjoyOTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMyMCxcImVcIjozMjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjMxMSxcImVcIjozMTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjMxNCxcImVcIjozMTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI5OCxcImVcIjozNDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI5OSxcImVcIjozMDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjozMjUsXCJlXCI6MzMyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozMjgsXCJlXCI6MzI5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozMzIsXCJlXCI6MzMzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MzMzLFwiZVwiOjM0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzM2LFwiZVwiOjMzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzQyLFwiZVwiOjM0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mzc3LFwiZVwiOjM4MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MzYwLFwiZVwiOjM2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzcxLFwiZVwiOjM3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzQ3LFwiZVwiOjQwN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzQ4LFwiZVwiOjM1MX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjM4MixcImVcIjozOTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjM4NSxcImVcIjozOTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjM5MyxcImVcIjozOTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjozOTQsXCJlXCI6NDAxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozOTcsXCJlXCI6Mzk4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0MDMsXCJlXCI6NDA2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0MjUsXCJlXCI6NDI4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MjAsXCJlXCI6NDIxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MDgsXCJlXCI6NDQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0MDksXCJlXCI6NDEyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NDMwLFwiZVwiOjQzN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDMzLFwiZVwiOjQzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDM5LFwiZVwiOjQ0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDY2LFwiZVwiOjQ2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDU3LFwiZVwiOjQ1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDYwLFwiZVwiOjQ2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDQ0LFwiZVwiOjQ5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDQ1LFwiZVwiOjQ0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjQ3MSxcImVcIjo0Nzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ3NCxcImVcIjo0NzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQ3OCxcImVcIjo0Nzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo0NzksXCJlXCI6NDg2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0ODIsXCJlXCI6NDgzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0ODgsXCJlXCI6NDkxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1MTgsXCJlXCI6NTIxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1MDYsXCJlXCI6NTA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1MDksXCJlXCI6NTEwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1MTIsXCJlXCI6NTEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0OTMsXCJlXCI6NTUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0OTQsXCJlXCI6NDk3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NTIzLFwiZVwiOjUzMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTI2LFwiZVwiOjUyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTMwLFwiZVwiOjUzMX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjUzMSxcImVcIjo1Mzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUzNCxcImVcIjo1MzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjUzOCxcImVcIjo1Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo1MzksXCJlXCI6NTQ2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1NDIsXCJlXCI6NTQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1NDgsXCJlXCI6NTUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1NzAsXCJlXCI6NTczfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1NjUsXCJlXCI6NTY2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo1NTMsXCJlXCI6NTg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1NTQsXCJlXCI6NTU3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6NTc1LFwiZVwiOjU4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTc4LFwiZVwiOjU3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NTg0LFwiZVwiOjU4N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjA2LFwiZVwiOjYwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjAxLFwiZVwiOjYwMn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTg5LFwiZVwiOjYyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NTkwLFwiZVwiOjU5M319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjYxMSxcImVcIjo2MTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYxNCxcImVcIjo2MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjYyMCxcImVcIjo2MjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjY0MixcImVcIjo2NDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYzNyxcImVcIjo2Mzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYyNSxcImVcIjo2NjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjYyNixcImVcIjo2Mjl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2NDcsXCJlXCI6NjU0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2NTAsXCJlXCI6NjUxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo2NTYsXCJlXCI6NjU5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFpQkEsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQztjQUFNQyxHOzs7OztrQ0FDVEMsRyxHQUFUQyxDLEVBQUdDLEM7O1lBQWhCQyxDQUFDQyxHO2VBQTBCQyxrQ0FBR0MsQztjQUFJQyxDO2VBQUNDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUMzQkMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQztjQUFNQyxHOzs7OztrQ0FDVEMsRyxHQUFUQyxDLEVBQUdDLEM7O1lBQWhCQyxDQUFDQyxHO2VBQTBCQyxrQ0FBR0MsQztjQUFJQyxDO2VBQUNDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUMzQkMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQztjQUFNQyxHOzs7OztrQ0FDTkMsRyxHQUFiQyxTOztZQUFaQyxDQUFDQyxHO2VBQTZCQyxrQ0FBR0MsSztjQUFVQyxHOzs7OztrQ0FDcEJDLEcsR0FBWEMsTzs7WUFBWkMsQ0FBQ0MsRztlQUEyQkMsa0NBQUdDLEc7Y0FBUUMsRzs7Ozs7a0NBQ2pCQyxHLEdBQVRDLEMsRUFBR0MsQzs7WUFBaEJDLENBQUNDLEc7ZUFBMEJDLGtDQUFHQyxDO2NBQUlDLEM7ZUFBQ0Msa0NBQUdDLEM7Y0FBTUMsRzs7Ozs7a0NBQ2RDLEcsR0FBakJDLFMsRUFBV0MsQzs7WUFBeEJDLENBQUNDLEc7ZUFBa0NDLGtDQUFHQyxLO2NBQVFDLEM7ZUFBQ0Msa0NBQUdDLEM7Y0FBTUMsRzs7Ozs7a0NBQ3ZDQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBcUJDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUNUQyxHLEdBQVRDLEMsRUFBR0MsQzs7WUFBaEJDLENBQUNDLEc7ZUFBMEJDLGtDQUFHQyxDO2NBQUlDLEM7ZUFBQ0Msa0NBQUdDLEM7Y0FBTUMsRzs7Ozs7a0NBQ25CQyxHLEdBQVpDLEMsRUFBR0MsQyxFQUFHQyxDOztZQUFuQkMsQ0FBQ0MsRztlQUE2QkMsa0NBQUdDLEM7Y0FBSUMsQztlQUFDQyxrQ0FBR0MsQztjQUFJQyxDO2VBQUNDLGtDQUFHQyxDO2NBQU1DLEc7Ozs7O2tDQUN0Q0MsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQztjQUFNQyxHOzs7OztrQ0FDZEMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQztjQUFNQyxHOzs7OztrQ0FDZEMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXFCQyxrQ0FBR0MsQztjQUFNQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWZvcj1cIm4gb2YgbnVtXCI+e3sgbiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihuLCBpKSBvZiBudW1cIj57eyBuIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN0clwiPnt7IHMgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIocywgaSkgb2Ygc3RyXCI+e3sgcyB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiYSBvZiBhcnJcIj57eyBhIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyB2YWx1ZSB9IG9mIGFyclwiPnt7IHZhbHVlIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwieyBmb28gfSBvZiBhcnJcIj57eyBhcnIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoYSwgaSkgb2YgYXJyXCI+e3sgYSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKHsgdmFsdWUgfSwgaSkgb2YgYXJyXCI+e3sgdmFsdWUgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIm8gb2Ygb2JqXCI+e3sgbyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIobywgaywgaSkgb2Ygb2JqXCI+e3sgbyB9fTp7eyBrIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ0IG9mIGl0clwiPnt7IHQgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJiIG9mIGJvb1wiPnt7IGIgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJzIG9mIHN5bVwiPnt7IHMgfX08L2Rpdj5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-html default 1`] = `
## 7.1. v-html 

\`\`\`vue-html
<div v-html="html"></div>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let html = _ctx.html;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div data-vuedx-directive-html={VueDX.internal.checkBuiltinDirective["html"]("div" as const, [
        {
           exp: html,
        },
      ])}>
    </div>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let html = _ctx.html;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjQ1fSxcInNcIjp7XCJzXCI6NSxcImVcIjoxMX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NSxcImVcIjoxMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTMsXCJlXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjUsXCJlXCI6MTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjEzLFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMSxcImVcIjoyNH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRyw0QkFBSUMsNkNBQUpDLGdCO1FBQUlDLEM7V0FBUUMsR0FBUkMsRUFBUUMsSUFBUkgsQzs7O01BQWdCSSxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGRpdiB2LWh0bWw9XCJodG1sXCI+PC9kaXY+XG4iXX0=
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = _ctx.awesome;
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let awesome = _ctx.awesome;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MjQsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NSxcImVcIjo2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6NDYsXCJlXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6OH0sXCJzXCI6e1wic1wiOjU2LFwiZVwiOjY0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo2NixcImVcIjo2OH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEU7UUFBdUJDLGU7UUFBaUJDLEU7TUFDekNDLENBQUNDLEU7UUFBVUMsUTtRQUFVQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtZWxzZS1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuPGgxIHYtZWxzZT5PaCBubyDwn5iiPC9oMT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  else condition 1`] = `
## 5.7. v-if/v-else/v-else-if > else condition

\`\`\`vue-html
<h1 v-else="ok">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = _ctx.ok;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1>
      Vue is awesome!
    </h1>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let ok = _ctx.ok;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MzF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjMzLFwiZVwiOjM1fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxFO01BQWVDLGU7TUFBaUJDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1lbHNlPVwib2tcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if condition 1`] = `
## 5.6. v-if/v-else/v-else-if > if condition

\`\`\`vue-html
<h1 v-if>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6OSxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MjYsXCJlXCI6Mjh9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztZQUFBQSxDQUFDQyxFO2NBQVFDLGU7Y0FBaUJDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1pZj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuIl19
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = _ctx.ok;
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let ok = _ctx.ok;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoyNCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjcsXCJlXCI6MzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjM0LFwiZVwiOjM2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0MCxcImVcIjo1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDEsXCJlXCI6NDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjo0MyxcImVcIjo1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTYsXCJlXCI6NTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYxLFwiZVwiOjc5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MixcImVcIjo2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjY0LFwiZVwiOjc1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo3NyxcImVcIjo3OH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztTQUFnQkEsRTs7Y0FDZEMsQ0FBQ0MsRTtnQkFBR0MsSztnQkFBT0MsRTtjQUNYQyxDQUFDQyxDO2dCQUFFQyxXO2dCQUFhQyxDO2NBQ2hCQyxDQUFDQyxDO2dCQUFFQyxXO2dCQUFhQyxDIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHYtaWY9XCJva1wiPlxuICA8aDE+VGl0bGU8L2gxPlxuICA8cD5QYXJhZ3JhcGggMTwvcD5cbiAgPHA+UGFyYWdyYXBoIDI8L3A+XG48L3RlbXBsYXRlPlxuIl19
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = _ctx.awesome;
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let awesome = _ctx.awesome;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAsXCJlXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjozNixcImVcIjozOH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NDAsXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjQxLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjh9LFwic1wiOntcInNcIjo1MSxcImVcIjo1OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6NjEsXCJlXCI6NjN9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7U0FBVUEsTztZQUFWQyxDQUFDQyxFO2NBQWtCQyxlO2NBQWlCQyxFO1lBQ3BDQyxDQUFDQyxFO2NBQVVDLFE7Y0FBVUMsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG48aDEgdi1lbHNlPk9oIG5vIPCfmKI8L2gxPlxuIl19
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let type = _ctx.type;
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let type = _ctx.type;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMn0sXCJzXCI6e1wic1wiOjExLFwiZVwiOjIzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjowLFwiZVwiOjM2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI1LFwiZVwiOjMwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozMixcImVcIjozNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMn0sXCJzXCI6e1wic1wiOjUzLFwiZVwiOjY1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNyxcImVcIjo3OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzgsXCJlXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjY3LFwiZVwiOjcyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo3NCxcImVcIjo3N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMn0sXCJzXCI6e1wic1wiOjk1LFwiZVwiOjEwN319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NzksXCJlXCI6MTIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4MCxcImVcIjo4M319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTA5LFwiZVwiOjExNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTE2LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTIxLFwiZVwiOjE1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTIyLFwiZVwiOjEyNX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjEzMyxcImVcIjoxNDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE0OCxcImVcIjoxNTF9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7U0FBV0EsWTtZQUFYQyxDQUFDQyxHO2NBQXdCQyxHO2NBRXZCQyxHO2FBQ2NDLFk7WUFBaEJDLENBQUNDLEc7Y0FBNkJDLEc7Y0FFNUJDLEc7YUFDY0MsWTtZQUFoQkMsQ0FBQ0MsRztjQUE2QkMsRztjQUU1QkMsRztZQUNGQyxDQUFDQyxHO2NBQVdDLFc7Y0FFVkMsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXYgdi1pZj1cInR5cGUgPT09ICdBJ1wiPlxuICBBXG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ0InXCI+XG4gIEJcbjwvZGl2PlxuPGRpdiB2LWVsc2UtaWY9XCJ0eXBlID09PSAnQydcIj5cbiAgQ1xuPC9kaXY+XG48ZGl2IHYtZWxzZT5cbiAgTm90IEEvQi9DXG48L2Rpdj5cbiJdfQ==
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = _ctx.foo;
  let bar = _ctx.bar;
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let foo = _ctx.foo;
  let bar = _ctx.bar;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzAsXCJlXCI6MzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjQxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMCxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzcsXCJlXCI6NDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjYwLFwiZVwiOjYzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NCxcImVcIjo3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NDUsXCJlXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjY3LFwiZVwiOjcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo3NCxcImVcIjo5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NzUsXCJlXCI6Nzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjg4LFwiZVwiOjkxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo5NSxcImVcIjo5OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTE2LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTAwLFwiZVwiOjIwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTAxLFwiZVwiOjEwNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTM1LFwiZVwiOjEzOH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTI0LFwiZVwiOjE0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTI1LFwiZVwiOjEyOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTQyLFwiZVwiOjE0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTY1LFwiZVwiOjE2OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTQ5LFwiZVwiOjE3Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTUwLFwiZVwiOjE1M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcyLFwiZVwiOjE3NX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTc5LFwiZVwiOjE5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTgwLFwiZVwiOjE4M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTkzLFwiZVwiOjE5Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjAwLFwiZVwiOjIwM319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjA1LFwiZVwiOjMwMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjA2LFwiZVwiOjIwOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjMxLFwiZVwiOjIzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjIwLFwiZVwiOjI0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjIxLFwiZVwiOjIyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjM4LFwiZVwiOjI0MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjYxLFwiZVwiOjI2NH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjQ1LFwiZVwiOjI3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ2LFwiZVwiOjI0OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjY4LFwiZVwiOjI3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6Mjc1LFwiZVwiOjI5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjc2LFwiZVwiOjI3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjg5LFwiZVwiOjI5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjk2LFwiZVwiOjI5OX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7U0FBV0EsRztZQUFYQyxDQUFDQyxHOztpQkFDWUMsRztvQkFBWEMsQ0FBQ0MsRztzQkFBaUJDLEc7cUJBQ0ZDLEc7b0JBQWhCQyxDQUFDQyxHO3NCQUFzQkMsRztvQkFDdkJDLENBQUNDLEc7c0JBQWFDLEc7O2NBQ2RDLEc7YUFDY0MsRztZQUFoQkMsQ0FBQ0MsRzs7aUJBQ1lDLEc7b0JBQVhDLENBQUNDLEc7c0JBQWlCQyxHO3FCQUNGQyxHO29CQUFoQkMsQ0FBQ0MsRztzQkFBc0JDLEc7b0JBQ3ZCQyxDQUFDQyxHO3NCQUFhQyxHOztjQUNkQyxHO1lBQ0ZDLENBQUNDLEc7O2lCQUNZQyxHO29CQUFYQyxDQUFDQyxHO3NCQUFpQkMsRztxQkFDRkMsRztvQkFBaEJDLENBQUNDLEc7c0JBQXNCQyxHO29CQUN2QkMsQ0FBQ0MsRztzQkFBYUMsRzs7Y0FDZEMsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXYgdi1pZj1cImZvb1wiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuIl19
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  no if 1`] = `
## 5.5. v-if/v-else/v-else-if > no if

\`\`\`vue-html
<h1 v-else>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1>
      Vue is awesome!
    </h1>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE1fSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjI4LFwiZVwiOjMwfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEU7TUFBVUMsZTtNQUFpQkMsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LWVsc2U+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  single if statement 1`] = `
## 5.1. v-if/v-else/v-else-if > single if statement

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let awesome = _ctx.awesome;
  /*</vuedx:templateGlobals>*/
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
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let awesome = _ctx.awesome;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MTAsXCJlXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjAsXCJlXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjE5LFwiZVwiOjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjozNixcImVcIjozOH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztTQUFVQSxPO1lBQVZDLENBQUNDLEU7Y0FBa0JDLGU7Y0FBaUJDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1pZj1cImF3ZXNvbWVcIj5WdWUgaXMgYXdlc29tZSE8L2gxPlxuIl19
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
const Tr = VueDX.internal.resolveComponent(__VueDX_components, "tr" as const, "Tr" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let MyComponent = _ctx.MyComponent;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <table>
      <tbody>
        <Tr data-vuedx-directive-is={VueDX.internal.checkBuiltinDirective["is"](Tr, [
            {
               exp: MyComponent,
            },
          ])}>
          {VueDX.internal.checkSlots(Tr, {
            default: () => {
              return (
                <>
                </>
              )
            },
          })}
        </Tr>
      </tbody>
    </table>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let MyComponent = _ctx.MyComponent;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo3MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMCxcImVcIjo2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjIyLFwiZVwiOjUwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoyMyxcImVcIjoyNX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo0M30sXCJzXCI6e1wic1wiOjI2LFwiZVwiOjMwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoyMyxcImVcIjoyNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjYsXCJlXCI6MzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoyNixcImVcIjozMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjQzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MjIsXCJlXCI6NTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjI1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo0NyxcImVcIjo0OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NTUsXCJlXCI6NjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjY0LFwiZVwiOjY5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsSztNQUNDQyxDQUFDQyxLO1FBQ0NDLENBQUNDLEUsMEJBQUdDLDJDQUFIQyxJO1lBQUdDLEM7ZUFBTUMsR0FBTkMsRUFBTUMsV0FBTkgsQzs7O1dBQUpJLDBCQUFDUCxFO1lBQUFRLFM7Ozs7Ozs7VUFBd0JDLEU7UUFDekJDLEs7TUFDRkMsSyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjx0YWJsZT5cbiAgPHRib2R5PlxuICAgIDx0ciB2LWlzPVwiTXlDb21wb25lbnRcIj48L3RyPlxuICA8L3Rib2R5PlxuPC90YWJsZT5cbiJdfQ==
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = _ctx.foo;
  let yes = _ctx.yes;
  let no = _ctx.no;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["checkbox" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], [true, false] as const)} />
      <input
        type="checkbox"
        true-value="yes"
        data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["checkbox" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], ["yes", false] as const)} />
      <input
        type="checkbox"
        false-value="no"
        data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["checkbox" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], [true, "no"] as const)} />
      <input
        type="checkbox"
        true-value={yes}
        false-value={no}
        data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["checkbox" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], [yes, no] as const)} />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let foo = _ctx.foo;
  let yes = _ctx.yes;
  let no = _ctx.no;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo3LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6MTIsXCJlXCI6MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NDF9LFwic1wiOntcInNcIjoyMyxcImVcIjozMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjMsXCJlXCI6MzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoyMyxcImVcIjozMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzIsXCJlXCI6MzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQwLFwiZVwiOjk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo0MSxcImVcIjo0Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6NDcsXCJlXCI6NTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTB9LFwic1wiOntcInNcIjo1MixcImVcIjo2Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMH0sXCJzXCI6e1wic1wiOjc3LFwiZVwiOjg3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo4OCxcImVcIjo5M319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo0MX0sXCJzXCI6e1wic1wiOjYzLFwiZVwiOjcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo2MyxcImVcIjo3MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NzIsXCJlXCI6NzV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjYzLFwiZVwiOjcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo3MixcImVcIjo3NX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OTcsXCJlXCI6MTUzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo5OCxcImVcIjoxMDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjEwNCxcImVcIjoxMDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTB9LFwic1wiOntcInNcIjoxMDksXCJlXCI6MTE5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjExfSxcInNcIjp7XCJzXCI6MTM0LFwiZVwiOjE0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MTQ2LFwiZVwiOjE1MH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo0MX0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE1NCxcImVcIjoyMjl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjE1NSxcImVcIjoxNjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjE2MSxcImVcIjoxNjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6MTB9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTc2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6MTkyLFwiZVwiOjIwMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjA0LFwiZVwiOjIwN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxMX0sXCJzXCI6e1wic1wiOjIxMCxcImVcIjoyMjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjIyMyxcImVcIjoyMjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NDF9LFwic1wiOntcInNcIjoxNzcsXCJlXCI6MTg0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNzcsXCJlXCI6MTg0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxODYsXCJlXCI6MTg5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoxNzcsXCJlXCI6MTg0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxODYsXCJlXCI6MTg5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxLLENBQU1DLEksQ0FBS0MsVSw2QkFBV0MseUNBQVhELFU7VUFBV0UsQzthQUFTQyxHQUFUQyxFQUFTQyxHQUFUSCxDOzs7TUFDdkJJLENBQUNDLEs7UUFBTUMsSSxDQUFLQyxVO1FBQXlCQyxVLENBQVdDLEs7b0NBQXpCQyx5Q0FBWEgsVTtVQUFXSSxDO2FBQVNDLEdBQVRDLEVBQVNDLEdBQVRILEM7O3VDQUF5QkYsSztNQUNoRE0sQ0FBQ0MsSztRQUFNQyxJLENBQUtDLFU7UUFBeUJDLFcsQ0FBWUMsSTtvQ0FBMUJDLHlDQUFYSCxVO1VBQVdJLEM7YUFBU0MsR0FBVEMsRUFBU0MsR0FBVEgsQzs7NkNBQTBCRixJO01BQ2pETSxDQUFDQyxLO1FBQU1DLEksQ0FBS0MsVTtRQUEwQkMsVSxFQUFZQyxHO1FBQU1DLFcsRUFBYUMsRTtvQ0FBOUNDLHlDQUFYTCxVO1VBQVdNLEM7YUFBU0MsR0FBVEMsRUFBU0MsR0FBVEgsQzs7dUNBQTJCSixHLEVBQW1CRSxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiB0cnVlLXZhbHVlPVwieWVzXCIgLz5cbjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwiZm9vXCIgZmFsc2UtdmFsdWU9XCJub1wiIC8+XG48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cImZvb1wiIDp0cnVlLXZhbHVlPVwieWVzXCIgOmZhbHNlLXZhbHVlPVwibm9cIiAvPlxuIl19
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = _ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["text" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], [true, false] as const)} />
      <input type="number" data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["number" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], [true, false] as const)} />
      <input type="tel" data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["tel" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], [true, false] as const)} />
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["checkbox" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], [true, false] as const)} />
      <input type="radio" data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM["radio" as const]([
          {
             exp: foo,
          },
        ], [] as unknown as [string], [true, false] as const)} />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let foo = _ctx.foo;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjQxfSxcInNcIjp7XCJzXCI6NyxcImVcIjoxNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NyxcImVcIjoxNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTYsXCJlXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjcsXCJlXCI6MTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE2LFwiZVwiOjE5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyNCxcImVcIjo2MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6MzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjMxLFwiZVwiOjM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjh9LFwic1wiOntcInNcIjozNixcImVcIjo0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo0MX0sXCJzXCI6e1wic1wiOjQ1LFwiZVwiOjUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo0NSxcImVcIjo1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NTQsXCJlXCI6NTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjQ1LFwiZVwiOjUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1NCxcImVcIjo1N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjIsXCJlXCI6OTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjYzLFwiZVwiOjY4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjo2OSxcImVcIjo3M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NzQsXCJlXCI6Nzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NDF9LFwic1wiOntcInNcIjo4MCxcImVcIjo4N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6ODAsXCJlXCI6ODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjg5LFwiZVwiOjkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo4MCxcImVcIjo4N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6ODksXCJlXCI6OTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjk3LFwiZVwiOjEzNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6OTgsXCJlXCI6MTAzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoxMDQsXCJlXCI6MTA4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjEwfSxcInNcIjp7XCJzXCI6MTA5LFwiZVwiOjExOX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo0MX0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEyMCxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEzNyxcImVcIjoxNzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEzOCxcImVcIjoxNDN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjE0NCxcImVcIjoxNDh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjE0OSxcImVcIjoxNTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NDF9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTY0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTY0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTY5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTY0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTY5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsSyw2QkFBTUMseUM7VUFBQUMsQzthQUFTQyxHQUFUQyxFQUFTQyxHQUFUSCxDOzs7TUFDUEksQ0FBQ0MsSyxDQUFNQyxJLENBQUtDLFEsNkJBQVNDLHlDQUFURCxRO1VBQVNFLEM7YUFBU0MsR0FBVEMsRUFBU0MsR0FBVEgsQzs7O01BQ3JCSSxDQUFDQyxLLENBQU1DLEksQ0FBS0MsSyw2QkFBTUMseUNBQU5ELEs7VUFBTUUsQzthQUFTQyxHQUFUQyxFQUFTQyxHQUFUSCxDOzs7TUFDbEJJLENBQUNDLEssQ0FBTUMsSSxDQUFLQyxVLDZCQUFXQyx5Q0FBWEQsVTtVQUFXRSxDO2FBQVNDLEdBQVRDLEVBQVNDLEdBQVRILEM7OztNQUN2QkksQ0FBQ0MsSyxDQUFNQyxJLENBQUtDLE8sNkJBQVFDLHlDQUFSRCxPO1VBQVFFLEM7YUFBU0MsR0FBVEMsRUFBU0MsR0FBVEgsQyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxpbnB1dCB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cInRlbFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJyYWRpb1wiIHYtbW9kZWw9XCJmb29cIiAvPlxuIl19
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = _ctx.foo;
  let baz = _ctx.baz;
  let vals = _ctx.vals;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM.select([
          {
             exp: foo,
          },
        ], ["foo", "bar", baz] as const, [true, false] as const)}>
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
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM.select([
          {
             exp: foo,
          },
        ], ["foo", ...VueDX.internal.renderList(vals, (val) => val), "bar"] as const, [true, false] as const)}>
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
function _slots(_ctx: _Self) {
  let foo = _ctx.foo;
  let baz = _ctx.baz;
  let vals = _ctx.vals;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxMzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjEsXCJlXCI6N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo0OH0sXCJzXCI6e1wic1wiOjgsXCJlXCI6MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjgsXCJlXCI6MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE3LFwiZVwiOjIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo4LFwiZVwiOjE1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNyxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MzksXCJlXCI6NDR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjc0LFwiZVwiOjc5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxMTEsXCJlXCI6MTE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyNSxcImVcIjo1N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MjYsXCJlXCI6MzJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjMzLFwiZVwiOjM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0NSxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NTAsXCJlXCI6NTZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjYwLFwiZVwiOjkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo2MSxcImVcIjo2N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NjgsXCJlXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjgwLFwiZVwiOjgzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo4NSxcImVcIjo5MX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OTUsXCJlXCI6MTI4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjo5NixcImVcIjoxMDJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEwNCxcImVcIjoxMDl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjExNixcImVcIjoxMTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjEyMSxcImVcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjEzMSxcImVcIjoxMzd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjE0MCxcImVcIjozMDR9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjE0MSxcImVcIjoxNDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NDh9LFwic1wiOntcInNcIjoxNDgsXCJlXCI6MTU1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNDgsXCJlXCI6MTU1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoxNDgsXCJlXCI6MTU1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTYwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxNzksXCJlXCI6MTg0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoyMjIsXCJlXCI6MjI2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMTUsXCJlXCI6MjE4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMzYsXCJlXCI6MjM5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoyNzYsXCJlXCI6MjgxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNjUsXCJlXCI6MTk3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTcyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxNzMsXCJlXCI6MTc4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxODUsXCJlXCI6MTg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxOTAsXCJlXCI6MTk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyMDAsXCJlXCI6MjU5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoyMDEsXCJlXCI6MjA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoyMjksXCJlXCI6MjM0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MjQxLFwiZVwiOjI1MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ0LFwiZVwiOjI0N319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MjUyLFwiZVwiOjI1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjYyLFwiZVwiOjI5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MjYzLFwiZVwiOjI2OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MjcwLFwiZVwiOjI3NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjgyLFwiZVwiOjI4NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6Mjg3LFwiZVwiOjI5M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6Mjk3LFwiZVwiOjMwM319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsTSw2QkFBT0MsZ0Q7VUFBQUMsQzthQUFTQyxHQUFUQyxFQUFTQyxHQUFUSCxDOztZQUNRSSxLLEVBQ0FDLEssRUFDRUMsRztRQUZoQkMsQ0FBQ0MsTSxDQUFPQyxLLENBQU1MLEs7VUFBTU0sRztVQUFLQyxNO1FBQ3pCQyxDQUFDQyxNLENBQU9DLEssQ0FBTVQsSztVQUFNVSxHO1VBQUtDLE07UUFDekJDLENBQUNDLE0sQ0FBUUMsSyxFQUFPYixHO1VBQUtjLEc7VUFBS0MsTTtRQUMxQkMsTTtNQUVGQyxDQUFDQyxNLDZCQUFPQyxnRDtVQUFBQyxDO2FBQVNDLEdBQVRDLEVBQVNDLEdBQVRILEM7O1lBQ1FJLEssK0JBQ1FDLEksR0FBUEMsRyxLQUFxQkMsRyxHQUN0QkMsSztRQUZkQyxDQUFDQyxNLENBQU9DLEssQ0FBTVAsSztVQUFNUSxHO1VBQUtDLE07O29DQUNIUixJLEdBQVBDLEc7O2NBQWZRLENBQUNDLE0sQ0FBNEJDLEssRUFBT1QsRztpQkFBS1Usa0NBQUdDLEc7Z0JBQVFDLE07Ozs7UUFDcERDLENBQUNDLE0sQ0FBT0MsSyxDQUFNZCxLO1VBQU1lLEc7VUFBS0MsTTtRQUN6QkMsTSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxzZWxlY3Qgdi1tb2RlbD1cImZvb1wiPlxuICA8b3B0aW9uIHZhbHVlPVwiZm9vXCI+Zm9vPC9vcHRpb24+XG4gIDxvcHRpb24gdmFsdWU9XCJiYXJcIj5iYXI8L29wdGlvbj5cbiAgPG9wdGlvbiA6dmFsdWU9XCJiYXpcIj5iYXo8L29wdGlvbj5cbjwvc2VsZWN0PlxuXG48c2VsZWN0IHYtbW9kZWw9XCJmb29cIj5cbiAgPG9wdGlvbiB2YWx1ZT1cImZvb1wiPmZvbzwvb3B0aW9uPlxuICA8b3B0aW9uIHYtZm9yPVwidmFsIG9mIHZhbHNcIiA6dmFsdWU9XCJ2YWxcIj57eyB2YWwgfX08L29wdGlvbj5cbiAgPG9wdGlvbiB2YWx1ZT1cImJhclwiPmJhcjwvb3B0aW9uPlxuPC9zZWxlY3Q+XG4iXX0=
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = _ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirectiveForDOM.select([
          {
             exp: foo,
          },
        ], [foo] as const, [true, false] as const)}>
        <option value={foo}>
          {VueDX.internal.checkInterpolation(foo)}
        </option>
      </select>
      <textarea data-vuedx-directive-model={VueDX.internal.checkModelDirective("textarea" as const, [
          {
             arg: "modelValue" as const,
             exp: foo,
          },
        ])} />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let foo = _ctx.foo;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo3Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjQ4fSxcInNcIjp7XCJzXCI6OCxcImVcIjoxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OCxcImVcIjoxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcsXCJlXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjgsXCJlXCI6MTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE3LFwiZVwiOjIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0MSxcImVcIjo0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6NjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjI2LFwiZVwiOjMyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjozNCxcImVcIjozOX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjQ2LFwiZVwiOjUzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo0OCxcImVcIjo1MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NTUsXCJlXCI6NjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjY1LFwiZVwiOjcxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo3MyxcImVcIjo5OX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo4fSxcInNcIjp7XCJzXCI6NzQsXCJlXCI6ODJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NTZ9LFwic1wiOntcInNcIjo4MyxcImVcIjo5MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6ODMsXCJlXCI6OTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mjh9LFwic1wiOntcInNcIjo4MyxcImVcIjo5MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6OTIsXCJlXCI6OTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjgzLFwiZVwiOjkwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo5MixcImVcIjo5NX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLE0sNkJBQU9DLGdEO1VBQUFDLEM7YUFBU0MsR0FBVEMsRUFBU0MsR0FBVEgsQzs7WUFDVUksRztRQUFoQkMsQ0FBQ0MsTSxDQUFRQyxLLEVBQU9ILEc7V0FBS0ksa0NBQUVDLEc7VUFBT0MsTTtRQUM5QkMsTTtNQUNGQyxDQUFDQyxRLDZCQUFTQyx3RDtVQUFBQyxDO1lBQUFDLDRCO2FBQVNDLEdBQVRDLEVBQVNDLEdBQVRKLEMiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8c2VsZWN0IHYtbW9kZWw9XCJmb29cIj5cbiAgPG9wdGlvbiA6dmFsdWU9XCJmb29cIj57e2Zvb319PC9vcHRpb24+XG48L3NlbGVjdD5cbjx0ZXh0YXJlYSB2LW1vZGVsPVwiZm9vXCIgLz5cbiJdfQ==
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let onFocus = _ctx.onFocus;
  let value = _ctx.value;
  let eventName = _ctx.eventName;
  let events = _ctx.events;
  let fnName = _ctx.fnName;
  let callMyFn = _ctx.callMyFn;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input onFocus={VueDX.internal.checkOnDirective("input" as const)([
            {
               arg: "focus" as const, 
               exp: onFocus,
            },
          ])}  />
      <input onUpdate:value={VueDX.internal.checkOnDirective("input" as const)([
            {
               arg: "update:value" as const, 
               exp: ($event) => {
                value = $event
              },
            },
          ])}  />
      <input
        onEventName={VueDX.internal.checkOnDirective("input" as const)([
            {
               arg: "event-name" as const, 
            },
            {
               arg: "eventName" as const, 
            },
          ])}
        data-vuedx-directive-on={VueDX.internal.checkOnDirective("input" as const)([
          {
             arg: eventName, 
          },
          {
             exp: events,
          },
        ])} />
      <input
        onKeydown={VueDX.internal.checkOnDirective("input" as const)([
            {
               arg: "keydown" as const, 
               exp: fnName,
            },
            {
               arg: "keydown" as const, 
               exp: ($event) => {
                callMyFn($event)
              },
               modifiers: [ "left", ],
            },
            {
               arg: "keydown" as const, 
               exp: $event => callMyFn($event),
               modifiers: [ "shift", "left", ],
            },
            {
               arg: "keydown" as const, 
               exp: ($event) => callMyFn($event),
               modifiers: [ "shift", "right", ],
            },
            {
               arg: "keydown" as const, 
               exp: () => callMyFn($event),
               modifiers: [ "shift", "down", ],
            },
            {
               arg: "keydown" as const, 
               exp: function myFunction($event) {
    callMyFn($event)
  },
               modifiers: [ "shift", "up", ],
            },
            {
               arg: "keydown" as const, 
               exp: function myFunction() {
    callMyFn($event)
  },
               modifiers: [ "ctrl", "up", ],
            },
          ])}
       />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let onFocus = _ctx.onFocus;
  let value = _ctx.value;
  let eventName = _ctx.eventName;
  let events = _ctx.events;
  let fnName = _ctx.fnName;
  let callMyFn = _ctx.callMyFn;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6MSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo3LFwiZVwiOjIzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMyfSxcInNcIjp7XCJzXCI6NyxcImVcIjo4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NyxcImVcIjo4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4LFwiZVwiOjEzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo3LFwiZVwiOjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjgsXCJlXCI6MTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE1LFwiZVwiOjIyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxNSxcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjcsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjI4LFwiZVwiOjMzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE0fSxcInNcIjp7XCJzXCI6MzQsXCJlXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzJ9LFwic1wiOntcInNcIjozNCxcImVcIjozNX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjI3LFwiZVwiOjY3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNCxcImVcIjozNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzUsXCJlXCI6NDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjM0LFwiZVwiOjM1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE0fSxcInNcIjp7XCJzXCI6MzUsXCJlXCI6NDd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQ5LFwiZVwiOjYzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjE0fSxcInNcIjp7XCJzXCI6NDksXCJlXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjY4LFwiZVwiOjEyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo1fSxcInNcIjp7XCJzXCI6NjksXCJlXCI6NzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjo3NSxcImVcIjo4Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozMn0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjc2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6NjgsXCJlXCI6MTI3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjo3NSxcImVcIjo3Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NzYsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjc1LFwiZVwiOjc2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjEyfSxcInNcIjp7XCJzXCI6NzYsXCJlXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjg3LFwiZVwiOjg4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo4OCxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6ODcsXCJlXCI6ODh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MTF9LFwic1wiOntcInNcIjo4OCxcImVcIjo5N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozMn0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjk5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE4fSxcInNcIjp7XCJzXCI6NjksXCJlXCI6NzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjk5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo5OSxcImVcIjoxMTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjk5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjo5OSxcImVcIjoxMTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjExMSxcImVcIjoxMTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjExNyxcImVcIjoxMjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjExMSxcImVcIjoxMTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjExNyxcImVcIjoxMjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjEyOCxcImVcIjo0OTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjEyOSxcImVcIjoxMzR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjEzNyxcImVcIjoxNTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzJ9LFwic1wiOntcInNcIjoxMzcsXCJlXCI6MTM4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE2fSxcInNcIjp7XCJzXCI6MTI4LFwiZVwiOjQ5MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTM3LFwiZVwiOjEzOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTM4LFwiZVwiOjE0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MTM3LFwiZVwiOjEzOH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTM4LFwiZVwiOjE0NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTQ3LFwiZVwiOjE1M319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MTQ3LFwiZVwiOjE1M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MTU3LFwiZVwiOjE1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTU4LFwiZVwiOjE2NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MTU3LFwiZVwiOjE1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MTU4LFwiZVwiOjE2NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTcyLFwiZVwiOjE4OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxNn0sXCJzXCI6e1wic1wiOjE3MixcImVcIjoxODh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTR9LFwic1wiOntcInNcIjoxNTcsXCJlXCI6MTU4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNjYsXCJlXCI6MTcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxOTIsXCJlXCI6MTkzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoxOTMsXCJlXCI6MjAwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoxOTIsXCJlXCI6MTkzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxOTMsXCJlXCI6MjAwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyMTMsXCJlXCI6MjM5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MjEzLFwiZVwiOjIzOX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjE5MixcImVcIjoxOTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjIwMSxcImVcIjoyMDZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjIwNyxcImVcIjoyMTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjI0MyxcImVcIjoyNDR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI0NCxcImVcIjoyNTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjI0MyxcImVcIjoyNDR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjI0NCxcImVcIjoyNTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI2NSxcImVcIjoyOTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mjh9LFwic1wiOntcInNcIjoyNjUsXCJlXCI6MjkzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE0fSxcInNcIjp7XCJzXCI6MjQzLFwiZVwiOjI0NH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjUyLFwiZVwiOjI1N319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjU4LFwiZVwiOjI2M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6Mjk3LFwiZVwiOjI5OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6Mjk4LFwiZVwiOjMwNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6Mjk3LFwiZVwiOjI5OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6Mjk4LFwiZVwiOjMwNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MzE4LFwiZVwiOjM0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyMn0sXCJzXCI6e1wic1wiOjMxOCxcImVcIjozNDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MTR9LFwic1wiOntcInNcIjoyOTcsXCJlXCI6Mjk4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjozMDYsXCJlXCI6MzExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjozMTIsXCJlXCI6MzE2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjozNDQsXCJlXCI6MzQ1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozNDUsXCJlXCI6MzUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjozNDQsXCJlXCI6MzQ1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjozNDUsXCJlXCI6MzUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozNjMsXCJlXCI6NDE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjU0fSxcInNcIjp7XCJzXCI6MzYzLFwiZVwiOjQxN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjM0NCxcImVcIjozNDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjM1MyxcImVcIjozNTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NH0sXCJzXCI6e1wic1wiOjM1OSxcImVcIjozNjF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjQyMSxcImVcIjo0MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQyMixcImVcIjo0Mjl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjQyMSxcImVcIjo0MjJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjQyMixcImVcIjo0Mjl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQzOSxcImVcIjo0ODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6NDh9LFwic1wiOntcInNcIjo0MzksXCJlXCI6NDg3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjE0fSxcInNcIjp7XCJzXCI6NDIxLFwiZVwiOjQyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NDMwLFwiZVwiOjQzNH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6NDM1LFwiZVwiOjQzN319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsSyxDQUFNQyxPLEVBQUFDLGdDQUFQQyxnQjtZQUFPQyxDO2VBQUNDLEdBQURDLEVBQUNDLE8sU0FBREQsRTtlQUFRRSxHQUFSRixFQUFRRyxPQUFSTCxDOzs7TUFDUE0sQ0FBQ0MsSyxDQUFNQyxjLEVBQUFDLGdDQUFQQyxnQjtZQUFPQyxDO2VBQUNDLEdBQURDLEVBQUNDLGMsU0FBREQsRTtlQUFlRSxHQUFmRixFO2dCQUFlRyxjO2VBQWZMLEM7OztNQUNQTSxDQUFDQyxLO1FBQU1DLFcsRUFBQUMsZ0NBQVBDLGdCO1lBQU9DLEM7ZUFBQ0MsR0FBREMsRUFBQ0MsWSxTQUFERCxFOztZQUFZRSxDO2VBQUNDLEdBQURDLEVBQUNDLFcsU0FBREQsRTs7O2lDQUFXRSxnQ0FBN0JDLGtCO1VBQTZCQyxDO2FBQUNDLEdBQURDLEVBQUNDLFNBQURELEU7O1VBQWFFLEM7YUFBTUMsR0FBTkMsRUFBTUMsTUFBTkgsQzs7O01BQzNDSSxDQUFDQyxLO1FBQ0NDLFMsRUFBQUMsZ0NBREZDLGdCO1lBQ0VDLEM7ZUFBQ0MsR0FBREMsRUFBQ0MsUyxTQUFERCxFO2VBQVVFLEdBQVZGLEVBQVVHLE1BQVZMLEM7O1lBQ0FNLEM7ZUFBQ0MsR0FBREMsRUFBQ0MsUyxTQUFERCxFO2VBQWVFLEdBQWZGLEU7Z0JBQWVHLGdCO2VBQWZMLEM7Y0FBQU0sY0FBU0MsTSxFQUFUTCxFOztZQUNBTSxDO2VBQUNDLEdBQURDLEVBQUNDLFMsU0FBREQsRTtlQUFxQkUsR0FBckJGLEVBQXFCRywwQkFBckJMLEM7Y0FBQU0sY0FBU0MsTyxFQUFNQyxNLEVBQWZOLEU7O1lBQ0FPLEM7ZUFBQ0MsR0FBREMsRUFBQ0MsUyxTQUFERCxFO2VBQXNCRSxHQUF0QkYsRUFBc0JHLDRCQUF0QkwsQztjQUFBTSxjQUFTQyxPLEVBQU1DLE8sRUFBZk4sRTs7WUFDQU8sQztlQUFDQyxHQUFEQyxFQUFDQyxTLFNBQURELEU7ZUFBcUJFLEdBQXJCRixFQUFxQkcsc0JBQXJCTCxDO2NBQUFNLGNBQVNDLE8sRUFBTUMsTSxFQUFmTixFOztZQUNBTyxDO2VBQUNDLEdBQURDLEVBQUNDLFMsU0FBREQsRTtlQUFtQkUsR0FBbkJGLEVBQW1CRztBQUFBQTtBQUFBQSxHQUFuQkwsQztjQUFBTSxjQUFTQyxPLEVBQU1DLEksRUFBZk4sRTs7WUFHQU8sQztlQUFDQyxHQUFEQyxFQUFDQyxTLFNBQURELEU7ZUFBa0JFLEdBQWxCRixFQUFrQkc7QUFBQUE7QUFBQUEsR0FBbEJMLEM7Y0FBQU0sY0FBU0MsTSxFQUFLQyxJLEVBQWROLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aW5wdXQgQGZvY3VzPVwib25Gb2N1c1wiIC8+XG48aW5wdXQgQHVwZGF0ZTp2YWx1ZT1cInZhbHVlID0gJGV2ZW50XCIgLz5cbjxpbnB1dCBAZXZlbnQtbmFtZSBAZXZlbnROYW1lIEBbZXZlbnROYW1lXSB2LW9uPVwiZXZlbnRzXCIgLz5cbjxpbnB1dFxuICBAa2V5ZG93bj1cImZuTmFtZVwiXG4gIEBrZXlkb3duLmxlZnQ9XCJjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQubGVmdD1cIiRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQucmlnaHQ9XCIoJGV2ZW50KSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQuZG93bj1cIigpID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbiAgQGtleWRvd24uY3RybC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbi8+XG4iXX0=
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let onClick = _ctx.onClick;
  let onHover = _ctx.onHover;
  let onPress = _ctx.onPress;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <div
        onClick={VueDX.internal.checkOnDirective("div" as const)([
            {
               arg: "click" as const, 
               exp: onClick,
            },
          ])}
        onHover={VueDX.internal.checkOnDirective("div" as const)([
            {
               arg: "hover" as const, 
               exp: onHover,
            },
          ])}
        onPress={VueDX.internal.checkOnDirective("div" as const)([
            {
               arg: "press" as const, 
               exp: onPress,
            },
          ])}
       />
      <div
        onClick={VueDX.internal.checkOnDirective("div" as const)([
            {
               arg: "click" as const, 
               exp: onClick,
            },
          ])}
        onHover={VueDX.internal.checkOnDirective("div" as const)([
            {
               arg: "hover" as const, 
               exp: onHover,
            },
          ])}
        onPress={VueDX.internal.checkOnDirective("div" as const)([
            {
               arg: "press" as const, 
               exp: onPress,
            },
          ])}
       />
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let onClick = _ctx.onClick;
  let onHover = _ctx.onHover;
  let onPress = _ctx.onPress;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo1LFwiZVwiOjIxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMyfSxcInNcIjp7XCJzXCI6NSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjE0fSxcInNcIjp7XCJzXCI6MCxcImVcIjo1OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NSxcImVcIjo2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo2LFwiZVwiOjExfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo1LFwiZVwiOjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjYsXCJlXCI6MTF9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEzLFwiZVwiOjIwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxMyxcImVcIjoyMH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjIsXCJlXCI6Mzh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzJ9LFwic1wiOntcInNcIjoyMixcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjIsXCJlXCI6MjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjIzLFwiZVwiOjI4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjoyMixcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MjMsXCJlXCI6Mjh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMwLFwiZVwiOjM3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjozMCxcImVcIjozN319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MzksXCJlXCI6NTV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzJ9LFwic1wiOntcInNcIjozOSxcImVcIjo0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzksXCJlXCI6NDB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQwLFwiZVwiOjQ1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjozOSxcImVcIjo0MH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6NDAsXCJlXCI6NDV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjQ3LFwiZVwiOjU0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo0NyxcImVcIjo1NH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NTksXCJlXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo2MCxcImVcIjo2M319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6NjQsXCJlXCI6ODB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzJ9LFwic1wiOntcInNcIjo2NCxcImVcIjo2NX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxNH0sXCJzXCI6e1wic1wiOjU5LFwiZVwiOjExN319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NjQsXCJlXCI6NjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjY1LFwiZVwiOjcwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo2NCxcImVcIjo2NX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6NjUsXCJlXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjcyLFwiZVwiOjc5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo3MixcImVcIjo3OX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6ODEsXCJlXCI6OTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MzJ9LFwic1wiOntcInNcIjo4MSxcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6ODEsXCJlXCI6ODJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjgyLFwiZVwiOjg3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjJ9LFwic1wiOntcInNcIjo4MSxcImVcIjo4Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6ODIsXCJlXCI6ODd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjg5LFwiZVwiOjk2fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo4OSxcImVcIjo5Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6OTgsXCJlXCI6MTE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjMyfSxcInNcIjp7XCJzXCI6OTgsXCJlXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjk5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJyXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo5OSxcImVcIjoxMDR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjk4LFwiZVwiOjk5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo5OSxcImVcIjoxMDR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEwNixcImVcIjoxMTN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjEwNixcImVcIjoxMTN9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEc7UUFBSUMsTyxFQUFBQyxnQ0FBTEMsYztZQUFLQyxDO2VBQUNDLEdBQURDLEVBQUNDLE8sU0FBREQsRTtlQUFRRSxHQUFSRixFQUFRRyxPQUFSTCxDOzs7UUFBaUJNLE8sRUFBQUMsZ0NBQXRCUixjO1lBQXNCUyxDO2VBQUNDLEdBQURDLEVBQUNDLE8sU0FBREQsRTtlQUFRRSxHQUFSRixFQUFRRyxPQUFSTCxDOzs7UUFBaUJNLE8sRUFBQUMsZ0NBQXZDaEIsYztZQUF1Q2lCLEM7ZUFBQ0MsR0FBREMsRUFBQ0MsTyxTQUFERCxFO2VBQVFFLEdBQVJGLEVBQVFHLE9BQVJMLEM7Ozs7TUFDdkNNLENBQUNDLEc7UUFBSUMsTyxFQUFBQyxnQ0FBTEMsYztZQUFLQyxDO2VBQUNDLEdBQURDLEVBQUNDLE8sU0FBREQsRTtlQUFRRSxHQUFSRixFQUFRRyxPQUFSTCxDOzs7UUFBaUJNLE8sRUFBQUMsZ0NBQXRCUixjO1lBQXNCUyxDO2VBQUNDLEdBQURDLEVBQUNDLE8sU0FBREQsRTtlQUFRRSxHQUFSRixFQUFRRyxPQUFSTCxDOzs7UUFBaUJNLE8sRUFBQUMsZ0NBQXZDaEIsYztZQUF1Q2lCLEM7ZUFBQ0MsR0FBREMsRUFBQ0MsTyxTQUFERCxFO2VBQVFFLEdBQVJGLEVBQVFHLE9BQVJMLEMiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG48ZGl2IEBjbGljaz1cIm9uQ2xpY2tcIiBAaG92ZXI9XCJvbkhvdmVyXCIgQHByZXNzPVwib25QcmVzc1wiIC8+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-once default 1`] = `
## 12.1. v-once 

\`\`\`vue-html
<section v-once>{{ largeText }}</section>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let largeText = _ctx.largeText;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <section data-vuedx-directive-once={VueDX.internal.checkBuiltinDirective["once"]("section" as const, [
        {
        },
      ])}>
      {VueDX.internal.checkInterpolation(largeText)}
    </section>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let largeText = _ctx.largeText;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjo0MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MSxcImVcIjo4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjQ1fSxcInNcIjp7XCJzXCI6OSxcImVcIjoxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyMH0sXCJzXCI6e1wic1wiOjEsXCJlXCI6OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OSxcImVcIjoxNX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjE2LFwiZVwiOjMxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxOSxcImVcIjoyOH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6MzMsXCJlXCI6NDB9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLE8sNEJBQVFDLDZDQUFSQyxvQjtRQUFRQyxDOzs7T0FBT0Msa0NBQUdDLFM7TUFBY0MsTyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxzZWN0aW9uIHYtb25jZT57eyBsYXJnZVRleHQgfX08L3NlY3Rpb24+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-pre default 1`] = `
## 11.1. v-pre 

\`\`\`vue-html
<pre v-pre>{{ interpolation }}</pre>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <pre>
      {"{{ interpolation }}"}
    </pre>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjozNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MSxcImVcIjo0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjIzfSxcInNcIjp7XCJzXCI6MTEsXCJlXCI6MzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjMyLFwiZVwiOjM1fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEc7TUFBVUMsdUI7TUFBcUJDLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8cHJlIHYtcHJlPnt7IGludGVycG9sYXRpb24gfX08L3ByZT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-show default 1`] = `
## 8.1. v-show 

\`\`\`vue-html
<h1 v-show="ok">Hello!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = _ctx.ok;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1 data-vuedx-directive-show={VueDX.internal.checkBuiltinDirective["show"]("h1" as const, [
        {
           exp: ok,
        },
      ])}>
      Hello!
    </h1>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let ok = _ctx.ok;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyN319IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MSxcImVcIjozfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjQ1fSxcInNcIjp7XCJzXCI6NCxcImVcIjoxMH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxNX0sXCJzXCI6e1wic1wiOjEsXCJlXCI6M319IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NCxcImVcIjoxMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTIsXCJlXCI6MTR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjQsXCJlXCI6MTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjEyLFwiZVwiOjE0fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNixcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoyfSxcInNcIjp7XCJzXCI6MjQsXCJlXCI6MjZ9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEUsNEJBQUdDLDZDQUFIQyxlO1FBQUdDLEM7V0FBUUMsR0FBUkMsRUFBUUMsRUFBUkgsQzs7O01BQVlJLE07TUFBUUMsRSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxoMSB2LXNob3c9XCJva1wiPkhlbGxvITwvaDE+XG4iXX0=
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
const Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
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
          )
        },
        "bar": ({bar}) => {
          return (
            <>
              <>
                {VueDX.internal.checkInterpolation(bar)}
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
      })}
    </Foo>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoxMTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoyNn0sXCJzXCI6e1wic1wiOjAsXCJlXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxOSxcImVcIjoyMn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6OCxcImVcIjozNX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjMsXCJlXCI6MjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6NX0sXCJzXCI6e1wic1wiOjQ5LFwiZVwiOjUyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo1NCxcImVcIjo1OX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MzgsXCJlXCI6Nzl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MzR9LFwic1wiOntcInNcIjo2MSxcImVcIjo2OH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6NjMsXCJlXCI6NjZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NDJ9LFwic1wiOntcInNcIjoxLFwiZVwiOjR9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjgyLFwiZVwiOjExMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo3fSxcInNcIjp7XCJzXCI6OTIsXCJlXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjExMyxcImVcIjoxMTZ9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEc7T0FBREMsMEJBQUNELEc7UUFDWUUsSzs7O2NBQVhDLEM7Z0JBQWVDLEM7Ozs7O1FBQ0pDLEssR0FBS0MsSzs7O2NBQWhCQyxDO2lCQUF1QkMsa0NBQUVDLEc7Ozs7O1FBRjFCQywwQzs7WUFHQ0MsQztjQUFVQyxPOzs7OztNQUNWQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPEZvbz5cbiAgPHRlbXBsYXRlICNmb28+QTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjYmFyPVwie2Jhcn1cIj57e2Jhcn19PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlPkludmFsaWQ8L3RlbXBsYXRlPlxuPC9Gb28+XG4iXX0=
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
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
const FooBar = VueDX.internal.resolveComponent(__VueDX_components, "FooBar" as const, "FooBar" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
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
            )
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
            )
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
            )
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
            )
          },
          "other": ({foo}) => {
            return (
              <>
                <>
                  {VueDX.internal.checkInterpolation(foo)}
                </>
              </>
            )
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
      </FooBar>
    </>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNH19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MSxcImVcIjo3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjo4LFwiZVwiOjE1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjoxNyxcImVcIjoyM319IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6Njh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjI2LFwiZVwiOjMyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjI2fSxcInNcIjp7XCJzXCI6MjUsXCJlXCI6Njh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6OX0sXCJzXCI6e1wic1wiOjM0LFwiZVwiOjQxfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo0MyxcImVcIjo0OH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjUwLFwiZVwiOjU5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjo1MyxcImVcIjo1Nn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NjEsXCJlXCI6Njd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjY5LFwiZVwiOjExMH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo2fSxcInNcIjp7XCJzXCI6NzAsXCJlXCI6NzZ9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MjZ9LFwic1wiOntcInNcIjo2OSxcImVcIjoxMTB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjc4LFwiZVwiOjgzfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjo4NSxcImVcIjo5MH19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjkyLFwiZVwiOjEwMX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6OTUsXCJlXCI6OTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjEwMyxcImVcIjoxMDl9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MX0sXCJzXCI6e1wic1wiOjExMSxcImVcIjozMTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6Nn0sXCJzXCI6e1wic1wiOjExMixcImVcIjoxMTh9fSIsIjs7O1Z1ZURYOntcImtcIjpcInRcIixcImdcIjp7XCJsXCI6MjZ9LFwic1wiOntcInNcIjoxMTEsXCJlXCI6MzE4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoxMzMsXCJlXCI6MTQwfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxMjIsXCJlXCI6MTU5fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxNDEsXCJlXCI6MTQ4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjd9LFwic1wiOntcInNcIjoxNzMsXCJlXCI6MTc4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjV9LFwic1wiOntcInNcIjoxODAsXCJlXCI6MTg1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoxNjIsXCJlXCI6MjA1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjM0fSxcInNcIjp7XCJzXCI6MTg3LFwiZVwiOjE5NH19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTg5LFwiZVwiOjE5Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjo5fSxcInNcIjp7XCJzXCI6MjE5LFwiZVwiOjIyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjI4LFwiZVwiOjIzMX19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjA4LFwiZVwiOjI4NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjQ5LFwiZVwiOjI1Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MjM4LFwiZVwiOjI3MX19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MjM5LFwiZVwiOjI0Mn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjozNH0sXCJzXCI6e1wic1wiOjI1NCxcImVcIjoyNjV9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6N30sXCJzXCI6e1wic1wiOjI1NixcImVcIjoyNjN9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjI2NyxcImVcIjoyNzB9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6NDJ9LFwic1wiOntcInNcIjoxMTIsXCJlXCI6MTE4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjF9LFwic1wiOntcInNcIjoyODgsXCJlXCI6MzA4fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjoyODksXCJlXCI6MjkyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjl9LFwic1wiOntcInNcIjoyOTMsXCJlXCI6MzAyfX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjN9LFwic1wiOntcInNcIjozMDQsXCJlXCI6MzA3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjZ9LFwic1wiOntcInNcIjozMTEsXCJlXCI6MzE3fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUFBRSxTOzs7Z0JBQU9DLE87Ozs7O1FBQVNDLE07TUFDakJDLENBQUNDLE07U0FBREMsMEJBQUNELE07VUFBUUUsUyxHQUFTQyxLOzs7aUJBQU9DLGtDQUFHQyxHOzs7OztRQUFRQyxNO01BQ3BDQyxDQUFDQyxNO1NBQURDLDBCQUFDRCxNO1VBQVFFLE8sR0FBT0MsSzs7O2lCQUFPQyxrQ0FBR0MsRzs7Ozs7UUFBUUMsTTtNQUNsQ0MsQ0FBQ0MsTTtTQUFEQywwQkFBQ0QsTTtVQUNZRSxTOzs7Z0JBQVhDLEM7a0JBQW1CQyxPOzs7OztVQUNSQyxPLEdBQU9DLEs7OztnQkFBbEJDLEM7bUJBQXlCQyxrQ0FBRUMsRzs7Ozs7VUFDaEJDLFMsR0FBU0MsRzs7O2dCQUFwQkMsQzs7cUJBQ2FDLEc7d0JBQVhDLENBQUNDLEc7MkJBQWVDLGtDQUFFQyxPOzBCQUFXQyxHOzs7Ozs7O1VBSmhDQywwQzs7Y0FNQ0MsQ0FBQ0MsRztnQkFBSUMsUztnQkFBV0MsRzs7OztRQUNoQkMsTSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxGb29CYXI+Y29udGVudDwvRm9vQmFyPlxuPEZvb0JhciAjZGVmYXVsdD1cIntmb299XCI+e3sgZm9vIH19PC9Gb29CYXI+XG48Rm9vQmFyICNvdGhlcj1cIntmb299XCI+e3sgZm9vIH19PC9Gb29CYXI+XG48Rm9vQmFyPlxuICA8dGVtcGxhdGUgI2RlZmF1bHQ+Y29udGVudDwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZSAjb3RoZXI9XCJ7Zm9vfVwiPnt7Zm9vfX08L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI2Fub3RoZXI9XCJmb29cIj5cbiAgICA8ZGl2IHYtaWY9XCJmb29cIj57e2Zvby5iYXJ9fTwvZGl2PlxuICA8L3RlbXBsYXRlPlxuICA8ZGl2PmV4dHJhbm91czwvZGl2PlxuPC9Gb29CYXI+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-text default 1`] = `
## 6.1. v-text 

\`\`\`vue-html
<span v-text="msg"></span>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
type _Self = InstanceType<typeof Example>
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let msg = _ctx.msg;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <span data-vuedx-directive-text={VueDX.internal.checkBuiltinDirective["text"]("span" as const, [
        {
           exp: msg,
        },
      ])}>
    </span>
  )
}
/*<vuedx:diagnosticsIgnore>*/
function _slots(_ctx: _Self) {
  let msg = _ctx.msg;
  return VueDX.internal.flat([])
}
export type _Slots = VueDX.internal.Slots<ReturnType<typeof _slots>>
/*</vuedx:diagnosticsIgnore>*/

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlK3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6MCxcImVcIjoyNn19IiwiOzs7VnVlRFg6e1wia1wiOlwiY1wiLFwiZ1wiOntcImxcIjo0fSxcInNcIjp7XCJzXCI6MSxcImVcIjo1fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJ0XCIsXCJnXCI6e1wibFwiOjQ1fSxcInNcIjp7XCJzXCI6NixcImVcIjoxMn19IiwiOzs7VnVlRFg6e1wia1wiOlwidFwiLFwiZ1wiOntcImxcIjoxN30sXCJzXCI6e1wic1wiOjEsXCJlXCI6NX19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjoxfSxcInNcIjp7XCJzXCI6NixcImVcIjoxMn19IiwiOzs7VnVlRFg6e1wia1wiOlwiclwiLFwiZ1wiOntcImxcIjozfSxcInNcIjp7XCJzXCI6MTQsXCJlXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtcIjpcInJcIixcImdcIjp7XCJsXCI6Mn0sXCJzXCI6e1wic1wiOjYsXCJlXCI6MTJ9fSIsIjs7O1Z1ZURYOntcImtcIjpcImNcIixcImdcIjp7XCJsXCI6M30sXCJzXCI6e1wic1wiOjE0LFwiZVwiOjE3fX0iLCI7OztWdWVEWDp7XCJrXCI6XCJjXCIsXCJnXCI6e1wibFwiOjR9LFwic1wiOntcInNcIjoyMSxcImVcIjoyNX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsSSw0QkFBS0MsNkNBQUxDLGlCO1FBQUtDLEM7V0FBUUMsR0FBUkMsRUFBUUMsR0FBUkgsQzs7O01BQWVJLEkiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8c3BhbiB2LXRleHQ9XCJtc2dcIj48L3NwYW4+XG4iXX0=
\`\`\`


`
