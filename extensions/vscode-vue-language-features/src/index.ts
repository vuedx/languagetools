import 'reflect-metadata'
import vscode from 'vscode'
import { Container } from 'inversify'
import { DocumentService } from './services/documents'
import { VueVirtualDocumentProvider } from './scheme/vue'
import { OpenVirtualFileCommand } from './commands/openVirtualFile'

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
    container.get(VueVirtualDocumentProvider).install(),
    container.get(OpenVirtualFileCommand).install(),
    new vscode.Disposable(() => container.unbindAll()),
  )

  const ts = vscode.extensions.getExtension(
    'vscode.typescript-language-features',
  )
  if (ts != null) {
    if (!ts.isActive) await ts.activate()
  }
}
