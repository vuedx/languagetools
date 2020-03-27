import ts from 'typescript'
import { mayBeVirtualFileName } from '../utils'

export function prepareNavgateToItems(result: ts.NavigateToItem[]) {
  result.forEach(item => {
    item.fileName = mayBeVirtualFileName(item.fileName)
  })

  return result
}

export function prepareNavgationBarItems(
  fileName: string,
  result: ts.NavigationBarItem[]
) {
  return result
}

export function prepareNavgationTree(
  fileName: string,
  result: ts.NavigationTree
) {
  return result
}
