import Path from 'path'
import FS from 'fs'
import { baseInspect } from './inspector'
import { InspectorOptions } from './interfaces'
import { ComponentPublicAPIInspectorPlugin } from './plugins/public-api'

describe('@vuedx/sfc-inspector', () => {
  const context = Path.resolve(__dirname, '__fixtures__')
  const files = FS.readdirSync(context)
  const options: InspectorOptions = {
    onError(error) {
      throw error
    },
    async load(id) {
      return {
        filename: id,
        content: await FS.promises.readFile(id, { encoding: 'utf8' }),
      }
    },
    async resolve(imported, importee) {
      return Path.resolve(Path.dirname(imported), imported)
    },
    plugins: [ComponentPublicAPIInspectorPlugin],
  }

  async function doInspect(fileName: string) {
    const absoluteFilePath = Path.resolve(context, fileName)
    const source = await options.load(absoluteFilePath)
    const { info } = await baseInspect(source, options)

    return { filename: fileName, source: source.content, info }
  }

  describe(`inspect()`, () => {
    test(`props: array`, async () => {
      const { info } = await doInspect('props-array.vue')

      expect(info.props).toHaveLength(2)
    })

    test(`props: object`, async () => {
      const { info } = await doInspect('props-object.vue')

      expect(info.props).toHaveLength(4)
    })

    files.forEach(file =>
      test(`snapshot(${file})`, async () => {
        const result = await doInspect(file)

        expect(result).toMatchSnapshot()
      })
    )
  })
})

expect.addSnapshotSerializer({
  test() {
    return true
  },
  serialize({ source, info }) {
    return `${source}\n<api-doc lang="json">\n${JSON.stringify(
      info,
      null,
      2
    )}\n</api-doc>`
  },
})
