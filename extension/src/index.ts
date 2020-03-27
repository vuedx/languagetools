import 'reflect-metadata'
import { Container } from 'inversify'
import vscode from 'vscode'
import { GenerateGrammarCommand } from './commands/syntax/generateGrammar'
import { OpenVirtualDocumentCommand } from './commands/virtual/openAtCursor'
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
    container.get(OpenVirtualDocumentCommand).install(),
    container.get(GenerateGrammarCommand).install(),
    // clean container.
    new vscode.Disposable(() => container.unbindAll())
  )
}
