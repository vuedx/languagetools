import { createEditorContext, getProjectPath } from '../support/helpers'
import { TestServer } from '../support/TestServer'
const data = {
  ts: [
    'typescript-unconfigured',
    'typescript-configured-include-directory',
    'typescript-configured-include-file',
  ],
  js: [
    'javascript-unconfigured',
    'javascript-configured-include-directory',
    'javascript-configured-include-file',
  ],
} as const

describe('resolutions', () => {
  const server = new TestServer()
  afterAll(async () => await server.close())
  describe.each(['js', 'ts'] as const)('project', (ext) => {
    const projects = data[ext]

    describe.each(projects)('%s', (project) => {
      const editor = createEditorContext(server, getProjectPath(project))
      afterEach(async () => await editor.closeAll())

      test('finds .vue root files when a .ts file from project is opened', async () => {
        await editor.open(`src/a.${ext}`)
        const projectInfo = await editor.getProjectInfo(`src/a.${ext}`)

        expect(projectInfo.fileNames).toMatchObject(
          expect.arrayContaining([
            editor.abs(`src/a.${ext}`),
            editor.abs(`src/b.${ext}`),
            editor.abs('src/A.vue.tsx'),
            editor.abs('src/B.vue.tsx'),
          ]),
        )
      })

      test('finds .vue root files when a .vue file from project is opened', async () => {
        await editor.open('src/A.vue')
        const projectInfo = await editor.getProjectInfo('src/A.vue')

        expect(projectInfo.fileNames).toMatchObject(
          expect.arrayContaining([
            editor.abs(`src/a.${ext}`),
            editor.abs(`src/b.${ext}`),
            editor.abs('src/A.vue.tsx'),
            editor.abs('src/B.vue.tsx'),
          ]),
        )
      })

      test(`resolves .vue imports in .${ext} files`, async () => {
        await editor.open(`src/a.${ext}`)
        const diagnostics = await editor.getDiagnostics(`src/a.${ext}`)

        expect(diagnostics.semantic).toHaveLength(0)
      })

      test('resolves .vue imports in .vue files', async () => {
        await editor.open('src/A.vue')
        const diagnostics = await editor.getDiagnostics('src/A.vue')

        expect(diagnostics.semantic).toHaveLength(0)
      })

      test('no compler options issues', async () => {
        await editor.open('src/A.vue')
        const diagnostics = await editor.getCompilerDiagnostics('src/A.vue')
        expect(diagnostics).toHaveLength(0)
      })
    })

    describe.each(projects)('%s', (project) => {
      if (!/^(java|type)script-configured-include-file$/.test(project)) return
      const editor = createEditorContext(server, getProjectPath(project))
      afterEach(async () => await editor.closeAll())
      test('finds .vue root files when entry file is opened', async () => {
        await editor.open(`src/main.${ext}`)
        const projectInfo = await editor.getProjectInfo(`src/main.${ext}`)

        expect(projectInfo.fileNames).toMatchObject(
          expect.arrayContaining([
            editor.abs(`src/a.${ext}`),
            editor.abs(`src/b.${ext}`),
            editor.abs('src/A.vue.tsx'),
            editor.abs('src/B.vue.tsx'),
          ]),
        )
      })
    })
  })
})
