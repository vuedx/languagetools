import { TS } from '../../../interfaces'

export const BUILTIN_DIRECTIVES: TS.CompletionEntry[] = []

export const BUILTIN_DIRECTIVES_DETAIL: Record<
  string,
  TS.CompletionEntryDetails
> = {
  'v-show': {
    name: 'v-show',
    kind: 'JSX attribute' as TS.ScriptElementKind.jsxAttribute,
    kindModifiers: 'directive',
    displayParts: [],
    documentation: [
      {
        text: `[See documentation](https://vuejs.org)`,
        kind: 'markdown',
      },
    ],
    tags: [{ name: 'version', text: '3.0.1' }],
  },
}
