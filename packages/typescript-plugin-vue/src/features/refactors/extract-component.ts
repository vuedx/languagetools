import {
  ComponentInfo,
  ImportSourceWithLocation,
  VueProject,
} from '@vuedx/analyze'
import { ProjectConfigNormalized } from '@vuedx/projectconfig'
import {
  createSimpleExpression,
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isSimpleExpressionNode,
  isSimpleIdentifier,
  stringify,
  t,
  traverseFast,
} from '@vuedx/template-ast-types'
import {
  RenderFunctionTextDocument,
  VueTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import Path from 'path'
import { findNextSibling, first, last } from '../../helpers/array'
import {
  getComponentName,
  getFilenameForNewComponent,
} from '../../helpers/utils'
import { TS } from '../../interfaces'
import { registerLocalComponentWithSource } from '../../transforms/registerLocalComponent'
import { LanguageServiceOptions } from '../../types'
import { RefactorProvider } from './abstract'

/// <reference types="@vuedx/compiler-tsx" />

export const RefactorExtractComponent: RefactorProvider = {
  version: '*',
  findRefactors(config, fileName, position, preferences) {
    const document = config.helpers.getRenderDoc(fileName)
    let notApplicableReason: string | undefined
    const extractAsComponent: TS.ApplicableRefactorInfo = getRefactor(
      config,
      fileName,
    )
    if (document != null) {
      const nodes = findNodes(config, document, position)
      if (nodes.length !== 0) {
        if (nodes.length > 1 && document.ast != null) {
          const parent = findParentNode(document.ast, nodes)
          if (isElementNode(parent)) {
            const type = detectConditionType(parent, nodes)

            if (type === 'partial') {
              notApplicableReason =
                'Partial v-if/v-else-if/v-else tags cannot be extracted'
            }
          }
        }

        if (
          notApplicableReason == null &&
          parseInt(config.context.getVueVersion(document.container.fsPath)) < 3
        ) {
          const modelExpressions = new Set()
          nodes.forEach((node) =>
            traverseFast(node, (node) => {
              if (isDirectiveNode(node) && node.name === 'model') {
                if (isSimpleExpressionNode(node.exp)) {
                  modelExpressions.add(node.exp.content.trim())
                }
              }
            }),
          )

          if (modelExpressions.size > 1) {
            notApplicableReason =
              'Multiple v-model expressions require vue >= 3.0'
          }
        }
      } else {
        notApplicableReason = 'No template selection'
      }
    } else {
      notApplicableReason = 'Only allowed in <template> block'
    }

    if (notApplicableReason != null) {
      extractAsComponent.actions.forEach((action) => {
        action.notApplicableReason = notApplicableReason
      })
    }

    return [extractAsComponent]
  },
  applyRefactor(
    config,
    fileName,
    options,
    position,
    refactorName,
    actionName,
    preferences,
  ) {
    const document = config.helpers.getRenderDoc(fileName)
    if (document?.ast != null && refactorName === 'component') {
      const project = config.context.getVueProjectForFile(fileName, true)
      const info = config.helpers.getComponentInfo(document.container)
      const directoryName =
        actionName === ':current'
          ? Path.posix.dirname(fileName)
          : Path.posix.resolve(project.rootDir, actionName)
      const componentFileName = getFilenameForNewComponent(
        config.context,
        directoryName,
        new Set(info.components.map((component) => component.name)),
      )
      const nodes = findNodes(config, document, position)
      if (nodes.length === 0) return // No nodes in selection.

      const parent = findParentNode(document.ast, nodes) as t.ElementNode
      const conditionType = detectConditionType(parent, nodes)
      if (conditionType === 'partial') return // Partial conditions cannot be extracted.

      const rawIdentifiers = new Set(
        nodes.flatMap(
          (node) =>
            // Collect identifiers in top-level scopes which are coming from parent.
            node.scope.identifiers,
        ),
      )

      const replaceNodes = new Map<t.Node, null | t.Node>()
      const addSkipNodes = (skipped: t.Node[], all: t.Node[]): void => {
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
      if (conditionType === 'preserve') {
        nodes.forEach((node) => {
          if (isElementNode(node)) {
            addSkipNodes(
              node.props.filter(
                (prop) =>
                  isDirectiveNode(prop) &&
                  /^(if|else-if|else)$/.test(prop.name),
              ),
              [...node.props, ...node.children],
            )
          }
        })
      }

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

      const script: string[] = []
      const identifiers = Array.from(rawIdentifiers)
      const template = stringify(nodes, {
        indent: 2,
        initialIndent: 1,
        directive: project.config.preferences.template.directiveSyntax,
        replaceNodes,
      })
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
        script.unshift(`import { defineComponent } from 'vue'`)
        script.push(`export default defineComponent({\n${optionsText}\n})`)
      }
      const codeLines: string[] = []
      if (script.length > 0) {
        codeLines.push(
          getScriptStartTag(project.config.preferences.script),
          ...script,
          `</script>`,
        )
      }

      codeLines.push(`<template>${template}</template>`, '')

      const code = codeLines.join('\n')

      let { name, changes, renameLocation } = getImportEditForComponent(
        document.container,
        info,
        componentFileName,
        project.config,
      )

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

      if (templateReplacement.span.start < renameLocation) {
        // Template is before script, need to adjust rename trigger location.
        renameLocation =
          renameLocation - template.length + templateReplacement.newText.length
      }

      config.context.createVueDocument(componentFileName, code)

      return {
        renameFilename: document.container.fsPath,
        renameLocation,
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
    }

    return undefined
  },
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
  replaceNodes: Map<t.Node, t.Node | null>
}): string {
  const useShorthand =
    project.config.preferences.template.directiveSyntax === 'shorthand'
  const skipNodes = new Set<t.Node>()
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
  ].join(' ')

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
  addImport: (text: string) => void
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
    })
    .filter(Boolean)
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
  parent: t.ElementNode,
  nodes: t.Node[],
): 'none' | 'extract' | 'preserve' | 'partial' {
  const conditions = nodes.map((node) => {
    if (isElementNode(node)) {
      return node.props.find(
        (prop) =>
          isDirectiveNode(prop) && /^(if|else-if|else)$/.test(prop.name),
      )
    }
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

function getRefactor(
  config: LanguageServiceOptions,
  fileName: string,
): TS.ApplicableRefactorInfo {
  const project = config.context.getVueProjectForFile(fileName, true)
  const extractAsComponent: TS.ApplicableRefactorInfo = {
    name: 'component',
    description: 'Extract to component',
    inlineable: true,
    actions: [
      {
        name: ':current',
        description: 'Extract to component in current directory',
      },
    ],
  }

  project.config.preferences.componentsDirectories.forEach((dir) => {
    extractAsComponent.actions.push({
      name: dir,
      description: `Extract to component in "${dir}" directory`,
    })
  })

  if (extractAsComponent.actions.length > 4) {
    extractAsComponent.inlineable = false
  }

  return extractAsComponent
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
  config: LanguageServiceOptions,
  document: RenderFunctionTextDocument,
  position: number | TS.TextRange,
): t.Node[] {
  return document.ast != null
    ? typeof position === 'number'
      ? config.helpers.findTemplateNodesIn(document.ast, position, position)
      : config.helpers.findTemplateNodesIn(
          document.ast,
          position.pos,
          position.end,
        )
    : []
}

function findParentNode(ast: t.RootNode, nodes: t.Node[]): t.Node {
  if (nodes.length === 0) return ast

  const search = nodes[0]
  let result: t.Node | undefined

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
  config: ProjectConfigNormalized,
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
  let renameLocation = 0
  const importStatement = `import ${name} from '${relativeFileName}';\n`
  const changes = registerLocalComponentWithSource(
    document,
    info,
    { moduleName: relativeFileName, localName: name },
    config.preferences.script,
    importStatement,
  )

  if (scriptSetup != null) {
    renameLocation =
      scriptSetup.loc.start.offset +
      1 +
      importStatement.indexOf(relativeFileName) +
      relativeFileName.length -
      4
  } else if (script != null) {
    renameLocation =
      script.loc.start.offset +
      1 +
      importStatement.indexOf(relativeFileName) +
      relativeFileName.length -
      4
  } else {
    renameLocation =
      changes[0].newText.indexOf(importStatement) +
      1 +
      importStatement.indexOf(relativeFileName) +
      relativeFileName.length -
      4
  }

  return { name, changes, renameLocation }
}
