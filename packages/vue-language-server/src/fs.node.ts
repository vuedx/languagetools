import {
  FilesystemHost,
  FileSystemProvider,
  FileType,
} from '@vuedx/vue-languageservice'
import FS from 'node:fs'
import { readdir, stat } from 'node:fs/promises'
import { extname, posix } from 'node:path'

export function createFileSystemProvider(): FileSystemProvider {
  return {
    async stat(uri) {
      if (!uri.startsWith('file://')) {
        return {
          type: 0 as FileType.Unknown,
          ctime: 0,
          mtime: 0,
          size: 0,
        }
      }
      const result = await stat(uri.slice(7))
      return {
        type: result.isSymbolicLink()
          ? (64 as FileType.SymbolicLink)
          : result.isFile()
          ? (1 as FileType.File)
          : result.isDirectory()
          ? (2 as FileType.Directory)
          : (0 as FileType.Unknown),

        ctime: result.ctimeMs,
        mtime: result.mtimeMs,
        size: result.size,
      }
    },

    async readDirectory(uri) {
      if (!uri.startsWith('file://')) return []

      const items = await readdir(uri.slice(7), {
        withFileTypes: true,
        encoding: 'utf8',
      })

      return items.map((result) => [
        posix.resolve(uri, result.name),
        result.isSymbolicLink()
          ? (64 as FileType.SymbolicLink)
          : result.isFile()
          ? (1 as FileType.File)
          : result.isDirectory()
          ? (2 as FileType.Directory)
          : (0 as FileType.Unknown),
      ])
    },
  }
}
export function createFilesystemHost(): FilesystemHost {
  return {
    fileExists(path) {
      return FS.existsSync(path)
    },

    readFile(path) {
      return FS.readFileSync(path, 'utf-8')
    },

    watchFile(_path, _callback) {
      return {
        close() {
          // TODO
        },
      }
    },

    watchDirectory(_path, _callback) {
      return {
        close() {
          // TODO
        },
      }
    },

    readDirectory(dir, extensions) {
      return FS.readdirSync(dir, {
        withFileTypes: true,
        encoding: 'utf8',
      })
        .filter(
          (dirent) =>
            dirent.isFile() && extensions.includes(extname(dirent.name)),
        )
        .map((dirent) => dirent.name)
    },
  }
}
