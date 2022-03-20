import type {
  CompilerError,
  RawSourceMap,
  SFCBlock,
  SFCDescriptor,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vuedx/compiler-sfc'
import { annotations, compile } from '@vuedx/compiler-tsx'
import { pascalCase } from '@vuedx/shared'
import { isRootNode } from '@vuedx/template-ast-types'
import {
  createExportDeclarationForComponents,
  createExportDeclarationForDirectives,
  createExportDeclarationForExpose,
  createExportDeclarationForComponent,
  findScopeBindings,
  toAST,
  toCode,
} from '@vuedx/transforms'
import * as Path from 'path'
import type { VueSFCDocument } from './VueSFCDocument'

export { annotations }
export type Annotations = typeof annotations

export interface BlockTransformerOptions {
  block: SFCBlock | SFCScriptBlock | SFCStyleBlock | SFCTemplateBlock
  document: VueSFCDocument
  descriptor: SFCDescriptor
  annotations: Annotations
}

export interface TransformerError {
  message: string
  code: number | string | undefined
  codeDescription?: {
    href: string
  }
  start: number | undefined
  length: number | undefined
  source?: string
  severity: 'error' | 'warning' | 'info' | 'hint' | 'unused' | 'deprecated'
}

export type BlockTransformerFn = (
  source: string,
  id: string,
  options: BlockTransformerOptions,
) => {
  code: string
  map?: RawSourceMap
  errors?: TransformerError[]
  ast?: any
}

export interface BlockTransformer {
  transform: BlockTransformerFn
  output(block: SFCBlock): 'js' | 'jsx' | 'ts' | 'tsx'
}

function isSupportedLang(lang?: string): lang is 'js' | 'jsx' | 'ts' | 'tsx' {
  return ['js', 'jsx', 'ts', 'tsx'].includes(lang ?? '')
}

const caches = {
  script: new WeakMap<VueSFCDocument, string>(),
}

function toText(...lines: string[]): string {
  return lines.join('\n').replace(/\n$/, '') + '\n'
}

export const builtins: Record<'script' | 'template', BlockTransformer> = {
  script: {
    output: (block) => (isSupportedLang(block.lang) ? block.lang : 'js'),
    transform: (source, _id, { block, document }) => {
      try {
        const isScriptSetup =
          'setup' in block && block.setup != null && block.setup !== false
        // TODO: Should it be typescript instead of babel?
        const ast = toAST(source, {
          sourceFilename: document.fileName,
          isScriptSetup: isScriptSetup,
          lang: block.lang,
        })

        const usedIdentifiers = new Set<string>()
        const usedDirectives = new Set<string>()
        const usedComponents = new Set<string>()

        if (document.descriptor.template != null && isScriptSetup) {
          const ast = document.getDoc(document.descriptor.template)?.ast

          if (isRootNode(ast)) {
            ast.scope.globals.forEach((id) => {
              usedIdentifiers.add(id)
            })

            ast.components.forEach((name) => {
              const id = pascalCase(name.split('.').shift() ?? name)
              usedComponents.add(id)
            })

            ast.directives.forEach((name) => {
              const id = 'v' + pascalCase(name)
              usedDirectives.add(id)
            })
          }
        }

        const config = {
          isScriptSetup,
          leadingCommentForCopiedSource: annotations.copiedSource.start,
          trailingCommentForCopiedSource: annotations.copiedSource.end,
          leadingCommentForIdentifiers: annotations.templateGlobals.start,
          trailingCommentForIdentifiers: annotations.templateGlobals.end,
        }

        const nodes: any[] = [
          createExportDeclarationForComponents(ast, {
            ...config,
            shouldIncludeScriptSetup: (id) => usedComponents.has(id),
          }),
          createExportDeclarationForDirectives(ast, {
            ...config,
            shouldIncludeScriptSetup: (id) => usedDirectives.has(id),
          }),
          createExportDeclarationForExpose(ast, config),
        ]

        if (isScriptSetup) {
          document.declarations.identifiers = new Set(findScopeBindings(ast))

          nodes.push(
            createExportDeclarationForComponent(ast, {
              ...config,
              shouldIncludeScriptSetup: (id) => usedIdentifiers.has(id),
            }),
          )
        } else {
          nodes.push(createExportDeclarationForComponent(ast, config))
        }

        const code = toText(
          ';',
          annotations.diagnosticsIgnore.start,
          ';' + annotations.tsCompletions,
          toCode(nodes, { sourceText: source }).code,
          annotations.diagnosticsIgnore.end,
        )

        caches.script.set(document, code)

        return {
          ast,
          code: source + code,
        }
      } catch (error) {
        console.error('[VueDX] BlockTransformer - Error parsing script:', error)

        return {
          code:
            source +
            (caches.script.get(document) ??
              toText(
                ';',
                annotations.diagnosticsIgnore.start,
                ';' + annotations.tsCompletions,
                'export const __VueDX_components = {};',
                'export const __VueDX_directives = {};',
                'export const __VueDX_expose = {};',
                'export const __VueDX_DefineComponent = VueDX.internal.defineComponent({});',
                annotations.diagnosticsIgnore.end,
              )),
          errors: [],
        }
      }
    },
  },
  template: {
    output: () => 'tsx',
    transform: (source, _, { document, descriptor, block }) => {
      try {
        const selfSrcFileName = document.getBlockId(
          descriptor.scriptSetup ??
            descriptor.script ??
            document.fallbackScript,
        )

        const errors: CompilerError[] = []
        const result = compile(source, {
          sourceMap: true,
          filename: document.fileName,

          selfSrc: `./${Path.posix.basename(
            selfSrcFileName.substring(
              0,
              selfSrcFileName.length -
                Path.posix.extname(selfSrcFileName).length,
            ),
          )}`,

          onError(_e) {
            // errors.push(error)
          },
        })

        errors.push(...result.errors)
        document.templateAST = result.ast

        return {
          code: result.code,
          map: result.map,
          ast: result.ast,
          errors: errors.map((error) => {
            const diag: TransformerError = {
              message: error.message,
              code: error.code,
              severity: 'error',
              source: 'TemplateCompiler',
              start: undefined,
              length: undefined,
            }

            if (error.loc != null) {
              diag.start = error.loc.start.offset
              diag.length = error.loc.end.offset - error.loc.start.offset
            }

            return diag
          }),
        }
      } catch (e) {
        const error = e as Error
        return {
          code: '',

          errors: [
            {
              message: `Error processing template: ${String(
                error.message,
              )}\n${String(error.stack)}`,
              code: -1,
              source: 'TemplateCompiler',
              severity: 'error',
              start: 0,
              length: block.loc.source.length,
            },
          ],
        }
      }
    },
  },
}
