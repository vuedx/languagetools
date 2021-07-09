import type {
  RawSourceMap,
  SFCBlock,
  SFCDescriptor,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vuedx/compiler-sfc'
import {
  annotations,
  compile,
  getTopLevelIdentifiers,
} from '@vuedx/compiler-tsx'
import { camelCase, pascalCase } from '@vuedx/shared'
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
}

export interface BlockTransformer {
  transform: BlockTransformerFn
  output(block: SFCBlock): 'js' | 'jsx' | 'ts' | 'tsx'
}

function isSupportedLang(lang?: string): lang is 'js' | 'jsx' | 'ts' | 'tsx' {
  return ['js', 'jsx', 'ts', 'tsx'].includes(lang ?? '')
}

export const builtins: Record<'script' | 'template', BlockTransformer> = {
  script: {
    output: (block) => (isSupportedLang(block.lang) ? block.lang : 'js'),
    transform: (source, _id, { block, document }) => {
      if ('setup' in block && block.setup != null && block.setup !== false) {
        const {
          propsIdentifier,
          emitIdentifier,
          components,
          directives,
          identifiers,
        } = getTopLevelIdentifiers(source, [])

        const declaredIdentifiers = new Set(identifiers)
        const declaredDirectives = new Set(directives)
        const declaredComponents = new Set(components)
        const usedIdentifiers = new Set<string>()
        const usedDirectives = new Set<string>()
        const usedComponents = new Set<string>()

        document.declarations.identifiers = declaredIdentifiers
        if (document.descriptor.template != null) {
          document.getDoc(document.descriptor.template)
          // This should trigger creation on template block doc.

          const ast = document.templateAST
          if (ast != null) {
            ast.scope.globals.forEach((id) => {
              if (declaredIdentifiers.has(id)) {
                usedIdentifiers.add(id)
              }
            })

            ast.components.forEach((name) => {
              const id = pascalCase(name)
              if (declaredComponents.has(id)) {
                usedComponents.add(id)
              }
            })

            ast.directives.forEach((name) => {
              const id = 'v' + pascalCase(name)
              if (declaredDirectives.has(id)) {
                usedDirectives.add(id)
              }
            })
          }
        }

        const code = [
          source,
          // annotations.diagnosticsIgnore.start,
          `export default VueDX.internal.defineSetupComponent(${
            propsIdentifier ?? '{}'
          }, ${emitIdentifier ?? '{}'}, {${
            Array.from(usedIdentifiers).join(',') // Variables accessed from this context.
          }}, { directives: {${
            Array.from(usedDirectives)
              .map((name) => `${camelCase(name.substr(1))}: ${name}`)
              .join(',') //
          }}, components: {${
            Array.from(usedComponents).join(',') //
          }}})`,
          // annotations.diagnosticsIgnore.end,
          '',
        ].join('\n')

        return {
          code,
        }
      }

      // TODO: Support for components not exporting defaultComponent() from <script> block

      return { code: source + '\n' }
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
        const components = document.options.getComponents()
        const info = document.options.getComponentInfo()
        if (info != null) {
          info.components.forEach((component) => {
            component.aliases.forEach((alias) => {
              components[alias] = {
                name: component.name,
                value: component.name, // TODO: Add value field to analyzer
                source: {
                  path: component.source.moduleName,
                  exported: component.source.exportName ?? 'default',
                  local: component.source.localName,
                },
              }
            })
          })
        }

        const extName = Path.extname(selfSrcFileName)
        const { code, ast, map, errors } = compile(source, {
          sourceMap: true,
          filename: document.fileName,

          selfSrc: selfSrcFileName.substr(
            0,
            selfSrcFileName.length - extName.length,
          ),

          components,

          onError(_error) {
            // TODO: Support error reporting
          },
        })

        document.templateAST = ast

        return {
          code,
          map,
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
      } catch (error) {
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
