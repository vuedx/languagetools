import ts from 'typescript'
import { removeVirtualSuffixFromFileName } from '../utils'

export function prepareCodeFixAction(
  fileName: string,
  result: readonly ts.CodeFixAction[]
) {
  result.forEach(item => {
    item.changes.forEach(item => {
      // TODO: Can be new file!!!
      item.fileName = removeVirtualSuffixFromFileName(fileName)
    })
  })

  return result
}
