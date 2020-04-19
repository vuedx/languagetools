import 'reflect-metadata';
import vscode from 'vscode';
import { Container } from 'inversify';
import { ConfigurationService } from '@vuedx/extensions-shared/services/configuration';
import { DocumentService } from '@vuedx/extensions-shared/services/documents';
import { OpenVirtualFileCommand } from './commands/openVirtualFile';
import { VueVirtualDocumentProvider } from './scheme/vue';

export async function activate(context: vscode.ExtensionContext) {
  const container = new Container({ autoBindInjectable: true, defaultScope: 'Singleton' });

  container.bind('context').toConstantValue(context);
  context.subscriptions.push(
    container.get(DocumentService).install(),
    container.get(ConfigurationService).install(),
    container.get(VueVirtualDocumentProvider).install(),
    container.get(OpenVirtualFileCommand).install(),
    // clean container.
    new vscode.Disposable(() => container.unbindAll())
  );

  const ts = vscode.extensions.getExtension('vscode.typescript-language-features');
  if (ts) {
    revertPatch(ts.extensionPath);

    if (!ts.isActive) await ts.activate();
  }
}

import Path from 'path';
import FS from 'fs';
/**
 * This is needed to revert old patched extensions.
 */
function revertPatch(dirName: string) {
  const fileName = Path.resolve(dirName, 'dist', 'extension.js');
  const backupFileName = Path.resolve(dirName, 'dist', 'extension.js.original');

  if (FS.existsSync(backupFileName)) {
    FS.writeFileSync(fileName, FS.readFileSync(backupFileName));
    FS.unlinkSync(backupFileName);
  }
}
