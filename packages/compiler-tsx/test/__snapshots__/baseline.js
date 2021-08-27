// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Baseline Spec Dynamic component with v-for default 1`] = `
## 15.1. Dynamic component with v-for 

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
interface _Self extends InstanceType<typeof Example> {}
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
                        default: ({baz}) => {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjE2LFwiZW5kXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjozNSxcImVuZFwiOjM5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjgsXCJlbmRcIjozMX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjYwLFwiZW5kXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjIxMH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjEwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDZ9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6MTB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo5fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjEwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjQ0LFwiZW5kXCI6MTk3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTh9LFwic3JjXCI6e1wic3RhcnRcIjo0NSxcImVuZFwiOjU0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDZ9LFwic3JjXCI6e1wic3RhcnRcIjo0NSxcImVuZFwiOjU0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo3fSxcInNyY1wiOntcInN0YXJ0XCI6NjYsXCJlbmRcIjo3M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjc1LFwiZW5kXCI6ODB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxMjgsXCJlbmRcIjoxMzF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjoxMjAsXCJlbmRcIjoxMjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjoxNTcsXCJlbmRcIjoxNjF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6ODcsXCJlbmRcIjoxODJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjg4LFwiZW5kXCI6OTd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo0Nn0sXCJzcmNcIjp7XCJzdGFydFwiOjg4LFwiZW5kXCI6OTd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo5fSxcInNyY1wiOntcInN0YXJ0XCI6ODgsXCJlbmRcIjo5N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxNDEsXCJlbmRcIjoxNjV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjE0MixcImVuZFwiOjE1MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6MTcyLFwiZW5kXCI6MTgxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTh9LFwic3JjXCI6e1wic3RhcnRcIjoxODcsXCJlbmRcIjoxOTZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjIwMCxcImVuZFwiOjIwOX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2lGQUFnQkEsRzs7Ozs7a0NBQW1CQyxJLEdBQVBDLEc7eUZBQ1ZDLEc7O1lBRGxCQyxDQUFDQyxrQjtlQUFBQyw4QztnQkFBQUMsUzs7b0JBQ0NDLENBQUNDLGtCO3VCQUFBQyw4Qzt3QkFBcUJDLE8sR0FBU0MsSzs7OzswREFDWUMsRyxHQUFSQyxJO2lIQUNmQyxJOztvQ0FEbEJDLENBQUNDLGtCO3VDQUFBQyw4Qzt3Q0FBQUMsUzs7NENBQ0NDLENBQUNDLGtCOzs7O3NDQUNEQyxrQjs7Ozs7Ozs7c0JBQ0ZDLGtCOzs7O2NBQ0ZDLGtCIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGNvbXBvbmVudCA6aXM9XCJiYXJcIiB2LWZvcj1cImJhciBvZiBiYXJzXCI+XG4gIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgI2RlZmF1bHQ9XCJ7YmF6fVwiPlxuICAgIDxjb21wb25lbnQgOmlzPVwiYmF6W2Jhcl1cIiB2LWZvcj1cIml0ZW0gb2YgYmF6XCIgPlxuICAgICAgPGNvbXBvbmVudCA6aXM9XCJpdGVtXCIgLz5cbiAgICA8L2NvbXBvbmVudD5cbiAgPC9jb21wb25lbnQ+XG48L2NvbXBvbmVudD5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec Nested Dynamic components default 1`] = `
## 14.1. Nested Dynamic components 

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
interface _Self extends InstanceType<typeof Example> {}
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
        default: ({bar}) => {
          return (
            <_DynamicComponent1>
              {VueDX.internal.checkSlots(_DynamicComponent1, {
                default: ({baz}) => {
                  return (
                    <_DynamicComponent2>
                      {VueDX.internal.checkSlots(_DynamicComponent2, {
                        other: ({ foo }) => {
                          return (
                            <>
                              <>
                                <_DynamicComponent3 />
                              </>
                            </>
                          )
                        },
                        default: ({ bar }) => {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjE2LFwiZW5kXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjMyMH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjEwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDZ9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6MTB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjd9LFwic3JjXCI6e1wic3RhcnRcIjoyMixcImVuZFwiOjI5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MzEsXCJlbmRcIjozNn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo0MSxcImVuZFwiOjMwN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6NDIsXCJlbmRcIjo1MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjQ2fSxcInNyY1wiOntcInN0YXJ0XCI6NDIsXCJlbmRcIjo1MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjYzLFwiZW5kXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjo3MixcImVuZFwiOjc3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjg0LFwiZW5kXCI6MjkyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTh9LFwic3JjXCI6e1wic3RhcnRcIjo4NSxcImVuZFwiOjk0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDZ9LFwic3JjXCI6e1wic3RhcnRcIjo4NSxcImVuZFwiOjk0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MTIzLFwiZW5kXCI6MTI4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo3fSxcInNyY1wiOntcInN0YXJ0XCI6MTMwLFwiZW5kXCI6MTM3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjExMixcImVuZFwiOjE4OX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxNDgsXCJlbmRcIjoxNzF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjE0OSxcImVuZFwiOjE1OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjIwNyxcImVuZFwiOjIxNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjIxNixcImVuZFwiOjIyM319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxOTYsXCJlbmRcIjoyNzV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MjM0LFwiZW5kXCI6MjU3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTh9LFwic3JjXCI6e1wic3RhcnRcIjoyMzUsXCJlbmRcIjoyNDR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjI4MixcImVuZFwiOjI5MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6Mjk3LFwiZW5kXCI6MzA2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTh9LFwic3JjXCI6e1wic3RhcnRcIjozMTAsXCJlbmRcIjozMTl9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztpRkFBZ0JBLEc7OztJQUFoQkMsQ0FBQ0Msa0I7T0FBQUMsOEM7UUFBcUJDLE8sR0FBU0MsSzs7WUFDN0JDLENBQUNDLGtCO2VBQUFDLDhDO2dCQUFxQkMsTyxHQUFTQyxLOztvQkFDN0JDLENBQUNDLGtCO3VCQUFBQyw4Qzt3QkFDWUMsSyxHQUFPQyxPOzs7OEJBQWxCQyxDO2dDQUNFQyxDQUFDQyxrQjs7Ozs7d0JBRVFDLE8sR0FBU0MsTzs7OzhCQUFwQkMsQztnQ0FDRUMsQ0FBQ0Msa0I7Ozs7OztzQkFFSEMsa0I7Ozs7Y0FDRkMsa0I7Ozs7TUFDRkMsa0IiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Y29tcG9uZW50IDppcz1cImZvb1wiICNkZWZhdWx0PVwie2Jhcn1cIj5cbiAgPGNvbXBvbmVudCA6aXM9XCJiYXJcIiAjZGVmYXVsdD1cIntiYXp9XCI+XG4gICAgPGNvbXBvbmVudCA6aXM9XCJiYXpcIj5cbiAgICAgIDx0ZW1wbGF0ZSAjb3RoZXI9XCJ7IGZvbyB9XCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiZm9vXCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8dGVtcGxhdGUgI2RlZmF1bHQ9XCJ7IGJhciB9XCI+XG4gICAgICAgIDxjb21wb25lbnQgOmlzPVwiYmFyXCIgLz5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9jb21wb25lbnQ+XG4gIDwvY29tcG9uZW50PlxuPC9jb21wb25lbnQ+XG4iXX0=
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
interface _Self extends InstanceType<typeof Example> {}
const __component_FooBar = VueDX.internal.resolveComponent(__VueDX_components, "FooBar" as const, "FooBar" as const);
const __component_Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
const __component_UnknownElement = VueDX.internal.resolveComponent(__VueDX_components, "unknown-element" as const, "UnknownElement" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <__component_FooBar>
        {VueDX.internal.checkSlots(__component_FooBar, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </__component_FooBar>
      <__component_Foo.Bar>
        {VueDX.internal.checkSlots(__component_Foo.Bar, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </__component_Foo.Bar>
      <__component_Foo.Bar.Baz>
        {VueDX.internal.checkSlots(__component_Foo.Bar.Baz, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </__component_Foo.Bar.Baz>
      <__component_FooBar>
        {VueDX.internal.checkSlots(__component_FooBar, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </__component_FooBar>
      <__component_FooBar>
        {VueDX.internal.checkSlots(__component_FooBar, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </__component_FooBar>
      <__component_UnknownElement>
        {VueDX.internal.checkSlots(__component_UnknownElement, {
          default: () => {
            return (
              <>
                foo
              </>
            )
          },
        })}
      </__component_UnknownElement>
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjEsXCJlbmRcIjo3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDZ9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo4LFwiZW5kXCI6MTF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjEzLFwiZW5kXCI6MTl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MjEsXCJlbmRcIjo0M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE5fSxcInNyY1wiOntcInN0YXJ0XCI6MjIsXCJlbmRcIjoyOX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjQ3fSxcInNyY1wiOntcInN0YXJ0XCI6MjIsXCJlbmRcIjoyOX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjoyMixcImVuZFwiOjI5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjMwLFwiZW5kXCI6MzN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOX0sXCJzcmNcIjp7XCJzdGFydFwiOjM1LFwiZW5kXCI6NDJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NDQsXCJlbmRcIjo3NH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjIzfSxcInNyY1wiOntcInN0YXJ0XCI6NDUsXCJlbmRcIjo1Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjUxfSxcInNyY1wiOntcInN0YXJ0XCI6NDUsXCJlbmRcIjo1Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjo0NSxcImVuZFwiOjU2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjU3LFwiZW5kXCI6NjB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyM30sXCJzcmNcIjp7XCJzdGFydFwiOjYyLFwiZW5kXCI6NzN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NzUsXCJlbmRcIjo5NX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6NzYsXCJlbmRcIjo4Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjQ2fSxcInNyY1wiOntcInN0YXJ0XCI6NzYsXCJlbmRcIjo4Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjo3NixcImVuZFwiOjgyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjgzLFwiZW5kXCI6ODZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjg4LFwiZW5kXCI6OTR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6OTYsXCJlbmRcIjoxMTh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjk3LFwiZW5kXCI6MTA0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDZ9LFwic3JjXCI6e1wic3RhcnRcIjo5NyxcImVuZFwiOjEwNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjo5NyxcImVuZFwiOjEwNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxMDUsXCJlbmRcIjoxMDh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjExMCxcImVuZFwiOjExN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxMTksXCJlbmRcIjoxNTd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyNn0sXCJzcmNcIjp7XCJzdGFydFwiOjEyMCxcImVuZFwiOjEzNX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjU0fSxcInNyY1wiOntcInN0YXJ0XCI6MTIwLFwiZW5kXCI6MTM1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6OX0sXCJzcmNcIjp7XCJzdGFydFwiOjEyMCxcImVuZFwiOjEzNX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxMzYsXCJlbmRcIjoxMzl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyNn0sXCJzcmNcIjp7XCJzdGFydFwiOjE0MSxcImVuZFwiOjE1Nn19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0Msa0I7U0FBQUMsOEM7VUFBQUMsUzs7O2dCQUFPQyxHOzs7OztRQUFLQyxrQjtNQUNiQyxDQUFDQyxtQjtTQUFBQywrQztVQUFBQyxTOzs7Z0JBQVFDLEc7Ozs7O1FBQUtDLG1CO01BQ2RDLENBQUNDLHVCO1NBQUFDLG1EO1VBQUFDLFM7OztnQkFBWUMsRzs7Ozs7UUFBS0MsdUI7TUFDbEJDLENBQUNDLGtCO1NBQUFDLDhDO1VBQUFDLFM7OztnQkFBT0MsRzs7Ozs7UUFBS0Msa0I7TUFDYkMsQ0FBQ0Msa0I7U0FBQUMsOEM7VUFBQUMsUzs7O2dCQUFRQyxHOzs7OztRQUFLQyxrQjtNQUNkQyxDQUFDQywwQjtTQUFBQyxzRDtVQUFBQyxTOzs7Z0JBQWdCQyxHOzs7OztRQUFLQywwQiIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxGb29CYXI+Zm9vPC9Gb29CYXI+XG48Rm9vLkJhcj5mb288L0Zvby5CYXI+XG48Rm9vLkJhci5CYXo+Zm9vPC9Gb28uQmFyLkJhej5cbjxmb29CYXI+Zm9vPC9mb29CYXI+XG48Zm9vLWJhcj5mb288L2Zvby1iYXI+XG48dW5rbm93bi1lbGVtZW50PmZvbzwvdW5rbm93bi1lbGVtZW50PlxuIl19
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
interface _Self extends InstanceType<typeof Example> {}
const __component_HelloWorld = VueDX.internal.resolveComponent(__VueDX_components, "HelloWorld" as const, "HelloWorld" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let name = _ctx.name;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <__component_HelloWorld n />
      <span>
        Name: 
        {name +}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyMn0sXCJzcmNcIjp7XCJzdGFydFwiOjEsXCJlbmRcIjoxMX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxMixcImVuZFwiOjEzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjE3LFwiZW5kXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo0fSxcInNyY1wiOntcInN0YXJ0XCI6MTgsXCJlbmRcIjoyMn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjZ9LFwic3JjXCI6e1wic3RhcnRcIjoyMyxcImVuZFwiOjI5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo2fSxcInNyY1wiOntcInN0YXJ0XCI6MzIsXCJlbmRcIjozOH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjo0MyxcImVuZFwiOjQ3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjQ5LFwiZW5kXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NTAsXCJlbmRcIjo1MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo2MixcImVuZFwiOjYzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mjl9LFwic3JjXCI6e1wic3RhcnRcIjo3NCxcImVuZFwiOjc0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjY1LFwiZW5kXCI6ODB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NjYsXCJlbmRcIjo2N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo3OCxcImVuZFwiOjc5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLHNCLENBQVdDLEM7TUFDWkMsQ0FBQ0MsSTtRQUFLQyxNO1NBQVNDLE07UUFBV0MsSTtNQUMxQkMsQ0FBQ0MsQztRQUFZQyxDOztTQUNKQyw2QjtZQUFUQyxDQUFDQyxDO2NBQVlDLEMiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8SGVsbG9Xb3JsZCBuIC8+XG48c3Bhbj5OYW1lOiB7eyBuYW1lICsgfX08L3NwYW4+XG48cCB2LWJpbmQ6PjwvcD5cbjxwIHYtaWY9XCJcIj48L3A+XG4iXX0=
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
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NSxcImVuZFwiOjh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTAsXCJlbmRcIjoxM319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxHO01BQUlDLEc7TUFBS0MsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXY+Zm9vPC9kaXY+XG4iXX0=
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
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjYxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjEsXCJlbmRcIjo0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTZ9LFwic3JjXCI6e1wic3RhcnRcIjoxNCxcImVuZFwiOjMwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjQwLFwiZW5kXCI6MTM0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NH0sXCJzcmNcIjp7XCJzdGFydFwiOjQxLFwiZW5kXCI6NDV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo3fSxcInNyY1wiOntcInN0YXJ0XCI6NjIsXCJlbmRcIjo2OX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjc4LFwiZW5kXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo4fSxcInNyY1wiOntcInN0YXJ0XCI6ODYsXCJlbmRcIjo5Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjk0LFwiZW5kXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNn0sXCJzcmNcIjp7XCJzdGFydFwiOjEwMSxcImVuZFwiOjExN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjoxMjksXCJlbmRcIjoxMzN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo5fSxcInNyY1wiOntcInN0YXJ0XCI6MTQ4LFwiZW5kXCI6MTU3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MTY2LFwiZW5kXCI6MTcxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6OH0sXCJzcmNcIjp7XCJzdGFydFwiOjE3NCxcImVuZFwiOjE4MH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjE4MixcImVuZFwiOjE4N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjIxMixcImVuZFwiOjIxOX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjIyOSxcImVuZFwiOjIzNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjh9LFwic3JjXCI6e1wic3RhcnRcIjoyMzcsXCJlbmRcIjoyNDN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjoyNDUsXCJlbmRcIjoyNTB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjU3LFwiZW5kXCI6MjYwfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEc7O1FBQ09DLGdCOzs7TUFDTkMsQ0FBQ0MsSTtnREFDWUMsTyxRQUFnQkMsSyxHQUFRQyxRLEVBQVFDLEs7VUFBT0MsZ0I7OztRQUNsREMsSTs4Q0FDU0MsUyxRQUFrQkMsSyxHQUFRQyxRLEVBQVFDLEs7OENBQ2hDQyxPLFFBQWlCQyxLLEdBQVFDLFEsRUFBUUMsSztNQUM5Q0MsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXY+XG4gIDxzbG90PmZhbGxiYWNrIGNvbnRlbnQ8L3Nsb3Q+XG4gIDxzcGFuPlxuICAgIDxzbG90IG5hbWU9XCJvdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cInZhbHVlXCI+ZmFsbGJhY2sgY29udGVudDwvc2xvdD5cbiAgPC9zcGFuPlxuICA8c2xvdCBuYW1lPVwiYW5vdGhlclwiIHYtYmluZD1cInByb3BzXCIgOm15UHJvcD1cInZhbHVlXCI+PC9zbG90PlxuICA8c2xvdCA6bmFtZT1cImR5bmFtaWNcIiB2LWJpbmQ9XCJwcm9wc1wiIDpteVByb3A9XCJ2YWx1ZVwiIC8+XG48L2Rpdj5cbiJdfQ==
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
interface _Self extends InstanceType<typeof Example> {}
const __component_Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
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
      <__component_Foo
        value={myInput}
        {...({
          [customName]: myInput,
          ...(rest),
        })} />
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6NjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6OCxcImVuZFwiOjEzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo3fSxcInNyY1wiOntcInN0YXJ0XCI6MTUsXCJlbmRcIjoyMn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTB9LFwic3JjXCI6e1wic3RhcnRcIjoyNSxcImVuZFwiOjM3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo3fSxcInNyY1wiOntcInN0YXJ0XCI6MzksXCJlbmRcIjo0Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NH0sXCJzcmNcIjp7XCJzdGFydFwiOjU2LFwiZW5kXCI6NjB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NjUsXCJlbmRcIjoxMjd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNX0sXCJzcmNcIjp7XCJzdGFydFwiOjY2LFwiZW5kXCI6Njl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6NzEsXCJlbmRcIjo3Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjc4LFwiZW5kXCI6ODV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjEwfSxcInNyY1wiOntcInN0YXJ0XCI6ODgsXCJlbmRcIjoxMDB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjd9LFwic3JjXCI6e1wic3RhcnRcIjoxMDIsXCJlbmRcIjoxMDl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjoxMTksXCJlbmRcIjoxMjN9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxLO1FBQU9DLEssRUFBT0MsTzs7V0FBVUMsVSxHQUFjQyxPO2NBQWlCQyxJOztNQUN4REMsQ0FBQ0MsZTtRQUFLQyxLLEVBQU9DLE87O1dBQVVDLFUsR0FBY0MsTztjQUFpQkMsSSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxpbnB1dCA6dmFsdWU9XCJteUlucHV0XCIgOltjdXN0b21OYW1lXT1cIm15SW5wdXRcIiB2LWJpbmQ9XCJyZXN0XCIgLz5cbjxGb28gOnZhbHVlPVwibXlJbnB1dFwiIDpbY3VzdG9tTmFtZV09XCJteUlucHV0XCIgdi1iaW5kPVwicmVzdFwiIC8+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-for default 1`] = `
## 13.1. v-for 

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
interface _Self extends InstanceType<typeof Example> {}
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
              {n}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(num, (n, i) => {
          return (
            <div>
              {n}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(str, (s) => {
          return (
            <div>
              {s}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(str, (s, i) => {
          return (
            <div>
              {s}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, (a) => {
          return (
            <div>
              {a}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ value }) => {
          return (
            <div>
              {value}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ foo }) => {
          return (
            <div>
              {arr}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, (a, i) => {
          return (
            <div>
              {a}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(arr, ({ value }, i) => {
          return (
            <div>
              {value}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o) => {
          return (
            <div>
              {o}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o, k) => {
          return (
            <div>
              {o}
              :
              {k}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(obj, (o, k, i) => {
          return (
            <div>
              {o}
              :
              {k}
              :
              {i}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(itr, (t) => {
          return (
            <div>
              {t}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(boo, (b) => {
          return (
            <div>
              {b}
            </div>
          )
        })
      }
      {
        VueDX.internal.renderList(sym, (s) => {
          return (
            <div>
              {s}
            </div>
          )
        })
      }
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjE3LFwiZW5kXCI6MjB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxMixcImVuZFwiOjEzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjozNX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6NH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjI1LFwiZW5kXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MzEsXCJlbmRcIjozNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjU4LFwiZW5kXCI6NjF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo0OSxcImVuZFwiOjUwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NTIsXCJlbmRcIjo1M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjozNixcImVuZFwiOjg0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjM3LFwiZW5kXCI6NDB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo2NixcImVuZFwiOjY3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjcwLFwiZW5kXCI6NzF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo3NCxcImVuZFwiOjc1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjgwLFwiZW5kXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxMDIsXCJlbmRcIjoxMDV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo5NyxcImVuZFwiOjk4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjg1LFwiZW5kXCI6MTIwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjg2LFwiZW5kXCI6ODl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxMTAsXCJlbmRcIjoxMTF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTE2LFwiZW5kXCI6MTE5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTQzLFwiZW5kXCI6MTQ2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MTM0LFwiZW5kXCI6MTM1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MTM3LFwiZW5kXCI6MTM4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjEyMSxcImVuZFwiOjE2OX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxMjIsXCJlbmRcIjoxMjV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxNTEsXCJlbmRcIjoxNTJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MTU1LFwiZW5kXCI6MTU2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MTU5LFwiZW5kXCI6MTYwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjE2NSxcImVuZFwiOjE2OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjE4NyxcImVuZFwiOjE5MH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjE4MixcImVuZFwiOjE4M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxNzAsXCJlbmRcIjoyMDV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTcxLFwiZW5kXCI6MTc0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MTk1LFwiZW5kXCI6MTk2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjIwMSxcImVuZFwiOjIwNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjIzMSxcImVuZFwiOjIzNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6OX0sXCJzcmNcIjp7XCJzdGFydFwiOjIxOCxcImVuZFwiOjIyN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoyMDYsXCJlbmRcIjoyNTN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjA3LFwiZW5kXCI6MjEwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MjM5LFwiZW5kXCI6MjQ0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjI0OSxcImVuZFwiOjI1Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjI3NyxcImVuZFwiOjI4MH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjI2NixcImVuZFwiOjI3M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoyNTQsXCJlbmRcIjoyOTd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjU1LFwiZW5kXCI6MjU4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6Mjg1LFwiZW5kXCI6Mjg4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjI5MyxcImVuZFwiOjI5Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjMyMCxcImVuZFwiOjMyM319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjMxMSxcImVuZFwiOjMxMn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjMxNCxcImVuZFwiOjMxNX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoyOTgsXCJlbmRcIjozNDZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6Mjk5LFwiZW5kXCI6MzAyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MzI4LFwiZW5kXCI6MzI5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjMzMixcImVuZFwiOjMzM319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjMzNixcImVuZFwiOjMzN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjozNDIsXCJlbmRcIjozNDV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjozNzcsXCJlbmRcIjozODB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjozNjAsXCJlbmRcIjozNjl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjozNzEsXCJlbmRcIjozNzJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MzQ3LFwiZW5kXCI6NDA3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjM0OCxcImVuZFwiOjM1MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjM4NSxcImVuZFwiOjM5MH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjozOTMsXCJlbmRcIjozOTR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjozOTcsXCJlbmRcIjozOTh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NDAzLFwiZW5kXCI6NDA2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NDI1LFwiZW5kXCI6NDI4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NDIwLFwiZW5kXCI6NDIxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjQwOCxcImVuZFwiOjQ0M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo0MDksXCJlbmRcIjo0MTJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo0MzMsXCJlbmRcIjo0MzR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NDM5LFwiZW5kXCI6NDQyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NDY2LFwiZW5kXCI6NDY5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NDU3LFwiZW5kXCI6NDU4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NDYwLFwiZW5kXCI6NDYxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjQ0NCxcImVuZFwiOjQ5Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo0NDUsXCJlbmRcIjo0NDh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo0NzQsXCJlbmRcIjo0NzV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NDc4LFwiZW5kXCI6NDc5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NDgyLFwiZW5kXCI6NDgzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjQ4OCxcImVuZFwiOjQ5MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjUxOCxcImVuZFwiOjUyMX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjUwNixcImVuZFwiOjUwN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjUwOSxcImVuZFwiOjUxMH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjUxMixcImVuZFwiOjUxM319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo0OTMsXCJlbmRcIjo1NTJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NDk0LFwiZW5kXCI6NDk3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NTI2LFwiZW5kXCI6NTI3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjUzMCxcImVuZFwiOjUzMX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjUzNCxcImVuZFwiOjUzNX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo1MzgsXCJlbmRcIjo1Mzl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo1NDIsXCJlbmRcIjo1NDN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NTQ4LFwiZW5kXCI6NTUxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NTcwLFwiZW5kXCI6NTczfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NTY1LFwiZW5kXCI6NTY2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjU1MyxcImVuZFwiOjU4OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo1NTQsXCJlbmRcIjo1NTd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo1NzgsXCJlbmRcIjo1Nzl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NTg0LFwiZW5kXCI6NTg3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NjA2LFwiZW5kXCI6NjA5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NjAxLFwiZW5kXCI6NjAyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjU4OSxcImVuZFwiOjYyNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo1OTAsXCJlbmRcIjo1OTN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo2MTQsXCJlbmRcIjo2MTV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NjIwLFwiZW5kXCI6NjIzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NjQyLFwiZW5kXCI6NjQ1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NjM3LFwiZW5kXCI6NjM4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjYyNSxcImVuZFwiOjY2MH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo2MjYsXCJlbmRcIjo2Mjl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo2NTAsXCJlbmRcIjo2NTF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NjU2LFwiZW5kXCI6NjU5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUFpQkEsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXdCQyxDO2NBQU1DLEc7Ozs7O2tDQUNUQyxHLEdBQVRDLEMsRUFBR0MsQzs7WUFBaEJDLENBQUNDLEc7ZUFBNkJDLEM7Y0FBSUMsQztlQUFJQyxDO2NBQU1DLEc7Ozs7O2tDQUMzQkMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXdCQyxDO2NBQU1DLEc7Ozs7O2tDQUNUQyxHLEdBQVRDLEMsRUFBR0MsQzs7WUFBaEJDLENBQUNDLEc7ZUFBNkJDLEM7Y0FBSUMsQztlQUFJQyxDO2NBQU1DLEc7Ozs7O2tDQUMzQkMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXdCQyxDO2NBQU1DLEc7Ozs7O2tDQUNOQyxHLEdBQWJDLFM7O1lBQVpDLENBQUNDLEc7ZUFBZ0NDLEs7Y0FBVUMsRzs7Ozs7a0NBQ3BCQyxHLEdBQVhDLE87O1lBQVpDLENBQUNDLEc7ZUFBOEJDLEc7Y0FBUUMsRzs7Ozs7a0NBQ2pCQyxHLEdBQVRDLEMsRUFBR0MsQzs7WUFBaEJDLENBQUNDLEc7ZUFBNkJDLEM7Y0FBSUMsQztlQUFJQyxDO2NBQU1DLEc7Ozs7O2tDQUNkQyxHLEdBQWpCQyxTLEVBQVdDLEM7O1lBQXhCQyxDQUFDQyxHO2VBQXFDQyxLO2NBQVFDLEM7ZUFBSUMsQztjQUFNQyxHOzs7OztrQ0FDdkNDLEcsR0FBTEMsQzs7WUFBWkMsQ0FBQ0MsRztlQUF3QkMsQztjQUFNQyxHOzs7OztrQ0FDVEMsRyxHQUFUQyxDLEVBQUdDLEM7O1lBQWhCQyxDQUFDQyxHO2VBQTZCQyxDO2NBQUlDLEM7ZUFBSUMsQztjQUFNQyxHOzs7OztrQ0FDbkJDLEcsR0FBWkMsQyxFQUFHQyxDLEVBQUdDLEM7O1lBQW5CQyxDQUFDQyxHO2VBQWdDQyxDO2NBQUlDLEM7ZUFBSUMsQztjQUFJQyxDO2VBQUlDLEM7Y0FBTUMsRzs7Ozs7a0NBQ3RDQyxHLEdBQUxDLEM7O1lBQVpDLENBQUNDLEc7ZUFBd0JDLEM7Y0FBTUMsRzs7Ozs7a0NBQ2RDLEcsR0FBTEMsQzs7WUFBWkMsQ0FBQ0MsRztlQUF3QkMsQztjQUFNQyxHOzs7OztrQ0FDZEMsRyxHQUFMQyxDOztZQUFaQyxDQUFDQyxHO2VBQXdCQyxDO2NBQU1DLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IHYtZm9yPVwibiBvZiBudW1cIj57eyBuIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG4sIGkpIG9mIG51bVwiPnt7IG4gfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInMgb2Ygc3RyXCI+e3sgcyB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihzLCBpKSBvZiBzdHJcIj57eyBzIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJhIG9mIGFyclwiPnt7IGEgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ7IHZhbHVlIH0gb2YgYXJyXCI+e3sgdmFsdWUgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCJ7IGZvbyB9IG9mIGFyclwiPnt7IGFyciB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihhLCBpKSBvZiBhcnJcIj57eyBhIH19Ont7IGkgfX08L2Rpdj5cbjxkaXYgdi1mb3I9XCIoeyB2YWx1ZSB9LCBpKSBvZiBhcnJcIj57eyB2YWx1ZSB9fTp7eyBpIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwibyBvZiBvYmpcIj57eyBvIH19PC9kaXY+XG48ZGl2IHYtZm9yPVwiKG8sIGspIG9mIG9ialwiPnt7IG8gfX06e3sgayB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cIihvLCBrLCBpKSBvZiBvYmpcIj57eyBvIH19Ont7IGsgfX06e3sgaSB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInQgb2YgaXRyXCI+e3sgdCB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cImIgb2YgYm9vXCI+e3sgYiB9fTwvZGl2PlxuPGRpdiB2LWZvcj1cInMgb2Ygc3ltXCI+e3sgcyB9fTwvZGl2PlxuIl19
\`\`\`


`

exports[`Baseline Spec v-html default 1`] = `
## 6.1. v-html 

\`\`\`vue-html
<div v-html="html"></div>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let html = _ctx.html;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <div data-vuedx-directive-html={VueDX.internal.checkDirective("html", "div", [
        {
           exp: html,
        },
      ])}>
    </div>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo2fSxcInNyY1wiOntcInN0YXJ0XCI6NSxcImVuZFwiOjExfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo0fSxcInNyY1wiOntcInN0YXJ0XCI6MTMsXCJlbmRcIjoxN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoyMSxcImVuZFwiOjI0fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxHLDBEQUFJQyxNOztnQkFBUUMsSTs7O01BQVFDLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IHYtaHRtbD1cImh0bWxcIj48L2Rpdj5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  elif no if 1`] = `
## 4.8. v-if/v-else/v-else-if > elif no if

\`\`\`vue-html
<h1 v-else-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6NDR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNX0sXCJzcmNcIjp7XCJzdGFydFwiOjI0LFwiZW5kXCI6Mzl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6NDEsXCJlbmRcIjo0M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo0NSxcImVuZFwiOjY5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mn0sXCJzcmNcIjp7XCJzdGFydFwiOjQ2LFwiZW5kXCI6NDh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo4fSxcInNyY1wiOntcInN0YXJ0XCI6NTYsXCJlbmRcIjo2NH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjJ9LFwic3JjXCI6e1wic3RhcnRcIjo2NixcImVuZFwiOjY4fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFBQUEsQ0FBQ0MsRTtRQUF1QkMsZTtRQUFpQkMsRTtNQUN6Q0MsQ0FBQ0MsRTtRQUFVQyxRO1FBQVVDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1lbHNlLWlmPVwiYXdlc29tZVwiPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG48aDEgdi1lbHNlPk9oIG5vIPCfmKI8L2gxPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  else condition 1`] = `
## 4.7. v-if/v-else/v-else-if > else condition

\`\`\`vue-html
<h1 v-else="ok">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MzZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNX0sXCJzcmNcIjp7XCJzdGFydFwiOjE2LFwiZW5kXCI6MzF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MzMsXCJlbmRcIjozNX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsRTtNQUFlQyxlO01BQWlCQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtZWxzZT1cIm9rXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if condition 1`] = `
## 4.6. v-if/v-else/v-else-if > if condition

\`\`\`vue-html
<h1 v-if>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6Mjl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNX0sXCJzcmNcIjp7XCJzdGFydFwiOjksXCJlbmRcIjoyNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjJ9LFwic3JjXCI6e1wic3RhcnRcIjoyNixcImVuZFwiOjI4fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7WUFBQUEsQ0FBQ0MsRTtjQUFRQyxlO2NBQWlCQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtaWY+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if on fragment 1`] = `
## 4.3. v-if/v-else/v-else-if > if on fragment

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
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mn0sXCJzcmNcIjp7XCJzdGFydFwiOjE2LFwiZW5kXCI6MTh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MjMsXCJlbmRcIjozN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjJ9LFwic3JjXCI6e1wic3RhcnRcIjoyNCxcImVuZFwiOjI2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjI3LFwiZW5kXCI6MzJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MzQsXCJlbmRcIjozNn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo0MCxcImVuZFwiOjU4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjQxLFwiZW5kXCI6NDJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxMX0sXCJzcmNcIjp7XCJzdGFydFwiOjQzLFwiZW5kXCI6NTR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NTYsXCJlbmRcIjo1N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo2MSxcImVuZFwiOjc5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjYyLFwiZW5kXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxMX0sXCJzcmNcIjp7XCJzdGFydFwiOjY0LFwiZW5kXCI6NzV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NzcsXCJlbmRcIjo3OH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztTQUFnQkEsRTs7Y0FDZEMsQ0FBQ0MsRTtnQkFBR0MsSztnQkFBT0MsRTtjQUNYQyxDQUFDQyxDO2dCQUFFQyxXO2dCQUFhQyxDO2NBQ2hCQyxDQUFDQyxDO2dCQUFFQyxXO2dCQUFhQyxDIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHYtaWY9XCJva1wiPlxuICA8aDE+VGl0bGU8L2gxPlxuICA8cD5QYXJhZ3JhcGggMTwvcD5cbiAgPHA+UGFyYWdyYXBoIDI8L3A+XG48L3RlbXBsYXRlPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if/else 1`] = `
## 4.2. v-if/v-else/v-else-if > if/else

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjEwLFwiZW5kXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjM5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mn0sXCJzcmNcIjp7XCJzdGFydFwiOjEsXCJlbmRcIjozfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTV9LFwic3JjXCI6e1wic3RhcnRcIjoxOSxcImVuZFwiOjM0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mn0sXCJzcmNcIjp7XCJzdGFydFwiOjM2LFwiZW5kXCI6Mzh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NDAsXCJlbmRcIjo2NH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjJ9LFwic3JjXCI6e1wic3RhcnRcIjo0MSxcImVuZFwiOjQzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6OH0sXCJzcmNcIjp7XCJzdGFydFwiOjUxLFwiZW5kXCI6NTl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6NjEsXCJlbmRcIjo2M319Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztTQUFVQSxPO1lBQVZDLENBQUNDLEU7Y0FBa0JDLGU7Y0FBaUJDLEU7WUFDcENDLENBQUNDLEU7Y0FBVUMsUTtjQUFVQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbjxoMSB2LWVsc2U+T2ggbm8g8J+YojwvaDE+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  if/else/if chain 1`] = `
## 4.4. v-if/v-else/v-else-if > if/else/if chain

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
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTJ9LFwic3JjXCI6e1wic3RhcnRcIjoxMSxcImVuZFwiOjIzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjAsXCJlbmRcIjozNn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6NH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoyNSxcImVuZFwiOjMwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjMyLFwiZW5kXCI6MzV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjEyfSxcInNyY1wiOntcInN0YXJ0XCI6NTMsXCJlbmRcIjo2NX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjozNyxcImVuZFwiOjc4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjM4LFwiZW5kXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NjcsXCJlbmRcIjo3Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo3NCxcImVuZFwiOjc3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxMn0sXCJzcmNcIjp7XCJzdGFydFwiOjk1LFwiZW5kXCI6MTA3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjc5LFwiZW5kXCI6MTIwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjgwLFwiZW5kXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTA5LFwiZW5kXCI6MTE0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjExNixcImVuZFwiOjExOX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxMjEsXCJlbmRcIjoxNTJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTIyLFwiZW5kXCI6MTI1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTF9LFwic3JjXCI6e1wic3RhcnRcIjoxMzMsXCJlbmRcIjoxNDZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTQ4LFwiZW5kXCI6MTUxfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1NBQVdBLFk7WUFBWEMsQ0FBQ0MsRztjQUF3QkMsRztjQUV2QkMsRzthQUNjQyxZO1lBQWhCQyxDQUFDQyxHO2NBQTZCQyxHO2NBRTVCQyxHO2FBQ2NDLFk7WUFBaEJDLENBQUNDLEc7Y0FBNkJDLEc7Y0FFNUJDLEc7WUFDRkMsQ0FBQ0MsRztjQUFXQyxXO2NBRVZDLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IHYtaWY9XCJ0eXBlID09PSAnQSdcIj5cbiAgQVxuPC9kaXY+XG48ZGl2IHYtZWxzZS1pZj1cInR5cGUgPT09ICdCJ1wiPlxuICBCXG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwidHlwZSA9PT0gJ0MnXCI+XG4gIENcbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIE5vdCBBL0IvQ1xuPC9kaXY+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  nested if/else chains 1`] = `
## 4.9. v-if/v-else/v-else-if > nested if/else chains

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
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjExLFwiZW5kXCI6MTR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjk5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjEsXCJlbmRcIjo0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MzAsXCJlbmRcIjozM319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxOSxcImVuZFwiOjQxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjIwLFwiZW5kXCI6MjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MzcsXCJlbmRcIjo0MH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjYwLFwiZW5kXCI6NjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NDQsXCJlbmRcIjo3MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo0NSxcImVuZFwiOjQ4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjY3LFwiZW5kXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6NzQsXCJlbmRcIjo5Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo3NSxcImVuZFwiOjc4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjg4LFwiZW5kXCI6OTF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6OTUsXCJlbmRcIjo5OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjExNixcImVuZFwiOjExOX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxMDAsXCJlbmRcIjoyMDR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTAxLFwiZW5kXCI6MTA0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTM1LFwiZW5kXCI6MTM4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjEyNCxcImVuZFwiOjE0Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxMjUsXCJlbmRcIjoxMjh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTQyLFwiZW5kXCI6MTQ1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTY1LFwiZW5kXCI6MTY4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjE0OSxcImVuZFwiOjE3Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxNTAsXCJlbmRcIjoxNTN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTcyLFwiZW5kXCI6MTc1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjE3OSxcImVuZFwiOjE5N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxODAsXCJlbmRcIjoxODN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTkzLFwiZW5kXCI6MTk2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjIwMCxcImVuZFwiOjIwM319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoyMDUsXCJlbmRcIjozMDB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjA2LFwiZW5kXCI6MjA5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjMxLFwiZW5kXCI6MjM0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjIyMCxcImVuZFwiOjI0Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoyMjEsXCJlbmRcIjoyMjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjM4LFwiZW5kXCI6MjQxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjYxLFwiZW5kXCI6MjY0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjI0NSxcImVuZFwiOjI3Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoyNDYsXCJlbmRcIjoyNDl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjY4LFwiZW5kXCI6MjcxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjI3NSxcImVuZFwiOjI5M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoyNzYsXCJlbmRcIjoyNzl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6Mjg5LFwiZW5kXCI6MjkyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjI5NixcImVuZFwiOjI5OX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7U0FBV0EsRztZQUFYQyxDQUFDQyxHOztpQkFDWUMsRztvQkFBWEMsQ0FBQ0MsRztzQkFBaUJDLEc7cUJBQ0ZDLEc7b0JBQWhCQyxDQUFDQyxHO3NCQUFzQkMsRztvQkFDdkJDLENBQUNDLEc7c0JBQWFDLEc7O2NBQ2RDLEc7YUFDY0MsRztZQUFoQkMsQ0FBQ0MsRzs7aUJBQ1lDLEc7b0JBQVhDLENBQUNDLEc7c0JBQWlCQyxHO3FCQUNGQyxHO29CQUFoQkMsQ0FBQ0MsRztzQkFBc0JDLEc7b0JBQ3ZCQyxDQUFDQyxHO3NCQUFhQyxHOztjQUNkQyxHO1lBQ0ZDLENBQUNDLEc7O2lCQUNZQyxHO29CQUFYQyxDQUFDQyxHO3NCQUFpQkMsRztxQkFDRkMsRztvQkFBaEJDLENBQUNDLEc7c0JBQXNCQyxHO29CQUN2QkMsQ0FBQ0MsRztzQkFBYUMsRzs7Y0FDZEMsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxkaXYgdi1pZj1cImZvb1wiPlxuICA8ZGl2IHYtaWY9XCJmb29cIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2UtaWY9XCJiYXJcIj48L2Rpdj5cbiAgPGRpdiB2LWVsc2U+PC9kaXY+XG48L2Rpdj5cbjxkaXYgdi1lbHNlLWlmPVwiYmFyXCI+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuPGRpdiB2LWVsc2U+XG4gIDxkaXYgdi1pZj1cImZvb1wiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZS1pZj1cImJhclwiPjwvZGl2PlxuICA8ZGl2IHYtZWxzZT48L2Rpdj5cbjwvZGl2PlxuIl19
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  no if 1`] = `
## 4.5. v-if/v-else/v-else-if > no if

\`\`\`vue-html
<h1 v-else>Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MzF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNX0sXCJzcmNcIjp7XCJzdGFydFwiOjExLFwiZW5kXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MjgsXCJlbmRcIjozMH19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxFO01BQVVDLGU7TUFBaUJDLEUiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aDEgdi1lbHNlPlZ1ZSBpcyBhd2Vzb21lITwvaDE+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-if/v-else/v-else-if  single if statement 1`] = `
## 4.1. v-if/v-else/v-else-if > single if statement

\`\`\`vue-html
<h1 v-if="awesome">Vue is awesome!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjEwLFwiZW5kXCI6MTd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MCxcImVuZFwiOjM5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mn0sXCJzcmNcIjp7XCJzdGFydFwiOjEsXCJlbmRcIjozfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTV9LFwic3JjXCI6e1wic3RhcnRcIjoxOSxcImVuZFwiOjM0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mn0sXCJzcmNcIjp7XCJzdGFydFwiOjM2LFwiZW5kXCI6Mzh9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7U0FBVUEsTztZQUFWQyxDQUFDQyxFO2NBQWtCQyxlO2NBQWlCQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtaWY9XCJhd2Vzb21lXCI+VnVlIGlzIGF3ZXNvbWUhPC9oMT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-is default 1`] = `
## 12.1. v-is 

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
interface _Self extends InstanceType<typeof Example> {}
const __component_Tr = VueDX.internal.resolveComponent(__VueDX_components, "tr" as const, "Tr" as const);
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
        <__component_Tr data-vuedx-directive-is={VueDX.internal.checkDirective("is", __component_Tr, [
            {
               exp: MyComponent,
            },
          ])}>
          {VueDX.internal.checkSlots(__component_Tr, {
            default: () => {
              return (
                <>
                </>
              )
            },
          })}
        </__component_Tr>
      </tbody>
    </table>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6NzB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MTAsXCJlbmRcIjo2MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjoxMSxcImVuZFwiOjE2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjIyLFwiZW5kXCI6NTB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNH0sXCJzcmNcIjp7XCJzdGFydFwiOjIzLFwiZW5kXCI6MjV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo0fSxcInNyY1wiOntcInN0YXJ0XCI6MjYsXCJlbmRcIjozMH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTF9LFwic3JjXCI6e1wic3RhcnRcIjozMixcImVuZFwiOjQzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDJ9LFwic3JjXCI6e1wic3RhcnRcIjoyMyxcImVuZFwiOjI1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6OX0sXCJzcmNcIjp7XCJzdGFydFwiOjIzLFwiZW5kXCI6MjV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNH0sXCJzcmNcIjp7XCJzdGFydFwiOjQ3LFwiZW5kXCI6NDl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6NTUsXCJlbmRcIjo2MH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjo2NCxcImVuZFwiOjY5fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsSztNQUNDQyxDQUFDQyxLO1FBQ0NDLENBQUNDLGMsd0RBQUdDLEk7O29CQUFNQyxXOzs7V0FBVEMsMEM7WUFBQUMsUzs7Ozs7OztVQUF3QkMsYztRQUN6QkMsSztNQUNGQyxLIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRhYmxlPlxuICA8dGJvZHk+XG4gICAgPHRyIHYtaXM9XCJNeUNvbXBvbmVudFwiPjwvdHI+XG4gIDwvdGJvZHk+XG48L3RhYmxlPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-model  input 1`] = `
## 8.1. v-model > input

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
interface _Self extends InstanceType<typeof Example> {}
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = _ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <input data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("text", [
          {
             exp: foo,
          },
        ])} />
      <input type="number" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("number" ?? "text", [
          {
             exp: foo,
          },
        ])} />
      <input type="tel" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("tel" ?? "text", [
          {
             exp: foo,
          },
        ])} />
      <input type="checkbox" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("checkbox" ?? "text", [
          {
             exp: foo,
          },
        ])} />
      <input type="radio" data-vuedx-directive-model={VueDX.internal.checkInputModelDirective("radio" ?? "text", [
          {
             exp: foo,
          },
        ])} />
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxNixcImVuZFwiOjE5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjI0LFwiZW5kXCI6NjF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MjUsXCJlbmRcIjozMH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjozMSxcImVuZFwiOjQ0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6OH0sXCJzcmNcIjp7XCJzdGFydFwiOjM2LFwiZW5kXCI6NDR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo1NCxcImVuZFwiOjU3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjYyLFwiZW5kXCI6OTZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6NjMsXCJlbmRcIjo2OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjo2OSxcImVuZFwiOjc5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjc0LFwiZW5kXCI6Nzl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjo4OSxcImVuZFwiOjkyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjk3LFwiZW5kXCI6MTM2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjk4LFwiZW5kXCI6MTAzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NH0sXCJzcmNcIjp7XCJzdGFydFwiOjEwNCxcImVuZFwiOjExOX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjEwfSxcInNyY1wiOntcInN0YXJ0XCI6MTA5LFwiZW5kXCI6MTE5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTI5LFwiZW5kXCI6MTMyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjEzNyxcImVuZFwiOjE3M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjoxMzgsXCJlbmRcIjoxNDN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo0fSxcInNyY1wiOntcInN0YXJ0XCI6MTQ0LFwiZW5kXCI6MTU2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjE0OSxcImVuZFwiOjE1Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjE2NixcImVuZFwiOjE2OX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BQUFBLENBQUNDLEs7O2tCQUFlQyxHOzs7TUFDaEJDLENBQUNDLEssQ0FBTUMsSSxDQUFLQyxRLHFFQUFBQSxROztrQkFBa0JDLEc7OztNQUM5QkMsQ0FBQ0MsSyxDQUFNQyxJLENBQUtDLEsscUVBQUFBLEs7O2tCQUFlQyxHOzs7TUFDM0JDLENBQUNDLEssQ0FBTUMsSSxDQUFLQyxVLHFFQUFBQSxVOztrQkFBb0JDLEc7OztNQUNoQ0MsQ0FBQ0MsSyxDQUFNQyxJLENBQUtDLE8scUVBQUFBLE87O2tCQUFpQkMsRyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxpbnB1dCB2LW1vZGVsPVwiZm9vXCIgLz5cbjxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdi1tb2RlbD1cImZvb1wiIC8+XG48aW5wdXQgdHlwZT1cInRlbFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJmb29cIiAvPlxuPGlucHV0IHR5cGU9XCJyYWRpb1wiIHYtbW9kZWw9XCJmb29cIiAvPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-model  select/textarea 1`] = `
## 8.2. v-model > select/textarea

\`\`\`vue-html
<select v-model="foo">
  <option :value="foo">{{foo}}</option>
</select>
<textarea v-model="foo" />
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let foo = _ctx.foo;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <select data-vuedx-directive-model={VueDX.internal.checkModelDirective("select", [
          {
             exp: foo,
          },
        ])}>
        <option value={foo}>
          {foo}
        </option>
      </select>
      <textarea data-vuedx-directive-model={VueDX.internal.checkModelDirective("textarea", [
          {
             exp: foo,
          },
        ])} />
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6NzJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo2fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxNyxcImVuZFwiOjIwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjI1LFwiZW5kXCI6NjJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo2fSxcInNyY1wiOntcInN0YXJ0XCI6MjYsXCJlbmRcIjozMn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjozNCxcImVuZFwiOjM5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NDEsXCJlbmRcIjo0NH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjQ4LFwiZW5kXCI6NTF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo2fSxcInNyY1wiOntcInN0YXJ0XCI6NTUsXCJlbmRcIjo2MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjZ9LFwic3JjXCI6e1wic3RhcnRcIjo2NSxcImVuZFwiOjcxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjczLFwiZW5kXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo4fSxcInNyY1wiOntcInN0YXJ0XCI6NzQsXCJlbmRcIjo4Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjkyLFwiZW5kXCI6OTV9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxNOztrQkFBZ0JDLEc7OztRQUNmQyxDQUFDQyxNLENBQVFDLEssRUFBT0MsRztXQUFPQyxHO1VBQU9DLE07UUFDOUJDLE07TUFDRkMsQ0FBQ0MsUTs7a0JBQWtCQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHNlbGVjdCB2LW1vZGVsPVwiZm9vXCI+XG4gIDxvcHRpb24gOnZhbHVlPVwiZm9vXCI+e3tmb299fTwvb3B0aW9uPlxuPC9zZWxlY3Q+XG48dGV4dGFyZWEgdi1tb2RlbD1cImZvb1wiIC8+XG4iXX0=
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
interface _Self extends InstanceType<typeof Example> {}
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let onFocus = _ctx.onFocus;
  let value = _ctx.value;
  let $event = _ctx.$event;
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
      <input onFocus={VueDX.internal.checkDirective("on", "input", [
            {
              arg: "focus",
              exp: onFocus,
            },
          ])}  />
      <input onUpdate:value={VueDX.internal.checkDirective("on", "input", [
            {
              arg: "update:value",
              exp: ($event) => {
                value = $event
              },
            },
          ])}  />
      <input
        onEventName={VueDX.internal.checkDirective("on", "input", [
            {
              arg: "event-name",
            },
            {
              arg: "eventName",
            },
          ])}
        data-vuedx-directive-on={VueDX.internal.checkDirective("on", "input", [
          {
             arg: eventName, 
          },
          {
             exp: events,
          },
        ])} />
      <input
        onKeydown={VueDX.internal.checkDirective("on", "input", [
            {
              arg: "keydown",
              exp: fnName,
            },
            {
              arg: "keydown",
              exp: ($event) => {
                callMyFn($event)
              },
              modifiers: { left: true, },
            },
            {
              arg: "keydown",
              exp: $event => callMyFn($event),
              modifiers: { shift: true, left: true, },
            },
            {
              arg: "keydown",
              exp: ($event) => callMyFn($event),
              modifiers: { shift: true, right: true, },
            },
            {
              arg: "keydown",
              exp: () => callMyFn($event),
              modifiers: { shift: true, down: true, },
            },
            {
              arg: "keydown",
              exp: function myFunction($event) {
    callMyFn($event)
  },
              modifiers: { shift: true, up: true, },
            },
            {
              arg: "keydown",
              exp: function myFunction() {
    callMyFn($event)
  },
              modifiers: { ctrl: true, up: true, },
            },
          ])}
       />
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo1fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo3fSxcInNyY1wiOntcInN0YXJ0XCI6OCxcImVuZFwiOjEzfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo3fSxcInNyY1wiOntcInN0YXJ0XCI6MTUsXCJlbmRcIjoyMn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoyNyxcImVuZFwiOjY3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjI4LFwiZW5kXCI6MzN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNH0sXCJzcmNcIjp7XCJzdGFydFwiOjM1LFwiZW5kXCI6NDd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjE0fSxcInNyY1wiOntcInN0YXJ0XCI6NDksXCJlbmRcIjo2M319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo2OCxcImVuZFwiOjEyN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjo2OSxcImVuZFwiOjc0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTJ9LFwic3JjXCI6e1wic3RhcnRcIjo3NixcImVuZFwiOjg2fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTF9LFwic3JjXCI6e1wic3RhcnRcIjo4OCxcImVuZFwiOjk3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NH0sXCJzcmNcIjp7XCJzdGFydFwiOjk4LFwiZW5kXCI6MTAyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo5fSxcInNyY1wiOntcInN0YXJ0XCI6OTksXCJlbmRcIjoxMTB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjZ9LFwic3JjXCI6e1wic3RhcnRcIjoxMTcsXCJlbmRcIjoxMjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MTI4LFwiZW5kXCI6NDkxfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjEyOSxcImVuZFwiOjEzNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjoxMzgsXCJlbmRcIjoxNDV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjZ9LFwic3JjXCI6e1wic3RhcnRcIjoxNDcsXCJlbmRcIjoxNTN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo5fSxcInNyY1wiOntcInN0YXJ0XCI6MTU4LFwiZW5kXCI6MTY1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNn0sXCJzcmNcIjp7XCJzdGFydFwiOjE3MixcImVuZFwiOjE4OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjoxOTMsXCJlbmRcIjoyMDB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjI2fSxcInNyY1wiOntcInN0YXJ0XCI6MjEzLFwiZW5kXCI6MjM5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6OX0sXCJzcmNcIjp7XCJzdGFydFwiOjI0NCxcImVuZFwiOjI1MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mjh9LFwic3JjXCI6e1wic3RhcnRcIjoyNjUsXCJlbmRcIjoyOTN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo5fSxcInNyY1wiOntcInN0YXJ0XCI6Mjk4LFwiZW5kXCI6MzA1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyMn0sXCJzcmNcIjp7XCJzdGFydFwiOjMxOCxcImVuZFwiOjM0MH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjozNDUsXCJlbmRcIjozNTJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjU0fSxcInNyY1wiOntcInN0YXJ0XCI6MzYzLFwiZW5kXCI6NDE3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6OX0sXCJzcmNcIjp7XCJzdGFydFwiOjQyMixcImVuZFwiOjQyOX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDh9LFwic3JjXCI6e1wic3RhcnRcIjo0MzksXCJlbmRcIjo0ODd9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxLOzttQkFBT0MsTzttQkFBT0MsTzs7O01BQ2ZDLENBQUNDLEs7O21CQUFPQyxjOztnQkFBY0MsYzs7OztNQUN0QkMsQ0FBQ0MsSzs7O21CQUFPQyxZOzs7bUJBQVlDLFc7OzsrREFBVUMsSTs7a0JBQUNDLFM7OztrQkFBa0JDLE07OztNQUNqREMsQ0FBQ0MsSzs7O21CQUNFQyxTO21CQUFTQyxNOzs7bUJBQ1RDLFM7O2dCQUFjQyxnQjs7Ozs7bUJBQ2RDLFM7bUJBQW9CQywwQjs7OzttQkFDcEJDLFM7bUJBQXFCQyw0Qjs7OzttQkFDckJDLFM7bUJBQW9CQyxzQjs7OzttQkFDcEJDLFM7bUJBQWtCQztBQUFBQTtBQUFBQSxHOzs7O21CQUdsQkMsUzttQkFBaUJDO0FBQUFBO0FBQUFBLEciLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8aW5wdXQgQGZvY3VzPVwib25Gb2N1c1wiIC8+XG48aW5wdXQgQHVwZGF0ZTp2YWx1ZT1cInZhbHVlID0gJGV2ZW50XCIgLz5cbjxpbnB1dCBAZXZlbnQtbmFtZSBAZXZlbnROYW1lIEBbZXZlbnROYW1lXSB2LW9uPVwiZXZlbnRzXCIgLz5cbjxpbnB1dFxuICBAa2V5ZG93bj1cImZuTmFtZVwiXG4gIEBrZXlkb3duLmxlZnQ9XCJjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQubGVmdD1cIiRldmVudCA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQucmlnaHQ9XCIoJGV2ZW50KSA9PiBjYWxsTXlGbigkZXZlbnQpXCJcbiAgQGtleWRvd24uc2hpZnQuZG93bj1cIigpID0+IGNhbGxNeUZuKCRldmVudClcIlxuICBAa2V5ZG93bi5zaGlmdC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbiAgQGtleWRvd24uY3RybC51cD1cImZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7XG4gICAgY2FsbE15Rm4oJGV2ZW50KVxuICB9XCJcbi8+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-once default 1`] = `
## 11.1. v-once 

\`\`\`vue-html
<section v-once>{{ largeText }}</section>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let largeText = _ctx.largeText;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <section data-vuedx-directive-once={VueDX.internal.checkDirective("once", "section", [
        {
        },
      ])}>
      {largeText}
    </section>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo3fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo2fSxcInNyY1wiOntcInN0YXJ0XCI6OSxcImVuZFwiOjE1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo5fSxcInNyY1wiOntcInN0YXJ0XCI6MTksXCJlbmRcIjoyOH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjd9LFwic3JjXCI6e1wic3RhcnRcIjozMyxcImVuZFwiOjQwfX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxPLDBEQUFRQyxNOzs7O09BQVVDLFM7TUFBY0MsTyIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxzZWN0aW9uIHYtb25jZT57eyBsYXJnZVRleHQgfX08L3NlY3Rpb24+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-pre default 1`] = `
## 10.1. v-pre 

\`\`\`vue-html
<pre v-pre>{{ interpolation }}</pre>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MzZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyM30sXCJzcmNcIjp7XCJzdGFydFwiOjExLFwiZW5kXCI6MzB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MzIsXCJlbmRcIjozNX19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxHO01BQVVDLHVCO01BQXFCQyxHIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPHByZSB2LXByZT57eyBpbnRlcnBvbGF0aW9uIH19PC9wcmU+XG4iXX0=
\`\`\`


`

exports[`Baseline Spec v-show default 1`] = `
## 7.1. v-show 

\`\`\`vue-html
<h1 v-show="ok">Hello!</h1>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let ok = _ctx.ok;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <h1 data-vuedx-directive-show={VueDX.internal.checkDirective("show", "h1", [
        {
           exp: ok,
        },
      ])}>
      Hello!
    </h1>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6Mjd9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo2fSxcInNyY1wiOntcInN0YXJ0XCI6NCxcImVuZFwiOjEwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoyfSxcInNyY1wiOntcInN0YXJ0XCI6MTIsXCJlbmRcIjoxNH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjZ9LFwic3JjXCI6e1wic3RhcnRcIjoxNixcImVuZFwiOjIyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6Mn0sXCJzcmNcIjp7XCJzdGFydFwiOjI0LFwiZW5kXCI6MjZ9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUFBLENBQUNDLEUsMERBQUdDLE07O2dCQUFRQyxFOzs7TUFBSUMsTTtNQUFRQyxFIiwiZmlsZSI6Ii90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlIiwic291cmNlUm9vdCI6Ii90bXAvY29tcGlsZXItdHN4Iiwic291cmNlc0NvbnRlbnQiOlsiPGgxIHYtc2hvdz1cIm9rXCI+SGVsbG8hPC9oMT5cbiJdfQ==
\`\`\`


`

exports[`Baseline Spec v-slot  Invalid 1`] = `
## 9.1. v-slot > Invalid

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
interface _Self extends InstanceType<typeof Example> {}
const __component_Foo = VueDX.internal.resolveComponent(__VueDX_components, "Foo" as const, "Foo" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <__component_Foo>
      {VueDX.internal.checkSlots(__component_Foo, {
        foo: () => {
          return (
            <>
              <>
                A
              </>
            </>
          )
        },
        bar: ({bar}) => {
          return (
            <>
              <>
                {bar}
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
    </__component_Foo>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MTE3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTV9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6NH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjQzfSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxOSxcImVuZFwiOjIyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjgsXCJlbmRcIjozNX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoyMyxcImVuZFwiOjI0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NDksXCJlbmRcIjo1Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjU0LFwiZW5kXCI6NTl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MzgsXCJlbmRcIjo3OX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjYzLFwiZW5kXCI6NjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo0Mn0sXCJzcmNcIjp7XCJzdGFydFwiOjEsXCJlbmRcIjo0fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjgyLFwiZW5kXCI6MTEwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjkyLFwiZW5kXCI6OTl9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxNX0sXCJzcmNcIjp7XCJzdGFydFwiOjExMyxcImVuZFwiOjExNn19Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQUEsQ0FBQ0MsZTtPQUFBQywyQztRQUNZQyxHOzs7Y0FBWEMsQztnQkFBZUMsQzs7Ozs7UUFDSkMsRyxHQUFLQyxLOzs7Y0FBaEJDLEM7aUJBQXlCQyxHOzs7OztRQUYxQkMsMEM7O1lBR0NDLEM7Y0FBVUMsTzs7Ozs7TUFDVkMsZSIsImZpbGUiOiIvdG1wL2NvbXBpbGVyLXRzeC9FeGFtcGxlLnZ1ZSIsInNvdXJjZVJvb3QiOiIvdG1wL2NvbXBpbGVyLXRzeCIsInNvdXJjZXNDb250ZW50IjpbIjxGb28+XG4gIDx0ZW1wbGF0ZSAjZm9vPkE8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI2Jhcj1cIntiYXJ9XCI+e3tiYXJ9fTwvdGVtcGxhdGU+XG4gIDx0ZW1wbGF0ZT5JbnZhbGlkPC90ZW1wbGF0ZT5cbjwvRm9vPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-slot  use slots 1`] = `
## 9.2. v-slot > use slots

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
interface _Self extends InstanceType<typeof Example> {}
const __component_FooBar = VueDX.internal.resolveComponent(__VueDX_components, "FooBar" as const, "FooBar" as const);
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <>
      <__component_FooBar>
        {VueDX.internal.checkSlots(__component_FooBar, {
          default: () => {
            return (
              <>
                content
              </>
            )
          },
        })}
      </__component_FooBar>
      <__component_FooBar>
        {VueDX.internal.checkSlots(__component_FooBar, {
          default: ({foo}) => {
            return (
              <>
                {foo}
              </>
            )
          },
        })}
      </__component_FooBar>
      <__component_FooBar>
        {VueDX.internal.checkSlots(__component_FooBar, {
          other: ({foo}) => {
            return (
              <>
                {foo}
              </>
            )
          },
        })}
      </__component_FooBar>
      <__component_FooBar>
        {VueDX.internal.checkSlots(__component_FooBar, {
          default: () => {
            return (
              <>
                <>
                  content
                </>
              </>
            )
          },
          other: ({foo}) => {
            return (
              <>
                <>
                  {foo}
                </>
              </>
            )
          },
          another: (foo) => {
            return (
              <>
                <>
                  {
                    (foo)
                      ? <div>
                          {foo.bar}
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
      </__component_FooBar>
    </>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjR9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjEsXCJlbmRcIjo3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDZ9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjoxLFwiZW5kXCI6N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjd9LFwic3JjXCI6e1wic3RhcnRcIjo4LFwiZW5kXCI6MTV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxOH0sXCJzcmNcIjp7XCJzdGFydFwiOjE3LFwiZW5kXCI6MjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MjUsXCJlbmRcIjo2OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6MjYsXCJlbmRcIjozMn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjQ2fSxcInNyY1wiOntcInN0YXJ0XCI6MjYsXCJlbmRcIjozMn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjM0LFwiZW5kXCI6NDF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjo0MyxcImVuZFwiOjQ4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6NTMsXCJlbmRcIjo1Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6NjEsXCJlbmRcIjo2N319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjo2OSxcImVuZFwiOjExMH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6NzAsXCJlbmRcIjo3Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjQ2fSxcInNyY1wiOntcInN0YXJ0XCI6NzAsXCJlbmRcIjo3Nn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjc4LFwiZW5kXCI6ODN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjV9LFwic3JjXCI6e1wic3RhcnRcIjo4NSxcImVuZFwiOjkwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6OTUsXCJlbmRcIjo5OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6MTAzLFwiZW5kXCI6MTA5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjExMSxcImVuZFwiOjMxOH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjE4fSxcInNyY1wiOntcInN0YXJ0XCI6MTEyLFwiZW5kXCI6MTE4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDZ9LFwic3JjXCI6e1wic3RhcnRcIjoxMTIsXCJlbmRcIjoxMTh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjd9LFwic3JjXCI6e1wic3RhcnRcIjoxMzMsXCJlbmRcIjoxNDB9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MTIyLFwiZW5kXCI6MTU5fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6N30sXCJzcmNcIjp7XCJzdGFydFwiOjE0MSxcImVuZFwiOjE0OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjE3MyxcImVuZFwiOjE3OH19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwiY29weVwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NX0sXCJzcmNcIjp7XCJzdGFydFwiOjE4MCxcImVuZFwiOjE4NX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjoxNjIsXCJlbmRcIjoyMDV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoxODksXCJlbmRcIjoxOTJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjd9LFwic3JjXCI6e1wic3RhcnRcIjoyMTksXCJlbmRcIjoyMjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoyMjgsXCJlbmRcIjoyMzF9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6MjA4LFwiZW5kXCI6Mjg1fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjQ5LFwiZW5kXCI6MjUyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MX0sXCJzcmNcIjp7XCJzdGFydFwiOjIzOCxcImVuZFwiOjI3MX19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjN9LFwic3JjXCI6e1wic3RhcnRcIjoyMzksXCJlbmRcIjoyNDJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcImNvcHlcIixcImdlblwiOntcImxlbmd0aFwiOjd9LFwic3JjXCI6e1wic3RhcnRcIjoyNTYsXCJlbmRcIjoyNjN9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MjY3LFwiZW5kXCI6MjcwfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6NDJ9LFwic3JjXCI6e1wic3RhcnRcIjoxMTIsXCJlbmRcIjoxMTh9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjoxfSxcInNyY1wiOntcInN0YXJ0XCI6Mjg4LFwiZW5kXCI6MzA4fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6M30sXCJzcmNcIjp7XCJzdGFydFwiOjI4OSxcImVuZFwiOjI5Mn19IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjl9LFwic3JjXCI6e1wic3RhcnRcIjoyOTMsXCJlbmRcIjozMDJ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MzA0LFwiZW5kXCI6MzA3fX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJ0cmFuc2Zvcm1lZFwiLFwiZ2VuXCI6e1wibGVuZ3RoXCI6MTh9LFwic3JjXCI6e1wic3RhcnRcIjozMTEsXCJlbmRcIjozMTd9fSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQUFBQSxDQUFDQyxrQjtTQUFBQyw4QztVQUFBQyxTOzs7Z0JBQU9DLE87Ozs7O1FBQVNDLGtCO01BQ2pCQyxDQUFDQyxrQjtTQUFBQyw4QztVQUFRQyxPLEdBQVNDLEs7OztpQkFBVUMsRzs7Ozs7UUFBUUMsa0I7TUFDcENDLENBQUNDLGtCO1NBQUFDLDhDO1VBQVFDLEssR0FBT0MsSzs7O2lCQUFVQyxHOzs7OztRQUFRQyxrQjtNQUNsQ0MsQ0FBQ0Msa0I7U0FBQUMsOEM7VUFDWUMsTzs7O2dCQUFYQyxDO2tCQUFtQkMsTzs7Ozs7VUFDUkMsSyxHQUFPQyxLOzs7Z0JBQWxCQyxDO21CQUEyQkMsRzs7Ozs7VUFDaEJDLE8sR0FBU0MsRzs7O2dCQUFwQkMsQzs7cUJBQ2FDLEc7d0JBQVhDLENBQUNDLEc7MkJBQWlCQyxPOzBCQUFXQyxHOzs7Ozs7O1VBSmhDQywwQzs7Y0FNQ0MsQ0FBQ0MsRztnQkFBSUMsUztnQkFBV0MsRzs7OztRQUNoQkMsa0IiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8Rm9vQmFyPmNvbnRlbnQ8L0Zvb0Jhcj5cbjxGb29CYXIgI2RlZmF1bHQ9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0JhciAjb3RoZXI9XCJ7Zm9vfVwiPnt7IGZvbyB9fTwvRm9vQmFyPlxuPEZvb0Jhcj5cbiAgPHRlbXBsYXRlICNkZWZhdWx0PmNvbnRlbnQ8L3RlbXBsYXRlPlxuICA8dGVtcGxhdGUgI290aGVyPVwie2Zvb31cIj57e2Zvb319PC90ZW1wbGF0ZT5cbiAgPHRlbXBsYXRlICNhbm90aGVyPVwiZm9vXCI+XG4gICAgPGRpdiB2LWlmPVwiZm9vXCI+e3tmb28uYmFyfX08L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbiAgPGRpdj5leHRyYW5vdXM8L2Rpdj5cbjwvRm9vQmFyPlxuIl19
\`\`\`


`

exports[`Baseline Spec v-text default 1`] = `
## 5.1. v-text 

\`\`\`vue-html
<span v-text="msg"></span>
\`\`\`

\`\`\`tsx
/*<vuedx:diagnosticsIgnore>*/
import Example, { __VueDX_components, __VueDX_directives } from '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts'
interface _Self extends InstanceType<typeof Example> {}
export function _render(_ctx: _Self): any {
  /*<vuedx:templateGlobals>*/
  let msg = _ctx.msg;
  /*</vuedx:templateGlobals>*/
  /*<vuedx:tsx-competions-target/>*/<></>;
  _ctx./*<vuedx:ts-competions-target/>*/$;
  /*</vuedx:diagnosticsIgnore>*/

  return (
    <span data-vuedx-directive-text={VueDX.internal.checkDirective("text", "span", [
        {
           exp: msg,
        },
      ])}>
    </span>
  )
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi90bXAvY29tcGlsZXItdHN4L0V4YW1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmxhbmcudnVlLWh0bWwiXSwibmFtZXMiOlsiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjF9LFwic3JjXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjZ9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo0fSxcInNyY1wiOntcInN0YXJ0XCI6MSxcImVuZFwiOjV9fSIsIjs7O1Z1ZURYOntcImtpbmRcIjpcInRyYW5zZm9ybWVkXCIsXCJnZW5cIjp7XCJsZW5ndGhcIjo2fSxcInNyY1wiOntcInN0YXJ0XCI6NixcImVuZFwiOjEyfX0iLCI7OztWdWVEWDp7XCJraW5kXCI6XCJjb3B5XCIsXCJnZW5cIjp7XCJsZW5ndGhcIjozfSxcInNyY1wiOntcInN0YXJ0XCI6MTQsXCJlbmRcIjoxN319IiwiOzs7VnVlRFg6e1wia2luZFwiOlwidHJhbnNmb3JtZWRcIixcImdlblwiOntcImxlbmd0aFwiOjR9LFwic3JjXCI6e1wic3RhcnRcIjoyMSxcImVuZFwiOjI1fX0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBQSxDQUFDQyxJLDBEQUFLQyxNOztnQkFBUUMsRzs7O01BQU9DLEkiLCJmaWxlIjoiL3RtcC9jb21waWxlci10c3gvRXhhbXBsZS52dWUiLCJzb3VyY2VSb290IjoiL3RtcC9jb21waWxlci10c3giLCJzb3VyY2VzQ29udGVudCI6WyI8c3BhbiB2LXRleHQ9XCJtc2dcIj48L3NwYW4+XG4iXX0=
\`\`\`


`
