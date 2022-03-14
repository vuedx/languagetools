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

  test('virtual script block file', () => {
    const fileName = `${baseFileName}+vue&type=script&lang.ts`
    const parsed = {
      type: 'virtual',
      fileName: baseFileName,
      blockType: 'script',
      blockLang: 'ts',
      blockIndex: undefined,
      setup: undefined,
      query: undefined,
    } as const

    expect(parseFileName(fileName)).toEqual(parsed)
    expect(toFileName(parsed)).toEqual(fileName)
  })

  test('virtual script setup block file', () => {
    const fileName = `${baseFileName}+vue&type=script&setup&lang.ts`
    const parsed = {
      type: 'virtual',
      fileName: baseFileName,
      blockType: 'script',
      blockLang: 'ts',
      blockIndex: undefined,
      setup: true,
      query: undefined,
    } as const

    expect(parseFileName(fileName)).toEqual(parsed)
    expect(toFileName(parsed)).toEqual(fileName)
  })

  test('virtual template block file', () => {
    const fileName = `${baseFileName}+vue&type=template&lang.vue-html`
    const parsed = {
      type: 'virtual',
      fileName: baseFileName,
      blockType: 'template',
      blockLang: 'vue-html',
      blockIndex: undefined,
      setup: undefined,
      query: undefined,
    } as const

    expect(parseFileName(fileName)).toEqual(parsed)
    expect(toFileName(parsed)).toEqual(fileName)
  })

  test('virtual style block file', () => {
    const fileName = `${baseFileName}+vue&type=style&index=0&scoped&lang.css`
    const parsed = {
      type: 'virtual',
      fileName: baseFileName,
      blockType: 'style',
      blockLang: 'css',
      blockIndex: 0,
      setup: undefined,
      query: {
        scoped: true,
      },
    } as const

    expect(parseFileName(fileName)).toEqual(parsed)
    expect(toFileName(parsed)).toEqual(fileName)
  })

  test('virtual style module block file', () => {
    const fileName = `${baseFileName}+vue&type=style&index=0&module=$style&scoped&lang.css`
    const parsed = {
      type: 'virtual',
      fileName: baseFileName,
      blockType: 'style',
      blockLang: 'css',
      blockIndex: 0,
      setup: undefined,
      query: {
        module: '$style',
        scoped: true,
      },
    } as const

    expect(parseFileName(fileName)).toEqual(parsed)
    expect(toFileName(parsed)).toEqual(fileName)
  })
})
