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
          "Argument of type 'boolean' is not assignable to parameter of type 'string | undefined'.",
          "Argument of type 'number' is not assignable to parameter of type 'string | undefined'.",
          "Argument of type '{ foo: string; } | undefined' is not assignable to parameter of type 'string | undefined'.
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
          "Argument of type 'boolean' is not assignable to parameter of type 'any[]'.",
          "Argument of type 'number' is not assignable to parameter of type 'any[]'.",
        ]
      `)
    })

    test('v-model', async () => {
      const fileName = await editor.open('src/v-model.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type '{ modelValue: string | undefined; \\"data-vuedx-prop-completion-helper\\": any; }' is not assignable to type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ foo?: unknown; bar?: unknown; } & {} & { foo?: string | undefined; bar?: string | number | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.
          Property 'modelValue' does not exist on type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ foo?: unknown; bar?: unknown; } & {} & { foo?: string | undefined; bar?: string | number | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.",
          "Argument of type '\\"modelValue\\"' is not assignable to parameter of type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"foo\\" | \\"bar\\"'.",
          "Argument of type 'number | undefined' is not assignable to parameter of type 'string | undefined'.
          Type 'number' is not assignable to type 'string | undefined'.",
          "Type '{ modelValue: number | undefined; \\"data-vuedx-prop-completion-helper\\": any; }' is not assignable to type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ foo?: unknown; bar?: unknown; } & {} & { foo?: string | undefined; bar?: string | number | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.
          Property 'modelValue' does not exist on type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ foo?: unknown; bar?: unknown; } & {} & { foo?: string | undefined; bar?: string | number | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.",
          "Argument of type '\\"modelValue\\"' is not assignable to parameter of type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"foo\\" | \\"bar\\"'.",
          "Type '{ foo: string | undefined; \\"data-vuedx-prop-completion-helper\\": any; }' is not assignable to type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ modelValue?: unknown; } & {} & { modelValue?: string | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.
          Property 'foo' does not exist on type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ modelValue?: unknown; } & {} & { modelValue?: string | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.",
          "Argument of type '\\"foo\\"' is not assignable to parameter of type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"modelValue\\"'.",
          "Type '{ foo: number | undefined; \\"data-vuedx-prop-completion-helper\\": any; }' is not assignable to type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ modelValue?: unknown; } & {} & { modelValue?: string | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.
          Property 'foo' does not exist on type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ modelValue?: unknown; } & {} & { modelValue?: string | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.",
          "Argument of type '\\"foo\\"' is not assignable to parameter of type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"modelValue\\"'.",
          "Argument of type 'number | undefined' is not assignable to parameter of type 'string | undefined'.",
          "Type '{ bar: string | undefined; \\"data-vuedx-prop-completion-helper\\": any; }' is not assignable to type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ modelValue?: unknown; } & {} & { modelValue?: string | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.
          Property 'bar' does not exist on type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ modelValue?: unknown; } & {} & { modelValue?: string | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.",
          "Argument of type '\\"bar\\"' is not assignable to parameter of type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"modelValue\\"'.",
          "Type '{ bar: number | undefined; \\"data-vuedx-prop-completion-helper\\": any; }' is not assignable to type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ modelValue?: unknown; } & {} & { modelValue?: string | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.
          Property 'bar' does not exist on type 'IntrinsicAttributes & Partial<{}> & Omit<({} & (Readonly<{ modelValue?: unknown; } & {} & { modelValue?: string | undefined; }> & ({} | {}))) & (VNodeProps & ... 3 more ... & ({} | {})), never>'.",
          "Argument of type '\\"bar\\"' is not assignable to parameter of type '(string & \`on\${string}\`) | keyof VNodeProps | keyof AllowedComponentProps | \\"modelValue\\"'.",
        ]
      `)
    })

    test('v-model-checkbox', async () => {
      const fileName = await editor.open('src/v-model-checkbox.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Argument of type '\\"yes\\" | \\"no\\"' is not assignable to parameter of type 'boolean | null | undefined'.
          Type '\\"yes\\"' is not assignable to type 'boolean | null | undefined'.",
          "Argument of type 'boolean' is not assignable to parameter of type '\\"yes\\" | \\"no\\" | null | undefined'.",
          "Argument of type 'boolean' is not assignable to parameter of type 'string | null | undefined'.",
        ]
      `)
    })

    test('v-model-input', async () => {
      const fileName = await editor.open('src/v-model-input.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Argument of type 'number | undefined' is not assignable to parameter of type 'string | null | undefined'.
          Type 'number' is not assignable to type 'string | null | undefined'.",
          "Argument of type 'Date | undefined' is not assignable to parameter of type 'string | null | undefined'.
          Type 'Date' is not assignable to type 'string'.",
          "Cannot assign to 'foo' because it is a read-only property.",
        ]
      `)
    })

    test('v-model-select', async () => {
      const fileName = await editor.open('src/v-model-select.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
          Type 'undefined' is not assignable to type 'string'.",
          "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
          Type 'undefined' is not assignable to type 'string'.",
          "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
          Type 'undefined' is not assignable to type 'string'.",
          "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.",
          "Argument of type 'string | undefined' is not assignable to parameter of type 'string'.",
          "Argument of type 'number | undefined' is not assignable to parameter of type 'string'.
          Type 'undefined' is not assignable to type 'string'.",
          "Argument of type 'number | undefined' is not assignable to parameter of type 'string'.",
          "Argument of type 'number | undefined' is not assignable to parameter of type 'string'.",
          "Argument of type 'number | undefined' is not assignable to parameter of type 'string'.
          Type 'undefined' is not assignable to type 'string'.",
        ]
      `)
    })

    test('v-on-native', async () => {
      const fileName = await editor.open('src/v-on-native.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Argument of type '(event: PointerEvent) => void' is not assignable to parameter of type '(payload: MouseEvent) => void'.
          Types of parameters 'event' and 'payload' are incompatible.
            Type 'MouseEvent' is missing the following properties from type 'PointerEvent': height, isPrimary, pointerId, pointerType, and 8 more.",
          "Argument of type '(event: KeyboardEvent) => void' is not assignable to parameter of type '(payload: MouseEvent) => void'.
          Types of parameters 'event' and 'payload' are incompatible.
            Type 'MouseEvent' is missing the following properties from type 'KeyboardEvent': char, charCode, code, isComposing, and 9 more.",
          "Argument of type 'MouseEvent' is not assignable to parameter of type 'KeyboardEvent'.",
          "Argument of type 'MouseEvent' is not assignable to parameter of type 'KeyboardEvent'.",
          "Argument of type '{ enter: boolean; }' is not assignable to parameter of type 'Partial<Record<ModifiersForNativeEvent<\\"click\\">, boolean>>'.
          Object literal may only specify known properties, and '\\"enter\\"' does not exist in type 'Partial<Record<ModifiersForNativeEvent<\\"click\\">, boolean>>'.",
          "Argument of type '{ up: boolean; }' is not assignable to parameter of type 'Partial<Record<ModifiersForNativeEvent<\\"click\\">, boolean>>'.
          Object literal may only specify known properties, and '\\"up\\"' does not exist in type 'Partial<Record<ModifiersForNativeEvent<\\"click\\">, boolean>>'.",
          "Argument of type '{ shift: true; up: boolean; }' is not assignable to parameter of type 'Partial<Record<ModifiersForNativeEvent<\\"click\\">, boolean>>'.
          Object literal may only specify known properties, and '\\"up\\"' does not exist in type 'Partial<Record<ModifiersForNativeEvent<\\"click\\">, boolean>>'.",
          "Argument of type '{ shift: true; up: boolean; alt: true; }' is not assignable to parameter of type 'Partial<Record<ModifiersForNativeEvent<\\"click\\">, boolean>>'.
          Object literal may only specify known properties, and '\\"up\\"' does not exist in type 'Partial<Record<ModifiersForNativeEvent<\\"click\\">, boolean>>'.",
          "Argument of type '{ middle: boolean; }' is not assignable to parameter of type 'Partial<Record<ModifiersForNativeEvent<\\"keypress\\">, boolean>>'.
          Object literal may only specify known properties, and '\\"middle\\"' does not exist in type 'Partial<Record<ModifiersForNativeEvent<\\"keypress\\">, boolean>>'.",
        ]
      `)
    })

    test('v-on', async () => {
      const fileName = await editor.open('src/v-on.vue')
      const { semantic } = await editor.getDiagnostics(fileName)
      expect(semantic.map((diagnostic) => diagnostic.text))
        .toMatchInlineSnapshot(`
        Array [
          "Type '{ onA: () => void; onInput: () => void; onClick: () => void; onSubmit: () => void; \\"data-vuedx-prop-completion-helper\\": any; }' is not assignable to type 'IntrinsicAttributes & ButtonHTMLAttributes & ReservedProps & InputHTMLAttributes'.
          Property 'onA' does not exist on type 'IntrinsicAttributes & ButtonHTMLAttributes & ReservedProps & InputHTMLAttributes'.",
          "Argument of type '\\"a\\"' is not assignable to parameter of type '\\"input\\" | \\"progress\\" | \\"select\\" | \\"contextmenu\\" | \\"change\\" | \\"keydown\\" | \\"keypress\\" | \\"keyup\\" | \\"pointerdown\\" | \\"pointermove\\" | \\"pointerup\\" | \\"pointercancel\\" | \\"pointerenter\\" | ... 68 more ... | \\"transitionstart\\"'.",
          "Argument of type '(payload?: number | undefined) => void' is not assignable to parameter of type '(_payload: string) => void'.
          Types of parameters 'payload' and '_payload' are incompatible.
            Type 'string' is not assignable to type 'number | undefined'.",
          "Argument of type '(payload?: number | undefined) => void' is not assignable to parameter of type '(payload: string) => any'.
          Types of parameters 'payload' and 'payload' are incompatible.
            Type 'string' is not assignable to type 'number | undefined'.",
          "Argument of type '(payload?: number | undefined) => void' is not assignable to parameter of type '(payload: string) => any'.
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
          "Argument of type 'boolean' is not assignable to parameter of type 'undefined'.",
          "Argument of type 'number' is not assignable to parameter of type 'undefined'.",
          "Argument of type '{ foo: string; } | undefined' is not assignable to parameter of type 'undefined'.
          Type '{ foo: string; }' is not assignable to type 'undefined'.",
          "Argument of type 'string | undefined' is not assignable to parameter of type 'undefined'.
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
          "Argument of type 'number' is not assignable to parameter of type 'boolean | undefined'.",
          "Argument of type '{ foo: string; } | undefined' is not assignable to parameter of type 'boolean | undefined'.
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
          "Argument of type 'boolean' is not assignable to parameter of type 'string | undefined'.",
          "Argument of type 'number' is not assignable to parameter of type 'string | undefined'.",
          "Argument of type '{ foo: string; } | undefined' is not assignable to parameter of type 'string | undefined'.
          Type '{ foo: string; }' is not assignable to type 'string'.",
        ]
      `)
    })
  })
})
