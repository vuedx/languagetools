import {
  isNotNull,
  isProjectRuntimeFile,
  isVueRuntimeFile,
} from '@vuedx/shared'
import {
  Range,
  TextDocument,
  TextSpan,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import * as Path from 'path'
import type { Disposable } from '../contracts/Disposable'
import type { FilesystemProvider } from '../contracts/FilesystemProvider'
import type { OffsetRangeLike } from '../contracts/OffsetRangeLike'
import type { TypeScript } from '../contracts/TypeScript'
import { areOverlappingTextSpans } from '../helpers/areOverlappingTextSpans'
import { createFilesystemProvider } from '../helpers/createFilesystemProvider'
import { CacheService } from './CacheService'
import { LoggerService } from './LoggerService'
import type { TypescriptContextService } from './TypescriptContextService'

export class FilesystemService implements Disposable {
  public static createInstance(
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
    return `${this.ts.project.getProjectVersion()}|${this.ts.project.getScriptVersion(
      fileName,
    )}`
  }

  private readonly textDocumentCache = new CacheService<TextDocument>(
    (fileName) => this.getVersion(fileName),
  )

  /**
   * Returns source file for virtual files.
   */
  public getSourceFile(fileName: string): TextDocument | null {
    return this.getFile(fileName)
  }

  public getFile(fileName: string): TextDocument | null {
    if (this.isVueFile(fileName)) return this.getVueFile(fileName)
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

  /**
   * Get Vue SFC File
   * TODO: Create a shared cache for closed files.
   * @returns null for non-vue files and when file does not exist
   */
  public getVueFile(fileName: string): VueSFCDocument | null {
    fileName = this.getRealFileNameIfAny(fileName)

    if (!this.isVueFile(fileName)) return null
    const cachedFile = this.vueFiles.get(fileName)
    if (cachedFile != null) return cachedFile
    if (!this.provider.exists(fileName)) return null

    const file = VueSFCDocument.create(fileName, this.provider.read(fileName), {
      isTypeScript: this.ts.isTypeScriptProject,
      typescript: this.ts.lib,
    })

    const registerFileUpdate = (
      fileName: string,
    ): TypeScript.server.ScriptInfo | undefined => {
      const info = this.ts.project.getScriptInfo(fileName)
      this.ts.project.registerFileUpdate(fileName)
      this.ts.project.markAsDirty()
      if (info == null) return
      info.registerFileUpdate()
      info.markContainingProjectsAsDirty()
      return info
    }

    const stopWatching = this.provider.watch(
      file.originalFileName,
      (changes, version) => {
        file.update(changes, version)
        registerFileUpdate(file.generatedFileName)
        const scriptInfo = registerFileUpdate(file.originalFileName)
        if (scriptInfo == null) return
        scriptInfo.containingProjects.forEach((project) => {
          project.refreshDiagnostics()
        })
      },
    )

    this.watchers.add(stopWatching)
    this.vueFiles.set(fileName, file)

    const fsWatcher = this.ts.serverHost.watchFile(
      file.originalFileName,
      (fileName, eventKind) => {
        this.logger.info(`File changed: ${eventKind} - ${fileName}`)
        if (eventKind === this.ts.lib.FileWatcherEventKind.Deleted) {
          const generatedScriptInfo = this.ts.project.getScriptInfo(
            file.generatedFileName,
          )
          if (generatedScriptInfo != null) {
            this.ts.project.removeFile(generatedScriptInfo, false, true)
          }

          const originalScriptInfo = this.ts.project.getScriptInfo(
            file.originalFileName,
          )
          if (originalScriptInfo != null) {
            this.ts.project.removeFile(originalScriptInfo, false, true)
          }

          stopWatching()
          this.vueFiles.delete(file.originalFileName)
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

  public getLineText(
    doc: Pick<TextDocument, 'getText' | 'positionAt' | 'offsetAt'>,
    offset: number,
  ): string {
    const { line } = doc.positionAt(offset)
    const start = doc.offsetAt({ line, character: 0 })
    const end = doc.offsetAt({ line: line + 1, character: 0 })

    return doc.getText().slice(start, end - 1)
  }

  public isVueFile(fileName: string): boolean {
    return fileName.endsWith('.vue')
  }

  /**
   * @deprecated Use {@link isGeneratedVueFile} instead
   */
  public isVueTsFile(fileName: string): boolean {
    return fileName.endsWith('.vue.tsx') || fileName.endsWith('.vue.jsx')
  }

  public isGeneratedVueFile(fileName: string): boolean {
    return fileName.endsWith('.vue.tsx') || fileName.endsWith('.vue.jsx')
  }

  public getRealFileNameIfAny(fileName: string): string {
    if (this.isGeneratedVueFile(fileName)) return fileName.slice(0, -4)

    return fileName
  }

  public isVueRuntimeFile(fileName: string): boolean {
    return isVueRuntimeFile(fileName)
  }

  public isProjectRuntimeFile(fileName: string): boolean {
    return isProjectRuntimeFile(fileName)
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

  /**
   * Dedupe changes by fileName
   */
  public resolveAllFileTextChanges<T extends TypeScript.FileTextChanges>(
    changes: readonly T[],
  ): T[] {
    const changesByFileName = new Map<string, T>()

    for (const textChanges of changes) {
      const transformedChanges = this.resolveFileTextChanges(textChanges)
      if (transformedChanges == null) continue
      const current = changesByFileName.get(transformedChanges.fileName)
      if (current != null) {
        const changes = [...current.textChanges]
        transformedChanges.textChanges.forEach((change) => {
          const duplicate = current.textChanges.find((c) =>
            areOverlappingTextSpans(c.span, change.span),
          )
          if (duplicate != null) return
          changes.push(change)
        })
        current.textChanges = changes
      } else {
        changesByFileName.set(transformedChanges.fileName, transformedChanges)
      }
    }

    return Array.from(changesByFileName.values())
  }

  public resolveFileTextChanges<T extends TypeScript.FileTextChanges>(
    fileTextChanges: T,
  ): T | null {
    if (this.isVueTsFile(fileTextChanges.fileName)) {
      const asFileTextChanges = (changes: T): T => {
        if (fileTextChanges.isNewFile !== true) return changes
        return { ...changes, isNewFile: fileTextChanges.isNewFile }
      }

      const file = this.getVueFile(fileTextChanges.fileName)
      if (file == null) return null
      return asFileTextChanges({
        ...fileTextChanges,
        fileName: file.originalFileName,
        textChanges: fileTextChanges.textChanges
          .map((textChange) => {
            const span = file.findOriginalTextSpan(textChange.span)

            if (span == null) return null
            return { span, newText: textChange.newText }
          })
          .filter(isNotNull),
      })
    }

    return fileTextChanges
  }
}
