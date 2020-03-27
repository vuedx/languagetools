import ts from 'typescript'
import { mayBeVirtualFileName } from '../utils'

export function prepareCallHierachy(
  fileName: string,
  result?: ts.CallHierarchyItem | ts.CallHierarchyItem[]
) {
  if (!result) return

  if (Array.isArray(result)) {
    result.forEach(item => {
      item.file = mayBeVirtualFileName(item.file)
    })
  } else {
    result.file = mayBeVirtualFileName(result.file)
  }

  return result
}

export function prepareCallHierachyIncomingCalls(
  fileName: string,
  result: ts.CallHierarchyIncomingCall[]
) {
  result.forEach(item => {
    item.from.file = mayBeVirtualFileName(item.from.file)
  })

  return result
}

export function prepareCallHierachyOutgoingCalls(
  fileName: string,
  result: ts.CallHierarchyOutgoingCall[]
) {
  result.forEach(item => {
    item.to.file = mayBeVirtualFileName(item.to.file)
  })

  return result
}
