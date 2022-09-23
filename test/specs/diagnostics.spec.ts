import { createEditorContext, getProjectPath } from '../support/helpers'
import { TestServer } from '../support/TestServer'

describe('project', () => {
  const server = new TestServer()
  const projects = ['typescript-diagnostics'] as const

  afterAll(async () => await server.close())
  describe.each(projects)('%s', (project) => {
    const editor = createEditorContext(server, getProjectPath(project))

    afterAll(async () => await editor.closeAll())

    test.skip('checks exports in <script setup>', async () => {
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
      const fileName = await editor.open('src/v-html.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Type 'boolean' is not assignable to type 'string'.",
          "Type 'number' is not assignable to type 'string'.",
          "Type '{ foo: string; } | undefined' is not assignable to type 'string | undefined'.
          Type '{ foo: string; }' is not assignable to type 'string'.",
        ]
      `)
    })

    test('v-memo', async () => {
      const fileName = await editor.open('src/v-memo.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Variable 'c' is used before being assigned.",
          "Argument of type 'boolean' is not assignable to parameter of type 'unknown[]'.",
          "Argument of type 'number' is not assignable to parameter of type 'unknown[]'.",
        ]
      `)
    })

    test('v-model', async () => {
      const fileName = await editor.open('src/v-model.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Type '{ modelValue: string | undefined; }' is not assignable to type 'ReservedProps & Partial<{}> & Omit<((Readonly<{ foo?: unknown; bar?: unknown; } & {} & { bar?: string | number | undefined; foo?: string | undefined; }> & { [x: \`on\${Capitalize<string>}\`]: ((...args: any[]) => any) | undefined; }) | (Readonly<...> & { ...; })) & (VNodeProps & ... 3 more ... & ({ ...; } | { ...; })),...'.
          Property 'modelValue' does not exist on type 'ReservedProps & Partial<{}> & Omit<((Readonly<{ foo?: unknown; bar?: unknown; } & {} & { bar?: string | number | undefined; foo?: string | undefined; }> & { [x: \`on\${Capitalize<string>}\`]: ((...args: any[]) => any) | undefined; }) | (Readonly<...> & { ...; })) & (VNodeProps & ... 3 more ... & ({ ...; } | { ...; })),...'.",
          "Type 'number | undefined' is not assignable to type 'string | undefined'.
          Type 'number' is not assignable to type 'string'.",
          "Type '{ modelValue: number | undefined; }' is not assignable to type 'ReservedProps & Partial<{}> & Omit<((Readonly<{ foo?: unknown; bar?: unknown; } & {} & { bar?: string | number | undefined; foo?: string | undefined; }> & { [x: \`on\${Capitalize<string>}\`]: ((...args: any[]) => any) | undefined; }) | (Readonly<...> & { ...; })) & (VNodeProps & ... 3 more ... & ({ ...; } | { ...; })),...'.
          Property 'modelValue' does not exist on type 'ReservedProps & Partial<{}> & Omit<((Readonly<{ foo?: unknown; bar?: unknown; } & {} & { bar?: string | number | undefined; foo?: string | undefined; }> & { [x: \`on\${Capitalize<string>}\`]: ((...args: any[]) => any) | undefined; }) | (Readonly<...> & { ...; })) & (VNodeProps & ... 3 more ... & ({ ...; } | { ...; })),...'.",
        ]
      `)
    })

    test('v-model-checkbox', async () => {
      const fileName = await editor.open('src/v-model-checkbox.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Type '"yes" | "no"' is not assignable to type 'Booleanish | undefined'.
          Type '"yes"' is not assignable to type 'Booleanish | undefined'.",
          "Type '"yes" | "no"' is not assignable to type 'Booleanish | undefined'.",
          "Type '"yes" | "no"' is not assignable to type 'Booleanish | undefined'.",
          "Object is possibly 'null'.",
          "Property 'checked' does not exist on type 'EventTarget'.",
        ]
      `)
    })

    test('v-model-input', async () => {
      const fileName = await editor.open('src/v-model-input.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Type 'Date | undefined' is not assignable to type 'string | number | string[] | undefined'.
          Type 'Date' is not assignable to type 'string | number | string[] | undefined'.
            Type 'Date' is missing the following properties from type 'string[]': length, pop, push, concat, and 26 more.",
          "Type 'Date | undefined' is not assignable to type 'string | number | string[] | undefined'.",
        ]
      `)
    })

    test('v-model-select', async () => {
      const fileName = await editor.open('src/v-model-select.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(
        semantic.map((diagnostic) => diagnostic.text),
      ).toMatchInlineSnapshot(`[]`)
    })

    test('v-on-native', async () => {
      const fileName = await editor.open('src/v-on-native.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Type '(event: PointerEvent) => void' is not assignable to type '(payload: MouseEvent) => void'.
          Types of parameters 'event' and 'payload' are incompatible.
            Type 'MouseEvent' is missing the following properties from type 'PointerEvent': height, isPrimary, pointerId, pointerType, and 8 more.",
          "Type '(event: KeyboardEvent) => void' is not assignable to type '(payload: MouseEvent) => void'.
          Types of parameters 'event' and 'payload' are incompatible.
            Type 'MouseEvent' is missing the following properties from type 'KeyboardEvent': charCode, code, isComposing, key, and 8 more.",
          "Argument of type 'MouseEvent' is not assignable to parameter of type 'KeyboardEvent'.",
          "Argument of type 'MouseEvent' is not assignable to parameter of type 'KeyboardEvent'.",
        ]
      `)
    })

    test('v-on', async () => {
      const fileName = await editor.open('src/v-on.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Type '{ onA: () => void; onInput: () => void; onClick: () => void; onSubmit: () => void; }' is not assignable to type 'ReservedProps & ButtonHTMLAttributes & InputHTMLAttributes'.
          Property 'onA' does not exist on type 'ReservedProps & ButtonHTMLAttributes & InputHTMLAttributes'.",
          "Type '(payload?: number | undefined) => void' is not assignable to type '(_payload: string) => void'.
          Types of parameters 'payload' and '_payload' are incompatible.
            Type 'string' is not assignable to type 'number'.",
          "Type '(payload?: number | undefined) => void' is not assignable to type '(payload: string) => any'.
          Types of parameters 'payload' and 'payload' are incompatible.
            Type 'string' is not assignable to type 'number'.",
          "Type '(payload?: number | undefined) => void' is not assignable to type '(payload: string) => any'.
          Types of parameters 'payload' and 'payload' are incompatible.
            Type 'string' is not assignable to type 'number'.",
        ]
      `)
    })

    test('v-once', async () => {
      const fileName = await editor.open('src/v-once.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Argument of type 'boolean' is not assignable to parameter of type 'never'.",
          "Argument of type 'number' is not assignable to parameter of type 'never'.",
          "Argument of type '{ foo: string; } | undefined' is not assignable to parameter of type 'never'.
          Type 'undefined' is not assignable to type 'never'.",
          "Argument of type 'string | undefined' is not assignable to parameter of type 'never'.
          Type 'undefined' is not assignable to type 'never'.",
        ]
      `)
    })

    test('v-pre', async () => {
      const fileName = await editor.open('src/v-pre.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(
        semantic.map((diagnostic) => diagnostic.text),
      ).toMatchInlineSnapshot(`[]`)
    })

    test('v-show', async () => {
      const fileName = await editor.open('src/v-show.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Argument of type 'number' is not assignable to parameter of type 'boolean | undefined'.",
          "Argument of type '{ foo: string; } | undefined' is not assignable to parameter of type 'boolean | undefined'.
          Type '{ foo: string; }' is not assignable to type 'boolean | undefined'.",
        ]
      `)
    })

    test('v-text', async () => {
      const fileName = await editor.open('src/v-text.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        [
          "Type 'boolean' is not assignable to type 'string'.",
          "Type 'number' is not assignable to type 'string'.",
          "Type '{ foo: string; } | undefined' is not assignable to type 'string | undefined'.
          Type '{ foo: string; }' is not assignable to type 'string'.",
        ]
      `)
    })
  })
})
