import { debug } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class DefinitionService
  implements
    Pick<
      TSLanguageService,
      | 'getDefinitionAtPosition'
      | 'getDefinitionAndBoundSpan'
      | 'getTypeDefinitionAtPosition'
    >
{
  constructor(
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {}

  @debug()
  public getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getDefinitionAtPosition(fileName, position)
  }

  @debug()
  public getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): TypeScript.DefinitionInfoAndBoundSpan | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getDefinitionAndBoundSpan(fileName, position)
  }

  public getTypeDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.DefinitionInfo[] | undefined {
    if (this.fs.isVueFile(fileName)) return
    return this.ts.service.getTypeDefinitionAtPosition(fileName, position)
  }
}
