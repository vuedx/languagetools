import { parseFileName, toFileName } from './fileName'

const baseFileName = '/foo/bar/baz.vue'
describe(`parseFileName()/toFileName()`, () => {
  test('fs scheme file', () => {
    const fileName = `^/vue${baseFileName}`
    const parsed = {
      type: 'scheme',
      fileName: baseFileName,
      scheme: 'vue',
    } as const

    expect(parseFileName(fileName)).toEqual(parsed)
    expect(toFileName(parsed)).toEqual(fileName)
  })
})
