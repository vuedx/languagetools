import { createVersionedCache } from '@vuedx/shared'
import {
  ClientCapabilities,
  DocumentContext,
  getCSSLanguageService,
  getLESSLanguageService,
  getSCSSLanguageService,
  LanguageService,
  newCSSDataProvider,
  Stylesheet,
} from 'vscode-css-languageservice'
import { Position, TextDocument } from 'vscode-languageserver-textdocument'
import { CompletionList, Hover } from 'vscode-languageserver-types'
import { FileSystemProvider } from '../FileSystemProvider'
import { VUE_CSS_EXTENSIONS } from './languageFacts/css'
import { LanguageMode } from './LanguageMode'

const markdown: ClientCapabilities = {
  textDocument: {
    completion: {
      completionItem: { documentationFormat: ['markdown', 'plaintext'] },
    },
    hover: {
      contentFormat: ['markdown', 'plaintext'],
    },
  },
}

const plaintext: ClientCapabilities = {
  textDocument: {
    completion: {
      completionItem: { documentationFormat: ['plaintext'] },
    },
    hover: {
      contentFormat: ['plaintext'],
    },
  },
}

class BaseLanguageMode implements LanguageMode {
  constructor(
    public readonly languageId: string,
    private readonly service: LanguageService,
  ) {}

  private readonly documents = createVersionedCache<TextDocument, Stylesheet>(
    (document) => document.version,
  )

  private getStylesheet(document: TextDocument): Stylesheet {
    return this.documents.resolve(document, (document) =>
      this.service.parseStylesheet(document),
    )
  }

  private readonly context: DocumentContext = {
    resolveReference: (_ref, _base) => {
      return undefined // todo: implement
    },
  }

  public async complete(
    document: TextDocument,
    position: Position,
  ): Promise<CompletionList> {
    return await this.service.doComplete2(
      document,
      position,
      this.getStylesheet(document),
      this.context,
    )
  }

  public async hover(
    document: TextDocument,
    position: Position,
  ): Promise<Hover | null> {
    return this.service.doHover(
      document,
      position,
      this.getStylesheet(document),
    )
  }

  public dispose(): void {
    this.documents.clear()
  }
}

export class LanguageModeCSS extends BaseLanguageMode {
  constructor(fs: FileSystemProvider, supportMarkdown: boolean = true) {
    super(
      'css',
      getCSSLanguageService({
        useDefaultDataProvider: true,
        clientCapabilities: supportMarkdown ? markdown : plaintext,
        customDataProviders: [newCSSDataProvider(VUE_CSS_EXTENSIONS)],
        fileSystemProvider: fs as any,
      }),
    )
  }
}

export class LanguageModeSCSS extends BaseLanguageMode {
  constructor(fs: FileSystemProvider, supportMarkdown: boolean = true) {
    super(
      'scss',
      getSCSSLanguageService({
        useDefaultDataProvider: true,
        clientCapabilities: supportMarkdown ? markdown : plaintext,
        customDataProviders: [newCSSDataProvider(VUE_CSS_EXTENSIONS)],
        fileSystemProvider: fs as any,
      }),
    )
  }
}

export class LanguageModeLESS extends BaseLanguageMode {
  constructor(fs: FileSystemProvider, supportMarkdown: boolean = true) {
    super(
      'less',
      getLESSLanguageService({
        useDefaultDataProvider: true,
        clientCapabilities: supportMarkdown ? markdown : plaintext,
        customDataProviders: [newCSSDataProvider(VUE_CSS_EXTENSIONS)],
        fileSystemProvider: fs as any,
      }),
    )
  }
}
