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

    await server.sendCommand('configure', { preferences: {}, watchOptions: {} })
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
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(file, `<HelloWorld `, '<'.length),
      )

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

    it('should should provide completions in interpolation expression', async () => {
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

    it('should should provide tag completion', async () => {
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
      expect(body?.entries).toContainEqual(
        expect.objectContaining({ name: 'MyWorld' }),
      )
      expect(body?.entries).not.toContainEqual(
        expect.objectContaining({ name: '$props' }),
      )
      expect(body?.entries).not.toContainEqual(
        expect.objectContaining({ name: 'window' }),
      )
    })
  })
})
