import { isDirectiveNode } from '@vuedx/template-ast-types'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import { isOffsetInSourceLocation } from '../helpers/isOffsetInSourceLocation'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TemplateDeclarationsService } from '../services/TemplateDeclarationsService'
import { TypescriptContextService } from '../services/TypescriptContextService'
import {
  BuiltinDirectiveName,
  VueTemplateLanguageFactService,
} from './languageFacts/vue-template'

@injectable()
export class QuickInfoService {
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
    @inject(TemplateDeclarationsService)
    private readonly declarations: TemplateDeclarationsService,
    @inject(VueTemplateLanguageFactService)
    private readonly vueTemplateLanguageFacts: VueTemplateLanguageFactService,
  ) {}

  public readonly logger = new LoggerService(QuickInfoService)

  public getQuickInfoAtPosition(
    fileName: string,
    position: number,
  ): Typescript.QuickInfo | undefined {
    const file = this.fs.getVueFile(fileName)
    if (file == null) return

    const { node, templateRange } = this.declarations.findTemplateNode(
      file,
      position,
    )

    if (isDirectiveNode(node)) {
      const offset = position - templateRange.start

      const documentation =
        this.vueTemplateLanguageFacts.directives[
          node.name as BuiltinDirectiveName
        ]
      if (documentation != null) {
        if (
          node.nameLoc != null &&
          isOffsetInSourceLocation(node.nameLoc, offset)
        ) {
          return {
            kind: this.ts.lib.ScriptElementKind.keyword,
            kindModifiers: 'directive',
            textSpan: {
              start: templateRange.start + node.nameLoc.start.offset,
              length: node.nameLoc.source.length,
            },
            documentation,
          }
        }

        const index = node.modifierLocs.findIndex((loc) =>
          isOffsetInSourceLocation(loc, position - node.loc.start.offset),
        )
        const modifier = node.modifiers[index]
        if (modifier != null) {
          // TODO: provide quick info for builtin modifiers
          return
        }
      }
    }

    const generatedPosition = this.declarations.findGeneratedPosition(
      file,
      position,
    )
    if (generatedPosition == null) return
    const result = this.ts.service.getQuickInfoAtPosition(
      file.generatedFileName,
      generatedPosition.position,
    )

    if (result == null) return
    const name = this.fs.getTextSpan(file, result.textSpan)
    this.logger.debug('Is undefined global?', name)
    if (
      this.declarations
        .getUndefinedGlobals(file.originalFileName)
        .some(
          (declaration) =>
            declaration.id === name &&
            declaration.references.some(
              (reference) => reference.start === result.textSpan.start,
            ),
        )
    ) {
      this.logger.debug('Yes, it is undefined global.', name)
      return // if undefined global, don't show quick info
    }

    const textSpan = file.findOriginalTextSpan(result.textSpan)
    if (textSpan == null) return

    return { ...result, textSpan }
  }
}
