import {
  AttributeNode,
  buildSlots,
  CompoundExpressionNode,
  createCompoundExpression,
  createFunctionExpression,
  createSimpleExpression,
  DirectiveNode,
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
  isDirectiveNode,
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
                    component.name != null && component.name !== name
                      ? component.name + ' as '
                      : ''
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
      const attributes = generateJSXAttributes(node, context)

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

const ControlDirectiveNameRE = /^(if|for|else-if|else|slot)$/
function generateJSXAttributes(
  node: ElementNode,
  context: TransformContext,
): any[] {
  const result: any[] = []
  const alreadyProcessed = new Set<DirectiveNode>()
  node.props.forEach((dir) => {
    if (isAttributeNode(dir)) {
      result.push(...generateAttribute(dir, node))
    } else if (
      ControlDirectiveNameRE.test(dir.name) ||
      alreadyProcessed.has(dir)
    ) {
      // Already handled.
    } else {
      switch (dir.name) {
        case 'bind':
          result.push(...generateVBind(dir, node))
          break
        case 'on':
          result.push(...generateVOn(dir, node))
          break
        case 'model':
          result.push(...generateVModel(dir, node))
          break
        default:
          {
            const code: any[] = generateCustomDirective(
              dir,
              node,
              alreadyProcessed,
            )

            result.push(...code)
          }
          break
      }
    }
  })

  return result
}

function generateCustomDirective(
  dir: DirectiveNode,
  node: ElementNode,
  alreadyProcessed: Set<DirectiveNode>,
): any[] {
  const code: any[] = []
  const dirs = node.props.filter(
    (prop) => isDirectiveNode(prop) && prop.name === dir.name,
  ) as DirectiveNode[]

  dirs.forEach((dir) => alreadyProcessed.add(dir))

  code.push(` v-${dir.name}={`)

  const isMultiValue = dirs.length > 1
  if (isMultiValue) code.push('[')
  dirs.forEach((dir) => {
    code.push('{')

    code.push('arg:', dir.arg ?? 'undefined', ',')
    code.push('exp:', dir.exp ?? 'undefined', ',')

    // TODO: Maybe array?
    code.push('modifiers: {')
    dir.modifiers.forEach((modifier) => {
      code.push(modifier, ':true,')
    })
    code.push('}')

    code.push('}')
    if (isMultiValue) code.push(',')
  })
  if (isMultiValue) code.push(']')
  code.push('}')

  return code
}

function generateVModel(dir: DirectiveNode, node: ElementNode): any[] {
  const code: any[] = []
  const exp = dir.exp ?? 'null'
  const isNativeInput = /^(input|textarea|select)$/.test(node.tag)

  if (isNativeInput && dir.arg == null) {
    const isCheckboxOrRadio = node.props.some(
      (prop) =>
        isAttributeNode(prop) &&
        (prop.name === 'radio' || prop.name === 'checkbox'),
    )
    const type = `Event & {target:${getHTMLElementType(node.tag)}}`
    code.push(` ${isCheckboxOrRadio ? 'checked' : 'value'}={`, exp, '}  ')
    code.push(
      `onChange={($event) => (`,
      exp,
      ' = ',
      dir.modifiers.includes('number')
        ? `Number(($event as ${type}).target.value)`
        : `($event as ${type}).target.value`,
      ')}',
    )
  } else {
    code.push(' ')
    if (isSimpleExpressionNode(dir.arg)) {
      if (dir.arg.isStatic) {
        code.push(dir.arg, '={', exp, '}')
      } else {
        code.push('{...({[', dir.arg, ']: ', exp, '})}')
      }
    } else {
      code.push('modelValue={', exp, '}')
    }

    code.push(' ')
    const arg = isSimpleExpressionNode(dir.arg)
      ? dir.arg.isStatic
        ? ["'", 'onUpdate:' + dir.arg.content, "'"]
        : [`['onUpdate:' + `, dir.arg, `]`]
      : [`'onUpdate:modelValue'`]
    code.push(`{...({`, ...arg, ': $event => ', exp, ' = $event', '})}')
    if (isSimpleExpressionNode(dir.arg)) dir.arg.isStatic = false
  }
  return code
}

function generateAttribute(attr: AttributeNode, node: ElementNode): any[] {
  const code: any[] = []
  if (attr.name === 'class' || attr.name === 'style') return []
  code.push(
    ' ',
    createSimpleExpression(
      attr.name,
      false,
      createLoc(attr.loc, 0, attr.name.length),
    ),
  )
  if (attr.value != null) {
    code.push(
      '=',
      createSimpleExpression(attr.value.loc.source, false, attr.value.loc),
    )
  }
  return code
}

const InlineVOnHandlerRE = /\bfunction\b|\b=>\b/
function generateVOn(dir: DirectiveNode, node: ElementNode): any[] {
  const code: any[] = []
  const exp = isSimpleExpressionNode(dir.exp)
    ? isSimpleIdentifier(dir.exp.content.trim()) ||
      InlineVOnHandlerRE.test(dir.exp.content)
      ? [dir.exp]
      : dir.exp.content.includes('$event')
      ? ['$event =>', dir.exp]
      : ['() => ', dir.exp]
    : ['() => {}']

  code.push(' ')
  if (isSimpleExpressionNode(dir.arg)) {
    if (dir.arg.isStatic) {
      code.push(
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
      code.push('{...({[', dir.arg, ']: ', ...exp, '})}')
    }
  } else if (dir.exp != null) {
    code.push('{...(', dir.exp, ')}')
  }
  return code
}

function generateVBind(dir: DirectiveNode, node: ElementNode): any[] {
  const code: any[] = []
  if (isSimpleExpressionNode(dir.arg)) {
    if (dir.arg.isStatic || dir.arg.content === 'key') {
      dir.arg.isStatic = false
      code.push(' ', dir.arg)
      if (dir.exp != null) code.push('={', dir.exp, '}')
    } else {
      code.push(' {...({[', dir.arg, ']: ')
      if (dir.exp != null) code.push(dir.exp)
      else code.push('true')
      code.push('})}')
    }
  } else if (dir.exp != null) {
    code.push(' {...(', dir.exp, ')}')
  }

  return code
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

function getHTMLElementType(tag: string): string {
  switch (tag) {
    case 'input':
      return 'HTMLInputElement'
    case 'textarea':
      return 'HTMLTextAreaElement'
    case 'select':
      return 'HTMLSelectElement'
    default:
      return 'HTMLElement'
  }
}
