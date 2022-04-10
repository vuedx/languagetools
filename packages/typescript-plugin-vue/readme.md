<div align="center" style="text-align: center; margin-bottom: 72px">
  <img src="./logo.png" width="144" style="margin-top: 72px; margin-bottom: 16px" />
  <h1>TypeScript Plugin for Vue</h1>
  <p>Enables <code>.vue</code> file support in typescript (tsserver).</p>
</div>

## Goals

The goal of this plugin to improve developer experience in `.vue` files by providing features available in `.ts` file. To do so, a Vue SFC must:

1. Act as an ES module.
2. Type-check in `<template>` block.
3. Provide completion in `<template>` expressions. Both directive and interpolation.
4. Refactoring in `<script>` and `<template>` block.

### Act as an ES module

A `.vue` file should act as an ES module which means it can be imported in any `.ts` or `.js` file
without a shim file for typescript support.

### Type-check

The `<template>` block should be type-checked like TSX. The `tsc` utility does not support plugins; hence a dedicated type-check service (see `@vuedx/typecheck` package) is required.

### Provide completion

Semantic completion should be available in both `<script>` and `<template>` block. See the implementation section for details.

### Refactoring

The `<script>` block should support all refactors as provided in a `.ts` file. The template `block` should support variable renaming.

## Implementation

At the core of this plugin, there is a virtual file system that represents blocks in SFC as separate virtual files.

### Virtual File System

> The virtual file system is implemented in `@vuedx/vue-virtual-textdocument` package.

A `.vue` file is a collection of different contexts collocated and wrapped in blocks. For example, in the following file (see Fig. 1), the `<script>` block contains TypeScript code while `<template>` block contains HTML-like DSL code.

<figure>
<figcaption>Fig. 1: component.vue file</figcaption>

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return { foo: 0 }
  },
})
</script>

<template>
  <div>{{ foo }}</div>
</template>
```

</figure>

This file can be represented with two separate files: `component.vue____script.ts` and `component.vue____template.vue-html`, we will call them virtual files as they do not exist on the file system.

_Note: The dash character (-) in following code snippets represents whitespace._

<figure>
<figcaption>Fig. 2: <code>component.vue____script.ts</code> file</figcaption>

```js
------------------
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return { foo: 0 }
  }
})
```

</figure>

<figure>
<figcaption>Fig. 3: <code>component.vue____template.ts</code> file</figcaption>

```html
------------------
------------------------------------
-------------------------------
-----------
---------------------
---

-- --------- ----------
<div>{{ foo }}</div>
```

</figure>

The files are padded with spaces to have consistent positions with the source `.vue` file.

A derived virtual file is generated from `<template>` block for `render()` function: `component.vue____render.ts`

<figure>
<figcaption>Fig. 3: <code>component.vue____render.ts</code> file</figcaption>

```ts
import { h as _h } from 'vue'
import { JSX } from '<not decided yet>'
import _Ctx from './component.vue'

export function render(_ctx: _Ctx) {
  return h(JSX.intrinsic.div, null, [_ctx.foo])
}
```

</figure>

We will see `render()` function generation in further sections.

### TS render function

- Add type for render context.

  ```ts
  import _Ctx from './component.vue'

  export function render(_ctx: _Ctx) {
    // ...
  }
  ```

- Convert HTML tags to `h()` calls.

  ```html
  <div>foo</div>
  ```

  ```ts
  import { h } from 'vue'

  export function render(/*...*/) {
    return h('div', null, ['foo'])
  }
  ```

- Convert component tags to `h()` calls and add import statement

  ```html
  <template>
    <CompA>foo</CompA>
  </template>

  <script>
    import CompA from './comp-a.vue'

    export default {
      components: { CompA },
    }
  </script>
  ```

  ```ts
  import { h } from 'vue'
  import CompA from './comp-a.vue'

  export function render(/*...*/) {
    return h(CompA, null, {
      default: () => ['foo'],
    })
  }
  ```

- Convert unresolved components.

  ```html
  <CompB>foo</CompB>
  ```

  ```ts
  import { h, resolveComponent } from 'vue'

  export function render(_ctx /*...*/) {
    const CompB = resolveComponent('CompB') // Should return component type.

    return h(CompB, null, {
      default: () => ['foo'],
    })
  }
  ```

- Preserve web components

  ```html
  <web-comp>foo</web-comp>
  ```

  ```ts
  import { h } from 'vue'

  export function render(/*...*/) {
    return h('web-comp', null, ['foo'])
  }
  ```

- Convert `v-bind` and attrs to props object

  ```html
  <div :foo="test" bar="test"></div>
  ```

  ```ts
  import { h } from 'vue'

  export function render(_ctx /*...*/) {
    return h('div', { foo: _ctx.foo, bar: 'test' }, [])
  }
  ```

- Covert `v-model` to props object

  ```html
  <input v-model="foo" />
  ```

  ```ts
  import { h } from 'vue'

  export function render(_ctx /*...*/) {
    return h(
      'input',
      {
        modelValue: _ctx.foo,
        'onUpdate:modelValue': ($event) => (_ctx.foo = $event),
      },
      [],
    )
  }
  ```

- Convert `v-on` to onXxx prop

  ```html
  <comp-a @foo="onFoo" @bar="bar = $event" />
  ```

  ```ts
  import { h } from 'vue'

  export function render(_ctx /*...*/) {
    // ...
    return h(
      CompA,
      { onFoo: _ctx.onFoo, onBar: ($event) => (_ctx.bar = $event) },
      {},
    )
  }
  ```

- Convert `v-show` to style prop

  ```html
  <div v-show="foo" style="color: red"></div>
  ```

  ```ts
  import { h } from 'vue'

  export function render(_ctx /*...*/) {
    return h(
      'div',
      { style: [{ color: 'red' }, { display: _ctx.foo ? null : 'none' }] },
      [],
    )
  }
  ```

- Convert `v-if`, `v-else-if`, and `v-else` to conditional expression

  ```html
  <div v-if="foo">A</div>
  <div v-else-if="bar">B</div>
  <div v-else>C</div>
  ```

  ```ts
  import { h } from 'vue'

  export function render(_ctx /*...*/) {
    return _ctx.foo
      ? h('div', {}, ['A'])
      : _ctx.bar
      ? h('div', {}, ['B'])
      : h('div', {}, ['C'])
  }
  ```

- Convert `v-for` to renderList

  ```html
  <div v-for="(item, index) of items"></div>
  ```

  ```ts
  import { h, renderList } from 'vue'

  export function render(_ctx /*...*/) {
    return renderList(_ctx.items, (item, index) => h('div', {}, []))
  }
  ```

- Convert `v-text` and `v-html` to children

  ```html
  <div v-text="foo"></div>
  ```

  ```ts
  import { h } from 'vue'

  export function render(_ctx /*...*/) {
    return h('div', {}, [_ctx.foo])
  }
  ```

  ```html
  <div v-html="foo"></div>
  ```

  ```ts
  import { h } from 'vue'

  export function render(_ctx /*...*/) {
    return h('div', {}, [_ctx.foo])
  }
  ```

- No runtime for `v-pre`

- Drop `v-cloak` and `v-once`

- Custom directive to import statements

  ```html
  <template>
    <div v-custom:argument.modifier="foo"></div>
  </template>

  <script>
    import custom from './custom-directive'

    export default {
      directives: { custom },
    }
  </script>
  ```

  ```ts
  import { h, withDirectives } from 'vue'
  import custom from './custom-directive'

  export function render(_ctx /*...*/) {
    return withDirectives(h('div', {}, []), [
      [custom, _ctx.foo, 'argument', { modifier: true }],
    ])
  }
  ```

- Convert `v-slot` to slot object

- Unresolved custom directive

  ```html
  <div v-custom:argument.modifier="foo"></div>
  ```

  ```ts
  import { h, withDirectives, custom } from 'vue'

  export function render(_ctx /*...*/) {
    const custom = resolveDirective('custom')

    return withDirectives(h('div', {}, []), [
      [custom, _ctx.foo, 'argument', { modifier: true }],
    ])
  }
  ```

- Convert `<slot>` to renderSlot

  ```html
  <Foo>
    <slot name="xxx" :foo="foo" />
  </Foo>
  ```

  ```ts
  import { h, renderSlot } from 'vue'

  export function render(_ctx /*...*/) {
    return h(
      Foo,
      {},
      {
        default: () => renderSlot(_ctx.$slots, 'xxx', { foo: _ctx.foo }),
      },
    )
  }
  ```

### Completion

There are two sources of completion in template:

- Render Context
- `v-for` or `v-slot` context

We have to provide completions from both sources at any position. Hence, we use cursor position to generate fake completion positions.

```html
<div v-for="item of items">{{ foo + i█ }}</div>
```

```ts
import { h, renderList } from 'vue'

export function render(_ctx/*...*/) {
  _ctx.i█

  return renderList(_ctx.items, item => h('div', {}, [_ctx.foo + i█ ]))
}
```

The cursor after `foo + i` would generate two positions (marked by █) to get completion items.

## Plugin Architecture

![Plugin Architecture Diagram](./plugin-arch.png)

The plugin overrides few methods of the **Language Service Host**, the **Project Service** and the **Service Host**.

### Project Service

The plugin adds `.vue` extension to the host configuration of the project service. This enables auto discovery of `.vue` files.

The downside of this approach is that it triggers reload for every project. It happens once (in the lifespan of the language server) when the plugin is activated.

### Service Host

Service host provides filesystem APIs. We override some methods to provide seamless access to Vue virtual filesystem.

#### `watchFile()`

We collect all virtual file watchers and subscribe them to the containing `.vue` file.

#### `fileExists()`

We intercept `fileExists()` method to check virtual file existence in the Vue virtual filesystem.

#### `readFile()`

We intercept `readFile()` method to read virtual files from the Vue virtual filesystem.

### Language Service Host

We override module resolution algorithm to include `.vue` files.

#### `getScriptFilename()`

Replace `.vue` files to virtual files corresponding to `<script>` block and generated render function from `<template>` block.

#### `resolveModuleNames()`

Resolve `.vue` imports to the virtual file corresponding to the `<script>` block of the `.vue` file.

> Imports not ending in `.vue` are handled by default module resolution algorithm.

## Language Server

The Vue Language Server acts as a proxy and routes requests to the correct virtual file.

The incoming requests are from real files (`.vue` or `.ts`) which are forwarded to the actual source file (virtual or real) in TypeScript program. This requires transforming source position to generated code position.

On response from the TypeScript Language Server, the response is processed to replace virtual file references with their containing `.vue` files. And generated code positions are transformed to source positions (to produce correct highlights in case of diagnostics).

## Compiler Limitations

### SourceMap accuracy

To provide diagnostics and completions, we need accurate source maps. Sadly the VLQ notation used in sourcemap v3 does not work well with ranges, e.g., `v-for`, `v-if` or any custom directive breaks sourcemap unexpectedly.

We need an API to implement custom sourcemap format. If we allow overriding `addMapping`, a simple implementation can be a bi-direction map of source-generated code ranges.

> This is crucial for providing good developer experience and we need a better data structure to capture precise sourcemap.

### Custom export function

The compiler hard codes the `render()` function export. However, we need to inject type annotation for `_ctx` argument.

> There is a work-around for this as the generated `render()` function has arguments, i.e., `render(_ctx, _cache)`; which can be replaced with `render(_ctx: _Ctx··)` without affecting sourcemaps. (· represents space)

## Further explorations

### Detect `$slots` type interface

We can detect type interface of slots and that would help in completion of `v-slot` directive.

### Provide block completion

- Provide completion for `<script>`, `<template>`, `<style>`, `<preview>`, `<i18n>`

### CSS Integration

- Provide css identifier completion in `class` attribute
- Declare CSS modules type render (maybe for script block too?)


## Support

This package is part of [VueDX project](https://github.com/znck/vue-developer-experience), maintained by [Rahul Kadyan](https://github.com/znck). You can [💖 sponsor him](https://github.com/sponsors/znck) for continued development of this package and other VueDX tools.

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/znck/sponsors@main/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/znck/sponsors@main/sponsors.png'/>
  </a>
</p>
