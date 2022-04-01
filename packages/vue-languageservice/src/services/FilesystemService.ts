import {
  isFilesystemSchemeFile,
  isProjectRuntimeFile,
  isVueFile,
  isVueRuntimeFile,
  isVueTsFile,
  isVueVirtualFile,
  parseFileName,
  SetOps,
} from '@vuedx/shared'
import type { TextSpan } from '@vuedx/vue-virtual-textdocument'
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
import type { Typescript } from '../contracts/Typescript'
import { createFilesystemProvider } from '../helpers/createFilesystemProvider'
import { CacheService } from './CacheService'
import { LoggerService } from './LoggerService'
import type { TypescriptContextService } from './TypescriptContextService'

export class FilesystemService implements Disposable {
  public static createInstnace(
    ts: TypescriptContextService,
  ): FilesystemService {
    return new FilesystemService(
      createFilesystemProvider(ts.projectService, ts.serverHost),
      ts,
    )
  }

  private readonly vueFiles = new Map<string, VueSFCDocument>()
  private readonly watchers = new Set<() => void>()
  private readonly logger = new LoggerService(FilesystemService.name)

  constructor(
    private readonly provider: FilesystemProvider,
    private readonly ts: TypescriptContextService,
  ) {}

  public getVersion(fileName: string): string {
    if (isVueVirtualFile(fileName)) {
      fileName = this.getRealFileName(fileName)
    }

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

  /**
   * Returns source file for virtual files.
   */
  public getSourceFile(fileName: string): TextDocument | null {
    if (this.isVueVirtualFile(fileName)) {
      const file = this.getVirtualFile(fileName)
      if (file == null) return file
      if (file.fileName !== fileName) {
        throw new Error(
          `Unexpected file: ${file.fileName}, expecting ${fileName}`,
        )
      }

      return file.source
    }

    return this.getFile(fileName)
  }

  public getFile(fileName: string): TextDocument | null {
    if (this.isVueFile(fileName)) return this.getVueFile(fileName)
    if (this.isVueVirtualFile(fileName)) {
      return this.getGeneratedVirtualFile(fileName)
    }

    if (!this.provider.exists(fileName)) return null

    return this.textDocumentCache.withCache(fileName, (prevFile) => {
      if (prevFile != null) return prevFile

      return TextDocument.create(
        fileName,
        this.getLanguageId(fileName),
        Date.now(),
        this.provider.read(fileName),
      )
    })
  }

  public getGeneratedVirtualFile(fileName: string): TextDocument | null {
    return this.getVirtualFile(fileName)?.generated ?? null
  }

  public getVirtualFile(fileName: string): VueBlockDocument | null {
    return this.getVueFile(fileName)?.getDocById(fileName) ?? null
  }

  public getLanguageId(fileName: string): string {
    const ext = this.getFileExtension(fileName)

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

  public getVirtualFileAt(
    fileName: string,
    offset: number,
  ): VueBlockDocument | null {
    return this.findFilesAt(fileName, offset)[1]
  }

  /**
   * Find block file and containing vue file.
   */
  public findFilesAt(
    fileName: string,
    offset: number,
  ): [VueSFCDocument, VueBlockDocument] | [null, null] {
    const file = this.getVueFile(fileName)
    const block = file?.getDocAt(offset)

    return file != null && block != null ? [file, block] : [null, null]
  }

  /**
   * Get Vue SFC File
   * TODO: Create a shared cache for closed files.
   * @returns null for non-vue files and when file does not exist
   */
  public getVueFile(fileName: string): VueSFCDocument | null {
    fileName = this.getRealFileName(fileName)
    this.logger.debug(`Get ${fileName}`)
    if (!this.isVueFile(fileName)) return null
    const cachedFile = this.vueFiles.get(fileName)
    if (cachedFile != null) return cachedFile
    if (!this.provider.exists(fileName)) return null

    const file = VueSFCDocument.create(fileName, this.provider.read(fileName), {
      transformers,
    })

    const registerFileUpdate = (
      fileName: string,
    ): Typescript.server.ScriptInfo | undefined => {
      const info = this.ts.project.getScriptInfo(fileName)
      this.ts.project.registerFileUpdate(fileName)
      this.ts.project.markAsDirty()
      if (info == null) return
      info.registerFileUpdate()
      info.markContainingProjectsAsDirty()
      return info
    }

    const stopWatching = this.provider.watch(fileName, (changes, version) => {
      const previousTsFiles = file.getActiveTSDocIDs()
      file.update(changes, version)
      // TODO: Optimize. This triggers parse on every keystroke.
      const currentTsFiles = file.getActiveTSDocIDs()
      const deletedTsFiles = SetOps.difference(previousTsFiles, currentTsFiles)
      const scriptInfo = registerFileUpdate(fileName)
      deletedTsFiles.forEach((fileName) => {
        const info = this.ts.project.getScriptInfo(fileName)
        if (info == null) return
        this.ts.project.removeFile(info, false, true)
      })
      currentTsFiles.forEach((fileName) => registerFileUpdate(fileName))
      if (scriptInfo == null) return
      scriptInfo.containingProjects.forEach((project) => {
        project.refreshDiagnostics()
      })
    })

    this.watchers.add(stopWatching)
    this.vueFiles.set(fileName, file)

    const fsWatcher = this.ts.serverHost.watchFile(
      fileName,
      (fileName, eventKind) => {
        this.logger.info(`File changed: ${eventKind} - ${fileName}`)
        if (eventKind === this.ts.lib.FileWatcherEventKind.Deleted) {
          file.getActiveTSDocIDs().forEach((fileName) => {
            const scriptInfo = this.ts.project.getScriptInfo(fileName)
            if (scriptInfo != null) {
              this.ts.project.removeFile(scriptInfo, false, true)
            }
          })

          const scriptInfo = this.ts.project.getScriptInfo(fileName)
          if (scriptInfo != null) {
            this.ts.project.removeFile(scriptInfo, false, true)
          }

          stopWatching()
          this.vueFiles.delete(fileName)
          this.watchers.delete(stopWatching)
          fsWatcher.close()
        }
      },
    )

    return file
  }

  public getTextSpan(
    doc: Pick<TextDocument, 'getText'>,
    span: TextSpan,
  ): string {
    return doc.getText().slice(span.start, span.start + span.length)
  }

  public getRealFileName(fileName: string): string {
    return parseFileName(fileName).fileName
  }

  public isFilesystemSchemeFile(fileName: string): boolean {
    return isFilesystemSchemeFile(fileName)
  }

  public isVueSchemeFile(fileName: string): boolean {
    if (!isFilesystemSchemeFile(fileName)) return false
    const parsed = parseFileName(fileName)
    return parsed.type === 'scheme' && parsed.scheme === 'vue'
  }

  public isVueFile(fileName: string): boolean {
    return isVueFile(fileName)
  }

  public isVueTsFile(fileName: string): boolean {
    return isVueTsFile(fileName)
  }

  public isVueVirtualFile(fileName: string): boolean {
    return isVueVirtualFile(fileName)
  }

  public isVueRuntimeFile(fileName: string): boolean {
    return isVueRuntimeFile(fileName)
  }

  public isProjectRuntimeFile(fileName: string): boolean {
    return isProjectRuntimeFile(fileName)
  }

  /**
   * @deprecated
   */
  public getAbsolutePosition(
    vueDoc: VueSFCDocument,
    blockDoc: VueBlockDocument,
    position: Position,
  ): Position {
    return vueDoc.positionAt(
      blockDoc.toFileOffset(blockDoc.source.offsetAt(position)),
    )
  }

  /**
   * @deprecated
   */
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

  /**
   * @deprecated
   */
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
      const text = file.generated?.getText().substring(0, range.start)
      if (text?.trim().endsWith(annotations.missingExpression) === true) {
        return this.getAbsoluteOffsets(file, {
          start: range.start - 10, // anywhere in comment
          length: range.length,
        })
      }

      return { start: file.block.loc.start.offset, length: 1 }
    }

    return {
      start: Math.min(
        result.offset,
        Math.max(
          file.block.loc.start.offset,
          file.block.loc.end.offset - result.length,
        ),
      ),
      length: result.length,
    }
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

  public getFileExtension(fileName: string): string {
    return Path.posix.extname(fileName).slice(1)
  }

  public getPositionString(
    doc: Pick<TextDocument, 'positionAt'>,
    offset: number,
  ): string {
    const position = doc.positionAt(offset)

    return `${position.line + 1}:${position.character + 1}`
  }

  public dispose(): void {
    this.watchers.forEach((stop) => stop())
    this.watchers.clear()
    this.vueFiles.clear()
  }
}
