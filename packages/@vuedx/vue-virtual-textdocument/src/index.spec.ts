import {
  parseVirtualFileUri,
  isVueFile,
  isVirtualFile,
  asUri,
  VueTextDocument,
  VirtualTextDocument,
} from './index'

describe('parseVirtualFileUri', () => {
  test.each([
    ['/foo/bar/component.vue', null],
    ['file:///foo/bar/component.vue', null],
    [
      '/foo/bar/component.vue____script.js',
      { uri: 'file:///foo/bar/component.vue', selector: { type: 'script' } },
    ],
    [
      'vue:///foo/bar/component.vue____script.js',
      { uri: 'file:///foo/bar/component.vue', selector: { type: 'script' } },
    ],
    [
      'vue://git/foo/bar/component.vue____script.js',
      { uri: 'file:///foo/bar/component.vue', selector: { type: 'script' } },
    ],
  ])('parseVirtualFileUri(%s)', (uri, result) => {
    expect(parseVirtualFileUri(uri)).toEqual(result)
  })
})

describe('isVueFile', () => {
  test.each([
    ['/foo/bar/component.vue', true],
    ['file:///foo/bar/component.vue', true],
    ['/foo/bar/component.vue____script.js', false],
    ['vue:///foo/bar/component.vue____script.js', false],
    ['vue://git/foo/bar/component.vue____script.js', false],
  ])('isVueFile(%s)', (uri, result) => {
    expect(isVueFile(uri)).toEqual(result)
  })
})

describe('isVirtualFile', () => {
  test.each([
    ['/foo/bar/component.vue', false],
    ['file:///foo/bar/component.vue', false],
    ['/foo/bar/component.vue____script', true],
    ['/foo/bar/component.vue____script.js', true],
    ['vue:///foo/bar/component.vue____script.js', true],
    ['vue://git/foo/bar/component.vue____script.js', true],
  ])('isVirtualFile(%s)', (uri, result) => {
    expect(isVirtualFile(uri)).toEqual(result)
  })
})

describe('asUri', () => {
  test.each([
    ['/foo/bar/component.vue', 'file:///foo/bar/component.vue'],
    ['file:///foo/bar/component.vue', 'file:///foo/bar/component.vue'],
    [
      '/foo/bar/component.vue____script',
      'vue:///foo/bar/component.vue____script',
    ],
    [
      '/foo/bar/component.vue____script.js',
      'vue:///foo/bar/component.vue____script.js',
    ],
    [
      'vue:///foo/bar/component.vue____script.js',
      'vue:///foo/bar/component.vue____script.js',
    ],
    [
      'vue://git/foo/bar/component.vue____script.js',
      'vue://git/foo/bar/component.vue____script.js',
    ],
  ])('asUri(%s)', (uri, result) => {
    expect(asUri(uri)).toEqual(result)
  })
})

describe('VueTextDocument', () => {
  const doc = VueTextDocument.create(
    'file:///component.vue',
    'vue',
    0,
    [
      '<script>',
      'export default {}',
      '</script>',
      '',
      '<template>',
      '  <div />',
      '</template>',
    ].join('\n')
  )

  test('parse script and template', () => {
    expect(doc.all()).toHaveLength(2)
  })

  test('get script virtual document', () => {
    const script = doc.getBlockDocument('script')!
    expect(script).toBeInstanceOf(VirtualTextDocument)
    expect(doc.getBlockDocument(doc.descriptor.script!)).toBe(script)
    expect(doc.getBlockDocument({ type: 'script' })).toBe(script)
    expect(script.uri).toBe('vue:///component.vue____script.js')
    expect(script.fsPath).toBe('/component.vue____script.js')
  })

  test('get template virtual document', () => {
    const template = doc.getBlockDocument('template')!
    expect(template).toBeInstanceOf(VirtualTextDocument)
    expect(doc.getBlockDocument(doc.descriptor.template!)).toBe(template)
    expect(doc.getBlockDocument({ type: 'template' })).toBe(template)
    expect(template.uri).toBe('vue:///component.vue____template.vue-html')
    expect(template.fsPath).toBe('/component.vue____template.vue-html')
  })

  test('encodes correct virtual document uri', () => {
    const template = doc.getBlockDocument('template')!
    expect(template).toBeInstanceOf(VirtualTextDocument)
    expect(
      doc.getBlockDocument(parseVirtualFileUri(template.uri)!.selector)
    ).toBe(template)
  })
})
