import { isNotNull } from '@vuedx/shared'
import {
  findTemplateNodeAt,
  isSimpleExpressionNode,
} from '@vuedx/template-ast-types'
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
    > {
  public constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  #withResolvedFileNameAndPosition<T>(
    fileName: string,
    position: number,
    fn: (fileName: string, position: number) => T,
  ): T | undefined {
    if (this.fs.isVueSchemeFile(fileName)) return
    if (this.fs.isVueFile(fileName)) {
      const block = this.fs.getVirtualFileAt(fileName, position)
      if (block == null || block.tsFileName == null) return
      const offset = block.toBlockOffset(position)
      if (block.block.type === 'template') {
        if (block.parent.templateAST == null) return
        const result = findTemplateNodeAt(block.parent.templateAST, offset)
        if (!isSimpleExpressionNode(result)) return // support component and directive signature completion
      }

      return fn(block.tsFileName, block.findGeneratedOffetAt(offset))
    }

    return fn(fileName, position)
  }

  public getSignatureHelpItems(
    fileName: string,
    position: number,
    options: TypeScript.SignatureHelpItemsOptions | undefined,
  ): SignatureHelpItems | undefined {
    return this.#withResolvedFileNameAndPosition(
      fileName,
      position,
      (fileName, position) =>
        this.ts.service.getSignatureHelpItems(fileName, position, options),
    )
  }

  public prepareCallHierarchy(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyItem | TypeScript.CallHierarchyItem[] | undefined {
    return this.#withResolvedFileNameAndPosition(
      fileName,
      position,
      (fileName, position) =>
        this.ts.service.prepareCallHierarchy(fileName, position),
    )
  }

  public provideCallHierarchyIncomingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyIncomingCall[] {
    return (
      this.#withResolvedFileNameAndPosition(
        fileName,
        position,
        (fileName, position) =>
          this.ts.service.provideCallHierarchyIncomingCalls(fileName, position),
      ) ?? []
    )
  }

  public provideCallHierarchyOutgoingCalls(
    fileName: string,
    position: number,
  ): TypeScript.CallHierarchyOutgoingCall[] {
    return (
      this.#withResolvedFileNameAndPosition(
        fileName,
        position,
        (fileName, position) =>
          this.ts.service.provideCallHierarchyOutgoingCalls(fileName, position),
      ) ?? []
    )
  }

  public getBraceMatchingAtPosition(
    fileName: string,
    position: number,
  ): TypeScript.TextSpan[] {
    if (this.fs.isVueSchemeFile(fileName)) return []
    if (this.fs.isVueFile(fileName)) {
      const block = this.fs.getVirtualFileAt(fileName, position)
      if (block == null || block.tsFileName == null) return []
      const offset = block.toBlockOffset(position)
      if (block.block.type === 'template') {
        if (block.parent.templateAST == null) return []
        const result = findTemplateNodeAt(block.parent.templateAST, offset)
        if (!isSimpleExpressionNode(result)) return [] // support in template syntax
      }

      return this.ts.service
        .getBraceMatchingAtPosition(fileName, position)
        .map((span) => block.findOriginalTextSpan(span))
        .filter(isNotNull)
        .map((span) => block.toFileSpan(span))
    }

    return this.ts.service.getBraceMatchingAtPosition(fileName, position)
  }

  public isValidBraceCompletionAtPosition(
    fileName: string,
    position: number,
    openingBrace: number,
  ): boolean {
    if (this.fs.isVueSchemeFile(fileName)) return false
    if (this.fs.isVueFile(fileName)) {
      const [file, block] = this.fs.findFilesAt(fileName, position)
      if (block == null || file == null || block.tsFileName == null)
        return false
      if (
        block.block.type === 'template' ||
        (block.block.type === 'script' &&
          (block.block.lang === 'tsx' || block.block.lang === 'jsx'))
      ) {
        return this.ts.service.isValidBraceCompletionAtPosition(
          block.tsFileName,
          block.findGeneratedOffetAt(block.toBlockOffset(position)),
          openingBrace,
        )
      }

      return false
    }

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
    if (this.fs.isVueFile(fileName)) {
      const [file, block] = this.fs.findFilesAt(fileName, startPos)
      if (block == null || file == null || block.tsFileName == null) return
      if (
        block.block.type === 'template' ||
        (block.block.type === 'script' &&
          (block.block.lang === 'tsx' || block.block.lang === 'jsx'))
      ) {
        const spans = [
          this.ts.service.getNameOrDottedNameSpan(
            fileName,
            block.findGeneratedOffetAt(block.toBlockOffset(startPos)),
            block.findGeneratedOffetAt(block.toBlockOffset(endPos)),
          ),
        ]

        return spans
          .filter(isNotNull)
          .map((span) => block.findOriginalTextSpan(span))
          .filter(isNotNull)
          .map((span) => block.toFileSpan(span))[0]
      }

      return
    }

    return this.ts.service.getNameOrDottedNameSpan(fileName, startPos, endPos)
  }
}
