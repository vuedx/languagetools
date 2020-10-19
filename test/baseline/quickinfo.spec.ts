import Path from 'path'
import { findPositionIn } from 'test/support/helpers'
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

  const sources = [
    'Javascript.vue',
    'Typescript.vue',
    'Javascript.jsx',
    'Typescript.tsx',
  ]

  describe.each(sources)('in %s', (source) => {
    const file = abs(`src/${source}`)

    beforeAll(async () => {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath: projectPath }],
      })
    })

    it('should show resolved module path on hovering .vue import', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionIn(file, `'./components/HelloWorld.vue'`, 3),
      )

      expect(body?.displayString).toBe(
        `module "${abs('src/components/HelloWorld.vue')}"`,
      )

      expect(body?.kind).toBe('module')
    })

    it('should show resolved module path on hovering package import', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionIn(file, `'vue'`, 3),
      )

      expect(body?.displayString).toEqual(
        expect.stringMatching(/^module "(.*)node_modules\/vue\/dist\/vue"$/),
      )
      expect(body?.kind).toBe('module')
    })

    it('should show import name of local component on hovering component tag', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionIn(file, `<HelloWorld `, 3),
      )

      expect(body?.displayString).toBe('import HelloWorld')
      expect(body?.kind).toBe('alias')
    })

    it('should show prop type on hovering attribute', async () => {
      const { body } = await server.sendCommand(
        'quickinfo',
        await findPositionIn(file, `name="Jane"`, 3),
      )

      expect(body?.displayString).toBe('(JSX attribute) name: string')
      expect(body?.kind).toBe('JSX attribute')
    })
  })
})
