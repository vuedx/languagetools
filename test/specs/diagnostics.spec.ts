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

    test('v-html', async () => {
      const fileName = await editor.open('src/v-html.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type 'boolean' is not assignable to type 'string | undefined'.",
          "Type 'number' is not assignable to type 'string | undefined'.",
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
        Array [
          "Property 'd' does not exist on type '{ $: ComponentInternalInstance; $data: {}; $props: Partial<{}> & Omit<{} & VNodeProps & AllowedComponentProps & ComponentCustomProps, never>; ... 10 more ...; $watch(source: string | Function, cb: Function, options?: WatchOptions<...> | undefined): WatchStopHandle; } & ... 4 more ... & ComponentCustomProperties'.",
          "Type 'boolean' is not assignable to type 'any[] | undefined'.",
          "Type 'number' is not assignable to type 'any[] | undefined'.",
        ]
      `)
    })

    test('v-model', async () => {
      const fileName = await editor.open('src/v-model.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type '\\"modelValue\\"' is not assignable to type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"foo\\" | \\"bar\\" | undefined'.",
          "Type 'number | undefined' is not assignable to type 'string | undefined'.
          Type 'number' is not assignable to type 'string | undefined'.",
          "Type '\\"modelValue\\"' is not assignable to type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"foo\\" | \\"bar\\" | undefined'.",
          "Type '\\"foo\\"' is not assignable to type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"modelValue\\" | undefined'.",
          "Type '\\"foo\\"' is not assignable to type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"modelValue\\" | undefined'.",
          "Type 'number | undefined' is not assignable to type 'string | undefined'.",
          "Type '\\"bar\\"' is not assignable to type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"modelValue\\" | undefined'.",
          "Type '\\"bar\\"' is not assignable to type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"modelValue\\" | undefined'.",
        ]
      `)
    })

    test('v-model-checkbox', async () => {
      const fileName = await editor.open('src/v-model-checkbox.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type '\\"yes\\" | \\"no\\"' is not assignable to type 'boolean | undefined'.
          Type '\\"yes\\"' is not assignable to type 'boolean | undefined'.",
          "Type 'boolean' is not assignable to type '\\"yes\\" | \\"no\\" | undefined'.",
          "Type 'boolean' is not assignable to type 'string | undefined'.",
        ]
      `)
    })

    test('v-model-input', async () => {
      const fileName = await editor.open('src/v-model-input.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type 'number | undefined' is not assignable to type 'string | undefined'.",
          "Type 'Date | undefined' is not assignable to type 'string | undefined'.
          Type 'Date' is not assignable to type 'string'.",
        ]
      `)
    })

    test('v-model-select', async () => {
      const fileName = await editor.open('src/v-model-select.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type 'string | undefined' is not assignable to type 'undefined'.
          Type 'string' is not assignable to type 'undefined'.",
          "Type '\\"a\\" | \\"b\\" | \\"c\\" | undefined' is not assignable to type 'undefined'.
          Type '\\"a\\"' is not assignable to type 'undefined'.",
          "Type '\\"a\\" | \\"b\\" | \\"c\\" | undefined' is not assignable to type 'undefined'.",
          "Type '1 | 2 | 3 | undefined' is not assignable to type 'undefined'.
          Type '1' is not assignable to type 'undefined'.",
          "Type '1 | 2 | 3 | undefined' is not assignable to type 'undefined'.",
        ]
      `)
    })

    test('v-on-native', async () => {
      const fileName = await editor.open('src/v-on-native.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type '(event: PointerEvent) => void' is not assignable to type '(payload: MouseEvent) => void'.
          Types of parameters 'event' and 'payload' are incompatible.
            Type 'MouseEvent' is missing the following properties from type 'PointerEvent': height, isPrimary, pointerId, pointerType, and 8 more.",
          "Type '(event: KeyboardEvent) => void' is not assignable to type '(payload: MouseEvent) => void'.
          Types of parameters 'event' and 'payload' are incompatible.
            Type 'MouseEvent' is missing the following properties from type 'KeyboardEvent': char, charCode, code, isComposing, and 8 more.",
          "Argument of type 'MouseEvent' is not assignable to parameter of type 'KeyboardEvent'.",
          "Type '\\"enter\\"' is not assignable to type '\\"meta\\" | \\"stop\\" | \\"alt\\" | \\"capture\\" | \\"once\\" | \\"prevent\\" | \\"self\\" | \\"passive\\" | \\"left\\" | \\"right\\" | \\"ctrl\\" | \\"shift\\" | \\"exact\\" | \\"middle\\"'.",
          "Type '\\"up\\"' is not assignable to type '\\"meta\\" | \\"stop\\" | \\"alt\\" | \\"capture\\" | \\"once\\" | \\"prevent\\" | \\"self\\" | \\"passive\\" | \\"left\\" | \\"right\\" | \\"ctrl\\" | \\"shift\\" | \\"exact\\" | \\"middle\\"'.",
          "Type '\\"middle\\"' is not assignable to type '\\"meta\\" | \\"stop\\" | \\"alt\\" | \\"capture\\" | \\"once\\" | \\"prevent\\" | \\"self\\" | \\"passive\\" | \\"enter\\" | \\"tab\\" | \\"delete\\" | \\"esc\\" | \\"space\\" | \\"left\\" | \\"right\\" | \\"up\\" | \\"down\\" | \\"ctrl\\" | \\"shift\\" | \\"exact\\"'.",
        ]
      `)
    })

    test('v-on', async () => {
      const fileName = await editor.open('src/v-on.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type '(payload?: number | undefined) => void' is not assignable to type '(_payload: string) => void'.
          Types of parameters 'payload' and '_payload' are incompatible.
            Type 'string' is not assignable to type 'number | undefined'.",
          "Type '(payload?: number | undefined) => void' is not assignable to type '(payload: string) => any'.
          Types of parameters 'payload' and 'payload' are incompatible.
            Type 'string' is not assignable to type 'number | undefined'.",
          "Type '(payload?: number | undefined) => void' is not assignable to type '(payload: string) => any'.
          Types of parameters 'payload' and 'payload' are incompatible.
            Type 'string' is not assignable to type 'number | undefined'.",
        ]
      `)
    })

    test('v-once', async () => {
      const fileName = await editor.open('src/v-once.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type 'boolean' is not assignable to type 'undefined'.",
          "Type 'number' is not assignable to type 'undefined'.",
          "Type '{ foo: string; } | undefined' is not assignable to type 'undefined'.
          Type '{ foo: string; }' is not assignable to type 'undefined'.",
          "Type 'string | undefined' is not assignable to type 'undefined'.
          Type 'string' is not assignable to type 'undefined'.",
        ]
      `)
    })

    test('v-pre', async () => {
      const fileName = await editor.open('src/v-pre.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(
        semantic.map((diagnostic) => diagnostic.text),
      ).toMatchInlineSnapshot(`Array []`)
    })

    test('v-show', async () => {
      const fileName = await editor.open('src/v-show.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type 'number' is not assignable to type 'boolean | undefined'.",
          "Type '{ foo: string; } | undefined' is not assignable to type 'boolean | undefined'.
          Type '{ foo: string; }' is not assignable to type 'boolean | undefined'.
            Type '{ foo: string; }' is not assignable to type 'true'.",
        ]
      `)
    })

    test('v-text', async () => {
      const fileName = await editor.open('src/v-text.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type 'boolean' is not assignable to type 'string | undefined'.",
          "Type 'number' is not assignable to type 'string | undefined'.",
          "Type '{ foo: string; } | undefined' is not assignable to type 'string | undefined'.
          Type '{ foo: string; }' is not assignable to type 'string'.",
        ]
      `)
    })
  })
})
