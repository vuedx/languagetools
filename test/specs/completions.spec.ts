import { createEditorContext, getProjectPath } from '../support/helpers'
import { TestServer } from '../support/TestServer'

describe('completions', () => {
  const server = new TestServer()
  const ctx = createEditorContext(
    server,
    getProjectPath('typescript-diagnostics'),
  )

  beforeAll(
    async () =>
      await server.sendCommand('configure', {
        preferences: {
          providePrefixAndSuffixTextForRename: true,
          allowRenameOfImportPath: true,
          includePackageJsonAutoImports: 'auto',
        },
      }),
  )

  afterAll(async () => await server.close())

  test('suggests open tag', async () => {
    const editor = await ctx.open('src/test-completions-tag.vue')
    editor.setCursor({ line: 5, character: 3 })

    const completionInfo = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })

    const names = completionInfo.entries.map((entry) => entry.name)
    expect(names).toContain('a')
    expect(names).toContain('FixtureAttrs')
  })

  test('suggests auto import', async () => {
    const editor = await ctx.open('src/test-completions-tag.vue')
    editor.setCursor({ line: 5, character: 3 })

    const completionInfo = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
      includeExternalModuleExports: true,
      includeInsertTextCompletions: true,
    })

    const entry = completionInfo.entries.find(
      (entry) => entry.name === 'FixtureScript',
    )

    assert(entry)

    const details = await server.completionEntryDetails({
      ...editor.fileAndLocation,
      entryNames: [
        {
          name: entry.name,
          source: entry.source,
          data: entry.data,
        },
      ],
    })

    expect(details).toEqual([
      expect.objectContaining({ name: 'FixtureScript' }),
    ])

    const textChanges = details[0]?.codeActions?.[0]?.changes?.[0]?.textChanges
    assert(textChanges)
    await editor.edit(textChanges)
    expect(editor.document.getText()).toEqual(
      expect.stringContaining(
        `import FixtureAttrs from './fixture-attrs.vue';\n` +
          `import FixtureScript from './fixture-script.vue';`,
      ),
    )
  })

  test('suggests attributes for components', async () => {
    const editor = await ctx.open('src/test-completions-attribute.vue')
    editor.setCursor({ line: 10, character: 17 })

    const completionInfo = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })

    const completions = completionInfo.entries.map((entry) => entry.name)
    expect(completions).toEqual([
      'a',
      ':a',
      'b',
      ':b',
      'c',
      ':c',
      'class',
      ':class',
      'key',
      ':key',
      '@a',
      '@b',
      '@c',
      '@vnodeBeforeMount',
      '@vnodeBeforeUnmount',
      '@vnodeBeforeUpdate',
      '@vnodeMounted',
      '@vnodeUnmounted',
      '@vnodeUpdated',
      'ref',
      ':ref',
      'style',
      ':style',
    ])
  })

  test('suggests props for components', async () => {
    const editor = await ctx.open('src/test-completions-attribute.vue')
    editor.setCursor({ line: 10, character: 17 })
    editor.type(':')
    const response = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })

    const completions = response.entries.map((entry) => entry.name)
    expect(completions).toEqual(['a', 'b', 'c', 'class', 'key', 'ref', 'style'])
  })

  test('suggests props for components with prefix', async () => {
    const editor = await ctx.open('src/test-completions-attribute.vue')
    editor.setCursor({ line: 10, character: 17 })
    editor.type(':c')
    const response = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })

    const completions = response.entries.map((entry) => entry.name)
    expect(completions).toContain('class')
  })

  test('suggests events for components', async () => {
    const editor = await ctx.open('src/test-completions-attribute.vue')
    editor.setCursor({ line: 10, character: 17 })
    editor.type('@')
    const response = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })
    const completions = response.entries.map((entry) => entry.name)
    expect(completions).toEqual([
      'a',
      'b',
      'c',
      'vnodeBeforeMount',
      'vnodeBeforeUnmount',
      'vnodeBeforeUpdate',
      'vnodeMounted',
      'vnodeUnmounted',
      'vnodeUpdated',
    ])
  })

  test('suggests attributes for elements', async () => {
    const editor = await ctx.open('src/test-completions-attribute.vue')
    editor.setCursor({ line: 14, character: 9 })

    const response = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })
    const completions = response.entries.map((entry) => entry.name)
    expect(completions).toContain('type')
    expect(completions).toContain(':type')
    expect(completions).toContain('@click')
  })

  test('suggests attributes for elements with prefix', async () => {
    const editor = await ctx.open('src/test-completions-attribute.vue')
    editor.setCursor({ line: 14, character: 9 })
    editor.type(':ty')
    const response = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })
    const completions = response.entries.map((entry) => entry.name)
    expect(completions).toContain('type')
  })

  test('suggests events for elements', async () => {
    const editor = await ctx.open('src/test-completions-attribute.vue')
    editor.setCursor({ line: 14, character: 9 })
    editor.type('@')
    const response = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })
    const completions = response.entries.map((entry) => entry.name)
    expect(completions).toContain('click')
  })

  test('suggests events for elements with prefix', async () => {
    const editor = await ctx.open('src/test-completions-attribute.vue')
    editor.setCursor({ line: 14, character: 9 })
    editor.type('@c')
    const response = await server.completionInfo({
      ...editor.fileAndLocation,
      triggerKind: 1,
    })
    const completions = response.entries.map((entry) => entry.name)
    expect(completions).toContain('click')
  })
})

function assert(value: any): asserts value {
  expect(value).toBeTruthy()
}
