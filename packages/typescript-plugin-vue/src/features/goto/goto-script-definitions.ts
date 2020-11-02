import { isAttributeNode, isElementNode } from '@vuedx/template-ast-types'
import { RenderFunctionTextDocument } from '@vuedx/vue-virtual-textdocument'
import { findTemplateNodeAt } from '../../helpers/ast-ops'
import { TS } from '../../interfaces'
import { GotoProvider } from './abstract'

export const GotoScriptDefinitions: GotoProvider = {
  version: '*',
  getDefinitionAndBoundSpan(
    { helpers: h, context, service },
    fileName,
    position,
  ) {
    const document = h.getRenderDoc(fileName)
    if (document == null) return

    const location = document.getGeneratedOffsetAt(position)
    if (location == null) return

    const result = service.getDefinitionAndBoundSpan(fileName, location.offset)
    if (result == null) return

    let isTextSpanSet = false
    const definitions: TS.DefinitionInfo[] = []

    result.definitions?.forEach((definition) => {
      if (h.isRenderFunctionFileName(definition.fileName)) {
        if (definition.fileName !== document.fsPath) {
          context.log(
            `Unexpected bound span in ${document.fsPath} resolved to ${definition.fileName}`,
          )
          return
        }

        if (!document.isInGeneratedRange(definition.textSpan.start)) {
          const newResult = service.getDefinitionAndBoundSpan(
            definition.fileName,
            definition.textSpan.start,
          )

          if (
            newResult != null &&
            Array.isArray(newResult.definitions) &&
            newResult.definitions.length > 0
          ) {
            // TODO: Resolved contextSpan if `newResult` is resolved as return from setup()
            definitions.push(...newResult.definitions)
          } else if (definition.kind === 'var') {
            const componentInfo = h.getComponentInfo(document.container)
            const prop = componentInfo.props.find(
              (prop) => prop.name === definition.name,
            )

            if (prop != null) {
              definitions.push({
                ...definition,
                fileName: document.container.fsPath,
                textSpan: {
                  start: prop.loc.start.offset,
                  length: prop.loc.source.length,
                },
                containerKind: context.typescript.ScriptElementKind.unknown,
                containerName: '',
                contextSpan:
                  componentInfo.options?.properties.props != null
                    ? {
                        start:
                          componentInfo.options.properties.props.loc.start
                            .offset,
                        length:
                          componentInfo.options.properties.props.loc.source
                            .length,
                      }
                    : undefined,
              })
            }
          }
        } else {
          const textSpan = h.getTextSpan(document, definition.textSpan)
          if (textSpan !== definition.textSpan) {
            isTextSpanSet = true
            definition.textSpan = textSpan
            if (definition.contextSpan != null) {
              definition.contextSpan = h.getTextSpan(
                document,
                definition.contextSpan,
              )
            }
            definition.fileName = document.container.fsPath
            definitions.push(definition)
          }
        }
      } else {
        definitions.push(definition)
      }
    })
    result.definitions = definitions

    if (!isTextSpanSet) {
      const textSpan: TS.TextSpan | null = getTextSpan(document, position)
      if (textSpan != null) result.textSpan = textSpan
    }

    return result
  },
}

function getTextSpan(
  document: RenderFunctionTextDocument,
  position: number,
): TS.TextSpan | null {
  if (document.ast == null) return null

  const targetNode = findTemplateNodeAt(document.ast, position)
  if (targetNode?.node == null) return null

  if (isAttributeNode(targetNode.node)) {
    return {
      start: targetNode.node.loc.start.offset,
      length: targetNode.node.name.length,
    }
  } else if (isElementNode(targetNode.node)) {
    return {
      start: targetNode.node.loc.start.offset + 1,
      length: targetNode.node.tag.length,
    }
  } else {
    return {
      start: targetNode.node.loc.start.offset,
      length: targetNode.node.loc.source.length,
    }
  }
}
