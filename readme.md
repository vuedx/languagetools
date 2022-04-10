<div align="center">

<table border="0">  
  <tr>
  <td align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features">
      <img src="./extensions/vscode-vue-language-features/logo.png" width="96" />
    </a>
   
  </td>
</tr>
</table>

# VueDX

A set of tools for better developer experience aka Vue Developer Experience or VueDX.

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/vuedx/languagetools/CI?label=CI&logo=github&style=for-the-badge)](https://github.com/vuedx/languagetools/actions/workflows/ci.yaml?query=branch%3Amain)
[![Codecov](https://img.shields.io/codecov/c/github/vuedx/languagetools?label=Coverage&logo=codecov&style=for-the-badge&token=EF8TMXJK2D)](https://app.codecov.io/gh/vuedx/languagetools)
[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/znck.vue-language-features?label=VS+Code&logo=visualstudiocode&style=for-the-badge)](https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features)
[![Open VSX Version](https://img.shields.io/open-vsx/v/znck/vue-language-features?label=OpenVSX&style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC%2FxhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACplBMVEUAAADAYPHBYO%2BuIunBYO63QuumD%2BXCYe3BYO%2FBXu%2BoEOamDuW%2FAP%2FBX%2B%2BvLeilD%2BTDWvDBX%2B%2B%2BWO6mDuamDuWhDeTAYO6rHuelDuWqVf%2FAYO%2B7TeymDuWmDuWkC%2BO%2FYu7BYO%2BnFOWmDeXAX%2B%2B1OeulDeXBYe3BYO%2FBXe%2BmDuSmDuSfAN%2FAYO%2BvJ%2BimD%2BbGVePCYO%2B8U%2B2mDuWmDuWnCuLAYe6oGuamDubBYO%2B4R%2BumDuWmDebBXu%2FBYO%2FBX%2B%2BnEuWmDuWAAP%2FAX%2B%2BxMemmDeTFXfPBYO%2B%2FWu6nD%2BWmDuWkEu3AYO%2BtIOemDeW%2FgP%2FAYO%2B7UO6mDuWoDeTAXu6qFuamDuWmDua0MualD%2BamEeOjCuDAXe6mDuWiDOimDuWqC%2Bq2QOulD%2BWmD%2BWnDeSoF%2BWmDua2ANuoD%2BanD%2Ba8Ue6mDuanDeX%2FAP%2BmDuWnDuWtJOilDuWlDuamD%2BS%2FXO%2BmD%2BWzGualDuWmDeWiF%2BjAYe6zNemmDuSlDuanDuXAX%2B%2BoEuanEuWlDuWmD%2BWlEObBYO%2B5SeymDeamDuXBXeyqGuilDObCYPC%2BVu6qAP%2BmDeWmDuXBX%2B%2BvKOinD%2BbVVf%2FBYO%2FAXe%2BnD%2BWiD%2BilD%2BGmDuWmDuWfEN%2FBYPC1OuqnDuamDua8ZPTBYO%2BoFeWmD%2BWoDOajDeXCX%2B%2B7Tu2mDuWmDuXCYfDBYO%2BsHuemDuWlDuPCX%2B%2BlDuOqANWmDuWnDuXCYe6mDeTBX%2FC%2FWe2uDOizN%2BqzNuqzN%2BnAYe%2FAYO%2F%2FgP%2FBYO%2FBYPC%2FYO3CXvHCYO%2B%2FYOrBYO%2FBYO%2FCXOvCYe7CYPDBYO%2FCYO%2B2bf%2FCYO%2FDYe7CX%2B%2FBX%2B%2FEX%2B3AYO%2FCYO%2FBYO%2B%2FYO%2FCYfDBYe%2FBX%2B%2FCX%2FDBYO%2B9Y%2B%2FCYe%2FCYO%2FMZubBYO%2BmDuX%2F%2F%2F%2FzXBgvAAAA33RSTlMANcyBuMpFKvr53tQEk8BpEevr8e0TasORA9DX%2FfstPP7RvavETx319eXdCIK%2FeAng4vfzGlnIocHO%2Fjwx%2FPzazAKbwV8W7%2B7t6A5ywYcE1Nv5JknC7qAzZi4Z3PIW4hjKd52Zy9wHMjTd%2Bk4BwsTAvFtW8ukK4eMLacKQg3%2F91h319h%2BQ0qunKcY%2Bt%2BUD0M5Ov2UG2fbkIRHr6RB3xYKNF%2FDQ5Cknnte3ujL9wsZKwzYG2dtcc2ZkFqzCq2FdAsnHODaiGPHyGXl12twHUEy7%2ByuSjekQZM4%2BpvYfgX0KJdvwBQAAAAFiS0dE4V8Iz6YAAAAHdElNRQfmAxMROTVMFlBAAAACxklEQVRYw8WX9XMTQRTHH1agQIvTQgrBrRAo3uLurkVboEAbpGjRUqRoseKuRQoUd3d3t9s%2FhbtccllL8u7CDN9fsjdzn8%2Fc7Oy%2B9wLwj5IvvzQF8IaCiiSFSAhaULiIyBcNJcWKow0lREEYISQcLShZiudLl1EFZcuhDeV5QQWiJQItiKzI8pVsLkFUZbShip3m7VWJnmpoAVSnBTWIJzXRglq1vXyduoagXn20IdoraEC8aYgWOBp5%2BMYxlKBJU7ShmUfQnNBpgd%2FHljrfiuFJbBxa0LqNxrdtxwpI%2Bw5oQ0dN0Inw6YwWdOmqKN26C4IePdGGXorSm4jpgxb07dc%2FSiIYMBBtGDR4iCxD0YL%2FnmHDpRkBEI%2FiHSNDJVtIRsXD6DFjMYJoZZxMkACQSMYjeK0kTBD5iUkwyUZskwMLtKI0JVkQpIBzqvozzRmI18vidJ6fAZDqWswMwLsL86zZLK8W5jlzXat5af4F893lZAErWAiwyL1c7Jc3mtOSdJpXm9PSDPd62XJ%2FghVGSV0ZSwnU9phpPKzyw6%2BmGvQaL6826DjKt9a3YB3VVtZnGEQIZG2gvmdjli9%2BE9MZN3uATIBwZku3%2BOCztzKCbdv112N2wM5djGD3HrlgL9fc9%2Bmv7weI4I7VASl%2F8BAnsB%2FWXj6SBkf5k518TCbIEQac49p8kApwQrgZJyX8qVxxRDpNyBknpEgu91mBd%2BaJvDoj2c7B%2BQsSwcUkXnBJkSUsESCByHJZOANXZLl6DeD6DVluAjq3pN92Gy%2B4c1fC3wtYmajctwt87gMTPMBDQZBjiodHjzn%2ByVNzAnjGCZ6b5CH7BcO%2FfGVWAK8ZwRvTPPt35q0Fnq6W795bEcAHQ%2FDREu%2FtGJ8%2BWxMYPeuLRd7TNb9GWhW4%2B%2FY3y7w%2BOXwPgtdmlx8%2FgxHAL%2BV3UDw48v4EJwDpJfoLlsxsRX69068AAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMTlUMTc6NTc6NTIrMDA6MDB3z6MeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTE5VDE3OjU3OjUyKzAwOjAwBpIbogAAAABJRU5ErkJggg%3D%3D)](https://open-vsx.org/extension/znck/vue-language-features)

</div>

<br>
<br>
<br>
<br>

## Getting Started

- [Vue Syntax Highlight](./extensions/vscode-vue) — provides syntax highlight — [Extension](https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features)
- [Vue Language Features](./extensions/vscode-vue-language-features) — provides typescript integration for VS Code
  - [VS Code](https://marketplace.visualstudio.com/items?itemName=znck.vue)
  - [Open VSX](https://open-vsx.org/extension/znck/vue-language-features)
  - [VIM]()

### Packages

- [@vuedx/compiler-sfc](./packages/compiler-sfc) — a light weight build of `@vue/compiler-sfc` (only `parse()` functionality is provided)
- [@vuedx/compiler-tsx](./packages/compiler-tsx) — a `<template>` to representational `TSX` compiler (generated TSX may not be functional but ensures type consistency)
- [@vuedx/projectconfig](./packages/projectconfig) — a json config file to define project preferences
- [@vuedx/template-ast-types](./packages/template-ast-types) — a collection of utility functions to work with `<template>` AST, think `@babel/types` but for Vue
- [@vuedx/typecheck](./packages/typecheck) — a command line tool to check types, functionally equivalent to `tsc --noEmit` but includes .vue support
- [@vuedx/typescript-plugin-vue](./packages/typescript-plugin-vue) — enables TypeScript language server to understand `.vue` files
<!--EOL:Packages-->

## Contributing

- [Code of Conduct](CODE_OF_CONDUCT.md)
- [How to Build](CONTRIBUTING.md)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/znck/sponsors@main/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/znck/sponsors@main/sponsors.svg'/>
  </a>
</p>
