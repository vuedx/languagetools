import 'reflect-metadata';
import vscode from 'vscode';
import { Container } from 'inversify';
import { GenerateGrammarCommand } from './commands/generateGrammar';
import { DocumentService } from './services/documents';
import { ConfigurationService } from './services/configuration';
import { VueVirtualDocumentProvider } from './scheme/vue';
import { OpenVirtualFileCommand } from './commands/openVirtualFile';

export async function activate(context: vscode.ExtensionContext) {
  const container = new Container({ autoBindInjectable: true, defaultScope: 'Singleton' });

  container.bind('context').toConstantValue(context);
  context.subscriptions.push(
    container.get(DocumentService).install(),
    container.get(ConfigurationService).install(),
    container.get(GenerateGrammarCommand).install(),
    container.get(VueVirtualDocumentProvider).install(),
    container.get(OpenVirtualFileCommand).install(),
    // clean container.
    new vscode.Disposable(() => container.unbindAll())
  );

  const ts = vscode.extensions.getExtension('vscode.typescript-language-features');
  if (ts) {
    if (!ts.isActive) await ts.activate();
  }
}
