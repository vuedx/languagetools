import { sync as glob } from 'fast-glob'
import FS from 'fs'
import Path from 'path'
import { VueTextDocument } from '../src/documents/VueTextDocument'
import { asFsUri } from '../src/utils'

expect.addSnapshotSerializer({
  test: (value) => typeof value === 'string',
  print: (value) => `${value}`,
})

describe('VueVirtualDocument/baseline', () => {
  const dir = Path.resolve(__dirname, '../../../samples')
  const fileNames = glob('**/*.vue', {
    cwd: dir,
    absolute: false,
    ignore: ['node_modules'],
  })

  test.each(fileNames)('%s', async (name) => {
    const fileName = Path.resolve(dir, name)
    const content = await FS.promises.readFile(fileName, {
      encoding: 'utf-8',
    })
    const document = VueTextDocument.create(
      asFsUri(fileName),
      'vue',
      0,
      content,
    )

    expect(document.getDocument('_render')?.getText()).toMatchSnapshot()
  })
})
