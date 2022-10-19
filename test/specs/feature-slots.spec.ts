import { Position } from 'vscode-languageserver-textdocument'
import {
  createEditorContext,
  getProjectPath,
  toRange,
} from '../support/helpers'
import { TestServer } from '../support/TestServer'
import { first, trimIndent } from '@vuedx/shared'

describe('slots', () => {
  const server = new TestServer()
  const ctx = createEditorContext(
    server,
    getProjectPath('typescript-diagnostics'),
  )
  const file = 'src/test-slots.vue'
  const position: Position = { line: 10, character: 0 }

  afterAll(async () => await server.close())
  afterEach(async () => await ctx.closeAll())

  describe('diagnostics', () => {
    test('slots are optional', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      editor.type(
        trimIndent(`
          <SlotsDefault  />
          <SlotsDynamic slot="foo" />
          <SlotsGeneric :items="[1,2,3]" />
          <SlotsNamed />
          <SlotsNone />
          <SlotsParameterized foo="bar" />
        `),
      )
      const diagnostics = await ctx.getDiagnostics(file)
      expect(diagnostics.semantic).toHaveLength(0)
    })

    test('invalid slot name', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      editor.type(
        trimIndent(`
          <SlotsDefault #invalid></SlotsDefault>
          <SlotsDynamic slot="foo" #invalid></SlotsDynamic>
          <SlotsGeneric :items="[1,2,3]" #invalid></SlotsGeneric>
          <SlotsNamed #invalid></SlotsNamed>
          <SlotsNone #invalid></SlotsNone>
          <SlotsParameterized foo="bar" #invalid></SlotsParameterized>
        `),
      )
      const diagnostics = await ctx.getDiagnostics(file)
      expect(diagnostics.semantic).toHaveLength(6)
      diagnostics.semantic.forEach((diagnostic, index) => {
        const range = toRange(diagnostic)
        expect(range.start.line).toEqual(position.line + index)
        const offset = editor.document.offsetAt(range.start)
        expect(editor.document.getText().slice(offset, offset + 7)).toEqual(
          'invalid',
        )
      })
    })

    test('valid slot values', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      editor.type(
        trimIndent(`
          <SlotsDefault #default></SlotsDefault>
          <SlotsDynamic slot="foo" #bar></SlotsDynamic>
          <SlotsGeneric :items="[1,2,3]" #default="{value}">{{value}}</SlotsGeneric>
          <SlotsNamed #foo></SlotsNamed>
          <SlotsNone></SlotsNone>
          <SlotsParameterized foo="bar" #foo></SlotsParameterized>
        `),
      )
      const diagnostics = await ctx.getDiagnostics(file)
      expect(diagnostics.semantic).toHaveLength(0)
    })

    test('duplicate slots', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      editor.type(
        trimIndent(`
          <SlotsParameterized foo="bar">
            <template #default="{value}">{{value}}</template>
            <template #default="{value}">{{value}}</template>
          </SlotsParameterized>
        `),
      )
      const diagnostics = await ctx.getDiagnostics(file)
      expect(diagnostics.semantic).toHaveLength(1)
      expect(first(diagnostics.semantic)).toMatchObject({
        text: expect.stringContaining(
          'cannot have multiple properties with the same name',
        ),
      })
    })

    test('multiple slots', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      editor.type(
        trimIndent(`
          <SlotsParameterized foo="bar">
            <template #default="{value}">{{value}}</template>
            <template #foo="{value,today}">{{value}}{{today}}</template>
          </SlotsParameterized>
        `),
      )
      const diagnostics = await ctx.getDiagnostics(file)
      expect(diagnostics.semantic).toHaveLength(0)
    })

    test('invalid slot parameter', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      editor.type(
        trimIndent(`
          <SlotsParameterized foo="bar">
            <template #default="{value,invalid}">{{value}}</template>
          </SlotsParameterized>
        `),
      )
      const diagnostics = await ctx.getDiagnostics(file)
      expect(diagnostics.semantic).toHaveLength(1)
      expect(first(diagnostics.semantic)).toMatchObject({
        text: expect.stringContaining(
          `Property 'invalid' does not exist on type '{ value: string; }'.`,
        ),
      })
    })
  })

  describe('quickInfo', () => {
    test('slot parameter type', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      editor.type(
        trimIndent(`
          <SlotsParameterized foo="bar">
            <template #default="{value}">{{value}}</template>
          </SlotsParameterized>
        `),
      )
      editor.setCursor({ line: 11, character: 26 })
      const quickInfo = await server.quickInfo(editor.fileAndLocation)
      expect(quickInfo).toMatchObject({
        displayString: '(parameter) value: string',
      })
    })

    test('generic slot parameter type', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      editor.type(
        trimIndent(`
          <SlotsGeneric :items="[1,2,3]">
            <template #default="{value}">{{value}}</template>
          </SlotsGeneric>
        `),
      )
      editor.setCursor({ line: 11, character: 26 })
      const quickInfo = await server.quickInfo(editor.fileAndLocation)
      expect(quickInfo).toMatchObject({
        displayString: '(parameter) value: number',
      })
    })
  })

  describe('completions', () => {
    test('slot name', async () => {
      const editor = await ctx.open(file)
      editor.setCursor(position)
      const text = `<SlotsNamed #`
      await editor.type(text)
      editor.setCursor({ line: position.line, character: text.length })
      const completions = await server.completionInfo(editor.fileAndLocation)
      expect(completions).toMatchObject({
        entries: [
          expect.objectContaining({ name: 'default' }),
          expect.objectContaining({ name: 'foo' }),
        ],
      })
    })
  })
})
