import { isNotNull } from '@vuedx/shared'
import { inject, injectable } from 'inversify'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class ImplementationService
  implements Pick<TSLanguageService, 'getImplementationAtPosition'> {
  public constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getImplementationAtPosition(
    fileName: string,
    position: number,
  ): readonly TypeScript.ImplementationLocation[] | undefined {
    const implementations = this.fs.isVueFile(fileName)
      ? this.#getImplementationAtPositionFromVueFile(fileName, position)
      : this.ts.service.getImplementationAtPosition(fileName, position)

    if (implementations == null) return

    return implementations
      .map((implementation) =>
        this.#resolveImplementationLocation(implementation),
      )
      .filter(isNotNull)
  }

  #resolveImplementationLocation(
    implementation: TypeScript.ImplementationLocation,
  ): TypeScript.ImplementationLocation | undefined {
    if (this.fs.isVueRuntimeFile(implementation.fileName)) return implementation
    const block = this.fs.getVirtualFile(implementation.fileName)
    if (block == null) return
    const textSpan = block.findOriginalTextSpan(implementation.textSpan)
    if (textSpan == null) return
    const contextSpan =
      implementation.contextSpan != null
        ? block.findOriginalTextSpan(implementation.contextSpan) ?? undefined
        : undefined

    return {
      ...implementation,
      fileName: block.parent.fileName,
      textSpan: textSpan,
      contextSpan,
    }
  }

  #getImplementationAtPositionFromVueFile(
    fileName: string,
    position: number,
  ): readonly TypeScript.ImplementationLocation[] | undefined {
    const block = this.fs.getVirtualFileAt(fileName, position)
    if (block == null || block.tsFileName == null) return

    // TODO: Allow only expressions and element tags.

    return this.ts.service.getImplementationAtPosition(
      block.tsFileName,
      block.findGeneratedOffetAt(block.toBlockOffset(position)),
    )
  }
}
