import { ComponentInfo } from '@vuedx/analyze'
import { t } from '@vuedx/template-ast-types'
import { TS } from '../interfaces'
import { getPaddingLength } from './utils'

export function genSetupFnParams(
  info: ComponentInfo,
  node: t.Node,
): TS.TextChange[] {
  const changes: TS.TextChange[] = []
  if (info.fnSetupOption != null) {
    const needsProps =
      node.scope.identifiers.some((id) => {
        if (node.scope.getBinding(id) == null) {
          return info.identifierSource[id]?.name === 'props'
        }
        return false
      }) && info.fnSetupOption.props?.rest == null
    const needsEmit =
      node.scope.identifiers.includes('$emit') &&
      info.fnSetupOption.context?.identifiers.emit == null &&
      info.fnSetupOption.context?.rest == null
    const needsAttrs =
      node.scope.identifiers.includes('$attrs') &&
      info.fnSetupOption.context?.identifiers.attrs == null &&
      info.fnSetupOption.context?.rest == null

    const needsSlots =
      node.scope.identifiers.includes('$slots') &&
      info.fnSetupOption.context?.identifiers.slots == null &&
      info.fnSetupOption.context?.rest == null
    const needsContext = needsAttrs || needsEmit || needsSlots

    if (needsProps || needsContext) {
      if (info.fnSetupOption.context != null) {
        const index = info.fnSetupOption.context.loc.source.indexOf('{')
        if (index >= 0) {
          const offset =
            getPaddingLength(info.fnSetupOption.context.loc.source, index + 1) +
            index +
            1

          const args = [
            needsSlots ? 'slots' : undefined,
            needsAttrs ? 'attrs' : undefined,
            needsEmit ? 'emit' : undefined,
          ]
            .filter(Boolean)
            .join(', ')

          changes.push({
            newText: `${args}, `,
            span: {
              start: info.fnSetupOption.context.loc.start.offset + offset,
              length: 0,
            },
          })
        }
      } else if (info.fnSetupOption.props != null) {
        const hasParen =
          info.fnSetupOption.loc.source.indexOf('(') <
          info.fnSetupOption.props.loc.start.offset
        const props = info.fnSetupOption.props.loc.source
        changes.push({
          newText: hasParen ? `${props}, context` : `(${props}, context)`,
          span: {
            start: info.fnSetupOption.props.loc.start.offset,
            length: info.fnSetupOption.props.loc.source.length,
          },
        })
      } else {
        changes.push({
          newText: needsContext ? 'props, context' : 'props',
          span: {
            start:
              info.fnSetupOption.loc.start.offset +
              info.fnSetupOption.loc.source.indexOf('(') +
              1,
            length: 0,
          },
        })
      }
    }
  }
  return changes
}
