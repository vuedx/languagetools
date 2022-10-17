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
          { text: 'Modifiers cannot appear here.' },
          {
            text: 'A default export must be at the top level of a file or module declaration.',
          },
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
              text: `Type 'string' is not assignable to type 'number'.`,
            },
            {
              text: expect.stringContaining(
                `Type '{ bar: string; }' is not assignable to type '{ foo?: string | undefined; }'.`,
              ),
            },
            { text: `Type 'number' is not assignable to type 'string'.` },
            {
              text: `Type 'string' is not assignable to type 'number'.`,
            },
            {
              text: expect.stringContaining(
                `Type '{ bar: string; }' is not assignable to type '{ foo?: string | undefined; }'.`,
              ),
            },
            { text: `Type 'number' is not assignable to type 'string'.` },
            {
              text: `Type 'string' is not assignable to type 'number'.`,
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

    test('v-html', async () => {
      const { fsPath: fileName } = await editor.open('src/v-html.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        "Type 'boolean' is not assignable to type 'string'.",
        "Type 'number' is not assignable to type 'string'.",
        "Type '{ foo: string; } | undefined' is not assignable to type 'string | undefined'.\n  Type '{ foo: string; }' is not assignable to type 'string'.",
      ])
    })

    test('v-memo', async () => {
      const { fsPath: fileName } = await editor.open('src/v-memo.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        "Argument of type 'boolean' is not assignable to parameter of type 'unknown[]'.",
        "Argument of type 'number' is not assignable to parameter of type 'unknown[]'.",
      ])
    })

    test('v-model', async () => {
      const { fsPath: fileName } = await editor.open('src/v-model.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        expect.stringContaining(
          "Type '{ modelValue: string | undefined; }' is not assignable to type",
        ),
        "Type 'number | undefined' is not assignable to type 'string | undefined'.\n  Type 'number' is not assignable to type 'string'.",
        expect.stringContaining(
          "Type '{ modelValue: number | undefined; }' is not assignable to type",
        ),
        expect.stringContaining(
          "Type '{ foo: string | undefined; }' is not assignable to type",
        ),
        expect.stringContaining(
          "Type '{ foo: number | undefined; }' is not assignable to type",
        ),
        "Type 'number | undefined' is not assignable to type 'string | undefined'.",
        expect.stringContaining(
          "Type '{ bar: string | undefined; }' is not assignable to type",
        ),
        expect.stringContaining(
          "Type '{ bar: number | undefined; }' is not assignable to type",
        ),
      ])
    })

    test('v-model-checkbox', async () => {
      const { fsPath: fileName } = await editor.open('src/v-model-checkbox.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        `Type '"yes" | "no"' is not assignable to type 'Booleanish | undefined'.\n  Type '"yes"' is not assignable to type 'Booleanish | undefined'.`,
        `Type '"yes" | "no"' is not assignable to type 'Booleanish | undefined'.`,
        `Type '"yes" | "no"' is not assignable to type 'Booleanish | undefined'.`,
      ])
    })

    test('v-model-input', async () => {
      const { fsPath: fileName } = await editor.open('src/v-model-input.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        "Type 'Date | undefined' is not assignable to type 'string | number | string[] | undefined'.\n  Type 'Date' is not assignable to type 'string | number | string[] | undefined'.\n    Type 'Date' is missing the following properties from type 'string[]': length, pop, push, concat, and 26 more.",
        "Type 'Date | undefined' is not assignable to type 'string | number | string[] | undefined'.",
      ])
    })

    test('v-model-select', async () => {
      const { fsPath: fileName } = await editor.open('src/v-model-select.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([])
    })

    test('v-on-native', async () => {
      const { fsPath: fileName } = await editor.open('src/v-on-native.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        expect.stringContaining(
          "Type '(event: PointerEvent) => void' is not assignable to type '(payload: MouseEvent) => void'",
        ),
        expect.stringContaining(
          `Type '(event: KeyboardEvent) => void' is not assignable to type '(payload: MouseEvent) => void'.`,
        ),
        "Argument of type 'MouseEvent' is not assignable to parameter of type 'KeyboardEvent'.",
        "Argument of type 'MouseEvent' is not assignable to parameter of type 'KeyboardEvent'.",
      ])
    })

    test('v-on', async () => {
      const { fsPath: fileName } = await editor.open('src/v-on.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        expect.stringContaining(
          "Type '{ onA: () => void; onInput: () => void; onClick: () => void; onSubmit: () => void; }' is not assignable to type",
        ),
        expect.stringContaining(
          "Type '{ a: string; onA: () => void; }' is not assignable to type ",
        ),
        expect.stringContaining(
          "Type '{ a: string; onA: (payload: string) => void; }' is not assignable to type ",
        ),
        expect.stringContaining(
          "Type '(payload?: number | undefined) => void' is not assignable to type '(_payload: string) => void'",
        ),
        expect.stringContaining(
          "Type '{ a: string; onA: () => void; }' is not assignable to type ",
        ),
        expect.stringContaining(
          "Type '{ a: string; onA: (payload: string) => void; }' is not assignable to type ",
        ),
        expect.stringContaining(
          "Type '(payload?: number | undefined) => void' is not assignable to type '(payload: string) => any'",
        ),
        expect.stringContaining(
          "Type '{ a: string; onA: () => void; }' is not assignable to type ",
        ),
        expect.stringContaining(
          "Type '{ a: string; onA: (payload: string) => void; }' is not assignable to type ",
        ),
        expect.stringContaining(
          "Type '(payload?: number | undefined) => void' is not assignable to type '(payload: string) => any'",
        ),
      ])
    })

    test('v-once', async () => {
      const { fsPath: fileName } = await editor.open('src/v-once.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        "Argument of type 'boolean' is not assignable to parameter of type 'never'.",
        "Argument of type 'number' is not assignable to parameter of type 'never'.",
        expect.stringContaining(
          "Argument of type '{ foo: string; } | undefined' is not assignable to parameter of type 'never'",
        ),
        expect.stringContaining(
          "Argument of type 'string | undefined' is not assignable to parameter of type 'never'",
        ),
      ])
    })

    test('v-pre', async () => {
      const { fsPath: fileName } = await editor.open('src/v-pre.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([])
    })

    test('v-show', async () => {
      const { fsPath: fileName } = await editor.open('src/v-show.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        "Argument of type 'number' is not assignable to parameter of type 'boolean | undefined'.",
        expect.stringContaining(
          "Argument of type '{ foo: string; } | undefined' is not assignable to parameter of type 'boolean | undefined'",
        ),
      ])
    })

    test('v-text', async () => {
      const { fsPath: fileName } = await editor.open('src/v-text.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text)).toEqual([
        "Type 'boolean' is not assignable to type 'string'.",
        "Type 'number' is not assignable to type 'string'.",
        expect.stringContaining(
          "Type '{ foo: string; } | undefined' is not assignable to type 'string | undefined'",
        ),
      ])
    })
  })
})
