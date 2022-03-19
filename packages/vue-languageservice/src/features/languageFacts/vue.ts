import type { HTMLDataV1 } from 'vscode-html-languageservice'

export const data: HTMLDataV1 = {
  version: 1.1,
  tags: [
    {
      name: 'template',
      attributes: [
        {
          name: 'lang',
          values: [{ name: 'html' }, { name: 'pug' }],
        },
      ],
    },
    {
      name: 'script',
      attributes: [
        {
          name: 'lang',
          values: [
            { name: 'js' },
            { name: 'ts' },
            { name: 'jsx' },
            { name: 'tsx' },
          ],
        },
        { name: 'setup', valueSet: 'v' },
      ],
    },
    {
      name: 'style',
      attributes: [
        {
          name: 'lang',
          values: [
            { name: 'css' },
            { name: 'scss' },
            { name: 'less' },
            { name: 'stylus' },
            { name: 'postcss' },
            { name: 'sass' },
          ],
        },
        { name: 'scoped', valueSet: 'v' },
        { name: 'module', valueSet: 'v' },
      ],
    },
  ],
  globalAttributes: [
    {
      name: 'src',
    },
    {
      name: 'lang',
      // all other embedded languages
      values: [
        // template
        { name: 'html' },
        { name: 'pug' },
        // script
        { name: 'js' },
        { name: 'ts' },
        { name: 'jsx' },
        { name: 'tsx' },
        // style
        { name: 'css' },
        { name: 'scss' },
        { name: 'less' },
        { name: 'stylus' },
        { name: 'postcss' },
        { name: 'sass' },
        // custom block
        { name: 'md' },
        { name: 'json' },
        { name: 'jsonc' },
        { name: 'yaml' },
        { name: 'toml' },
        { name: 'gql' },
        { name: 'graphql' },
      ],
    },
  ],
}
