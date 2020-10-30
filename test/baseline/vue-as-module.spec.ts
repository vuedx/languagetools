import Path from 'path'
import { findPositionOrThrowIn, toNormalizedPath } from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'

const projects = [
  'javascript',
  'typescript',
  'javascript-with-config',
  'typescript-with-config',
]

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

describe.each(projects)('project: %s', (project) => {
  const projectPath = toNormalizedPath(
    Path.resolve(__dirname, '../../samples/', project),
  )
  const ext = project.includes('javascript') ? 'js' : 'ts'

  function abs(fileName: string) {
    return toNormalizedPath(Path.resolve(projectPath, fileName))
  }

  it('should resolve .vue import in .{js,ts} file', async () => {
    const fileName = abs(`src/main.${ext}`)

    await server.sendCommand('updateOpen', {
      openFiles: [{ projectRootPath: projectPath, file: fileName }],
    })
    await server.sendCommand('geterr', { files: [fileName], delay: 0 })

    const { body: semanticDiag } = await server.waitForEvent('semanticDiag')
    expect(semanticDiag?.file).toBe(fileName)
    expect(semanticDiag?.diagnostics).toHaveLength(0)

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
      openFiles: [{ projectRootPath: projectPath, file: fileName }],
    })
    await server.sendCommand('geterr', { files: [fileName], delay: 0 })

    const { body: semanticDiag } = await server.waitForEvent('semanticDiag')
    expect(semanticDiag?.file).toBe(fileName)
    expect(semanticDiag?.diagnostics).toHaveLength(0)

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
})
