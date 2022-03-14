import type { PluginConfig } from '@vuedx/typescript-plugin-vue'
import { Container } from 'inversify'
import 'reflect-metadata'
import vscode from 'vscode'
import { OpenVirtualFileCommand } from './commands/openVirtualFile'
import { SelectVirtualFileCommand } from './commands/selectVirtualFile'
import { VueVirtualDocumentProvider } from './scheme/vue'
import { PluginCommunicationService } from './services/PluginCommunicationService'
import { StyleLanguageProxy } from './services/StyleLanguageProxy'
import { TemplateLanguageProxy } from './services/TemplateLanguageProxy'
import { VirtualFileSwitcher } from './services/VirtualFileSwitcher'

export async function activate(
  context: vscode.ExtensionContext,
): Promise<void> {
  const container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Singleton',
  })

  container.bind('context').toConstantValue(context)
  context.subscriptions.push(
    container.get(PluginCommunicationService).install(),
    container.get(StyleLanguageProxy).install(),
    container.get(TemplateLanguageProxy).install(),
    container.get(VueVirtualDocumentProvider).install(),
    container.get(OpenVirtualFileCommand).install(),
    container.get(SelectVirtualFileCommand).install(),
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
      // sync now
      syncConfig(api, getConfig(container.get(PluginCommunicationService)))

      // sync on change
      context.subscriptions.push(
        vscode.workspace.onDidChangeConfiguration((event) => {
          if (event.affectsConfiguration('vuedx')) {
            syncConfig(
              api,
              getConfig(container.get(PluginCommunicationService)),
            )
          }
        }),
      )
    }
  }
}

function syncConfig(api: any, config: any): void {
  api.configurePlugin('@vuedx/typescript-plugin-vue', config)
}

function getConfig(service: PluginCommunicationService): PluginConfig {
  const config = vscode.workspace.getConfiguration('vuedx')

  return {
    telemetry: config.get('telemetry') ?? true,
    extensionSocketId: service.socketId,
  }
}
