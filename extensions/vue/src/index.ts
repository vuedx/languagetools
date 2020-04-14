import 'reflect-metadata';
import vscode from 'vscode';
import { Container } from 'inversify';
import { GenerateGrammarCommand } from './commands/generateGrammar';
import { DocumentService } from '@vuedx/extensions-shared/services/documents';
import { ConfigurationService } from '@vuedx/extensions-shared/services/configuration';

export async function activate(context: vscode.ExtensionContext) {
  const container = new Container({ autoBindInjectable: true, defaultScope: 'Singleton' });

  container.bind('context').toConstantValue(context);
  context.subscriptions.push(
    container.get(DocumentService).install(),
    container.get(ConfigurationService).install(),
    container.get(GenerateGrammarCommand).install(),
    // clean container.
    new vscode.Disposable(() => container.unbindAll())
  );
}
