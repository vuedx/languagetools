import type { HTMLDataV1 } from 'vscode-html-languageservice'

export const data: HTMLDataV1 = {
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
        { name: 'setup', values: [] },
      ],
    },
    {
      name: 'style',
      description: {
        kind: 'markdown',
        value: [
          'A single `*.vue` file can contain multiple `<style>` tags.',
        ].join('\n'),
      },
      attributes: [
        {
          name: 'lang',
          values: [{ name: 'css' }, { name: 'scss' }, { name: 'less' }],
        },
        { name: 'scoped', values: [] },
        { name: 'module' },
      ],
    },
  ],
  globalAttributes: [],
}
