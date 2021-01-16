import 'reflect-metadata'

import vscode from 'vscode'
import { Container } from 'inversify'
import { OpenVirtualFileCommand } from './commands/openVirtualFile'
import { VueVirtualDocumentProvider } from './scheme/vue'
import { DocumentService } from './services/documents'
import { VirtualFileSwitcher } from './services/VirtualFileSwitcher'
import { StyleLanguageProxy } from './services/StyleLanguageProxy'
import { TemplateLanguageProxy } from './services/TemplateLanguageProxy'

export async function activate(
  context: vscode.ExtensionContext,
): Promise<void> {
  const container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Singleton',
  })

  container.bind('context').toConstantValue(context)
  context.subscriptions.push(
    container.get(DocumentService).install(),
    container.get(StyleLanguageProxy).install(),
    container.get(TemplateLanguageProxy).install(),
    container.get(VueVirtualDocumentProvider).install(),
    container.get(OpenVirtualFileCommand).install(),
    container.get(VirtualFileSwitcher).install(),
    new vscode.Disposable(() => container.unbindAll()),
  )
  const ts = vscode.extensions.getExtension(
    'vscode.typescript-language-features',
  )

  if (ts != null) {
    if (!ts.isActive) {
      await ts.activate()
    }

    const api = ts.exports.getAPI(0)
    if (api != null) {
      context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((event) => {
          if (event.affectsConfiguration('vuedx')) {
            syncConfig(api, getConfig())
          }
        }),
      )
    }
  }
}

function syncConfig(api: any, config: any): void {
  api.configurePlugin('@vuedx/typescript-standalone', config)
}

function getConfig(): any {
  const config = vscode.workspace.getConfiguration('vuedx')

  return {
    telemetry: config.get('telemetry') ?? true,
    features: {
      diagnostics: config.get('features.diagnostics') ?? true,
      organizeImports: config.get('features.organizeImports') ?? true,
      quickInfo: config.get('features.quickInfo') ?? true,
      rename: config.get('features.rename') ?? true,
      refactor: config.get('features.refactor') ?? true,
      goto: config.get('features.goto') ?? true,
      tagCompletions: config.get('features.tagCompletions') ?? ['html', 'svg'],
    },
  }
}
