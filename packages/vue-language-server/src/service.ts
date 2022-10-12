import {
  FileSystemProvider,
  LanguageModeCSS,
  LanguageModeLESS,
  LanguageModeSCSS,
  LanguageModeVue,
  LanguageModeVueHTML,
  VueLanguageService,
  VueTextDocument,
} from '@vuedx/vue-languageservice'
import { TextDocuments } from 'vscode-languageserver'

export function createVueLanguageService(
  documents: TextDocuments<VueTextDocument>,
  fs: FileSystemProvider,
  supportsMarkdown: boolean = true,
): VueLanguageService {
  const service = new VueLanguageService()
  const known = new Set<string>(['vue'])

  documents.onDidOpen((event) => {
    event.document.getEmbeddedLanguageIds().forEach((languageId) => {
      if (known.has(languageId)) return
      known.add(languageId)

      switch (languageId) {
        case 'css':
          service.registerLanguageMode(
            new LanguageModeCSS(fs, supportsMarkdown),
          )
          break
        case 'scss':
          service.registerLanguageMode(
            new LanguageModeSCSS(fs, supportsMarkdown),
          )
          break
        case 'less':
          service.registerLanguageMode(
            new LanguageModeLESS(fs, supportsMarkdown),
          )
          break
        case 'vue-html':
          service.registerLanguageMode(
            new LanguageModeVueHTML(fs, supportsMarkdown),
          )
          break
      }
    })
  })

  service.registerLanguageMode(new LanguageModeVue(fs, supportsMarkdown))

  return service
}
