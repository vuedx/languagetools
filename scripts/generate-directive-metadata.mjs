import { writeFile } from 'fs/promises'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const response = await fetch(
  'https://raw.githubusercontent.com/vuejs/docs/main/src/api/built-in-directives.md',
)

const content = await response.text()
const directives = Object.fromEntries(
  content
    .slice(content.indexOf('## '))
    .replace(/\]\(\./g, '](https://vuejs.org/api/')
    .replace(/\]\(\//g, '](https://vuejs.org/')
    .replace(/:::.*\n((?:.|\n)*?):::/gm, (_, content) =>
      String(content)
        .split('\n')
        .map((line) => `> ${line}`)
        .join('\n'),
    )
    .split(/^## (?=v-)/gm)
    .filter(Boolean)
    .map((directive) => {
      const index = directive.indexOf('\n')
      const name = directive
        .trimLeft()
        .slice(0, index)
        .replace(/[ ].*$/, '')
      return [
        name.slice(2),
        [
          {
            kind: 'text',
            text: `### ${name} directive\n\n${directive
              .slice(index, directive.indexOf('- **Example'))
              .trim()}\n\n`,
          },
          {
            kind: 'text',
            text: `See https://vuejs.org/api/built-in-directives.html#${name}`,
          },
        ],
      ]
    }),
)

await writeFile(
  resolve(
    __dirname,
    '../packages/vue-languageservice/src/features/languageFacts/vue-builtin-directives.json',
  ),
  JSON.stringify(directives, null, 2),
)
