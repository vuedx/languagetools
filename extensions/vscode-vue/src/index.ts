import 'reflect-metadata'
import vscode from 'vscode'
import { Container } from 'inversify'
import { GenerateGrammarCommand } from './commands/generateGrammar'
import { ConfigurationService } from './services/configuration'

export async function activate(
  context: vscode.ExtensionContext,
): Promise<void> {
  const container = new Container({
    autoBindInjectable: true,
    defaultScope: 'Singleton',
  })

  container.bind('context').toConstantValue(context)
  context.subscriptions.push(
    container.get(ConfigurationService).install(),
    container.get(GenerateGrammarCommand).install(),
    new vscode.Disposable(() => container.unbindAll()),
  )
}
