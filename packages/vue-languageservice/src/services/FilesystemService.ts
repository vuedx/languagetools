import {
  Position,
  Range,
  TextDocument,
  VueBlockDocument,
  VueSFCDocument,
  VueSFCDocumentOptions,
} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import * as Path from 'path'
import { INJECTABLE_FS_PROVIDER } from '../constants'
import type { Disposable } from '../contracts/Disposable'
import type { FilesystemProvider } from '../contracts/FilesystemProvider'
import type { OffsetRangeLike } from '../contracts/OffsetRangeLike'
import { TypescriptService } from './TypescriptService'
import { ComponentInfo, createFullAnalyzer } from '@vuedx/analyze'
import type { Typescript } from '../contracts/Typescript'

@injectable()
export class FilesystemService implements Disposable {
  private readonly vueFiles = new Map<string, VueSFCDocument>()
  private readonly otherFiles = new Map<string, TextDocument>()
  private readonly watchers = new Set<() => void>()
  private readonly analyzer = createFullAnalyzer()
  private readonly cache = new Map<
    string,
    { key: string; info: ComponentInfo }
  >()

  constructor(
    @inject(INJECTABLE_FS_PROVIDER)
    private readonly provider: FilesystemProvider,
    @inject(TypescriptService)
    private readonly ts: TypescriptService,
  ) {}

  public getFile(fileName: string): TextDocument | null {
    if (this.isVueFile(fileName)) return this.getVueFile(fileName)

    const cachedFile = this.vueFiles.get(fileName)
    if (cachedFile != null) return cachedFile
    if (!this.provider.exists(fileName)) return null

    const language = this.getLaguageId(fileName)
    const create = (): TextDocument =>
      TextDocument.create(fileName, language, 0, this.provider.read(fileName))
    const file = create()

    this.watchers.add(
      this.provider.watch(fileName, (changes, version) => {
        this.otherFiles.set(
          fileName,
          version === 0
            ? create()
            : TextDocument.update(file, changes, version),
        )
      }),
    )

    this.otherFiles.set(fileName, file)

    return file
  }

  public getLaguageId(fileName: string): string {
    const ext = Path.extname(fileName).substr(1)

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
    const cachedFile = this.vueFiles.get(fileName)
    if (cachedFile != null) return cachedFile
    if (!this.provider.exists(fileName)) return null

    const file = VueSFCDocument.create(
      fileName,
      this.provider.read(fileName),
      {
        getComponentInfo: () => this.getComponentInfo(fileName),
        getComponents: () => {
          const project = this.ts.getVueProjectFor(fileName)

          const components: ReturnType<
            Required<VueSFCDocumentOptions>['getComponents']
          > = {}

          project.globalComponents.forEach((component) => {
            component.aliases.forEach((alias) => {
              components[alias] = {
                name: component.name,
                value: component.name,
                source: {
                  path: component.source.moduleName,
                  exported: component.source.exportName ?? 'default',
                  local: component.source.localName,
                },
              }
            })
          })

          return components
        },
      }, // TODO: Support components getter.
    )

    this.watchers.add(
      this.provider.watch(fileName, (changes, version) => {
        file.update(changes, version)
      }),
    )

    this.vueFiles.set(fileName, file)

    return file
  }

  public getVueSourceFile(fileName: string): Typescript.SourceFile | undefined {
    fileName = this.getRealFileName(fileName)
    if (!this.isVueFile(fileName)) return undefined
    const scriptFile = this.ts.getSourceFile(fileName)
    if (scriptFile != null) return scriptFile
    const vueFile = this.getVueFile(fileName)
    if (vueFile != null) return vueFile as any
    return undefined
  }

  public removeVirtualFileQuery(fileName: string): string {
    const index = fileName.indexOf('?vue')
    if (index < 0) return fileName
    return fileName.substr(0, index)
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

  public getComponentInfo(fileName: string): ComponentInfo | null {
    const file = this.getVueFile(fileName)
    if (file == null) return null
    const result = this.cache.get(fileName)
    const key = file.getText()
    if (result?.key === key) return result.info
    try {
      const info = this.analyzer.analyze(key)
      this.cache.set(fileName, { key, info })

      return info
    } catch {
      return null
    }
  }

  public isVueVirtualFile(fileName: string): boolean {
    return fileName.includes('.vue?vue')
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
