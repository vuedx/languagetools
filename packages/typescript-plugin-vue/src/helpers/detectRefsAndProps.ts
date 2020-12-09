import { ComponentInfo } from '@vuedx/analyze'
import { t } from '@vuedx/template-ast-types'
import { VueTextDocument } from '@vuedx/vue-virtual-textdocument'
import { getScriptFileName } from './utils'
import { TS } from '../interfaces'

export function detectRefsAndProps(
  service: TS.LanguageService,
  document: VueTextDocument,
  info: ComponentInfo,
  node: t.Node,
): { refs: string[]; props: string[] } {
  const refs: string[] = []
  const props: string[] = []

  const program = service.getProgram()
  const sourceFile = program?.getSourceFile(getScriptFileName(document))

  if (program != null && sourceFile != null) {
    const checker = program.getTypeChecker()
    const findNodeAt = (
      start: number,
      end: number,
      container: TS.Node = sourceFile,
    ): TS.Node | undefined => {
      const node = container
        .getChildren()
        .find((node) => node.pos <= start && end <= node.end)

      if (node != null) {
        if (node.pos === start && node.pos === end) return node
        else return findNodeAt(start, end, node)
      } else {
        return container
      }
    }

    node.scope.identifiers.forEach((id) => {
      if (node.scope.getBinding(id) == null && id in info.identifierSource) {
        const source = info.identifierSource[id]
        if (source.name === 'setup' || source.name.startsWith('scriptSetup:')) {
          const node = findNodeAt(
            source.loc.start.offset,
            source.loc.end.offset,
          )
          if (node != null) {
            const type = checker.getTypeAtLocation(node)
            const str = checker.typeToString(type)

            if (/^(Ref|ComputedRef)<.*?>$/.test(str.trim())) {
              refs.push(id)
            }
          }
        } else if (source.name === 'props') {
          props.push(id)
        }
      }
    })
  }

  return { refs, props }
}
