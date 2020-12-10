module.exports = {
  'packages/*/src/**/*.ts': ['eslint --cache --fix', 'prettier --write'],
  'extensions/*/src/**/*.ts': ['eslint --cache --fix', 'prettier --write'],
  '**/*.{js,jsx,json,tsx,vue,yml,yaml}': ['prettier --write'],
  'samples/**/*.vue': [
    'jest -u ./packages/vue-virtual-textdocument/test/baseline.spec.ts',
    'git add **/*.snap',
  ],
  'extensions/vscode-vue-language-features/readme.md': () => [
    'cp extensions/vscode-vue-language-features/readme.md extensions/coc-vue/readme.md',
    'git add extensions/coc-vue/readme.md',
  ],
}
