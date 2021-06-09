import * as Path from 'path'
import {
  findEOFPosition,
  findPositionOrThrowIn,
  toNormalizedPath,
} from '../support/helpers'
import { TestServer } from '../support/TestServer'

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
      expect(
        body?.entries.filter((entry) => entry.data != null),
      ).toContainEqual(
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

      expect(body?.entries).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: 'name',
            kind: 'JSX attribute',
          }),
        ]),
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
        expect.objectContaining({ name: 'hello-world' }),
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
      expect(details![0]!.codeActions).toHaveLength(1)
      const codeAction = details![0]!.codeActions![0]
      expect(codeAction!.description).toEqual(
        expect.stringContaining(
          `Import default 'MyWorld' from module "../components/MyWorld.vue"`,
        ),
      )
      expect(codeAction!.changes).toHaveLength(1)
      expect(codeAction!.changes[0]!.fileName).toBe(file)
      expect(codeAction!.changes[0]!.textChanges).toEqual(
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
        expect(codeAction!.changes[0]!.textChanges).toEqual(
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

      expect(pascalDetails).toHaveLength(1)
      expect(kebabDetails).toHaveLength(1)

      const p = pascalDetails![0]!
      const k = kebabDetails![0]!
      expect(p.name).toBe('MyWorld')
      expect(k.name).toBe('my-world')
      expect(p).toEqual({ ...k, name: 'MyWorld' })
    })
  })

  describe('SFC completions', () => {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    async function getCompletionsIn(source: string) {
      const file = abs(`src/${source}`)
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath: projectPath }],
      })

      const position = await findEOFPosition(file)
      const { body } = await server.sendCommand('completionInfo', position)
      expect(body).toBeTruthy()

      const entries = body!.entries
      const result = await server.sendCommand('completionEntryDetails', {
        ...position,
        entryNames: entries.map((entry) => ({ name: entry.name })),
      })
      expect(result.body).toBeTruthy()
      const details = result.body!

      return { file, entries, details }
    }

    test('completions in empty vue file', async () => {
      const { entries, details } = await getCompletionsIn('SFC-Empty.vue')

      expect(entries).toHaveLength(details.length)
      expect(entries).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: '<script>, <template>',
            isRecommended: true,
          }),
          expect.objectContaining({ name: '<template>, <script>' }),
        ]),
      )

      expect(details.filter((detail) => detail.name.includes(',')))
        .toMatchInlineSnapshot(`
        Array [
          Object {
            "displayParts": Array [],
            "documentation": Array [
              Object {
                "kind": "markdown",
                "text": "\`\`\`vue
        <script>
        import { defineComponent } from 'vue'

        export default defineComponent()
        </script>

        <template>
          <div></div>
        </template>

        \`\`\`",
              },
            ],
            "kind": "",
            "kindModifiers": "",
            "name": "<script>, <template>",
            "tags": Array [],
          },
          Object {
            "displayParts": Array [],
            "documentation": Array [
              Object {
                "kind": "markdown",
                "text": "\`\`\`vue
        <script>
        import { defineComponent } from 'vue'

        export default defineComponent()
        </script>

        <template>
          <div></div>
        </template>

        \`\`\`",
              },
            ],
            "kind": "",
            "kindModifiers": "",
            "name": "<template>, <script>",
            "tags": Array [],
          },
        ]
      `)
    })

    test('completions when script is present', async () => {
      const { entries, details } = await getCompletionsIn('SFC-Script.vue')

      expect(entries).toHaveLength(details.length)
      expect(entries).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: '<template>' }),
          expect.objectContaining({ name: '<script setup>' }),
          expect.objectContaining({ name: '<style>' }),
          expect.objectContaining({ name: '<preview>' }),
        ]),
      )
      expect(entries).not.toEqual(
        expect.arrayContaining([expect.objectContaining({ name: '<script>' })]),
      )
    })

    test('completions when script setup is present', async () => {
      const { entries, details } = await getCompletionsIn('SFC-ScriptSetup.vue')

      expect(entries).toHaveLength(details.length)
      expect(entries).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: '<template>' }),
          expect.objectContaining({ name: '<script>' }),
          expect.objectContaining({ name: '<style>' }),
        ]),
      )
      expect(entries).not.toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: '<preview>' }),
          expect.objectContaining({ name: '<script setup>' }),
        ]),
      )
    })

    test('completions when script + template is present', async () => {
      const { entries, details } = await getCompletionsIn(
        'SFC-ScriptTemplate.vue',
      )

      expect(entries).toHaveLength(details.length)
      expect(entries).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: '<style>' }),
          expect.objectContaining({ name: '<preview>' }),
        ]),
      )
      expect(entries).not.toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: '<script>' }),
          expect.objectContaining({ name: '<template>' }),
        ]),
      )
    })

    test('completions when  template is present', async () => {
      const { entries, details } = await getCompletionsIn('SFC-Template.vue')

      expect(entries).toHaveLength(details.length)
      expect(entries).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: '<script>' }),
          expect.objectContaining({ name: '<script setup>' }),
          expect.objectContaining({ name: '<style>' }),
          expect.objectContaining({ name: '<preview>' }),
        ]),
      )
      expect(entries).not.toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: '<template>' }),
        ]),
      )
    })
  })
})
