/// <reference path="../../global.d.ts" />
import type { ComponentRegistrationInfo, TypeInfo } from '@vuedx/analyze'
import {
  camelCase,
  concat,
  first,
  getComponentNameAliases,
  getRelativeFileName,
  isNotNull,
  isPascalCase,
  kebabCase,
  last,
  pascalCase,
  uncapitalize,
} from '@vuedx/shared'
import {
  AttributeNode,
  DirectiveNode,
  ElementNode,
  findParentNode,
  isAttributeNode,
  isCommentNode,
  isComponentNode,
  isDirectiveNode,
  isElementNode,
  isPlainElementNode,
  isSimpleExpressionNode,
  isTextNode,
} from '@vuedx/template-ast-types'
import {
  isVirtualFileOfType,
  MODULE_SELECTOR,
  RenderFunctionTextDocument,
} from '@vuedx/vue-virtual-textdocument'
import Path from 'path'
import { getScriptFileName } from '../../helpers/utils'
import type { TS } from '../../interfaces'
import type { LanguageServiceOptions } from '../../types'
import { defineCompletionProvider } from './abstract'
import { BUILTIN_DIRECTIVES_DETAIL } from './data/directives'
import {
  GLOBAL_ATTRIBUTES,
  GLOBAL_ATTRIBUTES_BY_NAME,
  HTML_ELEMENTS,
  HTML_ELEMENTS_BY_NAME,
  isHTMLTag,
} from './data/html'

function stringifyTypeInfo(typeInfo: TypeInfo[]): string {
  if (typeInfo.length === 0) {
    return 'never'
  } else if (typeInfo.length === 1) {
    const info = typeInfo[0]!
    switch (info.kind) {
      case 'string':
      case 'number':
      case 'boolean':
        return info.kind
      case 'enum':
        return info.values.join(' | ')
      default:
        return info.expression
    }
  } else {
    return typeInfo
      .map((type) => {
        if (type.kind === 'enum') {
          return `${type.values.join('|')}`
        } else if (type.kind === 'expression') {
          return `${type.expression}`
        } else {
          return type.kind
        }
      })
      .map((type) => (/[()|=]/.test(type) ? `(${type})` : type))
      .join('|')
  }
}

export class HTMLService {
  constructor(private readonly $: LanguageServiceOptions) {}

  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TS.GetCompletionsAtPositionOptions | undefined,
  ): TS.WithMetadata<TS.CompletionInfo> | undefined {
    return this.findCompletionKind(fileName, position, (args) => {
      if (args.kind === 'tag') {
        return this.getTagCompletionsAtPosition(
          args.document,
          position,
          options,
          args.element,
        )
      } else if (args.kind === 'attribute') {
        return this.getAttributeCompletionsAtPosition(
          args.document,
          position,
          options,
          args.element,
          args.attribute,
        )
      }

      return undefined
    })
  }

  public getCompletionEntryDetails(
    fileName: string,
    position: number,
    entryName: string,
    formatOptions: TS.FormatCodeOptions | TS.FormatCodeSettings | undefined,
    source: string | undefined,
    preferences: TS.UserPreferences | undefined,
  ): TS.CompletionEntryDetails | undefined {
    return this.findCompletionKind(fileName, position, (args) => {
      __DEV__ && this.$.context.debug(`"${entryName}" is "${args.kind}"`)
      if (args.kind === 'tag') {
        return this.getTagCompletionEntryDetails(
          args.document,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
          args.element,
        )
      } else if (args.kind === 'attribute') {
        return this.getAttributeCompletionEntryDetails(
          args.document,
          position,
          entryName,
          formatOptions,
          source,
          preferences,
          args.element,
          args.attribute,
        )
      }

      return undefined
    })
  }

  public getCompletionEntrySymbol(
    _context: LanguageServiceOptions,
    _fileName: string,
    _position: number,
    _name: string,
    _source: string | undefined,
  ): TS.Symbol | undefined {
    return undefined
  }

  private findCompletionKind<T>(
    fileName: string,
    position: number,
    fn: (
      options:
        | {
            kind: 'tag'
            document: RenderFunctionTextDocument
            element?: ElementNode
          }
        | {
            kind: 'attribute'
            document: RenderFunctionTextDocument
            element: ElementNode
            attribute?: AttributeNode | DirectiveNode
          },
    ) => T,
  ): T | undefined {
    const {
      node,
      document,
      ancestors,
    } = this.$.helpers.findTemplateNodeAtPosition(fileName, position)

    if (isNotNull(document)) {
      if (isElementNode(node)) {
        /**
         * HTML tag completion is supported only when cursor in or at the
         * end of element tag.
         */
        if (this.isPositionInElementTagname(node, position)) {
          return fn({ kind: 'tag', document, element: node })
        } else if (this.isPositionInElementOpenTag(node, position)) {
          /**
           * If in open tag of element, we need to provide attribute completion.
           */
          return fn({ kind: 'attribute', document, element: node })
        } else if (position > 2) {
          if (document.container.getText(position - 2, 2) === '</') {
            return fn({
              kind: 'tag',
              document,
            })
          }
        }
      } else if (isTextNode(node) || isCommentNode(node)) {
        if (__DEV__) this.$.context.debug(`incomplete tag as text/comment`)
        /**
         * Template parser parses some incomplete elements as text.
         */
        if (
          (node.content.trim().startsWith('<') &&
            position ===
              node.loc.start.offset + node.loc.source.indexOf('<') + 1) ||
          (node.content.trim().startsWith('</') &&
            position ===
              node.loc.start.offset + node.loc.source.indexOf('</') + 2)
        ) {
          return fn({ kind: 'tag', document })
        }
      } else if (isDirectiveNode(node) || isAttributeNode(node)) {
        return fn({
          kind: 'attribute',
          document,
          element: last(ancestors).node as ElementNode,
          attribute: node,
        })
      } else if (isSimpleExpressionNode(node) && node.isStatic) {
        const directive = last(ancestors).node
        if (isDirectiveNode(directive) && directive.arg === node) {
          return fn({
            kind: 'attribute',
            document,
            element: last(ancestors, 2).node as ElementNode,
            attribute: directive,
          })
        }
      }
    }

    __DEV__ &&
      this.$.context.debug`Neither "tag" or "attribute" completion: ${node}`

    return undefined
  }

  private mergeCompletionEntryDetails(
    details1: TS.CompletionEntryDetails | undefined,
    details2: TS.CompletionEntryDetails | undefined,
  ): TS.CompletionEntryDetails | undefined {
    if (details1 != null && details2 != null) {
      const details = { ...details1, ...details2 }

      details.displayParts = concat(
        details1?.displayParts,
        details2?.displayParts,
      )
      details.documentation = concat(
        details1?.documentation,
        details2?.documentation,
      )
      if (details1?.source != null || details2.source != null) {
        details.source = concat(details1?.source, details2?.source)
      }
      details.codeActions = concat(details1?.codeActions, details2?.codeActions)
      details.tags = concat(details1?.tags, details2?.tags)

      return details
    } else if (details1 != null) {
      return { ...details1 }
    } else if (details2 != null) {
      return { ...details2 }
    }

    return undefined
  }

  private isPositionInElementOpenTag(
    node: ElementNode,
    position: number,
  ): boolean {
    const start = node.loc.start.offset + node.tag.length + 2
    if (node.isSelfClosing) {
      // An incomplete element is parsed as open tag.
      const suffixLength = node.loc.source.endsWith('/>') ? 2 : 0

      return start <= position && position <= node.loc.end.offset - suffixLength
    }

    const maxIndex =
      node.children.length > 0
        ? first(node.children).loc.start.offset
        : node.loc.source.lastIndexOf('</')

    const end =
      node.loc.start.offset +
      node.loc.source.substr(0, maxIndex).lastIndexOf('>')

    return start <= position && position <= end
  }

  private isPositionInElementTagname(
    node: ElementNode,
    position: number,
  ): boolean {
    return (
      node.loc.start.offset < position &&
      position <= node.loc.start.offset + node.tag.length + 1
    )
  }

  private getTagCompletionsAtPosition(
    document: RenderFunctionTextDocument,
    position: number,
    options: TS.GetCompletionsAtPositionOptions | undefined,
    node?: ElementNode,
  ): TS.WithMetadata<TS.CompletionInfo> | undefined {
    const result: TS.WithMetadata<TS.CompletionInfo> = {
      isGlobalCompletion: false,
      isMemberCompletion: false,
      isNewIdentifierLocation: false,
      entries: [],
    }

    const project = this.$.context.getVueProjectForFile(
      document.container.fsPath,
      true,
    )
    const { preferences } = project.config

    let replacementSpan: TS.TextSpan | undefined
    if (isElementNode(node)) {
      replacementSpan = {
        start: node.loc.start.offset + 1,
        length: node.tag.length,
      }
    }

    const known = new Set<string>()
    const add = (entry: TS.CompletionEntry): void => {
      const id =
        entry.source != null ? `${entry.name}:${entry.source}` : entry.name
      if (!known.has(id)) {
        known.add(id)
        result.entries.push(entry)
      }
    }
    const addHandlingSource = (item: TS.CompletionEntry): void => {
      const entry: TS.CompletionEntry = {
        ...item,
        kind: this.$.context.typescript.ScriptElementKind.jsxAttribute,
        replacementSpan,
        hasAction: true,
      }

      if (entry.source != null) {
        switch (preferences.template.tagCase) {
          case 'kebab':
            add({
              ...entry,
              name: kebabCase(entry.name),
            })
            break
          case 'pascal':
            add({
              ...entry,
              name: pascalCase(entry.name),
            })
            break
          default:
            getComponentNameAliases(entry.name).forEach((alias) => {
              add({
                ...entry,
                name: alias,
              })
            })
            break
        }
      } else {
        add(entry)
      }
    }

    const openIndex = document.container.getText(0, position).lastIndexOf('<')
    if (openIndex >= 0) {
      const prefixText = document.container.getText(
        openIndex,
        position - openIndex,
      )

      __DEV__ &&
        this.$.context.debug`May be a closing tag: ${{
          prefixText,
          position,
          openIndex,
        }}`
      if (prefixText.startsWith('</')) {
        const replacementSpan: TS.TextSpan = {
          start: openIndex,
          length: prefixText.length,
        }

        const { ancestors } = this.$.helpers.findTemplateNodeAtPosition(
          document.container.fsPath,
          position,
        )

        ancestors.reverse().forEach((ancestor) => {
          if (isElementNode(ancestor.node)) {
            result.entries.push({
              name: ancestor.node.tag,
              kind: this.$.context.typescript.ScriptElementKind.jsxAttribute,
              insertText: `</${ancestor.node.tag}>`,
              kindModifiers: '',
              sortText: '0',
              isRecommended: ancestor.node.tag === node?.tag ? true : undefined,
              replacementSpan,
            })
          }
        })

        return result
      } else if (replacementSpan == null) {
        replacementSpan = {
          start: openIndex,
          length: prefixText.length,
        }
      }
    }

    HTML_ELEMENTS.forEach((element) => add({ ...element }))

    project.globalComponents.forEach((component) =>
      addHandlingSource({
        name: component.name,
        kind: this.$.context.typescript.ScriptElementKind.jsxAttribute,
        kindModifiers: 'export',
        sortText: '9',
        source: component.source.moduleName,
        hasAction: true,
      }),
    )

    const jsx = this.$.service.getCompletionsAtPosition(
      document.fsPath,
      document.tagCompletionsTriggerOffset,
      {
        ...options,
        triggerCharacter: '<',
      },
    )

    const deps = new Set(Object.keys(project.packageJSON.dependencies))
    jsx?.entries.forEach((entry) => {
      if (isHTMLTag(entry.name)) {
        add(entry)
      } else if (
        entry.source != null &&
        this.$.helpers.isVueModuleFileName(entry.source)
      ) {
        addHandlingSource(entry)
      } else if (
        entry.kind === this.$.context.typescript.ScriptElementKind.jsxAttribute
      ) {
        if (entry.source == null) {
          add(entry)
        } else if (isPascalCase(entry.name)) {
          if (deps.has(entry.name) || Path.posix.isAbsolute(entry.source)) {
            addHandlingSource(entry)
          }
        }
      }
    })

    if (
      this.$.context.getTSProjectForFile(document.fsPath, true)?.projectKind ===
      this.$.context.typescript.server.ProjectKind.Inferred
    ) {
      project.components.forEach((component) =>
        addHandlingSource({
          name: component.name,
          kind: this.$.context.typescript.ScriptElementKind.jsxAttribute,
          kindModifiers: 'export',
          sortText: '9',
          source: component.source.moduleName,
          hasAction: true,
        }),
      )
    }

    this.$.helpers
      .getComponentInfo(document.container)
      .components.forEach((component) => {
        component.aliases.forEach((alias) =>
          add({
            name: alias,
            kind: this.$.context.typescript.ScriptElementKind.jsxAttribute,
            kindModifiers: '',
            sortText: '0',
            source: this.$.helpers.getResolvedModule(
              getScriptFileName(document.container),
              component.source.moduleName,
            )?.resolvedFileName,
            hasAction: true,
          }),
        )
      })

    return result
  }

  private getTagCompletionEntryDetails(
    document: RenderFunctionTextDocument,
    _position: number,
    entryName: string,
    formatOptions: TS.FormatCodeOptions | TS.FormatCodeSettings | undefined,
    source: string | undefined,
    preferences: TS.UserPreferences | undefined,
    _element?: ElementNode,
  ): TS.CompletionEntryDetails | undefined {
    // TODO: Use getTagCompletionsAtPosition (with extra metadata) to simplify this logic.
    let result: TS.CompletionEntryDetails | undefined
    let registration: ComponentRegistrationInfo | undefined
    let isGlobalComponent = false
    let isLocalComponent = false
    if (isHTMLTag(entryName)) {
      result = this.mergeCompletionEntryDetails(
        result,
        HTML_ELEMENTS_BY_NAME.get(entryName)?.detail,
      )
    } else if (source != null) {
      const project = this.$.context.getVueProjectForFile(
        document.container.fsPath,
        true,
      )
      const info = this.$.helpers.getComponentInfo(document.container)
      registration = info.components.find((component) =>
        component.aliases.includes(entryName),
      )

      if (registration != null) {
        isLocalComponent = true
      } else {
        registration = project.components.find(
          (component) =>
            component.source.moduleName === source &&
            component.aliases.includes(entryName),
        )
        if (registration != null) {
          isGlobalComponent = project.globalComponents.includes(registration)
        }
      }
    }

    result = this.mergeCompletionEntryDetails(
      result,
      this.$.service.getCompletionEntryDetails(
        document.fsPath,
        document.tagCompletionsTriggerOffset,
        entryName.includes('-') && source != null
          ? pascalCase(entryName)
          : entryName,
        formatOptions,
        source,
        preferences,
        undefined, // TODO: Figure out data parameter.
      ),
    )

    if (source != null && isVirtualFileOfType(source, MODULE_SELECTOR)) {
      const document = this.$.helpers.getVueDocument(source)
      if (document != null) {
        if (result != null) result.displayParts = []
        const info = this.$.helpers.getComponentInfo(document)
        result = this.mergeCompletionEntryDetails(result, {
          name: entryName,
          kind: this.$.context.typescript.ScriptElementKind.jsxAttribute,
          kindModifiers: '',
          displayParts: [
            { text: '(', kind: 'punctuation' },
            {
              text:
                (isGlobalComponent
                  ? 'Global '
                  : isLocalComponent
                  ? 'Local '
                  : '') + 'Vue Component',
              kind: 'text',
            },
            { text: ')', kind: 'punctuation' },
            { text: ' ', kind: 'space' },
            { text: pascalCase(entryName), kind: 'propertyName' },
            { text: ':', kind: 'punctuation' },
            { text: ' ', kind: 'space' },
            { text: 'Component', kind: 'aliasName' },
            { text: '<', kind: 'punctuation' },
            { text: '{', kind: 'punctuation' },
            ...info.props.flatMap((prop) => [
              { text: '\n', kind: 'lineBreak' },
              { text: '    ', kind: 'space' },
              { text: camelCase(prop.name), kind: 'propertyName' },
              { text: ':', kind: 'punctuation' },
              { text: ' ', kind: 'space' },
              // TODO: Tokenize type info if needed.
              { text: stringifyTypeInfo(prop.type), kind: 'type' },
              { text: ';', kind: 'punctuation' },
            ]),
            ...info.emits.flatMap((prop) => [
              { text: '\n', kind: 'lineBreak' },
              { text: '    ', kind: 'space' },
              { text: camelCase(`on-${prop.name}`), kind: 'propertyName' },
              { text: ':', kind: 'punctuation' },
              { text: ' ', kind: 'space' },
              // TODO: Tokenize type info if needed.
              { text: stringifyTypeInfo(prop.type), kind: 'type' },
              { text: ';', kind: 'punctuation' },
            ]),
            info.emits.length > 0 || info.props.length > 0
              ? { text: '\n', kind: 'lineBreak' }
              : { text: '', kind: 'space' },
            { text: '}', kind: 'punctuation' },
            // TODO: Add slots
            { text: '>', kind: 'punctuation' },
          ],
          documentation: [{ kind: 'markdown', text: info.description }],
        })
      }
    }

    if (registration != null && result == null) {
      // Either in inferred typescript project or component resolved from vueconfig.json
      result = {
        name: entryName,
        kind: this.$.context.typescript.ScriptElementKind.jsxAttribute,
        kindModifiers: '',
        displayParts: [
          { text: '(', kind: 'punctuation' },
          {
            text:
              (isGlobalComponent
                ? 'Global '
                : isLocalComponent
                ? 'Local '
                : '') + 'Vue Component',
            kind: 'text',
          },
          { text: ')', kind: 'punctuation' },
          { text: ' ', kind: 'space' },
          { text: pascalCase(entryName), kind: 'propertyName' },
          { text: ':', kind: 'punctuation' },
          { text: ' ', kind: 'space' },
          { text: 'Component', kind: 'aliasName' },
        ],
      }
    }

    if (
      !isLocalComponent &&
      !isGlobalComponent &&
      source != null &&
      result != null &&
      (result.codeActions?.length ?? 0) === 0
    ) {
      if (isVirtualFileOfType(source, MODULE_SELECTOR)) {
        // When there is source theres should be an import statement.
        const id = getRelativeFileName(document.fsPath, source)
        result.codeActions = [
          {
            description: `Import default '${pascalCase(
              entryName,
            )}' from module "${id}"`,
            changes: [
              {
                fileName: document.fsPath,
                textChanges: [
                  {
                    span: { start: 0, length: 0 },
                    newText: `import ${pascalCase(entryName)} from '${id}'\n`,
                  },
                ],
              },
            ],
            commands: undefined,
          },
        ]

        result.source = [
          {
            text: id,
            kind: 'text',
          },
        ]
      } else if (registration != null) {
        const id = getRelativeFileName(
          document.fsPath,
          registration.source.moduleName,
        ).replace(/\.(ts|js)x?$/, '')
        const name = pascalCase(entryName)
        result.codeActions = [
          {
            description: `Import ${
              registration.source.exportName != null ? '' : 'default'
            } '${name}' from module "${id}"`,
            changes: [
              {
                fileName: document.fsPath,
                textChanges: [
                  {
                    span: { start: 0, length: 0 },
                    newText: `import ${
                      registration.source.exportName != null
                        ? `{${
                            registration.source.exportName !== name
                              ? ` ${registration.source.exportName} as `
                              : ''
                          } ${name} }`
                        : name
                    } from '${id}'\n`,
                  },
                ],
              },
            ],
            commands: undefined,
          },
        ]

        result.source = [
          {
            text: id,
            kind: 'text',
          },
        ]
      }
    }

    if (isLocalComponent || isGlobalComponent) {
      if (result != null) {
        result.codeActions = undefined // Already registered component.
        result.source = undefined // Already registered component.
      }
    }

    return result
  }

  private getAttributeCompletionsAtPosition(
    document: RenderFunctionTextDocument,
    _position: number,
    options: TS.GetCompletionsAtPositionOptions | undefined,
    element: ElementNode,
    attribute?: DirectiveNode | AttributeNode,
  ): TS.WithMetadata<TS.CompletionInfo> | undefined {
    // 1. <div | >
    // 2. <div fo|o>
    // 3(a). <div v-on:| >
    // 3(b). <div v-on:cli|ck >
    // 4(a). <div v-on:click. >
    // 4(b). <div v-on:click.le|ft >
    // 5(b). <div v-on:click.left=| >
    const result: TS.WithMetadata<TS.CompletionInfo> = {
      isGlobalCompletion: false,
      isMemberCompletion: false,
      isNewIdentifierLocation: false,
      entries: [],
    }

    let isAttribute = true
    let isEvent = false
    let replacementSpan: TS.TextSpan | undefined
    if (isAttributeNode(attribute)) {
      isAttribute = true
      replacementSpan = {
        start: attribute.loc.start.offset,
        length: attribute.name.length,
      }
    } else if (isDirectiveNode(attribute)) {
      // either in arg or modifier
      isAttribute = attribute.name === 'bind'
      isEvent = attribute.name === 'on'
    }

    if (isAttribute || isEvent) {
      const alreadyExists = new Set(
        element.props
          .map((prop) =>
            isAttributeNode(prop) && !/^(class|style)$/.test(prop.name) // TODO: Handle static/dynamic class and style attributes.
              ? prop.name
              : isDirectiveNode(prop) &&
                isSimpleExpressionNode(prop.arg) &&
                prop.arg.isStatic
              ? prop.arg.content
              : null,
          )
          .filter(isNotNull),
      )
      const { preferences } = this.$.context.getVueProjectForFile(
        document.container.fsPath,
        true,
      ).config
      // TODO: Handle <component :is="xxxx"
      const offset = document.tryGetGeneratedOffset(
        element.loc.start.offset + element.tag.length + 1,
      )
      const jsxAttributes = new Set<string>()

      const add = (item: TS.CompletionEntry): void => {
        const entry = {
          ...item,
          kind: this.$.context.typescript.ScriptElementKind.jsxAttribute,
          source: undefined,
          replacementSpan,
        }

        if (isAttribute) {
          if (entry.name.startsWith('on')) return
        }

        if (isEvent) {
          if (!entry.name.startsWith('on')) return
          entry.name = uncapitalize(entry.name.replace(/^on-?/, ''))
        }

        entry.name =
          preferences.template.propCase === 'kebab'
            ? kebabCase(entry.name)
            : entry.name.startsWith('aria-') || entry.name.startsWith('data-')
            ? entry.name
            : camelCase(entry.name)

        if (jsxAttributes.has(entry.name) || alreadyExists.has(entry.name)) {
          // Already there...
        } else {
          jsxAttributes.add(entry.name)
          result.entries.push(entry)
        }
      }

      if (offset != null) {
        const jsx = this.$.service.getCompletionsAtPosition(
          document.fsPath,
          offset + 1, // include space after tagName.
          options,
        )

        jsx?.entries.forEach(add)
      }

      if (isHTMLTag(element.tag)) {
        HTML_ELEMENTS_BY_NAME.get(element.tag)?.attributes.forEach(add)
        GLOBAL_ATTRIBUTES.forEach(add)
      }
    }

    // Directives
    if (!isDirectiveNode(attribute)) {
      // TODO: Use directive description from vue reference.
      const allowedDirectives = [
        'v-show',
        'v-bind',
        'v-on',
        'v-for',
        'v-if',
        'v-else',
        'v-else-if',
        'v-text',
        'v-html',
      ]

      if (isPlainElementNode(element)) {
        allowedDirectives.push('v-text', 'v-html')
      }

      /**
       * v-slot is allowed on components or their immediate child
       * template elements.
       */
      if (isComponentNode(element)) {
        allowedDirectives.push('v-slot')
      } else if (element.tag === 'template' && document.ast != null) {
        const parent = findParentNode(document.ast, element)
        if (isComponentNode(parent)) {
          allowedDirectives.push('v-slot')
        }
      }

      allowedDirectives.forEach((name) => {
        result.entries.push({
          name,
          kind: 'JSX attribute' as TS.ScriptElementKind.jsxAttribute,
          kindModifiers: '',
          sortText: '9',
          replacementSpan,
        })
      })
    }

    return result
  }

  private getAttributeCompletionEntryDetails(
    document: RenderFunctionTextDocument,
    _position: number,
    entryName: string,
    formatOptions: TS.FormatCodeOptions | TS.FormatCodeSettings | undefined,
    source: string | undefined,
    preferences: TS.UserPreferences | undefined,
    element: ElementNode,
    attribute?: AttributeNode | DirectiveNode,
  ): TS.CompletionEntryDetails | undefined {
    let result: TS.CompletionEntryDetails | undefined
    const isEvent = isDirectiveNode(attribute) && attribute.name === 'on'
    const isAttribute =
      (isDirectiveNode(attribute) && attribute.name === 'bind') ||
      isAttributeNode(attribute)
    const newEntryName = isEvent
      ? camelCase(`on-${entryName}`)
      : camelCase(entryName)

    if (isEvent || isAttribute) {
      const offset = document.tryGetGeneratedOffset(
        element.loc.start.offset + element.tag.length + 1,
      )

      if (offset != null) {
        const text = document.getText()
        __DEV__ &&
          this.$.context.debug(
            `Cursor at "${text.substr(offset - 10, 11)}|${text.substr(
              offset + 1,
              10,
            )}"`,
          )
        const jsxInfo = this.$.service.getCompletionEntryDetails(
          document.fsPath,
          offset + 1,
          newEntryName,
          formatOptions,
          source,
          preferences,
          undefined,
        )
        __DEV__ &&
          this.$.context.debug(
            `Check "${newEntryName}" for "${entryName}" at ${
              offset + 1
            }, ${JSON.stringify(jsxInfo, null, 2)}`,
          )

        result = this.mergeCompletionEntryDetails(result, jsxInfo)
      }
    }

    if (entryName.startsWith('v-')) {
      result = this.mergeCompletionEntryDetails(
        result,
        BUILTIN_DIRECTIVES_DETAIL[entryName],
      )
    }

    if (isHTMLTag(element.tag)) {
      const tag = HTML_ELEMENTS_BY_NAME.get(element.tag)
      const attr = newEntryName.toLowerCase()
      __DEV__ &&
        this.$.context.debug(
          `Find attribute "${attr}" details in "${element.tag}"`,
        )
      if (tag?.attributesDetail.has(attr) === true) {
        result = this.mergeCompletionEntryDetails(
          result,
          tag.attributesDetail.get(newEntryName),
        )
      } else if (GLOBAL_ATTRIBUTES_BY_NAME.has(attr)) {
        result = this.mergeCompletionEntryDetails(
          result,
          GLOBAL_ATTRIBUTES_BY_NAME.get(attr),
        )
      }
    }

    if (result != null) {
      result.name = entryName
    }

    return result
  }
}

export const TemplateCompletionProvider = defineCompletionProvider({
  name: 'template',
  version: '*',

  getCompletionsAtPosition(config, fileName, position, options) {
    return new HTMLService(config).getCompletionsAtPosition(
      fileName,
      position,
      options,
    )
  },

  getCompletionEntryDetails(
    config,
    fileName,
    position,
    entryName,
    formatOptions,
    source,
    preferences,
  ) {
    return new HTMLService(config).getCompletionEntryDetails(
      fileName,
      position,
      entryName,
      formatOptions,
      source,
      preferences,
    )
  },

  getCompletionEntrySymbol(
    { helpers, service },
    fileName,
    position,
    name,
    source,
  ) {
    const { node, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (isNotNull(document) && isElementNode(node)) {
      const maxOffset = node.loc.start.offset + pascalCase(node.tag).length + 1

      if (position <= maxOffset) {
        const loc = document.tryGetGeneratedOffset(position)
        if (isNotNull(loc)) {
          return service.getCompletionEntrySymbol(
            document.fsPath,
            document.contextCompletionsTriggerOffset,
            name,
            source,
          )
        }
      }
    }

    return undefined
  },
})
