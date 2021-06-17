import type {
  SFCBlock,
  SFCDescriptor,
  SFCScriptBlock,
  SFCStyleBlock,
  SFCTemplateBlock,
} from '@vuedx/compiler-sfc'
import { compile, getTopLevelIdentifiers } from '@vuedx/compiler-tsx'
import type { VueSFCDocument } from './VueSFCDocument'
import {
  RawSourceMap,
  SourceNode,
  SourceMapConsumer,
  SourceMapGenerator,
} from 'source-map'
import Path from 'path'

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

export type BlockTransformer = (
  source: string,
  id: string,
  options: BlockTransformerOptions,
) => {
  code: string
  map?: RawSourceMap
}

export const builtins: Record<string, BlockTransformer> = {
  script: (source, _, { block, document, annotations }) => {
    if (block.map == null) {
      throw new Error(`<script> block transformer requires source-map`)
    }

    if ('setup' in block && block.setup != null && block.setup !== false) {
      const consumer = new SourceMapConsumer(block.map)
      const sourceNode = SourceNode.fromStringWithSourceMap(source, consumer)
      const {
        propsIdentifier,
        emitIdentifier,
        ...declared
      } = getTopLevelIdentifiers(source, [])

      const identifiers: string[] = Array.from(declared.identifiers)
      document.declarations.identifiers = declared.identifiers

      sourceNode.add(
        [
          annotations.diagnosticsIgnore.start,
          `export default VueDX.internal.defineSetupComponent(${String(
            propsIdentifier,
          )}, ${String(emitIdentifier)}, {${identifiers.join(',')}})`,
          annotations.diagnosticsIgnore.end,
        ].join('\n'),
      )

      const { code, map } = sourceNode.toStringWithSourceMap()

      return {
        code,
        map: JSON.parse(map.toString()),
      }
    }
    // TODO: Support for components not exporting defaultComponent() from <script> block

    return { code: source, map: block.map }
  },
  template: (source, _, { document, block, descriptor }) => {
    if (block.map == null) {
      throw new Error(`<template> block transformer requires source-map`)
    }

    try {
      const generator = SourceMapGenerator.fromSourceMap(
        new SourceMapConsumer(block.map),
      )
      const { code, ast, map } = compile(source, {
        sourceMap: true,
        filename: document.fileName,

        selfSrc: `./${Path.basename(
          document.getBlockId(
            descriptor.scriptSetup ??
              descriptor.script ??
              document.fallbackScript,
          ),
        )}`,
        onError(_error) {
          // TODO: Support error reporting
        },
      })

      // TODO: Support error reporting.
      document.templateAST = ast

      if (map != null) {
        generator.applySourceMap(new SourceMapConsumer(map))

        return { code, map: JSON.parse(generator.toString()) as RawSourceMap }
      }

      return { code, map }
    } catch (error) {
      // TODO: Error handling!
      return { code: '' }
    }
  },
}
