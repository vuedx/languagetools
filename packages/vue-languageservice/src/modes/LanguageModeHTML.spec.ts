import { TextDocument } from 'vscode-languageserver-textdocument'
import { FileType } from '../FileSystemProvider'
import { VueProjectService } from '../VueProjectService'
import { LanguageModeVue } from './LanguageModeHTML'

describe(LanguageModeVue, () => {
  const project = new VueProjectService({
    fileExists() {
      return false
    },
    readFile() {
      return ''
    },
    readDirectory() {
      return []
    },
    watchFile() {
      return {
        close() {},
      }
    },
    watchDirectory() {
      return {
        close() {},
      }
    },
  })
  const mode = new LanguageModeVue(
    project,
    {
      async stat() {
        return {
          ctime: 0,
          type: FileType.File,
          mtime: 0,
          size: 0,
        }
      },
    },
    true,
  )
  function createDoc(content: string) {
    return TextDocument.create('file:///test.vue', 'vue', 0, content)
  }

  test('block snippets', async () => {
    const doc = createDoc('<')
    const result = await mode.complete(doc, doc.positionAt(1))
    expect(result.items).toEqual(
      expect.arrayContaining(
        [
          {
            label: 'template',
            textEdit: expect.objectContaining({
              newText: 'template>\n  $0\n</template>',
            }),
          },
          {
            label: 'script',
            textEdit: expect.objectContaining({
              newText: 'script>\n$0\n</script>',
            }),
          },
          {
            label: 'style',
            textEdit: expect.objectContaining({
              newText: 'style>\n$0\n</style>',
            }),
          },
        ].map(expect.objectContaining),
      ),
    )
  })

  test('script block', async () => {
    const doc = createDoc('<sc')
    const result = await mode.complete(doc, doc.positionAt(3))
    expect(result.items).toEqual(
      expect.arrayContaining(
        [
          {
            label: 'script',
            textEdit: expect.objectContaining({
              newText: 'ript>\n$0\n</script>',
            }),
          },
          {
            label: 'script (ts)',
            textEdit: expect.objectContaining({
              newText: 'ript lang="ts">\n$0\n</script>',
            }),
          },
          {
            label: 'script (setup)',
            textEdit: expect.objectContaining({
              newText: 'ript setup>\n$0\n</script>',
            }),
          },
          {
            label: 'script (setup + ts)',
            preselect: true,
            textEdit: expect.objectContaining({
              newText: 'ript setup lang="ts">\n$0\n</script>',
            }),
          },
        ].map(expect.objectContaining),
      ),
    )
  })

  test('block attributes', async () => {
    const doc = createDoc('<script ')
    const result = await mode.complete(
      doc,
      doc.positionAt(doc.getText().length),
    )
    expect(result.items).toEqual(
      expect.arrayContaining(
        [
          {
            label: 'lang',
            textEdit: expect.objectContaining({
              newText: 'lang="$1"',
            }),
          },
          {
            label: 'setup',
            textEdit: expect.objectContaining({
              newText: 'setup',
            }),
          },
        ].map(expect.objectContaining),
      ),
    )
  })
})
