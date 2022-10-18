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
  describe.each(Object.keys(data) as Array<keyof typeof data>)(
    'project',
    (ext) => {
      const projects = data[ext]
      describe.each(projects)('%s', (project) => {
        const editor = createEditorContext(server, getProjectPath(project))
        afterEach(async () => {
          await editor.closeAll()
          await server.flush()
        })

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

        test('no complier options issues', async () => {
          await editor.open('src/A.vue')
          const diagnostics = await editor.getCompilerDiagnostics('src/A.vue')
          expect(diagnostics).toHaveLength(0)
        })

        test('detects config file', async () => {
          await editor.open('src/A.vue')
          const projectInfo = await editor.getProjectInfo('src/A.vue.tsx')
          if (project.includes('unconfigured')) {
            expect(projectInfo.configFileName).toEqual(
              expect.stringContaining('/dev/null/inferredProject'),
            )
          } else {
            expect(projectInfo.configFileName).toBe(
              editor.abs(ext + 'config.json'),
            )
          }
        })

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
    },
  )

  test('resolve .vue file from .ts entry file', async () => {
    const editor = createEditorContext(
      server,
      getProjectPath('typescript-configured-include-file'),
    )
    await editor.open(`src/main.ts`)
    const projectInfo = await editor.getProjectInfo(`src/main.ts`)
    expect(projectInfo.fileNames).toContain(editor.abs('src/main.ts'))
    expect(projectInfo.fileNames).toContain(editor.abs('src/A.vue.tsx'))
  })
})

describe('multiple projects', () => {
  const server = new TestServer()
  afterAll(async () => await server.close())

  test('open two projects', async () => {
    const a = createEditorContext(
      server,
      getProjectPath('typescript-configured-include-directory'),
    )
    const b = createEditorContext(
      server,
      getProjectPath('typescript-configured-include-file'),
    )

    await a.open('src/A.vue')
    await b.open('src/A.vue')

    {
      const projectInfo = await a.getProjectInfo('src/A.vue')

      expect(projectInfo.configFileName).toBe(a.abs('tsconfig.json'))
      expect(projectInfo.fileNames).toMatchObject(
        expect.arrayContaining([
          a.abs(`src/a.ts`),
          a.abs(`src/b.ts`),
          a.abs('src/A.vue.tsx'),
          a.abs('src/B.vue.tsx'),
        ]),
      )
    }

    {
      const projectInfo = await b.getProjectInfo('src/A.vue')

      expect(projectInfo.configFileName).toBe(b.abs('tsconfig.json'))
      expect(projectInfo.fileNames).toMatchObject(
        expect.arrayContaining([
          b.abs(`src/a.ts`),
          b.abs(`src/b.ts`),
          b.abs('src/A.vue.tsx'),
          b.abs('src/B.vue.tsx'),
        ]),
      )
    }
  })
})
