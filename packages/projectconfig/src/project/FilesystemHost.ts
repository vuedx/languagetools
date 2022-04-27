import * as Path from 'path'
import { toPosixPath } from '@vuedx/shared'

export interface FileWatcher {
  close(): void
}
export enum FileWatcherEventKind {
  Created = 0,
  Changed = 1,
  Deleted = 2,
}
export type FileWatcherCallback = (
  fileName: string,
  eventKind: FileWatcherEventKind,
) => void
export type DirectoryWatcherCallback = (fileName: string) => void
export interface FilesystemHost {
  readDirectory(rootDir: string, extensions: string[]): string[]
  fileExists(path: string): boolean
  readFile(path: string): string | undefined
  watchFile(path: string, callback: FileWatcherCallback): FileWatcher
  watchDirectory(
    path: string,
    callback: DirectoryWatcherCallback,
    recursive?: boolean,
  ): FileWatcher
}

export function findNearestFile(
  fs: FilesystemHost,
  dir: string,
  name: string,
): string | null {
  let cur = toPosixPath(dir)
  while (cur.length > 1) {
    const fileName = Path.posix.resolve(cur, name)
    if (fs.fileExists(fileName)) return fileName
    cur = Path.posix.dirname(cur)
  }

  return null
}
