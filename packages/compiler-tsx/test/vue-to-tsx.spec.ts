import FS from 'fs'
import { encode } from 'sourcemap-codec'
import Path from 'path'
import { compile, compileWithDecodedSourceMap } from '../src/vue/compile'

describe('Vue to TSX compiler', () => {
  const dir = Path.join(__dirname, 'fixtures')
  const fixtures = FS.readdirSync(dir).filter((file) => file.endsWith('.vue'))

  test.each(fixtures)('%s', async (file) => {
    const fileName = Path.join(dir, file)
    const fixture = await FS.promises.readFile(fileName, 'utf-8')
    const result = compileWithDecodedSourceMap(fixture, {
      fileName,

      isTypeScript: true,
    })
    expect(result.code).toMatchSnapshot(file)
    await writeIfChanged(fileName.replace(/\.vue$/, '.tsx'), result.code)
    await writeIfChanged(
      fileName.replace(/\.vue$/, '.tsx.map'),
      JSON.stringify({
        version: 3,
        ...result.map,
        mappings: encode(result.map.mappings),
      }),
    )
    await writeIfChanged(
      fileName.replace(/\.vue$/, '.mappings.json'),
      `[${result.map.mappings
        .map((mapping) => JSON.stringify(mapping))
        .join(',\n')}]`,
    )
  })
})

async function writeIfChanged(
  fileName: string,
  content: string,
): Promise<void> {
  const oldContent = await FS.promises
    .readFile(fileName, 'utf-8')
    .catch(() => '')
  if (oldContent !== content) {
    await FS.promises.writeFile(fileName, content)
  }
}
