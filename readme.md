# Vue Developer Experience 

[![build](https://travis-ci.org/znck/vue-developer-experience.svg?branch=master)](https://travis-ci.org/znck/vue-developer-experience) ![CI](https://github.com/znck/vue-developer-experience/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/znck/vue-developer-experience/branch/master/graph/badge.svg?token=EF8TMXJK2D)](https://codecov.io/gh/znck/vue-developer-experience/)

> Project Status: 🚨 Pre Alpha (alpha release target: 30 November 2020)

A set of tools for better developer experience.

## Packages

- [VS Code extension](./extensions) — provides syntax highlight and language support for .vue files. We can't use vetur because it would interfere with the functionality of this project.
- [TypeScript Plugin](./packages/typescript-plugin-vue) — enables TypeScript language server to understand .vue files.
- [Vue Virtual TextDocument](./packages/vue-virtual-textdocument) — creates a virtual file system to represent blocks in SFC as files.

## Roadmap

- [x] Virtual file system for blocks in .vue files.
- [x] TypeScript plugin to proxy requests to virtual files.
- [x] VS Code extension to load TypeScript plugin and syntax highligting.
- [ ] Test TypeScript language server functions.
- [ ] Transform template to a virtual TypeScript file (diagnostics and completions in expressions).
- [ ] Template language server to provide language features in template block.

## Demo

- Install dependencies - `pnpm install`
- Build - `pnpm run build`
- Start - `Launch Extension` task from VS Code debugger tasks
