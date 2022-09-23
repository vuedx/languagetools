import {
  isProjectRuntimeFile,
  isVueJsxFile,
  isVueSFCDescriptorFile,
  isVueTemplateASTFile, isVueTsxFile,
  parseFileName
} from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import { basename } from 'path'
import vscode from 'vscode'
import { PluginCommunicationService } from '../services/PluginCommunicationService'
import { getVirtualFileUri } from '../utils/uri'

@injectable()
export class SelectVirtualFileCommand {
  public constructor(
    @inject(PluginCommunicationService)
    private readonly plugin: PluginCommunicationService,
  ) {}

  public install(): vscode.Disposable {
    return vscode.commands.registerCommand(
      'vuedx.selectVirtualFile',
      async (uri: vscode.Uri) => {
        await this.onExecute(uri)
      },
    )
  }

  private async onExecute(uri: vscode.Uri): Promise<void> {
    const parsed = parseFileName(uri.fsPath)

    const relatedFiles = await this.plugin.first(
      async (connection) =>
        await connection.getRelatedVirtualFiles(parsed.fileName),
    )

    if (relatedFiles == null) return

    const result = await vscode.window.showQuickPick(
      relatedFiles.map((id) => ({
        id,
        label: this.getDisplayName(id),
        detail: basename(id),
        picked: id === uri.fsPath,
      })),
    )

    if (result != null) {
      const uri = getVirtualFileUri(result.id)
      await vscode.commands.executeCommand('vscode.open', uri)
    }
  }

  private getDisplayName(fileName: string): string {
    if (isVueTsxFile(fileName) || isVueJsxFile(fileName))
      return 'Virtual Module'
    if (isProjectRuntimeFile(fileName)) return 'Project Globals'
    if (isVueSFCDescriptorFile(fileName)) return 'SFC Descriptor'
    if (isVueTemplateASTFile(fileName)) return 'Template AST'

    return basename(fileName)
  }
}
