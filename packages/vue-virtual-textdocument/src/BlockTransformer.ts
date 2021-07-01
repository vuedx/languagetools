import type {
  RawSourceMap,
  SFCBlock,
  SFCDescriptor,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vuedx/compiler-sfc'
import { compile, getTopLevelIdentifiers } from '@vuedx/compiler-tsx'
import * as Path from 'path'
import type { VueSFCDocument } from './VueSFCDocument'

export const annotations = {
  diagnosticsIgnore: {
    start: '/*<vuedx:diagnosticsIgnore>*/',
    end: '/*</vuedx:diagnosticsIgnore>*/',
  },
  tsxCompletions: '/*<vuedx:tsx-competions-target/>*/',
  tsCompletions: '/*<vuedx:ts-competions-target/>*/',
}

export type Annotations = typeof annotations

export interface BlockTransformerOptions {
  block: SFCBlock | SFCScriptBlock | SFCStyleBlock | SFCTemplateBlock
  document: VueSFCDocument
  descriptor: SFCDescriptor
  annotations: Annotations
}

export interface TransformerError extends SyntaxError {
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

export const builtins: Record<string, BlockTransformer> = {
  script: {
    output: (block) => (isSupportedLang(block.lang) ? block.lang : 'js'),
    transform: (source, _, { block, document, annotations }) => {
      if ('setup' in block && block.setup != null && block.setup !== false) {
        const {
          propsIdentifier,
          emitIdentifier,
          ...declared
        } = getTopLevelIdentifiers(source, [])

        let identifiers: string[] = Array.from(declared.identifiers)
        document.declarations.identifiers = declared.identifiers

        if (document.descriptor.template != null) {
          document.getDoc(document.descriptor.template)
          // This should trigger creation on template block doc.

          const ast = document.templateAST
          if (ast != null) {
            identifiers = identifiers.filter(
              (id) => ast.scope.globals.includes(id), // Provide globals.
            )
          } else {
            identifiers = []
          }
        }

        const code = [
          source,
          annotations.diagnosticsIgnore.start,
          `export default VueDX.internal.defineSetupComponent(${String(
            propsIdentifier,
          )}, ${String(emitIdentifier)}, {${
            identifiers.join(',') // Variables accessed from this context.
          }})`,
          annotations.diagnosticsIgnore.end,
        ].join('\n')

        return {
          code,
        }
      }

      // TODO: Support for components not exporting defaultComponent() from <script> block

      return { code: source }
    },
  },
  template: {
    output: () => 'tsx',
    transform: (source, _, { document, descriptor }) => {
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
          errors: errors.map((error) => ({
            ...error,
            code: error.code,
            severity: 'error',
            start: error.loc?.start.offset,
            length:
              error.loc != null
                ? error.loc.end.offset - error.loc.start.offset
                : undefined,
          })),
        }
      } catch (error) {
        return {
          code: '',
          errors: [
            {
              ...error,
              code: -1,
              severity: 'error',
              start: undefined,
              length: undefined,
            },
          ],
        }
      }
    },
  },
}
