# Vue Language Features

This extension provides features like type checking, completion, renaming and refactoring for `.vue` files by extending TypeScript extension.

## Support

This extension is part of [VueDX project](https://github.com/znck/vue-developer-experience), maintained by [Rahul Kadyan](https://github.com/znck). You can [💖 sponsor him](https://github.com/sponsors/znck) for continued development of this extension and other VueDX tools.

## Features

### Module Resolution

- Import Vue files in JS/TS files.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-module-resolution.dark.gif" height="360" />
  </div>
  <br>
- Use named exports from Vue files. 
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-module-named-exports.dark.gif" height="360" />
  </div>
  <br>
- Infers global components in the project. 
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-inferred-global-components.dark.gif" height="360" />
  </div>
  <br>
- Accepts configuration for global component resolution. 
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-configured-global-components.dark.gif" height="360" />
  </div>
  <br>

### Completion

- Suggests Vue files in import statement.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-suggest-in-import.dark.gif" height="360" />
  </div>
  <br>
- Suggests named exports from Vue files.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-suggest-named-exports.dark.gif" height="360" />
  </div>
  <br>
- Auto import components from Vue files.  
  **NOTE:** _This feature requires a `tsconfig.json` or `jsconfig.json` file in the project._
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-auto-import-components.dark.gif" height="360" />
  </div>
  <br>

### Quick Fix

- Import missing from Vue files.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-quickfix-import-missing.dark.gif" height="360" />
  </div>
  <br>


### Definition

- Goto component definition.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-goto-component-definition.dark.gif" height="360" />
  </div>
  <br>
- Goto prop definition.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-goto-prop-definition.dark.gif" height="360" />
  </div>
  <br>
- Goto expression definition.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-goto-variable-definition.dark.gif" height="360" />
  </div>
  <br>

### Renaming

- Rename prop
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-prop.dark.gif" height="360" />
  </div>
  <br>
- Rename data
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-data.dark.gif" height="360" />
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-data-2.dark.gif" height="360" />
  </div>
  <br>
- Rename computed
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-computed.dark.gif" height="360" />
  </div>
  <br>
- Rename method
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-method.dark.gif" height="360" />
  </div>
  <br>
- Rename variables/functions in `setup()`
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-setup.dark.gif" height="360" />
  </div>
  <br>
- Rename component or Vue file
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-component.dark.gif" height="360" />
  </div>
  <br>

### Refactoring

- Extract expression as a function in `setup()` function. It automatically adds `.value` when required.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-setup-function.dark.gif" height="360" />
  </div>
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-setup-function-with-ref.dark.gif" height="360" />
  </div>
  <br>
- Extract expression as a computed value in `setup()` function. It automatically adds `.value` when required.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-setup-computed.dark.gif" height="360" />
  </div>
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-setup-computed-with-ref.dark.gif" height="360" />
  </div>
  <br>
- Extract expression as a method (options API). It automatically add `this` in expressions.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-rename-method.dark.gif" height="360" />
  </div>
  <br>
- Extract expression as a computed property (options API). It automatically add `this` in expressions.
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-refactor-computed-property.dark.gif" height="360" />
  </div>
  <br>
- Organize imports and remove unused imports
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-refactor-organise-imports.dark.gif" height="360" />
  </div>
  <br>
- Add variables and functions to `return` statement of `setup()` function 
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-add-to-return.dark.gif" height="360" />
  </div>
  <br>
- Extract selected template as a component in current directory or components directories (configured using `vueconfig.json`)
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-extract-to-current-directory.dark.gif" height="360" />
  </div>
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-extract-to-other-directory.dark.gif" height="360" />
  </div>
  <br>
- Keep `v-for` (on root node of selection) in current component when extracting
  <div>
    <img src="https://raw.githubusercontent.com/znck/vue-developer-experience/docs/extensions/vscode-vue-language-features/demo/feature-extract-to-component-keep-v-for.dark.gif" height="360" />
  </div>
  <br>

## Known Issues

- Required Vue 3.0+
- Works better if `tsconfig.json` or `jsconfig.json`
- Diagnostics messages complain about JSX/TSX
- Prop rename does work in all cases

---

> Made with 💚 for Vue Developers.  
> — [Rahul Kadyan](https://znck.me) ([znck0](https://twitter.com/znck0))
