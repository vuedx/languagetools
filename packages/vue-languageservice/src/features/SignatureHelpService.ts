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
    if (this.fs.isVueSchemeFile(fileName)) return undefined
    return this.ts.service.getSignatureHelpItems(fileName, position, options)
  }

  public prepareCallHierarchy(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyItem | TypeScript.CallHierarchyItem[] | undefined {
    if (this.fs.isVueSchemeFile(fileName)) return undefined
    return this.ts.service.prepareCallHierarchy(fileName, position)
  }

  public provideCallHierarchyIncomingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyIncomingCall[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.provideCallHierarchyIncomingCalls(fileName, position)
  }

  public provideCallHierarchyOutgoingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyOutgoingCall[] {
    if (this.fs.isVueFile(fileName)) return []
    return this.ts.service.provideCallHierarchyOutgoingCalls(fileName, position)
  }

  public getBraceMatchingAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.TextSpan[] {
    if (this.fs.isVueSchemeFile(fileName)) return []
    return this.ts.service.getBraceMatchingAtPosition(fileName, position)
  }

  public isValidBraceCompletionAtPosition(
    fileName: string,
    position: number,
    openingBrace: number,
  ): boolean {
    if (this.fs.isVueSchemeFile(fileName)) return false
    return this.ts.service.isValidBraceCompletionAtPosition(
      fileName,
      position,
      openingBrace,
    )
  }

  public getNameOrDottedNameSpan(
    fileName: string,
    startPos: number,
    endPos: number,
  ): TypeScript.TextSpan | undefined {
    if (this.fs.isVueSchemeFile(fileName)) return
    return this.ts.service.getNameOrDottedNameSpan(fileName, startPos, endPos)
  }
}
