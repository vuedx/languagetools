import { debug } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import type {
  FormatCodeSettings,
  UserPreferences,
} from 'typescript/lib/tsserverlibrary'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class RenameService
  implements
    Pick<
      TSLanguageService,
      'getRenameInfo' | 'findRenameLocations' | 'getEditsForFileRename'
    >
{
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
      return {
        canRename: false,
        localizedErrorMessage: 'Cannot rename Vue files.',
      }
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
    if (this.fs.isVueFile(fileName)) return

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
    if (this.fs.isVueFile(oldFilePath)) return []
    return this.ts.service.getEditsForFileRename(
      oldFilePath,
      newFilePath,
      formatOptions,
      preferences,
    )
  }
}
