import vscode from 'vscode'

export function stringifyUri(uri: vscode.Uri): string {
  const str = uri.toString()
  if (str.includes('vue:/')) {
    return str.replace(/^vue:/, 'vue://')
  }
  return str
}

export function getVirtualFileUri(fileName: string): vscode.Uri {
  return vscode.Uri.file(fileName).with({ scheme: 'vue' })
}

export function getVirtualFileNameFromUri(uri: vscode.Uri): string {
  return uri.fsPath
}
