import { debug, ucfirst } from '@vuedx/shared'
import type { TextDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type {
  CompletionList,
  HTMLDocument,
  LanguageService as VSCodeHtmlLanguageService,
  Position,
} from 'vscode-html-languageservice'
import {
  getLanguageService,
  newHTMLDataProvider,
} from 'vscode-html-languageservice'
import type { LanguageService } from '../contracts/LanguageService'
import { CacheService } from '../services/CacheService'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import { data } from './languageFacts/vue'

abstract class HtmlLanguageService implements LanguageService {
  protected readonly logger = LoggerService.getLogger('HTML')

  private readonly documents = new CacheService<HTMLDocument>((fileName) =>
    this.fs.getVersion(fileName),
  )

  protected constructor(
    protected readonly fs: FilesystemService,
    protected readonly service: VSCodeHtmlLanguageService,
  ) {}

  getDiagnostics(_fileName: string): LanguageService.Diagnostic[] {
    return []
  }

  getDefinitionAt(
    _fileName: string,
    _position: LanguageService.Position,
  ): LanguageService.Definition[] {
    return []
  }

  getQuickInfoAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.QuickInfo | null {
    return this.service.doHover(
      this.getTextDocument(fileName),
      position,
      this.getHTMLDocument(fileName),
    )
  }

  public getCompletionsAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.CompletionList {
    return this.service.doComplete(
      this.getTextDocument(fileName),
      position,
      this.getHTMLDocument(fileName),
      {
        attributeDefaultValue: 'doublequotes',
        hideAutoCompleteProposals: false,
      },
    )
  }

  protected getTextDocument(fileName: string): TextDocument {
    const doc = this.fs.getSourceFile(fileName)

    if (doc == null) throw new Error(`File not found: ${fileName}`)

    return doc
  }

  protected getHTMLDocument(fileName: string): HTMLDocument {
    return this.documents.withCache(fileName, (document) => {
      if (document != null) return document

      return this.service.parseHTMLDocument(this.getTextDocument(fileName))
    })
  }

  public dispose(): void {
    // noop
  }
}

@injectable()
export class VueHtmlLanguageService extends HtmlLanguageService {
  public constructor(
    @inject(FilesystemService)
    fs: FilesystemService,
  ) {
    super(fs, getLanguageService({ useDefaultDataProvider: true }))
  }

  public readonly supportedLanguages = ['vue-html']

  public getCompletionsAtPosition(
    fileName: string,
    position: Position,
  ): CompletionList {
    const result = super.getCompletionsAtPosition(fileName, position)

    result.items = result.items.map((item) => {
      if (item.label.startsWith('on')) {
        const label = item.label
        item.label = `on${ucfirst(item.label.slice(2))}`
        if (item.insertText != null) {
          item.insertText = item.insertText.replace(label, item.label)
        }
        if (item.textEdit != null) {
          item.textEdit.newText = item.textEdit.newText.replace(
            label,
            item.label,
          )
        }
      }
      return item
    })

    return result
  }

  public getQuickInfoAtPosition(
    fileName: string,
    position: LanguageService.Position,
  ): LanguageService.QuickInfo | null {
    this.logger.debug(
      `QuickInfo at ${fileName}:${position.line}:${position.character}`,
    )

    const text = this.getTextDocument(fileName)
    const html = this.getHTMLDocument(fileName)
    const node = html.findNodeAt(text.offsetAt(position))

    // <template> block is case-sensitive and
    // capital letters are only used in component
    // names.
    if (node.tag != null && /[A-Z]/.test(node.tag)) {
      this.logger.debug(`Skipping component node: ${node.tag}`)
      return null
    }

    return this.service.doHover(text, position, html)
  }
}

@injectable()
export class VueSfcLanguageService extends HtmlLanguageService {
  public constructor(
    @inject(FilesystemService)
    fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {
    super(
      fs,
      getLanguageService({
        useDefaultDataProvider: false,
        customDataProviders: [newHTMLDataProvider('vue', data)],
      }),
    )
  }

  public readonly supportedLanguages = ['vue']

  @debug()
  public getCompletionsAtPosition(
    fileName: string,
    position: Position,
  ): LanguageService.CompletionList {
    const result: LanguageService.CompletionList = {
      isIncomplete: false,
      items: [],
    }
    const blocks = this.#getBlockCompletions(fileName)
    const file = this.fs.getVueFile(fileName)
    if (file != null) {
      const offset = file.offsetAt({ line: position.line, character: 0 })
      const text = file.getText().slice(offset, file.offsetAt(position))
      if (text.trim().length > 0) {
        result.items.push(
          ...super
            .getCompletionsAtPosition(fileName, position)
            .items.filter((item) => !/doctype|data-/i.test(item.label)),
        )
      } else {
        const isEmpty = file.getText().trim().length === 0
        result.items.push(
          ...blocks.filter((block) => {
            switch (block._kind) {
              case 'snippet':
                return isEmpty
              case 'script':
                return file.descriptor.script == null
              case 'scriptSetup':
                return file.descriptor.scriptSetup == null
              case 'template':
                return file.descriptor.template == null
              default:
                return true
            }
          }),
        )
      }
    } else {
      result.items.push(...blocks)
    }

    return result
  }

  #getBlockCompletions(
    fileName: string,
  ): Array<
    LanguageService.CompletionItem & {
      _kind: 'snippet' | 'script' | 'scriptSetup' | 'style' | 'template'
    }
  > {
    const preferences = this.ts.getVuePrefrencesFor(fileName)
    const scriptLang = preferences.script.language ?? '$1'
    const styleLang = preferences.style.language ?? '$1'
    const scriptSetupTemplate =
      preferences.script.mode === 'setup' ? ' setup' : ''
    const styleLangTemplate =
      preferences.style.language === 'css' || preferences.style.language == null
        ? ''
        : ` lang="${preferences.style.language}"`
    const scriptLangTemplate =
      preferences.script.language === 'js' ||
      preferences.script.language == null
        ? ''
        : ` lang="${preferences.script.language}"`

    return [
      {
        _kind: 'snippet',
        label: `snippet: script${scriptSetupTemplate} + template`,
        sortText: '0',
        insertTextFormat: 2,
        insertText: `<script${scriptSetupTemplate}${scriptLangTemplate}>\n$0\n</script>\n\n<template>\n  \n</template>\n`,
        kind: 11,
        documentation: {
          kind: 'markdown',
          value: [
            `Snippet with script${scriptSetupTemplate} and template block.`,
            '[Vue Docs](https://vuejs.org/api/sfc-spec.html#language-blocks)',
          ].join('\n\n'),
        },
      },
      {
        _kind: 'snippet',
        label: `snippet: script${scriptSetupTemplate} + template + style`,
        sortText: '0',
        insertTextFormat: 2,
        insertText: `<script${scriptSetupTemplate}${scriptLangTemplate}>\n$0\n</script>\n\n<template>\n  \n</template>\n\n<style${styleLangTemplate}>\n\n</style>\n`,
        kind: 11,
        documentation: {
          kind: 'markdown',
          value: [
            `Snippet with script${scriptSetupTemplate}, template and style block.`,
            '[Vue Docs](https://vuejs.org/api/sfc-spec.html#language-blocks)',
          ].join('\n\n'),
        },
      },
      {
        _kind: 'scriptSetup',
        label: 'script setup',
        sortText: '1',
        insertTextFormat: 2,
        insertText:
          scriptLang === 'js'
            ? `<script setup>\n\t$0\n</script>`
            : `<script setup lang="${scriptLang}">\n$0\n</script>`,
        kind: 11,
        documentation: {
          kind: 'markdown',
          value: [
            'Each *.vue file can contain at most one `<script setup>` block at a time (excluding normal `<script>`).',
            "The script is pre-processed and used as the component's `setup()` function, which means it will be executed for each instance of the component. Top-level bindings in `<script setup>` are automatically exposed to the template. For more details, [see dedicated documentation on `<script setup>`](https://vuejs.org/api/sfc-script-setup.html).",
            '[Vue Docs](https://vuejs.org/api/sfc-spec.html#language-blocks)',
          ].join('\n\n'),
        },
      },
      {
        _kind: 'template',
        label: 'template',
        sortText: '2',
        insertTextFormat: 2,
        insertText: `<template>\n$0\n</template>`,
        kind: 11,
        documentation: {
          kind: 'markdown',
          value: [
            'Each `*.vue` file can contain at most one top-level `<template>` block at a time.',
            'Contents will be extracted and passed on to `@vue/compiler-dom`, pre-compiled into JavaScript render functions, and attached to the exported component as its render option.',
            '[Vue Docs](https://vuejs.org/api/sfc-spec.html#language-blocks)',
          ].join('\n\n'),
        },
      },
      {
        _kind: 'script',
        label: 'script',
        sortText: '3',
        insertTextFormat: 2,
        insertText:
          scriptLang === 'js'
            ? `<script>\n\t$0\n</script>`
            : `<script lang="${scriptLang}">\n$0\n</script>`,
        kind: 11,
        documentation: {
          kind: 'markdown',
          value: [
            'Each *.vue file can contain at most one `<script>` block at a time (excluding `<script setup>`).',
            'The script is executed as an ES Module.',
            'The default export should be a Vue component options object, either as a plain object or as the return value of [`defineComponent()`](https://vuejs.org/api/general.html#definecomponent).',
            '[Vue Docs](https://vuejs.org/api/sfc-spec.html#language-blocks)',
          ].join('\n\n'),
        },
      },
      {
        _kind: 'style',
        label: 'style',
        sortText: '4',
        insertTextFormat: 2,
        insertText:
          styleLang === 'css'
            ? `<style>\n$0\n</style>`
            : `<style lang="${styleLang}">\n$0\n</style>`,
        kind: 11,
        documentation: {
          kind: 'markdown',
          value: [
            'A single `*.vue` file can contain multiple `<style>` tags.',
            'A `<style>` tag can have scoped or module attributes (see [SFC Style Features](https://vuejs.org/api/sfc-css-features.html) for more details) to help encapsulate the styles to the current component. Multiple `<style>` tags with different encapsulation modes can be mixed in the same component.',
            '[Vue Docs](https://vuejs.org/api/sfc-spec.html#language-blocks)',
          ].join('\n\n'),
        },
      },
    ]
  }
}
