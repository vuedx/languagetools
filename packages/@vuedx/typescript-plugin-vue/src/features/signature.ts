import ts from 'typescript'

export function prepareSignatureHelpItems(
  fileName: string,
  result?: ts.SignatureHelpItems
) {
  if (!result) return

  return result
}
