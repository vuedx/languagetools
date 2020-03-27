import ts from 'typescript'

export function prepareCompletionsInfo(
  fileName: string,
  result?: ts.WithMetadata<ts.CompletionInfo>
) {
  if (!result) return

  return result
}

export function prepareCompletionsEntryDetail(
  fileName: string,
  result?: ts.CompletionEntryDetails
) {
  if (!result) return

  return result
}

export function prepareSymbol(fileName: string, result?: ts.Symbol) {
  if (!result) return

  return result
}
