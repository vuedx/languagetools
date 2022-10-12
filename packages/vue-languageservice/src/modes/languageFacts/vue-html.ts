import type { HTMLDataV1 } from 'vscode-html-languageservice'

// valueSet 'v' is for void attributes

export const VUE_HTML_EXTENSIONS: HTMLDataV1 = {
  version: 1.1,

  tags: [
    {
      name: 'template',
      description: {
        kind: 'markdown',
        value: 'The `<template>` element is used to create fragment.',
      },
      attributes: [],
    },
    {
      name: 'component',
      description: {
        kind: 'markdown',
        value:
          "The `<component>` element is a component container. It renders the component specified by the `is` attribute. If the `is` attribute is not specified, the component is resolved based on the element's content.",
      },
      attributes: [
        {
          name: 'is',
          description: {
            kind: 'markdown',
            value: 'Specifies which component to render',
          },
        },
      ],
    },
    {
      name: 'slot',
      description: {
        kind: 'markdown',
        value:
          'The `<slot>` element is used to distribute content to named slots.',
      },
      attributes: [
        {
          name: 'name',
          description: {
            kind: 'markdown',
            value: 'Specifies the name of the slot.',
          },
        },
      ],
    },
  ],

  globalAttributes: [
    {
      name: 'v-text',
      description: {
        kind: 'markdown',
        value: "v-text directive — Update the element's text content.",
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-text',
        },
      ],
    },

    {
      name: 'v-html',
      description: {
        kind: 'markdown',
        value:
          "v-html directive — Update the element's [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML).",
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-html',
        },
      ],
    },
    {
      name: 'v-show',
      description: {
        kind: 'markdown',
        value:
          "v-show directive — Toggle the element's visibility based on the truthy-ness of the expression value.",
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-show',
        },
      ],
    },
    {
      name: 'v-if',
      description: {
        kind: 'markdown',
        value:
          'v-if directive — Conditionally render an element or a template fragment based on the truthy-ness of the expression value.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-if',
        },
      ],
    },
    {
      name: 'v-else',
      description: {
        kind: 'markdown',
        value:
          'v-else directive — Denote the "else block" for `v-if` or a `v-if` / `v-else-if` chain.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-else',
        },
      ],
      valueSet: 'v',
    },
    {
      name: 'else-v-if',
      description: {
        kind: 'markdown',
        value:
          'v-else-if directive — Denote the "else if block" for `v-if`. Can be chained.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-else-if',
        },
      ],
    },
    {
      name: 'v-for',
      description: {
        kind: 'markdown',
        value:
          'v-for directive — Render the element or template block multiple times based on the source data.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-for',
        },
      ],
    },
    {
      name: 'v-on',
      description: {
        kind: 'markdown',
        value: 'v-on directive — Attach an event listener to the element.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-on',
        },
      ],
    },
    {
      name: 'v-bind',
      description: {
        kind: 'markdown',
        value:
          'v-bind directive — Dynamically bind one or more attributes, or a component prop to an expression.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-bind',
        },
      ],
    },
    {
      name: 'v-model',
      description: {
        kind: 'markdown',
        value:
          'v-model directive — Create a two-way binding on a form input element or a component.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-model',
        },
      ],
    },
    {
      name: 'v-slot',
      description: {
        kind: 'markdown',
        value:
          'v-slot directive — Denote named slots or scoped slots that expect to receive props.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-slot',
        },
      ],
    },
    {
      name: 'v-pre',
      description: {
        kind: 'markdown',
        value:
          'v-pre directive — Skip compilation for this element and all its children.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-pre',
        },
      ],
      valueSet: 'v',
    },
    {
      name: 'v-once',
      description: {
        kind: 'markdown',
        value:
          'v-once directive — Render the element and component once only, and skip future updates.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-once',
        },
      ],
      valueSet: 'v',
    },
    {
      name: 'v-memo',
      description: {
        kind: 'markdown',
        value: 'v-memo directive — Memoize a sub-tree of the template.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-memo',
        },
      ],
    },
    {
      name: 'v-cloak',
      description: {
        kind: 'markdown',
        value:
          'v-cloak directive — Used to hide un-compiled template until it is ready.',
      },
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/built-in-directives.html#v-cloak',
        },
      ],
      valueSet: 'v',
    },
  ],

  valueSets: [
    {
      name: 'void',
      values: [],
    },
  ],
}
