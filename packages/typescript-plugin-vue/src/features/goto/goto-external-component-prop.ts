import { GotoProvider } from './abstract'
import {
  t,
  isAttributeNode,
  isComponentNode,
  isDirectiveNode,
  isSimpleExpressionNode,
} from '@vuedx/template-ast-types'
import {
  isVirtualFile,
  getContainingFile,
} from '@vuedx/vue-virtual-textdocument'

export const GotoExternalComponentProp: GotoProvider = {
  version: '*',
  getDefinitionAndBoundSpan({ helpers: h, context }, fileName, position) {
    const document = h.getRenderDoc(fileName)
    if (document?.ast == null) return

    const targetNode = h.findTemplateNodeAtPosition(fileName, position)

    if (isSimpleExpressionNode(targetNode.node)) {
      const last = targetNode.ancestors.pop()
      if (last != null) {
        targetNode.node = last.node
      }
    }

    let name: string
    let node: t.Node
    if (
      isDirectiveNode(targetNode?.node) &&
      targetNode.node.name === 'bind' &&
      isSimpleExpressionNode(targetNode.node.arg)
    ) {
      name = targetNode.node.arg.content
      node = targetNode.node.arg
    } else if (isAttributeNode(targetNode?.node)) {
      name = targetNode.node.name
      node = targetNode.node
    } else {
      return
    }

    const parent = targetNode.ancestors[targetNode.ancestors.length - 1]?.node
    if (!isComponentNode(parent)) return

    const componentInfo = h.getComponentInfo(document.container)
    const component = componentInfo.components.find((component) =>
      component.aliases.includes(parent.tag),
    )

    if (component == null) return
    const scriptFileName = (
      document.container.getDocument('script') ??
      document.container.getDocument('scriptSetup')
    ).fsPath
    const resolvedModule = h.getResolvedModule(
      scriptFileName,
      component.source.moduleName,
    )
    if (resolvedModule == null) return

    if (!isVirtualFile(resolvedModule.resolvedFileName)) return
    const externalComponentFilename = getContainingFile(
      resolvedModule.resolvedFileName,
    )

    const componentDoc = h.getVueDocument(externalComponentFilename)
    if (componentDoc == null) return

    const externalComponentInfo = h.getComponentInfo(componentDoc)
    const prop = externalComponentInfo.props.find((prop) => prop.name === name)
    if (prop == null) return

    return {
      textSpan: {
        start: node.loc.start.offset,
        length: name.length,
      },
      definitions: [
        {
          name: prop.name,
          kind: context.typescript.ScriptElementKind.jsxAttribute,
          fileName: componentDoc.fsPath,
          textSpan: {
            start: prop.loc.start.offset,
            length: prop.loc.source.length,
          },
          containerKind: context.typescript.ScriptElementKind.unknown,
          containerName: '',
          contextSpan:
            externalComponentInfo.options?.properties.props != null
              ? {
                  start:
                    externalComponentInfo.options.properties.props.loc.start
                      .offset,
                  length:
                    externalComponentInfo.options.properties.props.loc.source
                      .length,
                }
              : undefined,
        },
      ],
    }
  },
}
