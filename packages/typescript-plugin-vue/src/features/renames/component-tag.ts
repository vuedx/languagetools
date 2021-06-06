import type { LocalComponentRegistrationInfo } from '@vuedx/analyze'
import { getComponentName } from '@vuedx/shared'
import {
  ComponentNode,
  isComponentNode,
  RootNode,
  traverseFast,
} from '@vuedx/template-ast-types'
import {
  isVueFile,
  SCRIPT_BLOCK_SELECTOR,
  SCRIPT_SETUP_BLOCK_SELECTOR,
} from '@vuedx/vue-virtual-textdocument'
import { computeIdentifierReplacement } from '../../helpers/utils'
import type { TS } from '../../interfaces'
import type { RenameProvider } from './abstract'

export const RenameComponentTag: RenameProvider = {
  version: '*',
  name: 'component-tag',
  canRename(config, fileName, position, _options) {
    const { node, document } = config.helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )
    if (
      isComponentNode(node) &&
      isPositionInTagName(position, node) &&
      document != null
    ) {
      const info = config.helpers.getComponentInfo(document.container)
      const name = node.tag
      const component = info.components.find(
        (component) => component.name === name,
      )

      if (component == null) {
        return {
          canRename: false,
          localizedErrorMessage: 'Cannot rename global component',
        }
      }

      return {
        canRename: true,
        displayName: node.tag,
        fullDisplayName: node.tag,
        kind: config.context.typescript.ScriptElementKind.unknown,
        kindModifiers: 'componentTagName',
        fileToRename: undefined,
        triggerSpan: {
          start: node.loc.start.offset + 1,
          length: node.tag.length,
        },
      }
    }

    return undefined
  },
  applyRename(
    { helpers, service },
    fileName,
    position,
    findInStrings,
    findInComments,
  ) {
    const { node, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (document == null) return
    if (!isComponentNode(node)) return

    const info = helpers.getComponentInfo(document.container)
    const name = node.tag
    const component = info.components.find(
      (component) => component.name === name,
    )
    if (component == null) return

    const scriptFileName =
      document.container.descriptor.scriptSetup != null
        ? document.container.getDocumentFileName(SCRIPT_SETUP_BLOCK_SELECTOR)
        : document.container.getDocumentFileName(SCRIPT_BLOCK_SELECTOR)

    const renameLocations: TS.RenameLocation[] = []
    // if component is registered with an alias, then update to reflect in template.
    if (component.source.localName !== component.name) {
      renameLocations.push({
        fileName: document.container.fsPath,
        textSpan: {
          start: component.loc.start.offset,
          length: component.loc.source.length,
        },
        ...computeIdentifierReplacement(component.loc.source, component.name),
      })
    }
    // update the import statement.
    else {
      const { prefixText } = computeIdentifierReplacement(
        component.loc.source,
        component.source.localName,
      )

      const locations = service.findRenameLocations(
        scriptFileName,
        component.loc.start.offset + prefixText.length,
        findInStrings,
        findInComments,
      )
      if (locations != null) {
        renameLocations.push(
          ...locations.filter(
            (location) => location.fileName === scriptFileName,
          ),
        )
      }
    }

    if (document.ast != null) {
      getChangesForComponentTagRename(document.ast, component).forEach(
        (textSpan) =>
          renameLocations.push({
            fileName: document.container.fsPath,
            textSpan,
          }),
      )
    }

    return renameLocations
  },
  applyFileRename(
    config,
    containerFile,
    oldFileName,
    newFileName,
    _options,
    _preferences,
  ) {
    const fileTextChanges: TS.FileTextChanges[] = []
    if (isVueFile(oldFileName)) {
      const document = config.helpers.getRenderDoc(containerFile)

      if (document != null) {
        const name = getComponentName(oldFileName)
        const newName = getComponentName(newFileName)
        const info = config.helpers.getComponentInfo(document.container)
        const component = info.components.find(
          (component) => component.name === name,
        )

        if (component != null) {
          const { scriptSetup, script } = document.container.descriptor
          const scriptFileName =
            scriptSetup != null
              ? document.container.getDocumentFileName('scriptSetup')
              : script != null
              ? document.container.getDocumentFileName('script')
              : null

          if (scriptFileName != null) {
            const position = Math.max(
              component.loc.end.offset - 2,
              component.loc.start.offset,
            )

            const renameInfo = config.service.getRenameInfo(
              scriptFileName,
              position,
            )

            if (renameInfo.canRename) {
              const edits = config.service.findRenameLocations(
                scriptFileName,
                position,
                false,
                false,
              )
              if (edits != null) {
                const fileName = document.container.fsPath
                fileTextChanges.push({
                  fileName: fileName,
                  textChanges: edits
                    .filter((edit) => edit.fileName === scriptFileName)
                    .map((edit) => ({ span: edit.textSpan, newText: newName })),
                })
              }
            }

            // update tags in template
            if (
              document.ast != null &&
              name === component.source.localName &&
              component.name === component.source.localName
            ) {
              const textChanges: TS.TextChange[] = []
              if (component.loc.source.trim() !== name) {
                // Rename alias in components options
                textChanges.push({
                  span: {
                    start: component.loc.start.offset,
                    length: component.loc.source.indexOf(':'),
                  },
                  newText: newName,
                })
              }

              traverseFast(document.ast, (node) => {
                if (isComponentNode(node)) {
                  if (component.aliases.includes(node.tag)) {
                    textChanges.push({
                      newText: newName,
                      span: {
                        start: node.loc.start.offset + 1,
                        length: node.tag.length,
                      },
                    })

                    if (!node.isSelfClosing) {
                      textChanges.push({
                        newText: newName,
                        span: {
                          start:
                            node.loc.start.offset +
                            node.loc.source.lastIndexOf('</' + node.tag) +
                            2,
                          length: node.tag.length,
                        },
                      })
                    }
                  }
                }
              })

              fileTextChanges.push({
                fileName: document.container.fsPath,
                textChanges: textChanges,
              })
            }
          }
        }
      }
    }
    if (fileTextChanges.length > 0) return fileTextChanges

    return undefined
  },
}

export function getChangesForComponentTagRename(
  ast: RootNode,
  component: LocalComponentRegistrationInfo,
): TS.TextSpan[] {
  const locations: TS.TextSpan[] = []
  traverseFast(ast, (node) => {
    if (isComponentNode(node)) {
      if (component.aliases.includes(node.tag)) {
        locations.push({
          start: node.loc.start.offset + 1,
          length: node.tag.length,
        })

        if (!node.isSelfClosing) {
          locations.push({
            start:
              node.loc.start.offset +
              node.loc.source.lastIndexOf('</' + node.tag) +
              2,
            length: node.tag.length,
          })
        }
      }
    }
  })
  return locations
}

function isPositionInTagName(position: number, node: ComponentNode): boolean {
  return (
    // In start tag.
    position <= node.loc.start.offset + node.tag.length ||
    // In end tag.
    (!node.isSelfClosing &&
      node.loc.start.offset + node.loc.source.lastIndexOf('</') <= position)
  )
}
