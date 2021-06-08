import * as Path from 'path'

export function getRelativeFileName(
  importingFileName: string,
  importedFileName: string,
): string {
  if (
    Path.posix.isAbsolute(importingFileName) &&
    Path.posix.isAbsolute(importedFileName)
  ) {
    const fileName = Path.posix.relative(
      Path.posix.dirname(importingFileName),
      importedFileName,
    )

    return fileName.startsWith('.') ? fileName : `./${fileName}`
  }

  return importedFileName
}
