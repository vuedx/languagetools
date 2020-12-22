import { isComponentNode, traverseFast } from '@vuedx/template-ast-types'
import { ComponentInfo, VueProject } from 'packages/analyze/src'
import { TS } from '../../interfaces'
import { defineDiagnosticProvider } from './abstract'
import { DiagnosticCode, getMessage } from './messages'

export const INFERRED_COMPONENT_PROVIDER = defineDiagnosticProvider({
  version: '*',

  semantic({ context, helpers, service }, fileName) {
    const diagnostics: TS.Diagnostic[] = []
    const document = helpers.getRenderDoc(fileName)
    if (document?.ast == null) return diagnostics
    const project = context.getVueProjectForFile(fileName, true)
    if (project.kind !== 'inferred') return diagnostics

    const info = helpers.getComponentInfo(document.container)
    const {
      projectComponentNames,
      localComponentNames,
      globalComponentNames,
    } = getKnownComponents(info, project)
    const projectComponents = project.components
    const file = helpers
      .getLanguageServiceFor(document.fsPath, service)
      .getProgram()
      ?.getSourceFile(document.fsPath)

    traverseFast(document.ast, (node) => {
      if (isComponentNode(node)) {
        if (
          !localComponentNames.has(node.tag) &&
          !globalComponentNames.has(node.tag)
        ) {
          if (projectComponentNames.has(node.tag)) {
            const components = projectComponents.filter((component) =>
              component.aliases.includes(node.tag),
            )

            const relatedInformation: TS.DiagnosticRelatedInformation[] = []
            if (components.length > 0) {
              components.forEach((component) => {
                relatedInformation.push({
                  code: DiagnosticCode.InferredGlobalComponent_PossibleSource,
                  category: context.typescript.DiagnosticCategory.Warning,
                  messageText: getMessage(
                    DiagnosticCode.InferredGlobalComponent_PossibleSource,
                    { tag: node.tag, source: component.source.moduleName },
                  ),
                  file: undefined,
                  start: undefined,
                  length: undefined,
                })
              })
            }

            diagnostics.push({
              category: context.typescript.DiagnosticCategory.Warning,
              code: DiagnosticCode.InferredGlobalComponent_Known,
              start: node.loc.start.offset + 1,
              length: node.tag.length,
              messageText: getMessage(
                DiagnosticCode.InferredGlobalComponent_Known,
                { tag: node.tag },
              ),
              file,
              relatedInformation,
            })
          } else {
            diagnostics.push({
              category: context.typescript.DiagnosticCategory.Warning,
              code: DiagnosticCode.InferredGlobalComponent_Unknown,
              start: node.loc.start.offset + 1,
              length: node.tag.length,
              messageText: getMessage(
                DiagnosticCode.InferredGlobalComponent_Unknown,
                { tag: node.tag },
              ),
              file,
            })
          }
        }
      }
    })

    return diagnostics
  },

  suggestions(context, fileName) {
    return []
  },

  syntax(context, fileName) {
    return []
  },
})

function getKnownComponents(
  info: ComponentInfo,
  project: VueProject,
): {
  projectComponentNames: Set<string>
  localComponentNames: Set<string>
  globalComponentNames: Set<string>
} {
  const localComponentNames = new Set(
    info.components.flatMap((component) => component.aliases),
  )
  const globalComponentNames = new Set(
    project.globalComponents.flatMap((component) => component.aliases),
  )
  const projectComponentNames = new Set(
    project.components.flatMap((component) => component.aliases),
  )
  return { projectComponentNames, localComponentNames, globalComponentNames }
}
