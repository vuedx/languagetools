import ts from 'typescript'
import { removeVirtualSuffixFromFileName } from '../utils'

export function prepareCallHierarchy(
  fileName: string,
  result: ts.CallHierarchyItem | ts.CallHierarchyItem[]
) {
  if (Array.isArray(result)) {
    result.forEach(item => {
      item.file = removeVirtualSuffixFromFileName(item.file)
    })
  } else {
    result.file = removeVirtualSuffixFromFileName(result.file)
  }

  return result
}

export function prepareCallHierachyIncomingCalls(
  fileName: string,
  result: ts.CallHierarchyIncomingCall[]
) {
  result.forEach(item => {
    item.from.file = removeVirtualSuffixFromFileName(item.from.file)
  })

  return result
}

export function prepareCallHierachyOutgoingCalls(
  fileName: string,
  result: ts.CallHierarchyOutgoingCall[]
) {
  result.forEach(item => {
    item.to.file = removeVirtualSuffixFromFileName(item.to.file)
  })

  return result
}
