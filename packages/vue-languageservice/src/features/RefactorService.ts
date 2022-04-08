import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class RefactorService
  implements Pick<TSLanguageService, 'organizeImports'> {
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public organizeImports(
    args: TypeScript.OrganizeImportsArgs,
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences | undefined,
  ): readonly TypeScript.FileTextChanges[] {
    if (this.fs.isVueSchemeFile(args.fileName)) return [] // readonly file

    return this.fs.resolveAllFileTextChanges(
      this.fs.isVueFile(args.fileName)
        ? this.#vueOrganizeImports(args, formatOptions, preferences)
        : this.ts.service.organizeImports(args, formatOptions, preferences),
    )
  }

  #vueOrganizeImports(
    args: TypeScript.OrganizeImportsArgs,
    formatOptions: TypeScript.FormatCodeSettings,
    preferences: TypeScript.UserPreferences | undefined,
  ): readonly TypeScript.FileTextChanges[] {
    const file = this.fs.getVueFile(args.fileName)
    if (file == null) return []

    const files: string[] = []

    for (const block of [file.descriptor.script, file.descriptor.scriptSetup]) {
      if (block == null) continue
      const doc = file.getDoc(block)
      if (doc?.tsFileName == null) continue
      files.push(doc.tsFileName)
    }

    return files.flatMap((file) =>
      this.ts.service.organizeImports(
        { ...args, fileName: file },
        formatOptions,
        preferences,
      ),
    )
  }
}
