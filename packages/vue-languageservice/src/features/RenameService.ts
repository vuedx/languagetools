import { debug, toFileName, traceInDevMode } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import type {
  FormatCodeSettings,
  UserPreferences,
} from 'typescript/lib/tsserverlibrary'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService, LogLevel } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import { findLinkedTextSpan } from './helpers'

@injectable()
export class RenameService
  implements
    Pick<
      TSLanguageService,
      'getRenameInfo' | 'findRenameLocations' | 'getEditsForFileRename'
    > {
  private readonly logger = LoggerService.getLogger(
    RenameService.name,
    LogLevel.DEBUG,
  )

  public constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  @debug()
  public getRenameInfo(
    fileName: string,
    position: number,
    options?: TypeScript.RenameInfoOptions,
  ): TypeScript.RenameInfo {
    if (this.fs.isVueFile(fileName)) {
      return this.vueGetRenameInfo(fileName, position, options)
    }

    return this.ts.service.getRenameInfo(fileName, position, options)
  }

  @debug()
  public findRenameLocations(
    fileName: string,
    position: number,
    findInStrings: boolean,
    findInComments: boolean,
    providePrefixAndSuffixTextForRename?: boolean,
  ): readonly TypeScript.RenameLocation[] | undefined {
    if (this.fs.isVueFile(fileName)) {
      return this.vueFindRenameLocations(
        fileName,
        position,
        findInStrings,
        findInComments,
        providePrefixAndSuffixTextForRename,
      )
    }

    return this.ts.service.findRenameLocations(
      fileName,
      position,
      findInStrings,
      findInComments,
      providePrefixAndSuffixTextForRename,
    )
  }

  @debug()
  public getEditsForFileRename(
    oldFilePath: string,
    newFilePath: string,
    formatOptions: FormatCodeSettings,
    preferences: UserPreferences | undefined,
  ): readonly TypeScript.FileTextChanges[] {
    if (this.fs.isVueFile(oldFilePath) && this.fs.isVueFile(newFilePath)) {
      return this.fs.resolveAllFileTextChanges(
        this.ts.service.getEditsForFileRename(
          toFileName({ type: 'vue-ts', fileName: oldFilePath }),
          toFileName({ type: 'vue-ts', fileName: newFilePath }),
          formatOptions,
          preferences,
        ),
      )
    } else if (
      this.fs.isVueFile(oldFilePath) ||
      this.fs.isVueFile(newFilePath)
    ) {
      return []
    } else {
      return this.fs.resolveAllFileTextChanges(
        this.ts.service.getEditsForFileRename(
          oldFilePath,
          newFilePath,
          formatOptions,
          preferences,
        ),
      )
    }
  }

  private vueGetRenameInfo(
    fileName: string,
    position: number,
    options?: TypeScript.RenameInfoOptions,
  ): TypeScript.RenameInfo {
    const block = this.fs.getVirtualFileAt(fileName, position)
    if (block == null || block.tsFileName == null) {
      return {
        canRename: false,
        localizedErrorMessage:
          block != null && block.tsFileName == null
            ? `Rename is not supported in <${block.block.type}> block.`
            : '',
      }
    }

    const offset = block.findGeneratedOffetAt(block.toBlockOffset(position))
    this.logger.debug('Find rename info for', block.tsFileName, {
      offset,
      text: block.generated?.getText().slice(offset, offset + 20),
    })
    const renameInfo = this.ts.service.getRenameInfo(
      block.tsFileName,
      offset,
      options,
    )

    if (!renameInfo.canRename) return renameInfo
    this.logger.debug(
      `RenameInfo in ${block.tsFileName}`,
      renameInfo,
      block.generated
        ?.getText()
        .slice(
          renameInfo.triggerSpan.start,
          renameInfo.triggerSpan.start + renameInfo.triggerSpan.length,
        ),
    )
    const originalSpan = block.findOriginalTextSpan(renameInfo.triggerSpan)

    if (originalSpan == null) {
      return {
        canRename: false,
        localizedErrorMessage: '',
      }
    }

    if (
      renameInfo.fileToRename != null &&
      this.fs.isVueTsFile(renameInfo.fileToRename)
    ) {
      originalSpan.length -= 4
    }

    return {
      ...renameInfo,
      fileToRename:
        renameInfo.fileToRename != null
          ? this.fs.getRealFileName(renameInfo.fileToRename)
          : undefined,
      triggerSpan: block.toFileSpan(originalSpan),
    }
  }

  private vueFindRenameLocations(
    fileName: string,
    position: number,
    findInStrings: boolean,
    findInComments: boolean,
    providePrefixAndSuffixTextForRename?: boolean,
  ): readonly TypeScript.RenameLocation[] {
    const block = this.fs.getVirtualFileAt(fileName, position)
    // TODO: Support rename locations from LanguageService
    if (block == null || block.tsFileName == null) return []

    const offset = block.findGeneratedOffetAt(block.toBlockOffset(position))
    const locations =
      this.ts.service.findRenameLocations(
        block.tsFileName,
        offset,
        findInStrings,
        findInComments,
        providePrefixAndSuffixTextForRename,
      ) ?? []

    return this._resolveRenameLocations(locations, {
      findInComments,
      findInStrings,
      providePrefixAndSuffixTextForRename,
    })
  }

  private _resolveRenameLocation(
    location: TypeScript.RenameLocation,
    options: {
      findInStrings: boolean
      findInComments: boolean
      providePrefixAndSuffixTextForRename?: boolean
      resolveInner?: boolean
    },
  ): TypeScript.RenameLocation[] {
    if (this.fs.isVueTsFile(location.fileName)) return []
    if (!this.fs.isVueVirtualFile(location.fileName)) return [location]

    const block = this.fs.getVirtualFile(location.fileName)
    if (block == null || block.generated == null || block.tsFileName == null) {
      this.logger.debug(`Abort as no generated file or block`)
      return []
    }

    this.logger.debug('RenameLocation', {
      file: location.fileName,
      textSpan: block.generated
        .getText()
        .substr(location.textSpan.start, location.textSpan.length),
      contextSpan:
        location.contextSpan != null
          ? block.generated
              .getText()
              .substr(location.contextSpan.start, location.contextSpan.length)
          : null,
    })

    const offset = location.textSpan.start
    if (block.isOffsetInCopiedZone(offset)) {
      this.logger.debug(`Abort in copied zone`)
      return []
    } else if (block.isOffsetInTemplateGlobals(offset)) {
      if (options.resolveInner === false) return []

      const docSpan = findLinkedTextSpan(
        block,
        location.textSpan,
        location.contextSpan,
      )
      if (docSpan == null) {
        this.logger.debug(`Abort no linked span for template global`)
        return []
      }
      const locations =
        this.ts.service.findRenameLocations(
          docSpan.fileName,
          docSpan.textSpan.start,
          options.findInStrings,
          options.findInComments,
          options.providePrefixAndSuffixTextForRename,
        ) ?? []

      this.logger.debug(`Looking in deep:`, docSpan, locations)

      return this._resolveRenameLocations(locations, {
        ...options,
        resolveInner: false,
      })
    } else if (block.isOffsetInIgonredZone(offset)) {
      this.logger.debug(`Abort in ignored zone`)
      return []
    } else {
      const textSpan = block.findOriginalTextSpan(location.textSpan)
      if (textSpan == null) return []
      if (textSpan.length !== location.textSpan.length) return []
      const contextSpan =
        location.contextSpan != null
          ? block.findOriginalTextSpan(location.contextSpan)
          : undefined

      return [
        {
          ...location,
          fileName: this.fs.getRealFileName(location.fileName),
          textSpan: block.toFileSpan(textSpan),
          contextSpan:
            contextSpan != null ? block.toFileSpan(contextSpan) : undefined,
        },
      ]
    }
  }

  @traceInDevMode()
  private _resolveRenameLocations(
    locations: readonly TypeScript.RenameLocation[],
    options: {
      findInStrings: boolean
      findInComments: boolean
      providePrefixAndSuffixTextForRename?: boolean | undefined
      resolveInner?: boolean
    },
  ): TypeScript.RenameLocation[] {
    return locations.flatMap((location) =>
      this._resolveRenameLocation(location, options),
    )
  }
}
