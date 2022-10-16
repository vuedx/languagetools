import { isNotNull } from '@vuedx/shared'
import type { PluginConfig } from '@vuedx/typescript-plugin-vue'
import { Container } from 'inversify'
import 'reflect-metadata'
import vscode from 'vscode'
import { LanguageClient } from 'vscode-languageclient/node'
import { createClient } from './client'
import { OpenVirtualFileCommand } from './commands/openVirtualFile'
import { SelectVirtualFileCommand } from './commands/selectVirtualFile'
import { VueVirtualDocumentProvider } from './scheme/vue'
import { PluginCommunicationService } from './services/PluginCommunicationService'
import { StyleLanguageProxy } from './services/StyleLanguageProxy'
import { TemplateLanguageProxy } from './services/TemplateLanguageProxy'
import { TriggerCompletionService } from './services/TriggerCompletionService'
import { TwoSlashService } from './services/TwoSlashService'
import { VirtualFileSwitcher } from './services/VirtualFileSwitcher'

let client: LanguageClient | undefined

export async function activate(
  context: vscode.ExtensionContext,
): Promise<void> {
  const container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Singleton',
  })

  client = createClient(context)

  container.bind('context').toConstantValue(context)
  context.subscriptions.push(
    container.get(PluginCommunicationService).install(),
    container.get(StyleLanguageProxy).install(),
    container.get(TemplateLanguageProxy).install(),
    container.get(VueVirtualDocumentProvider).install(),
    container.get(OpenVirtualFileCommand).install(),
    container.get(SelectVirtualFileCommand).install(),
    container.get(VirtualFileSwitcher).install(),
    container.get(TwoSlashService).install(),
    container.get(TriggerCompletionService).install(),
    new vscode.Disposable(() => container.unbindAll()),
  )
  const ts = vscode.extensions.getExtension(
    'vscode.typescript-language-features',
  )
  const config = getConfig(container.get(PluginCommunicationService))
  if (ts != null) {
    if (!ts.isActive) {
      await ts.activate()
    }

    const api = ts.exports.getAPI(0)
    if (api != null) {
      // sync now
      syncConfig(api, config)

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

  await client.start()
  await checkForConflicts()
}

export async function deactivate(): Promise<void> {
  await client?.stop()
}

function syncConfig(api: any, config: PluginConfig): void {
  api.configurePlugin('@vuedx/typescript-plugin-vue', config)
  void vscode.commands.executeCommand(
    'setContext',
    'vuedx.debug',
    vscode.workspace.getConfiguration('vuedx.debug'),
  )
}

function getConfig(service: PluginCommunicationService): PluginConfig {
  const config = vscode.workspace.getConfiguration('vuedx')
  return {
    extensionSocketId: service.socketId,
    enabled: config.get<boolean>('enabled') ?? true,
    telemetry: config.get<boolean>('telemetry') ?? true,
    debugSourceMaps: config.get<boolean>('debugSourceMaps'),
    preferences: { ...config.get('preferences') },
  }
}

async function checkForConflicts(): Promise<void> {
  const config = vscode.workspace.getConfiguration('vuedx')
  if (config.get<boolean>('checkForExtensionConflicts') !== true) {
    return
  }

  const ids = [
    'johnsoncodehk.volar',
    'Vue.volar',
    'Vue.vscode-typescript-vue-plugin',
    'octref.vetur',
  ]
  const extensions = ids
    .map((id) => vscode.extensions.getExtension(id))
    .filter(isNotNull)
    .filter((extension) => extension.isActive)

  if (extensions.length === 0) return

  const result = await vscode.window.showInformationMessage(
    `There are active extensions that may conflict with VueDX. Would you like to disable them?`,
    'Show conflicts',
    'Do not show again',
  )

  if (result === 'Show conflicts') {
    const query = '@enabled ' + ids.join(' ')

    await vscode.commands.executeCommand('workbench.extensions.search', query)
  } else if (result === 'Do not show again') {
    await config.update('checkForExtensionConflicts', false, true)
  }
}
