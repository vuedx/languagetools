import Path from 'path'
import { findPositionOrThrowIn, toNormalizedPath } from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'

describe('completions', () => {
  const projectPath = toNormalizedPath(
    Path.resolve(__dirname, '../../samples/feature-completions'),
  )

  function abs(fileName: string): string {
    return toNormalizedPath(Path.resolve(projectPath, fileName))
  }

  let server: TestServer
  beforeAll(async () => {
    server = new TestServer()

    await server.sendCommand('configure', {
      preferences: { includeCompletionsForModuleExports: true },
      watchOptions: {},
    })
    await server.sendCommand('compilerOptionsForInferredProjects', {
      options: {
        alwaysStrict: true,
        allowJs: true,
        checkJs: true,
        allowNonTsExtensions: true,
        jsx: 'preserve' as any,
      },
    })
  })
  afterEach(async () => await server.flush())
  afterAll(async () => await server.close())

  describe.each([
    'Javascript.vue',
    'JavascriptSetup.vue',
    'Typescript.vue',
    'TypescriptSetup.vue',
  ])('in %s', (source) => {
    const file = abs(`src/${source}`)

    beforeAll(async () => {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath: projectPath }],
      })
    })

    it('should provide completion in import statement', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(
          file,
          `import {} from 'vue'`,
          'import {'.length,
        ),
      )

      expect(body?.entries.length).toBeGreaterThan(1)
      expect(body?.entries).toContainEqual(
        expect.objectContaining({ name: 'defineComponent' }),
      )
    })

    it('should complete and auto-import .vue components', async () => {
      const { body } = await server.sendCommand('completionInfo', {
        ...(await findPositionOrThrowIn(file, `<HelloWorld `, '<'.length)),
        triggerCharacter: '<',
      })

      expect(body?.entries.length).toBeGreaterThan(1)
      expect(body?.entries).toContainEqual(
        expect.objectContaining({
          name: 'MyWorld',
        }),
      )
    })

    it('should complete props of a .vue components', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(
          file,
          `<HelloWorld n`,
          '<HelloWorld n'.length,
        ),
      )

      expect(body?.entries.length).toBeGreaterThan(1)

      expect(body?.entries).toContainEqual(
        expect.objectContaining({
          name: 'name',
          kind: 'JSX attribute',
        }),
      )
    })

    it('should provide completions in interpolation expression', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(file, `{{ name +`, '{{ '.length),
      )

      expect(body?.entries.length).toBeGreaterThan(1)
      expect(body?.entries).toContainEqual(
        expect.objectContaining({ name: 'name' }),
      )
      expect(body?.entries).toContainEqual(
        expect.objectContaining({ name: 'fullname' }),
      )
      expect(body?.entries).toContainEqual(
        expect.objectContaining({ name: 'increment' }),
      )
      expect(body?.entries).toContainEqual(
        expect.objectContaining({ name: '$props' }),
      )
      expect(body?.entries).not.toContainEqual(
        expect.objectContaining({ name: 'window' }),
      )
    })

    it('should provide tag completion', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(file, `<>`, '<'.length),
      )

      expect(body?.entries.length).toBeGreaterThan(1)
      expect(body?.entries).not.toContainEqual(
        expect.objectContaining({ name: 'name' }),
      )
      expect(body?.entries).toContainEqual(
        expect.objectContaining({ name: 'HelloWorld' }),
      )
      expect(body?.entries).not.toContainEqual(
        expect.objectContaining({ name: '$props' }),
      )
      expect(body?.entries).not.toContainEqual(
        expect.objectContaining({ name: 'window' }),
      )
    })
  })

  describe.each([
    'NoScript.vue',
    'ScriptWithComponents.vue',
    'ScriptWithEmptyOptions.vue',
    'ScriptWithNoComponents.vue',
    'ScriptWithSetup.vue',
  ])('auto-import in %s', (source) => {
    const file = abs(`src/auto-import/${source}`)
    beforeAll(async () => {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath: projectPath }],
      })
    })

    it('should import and register component', async () => {
      const position = await findPositionOrThrowIn(file, '<My>', 3)
      const { body } = await server.sendCommand('completionInfo', position)
      expect(body?.entries.length).toBeGreaterThan(1)
      const completion = body?.entries.find(
        (completion) => completion.name === 'MyWorld',
      )
      expect(completion).toBeTruthy()
      expect(completion?.source).toBe(abs(`src/components/MyWorld.vue`))
      expect(completion?.hasAction).toBe(true)

      const { body: details } = await server.sendCommand(
        'completionEntryDetails',
        {
          ...position,
          entryNames: [{ name: completion!.name, source: completion?.source }],
        },
      )

      expect(details).toHaveLength(1)
      expect(details![0].codeActions).toHaveLength(1)
      const codeAction = details![0].codeActions![0]
      expect(codeAction.description).toEqual(
        expect.stringContaining(
          `Import default 'MyWorld' from module "../components/MyWorld.vue"`,
        ),
      )
      expect(codeAction.changes).toHaveLength(1)
      expect(codeAction.changes[0].fileName).toBe(file)
      expect(codeAction.changes[0].textChanges).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            newText: expect.stringMatching(
              `import MyWorld from '../components/MyWorld.vue'`,
            ),
          }),
        ]),
      )
      if (!/setup/i.test(source)) {
        // Should register for non-setup script blocks.
        expect(codeAction.changes[0].textChanges).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              newText: expect.stringMatching(/MyWorld(?! from)/),
            }),
          ]),
        )
      }
    })
    it('should complete kebab-case', async () => {
      const position = await findPositionOrThrowIn(file, '<My>', 3)
      const { body } = await server.sendCommand('completionInfo', position)
      expect(body?.entries.length).toBeGreaterThan(1)
      const completion = body?.entries.find(
        (completion) => completion.name === 'my-world',
      )
      expect(completion).toBeTruthy()
      expect(completion?.source).toBe(abs(`src/components/MyWorld.vue`))
      expect(completion?.hasAction).toBe(true)

      const { body: kebabDetails } = await server.sendCommand(
        'completionEntryDetails',
        {
          ...position,
          entryNames: [{ name: 'my-world', source: completion?.source }],
        },
      )
      const { body: pascalDetails } = await server.sendCommand(
        'completionEntryDetails',
        {
          ...position,
          entryNames: [{ name: 'MyWorld', source: completion?.source }],
        },
      )

      expect(pascalDetails).toEqual(kebabDetails)
    })
  })
})
