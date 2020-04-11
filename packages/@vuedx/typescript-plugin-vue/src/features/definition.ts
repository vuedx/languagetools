import ts from 'typescript'
import { prepareDocumentSpan } from '../utils'

export function prepareDefinitionAndBoundSpan(
  fileName: string,
  result: ts.DefinitionInfoAndBoundSpan
) {
  result.definitions?.forEach(prepareDocumentSpan)

  return result
}

export function prepareDefinitionInfo(
  fileName: string,
  result: readonly ts.DefinitionInfo[]
) {
  result.forEach(prepareDocumentSpan)

  return result
}

export function prepareImplementationLocation(
  fileName: string,
  result: readonly ts.ImplementationLocation[]
) {
  result.forEach(prepareDocumentSpan)

  return result
}

export function prepareReferenceEntry<T extends ts.ReferenceEntry[] | readonly ts.ReferenceEntry[]>(
  fileName: string,
  result: T
): T {
  result.forEach(prepareDocumentSpan)

  return result
}

export function prepareReferenceSymbol(
  fileName: string,
  result: ts.ReferencedSymbol[]
) {
  result.forEach((symbol) => {
    prepareDocumentSpan(symbol.definition)
    symbol.references.forEach(prepareDocumentSpan)
  })

  return result
}
