import type {
  ComponentInfo,
  ImportSourceWithLocation,
  VueProject,
} from '@vuedx/analyze'
import type { ProjectConfigNormalized } from '@vuedx/projectconfig'
import {
  findNextSibling,
  first,
  last,
  getComponentName,
  isNotNull,
} from '@vuedx/shared'
import {
  createSimpleExpression,
  ElementNode,
  findTemplateChildrenInRange,
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
  isSimpleIdentifier,
  Node,
  RootNode,
  stringify,
  traverseFast,
} from '@vuedx/template-ast-types'
import type {
  RenderFunctionTextDocument,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import Path from 'path'
import type { PluginContext } from '../../context'
import { getFilenameForNewComponent } from '../../helpers/utils'
import type { TS } from '../../interfaces'
import { registerLocalComponentWithSource } from '../../transforms/registerLocalComponent'
import {
  decode,
  encode,
  EncodedString,
  RefactorProvider,
  REFACTORS,
} from './abstract'

/// <reference types="@vuedx/compiler-tsx" />

interface ExtractComponentArgs {
  directory: string
}

type ExtractComponentAction = EncodedString<ExtractComponentArgs>

export const RefactorExtractComponent: RefactorProvider = {
  version: '*',
  name: REFACTORS.EXTRACT_COMPONENT,
  findRefactors({ helpers, context }, fileName, position) {
    const extractInCurrentDirectory: TS.RefactorActionInfo = {
      name: encode<ExtractComponentArgs>({ directory: '.' }),
      description: 'Extract to component in current directory',
    }

    const refactor: TS.ApplicableRefactorInfo = {
      name: REFACTORS.EXTRACT_COMPONENT,
      description: 'Extract to component',
      inlineable: true,
      actions: [extractInCurrentDirectory],
    }

    // Check if refactor can be applied
    const document = helpers.getDocumentAt(fileName, position)
    if (helpers.isRenderFunctionDocument(document)) {
      const nodes = findNodes(document, position)
      if (nodes.length === 0) {
        extractInCurrentDirectory.notApplicableReason = 'No active selection'
      } else if (document.ast != null && nodes.length > 1) {
        const parent = findParentNode(document.ast, nodes)
        if (isElementNode(parent)) {
          if (detectConditionType(parent, nodes) === 'partial') {
            extractInCurrentDirectory.notApplicableReason =
              'Partial v-if/v-else-if/v-else tags cannot be extracted'
          }
        }
      }
    } else {
      extractInCurrentDirectory.notApplicableReason =
        'Only supported in template block'
    }

    // Load project component directories.
    const project = context.getVueProjectForFile(fileName, true)
    project.config.preferences.componentsDirectories.forEach((directory) => {
      refactor.actions.push({
        name: encode<ExtractComponentArgs>({ directory }),
        description: `Extract to component in "${directory}" directory`,
        notApplicableReason: extractInCurrentDirectory.notApplicableReason,
      })
    })

    // TODO: Add options to extract including v-if/v-for on root node.

    if (refactor.actions.length > 4) {
      refactor.inlineable = false
    }

    return [refactor]
  },
  applyRefactor(config, fileName, _, position, refactorName, actionName) {
    if (refactorName !== REFACTORS.EXTRACT_COMPONENT) return
    const { helpers, context } = config
    const args = decode(actionName as ExtractComponentAction)
    const document = helpers.getRenderDoc(fileName)
    if (document?.ast == null) return

    // Resolved target directory.
    const project = context.getVueProjectForFile(fileName, true)
    const directoryName =
      args.directory === '.'
        ? Path.posix.dirname(fileName)
        : Path.posix.resolve(project.rootDir, args.directory)

    // Pick a placeholder component name.
    const info = helpers.getComponentInfo(document.container)
    const componentFileName = getFilenameForNewComponent(
      config.context,
      directoryName,
      new Set(info.components.map((component) => component.name)),
    )

    const nodes = findNodes(document, position)

    // Known identifiers.
    const rawIdentifiers = new Set(
      nodes.flatMap((node) => node.scope.identifiers),
    )

    // Collection of nodes that should be replaced when generating code of new component.
    const replaceNodes = new Map<Node, null | Node>()
    const addSkipNodes = (skipped: Node[], all: Node[]): void => {
      skipped.forEach((node) => {
        replaceNodes.set(node, null)
        node.scope.identifiers.forEach((id) => rawIdentifiers.delete(id))
      })
      all.forEach((prop) => {
        if (!replaceNodes.has(prop)) {
          prop.scope.identifiers.forEach((id) => rawIdentifiers.add(id))
        }
      })
    }

    // Detect how to process conditional directives.
    const parent = findParentNode(document.ast, nodes)
    const conditionType = detectConditionType(parent, nodes) // TODO: Provide choice to user.
    if (conditionType === 'preserve') {
      nodes.forEach((node) => {
        if (isElementNode(node)) {
          addSkipNodes(
            node.props.filter(
              (prop) =>
                isDirectiveNode(prop) && /^(if|else-if|else)$/.test(prop.name),
            ),
            [...node.props, ...node.children],
          )
        }
      })
    }

    // For single element node extracts, for look can be preserved.
    if (nodes.length === 1) {
      const el = first(nodes)
      if (isElementNode(el)) {
        const forNode = el.props.find(
          (prop) => isDirectiveNode(prop) && prop.name === 'for',
        )

        if (forNode != null) {
          addSkipNodes([forNode], [...el.props, ...el.children])
        }
      }
    }

    // Find components, v-model and v-emit.
    const components = new Set<string>()
    const models = new Set<string>()
    const emits = new Map<string, string>()
    nodes.forEach((node) =>
      traverseFast(node, (node) => {
        if (isComponentNode(node)) components.add(node.tag)
        else if (isDirectiveNode(node)) {
          if (isSimpleExpressionNode(node.exp)) {
            if (node.name === 'model') {
              node.exp.scope.globals.forEach((identifier) => {
                models.add(identifier)
                rawIdentifiers.delete(identifier)
              })
            } else if (node.name === 'on') {
              if (isSimpleIdentifier(node.exp.content.trim())) {
                const name = node.exp.content.trim()
                addSkipNodes([node.exp], [])
                replaceNodes.set(
                  node.exp,
                  createSimpleExpression(`$emit('${name}')`, false),
                )

                emits.set(name, name)
              }
            }
          }
        }
      }),
    )

    // Generate template for new component
    const identifiers = Array.from(rawIdentifiers)
    const script: string[] = []

    if (project.config.preferences.script.mode === 'normal') {
      // Generate options for new component
      const options = {
        components: genComponentsOptionsText({
          info,
          addImport: (text) => script.push(text),
          fileName,
          components,
          componentFileName,
        }),
        props: genPropsOptionsText({ identifiers, models }),
        emits: genEmitsOptionsText({ emits, models }),
      }

      const optionsText = Array.from(Object.values(options))
        .filter(Boolean)
        .map((line) => '  ' + line)
        .join('\n')

      if (optionsText !== '') {
        if (project.version.startsWith('2.')) {
          script.push(`export default {\n${optionsText}\n}`)
        } else {
          script.unshift(`import { defineComponent } from 'vue'`)
          script.push(`export default defineComponent({\n${optionsText}\n})`)
        }
      }
    } else {
      // We don't need to register components in <script setup> mode, so reusing
      // components option generation but rejecting output and keeping only imports.
      genComponentsOptionsText({
        info,
        addImport: (text) => script.push(text),
        fileName,
        components,
        componentFileName,
      })

      // TODO: Generate props/emits in object syntax with types maybe.
      const vueImports: string[] = []
      if (identifiers.length > 0 || models.size > 0) {
        vueImports.push('defineProps')
        script.push(
          `const props = defineProps(${genProps(context, [
            ...identifiers,
            ...models,
          ])})`,
        )
      }

      if (emits.size > 0 || models.size > 0) {
        vueImports.push('defineEmit')
        const text = genEmits(
          context,
          Array.from(emits.keys()),
          Array.from(models),
        )

        script.push(`const emit = defineEmit(${text})`)
      }

      if (vueImports.length > 0) {
        script.unshift(`import { ${vueImports.join(', ')} } from 'vue'`)
      }
    }

    const sfc: string[] = []
    if (script.length > 0) {
      sfc.push(
        getScriptStartTag(project.config.preferences.script),
        ...script,
        `</script>\n`,
      )
    }

    sfc.push(
      `<template>${stringify(nodes, {
        indent: 2,
        initialIndent: 1,
        directive: project.config.preferences.template.directiveSyntax,
        replaceNodes,
      })}</template>\n`,
    )

    // Generate text changes to import newly created component.
    const code = sfc.join('\n')
    const { name, changes, renameLocation } = getImportEditForComponent(
      document.container,
      info,
      componentFileName,
      project,
    )

    // Generate text changes to use newly created component in <template> of current component.
    const templateReplacement = {
      newText: genTagForExtractedComponent({
        name,
        project,
        emits,
        models,
        identifiers,
        replaceNodes,
      }),
      span: {
        start: first(nodes).loc.start.offset,
        length: last(nodes).loc.end.offset - first(nodes).loc.start.offset,
      },
    }

    changes.push(templateReplacement)
    config.context.createVueDocument(componentFileName, code)

    return {
      renameFilename: document.container.fsPath,
      renameLocation: renameLocation,
      edits: [
        {
          isNewFile: true,
          fileName: componentFileName,
          textChanges: [
            {
              span: {
                start: 0,
                length: 0,
              },
              newText: code,
            },
          ],
        },
        {
          fileName: document.container.fsPath,
          textChanges: changes,
        },
      ],
    }
  },
}

function genEmits(
  _context: PluginContext,
  emits: string[],
  models: string[],
): string {
  return `[${[...emits, ...models.map((id) => `onUpdate:${id}`)]
    .map((key) => `'${key}'`)
    .join(', ')}]`
}

function genProps(_context: PluginContext, identifiers: string[]): string {
  return `[${identifiers.map((id) => `'${id}'`).join(', ')}]`
}

function genTagForExtractedComponent({
  name,
  project,
  emits,
  models,
  identifiers,
  replaceNodes,
}: {
  name: string
  project: VueProject
  emits: Map<string, string>
  models: Set<string>
  identifiers: string[]
  replaceNodes: Map<Node, Node | null>
}): string {
  const useShorthand =
    project.config.preferences.template.directiveSyntax === 'shorthand'
  const skipNodes = new Set<Node>()
  replaceNodes.forEach((value, key) => {
    if (value == null) skipNodes.add(key)
  })
  const skipNodesTemplate = Array.from(skipNodes)
    .map((node) =>
      stringify(node, {
        indent: 2,
        initialIndent: 0,
        directive: project.config.preferences.template.directiveSyntax,
      }),
    )
    .join(' ')
  const modelsTemplate = Array.from(models)
    .map((id) => `v-model:${id}="${id}"`)
    .join(' ')

  const vOnDirText = useShorthand ? '@' : 'v-on:'
  const vBindDirText = useShorthand ? ':' : 'v-bind:'

  const emitsTemplate = Array.from(emits.entries())
    .map(([key, value]) => `${vOnDirText}${key}="${value}"`)
    .join(' ')

  const bindsTemplate = identifiers
    .map((id) => `${vBindDirText}${id}="${id}"`)
    .join(' ')

  const openTag = [
    name,
    skipNodesTemplate,
    modelsTemplate,
    emitsTemplate,
    bindsTemplate,
  ]
    .filter(Boolean)
    .join(' ')

  return `<${openTag} />`
}

function genEmitsOptionsText({
  emits,
  models,
}: {
  emits: Map<string, string>
  models: Set<string>
}): string {
  const text = [
    ...emits.keys(),
    ...Array.from(models).map((id) => `onUpdate:${id}`),
  ]
    .map((key) => `'${key}'`)
    .join(', ')

  return text !== '' ? `emits: [${text}],` : ''
}

function genPropsOptionsText({
  identifiers,
  models,
}: {
  identifiers: string[]
  models: Set<string>
}): string {
  const text = [...identifiers, ...models].map((id) => `'${id}'`).join(', ')
  return text !== '' ? `props: [${text}],` : ''
}

function genComponentsOptionsText({
  components,
  info,
  addImport,
  fileName,
  componentFileName,
}: {
  info: ComponentInfo
  addImport(text: string): void
  fileName: string
  componentFileName: string
  components: Set<string>
}): string {
  const text = info.components
    .map(({ name, source, aliases }) => {
      if (aliases.some((alias) => components.has(alias))) {
        addImport(genComponentImport(fileName, componentFileName, source))
        const registration =
          name === source.localName
            ? source.localName
            : `${name}: ${source.localName}`

        return registration
      }

      return undefined
    })
    .filter(isNotNull)
    .join(', ')

  return text !== '' ? `components: {${text}},` : ''
}

function genComponentImport(
  oldFileName: string,
  newFileName: string,
  source: ImportSourceWithLocation,
): string {
  let moduleName = source.moduleName

  if (moduleName.startsWith('.')) {
    moduleName = Path.posix.relative(
      Path.posix.dirname(newFileName),
      Path.posix.resolve(Path.posix.dirname(oldFileName), moduleName),
    )

    if (!moduleName.startsWith('.')) {
      moduleName = `./${moduleName}`
    }
  }

  return `import ${
    source.exportName != null
      ? `{ ${
          source.localName === source.exportName
            ? ``
            : `${source.exportName} as `
        }${source.localName} }`
      : `${source.localName}`
  } from '${moduleName}'`
}

function detectConditionType(
  parent: ElementNode | RootNode,
  nodes: Node[],
): 'none' | 'extract' | 'preserve' | 'partial' {
  const conditions = nodes.map((node) => {
    if (isElementNode(node)) {
      return node.props.find(
        (prop) =>
          isDirectiveNode(prop) && /^(if|else-if|else)$/.test(prop.name),
      )
    }

    return undefined
  })

  const nonNullConditions = conditions.filter((condition) => condition != null)

  if (nonNullConditions.length > 0) {
    if (conditions.length === 1) return 'preserve'

    const firstCondition = first(conditions)
    const lastCondition = last(conditions)
    if (
      (firstCondition == null || firstCondition.name === 'if') &&
      (lastCondition == null || lastCondition.name === 'else')
    ) {
      return 'extract'
    }

    if (firstCondition != null && firstCondition.name !== 'if') return 'partial'
    const nextSibling = findNextSibling(parent.children, last(nodes))
    const nextCondition = isElementNode(nextSibling)
      ? nextSibling.props.find(
          (prop) => isDirectiveNode(prop) && /^(else-if|else)$/.test(prop.name),
        )
      : undefined

    if (nextCondition == null) return 'extract'

    return 'partial'
  } else {
    return 'none'
  }
}

function getScriptStartTag(
  preferences: ProjectConfigNormalized['preferences']['script'],
): string {
  return preferences.mode === 'normal'
    ? preferences.language !== 'js'
      ? `<script lang=${JSON.stringify(preferences.language)}>`
      : `<script>`
    : preferences.language !== 'js'
    ? `<script lang=${JSON.stringify(preferences.language)} setup>`
    : `<script setup>`
}

function findNodes(
  document: RenderFunctionTextDocument,
  position: number | TS.TextRange,
): Node[] {
  return document.ast != null
    ? typeof position === 'number'
      ? findTemplateChildrenInRange(document.ast, position, position)
      : findTemplateChildrenInRange(document.ast, position.pos, position.end)
    : []
}

function findParentNode(ast: RootNode, nodes: Node[]): ElementNode | RootNode {
  if (nodes.length === 0) return ast

  const search = nodes[0]
  let result: ElementNode | undefined

  traverseFast(ast, (node, _, stop) => {
    if (isElementNode(node)) {
      if (node.children.includes(search as any)) {
        result = node
        stop()
      }
    }
  })

  return result ?? ast
}

function getImportEditForComponent(
  document: VueTextDocument,
  info: ComponentInfo,
  fileName: string,
  project: VueProject,
): {
  name: string
  changes: TS.TextChange[]
  renameLocation: number
} {
  const name = getComponentName(fileName)
  const { script, scriptSetup } = document.descriptor
  const relativeFileName = `./${Path.posix.relative(
    Path.posix.dirname(document.fsPath),
    fileName,
  )}`
  const importStatement = `import ${name} from '${relativeFileName}';\n`
  let renameLocation =
    importStatement.indexOf(relativeFileName) + relativeFileName.length - 3
  const changes = registerLocalComponentWithSource(
    document,
    info,
    { moduleName: relativeFileName, localName: name },
    project.config.preferences.script,
    project.version,
    importStatement,
  )

  if (scriptSetup != null) {
    renameLocation += scriptSetup.loc.start.offset
  } else if (script != null) {
    renameLocation += script.loc.start.offset
  } else if (changes.length > 0) {
    renameLocation += changes[0]!.newText.indexOf(importStatement)
  }

  return { name, changes, renameLocation }
}
