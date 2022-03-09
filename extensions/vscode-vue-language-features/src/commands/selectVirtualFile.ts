import {
  isProjectRuntimeFile,
  isVueTsFile,
  parseFileName,
  ucfirst,
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

    const relatedFiles = (
      await Promise.all(
        this.plugin.connections.map(
          async (connection) =>
            await connection.getRelatedVirtualFiles(parsed.fileName),
        ),
      )
    ).flat()

    const result = await vscode.window.showQuickPick(
      relatedFiles.map((id) => ({
        id,
        label: this.getDisplayName(id),
        picked: id === uri.fsPath,
      })),
    )

    if (result != null) {
      const uri = getVirtualFileUri(result.id)
      await vscode.commands.executeCommand('vscode.open', uri)
    }
  }

  private getDisplayName(fileName: string): string {
    if (isVueTsFile(fileName)) return 'Virtual Module'
    if (isProjectRuntimeFile(fileName)) return 'Project Globals'
    const parsed = parseFileName(fileName)
    if (parsed.type === 'virtual') {
      if (parsed.blockType === 'sript') {
        return parsed.setup === true ? 'Virtual Script Setup' : 'Virtual Script'
      } else if (parsed.blockIndex == null) {
        return `Virtual ${ucfirst(parsed.blockType)}`
      } else {
        return `Virtual ${ucfirst(parsed.blockType)} ${parsed.blockIndex}`
      }
    }

    return basename(fileName)
  }
}
