import Path from 'path'
import { findPositionOrThrowIn, toNormalizedPath } from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'

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

const projectRootPath = toNormalizedPath(
  Path.resolve(__dirname, '../../samples/vue-2'),
)

function abs(fileName: string): string {
  return toNormalizedPath(Path.resolve(projectRootPath, fileName))
}

function checkEventFile(file: string) {
  return (event: any) => {
    return event.body?.file === file
  }
}
describe('Vue 2 Support', () => {
  it('should resolve .vue import in .{js,ts} file', async () => {
    const fileName = abs(`src/main.ts`)

    await server.sendCommand('updateOpen', {
      openFiles: [{ projectRootPath: projectRootPath, file: fileName }],
    })

    const { body: definitionAndBoundSpan } = await server.sendCommand(
      'definitionAndBoundSpan',
      await findPositionOrThrowIn(fileName, `'./App.vue'`, 3),
    )

    expect(definitionAndBoundSpan.definitions).toHaveLength(1)
    expect(definitionAndBoundSpan.definitions[0].file).toBe(abs(`src/App.vue`))

    await server.sendCommand('updateOpen', { closedFiles: [fileName] })
  })

  it('should resolve .vue import in .vue file', async () => {
    const fileName = abs(`src/App.vue`)

    await server.sendCommand('updateOpen', {
      openFiles: [{ projectRootPath: projectRootPath, file: fileName }],
    })

    const { body: definitionAndBoundSpan } = await server.sendCommand(
      'definitionAndBoundSpan',
      await findPositionOrThrowIn(fileName, `'./components/HelloWorld.vue'`, 3),
    )

    expect(definitionAndBoundSpan.definitions).toHaveLength(1)
    expect(definitionAndBoundSpan.definitions[0].file).toBe(
      abs(`src/components/HelloWorld.vue`),
    )

    await server.sendCommand('updateOpen', { closedFiles: [fileName] })
  })

  it('should check props', async () => {
    const file = abs(`src/App.vue`)
    try {
      await server.sendCommand('updateOpen', {
        openFiles: [{ file, projectRootPath }],
      })

      void server.sendCommand('geterr', {
        files: [file],
        delay: 0,
      })

      const { body } = await server.waitForEvent(
        'semanticDiag',
        checkEventFile(file),
      )
      expect(body?.diagnostics).toHaveLength(1)
      expect(body?.diagnostics).toEqual([
        expect.objectContaining({
          category: 'error',
          code: 2322,
        }),
      ])
    } finally {
      await server.sendCommand('updateOpen', { closedFiles: [file] })
    }
  })
})
