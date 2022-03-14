import { toFileName } from '@vuedx/shared'
import type {
  VueBlockDocument,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import type { LanguageService } from '../contracts/LanguageService'
import type { TSLanguageService } from '../contracts/Typescript'
import { FilesystemService } from '../services/FilesystemService'
import { LanguageServiceProvider } from '../services/LanguageServiceProvider'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import { TemplateGlobals } from './helpers'

interface NormalizationOptions {
  isVueSchemeRequest: boolean
}

@injectable()
export class DefinitionService
  implements
    Pick<
      TSLanguageService,
      | 'getDefinitionAtPosition'
      | 'getDefinitionAndBoundSpan'
      | 'getTypeDefinitionAtPosition'
    > {
  private readonly logger = LoggerService.getLogger(`DefinitionService`)

  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(LanguageServiceProvider)
    private readonly langs: LanguageServiceProvider,
  ) {}

  public getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly Typescript.DefinitionInfo[] | undefined {
    return this.definitionsAtPosition(
      fileName,
      position,
      (service, fileName, position) =>
        service.getDefinitionAtPosition(fileName, position) ?? [],
      (fileName, position) =>
        this.langs
          .getLanguageService(fileName)
          ?.getDefinitionAt(fileName, position) ?? [],
    )
  }

  public getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): Typescript.DefinitionInfoAndBoundSpan | undefined {
    this.logger.debug(`getDefinitionAndBoundSpan: ${fileName} ${position}`)
    if (this.fs.isVueSchemeFile(fileName)) {
      const realFileName = this.fs.getRealFileName(fileName)
      const result = this.ts
        .getUndecoratedServiceFor(realFileName)
        ?.getDefinitionAndBoundSpan(realFileName, position)

      if (result == null) return undefined
      return this.normalizeTSDefinitionInfoAndBoundSpan(result, {
        isVueSchemeRequest: true,
      })
    } else if (this.fs.isVueFile(fileName)) {
      return this.doActionAtPosition(
        fileName,
        position,
        ({ tsFileName, blockFile, offset, vueFile }) => {
          const result = this.ts.service.getDefinitionAndBoundSpan(
            tsFileName,
            offset,
          )
          if (result == null) {
            this.logger.debug(
              `NoDefinition: at ${position}:${JSON.stringify(
                vueFile.getText().substring(position, position + 10),
              )} -> ${offset}:${JSON.stringify(
                blockFile.generated?.getText().substring(offset, offset + 10),
              )}`,
            )
            return undefined
          }
          result.textSpan = this.getTextSpan(blockFile, result.textSpan)
          // TODO: Get defintions from embedded services?
          return this.normalizeTSDefinitionInfoAndBoundSpan(result)
        },
      )
    } else {
      const result = this.ts.service.getDefinitionAndBoundSpan(
        fileName,
        position,
      )
      if (result == null) return undefined
      return this.normalizeTSDefinitionInfoAndBoundSpan(result)
    }
  }

  public getTypeDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly Typescript.DefinitionInfo[] | undefined {
    return this.definitionsAtPosition(
      fileName,
      position,
      (service, fileName, position) =>
        service.getTypeDefinitionAtPosition(fileName, position) ?? [],
      (fileName, position) =>
        this.langs
          .getLanguageService(fileName)
          ?.getTypeDefinitionAt(fileName, position) ?? [],
    )
  }

  private definitionsAtPosition(
    fileName: string,
    position: number,
    fromTS: (
      service: TSLanguageService,
      fileName: string,
      position: number,
    ) => readonly Typescript.DefinitionInfo[],
    fromLS: (
      fileName: string,
      position: LanguageService.Position,
    ) => LanguageService.Definition[],
  ): readonly Typescript.DefinitionInfo[] | undefined {
    return this._call(
      (fileName, position) => {
        this.logger.debug(
          `getTypeDefinitionAtPosition: ${fileName} ${position}`,
        )
        if (this.fs.isVueSchemeFile(fileName)) {
          const realFileName = this.fs.getRealFileName(fileName)
          const service = this.ts.getUndecoratedServiceFor(realFileName)
          if (service == null) return

          return this.dedupeDefinitionInfos(
            fromTS(service, realFileName, position).flatMap((info) =>
              this.normalizeTSDefinitionInfo(info, {
                isVueSchemeRequest: true,
              }),
            ),
          )
        } else if (this.fs.isVueFile(fileName)) {
          return this.doActionAtPosition(
            fileName,
            position,
            ({ tsFileName, offset, blockFile }) => {
              const resultsFromTS = fromTS(this.ts.service, tsFileName, offset)
              const resultsFromLS = this.toTSDefintionInfo(
                fromLS(blockFile.fileName, blockFile.positionAt(offset)),
              )

              this.logger.debug(
                `DefinitionAtPostion: ${fileName} ${position} (Found TS: ${resultsFromTS.length}, LS: ${resultsFromLS.length})`,
              )

              return this.dedupeDefinitionInfos([
                ...resultsFromTS.flatMap((info) =>
                  this.normalizeTSDefinitionInfo(info),
                ),
                ...resultsFromLS,
              ])
            },
          )
        } else {
          return this.dedupeDefinitionInfos(
            fromTS(this.ts.service, fileName, position).flatMap((info) =>
              this.normalizeTSDefinitionInfo(info),
            ),
          )
        }
      },
      [fileName, position],
    )
  }

  private readonly _calls: Array<[fileName: string, position: number]> = []
  private _call<R>(
    fn: (fileName: string, position: number) => R,
    args: [fileName: string, position: number],
  ): R | undefined {
    if (
      this._calls.some(
        (previous) => previous[0] === args[0] && previous[1] === args[1],
      )
    )
      return
    try {
      this._calls.push(args)

      return fn(...args)
    } finally {
      this._calls.pop()
    }
  }

  private dedupeDefinitionInfos(
    definitions: readonly Typescript.DefinitionInfo[],
  ): Typescript.DefinitionInfo[] {
    const output: Typescript.DefinitionInfo[] = []
    const ids = new Set<string>()

    definitions.forEach((definition) => {
      const id = `${definition.fileName}:${definition.textSpan.start}:${definition.textSpan.length}`

      if (!ids.has(id)) {
        ids.add(id)
        output.push(definition)
      }
    })

    return output
  }

  private toTSDefintionInfo(
    locations: LanguageService.Definition[],
  ): Typescript.DefinitionInfo[] {
    return locations.flatMap((location) => {
      if (Array.isArray(location)) return this.toTSDefintionInfo(location)
      const fileName = location.uri
      if (!this.fs.isVueVirtualFile(fileName)) {
        const file = this.fs.getFile(fileName)
        if (file == null) {
          this.logger.debug(`No such file: ${location.uri}`)
          return []
        }

        const start = file.offsetAt(location.range.start)
        const end = file.offsetAt(location.range.end)
        return {
          fileName: location.uri,
          textSpan: { start, length: end - start },
          kind: this.ts.lib.ScriptElementKind.unknown,
          name: '',
          containerKind: this.ts.lib.ScriptElementKind.unknown,
          containerName: '',
          unverified: true,
        }
      }
      const vueDoc = this.fs.getVueFile(fileName)
      if (vueDoc == null) {
        this.logger.debug(`No such file: ${fileName}`)
        return []
      }
      const blockDoc = vueDoc.getDocById(fileName)
      if (blockDoc == null) {
        this.logger.debug(`No such file: ${fileName}`)
        return []
      }

      const range = this.fs.getAbsoluteRange(vueDoc, blockDoc, location.range)
      const start = blockDoc.offsetAt(range.start)
      const end = blockDoc.offsetAt(range.end)

      return {
        fileName: location.uri,
        textSpan: { start, length: end - start },
        kind: this.ts.lib.ScriptElementKind.unknown,
        name: '',
        containerKind: this.ts.lib.ScriptElementKind.unknown,
        containerName: '',
        unverified: true,
      }
    })
  }

  private normalizeTSDefinitionInfo(
    info: Typescript.DefinitionInfo,
    options: NormalizationOptions = { isVueSchemeRequest: false },
    depth: number = 0,
  ): Typescript.DefinitionInfo[] {
    const fileName = info.fileName

    this.logger.debug(
      `Normalize: ${info.textSpan.start}:${info.name} in ${fileName}`,
    )

    if (options.isVueSchemeRequest) {
      if (this.fs.isVueVirtualFile(fileName)) {
        info.fileName = toFileName({
          type: 'scheme',
          scheme: 'vue',
          fileName: fileName,
        })
      }

      return [info]
    } else if (this.fs.isVueVirtualFile(fileName)) {
      info.fileName = this.fs.getRealFileName(fileName)
      const vueFile = this.fs.getVueFile(fileName)
      const blockFile = vueFile?.getDocById(fileName)

      if (blockFile != null) {
        if (blockFile.isOffsetInTemplateGlobals(info.textSpan.start)) {
          const range = TemplateGlobals.findRHS(blockFile, info.textSpan.start)
          if (range == null) return []
          this.logger.debug(
            `TemplateGlobal: ${info.textSpan.start}:${JSON.stringify(
              blockFile.generated
                ?.getText()
                .substring(
                  info.textSpan.start,
                  info.textSpan.start + info.textSpan.length,
                ),
            )} -> ${range.start}:${JSON.stringify(
              blockFile.generated
                ?.getText()
                .substring(range.start, range.start + range.length),
            )}`,
          )

          return (
            this.getDefinitionAtPosition(fileName, range.start)?.slice() ?? []
          )
        } else if (blockFile.isOffsetInIgonredZone(info.textSpan.start)) {
          this.logger.debug(
            `IgnoredZone: ${info.textSpan.start}:${JSON.stringify(
              blockFile.generated
                ?.getText()
                .substring(
                  info.textSpan.start,
                  info.textSpan.start + info.textSpan.length,
                ),
            )}`,
          )

          return (
            this.ts.service
              .getTypeDefinitionAtPosition(fileName, info.textSpan.start)
              ?.slice() ?? []
          ).flatMap((definition) => this.normalizeTSDefinitionInfo(definition))
        }

        info.textSpan = this.getTextSpan(blockFile, info.textSpan)
        info.contextSpan = this.getTextSpan(blockFile, info.contextSpan)

        return [info]
      }

      info.textSpan = { start: 0, length: 1 }
      if (info.contextSpan != null) {
        info.contextSpan = { start: 0, length: 1 }
      }
    } else if (this.fs.isVueTsFile(fileName)) {
      info.fileName = this.fs.getRealFileName(fileName)
      if (depth < 2) {
        const result = this.ts.service.getDefinitionAtPosition(
          fileName,
          info.textSpan.start,
        )

        if (result != null && result.length > 0) {
          return Array.from(
            result.flatMap((info) =>
              this.normalizeTSDefinitionInfo(info, options, depth + 1),
            ),
          )
        }
      }
      info.textSpan = { start: 0, length: 1 }
    }

    return [info]
  }

  private normalizeTSDefinitionInfoAndBoundSpan(
    info: Typescript.DefinitionInfoAndBoundSpan,
    options: NormalizationOptions = { isVueSchemeRequest: false },
  ): Typescript.DefinitionInfoAndBoundSpan {
    info.definitions = info.definitions
      ?.map((info) => {
        return this.normalizeTSDefinitionInfo(info, options)
      })
      .flat()

    if (info.definitions != null) {
      info.definitions = this.dedupeDefinitionInfos(info.definitions)
    }

    return info
  }

  private doActionAtPosition<T>(
    fileName: string,
    position: number,
    fn: (options: {
      tsFileName: string
      blockFile: VueBlockDocument
      vueFile: VueSFCDocument
      offset: number
    }) => T,
  ): T | undefined {
    const vueFile = this.fs.getVueFile(fileName)
    if (vueFile == null) return undefined
    const blockFile = vueFile.getDocAt(position)
    if (blockFile?.tsFileName == null) return undefined // TODO: Support non-ts-blocks?
    const offset = blockFile.generatedOffetAt(position)

    return fn({ tsFileName: blockFile.tsFileName, vueFile, blockFile, offset })
  }

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan,
  ): Typescript.TextSpan

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan | undefined,
  ): Typescript.TextSpan | undefined

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan | undefined,
  ): Typescript.TextSpan | undefined {
    if (textSpan == null) return undefined

    const range = this.fs.getAbsoluteOffsets(blockFile, textSpan)

    return {
      start: range.start ?? 0,
      length: Math.max(range.length ?? 1, textSpan.length),
    }
  }
}
