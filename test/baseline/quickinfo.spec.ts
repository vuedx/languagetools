import Path from 'path'
import { findPositionOrThrowIn } from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'

describe('quickinfo', () => {
  const projectPath = Path.resolve(__dirname, '../../samples/feature-quickinfo')

  function abs(fileName: string) {
    return Path.resolve(projectPath, fileName)
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

    it('should show resolved module path on hovering .vue import', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionOrThrowIn(file, `'./components/HelloWorld.vue'`, 3),
      )

      expect(body?.displayString).toBe(
        `module "${abs('src/components/HelloWorld.vue')}"`,
      )

      expect(body?.kind).toBe('module')
    })

    it('should show resolved module path on hovering package import', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionOrThrowIn(file, `'vue'`, 3),
      )

      expect(body?.displayString).toEqual(
        expect.stringMatching(/^module "(.*)node_modules\/vue\/dist\/vue"$/),
      )
      expect(body?.kind).toBe('module')
    })

    it('should show import name of local component on hovering component tag', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionOrThrowIn(file, `<HelloWorld `, 3),
      )

      expect(body?.displayString).toBe('import HelloWorld')
      expect(body?.kind).toBe('alias')
    })

    it('should show prop type on hovering attribute', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionOrThrowIn(file, `name="Jane"`, 3),
      )

      expect(body?.displayString).toBe('(JSX attribute) name: string')
      expect(body?.kind).toBe('JSX attribute')
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
        'quickinfo',
        await findPositionOrThrowIn(
          file,
          `Name: {{ name }}`,
          'Name: {{ n'.length,
        ),
      )

      expect(body?.displayString).toBe('var name: string')
    })

    it('should show prop type in template (prop: { type: String })', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionOrThrowIn(
          file,
          `Email: {{ email }}`,
          'Email: {{ e'.length,
        ),
      )

      expect(body?.displayString).toBe('var email: string')
    })

    it('should show prop type in template (prop: [String, Number])', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionOrThrowIn(
          file,
          `Code: {{ code }}`,
          'Code: {{ c'.length,
        ),
      )

      expect(body?.displayString).toBe('var code: string | number')
    })

    it('should show ref type from setup', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionOrThrowIn(
          file,
          `FullName: {{ fullname }}`,
          'FullName: {{ f'.length,
        ),
      )

      expect(body?.displayString).toBe('var fullname: string')
    })

    it('should show values from setup', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionOrThrowIn(
          file,
          `AltCode: {{ altCode }}`,
          'AltCode: {{ a'.length,
        ),
      )

      expect(body?.displayString).toBe('var altCode: number')
    })
  })
})
