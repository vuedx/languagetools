# Vue Developer Experience / VueDX 

[![build](https://travis-ci.org/znck/vue-developer-experience.svg?branch=master)](https://travis-ci.org/znck/vue-developer-experience) ![CI](https://github.com/znck/vue-developer-experience/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/znck/vue-developer-experience/branch/master/graph/badge.svg?token=EF8TMXJK2D)](https://codecov.io/gh/znck/vue-developer-experience/)

> Project Status: 🚨 Pre Alpha (alpha release target: 30 November 2020)

A set of tools for better developer experience.

## VueDX includes:

- [Analyze](./packages/vue-virtual-textdocument) — statically analyzes Vue components and provides API info.
- [Compiler SFC](./packages/compiler-sfc) — a light weight build of `@vue/compiler-sfc` (only `parse()` functionality is provided).
- [Compiler TSX](./packages/compiler-tsx) — a `<template>` to representational `TSX` compiler (generated TSX may not be functional but ensures type consistency).
- [Template AST Types](./packages/template-ast-types) — a collection of utility functions to work with `<template>` AST, think `@babel/types` but for Vue.
- [Typecheck](./packages/typecheck) — a command line tool to check types, functionally equivalent to `tsc --noEmit` but includes .vue support.
- [TS Plugin](./packages/typescript-plugin-vue) — enables TypeScript language server to understand .vue files.
- [TS Plugin for Vetur](./packages/typescript-vetur) — provides missing features to vetur, same as **TS Plugin** but disables duplicate features. [#2145](https://github.com/vuejs/vetur/pull/2145)
- [VS Code extension](./extensions/vscode) — provides syntax highlight and typescript integration.
- [Vue Virtual TextDocument](./packages/vue-virtual-textdocument) — creates a virtual file system to represent blocks in SFC as files.
