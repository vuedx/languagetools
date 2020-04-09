import 'reflect-metadata'
import vscode from 'vscode'
import { Container } from 'inversify'
import { GenerateGrammarCommand } from './commands/generateGrammar'
import { OpenVirtualFileCommand } from './commands/openVirtualFile'
import { VueVirtualDocumentProvider } from './scheme/vue'
import { ConfigurationService } from './services/configuration'
import { DocumentService } from './services/documents'

export async function activate(context: vscode.ExtensionContext) {
  const container = new Container({ autoBindInjectable: true })

  container.bind('context').toConstantValue(context)
  context.subscriptions.push(
    container.get(DocumentService).install(),
    container.get(ConfigurationService).install(),
    container.get(VueVirtualDocumentProvider).install(),
    container.get(OpenVirtualFileCommand).install(),
    container.get(GenerateGrammarCommand).install(),
    // clean container.
    new vscode.Disposable(() => container.unbindAll())
  )

  const ts = vscode.extensions.getExtension('typescript-language-features')
  if (ts && !ts.isActive) ts.activate()
}
