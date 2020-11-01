import Path from 'path'
import { findPositionOrThrowIn, toNormalizedPath } from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'

describe('completioninfo', () => {
  const projectPath = toNormalizedPath(
    Path.resolve(__dirname, '../../samples/feature-completions'),
  )

  function abs(fileName: string) {
    return toNormalizedPath(Path.resolve(projectPath, fileName))
  }

  let server: TestServer
  beforeAll(async () => {
    server = new TestServer()

    await server.sendCommand('configure', { preferences: {}, watchOptions: {} })
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

    it('should provide info on import vue', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(file, `import {} from 'vue'`, 8),
      )

      expect(body?.entries.length).toBeGreaterThan(1)
      expect(body?.entries).toContainEqual({
        kind: 'function',
        kindModifiers: 'export,declare',
        name: 'defineComponent',
        sortText: '0',
      })
    })

    it('should show completion for props on render', async () => {
      const { body, ...rest } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(file, `<HelloWorld name`, 13),
      )

      expect(body?.entries.length).toBeGreaterThan(1)

      expect(body?.entries).toContainEqual({
        name: 'name',
        kind: 'JSX attribute',
        kindModifiers: '',
        sortText: '0',
      })
    })
  })

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

    it('should show prop type in template (prop: String)', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(
          file,
          `Name: {{ name }}`,
          'Name: {{ n'.length,
        ),
      )

      // expect(body?.displayString).toBe('var name: string')
    })

    it('should show prop type in template (prop: { type: String })', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(
          file,
          `Email: {{ email }}`,
          'Email: {{ e'.length,
        ),
      )

      // expect(body?.displayString).toBe('var email: string')
    })

    it('should show prop type in template (prop: [String, Number])', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(
          file,
          `Code: {{ code }}`,
          'Code: {{ c'.length,
        ),
      )

      // expect(body?.displayString).toBe('var code: string | number')
    })

    it('should show ref type from setup', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(
          file,
          `FullName: {{ fullname }}`,
          'FullName: {{ f'.length,
        ),
      )

      // expect(body?.displayString).toBe('var fullname: string')
    })

    it('should show values from setup', async () => {
      const { body } = await server.sendCommand(
        'completionInfo',
        await findPositionOrThrowIn(
          file,
          `AltCode: {{ altCode }}`,
          'AltCode: {{ a'.length,
        ),
      )

      // expect(body?.displayString).toBe('var altCode: number')
    })
  })
})
