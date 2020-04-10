import Path from 'path'
import vscode, { Uri } from 'vscode'

export async function openFile(fileName: string) {
  const uri = Uri.file(
    Path.isAbsolute(fileName)
      ? fileName
      : Path.resolve(getWorkspaceRoot(), fileName)
  )

  const document = await vscode.workspace.openTextDocument(uri)

  return vscode.window.showTextDocument(document)
}

export async function closeActiveFile() {
  return vscode.commands.executeCommand(
    'workbench.action.revertAndCloseActiveEditor'
  )
}

export async function closeAllFiles() {
  while (vscode.window.visibleTextEditors.length) {
    if (!vscode.window.activeTextEditor) {
      break
    }

    await vscode.commands.executeCommand(
      'workbench.action.revertAndCloseActiveEditor'
    )
  }
}

export async function wait(timeInSeconds: number = 0.2) {
  return new Promise((resolve) => setTimeout(resolve, timeInSeconds * 1000))
}

export async function onExtensionReady() {
  await vscode.extensions
    .getExtension(process.env.VSCODE_TEST_TARGET!)!
    .activate()
}

export function getExtensionPath() {
  return vscode.extensions.getExtension(process.env.VSCODE_TEST_TARGET!)!
    .extensionPath!
}

export function getWorkspaceRoot() {
  return vscode.workspace.workspaceFolders!.find(Boolean)!.uri.fsPath
}
