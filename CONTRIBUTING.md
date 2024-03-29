# Contributing

## Development Setup

This project uses [pnpm](https://pnpm.js.org/), if you don't have `pnpm` run `npm install --global pnpm`.

1. Install dependencies — `pnpm install`
2. Run development watching build - `pnpm run watch`
3. Run `Extension: VS Code` launch task from VS Code debug panel

[![Development Setup Demo](https://img.youtube.com/vi/lVIhkSays9g/0.jpg)](https://www.youtube.com/watch?v=lVIhkSays9g)

## Reading Code

Start in [typescript-plugin-vue](./packages/typescript-plugin-vue/src/index.ts), then follow imports and [ask questions](https://github.com/vuedx/languagetools/discussions).

## Publishing stable release

- Make sure extension versions are updated in [packages/typescript-plugin-vue/package.json](./packages/typescript-plugin-vue/package.json) and [packages/vscode-vue-languageservice/package.json](./packages/vscode-vue-languageservice/package.json).
- Create a git tag with the version number.
- Push the tag to GitHub.
