import { getComponentName } from '@vuedx/shared'
import {
  ElementNode,
  findTemplateNodeAt,
  isElementNode,
} from '@vuedx/template-ast-types'
import { inject, injectable } from 'inversify'
import * as Path from 'path'
import type { CompletionItem, Range } from 'vscode-languageserver-types'
import { FilesystemService } from '../services/FilesystemService'
import { LoggerService } from '../services/LoggerService'
import { TypescriptContextService } from '../services/TypescriptContextService'

@injectable()
export class TemplateCompletionsService {
  private readonly logger = LoggerService.getLogger('Completions')
  private readonly cache = new Map<string, CompletionItem[]>()

  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {
    this.logger.debug('TepmlateCompletion')
  }

  public getLocalComponents(
    fileName: string,
    position: number,
  ): CompletionItem[] | undefined {
    const vueFile = this.fs.getVueFile(fileName)
    const program = this.ts.service.getProgram()
    const tsProject = this.ts.getProjectFor(fileName)
    if (program == null || tsProject == null || vueFile == null) {
      return undefined
    }
    const key = `components:${fileName}:${tsProject.getScriptVersion(
      fileName,
    )}:${position}`
    if (this.cache.has(key)) return this.cache.get(key)

    const dir = Path.posix.dirname(fileName)

    const content = vueFile.getText()
    const openTagIndex = content.substr(0, position).lastIndexOf('<')
    if (openTagIndex < 0) return []
    const lastTag = content.substring(openTagIndex, position)
    if (/[\s\n]/.test(lastTag)) return []
    const isClosingTag = lastTag.startsWith('</')
    const completions: CompletionItem[] = []

    const replacementRange = {
      start: vueFile.positionAt(openTagIndex),
      end: vueFile.positionAt(position),
    }

    if (isClosingTag && vueFile.templateAST != null) {
      const ast = vueFile.templateAST
      const { node, ancestors } = findTemplateNodeAt(ast, position)
      if (isElementNode(node)) {
        completions.push(
          this.createClosingTagCompletionItem(node, replacementRange),
        )
        ancestors.forEach(({ node }) => {
          if (isElementNode(node)) {
            const tag = `</${node.tag}>`
            completions.push({
              label: tag,
              kind: 1,
              preselect: true,
              sortText: '0',
              textEdit: {
                range: replacementRange,
                newText: tag,
              },
            })
          }
        })
      }
    } else {
      // const { tagCase } = this.ts.getVueProjectFor(
      //   fileName,
      // ).config.preferences.template

      program.getSourceFiles().forEach(({ fileName }) => {
        if (!this.fs.isVueFile(fileName)) return
        const sortText = this.getRelativeFileName(dir, fileName)
        const name = getComponentName(fileName)

        // TODO: Support <script> environment for autocomplete.

        completions.push({
          label: name,
          sortText,
          textEdit: {
            range: replacementRange,
            newText: name,
          },
        })
      })
    }

    this.cache.set(key, completions)

    return completions
  }

  private createClosingTagCompletionItem(
    node: ElementNode,
    replacementRange: Range,
  ): CompletionItem {
    return {
      label: `</${node.tag}>`,
      kind: 1,
      sortText: '0',
      textEdit: {
        range: replacementRange,
        newText: `</${node.tag}>`,
      },
    }
  }

  private getRelativeFileName(dir: string, fileName: string): string {
    const relName = Path.posix.relative(dir, fileName)

    return relName.startsWith('.') ? relName : `./${relName}`
  }
}
