import { createEditorContext, getProjectPath } from '../support/helpers'
import { TestServer } from '../support/TestServer'

describe('project', () => {
  const server = new TestServer()
  const projects = ['typescript-diagnostics'] as const

  afterAll(async () => await server.close())
  describe.each(projects)('%s', (project) => {
    const editor = createEditorContext(server, getProjectPath(project))

    afterAll(async () => await editor.closeAll())

    test('checks exports in <script setup>', async () => {
      await editor.open('src/script-setup.vue')
      const diagnostics = await editor.getDiagnostics('src/script-setup.vue')

      expect(diagnostics.semantic).toMatchObject(
        [
          { text: 'A <script setup> block cannot have exports.' },
          { text: 'A <script setup> block cannot have exports.' },
          { text: 'A <script setup> block cannot have default exports.' },
        ].map((item) => expect.objectContaining(item)),
      )
    })

    test.each(['script', 'script-setup'])(
      'checks prop types when using %s',
      async (kind) => {
        await editor.open(`src/${kind}-prop-wrong-type.vue`)
        const diagnostics = await editor.getDiagnostics(
          `src/${kind}-prop-wrong-type.vue`,
        )

        expect(diagnostics.semantic).toMatchObject(
          [
            { text: `Type 'number' is not assignable to type 'string'.` },
            {
              text: `Type 'string' is not assignable to type 'number | undefined'.`,
            },
            {
              text: expect.stringContaining(
                `Type '{ bar: string; }' is not assignable to type '{ foo?: string | undefined; }'.`,
              ),
            },
            { text: `Type 'number' is not assignable to type 'string'.` },
            {
              text: `Type 'string' is not assignable to type 'number | undefined'.`,
            },
            {
              text: expect.stringContaining(
                `Type '{ bar: string; }' is not assignable to type '{ foo?: string | undefined; }'.`,
              ),
            },
            { text: `Type 'number' is not assignable to type 'string'.` },
            {
              text: `Type 'string' is not assignable to type 'number | undefined'.`,
            },
            {
              text: expect.stringContaining(
                `Type '{ bar: string; }' is not assignable to type '{ foo?: string | undefined; }'.`,
              ),
            },
          ].map((item) => expect.objectContaining(item)),
        )
      },
    )

    test('diagnostics work aftere lang change', async () => {
      await editor.open('src/script-lang-change.vue')

      const before = await editor.getDiagnostics('src/script-lang-change.vue')
      expect(before.semantic).toHaveLength(0)
      expect(before.syntax).toMatchObject(
        [
          {
            text: `Type assertion expressions can only be used in TypeScript files.`,
          },
        ].map((item) => expect.objectContaining(item)),
      )

      await editor.replaceIn(
        'src/script-lang-change.vue',
        '<script setup>',
        () => '<script setup lang="ts">',
      )

      const after = await editor.getDiagnostics('src/script-lang-change.vue')
      expect(after.syntax).toHaveLength(0)
      expect(after.semantic).toMatchObject(
        [
          {
            text: `Conversion of type 'string' to type 'number' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.`,
          },
        ].map((item) => expect.objectContaining(item)),
      )
    })
  })
})
