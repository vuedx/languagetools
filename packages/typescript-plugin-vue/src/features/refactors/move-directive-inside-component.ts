import { findNextSibling, first, last } from '@vuedx/shared'
import {
  ComponentNode,
  DirectiveNode,
  ElementNode,
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
  RootNode,
  traverseFast,
} from '@vuedx/template-ast-types'
import { isVueFile } from '@vuedx/vue-virtual-textdocument'
import { TS } from '../../interfaces'
import { LanguageServiceOptions } from '../../types'
import { encode, RefactorProvider, REFACTORS } from './abstract'

export const MoveDirectiveToComponent: RefactorProvider = {
  version: '*',

  name: REFACTORS.MOVE_DIRECTIVE_TO_COMPONENT,

  findRefactors(options, fileName, position) {
    const document = options.helpers.getRenderDoc(fileName)
    const result = getDirectiveNodeAtPosition(options, fileName, position)
    const refactor: TS.ApplicableRefactorInfo = {
      name: REFACTORS.MOVE_DIRECTIVE_TO_COMPONENT,
      description: 'Move directive to component',
      actions: [],
    }

    if (document?.ast != null && result != null) {
      const info = options.helpers.getComponentInfo(document.container)
      const componentSource = info.components.find((component) =>
        component.aliases.includes(result.component.tag),
      )

      if (
        componentSource != null &&
        isVueFile(componentSource.source.moduleName)
      ) {
        if (result.directive.name === 'if') {
          const container = findParentNode(document.ast, result.component)
          const nextElement = findNextSibling(
            container.children,
            result.component,
          )

          refactor.actions.push({
            name: encode({ dir: 'if' }),
            description: `Move 'v-if' to '${result.component.tag}' component`,
          })

          if (isElementNode(nextElement)) {
            if (
              !nextElement.props.some(
                (prop) =>
                  isDirectiveNode(prop) &&
                  ['else-if', 'else'].includes(prop.name),
              )
            ) {
              return [refactor]
            }
          } else {
            return [refactor]
          }
        }
      }
    }

    return []
  },

  applyRefactor() {
    /*
      TODO: 
      1. Add prop if needed.
      2. Remove directive.
      3. Add directive, wrap multi root template in template block.
     */
    return undefined
  },
}

function getDirectiveNodeAtPosition(
  { helpers }: LanguageServiceOptions,
  fileName: string,
  position: number | TS.TextRange,
): {
  directive: DirectiveNode
  component: ComponentNode
} | null {
  const { node, ancestors } = helpers.findTemplateNodeAtPosition(
    fileName,
    position,
  )

  if (isDirectiveNode(node)) {
    const parent = last(ancestors).node

    if (isComponentNode(parent)) {
      return { directive: node, component: parent }
    }
  } else if (isSimpleExpressionNode(node)) {
    const directive = first(ancestors.slice(-1)).node
    if (isDirectiveNode(directive)) {
      const component = first(ancestors.slice(-2)).node
      if (isComponentNode(component)) {
        return { directive, component }
      }
    }
  }

  return null
}

function findParentNode(
  ast: RootNode,
  node?: ElementNode,
): ElementNode | RootNode {
  if (node == null) return ast

  let result: ElementNode | undefined

  traverseFast(ast, (node, _, stop) => {
    if (isElementNode(node)) {
      if (node.children.includes(node as any)) {
        result = node
        stop()
      }
    }
  })

  return result ?? ast
}
