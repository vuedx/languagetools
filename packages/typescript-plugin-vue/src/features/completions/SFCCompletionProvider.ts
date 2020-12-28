import { TypeInfo } from '@vuedx/analyze'
import { ProjectPreferences } from '@vuedx/projectconfig'
import { isNotNull } from '@vuedx/shared'
import { TS } from '../../interfaces'
import { LanguageServiceOptions } from '../../types'

interface BlockCompletionInfo {
  name: string
  description: string
  attributes: Array<{
    name: string
    description: string
    value: TypeInfo
    required?: boolean
    default?: string
  }>
}

const customBlocks: BlockCompletionInfo[] = [
  {
    name: 'preview',
    description: `Component story/preview using [VueDX Preview](https://github.com/znck/preview).`,
    attributes: [
      {
        name: 'device',
        description: 'Mock device',
        value: {
          kind: 'enum',
          values: ['phone', 'tablet', 'desktop', 'freeform'],
        },
      },
    ],
  },
]

export class SFCCompletionService {
  constructor(private readonly $: LanguageServiceOptions) {}

  public getCompletionsAtPosition(
    fileName: string,
    position: number,
    options: TS.GetCompletionsAtPositionOptions | undefined,
  ): TS.WithMetadata<TS.CompletionInfo> | undefined {
    const completions: TS.WithMetadata<TS.CompletionInfo> = {
      isGlobalCompletion: false,
      isMemberCompletion: false,
      isNewIdentifierLocation: false,
      entries: this.getCompletionEntries(fileName, position),
    }

    // TODO: Handle attribute completion for blocks.

    return completions
  }

  private getCompletionEntries(
    fileName: string,
    position: number,
  ): Array<TS.CompletionEntry & { block?: BlockCompletionInfo }> {
    const document = this.$.helpers.getVueDocument(fileName)
    const entries: Array<
      TS.CompletionEntry & { block?: BlockCompletionInfo }
    > = []
    if (document != null) {
      let replacementSpan: TS.TextSpan | undefined
      const startPosition = document.getText().lastIndexOf('<', position)
      if (startPosition >= 0) {
        replacementSpan = {
          start: startPosition,
          length: position - startPosition,
        }
      }
      const project = this.$.context.getVueProjectForFile(fileName, true)
      const isEmpty = !document.getText().includes('>')

      if (isEmpty) {
        entries.push({
          name: '<script>, <template>',
          kind: this.$.context.typescript.ScriptElementKind.unknown,
          kindModifiers: '',
          sortText: '0',
          insertText: [
            getScriptBlockWithContent(
              project.version,
              project.config.preferences.script,
            ),
            getTemplateBlock(),
          ].join('\n'),
          hasAction: true,
          replacementSpan,
          isRecommended: true,
        })
        entries.push({
          name: '<template>, <script>',
          kind: this.$.context.typescript.ScriptElementKind.unknown,
          kindModifiers: '',
          sortText: '0',
          insertText: [
            getScriptBlockWithContent(
              project.version,
              project.config.preferences.script,
            ),
            getTemplateBlock(),
          ].join('\n'),
          hasAction: true,
          replacementSpan,
        })
      }
      if (document.descriptor.template == null) {
        entries.push({
          name: '<template>',
          kind: this.$.context.typescript.ScriptElementKind.unknown,
          kindModifiers: '',
          sortText: '0',
          insertText: getTemplateBlock(),
          hasAction: true,
          replacementSpan,
          isRecommended: entries.length === 0 ? true : undefined,
        })
      }
      if (document.descriptor.scriptSetup == null) {
        entries.push({
          name: '<script setup>',
          kind: this.$.context.typescript.ScriptElementKind.unknown,
          kindModifiers: '',
          sortText: '0',
          insertText: getScriptBlock('', {
            ...project.config.preferences.script,
            mode: 'setup',
          }),
          hasAction: true,
          replacementSpan,
          isRecommended: entries.length === 0 ? true : undefined,
        })
      }
      if (document.descriptor.script == null) {
        entries.push({
          name: '<script>',
          kind: this.$.context.typescript.ScriptElementKind.unknown,
          kindModifiers: '',
          sortText: '0',
          insertText:
            document.descriptor.scriptSetup != null
              ? getScriptBlock('', {
                  ...project.config.preferences.script,
                  mode: 'normal',
                })
              : getScriptBlockWithContent(project.version, {
                  ...project.config.preferences.script,
                  mode: 'normal',
                }),
          hasAction: true,
          replacementSpan,
          isRecommended: entries.length === 0 ? true : undefined,
        })
      }
      entries.push({
        name: '<style>',
        kind: this.$.context.typescript.ScriptElementKind.unknown,
        kindModifiers: '',
        sortText: '0',
        insertText: getStyleBlock('', project.config.preferences.style),
        hasAction: true,
        replacementSpan,
        isRecommended: entries.length === 0 ? true : undefined,
      })
      entries.push({
        name: '<style scoped>',
        kind: this.$.context.typescript.ScriptElementKind.unknown,
        kindModifiers: '',
        sortText: '0',
        insertText: getStyleBlock('', {
          ...project.config.preferences.style,
          scoped: true,
        }),
        hasAction: true,
        replacementSpan,
      })
      entries.push({
        name: '<style module>',
        kind: this.$.context.typescript.ScriptElementKind.unknown,
        kindModifiers: '',
        sortText: '0',
        insertText: getStyleBlock('', {
          ...project.config.preferences.style,
          module: true,
        }),
        hasAction: true,
        replacementSpan,
      })
      customBlocks.forEach((block) => {
        entries.push({
          name: `<${block.name}>`,
          kind: this.$.context.typescript.ScriptElementKind.unknown,
          kindModifiers: '',
          sortText: '0',
          insertText: getBlock(
            block.name,
            block.attributes.map((attribute) =>
              attribute.required === true
                ? [attribute.name, attribute.default ?? true]
                : undefined,
            ),
            '',
          ),
          hasAction: true,
          replacementSpan,
          block,
        })
      })
    }
    return entries
  }

  public getCompletionEntryDetails(
    fileName: string,
    position: number,
    entryName: string,
    formatOptions: TS.FormatCodeOptions | TS.FormatCodeSettings | undefined,
    source: string | undefined,
    preferences: TS.UserPreferences | undefined,
  ): TS.CompletionEntryDetails | undefined {
    const entry = this.getCompletionEntries(fileName, position).find(
      (entry) => entry.name === entryName,
    )

    if (entry != null) {
      return {
        name: entry.name,
        kind: entry.kind,
        kindModifiers: entry.kindModifiers ?? '',
        displayParts: [],
        documentation:
          entry.block != null
            ? [
                { kind: 'markdown', text: entry.block.description },
                {
                  kind: 'markdown',
                  text: ['```vue', entry.insertText ?? '', '```'].join('\n'),
                },
              ]
            : [
                {
                  kind: 'markdown',
                  text: ['```vue', entry.insertText ?? '', '```'].join('\n'),
                },
              ],
      }
    }

    return undefined
  }

  public getCompletionEntrySymbol(
    _fileName: string,
    _position: number,
    _name: string,
    _source: string | undefined,
  ): TS.Symbol | undefined {
    return undefined
  }
}

function getTemplateBlock(content: string = '  <div></div>'): string {
  return getBlock('template', [], content)
}

function getStyleBlock(
  content: string,
  options: ProjectPreferences['style'] & {
    scoped?: boolean
    module?: boolean | string
  },
): string {
  return getBlock(
    'style',
    [
      options.language !== 'css' ? ['lang', options.language] : undefined,
      options.scoped === true ? ['scoped', true] : undefined,
      options.module === '$style' || options.module === true
        ? ['module', true]
        : typeof options.module === 'string'
        ? ['module', options.module]
        : undefined,
    ],
    content,
  )
}

export function getScriptBlockWithContent(
  version: string,
  options: ProjectPreferences['script'],
  optionsContent: string = '',
  prefixContent: string = '',
): string {
  return getScriptBlock(
    options.mode === 'normal'
      ? version.startsWith('2.')
        ? [prefixContent, `export default ${optionsContent}`].join('\n').trim()
        : [
            prefixContent,
            `import { defineComponent } from 'vue'`,
            ``,
            `export default defineComponent(${optionsContent})`,
          ]
            .join('\n')
            .trim()
      : '',
    options,
  )
}

export function getScriptBlock(
  content: string,
  options: ProjectPreferences['script'],
): string {
  return getBlock(
    'script',
    [
      options.language !== 'js' ? ['lang', options.language] : undefined,
      options.mode !== 'normal' ? ['setup', true] : undefined,
    ],
    content,
  )
}

export function getBlock(
  tag: string,
  attributes: Array<[string, string | true] | undefined>,
  content: string,
): string {
  return [
    `<${tag}${attributes
      .filter(isNotNull)
      .map(([key, value]) =>
        value === true ? ` ${key}` : ` ${key}=${JSON.stringify(value)}`,
      )
      .join('')}>`,
    content,
    `</${tag}>`,
    ``,
  ].join('\n')
}
