import { debug } from '@vuedx/shared'

import { inject, injectable } from 'inversify'
import type { TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class ReferencesService
  implements
    Pick<
      TypeScript.LanguageService,
      'getReferencesAtPosition' | 'findReferences' | 'getFileReferences'
    >
{
  public constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {}

  @debug()
  public getReferencesAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.ReferenceEntry[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getReferencesAtPosition(fileName, position)
  }

  @debug()
  public findReferences(
    fileName: string,
    position: number,
  ): TypeScript.ReferencedSymbol[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.findReferences(fileName, position)
  }

  @debug()
  public getFileReferences(fileName: string): TypeScript.ReferenceEntry[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.getFileReferences(fileName)
  }
}
