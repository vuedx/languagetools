/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { invariant } from '@vuedx/shared'
import * as FS from 'fs'
import { addSerializer } from 'jest-specific-snapshot'
import * as Path from 'path'
import { compile, CompileOptions } from '../src'

addSerializer({
  serialize(val: any) {
    return val.toString()
  },
  test() {
    return true
  },
})

interface Fixture {
  name: string
  template: string
  options?: CompileOptions
}

function parseFixtures(content: string) {
  const root = {
    name: '',
    children: [] as Array<{ name: string; children: Fixture[] }>,
  }
  const lines = content.split(/\r?\n/)

  for (let i = 0; i < lines.length; ++i) {
    if (lines[i].trim() === '') continue
    if (lines[i].startsWith('# ')) {
      root.name = lines[i].substr(2)
    }
    if (lines[i].startsWith('## ')) {
      root.children.push({
        name: lines[i].substr(3),
        children: [],
      })
    }
    if (lines[i].startsWith('### ')) {
      root.children[root.children.length - 1].children.push({
        name: lines[i].substr(3),
        template: '',
      })
    }

    if (lines[i].startsWith('```vue-html')) {
      const group = root.children[root.children.length - 1]
      if (
        group.children.length === 0 ||
        group.children[group.children.length - 1].template !== ''
      ) {
        group.children.push({ name: '', template: '' })
      }

      const fixture = group.children[group.children.length - 1]
      for (i++; i < lines.length; ++i) {
        if (lines[i].startsWith('```')) {
          ++i
          break
        }

        fixture.template += lines[i] + '\n'
      }

      while (i < lines.length) {
        if (lines[i].startsWith('#') || lines[i].startsWith('```')) break
        ++i
      }

      if (i < lines.length) {
        if (lines[i].startsWith('```json')) {
          let content = ''
          for (i++; i < lines.length; ++i) {
            if (lines[i].startsWith('```')) {
              ++i
              break
            }

            content += lines[i]
          }

          try {
            fixture.options = JSON.parse(content)
          } catch (error) {
            invariant(error instanceof Error)
            error.message = `${String(error.message)} on line ${i}`

            throw error
          }
        } else --i
      }
    }
  }

  return root
}

;['baseline.md'].forEach((fixtureFile) => {
  const contents = FS.readFileSync(
    Path.resolve(__dirname, './fixtures/', fixtureFile),
    'utf-8',
  )
  const snapshotFile = Path.resolve(
    __dirname,
    '__snapshots__',
    fixtureFile.replace(/\.md$/, '.js'),
  )
  const root = parseFixtures(contents)

  describe(root.name, () => {
    root.children.forEach((group, i) => {
      describe(group.name, () => {
        group.children.forEach((fixture, j) => {
          test(fixture.name === '' ? 'default' : fixture.name, () => {
            const result = compile(
              `<template>\n${fixture.template}\n</template>`,
              {
                fileName: '/tmp/compiler-tsx/Example.vue',
                isTypeScript: true,
                ...fixture.options,
              },
            )

            const map = JSON.stringify(result.map)
            const output =
              `## ${i + 1}.${j + 1}. ${group.name.trim()} ${
                fixture.name.trim() === '' ? '' : `> ${fixture.name.trim()}`
              }\n\n` +
              '```vue-html\n' +
              `${fixture.template}` +
              '```\n\n' +
              '```tsx\n' +
              `${result.code}\n` +
              '```\n\n' +
              `[Open in SourceMap Visualizer](https://evanw.github.io/source-map-visualization/#${
                // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error
                // @ts-ignore
                btoa(
                  `${result.code.length}\0${utf16ToUTF8(result.code)}${
                    map.length
                  }\0${utf16ToUTF8(map)}`,
                )
              })` +
              '\n\n'

            expect(output).toMatchSpecificSnapshot(snapshotFile)
          })
        })
      })
    })
  })

  afterAll(() => {
    const snapshots = Array.from(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      Object.values(require(snapshotFile) as Record<string, string>),
    ).map((snapshot) => snapshot.trim())
    let content = `# ${root.name}\n\n`

    snapshots.sort((a, b) => {
      return parseFloat(a.slice(3)) - parseFloat(b.slice(3))
    })

    snapshots.forEach((snapshot) => {
      content += snapshot + '\n\n'
    })

    FS.writeFileSync(snapshotFile.replace(/\.js$/, '.md'), content)
  })
})

function utf16ToUTF8(x: string): string {
  return unescape(encodeURIComponent(x))
}
