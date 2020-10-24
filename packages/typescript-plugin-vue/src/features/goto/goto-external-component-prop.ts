import { GotoProvider } from './abstract'
import { isAttributeNode, isComponentNode } from '@vuedx/template-ast-types'
import {
  isVirtualFile,
  getContainingFile,
} from '@vuedx/vue-virtual-textdocument'

export const GotoExternalComponentProp: GotoProvider = {
  version: '*',
  getDefinitionAndBoundSpan({ helpers: h, context }, fileName, position) {
    const document = h.getRenderDoc(fileName)
    if (document?.ast == null) return

    const targetNode = h.findTemplateNodeAt(document.ast, position)
    if (!isAttributeNode(targetNode?.node)) return

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

    const name = targetNode.node.name
    const externalComponentInfo = h.getComponentInfo(componentDoc)
    const prop = externalComponentInfo.props.find((prop) => prop.name == name)
    if (prop == null) return

    return {
      textSpan: {
        start: targetNode.node.loc.start.offset,
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
            externalComponentInfo.options?.properties['props'] != null
              ? {
                  start:
                    externalComponentInfo.options.properties['props'].loc.start
                      .offset,
                  length:
                    externalComponentInfo.options.properties['props'].loc.source
                      .length,
                }
              : undefined,
        },
      ],
    }
  },
}
