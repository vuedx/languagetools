import Path from 'path'
import { isVirtualFile, virtualFileNameSep } from '@vuedx/vue-virtual-textdocument'

export function mayBeRelativeFileName(
  containingFile: string,
  fileName: string
) {
  if (String(fileName).startsWith('..')) {
    return Path.join('.', Path.relative(Path.dirname(containingFile), fileName))
  }

  return fileName
}

export function mayBeVirtualFileName(fileName: string) {
  if (isVirtualFile(String(fileName))) {
    return fileName.substr(0, fileName.lastIndexOf(virtualFileNameSep))
  }

  return fileName
}
