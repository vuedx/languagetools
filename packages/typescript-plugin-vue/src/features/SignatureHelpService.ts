import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type { SignatureHelpItems } from 'typescript/lib/tsserverlibrary'
import type { TSLanguageService, TypeScript } from '../contracts/TypeScript'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class SignatureHelpService
  implements
    Pick<
      TSLanguageService,
      | 'getSignatureHelpItems'
      | 'prepareCallHierarchy'
      | 'provideCallHierarchyIncomingCalls'
      | 'provideCallHierarchyOutgoingCalls'
      | 'getBraceMatchingAtPosition'
      | 'isValidBraceCompletionAtPosition'
      | 'getNameOrDottedNameSpan'
    >
{
  public constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  public getSignatureHelpItems(
    fileName: string,
    position: number,
    options: TypeScript.SignatureHelpItemsOptions | undefined,
  ): SignatureHelpItems | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.ts.service.getSignatureHelpItems(
          file.generatedFileName,
          generatedPosition,
          options,
        )
      },
    })
  }

  public prepareCallHierarchy(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyItem | TypeScript.CallHierarchyItem[] | undefined {
    return this.pick(fileName, position, {
      script: (file) => {
        const generatedPosition = file.generatedOffsetAt(position)
        if (generatedPosition == null) return
        return this.ts.service.prepareCallHierarchy(
          file.generatedFileName,
          generatedPosition,
        )
      },
    })
  }

  public provideCallHierarchyIncomingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyIncomingCall[] {
    return (
      this.pick(fileName, position, {
        script: (file) => {
          const generatedPosition = file.generatedOffsetAt(position)
          if (generatedPosition == null) return
          return this.ts.service.provideCallHierarchyIncomingCalls(
            file.generatedFileName,
            generatedPosition,
          )
        },
      }) ?? []
    )
  }

  public provideCallHierarchyOutgoingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyOutgoingCall[] {
    return (
      this.pick(fileName, position, {
        script: (file) => {
          const generatedPosition = file.generatedOffsetAt(position)
          if (generatedPosition == null) return
          return this.ts.service.provideCallHierarchyOutgoingCalls(
            file.generatedFileName,
            generatedPosition,
          )
        },
      }) ?? []
    )
  }

  public getBraceMatchingAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.TextSpan[] {
    return (
      this.pick(fileName, position, {
        script: (file) => {
          const generatedPosition = file.generatedOffsetAt(position)
          if (generatedPosition == null) return
          return this.ts.service.getBraceMatchingAtPosition(
            file.generatedFileName,
            generatedPosition,
          )
        },
      }) ?? []
    )
  }

  public isValidBraceCompletionAtPosition(
    fileName: string,
    position: number,
    openingBrace: number,
  ): boolean {
    return (
      this.pick(fileName, position, {
        script: (file) => {
          const generatedPosition = file.generatedOffsetAt(position)
          if (generatedPosition == null) return
          const generatedOpeningBrace = file.generatedOffsetAt(openingBrace)
          if (generatedOpeningBrace == null) return
          return this.ts.service.isValidBraceCompletionAtPosition(
            file.generatedFileName,
            generatedPosition,
            generatedOpeningBrace,
          )
        },
      }) ?? false
    )
  }

  public getNameOrDottedNameSpan(
    fileName: string,
    startPos: number,
    endPos: number,
  ): TypeScript.TextSpan | undefined {
    return this.pick(fileName, startPos, {
      script: (file) => {
        const generatedStartPos = file.generatedOffsetAt(startPos)
        if (generatedStartPos == null) return
        const generatedEndPos = file.generatedOffsetAt(endPos)
        if (generatedEndPos == null) return
        return this.ts.service.getNameOrDottedNameSpan(
          file.generatedFileName,
          generatedStartPos,
          generatedEndPos,
        )
      },
    })
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
}
