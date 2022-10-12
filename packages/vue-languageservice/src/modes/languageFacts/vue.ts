import type { HTMLDataV1 } from 'vscode-html-languageservice'

// valueSet 'v' is for void attributes

export const SFC_BLOCKS: HTMLDataV1 = {
  version: 1.1,
  tags: [
    {
      name: 'template',
      description: {
        kind: 'markdown',

        value: [
          'Each `*.vue` file can contain at most one top-level `<template>` block at a time.',
        ].join('\n'),
      },
      attributes: [],
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/sfc-spec.html#language-blocks',
        },
      ],
    },
    {
      name: 'script',
      description: {
        kind: 'markdown',
        value: [
          'Each `*.vue` file can contain at most one top-level `<script>` block at a time (excluding `<script setup>`).',
        ].join('\n'),
      },
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
        {
          name: 'src',
          description: {
            kind: 'markdown',
            value: [
              'The `src` attribute can be used to reference an external script file.',
            ].join('\n'),
          },
        },
      ],
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/sfc-spec.html#language-blocks',
        },
      ],
    },
    {
      name: 'style',
      description: {
        kind: 'markdown',
        value: ['A `*.vue` file can contain multiple `<style>` tags.'].join(
          '\n',
        ),
      },
      attributes: [
        {
          name: 'lang',
          values: [{ name: 'css' }, { name: 'scss' }, { name: 'less' }],
        },
        { name: 'scoped', valueSet: 'v' },
        { name: 'module', valueSet: 'v' },
        {
          name: 'src',
          description: {
            kind: 'markdown',
            value: [
              'The `src` attribute can be used to reference an external style file.',
            ].join('\n'),
          },
        },
      ],
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/sfc-spec.html#language-blocks',
        },
      ],
    },
  ],
  globalAttributes: [],
}
