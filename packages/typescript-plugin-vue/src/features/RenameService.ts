import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type {
  FormatCodeSettings,
  UserPreferences,
} from 'typescript/lib/tsserverlibrary'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TemplateDeclarationsService } from '../services/TemplateDeclarationsService'
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
    @inject(TemplateDeclarationsService)
    private readonly declarations: TemplateDeclarationsService,
  ) {}

  public getRenameInfo(
    fileName: string,
    position: number,
    preferences: TypeScript.UserPreferences,
  ): TypeScript.RenameInfo {
    return (
      this.pick(fileName, position, {
        script: (file) => {
          const generatedPosition = file.generatedOffsetAt(position)
          if (generatedPosition == null) return
          return this.processRenameInfo(
            file,
            this.ts.service.getRenameInfo(
              file.generatedFileName,
              generatedPosition,
              preferences,
            ),
          )
        },
      }) ?? {
        canRename: false,
        localizedErrorMessage: 'Cannot rename this element.',
      }
    )
  }

  public findRenameLocations(
    fileName: string,
    position: number,
    findInStrings: boolean,
    findInComments: boolean,
    providePrefixAndSuffixTextForRename?: boolean,
  ): readonly TypeScript.RenameLocation[] | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.processRenameLocations(
          this.ts.service.findRenameLocations(
            file.generatedFileName,
            generatedPosition,
            findInStrings,
            findInComments,
            providePrefixAndSuffixTextForRename,
          ),
        )
      },
    })
  }

  public getEditsForFileRename(
    oldFilePath: string,
    newFilePath: string,
    formatOptions: FormatCodeSettings,
    preferences: UserPreferences | undefined,
  ): readonly TypeScript.FileTextChanges[] {
    const generatedOldFilePath = this.fs.isVueFile(oldFilePath)
      ? oldFilePath
      : this.ts.getGeneratedFileName(oldFilePath)
    const generatedNewFilePath = this.fs.isVueFile(newFilePath)
      ? newFilePath
      : this.ts.getGeneratedFileName(newFilePath)
    return this.fs.resolveAllFileTextChanges(
      this.ts.service.getEditsForFileRename(
        generatedOldFilePath,
        generatedNewFilePath,
        formatOptions,
        preferences,
      ),
    )
  }

  private pick<R>(
    fileName: string,
    position: number,
    fns: Record<string, (file: VueSFCDocument) => R>,
  ): R | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return
    const block = file.getBlockAt(position)
    if (block == null) return
    const fn = fns[block.type]
    if (fn == null) return
    return fn(file)
  }

  private processRenameInfo(
    file: VueSFCDocument,
    info: TypeScript.RenameInfo,
  ): TypeScript.RenameInfo {
    if (!info.canRename) return info

    const triggerSpan = file.findOriginalTextSpan(info.triggerSpan)
    if (triggerSpan == null) {
      return {
        canRename: false,
        localizedErrorMessage: 'Cannot rename this element.',
      }
    }

    if (info.fileToRename != null) {
      info.fileToRename = this.fs.getRealFileNameIfAny(info.fileToRename)
    }

    info.triggerSpan = triggerSpan

    return info
  }

  public processRenameLocations(
    locations: readonly TypeScript.RenameLocation[] | undefined,
  ): readonly TypeScript.RenameLocation[] | undefined {
    if (locations == null) return

    return locations.flatMap((location) => {
      if (!this.fs.isGeneratedVueFile(location.fileName)) return location

      const file = this.fs.getVueFile(location.fileName)
      if (file == null) return []

      const fileName = file.originalFileName
      const textSpan = file.findOriginalTextSpan(location.textSpan)
      const contextSpan =
        location.contextSpan != null
          ? file.findOriginalTextSpan(location.contextSpan) ?? undefined
          : undefined

      if (textSpan != null) {
        return { ...location, fileName, textSpan, contextSpan }
      }

      const { line } = file.generated.positionAt(location.textSpan.start)
      const declarations = this.declarations.getTemplateDeclaration(fileName)
      const declaration = declarations.byLine.get(line)

      if (declaration == null) return []
      if (declaration.kind === 'identifier') {
        // const __VueDX_get_identifier_a = () => unref(a)
        return declaration.references.flatMap((reference) => {
          const { line } = file.generated.positionAt(reference.start)
          const declaration = declarations.byLine.get(line)
          if (declaration == null) return []
          if (declaration.kind !== 'variable') return []
          return declaration.references.flatMap((reference) => {
            const textSpan = file.findOriginalTextSpan(reference)
            if (textSpan == null) return []

            const contextSpan =
              location.contextSpan == null ? undefined : textSpan

            return { ...location, fileName, textSpan, contextSpan }
          })
        })
      } else if (declaration.kind === 'variable') {
        // let a = __VueDX_get_identifier_a()
        return declaration.references.flatMap((reference) => {
          const textSpan = file.findOriginalTextSpan(reference)
          if (textSpan == null) return []
          const contextSpan =
            location.contextSpan == null ? undefined : textSpan

          return { ...location, fileName, textSpan, contextSpan }
        })
      }

      return []
    })
  }
}
