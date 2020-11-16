import {
  buildSlots,
  CompoundExpressionNode,
  createCompoundExpression,
  createFunctionExpression,
  createSimpleExpression,
  DynamicSlotsExpression,
  ElementNode,
  isSimpleIdentifier,
  NodeTransform,
  SlotsExpression,
  TemplateChildNode,
  TransformContext,
  WITH_CTX,
} from '@vue/compiler-core'
import {
  isAttributeNode,
  isCommentNode,
  isComponentNode,
  isElementNode,
  isForNode,
  isIfNode,
  isSimpleExpressionNode,
  isTextNode,
} from '@vuedx/template-ast-types'
import camelCase from 'lodash.camelcase'
import { Options } from '../types'
import { createLoc, pascalCase, processBogusComment } from '../utils'

export function createElementTransform(
  options: Required<Options>,
): NodeTransform {
  let isImportAdded = false
  return (node, context) => {
    if (!isImportAdded) {
      context.imports.add({
        exp: '_Ctx',
        path: getInternalPath(options),
      })
      isImportAdded = true
    }

    if (!isElementNode(node)) return
    if (isComponentNode(node)) {
      const name = node.tag
      const component = options.components[name]
      if ((context.identifiers[name] ?? 0) <= 0) {
        if (component != null) {
          context.imports.add({
            exp:
              component.named === true
                ? `{ ${
                    component.name != null ? component.name + ' as ' : ''
                  }${name} }`
                : name,
            path: component.path,
          })
          context.addIdentifiers(name)
        }
      }
    }

    return () => {
      const name: string = isComponentNode(node)
        ? pascalCase(node.tag)
        : node.tag

      const startTag = createSimpleExpression(
        name,
        false,
        createLoc(node.loc, node.loc.source.indexOf(node.tag), node.tag.length),
        false,
      )
      const attributes = getJSXAttributes(node, context)

      if (node.isSelfClosing) {
        node.codegenNode = createCompoundExpression([
          '<',
          startTag,
          ...attributes,
          ' />',
        ]) as any
      } else {
        const endTag = createSimpleExpression(
          name,
          false,
          createLoc(
            node.loc,
            node.loc.source.lastIndexOf(node.tag),
            node.tag.length,
          ),
          false,
        )
        const children = getChildren(node, context)
        node.codegenNode = createCompoundExpression([
          '<',
          startTag,
          ...attributes,
          ' >',
          ...children,
          '</',
          endTag,
          '>',
        ]) as any
      }
    }
  }
}

function getInternalPath(options: Required<Options>): string {
  return `./${
    options.filename.split(/[/\\]/).pop() ?? options.filename
  }?internal`
}

function getJSXAttributes(node: ElementNode, context: TransformContext): any[] {
  const result: any[] = []
  node.props.forEach((dir, index) => {
    if (isAttributeNode(dir)) {
      result.push(
        ' ',
        createSimpleExpression(
          dir.name,
          false,
          createLoc(dir.loc, 0, dir.name.length),
        ),
      )
      if (dir.value != null) {
        result.push(
          '=',
          createSimpleExpression(dir.value.loc.source, false, dir.value.loc),
        )
      }
    } else if (dir.name === 'bind') {
      if (isSimpleExpressionNode(dir.arg)) {
        if (dir.arg.isStatic || dir.arg.content === 'key') {
          dir.arg.isStatic = false
          result.push(' ', dir.arg)
          if (dir.exp != null) result.push('={', dir.exp, '}')
        } else {
          result.push(' {...({[', dir.arg, ']: ')
          if (dir.exp != null) result.push(dir.exp)
          else result.push('true')
          result.push('})}')
        }
      } else if (dir.exp != null) {
        result.push(' {...(', dir.exp, ')}')
      }
    } else if (dir.name === 'on') {
      const exp = isSimpleExpressionNode(dir.exp)
        ? isSimpleIdentifier(dir.exp.content.trim())
          ? [dir.exp]
          : dir.exp.content.includes('$event')
          ? ['$event =>', dir.exp]
          : ['() => ', dir.exp]
        : ['() => {}']

      result.push(' ')
      if (isSimpleExpressionNode(dir.arg)) {
        if (dir.arg.isStatic) {
          result.push(
            createSimpleExpression(
              camelCase('on-' + dir.arg.content),
              false,
              dir.arg.loc,
            ),
            '={',
            ...exp,
            '}',
          )
        } else {
          result.push('{...({[', dir.arg, ']: ', ...exp, '})}')
        }
      } else if (dir.exp != null) {
        result.push('{...(', dir.exp, ')}')
      }
    } else if (dir.name === 'model') {
      const exp = dir.exp ?? 'null'

      result.push(' ')
      if (isSimpleExpressionNode(dir.arg)) {
        if (dir.arg.isStatic) {
          result.push(dir.arg, '={', exp, '}')
        } else {
          result.push('{...({[', dir.arg, ']: ', exp, '})}')
        }
      } else {
        result.push('modelValue={', exp, '}')
      }

      result.push(' ')
      const arg = isSimpleExpressionNode(dir.arg)
        ? dir.arg.isStatic
          ? ["'", 'onUpdate:' + dir.arg.content, "'"]
          : [`['onUpdate:' + `, dir.arg, `]`]
        : [`'onUpdate:modelValue'`]
      result.push(`{...({`, ...arg, ': $event => ', exp, ' = $event', '})}')
      if (isSimpleExpressionNode(dir.arg)) dir.arg.isStatic = false
    } else if (dir.name === 'slot' || dir.name === 'if') {
      // Already handled.
    } else {
      result.push(` __directive_${dir.name}_${index}={[`)
      if (isSimpleExpressionNode(dir.arg) && !dir.arg.isStatic)
        result.push(dir.arg, ',')
      if (dir.exp != null) result.push(dir.exp, ',')
      result.push(']}')
    }
  })

  return result
}

function getChildren(node: ElementNode, context: TransformContext): any[] {
  if (isComponentNode(node)) {
    const { slots } = buildSlots(node, context, (props, children) => {
      const nodes = processTemplateNodes(children)
      return createFunctionExpression(
        props,
        createCompoundExpression(
          nodes.length > 0 ? ['(<>', ...nodes, '</>)'] : ['null'],
        ),
      )
    })
    context.helpers.delete(WITH_CTX)

    if (isDynamicSlotsExpression(slots)) {
      slots.arguments[0].properties = slots.arguments[0].properties.filter(
        (property) =>
          !(
            isSimpleExpressionNode(property.key) && property.key.content === '_'
          ),
      )
    } else {
      slots.properties = slots.properties.filter(
        (property) =>
          !(
            isSimpleExpressionNode(property.key) && property.key.content === '_'
          ),
      )
    }

    return [createCompoundExpression(['{', slots as any, '}'])]
  } else {
    return processTemplateNodes(node.children)
  }
}

function processTemplateNodes(nodes: TemplateChildNode[]): any[] {
  return nodes.flatMap((node) => {
    if (isCommentNode(node)) {
      if (node.content.includes('<') || node.content.includes('>')) {
        return createCompoundExpression([processBogusComment(node.content)])
      } else {
        return []
      }
    } else if (isTextNode(node)) {
      return createCompoundExpression([processBogusComment(node.content)])
    } else if (isIfNode(node) || isForNode(node)) {
      return createCompoundExpression(['{', node as any, '}'])
    } else {
      return (node as unknown) as CompoundExpressionNode
    }
  })
}

function isDynamicSlotsExpression(
  node: SlotsExpression,
): node is DynamicSlotsExpression {
  return node.type === 14
}
