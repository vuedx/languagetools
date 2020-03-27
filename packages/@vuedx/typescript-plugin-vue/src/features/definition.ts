import ts from 'typescript'
import { mayBeRelativeFileName, mayBeVirtualFileName } from '../utils'

export function prepareDefinitionAndBoundSpan(
  fileName: string,
  result?: ts.DefinitionInfoAndBoundSpan
) {
  if (!result) return result

  result.definitions?.forEach(definition => {
    definition.fileName = mayBeRelativeFileName(
      fileName,
      mayBeVirtualFileName(definition.fileName)
    )
  })
}

export function prepareDefinitionInfo(
  fileName: string,
  result?: readonly ts.DefinitionInfo[]
) {
  if (!result) return result

  result.forEach(definition => {
    definition.fileName = mayBeRelativeFileName(
      fileName,
      mayBeVirtualFileName(definition.fileName)
    )
  })

  return result
}

export function prepareImplementationLocation(
  fileName: string,
  result?: readonly ts.ImplementationLocation[]
) {
  if (!result) return result

  result.forEach(implementation => {
    implementation.fileName = mayBeVirtualFileName(implementation.fileName)
  })

  return result
}

export function prepareReferenceEntry(
  fileName: string,
  result?: ts.ReferenceEntry[]
) {
  if (!result) return result

  result.forEach(entry => {
    entry.fileName = mayBeVirtualFileName(entry.fileName)
  })

  return result
}

export function prepareReferenceSymbol(
  fileName: string,
  result?: ts.ReferencedSymbol[]
) {
  if (!result) return result

  result.forEach(symbol => {
    symbol.definition.fileName = mayBeVirtualFileName(
      symbol.definition.fileName
    )
    symbol.references.forEach(reference => {
      reference.fileName = mayBeVirtualFileName(reference.fileName)
    })
  })

  return result
}
