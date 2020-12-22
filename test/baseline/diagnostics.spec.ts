import Path from 'path'
import { findPositionOrThrowIn, toNormalizedPath } from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'

describe('diagnostic', () => {
  const projectPath = toNormalizedPath(
    Path.resolve(__dirname, '../../samples/feature-diagnostics'),
  )
  const projectRootPath = toNormalizedPath(Path.join(projectPath, 'src'))

  function abs(fileName: string): string {
    return toNormalizedPath(Path.resolve(projectPath, fileName))
  }

  let server: TestServer
  beforeAll(async () => {
    server = new TestServer()

    await server.sendCommand('configure', { preferences: {}, watchOptions: {} })
    await server.sendCommand('compilerOptionsForInferredProjects', {
      options: {
        strict: true,
        allowJs: true,
        checkJs: true,
        allowNonTsExtensions: true,
        jsx: 'preserve' as any,
      },
    })
  })

  afterEach(async () => await server.flush())
  afterAll(async () => await server.close())

  function checkEventFile(file: string) {
    return (event: any) => {
      return event.body?.file === file
    }
  }

  test('no errors when all required props are provided', async () => {
    const file = abs(`src/NoErrors.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )
      expect(body?.diagnostics).toHaveLength(0)
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })

  test('v-for', async () => {
    const file = abs(`src/VFor.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )
      expect(body?.diagnostics).toHaveLength(3)
      expect(body?.diagnostics).toEqual([
        expect.objectContaining({
          category: 'error',
          code: 2339,
          text: expect.stringContaining(`'foo' does not exist on type`),
        }),
        expect.objectContaining({
          category: 'error',
          code: 2769,
          // TODO: Rewrite message for v-for unsupported types.
        }),
        expect.objectContaining({
          category: 'error',
          code: 2769,
        }),
      ])
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })

  test('v-if', async () => {
    const file = abs(`src/VIf.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )
      expect(body?.diagnostics).toHaveLength(3)
      expect(body?.diagnostics).toEqual([
        expect.objectContaining({
          category: 'error',
          code: 2367,
          text: expect.stringContaining(
            `This condition will always return 'false'`,
          ),
        }),
        expect.objectContaining({
          category: 'error',
          code: 2339,
          text: expect.stringContaining(
            `Property 'name' does not exist on type`,
          ),
        }),
        expect.objectContaining({
          category: 'error',
          code: 2531,
          text: expect.stringContaining(`Object is possibly 'null'`),
        }),
      ])
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })
  test('v-model', async () => {
    const file = abs(`src/VModel.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )
      expect(body?.diagnostics).toHaveLength(15)
      expect(body?.diagnostics[14]).toEqual(
        expect.objectContaining({
          category: 'error',
          code: 2540,
          text: expect.stringContaining(`because it is a read-only property`),
        }),
      )
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })

  test('detects missing required props', async () => {
    const file = abs(`src/MissingRequiredProp.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )

      const expected = await Promise.all([
        // findPositionOrThrowIn(file, '<TypeScriptPropsType ', 1),
        findPositionOrThrowIn(file, '<TypeScriptPropsOption ', 1),
        // findPositionOrThrowIn(file, '<TypeScriptSetupPropsDeclare ', 1),
        findPositionOrThrowIn(file, '<TypeScriptSetupPropsOption ', 1),
        // findPositionOrThrowIn(file, '<JavaScriptPropsOption ', 1),
        // findPositionOrThrowIn(file, '<JavaScriptSetupPropsOption ', 1),
      ])

      expect(body?.diagnostics).toEqual(
        expected.map((item) =>
          expect.objectContaining({
            category: 'error',
            code: 2322,
            text: expect.stringContaining(
              `Type '{}' is missing the following properties from type`,
            ),
            start: {
              line: item.line,
              offset: item.offset,
            },
            end: {
              line: item.line,
              offset: expect.any(Number),
            },
          }),
        ),
      )
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })

  test('detects missing keys in object props', async () => {
    const file = abs(`src/MissingKeysInObjectProp.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )

      const expected = await Promise.all([
        findPositionOrThrowIn(
          file,
          '<TypeScriptPropsType :object',
          '<TypeScriptPropsType :'.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptPropsOption :object',
          '<TypeScriptPropsOption :'.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptSetupPropsDeclare :object',
          '<TypeScriptSetupPropsDeclare :'.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptSetupPropsOption :object',
          '<TypeScriptSetupPropsOption :'.length,
        ),
        // findPositionOrThrowIn(
        //   file,
        //   '<JavaScriptPropsOption :object',
        //   '<JavaScriptPropsOption :'.length,
        // ),
        // findPositionOrThrowIn(
        //   file,
        //   '<JavaScriptSetupPropsOption :object',
        //   '<JavaScriptSetupPropsOption :'.length,
        // ),
      ])

      expect(body?.diagnostics).toEqual(
        expected.map((item) =>
          expect.objectContaining({
            category: 'error',
            code: 2741,
            text: expect.stringContaining(
              `Property 'id' is missing in type '{}' but required in type 'Event'.`,
            ),
            start: {
              line: item.line,
              offset: item.offset,
            },
            end: {
              line: item.line,
              offset: expect.any(Number),
            },
            relatedInformation: [
              {
                category: 'message',
                code: 2728,
                message: `'id' is declared here.`,
                span: {
                  start: expect.any(Object),
                  end: expect.any(Object),
                  file: expect.stringMatching(/\.vue$/),
                },
              },
            ],
          }),
        ),
      )
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })

  test('detects unknown keys in object props', async () => {
    const file = abs(`src/UnknownKeysInObjectProp.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )

      const expected = await Promise.all([
        findPositionOrThrowIn(
          file,
          '<TypeScriptPropsType :object="{ id: 1, unknown',
          '<TypeScriptPropsType :object="{ id: 1, '.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptPropsOption :object="{ id: 1, unknown',
          '<TypeScriptPropsOption :object="{ id: 1, '.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptSetupPropsDeclare :object="{ id: 1, unknown',
          '<TypeScriptSetupPropsDeclare :object="{ id: 1, '.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptSetupPropsOption :object="{ id: 1, unknown',
          '<TypeScriptSetupPropsOption :object="{ id: 1, '.length,
        ),
        // findPositionOrThrowIn(
        //   file,
        //   '<JavaScriptPropsOption :object="{ id: 1, unknown',
        //   '<JavaScriptPropsOption :object="{ id: 1, '.length,
        // ),
        // findPositionOrThrowIn(
        //   file,
        //   '<JavaScriptSetupPropsOption :object="{ id: 1, unknown',
        //   '<JavaScriptSetupPropsOption :object="{ id: 1, '.length,
        // ),
      ])

      expect(body?.diagnostics).toEqual(
        expected.map((item) =>
          expect.objectContaining({
            category: 'error',
            code: 2322,
            text: expect.stringContaining(
              `Type '{ id: number; unknown: string; }' is not assignable to type 'Event'.`,
            ),
            start: {
              line: item.line,
              offset: item.offset,
            },
            end: {
              line: item.line,
              offset: expect.any(Number),
            },
          }),
        ),
      )
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })

  test('detects wrong prop type in plain JS component', async () => {
    const file = abs(`src/ComponentPropUsage.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )

      expect(body?.diagnostics).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            code: 2322,
            text: expect.stringContaining(`Type 'number' is not assignable to type`),
          }),
        ]),
      )
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })

  test('detects wrong prop type', async () => {
    const file = abs(`src/WrongPropType.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )

      const expected = await Promise.all([
        findPositionOrThrowIn(
          file,
          '<TypeScriptPropsType :string',
          '<TypeScriptPropsType :'.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptPropsOption :string',
          '<TypeScriptPropsOption :'.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptSetupPropsDeclare :string',
          '<TypeScriptSetupPropsDeclare :'.length,
        ),
        findPositionOrThrowIn(
          file,
          '<TypeScriptSetupPropsOption :string',
          '<TypeScriptSetupPropsOption :'.length,
        ),
        // findPositionOrThrowIn(
        //   file,
        //   '<JavaScriptPropsOption :string',
        //   '<JavaScriptPropsOption :'.length,
        // ),
        // findPositionOrThrowIn(
        //   file,
        //   '<JavaScriptSetupPropsOption :string',
        //   '<JavaScriptSetupPropsOption :'.length,
        // ),
      ])

      expect(body?.diagnostics).toEqual(
        expected.map((item) =>
          expect.objectContaining({
            category: 'error',
            code: 2322,
            text: expect.stringContaining(
              `Type 'number' is not assignable to type`,
            ),
            start: {
              line: item.line,
              offset: item.offset,
            },
            end: {
              line: item.line,
              offset: expect.any(Number),
            },
          }),
        ),
      )
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })

  test.each(['NestedVIf.vue', 'Slot.vue', 'JSON.vue'])(
    `%s should have no semantic errors`,
    async (fileName) => {
      const file = abs(`src/${fileName}`)

      try {
        await server.sendCommand('updateOpen', {
          openFiles: [{ file, projectRootPath }],
        })

        const { body } = await server.waitForEvent(
          'semanticDiag',
          checkEventFile(file),
        )
        expect(body?.diagnostics).toHaveLength(0)
      } finally {
        await server.sendCommand('updateOpen', { closedFiles: [file] })
      }
    },
  )
})
