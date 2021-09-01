import {
  annotations,
  Position,
  Range,
  TextDocument,
  transformers,
  VueBlockDocument,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import * as Path from 'path'
import type { Disposable } from '../contracts/Disposable'
import type { FilesystemProvider } from '../contracts/FilesystemProvider'
import type { OffsetRangeLike } from '../contracts/OffsetRangeLike'
import { createFilesystemProvider } from '../virtualFs'
import { CacheService } from './CacheService'
import { LoggerService } from './LoggerService'
import type { TypescriptService } from './TypescriptService'

export class FilesystemService implements Disposable {
  private static instance: FilesystemService | null = null

  public static createSingletonInstance(
    ts: TypescriptService,
  ): FilesystemService {
    return (
      this.instance ??
      (this.instance = new FilesystemService(
        createFilesystemProvider(ts.projectService, ts.serverHost),
        ts,
      ))
    )
  }

  private readonly vueFiles = new Map<string, VueSFCDocument>()
  private readonly watchers = new Set<() => void>()
  private readonly logger = new LoggerService('fs')

  constructor(
    private readonly provider: FilesystemProvider,
    private readonly ts: TypescriptService,
  ) {}

  public getVersion(fileName: string): string {
    return (
      this.ts
        .getProjectFor(fileName)
        ?.getScriptInfo(fileName)
        ?.getLatestVersion() ?? '0'
    )
  }

  private readonly textDocumentCache = new CacheService<TextDocument>(
    (fileName) => this.getVersion(fileName),
  )

  public getFile(fileName: string): TextDocument | null {
    if (this.isVueFile(fileName)) return this.getVueFile(fileName)
    if (!this.provider.exists(fileName)) return null

    return this.textDocumentCache.withCache(fileName, (prevFile) => {
      if (prevFile != null) return prevFile

      return TextDocument.create(
        fileName,
        this.getLaguageId(fileName),
        0, // Version should be ignored.
        this.provider.read(fileName),
      )
    })
  }

  public getLaguageId(fileName: string): string {
    const ext = Path.posix.extname(fileName).substr(1)

    switch (ext) {
      case 'js':
      case 'cjs':
      case 'mjs':
      case 'node':
        return 'javascript'

      case 'ts':
        return 'typescript'

      case 'tsx':
        return 'typescriptreact'

      default:
        return ext
    }
  }

  /**
   * Get Vue SFC File
   * @returns null for non-vue files and when file does not exist
   */
  public getVueFile(fileName: string): VueSFCDocument | null {
    if (this.isVueVirtualFile(fileName)) {
      fileName = this.removeVirtualFileQuery(fileName)
    } else if (this.isVueTsFile(fileName)) {
      fileName = fileName.substr(0, fileName.length - 3)
    }
    if (!this.isVueFile(fileName)) return null

    // this.logger.debug('Get', fileName)
    const cachedFile = this.vueFiles.get(fileName)
    if (cachedFile != null) return cachedFile
    if (!this.provider.exists(fileName)) return null

    const file = VueSFCDocument.create(fileName, this.provider.read(fileName), {
      transformers,
    })

    this.watchers.add(
      this.provider.watch(fileName, (changes, version) => {
        this.logger.debug(`File updated: ${version} - ${fileName}`, changes)
        const before = file.getActiveTSDocIDs()
        file.update(changes, version)
        const project = this.ts.getProjectFor(file.tsFileName)
        if (project != null) {
          // TODO: Optimize. This triggers parse on every keystroke.
          const after = file.getActiveTSDocIDs()
          const deleted = Array.from(before).filter(
            (fileName) => !after.has(fileName),
          )

          deleted.forEach((fileName) => {
            this.logger.debug(`Virtual file deleted: ${fileName}`)
            const info = project.getScriptInfo(fileName)
            if (info != null) {
              project.removeFile(info, false, true)
              this.logger.debug(`Virtual removed deleted: ${fileName}`)
            }
          })

          project.registerFileUpdate(file.tsFileName)
          project.markAsDirty()
        }
      }),
    )

    this.vueFiles.set(fileName, file)

    return file
  }

  public removeVirtualFileQuery(fileName: string): string {
    const index = fileName.indexOf('?vue')
    if (index < 0) return fileName
    return fileName.substr(0, index)
  }

  public removeVirtualFileScheme(fileName: string): string {
    if (fileName.startsWith('^vue:')) {
      return fileName.substr(5)
    }

    return fileName
  }

  public getRealFileName(fileName: string): string {
    if (this.isVueVirtualFile(fileName))
      return this.removeVirtualFileQuery(fileName)
    else if (this.isVueTsFile(fileName))
      return fileName.substr(0, fileName.length - 3)
    return fileName
  }

  public isVueFile(fileName: string): boolean {
    return fileName.endsWith('.vue')
  }

  public isVueTsFile(fileName: string): boolean {
    return fileName.endsWith('.vue.ts')
  }

  public isVueVirtualFile(fileName: string): boolean {
    return fileName.includes('.vue?vue')
  }

  public isVueVirtualSchemeFile(fileName: string): boolean {
    return fileName.startsWith('^vue:')
  }

  public getAbsolutePosition(
    vueDoc: VueSFCDocument,
    blockDoc: VueBlockDocument,
    position: Position,
  ): Position {
    return vueDoc.positionAt(
      blockDoc.block.loc.start.offset + blockDoc.source.offsetAt(position),
    )
  }

  public getAbsoluteRange(
    vueDoc: VueSFCDocument,
    blockDoc: VueBlockDocument,
    range: Range,
  ): Range {
    return {
      start: this.getAbsolutePosition(vueDoc, blockDoc, range.start),
      end: this.getAbsolutePosition(vueDoc, blockDoc, range.end),
    }
  }

  public getAbsoluteOffsets<T extends OffsetRangeLike>(
    file: VueBlockDocument | undefined,
    range: T,
  ): OffsetRangeLike {
    if (file == null || range.start == null) {
      return { start: undefined, length: undefined }
    }

    const result = file.originalOffsetAndLengthAt(
      range.start,
      range.length ?? 1,
    )

    if (result == null) {
      const text = file.generated?.getText().substr(0, range.start)
      if (text?.trim().endsWith(annotations.missingExpression) === true) {
        return this.getAbsoluteOffsets(file, {
          start: range.start - 10, // anywhere in comment
          length: range.length,
        })
      }

      return { start: file.block.loc.start.offset, length: 1 }
    }

    return { start: result.offset, length: result.length }
  }

  private readonly NULL_RANGE: Range = {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 },
  }

  public toFileName(uri: string): string {
    return uri
  }

  public toRange(file: TextDocument, range: OffsetRangeLike): Range {
    if (range.start == null) return this.NULL_RANGE

    const start = file.positionAt(range.start)
    if (range.length == null) return { start, end: start }
    const end = file.positionAt(range.start + range.length)

    return { start, end }
  }

  public toOffsets(file: TextDocument, range: Range): OffsetRangeLike {
    const start = file.offsetAt(range.start)
    const end = file.offsetAt(range.end)

    return { start, length: end - start }
  }

  public dispose(): void {
    this.watchers.forEach((stop) => stop())
    this.watchers.clear()
    this.vueFiles.clear()
  }
}
