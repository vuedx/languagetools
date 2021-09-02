import * as FS from 'fs'
import { addSerializer } from 'jest-specific-snapshot'
import * as Path from 'path'
import { compile, Options } from '../src'

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
  options?: Options
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
            const result = compile(fixture.template, {
              filename: '/tmp/compiler-tsx/Example.vue',
              selfSrc: '/tmp/compiler-tsx/Example.vue?vue&type=script&lang.ts',
              components: {},
              directives: {},
              ...fixture.options,
            })

            const output =
              `## ${i + 1}.${j + 1}. ${group.name.trim()} ${
                fixture.name.trim() === '' ? '' : `> ${fixture.name.trim()}`
              }\n\n` +
              '```vue-html\n' +
              `${fixture.template}` +
              '```\n\n' +
              '```tsx\n' +
              `${result.code}\n` +
              `//# sourceMappingURL=data:application/json;base64,${Buffer.from(
                JSON.stringify(result.map),
              ).toString('base64')}\n` +
              '```\n\n'

            expect(output).toMatchSpecificSnapshot(snapshotFile)
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
        return parseFloat(a.substr(3)) - parseFloat(b.substr(3))
      })

      snapshots.forEach((snapshot) => {
        content += snapshot + '\n\n'
      })

      FS.writeFileSync(snapshotFile.replace(/\.js$/, '.md'), content)
    })
  })
})
