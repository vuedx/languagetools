import ts from 'typescript'
import { mayBeVirtualFileName } from '../utils'

export function prepareCodeFixAction(
  fileName: string,
  result: readonly ts.CodeFixAction[]
) {
  result.forEach(item => {
    item.changes.forEach(item => {
      // TODO: Can be new file!!!
      item.fileName = mayBeVirtualFileName(fileName)
    })
  })

  return result
}
