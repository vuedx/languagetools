import ts from 'typescript'

export function prepareRenameInfo(fileName: string, result: ts.RenameInfo) {
  return result
}

export function prepareRenameLocation(
  fileName: string,
  result?: readonly ts.RenameLocation[]
) {
  return result
}
           