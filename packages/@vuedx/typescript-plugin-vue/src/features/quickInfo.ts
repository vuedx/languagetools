import { mayBeRelativeFileName, mayBeVirtualFileName } from '../utils'

export function prepareQuickInfo(
  fileName: string,
  result?: ts.QuickInfo
): ts.QuickInfo | undefined {
  if (!result) return result

  result.displayParts?.forEach(part => {
    if (part.kind === 'stringLiteral') {
      part.text = JSON.stringify(
        mayBeRelativeFileName(
          fileName,
          mayBeVirtualFileName(JSON.parse(part.text) as string)
        )
      )
    }
  })

  return result
}

export function prepareTextSpan(fileName: string, result?: ts.TextSpan) {
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
