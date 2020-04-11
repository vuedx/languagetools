import ts from 'typescript'
import { removeVirtualSuffixFromFileName } from '../utils'

export function prepareRenameInfo(fileName: string, result: ts.RenameInfo) {
  if ('fileToRename' in result && result.fileToRename) {
    result.fileToRename = removeVirtualSuffixFromFileName(result.fileToRename)
  }

  return result
}

export function prepareRenameLocation(
  fileName: string,
  result: readonly ts.RenameLocation[]
) {
  result.forEach((item) => {
    item.fileName = removeVirtualSuffixFromFileName(item.fileName)
    if (item.originalFileName) {
      item.originalFileName = removeVirtualSuffixFromFileName(
        item.originalFileName
      )
    }
  })

  return result
}
