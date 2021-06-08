import type {
  AttributeNode,
  CompoundExpressionNode,
  DirectiveNode,
  DynamicSlotsExpression,
  ElementNode,
  NodeTransform,
  SimpleExpressionNode,
  SlotsExpression,
  TemplateChildNode,
  TransformContext,
} from '@vue/compiler-core'
import {
  buildSlots,
  createBlockStatement,
  createCompoundExpression,
  createFunctionExpression,
  createSimpleExpression,
  findDir,
  findProp,
  isSimpleIdentifier,
  RENDER_SLOT,
  WITH_CTX,
} from '@vue/compiler-core'
import { camelCase, flatten, pascalCase } from '@vuedx/shared'
import {
  isAttributeNode,
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
  isTextNode,
} from '@vuedx/template-ast-types'
import type { Options } from '../types'
import { createLoc } from '../utils'

export function createElementTransform(
  options: Required<Options>,
  expressions: CompoundExpressionNode[],
): NodeTransform {
  let isImportAdded = false
  let dynamicComponentCounter = 0
  const globalsExpressions: CompoundExpressionNode[][] = []
  const addHoistScope = (): void => {
    globalsExpressions.push(expressions.slice())
    expressions.length = 0
  }
  const removeHoistScope = (): void => {
    const exps = globalsExpressions.pop()
    if (Array.isArray(exps)) {
      expressions.length = 0
      expressions.push(...exps)
    }
  }
  const hoist = (exp: SimpleExpressionNode): string => {
    const name = `_DyComp${dynamicComponentCounter++}`.padEnd(
      'component'.length,
      '_',
    )

    expressions.push(
      createCompoundExpression([`const `, name, ' = ', exp, ';']),
    )

    return name
  }

  return (node, context) => {
    if (!isImportAdded) {
      context.imports.push({
        exp: '_Ctx',
        path: getInternalPath(options),
      })
      isImportAdded = true
    }

    if (isTextNode(node)) {
      markNonElementNode(node)
    }
    if (!isElementNode(node)) return

    let resolvedComponentName: string | undefined
    const slotDir = findDir(node, 'slot')
    const hasScope = isComponentNode(node) || slotDir != null
    if (hasScope) addHoistScope()
    if (isComponentNode(node)) {
      if (!['component', 'slot'].includes(node.tag)) {
        const name = pascalCase(node.tag)
        const component =
          options.components[name] ?? options.components[node.tag]
        if ((context.identifiers[name] ?? 0) <= 0) {
          if (component != null) {
            context.imports.push({
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
            resolvedComponentName = name
          }
        }
      }
    }

    return () => {
      const exprs = expressions.slice()
      if (hasScope) {
        removeHoistScope()
        if (slotDir != null) {
          if (slotDir.exp == null)
            slotDir.exp = createSimpleExpression('{}', false)
          ;(slotDir.exp as any).exprs = exprs
        }
      }

      if (node.tag === 'slot') {
        const slotName = findProp(node, 'name')
        const props = node.props.filter(
          (prop) =>
            prop !== slotName &&
            (isAttributeNode(prop) || prop.name === 'bind'),
        )
        const args = createCompoundExpression(
          props.length === 0
            ? []
            : props.length === 1 &&
              isDirectiveNode(props[0]) &&
              props[0].arg == null
            ? [props[0].exp]
            : flatten([
                '{',

                flatten(
                  props.map<any>((prop) => {
                    if (isAttributeNode(prop)) {
                      return generateAttribute(prop, node, ':')
                    } else if (prop.name === 'bind') {
                      if (isSimpleExpressionNode(prop.arg)) {
                        return [
                          '[',
                          prop.arg.isStatic
                            ? prop.arg
                            : createSimpleExpression(
                                prop.arg.content,
                                prop.arg.isStatic,
                                createLoc(
                                  prop.arg.loc,
                                  1,
                                  prop.arg.content.length,
                                ),
                              ),
                          ']:',
                          prop.exp ?? 'true',
                          ',',
                        ]
                      } else if (prop.exp != null) {
                        return ['...(', prop.exp, '),']
                      }
                    }
                    return []
                  }),
                ),
                '}',
              ]),
        )
        node.codegenNode = createCompoundExpression(
          flatten([
            context.helper(RENDER_SLOT),
            '(',
            '_ctx.$slots',
            ',',
            isAttributeNode(slotName)
              ? createSimpleExpression(
                  slotName.value?.content ?? 'default',
                  true,
                  slotName.loc,
                )
              : isDirectiveNode(slotName)
              ? slotName.exp
              : createSimpleExpression('default', true),
            ',',
            args,
            ')',
            node.children.length > 0
              ? flatten([' ?? (<>', generateChildNodes(node.children), '</>)'])
              : [],
          ]),
        ) as any

        return
      }

      let isHoistedComponentExpression = false
      let name: string = resolvedComponentName ?? node.tag
      let startTag: SimpleExpressionNode = createSimpleExpression(
        name,
        false,
        createLoc(node.loc, node.loc.source.indexOf(node.tag), node.tag.length),
      )
      if (node.tag === 'component') {
        const isProp = findProp(node, 'is')
        if (isAttributeNode(isProp) && isProp.value != null) {
          isHoistedComponentExpression = true
          name = hoist(
            createSimpleExpression(
              `${JSON.stringify(isProp.value.content)} as const`,
              false,
              isProp.value.loc,
            ),
          )
          startTag = createSimpleExpression(name, false, startTag.loc)
        } else if (
          isDirectiveNode(isProp) &&
          isSimpleExpressionNode(isProp.exp)
        ) {
          isHoistedComponentExpression = true
          name = hoist(isProp.exp)
          startTag = createSimpleExpression(name, false, startTag.loc)
        } else {
          name = ''
          startTag = createSimpleExpression('', false)
        }
      }
      const attributes = generateJSXAttributes(node, context)

      if (node.isSelfClosing) {
        node.codegenNode = createCompoundExpression([
          '<',
          startTag,
          ' ',
          ...attributes,
          ' />',
        ]) as any
        markElementNode(node.codegenNode)
      } else {
        const children = generateChildren(
          node,
          context,
          isHoistedComponentExpression || resolvedComponentName != null,
          exprs,
        )
        node.codegenNode = createCompoundExpression([
          '<',
          startTag,
          ' ',
          ...attributes,
          ' >',
          ...children,
          '</',
          name,
          '>',
        ]) as any
        markElementNode(node.codegenNode)
      }
    }
  }
}

function markElementNode(node: any): void {
  node._isElementNode = true
}
function markNonElementNode(node: any): void {
  node._isElementNode = false
}
function isMarkedElementNode(node: any): boolean {
  return node?._isElementNode === true
}

function getInternalPath(options: Required<Options>): string {
  return `./${
    options.filename.split(/[/\\]/).pop() ?? options.filename
  }?internal`
}

const ControlDirectiveNameRE = /^(if|for|else-if|else|slot)$/
function generateJSXAttributes(
  node: ElementNode,
  _context: TransformContext,
): any[] {
  const result: any[] = []
  const alreadyProcessed = new Set<DirectiveNode>()
  const ignore = node.tag === 'component' ? findProp(node, 'is') : undefined
  node.props.forEach((dir) => {
    if (dir === ignore) return
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

function generateAttribute(
  attr: AttributeNode,
  _node: ElementNode,
  sep: '=' | ':' = '=',
): any[] {
  const code: any[] = []
  if (sep === '=' && (attr.name === 'class' || attr.name === 'style')) {
    return code
  } else {
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
        sep,
        createSimpleExpression(attr.value.loc.source, false, attr.value.loc),
      )
    } else if (sep === ':') {
      code.push(sep, 'true')
    }

    if (sep === ':') code.push(',')

    return code
  }
}

const InlineVOnHandlerRE = /\bfunction\b|\b=>\b/
function generateVOn(dir: DirectiveNode, _node: ElementNode): any[] {
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
      if (dir.arg.content.includes(':')) {
        code.push(
          '{...({"',
          createSimpleExpression(
            getEventName(dir.arg.content),
            false,
            dir.arg.loc,
          ),
          '":',
          ...exp,
          '})}',
        )
      } else {
        code.push(
          createSimpleExpression(
            getEventName(dir.arg.content),
            false,
            dir.arg.loc,
          ),
          '={',
          ...exp,
          '}',
        )
      }
    } else {
      code.push('{...({[', dir.arg, ']: ', ...exp, '})}')
    }
  } else if (dir.exp != null) {
    code.push('{...(', dir.exp, ')}')
  }
  return code
}

function getEventName(dir: string): string {
  if (dir.includes(':')) {
    const parts = dir.split(':')

    return `${camelCase(`on-${parts[0] ?? ''}`)}:${parts.slice(1).join(':')}`
  }
  return camelCase(`on-${dir}`)
}

function generateVBind(dir: DirectiveNode, _node: ElementNode): any[] {
  const code: any[] = []
  if (isSimpleExpressionNode(dir.arg)) {
    if (dir.arg.isStatic || dir.arg.content === 'key') {
      dir.arg.isStatic = false
      code.push(' ', dir.arg)
      if (dir.exp != null) code.push('={', dir.exp, '}')
    } else {
      code.push(
        ' {...({[',
        createSimpleExpression(
          dir.arg.content,
          dir.arg.isStatic,
          createLoc(dir.arg.loc, 1, dir.arg.content.length),
        ),
        ']: ',
      )
      if (dir.exp != null) code.push(dir.exp)
      else code.push('true')
      code.push('})}')
    }
  } else if (dir.exp != null) {
    code.push(' {...(', dir.exp, ')}')
  }

  return code
}

function generateChildren(
  node: ElementNode,
  context: TransformContext,
  isResolvedComponent: boolean,
  expressions: CompoundExpressionNode[],
): any[] {
  if (isResolvedComponent) {
    const { slots } = buildSlots(node, context, (props, children, _loc) => {
      if ((props as any)?.exprs != null) {
        expressions = (props as any)?.exprs
      }
      const nodes = generateChildNodes(children)
      const returns = createCompoundExpression(
        nodes.length > 0 ? ['(<>', ...nodes, '</>)'] : ['null'],
      )
      const fn = createFunctionExpression(props, undefined, true)

      if (expressions.length > 0) {
        fn.body = createBlockStatement([
          ...expressions,
          createCompoundExpression(['\nreturn ', returns]),
        ])
      } else {
        fn.returns = returns
      }

      return fn
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
    return generateChildNodes(node.children)
  }
}

export function generateChildNodes(nodes: TemplateChildNode[]): any[] {
  return flatten(
    nodes.map((node) => {
      if (isTextNode(node)) {
        return createCompoundExpression([
          '{',
          JSON.stringify(node.content),
          '}\n',
        ])
      } else if (isMarkedElementNode((node as any).codegenNode)) {
        return createCompoundExpression([node as any, '\n'])
      } else {
        return createCompoundExpression(['{', node as any, '}\n'])
      }
    }),
  )
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
