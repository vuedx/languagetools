import { removeVirtualSuffixFromText } from '../utils'

export function prepareQuickInfo(
  fileName: string,
  result: ts.QuickInfo
): ts.QuickInfo | undefined {
  result.displayParts?.forEach((part) => {
    part.text = removeVirtualSuffixFromText(part.text)
  })

  return result
}

export function prepareTextSpan(fileName: string, result: ts.TextSpan) {
  return result
}

export function prepareTextSpans(fileName: string, result: ts.TextSpan[]) {
  return result
}

export function prepareOutliningSpan(
  fileName: string,
  result: ts.OutliningSpan[]
) {
  return result
}

export function prepareTodoComment(fileName: string, result: ts.TodoComment[]) {
  return result
}
