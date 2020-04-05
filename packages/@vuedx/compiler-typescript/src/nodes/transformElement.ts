import {
  WITH_DIRECTIVES,
  ArrayExpression,
  buildProps,
  createArrayExpression,
  createCallExpression,
  createObjectExpression,
  createObjectProperty,
  createSimpleExpression,
  DirectiveNode,
  ElementTypes,
  NodeTransform,
  TELEPORT,
  KEEP_ALIVE,
  resolveComponentType,
  NodeTypes,
  RESOLVE_DIRECTIVE,
  ComponentNode,
  toValidAssetId,
  TransformContext,
  VNodeCall,
  buildSlots,
} from '@vue/compiler-core'
import { pascalCase } from '../pascalCase'

export const transformElement: (components: string[]) => NodeTransform = (
  components
) => (node, context) => {
  if (
    !(
      node.type === NodeTypes.ELEMENT &&
      (node.tagType === ElementTypes.ELEMENT ||
        node.tagType === ElementTypes.COMPONENT)
    )
  ) {
    return
  }

  return function postTransformElement() {
    const { tag } = node
    const isComponent = node.tagType === ElementTypes.COMPONENT
    const propsBuildResult = buildProps(node, context)

    let vnodeProps: VNodeCall['props'] = propsBuildResult.props
    let vnodeChildren: VNodeCall['children']
    let vnodeDirectives: VNodeCall['directives']

    const vnodeTag = isComponent
      ? components.includes(pascalCase(tag))
        ? `_${pascalCase(tag)}`
        : resolveComponentType(node as ComponentNode, context)
      : `"${tag}"`
    const shouldBuildAsSlots =
      isComponent && vnodeTag !== TELEPORT && vnodeTag !== KEEP_ALIVE

    if (!vnodeProps) {
      vnodeProps = createSimpleExpression('{}', false)
    }

    if (node.children.length) {
      if (shouldBuildAsSlots) {
        vnodeChildren = buildSlots(node, context).slots
      } else {
        vnodeChildren = node.children
      }
    } else {
      vnodeChildren = createSimpleExpression('[]', false) as any
    }

    if (propsBuildResult.directives.length) {
      vnodeDirectives = createArrayExpression(
        propsBuildResult.directives.map((dir) =>
          buildDirectiveArgs(dir, context)
        )
      ) as VNodeCall['directives']
    }

    node.codegenNode = createCallExpression(
      '_h',
      [vnodeTag, vnodeProps!, vnodeChildren!].filter(Boolean),
      node.loc
    ) as any

    if (vnodeDirectives) {
      node.codegenNode = createCallExpression(
        context.helperString(context.helper(WITH_DIRECTIVES)),
        [node.codegenNode!, vnodeDirectives]
      ) as any
    }
  }
}

const directiveImportMap = new WeakMap<DirectiveNode, symbol>()
function buildDirectiveArgs(
  dir: DirectiveNode,
  context: TransformContext
): ArrayExpression {
  const dirArgs: ArrayExpression['elements'] = []
  const runtime = directiveImportMap.get(dir)
  if (runtime) {
    dirArgs.push(context.helperString(runtime))
  } else {
    // inject statement for resolving directive
    context.helper(RESOLVE_DIRECTIVE)
    context.directives.add(dir.name)
    dirArgs.push(toValidAssetId(dir.name, `directive`))
  }
  const { loc } = dir
  if (dir.exp) dirArgs.push(dir.exp)
  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`)
    }
    dirArgs.push(dir.arg)
  }
  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`)
      }
      dirArgs.push(`void 0`)
    }
    const trueExpression = createSimpleExpression(`true`, false, loc)
    dirArgs.push(
      createObjectExpression(
        dir.modifiers.map((modifier) =>
          createObjectProperty(modifier, trueExpression)
        ),
        loc
      )
    )
  }
  return createArrayExpression(dirArgs, dir.loc)
}
