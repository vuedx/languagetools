<div align="center" style="margin-bottom: 72px">

<table border="0">  
  <tr>
  <td align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features">
      <img src="./extensions/vscode-vue-language-features/logo.png" width="96" />
    </a>
    <h3>
      <a href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features">Language Features</a>
    </h3>
    </a>
  </td>

  <td align="center">
    <a href="https://github.com/znck/preview">
      <img src="./assets/preview.png" width="96" />
    </a>
    <h3>
      <a href="https://github.com/znck/preview">Preview</a>
    </h3>
  </td>

  <td align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=znck.vue">
      <img src="./extensions/vscode-vue/logo.png" width="96" />
    </a>
    <h3>
      <a href="https://marketplace.visualstudio.com/items?itemName=znck.vue">Syntax Highlight</a>
    </h3>
  </td>
</tr>
</table>

<br>
<br>
<br>

# VueDX

A set of tools for better developer experience aka Vue Developer Experience or VueDX.

![CI](https://github.com/vuedx/languagetools/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/vuedx/languagetools/branch/main/graph/badge.svg?token=EF8TMXJK2D)](https://codecov.io/gh/vuedx/languagetools/)

</div>

## VueDX includes:

### VS Code Extensions

- [Preview](https://github.com/znck/preview/tree/main/extension) — a quick-prototyping and component management tool — [insiders](https://marketplace.visualstudio.com/items?itemName=znck.preview-insiders) [stable](https://marketplace.visualstudio.com/items?itemName=znck.preview)
- [Vue Syntax Highlight](./extensions/vscode-vue) — provides syntax highlight — [insiders](https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features-insiders) [stable](https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features)
- [Vue Language Features](./extensions/vscode-vue-language-features) — provides typescript integration for VS Code — [insiders](https://marketplace.visualstudio.com/items?itemName=znck.vue-insiders) [stable](https://marketplace.visualstudio.com/items?itemName=znck.vue)

### Packages

- [@vuedx/compiler-sfc](./packages/compiler-sfc) — a light weight build of `@vue/compiler-sfc` (only `parse()` functionality is provided)
- [@vuedx/compiler-tsx](./packages/compiler-tsx) — a `<template>` to representational `TSX` compiler (generated TSX may not be functional but ensures type consistency)
- [@vuedx/monorepo-tools](./packages/monorepo-tools) — Utility functions for monorepo management
- [@vuedx/preview-compiler](https://github.com/znck/preview/tree/main/preview-compiler) — Add support for `<preview>` block in .vue files
- [@vuedx/preview-provider](https://github.com/znck/preview/tree/main/preview-provider) — Utilities for mocking and stubbing components in `<preview>` block
- [@vuedx/preview-shell](https://github.com/znck/preview/tree/main/preview-provider) — A webapp to provide sandbox environment for Vue components
- [@vuedx/preview-test-utils](https://github.com/znck/preview/tree/main/preview-provider) — Reuse `<preview>` blocks for unit test fixtures
- [@vuedx/projectconfig](./packages/projectconfig) — a json config file to define project preferences
- [@vuedx/template-ast-types](./packages/template-ast-types) — a collection of utility functions to work with `<template>` AST, think `@babel/types` but for Vue
- [@vuedx/typecheck](./packages/typecheck) — a command line tool to check types, functionally equivalent to `tsc --noEmit` but includes .vue support
- [@vuedx/typescript-plugin-vue](./packages/typescript-plugin-vue) — enables TypeScript language server to understand `.vue` files
- [@vuedx/typescript-vetur](./packages/typescript-vetur) — provides missing features to vetur, same as **TS Plugin** but for Vetur [#2145](https://github.com/vuejs/vetur/pull/2145)
- [@vuedx/vue-virtual-textdocument](./packages/vue-virtual-textdocument) — creates a virtual file system to represent blocks in SFC as files
<!--EOL:Packages-->

## Contributing

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [How to Build](CONTRIBUTING.md)
