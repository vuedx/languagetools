import * as Path from 'path'
import * as OS from 'os'

export function toPosixPath(path: string): string {
  return path.includes('\\') ? path.replace(/\\/g, '/') : path
}

export function toWindowsPath(path: string): string {
  return path.includes('/') ? path.replace(/\//g, '\\') : path
}

export const toPlatformPath =
  /* istanbul ignore next */
  OS.platform() === 'win32' ? toWindowsPath : toPosixPath

export function getRelativeFileName(
  importingFileName: string,
  importedFileName: string,
): string {
  importingFileName = toPosixPath(importingFileName)
  importedFileName = toPosixPath(importedFileName)

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
