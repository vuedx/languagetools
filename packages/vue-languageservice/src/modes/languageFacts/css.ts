import type { CSSDataV1 } from 'vscode-css-languageservice'

export const VUE_CSS_EXTENSIONS: CSSDataV1 = {
  version: 1.1,
  properties: [],
  atDirectives: [],
  pseudoClasses: [
    {
      name: 'deep',
      description: 'Deep selector in scoped CSS',
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/sfc-css-features.html#deep-selectors',
        },
      ],
    },
    {
      name: 'global',
      description: 'Global selector in scoped CSS',
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/sfc-css-features.html#global-selectors',
        },
      ],
    },
    {
      name: 'slotted',
      description: 'Slotted selector in scoped CSS',
      references: [
        {
          name: 'Vue.js Docs',
          url: 'https://vuejs.org/api/sfc-css-features.html#slotted-selectors',
        },
      ],
    },
  ],
  pseudoElements: [],
}
