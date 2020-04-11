import ts from 'typescript'
import {
  removeVirtualSuffixFromFileName,
  removeVirtualSuffixFromText,
} from '../utils'
import { isVirtualFile } from '@vuedx/vue-virtual-textdocument'

export function prepareCompletionsInfo(
  fileName: string,
  result: ts.WithMetadata<ts.CompletionInfo>
) {
  return result
}

export function prepareCompletionsEntryDetail(
  fileName: string,
  result: ts.CompletionEntryDetails
) {
  result.codeActions?.forEach((codeAction) => {
    codeAction.changes?.forEach((change) => {
      change.fileName = removeVirtualSuffixFromFileName(change.fileName)
    })
  })

  result.displayParts.forEach(
    (displayPart) =>
      (displayPart.text = removeVirtualSuffixFromText(displayPart.text))
  )

  return result
}

export function prepareSymbol(fileName: string, result: ts.Symbol) {

  return result
}
