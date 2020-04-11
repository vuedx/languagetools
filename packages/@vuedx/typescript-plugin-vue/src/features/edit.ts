import ts from 'typescript'
import { removeVirtualSuffixFromFileName } from '../utils'

export function prepareTextChange(fileName: string, result: ts.TextChange[]) {
  return result
}
export function prepareTextInsertion(
  fileName: string,
  result?: ts.TextInsertion
) {
  return result
}

export function prepareApplicableRefactorInfo(
  fileName: string,
  result: ts.ApplicableRefactorInfo[]
) {
  return result
}

export function prepareRefactorEditInfo(
  fileName: string,
  result: ts.RefactorEditInfo
) {
  if (result.renameFilename) {
    result.renameFilename = removeVirtualSuffixFromFileName(result.renameFilename)
  }

  result.edits.forEach(edit => {
    edit.fileName = removeVirtualSuffixFromFileName(edit.fileName)
  })

  return result
}

export function prepareFileTextChanges(
  fileName: string,
  result: readonly ts.FileTextChanges[]
) {
  result.forEach(item => {
    item.fileName = removeVirtualSuffixFromFileName(item.fileName)
  })

  return result
}
