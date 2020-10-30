import Path from 'path'
import {
  findPositionIn,
  findPositionOrThrowIn,
  toNormalizedPath,
} from 'test/support/helpers'
import { TestServer } from 'test/support/TestServer'

describe('goto-definition', () => {
  const projectPath = toNormalizedPath(
    Path.resolve(__dirname, '../../samples/feature-goto-definition'),
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

    it('should jump to default export in .vue file when ⌘+click on import source', async () => {
      const { body } = await server.sendCommand(
        'definitionAndBoundSpan',
        await findPositionOrThrowIn(file, `'./components/HelloWorld.vue'`, 3),
      )

      expect(body?.definitions).toHaveLength(1)
      expect(body?.definitions[0].file).toBe(
        abs('src/components/HelloWorld.vue'),
      )
    })

    it('should jump to default export in .vue file when ⌘+click on HTML/JSX tag', async () => {
      const { body } = await server.sendCommand(
        'definitionAndBoundSpan',
        await findPositionOrThrowIn(file, `<HelloWorld `, 3),
      )

      expect(body?.definitions).toHaveLength(1)
      expect(body?.definitions[0].file).toBe(
        abs('src/components/HelloWorld.vue'),
      )
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

    it('should jump to function from setup() when ⌘+click expression in template', async () => {
      const { body } = await server.sendCommand(
        'definitionAndBoundSpan',
        await findPositionOrThrowIn(
          file,
          `@click="increase"`,
          '@click="i'.length,
        ),
      )

      expect(body?.definitions).toHaveLength(1)
      expect(body?.definitions[0].file).toBe(file)

      const position =
        (await findPositionIn(
          file,
          `return { one, two, increase, decrease }`,
          `return { one, two, `.length,
        )) ??
        (await findPositionIn(
          file,
          `export function increase()`,
          `export function `.length,
        ))

      expect(body?.definitions[0].start).toEqual({
        line: position?.line,
        offset: position?.offset,
      })
    })
    it('should jump to ref/variable from setup() when ⌘+click expression in template', async () => {
      const { body } = await server.sendCommand(
        'definitionAndBoundSpan',
        await findPositionOrThrowIn(file, `{{ one }}`, '{{ o'.length),
      )

      expect(body?.definitions).toHaveLength(1)
      expect(body?.definitions[0].file).toBe(file)

      const position =
        (await findPositionIn(
          file,
          `return { one, two, increase, decrease }`,
          `return { `.length,
        )) ??
        (await findPositionIn(
          file,
          `export const one =`,
          `export const `.length,
        ))

      expect(body?.definitions[0].start).toEqual({
        line: position?.line,
        offset: position?.offset,
      })
    })
    it('should jump to prop when ⌘+click expression in template', async () => {
      const { body } = await server.sendCommand(
        'definitionAndBoundSpan',
        await findPositionOrThrowIn(file, `{{ name }}`, '{{ n'.length),
      )

      expect(body?.definitions).toHaveLength(1)
      expect(body?.definitions[0].file).toBe(file)

      const position = await findPositionIn(file, `name: { type: String }`)

      expect(body?.definitions[0].start).toEqual({
        line: position?.line,
        offset: position?.offset,
      })
    })
    it('should jump to component definition when ⌘+click prop of external component in template', async () => {
      const { body } = await server.sendCommand(
        'definitionAndBoundSpan',
        await findPositionOrThrowIn(
          file,
          `<HelloWorld name=`,
          '<HelloWorld n'.length,
        ),
      )

      const helloFile = abs('src/components/HelloWorld.vue')
      expect(body?.definitions).toHaveLength(1)
      expect(body?.definitions[0].file).toBe(helloFile)

      const position = await findPositionIn(helloFile, `name: {`)

      expect(body?.definitions[0].start).toEqual({
        line: position?.line,
        offset: position?.offset,
      })
    })
  })
})
