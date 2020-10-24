import Path from 'path'
import { findPositionOrThrowIn } from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'

describe('rename', () => {
  const projectPath = Path.resolve(__dirname, '../../samples/feature-rename')

  function abs(fileName: string) {
    return Path.resolve(projectPath, fileName)
  }

  let server: TestServer
  beforeAll(async () => {
    server = new TestServer()

    await server.sendCommand('configure', {
      preferences: {
        providePrefixAndSuffixTextForRename: true,
        allowRenameOfImportPath: true,
      },
      watchOptions: {},
    })
    await server.sendCommand('compilerOptionsForInferredProjects', {
      options: {
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
    'Javascript.jsx',
    'Typescript.tsx',
  ])('in %s', (source) => {
    const file = abs(`src/${source}`)

    beforeAll(async () => {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath: projectPath }],
      })
    })

    it('should allow renaming .vue file', async () => {
      const { body } = await server.sendCommand('rename', {
        ...(await findPositionOrThrowIn(
          file,
          `'./components/HelloWorld.vue'`,
          3,
        )),
        findInComments: false,
        findInStrings: false,
      })

      expect(body).toBeTruthy()
      expect(body?.info.canRename).toBe(true)

      if (body?.info.canRename) {
        expect(body.info.fileToRename).toBe(
          abs('src/components/HelloWorld.vue'),
        )
        const position = await findPositionOrThrowIn(
          file,
          `'./components/HelloWorld.vue'`,
          `'./components/`.length,
        )
        expect(body.info.triggerSpan.start.line).toBe(position.line)
        expect(body.info.triggerSpan.end.line).toBe(position.line)

        expect(body.info.triggerSpan.start.offset).toBe(position.offset)
        expect(body.info.triggerSpan.end.offset).toBe(
          position.offset + 'HelloWorld'.length,
        )

        expect(body.locs.map((loc) => loc.file)).toEqual([
          abs('src/Javascript.jsx'),
          abs('src/Javascript.vue'),
          abs('src/JavascriptSetup.vue'),
          abs('src/Typescript.tsx'),
          abs('src/Typescript.vue'),
          abs('src/TypescriptSetup.vue'),
        ])

        await Promise.all(
          body.locs.map(async (loc) => {
            const position = await findPositionOrThrowIn(
              loc.file,
              `'./components/HelloWorld.vue'`,
            )

            expect(loc.locs).toHaveLength(1)
            expect(loc.locs[0].start.line).toBe(position.line)
          }),
        )
      }
    })
  })
})
