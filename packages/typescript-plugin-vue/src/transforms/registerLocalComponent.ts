import { VueTextDocument } from '@vuedx/vue-virtual-textdocument'
import { ComponentInfo, ImportSource } from '@vuedx/analyze'
import { getPaddingLength } from '../helpers/utils'
import { TS } from '../interfaces'
import { ProjectPreferences } from '@vuedx/projectconfig'

export function registerLocalComponentWithSource(
  document: VueTextDocument,
  componentInfo: ComponentInfo,
  source: ImportSource,
  preferences: ProjectPreferences['script'],
  importStatement?: string,
): TS.TextChange[] {
  const { scriptSetup, script } = document.descriptor
  const changes: TS.TextChange[] = []

  importStatement =
    importStatement ??
    `import ${
      source.exportName != null
        ? source.localName === source.exportName
          ? `{ ${source.exportName} }`
          : `{ ${source.exportName} as ${source.localName} }`
        : source.localName
    } from ${JSON.stringify(source.moduleName)}`

  if (scriptSetup != null) {
    changes.push({
      span: { start: scriptSetup.loc.start.offset + 1, length: 0 },
      newText: importStatement,
    })
  } else if (script != null) {
    changes.push({
      span: { start: script.loc.start.offset + 1, length: 0 },
      newText: importStatement,
    })
    changes.push(
      ...registerLocalComponent(document, componentInfo, source.localName),
    )
  } else {
    changes.push({
      span: { start: 0, length: 0 },
      newText:
        preferences.mode === 'normal'
          ? [
              preferences.language === 'js'
                ? `<script>`
                : `<script lang=${JSON.stringify(preferences.language)}>`,
              `import { defineComponent } from 'vue'`,
              importStatement,
              '',
              `export default defineComponent({`,
              `  components: { ${source.localName} }`,
              `})`,
              `</script>`,
              '\n',
            ].join('\n')
          : [
              preferences.language === 'js'
                ? `<script setup>`
                : `<script lang=${JSON.stringify(preferences.language)} setup>`,
              importStatement,
              `</script>`,
              '\n',
            ].join('\n'),
    })
  }

  return changes
}

export function registerLocalComponent(
  document: VueTextDocument,
  componentInfo: ComponentInfo,
  localName: string,
): TS.TextChange[] {
  const { scriptSetup, script } = document.descriptor

  if (scriptSetup != null) {
    // No need to register components in this mode.
  } else if (script != null) {
    const optionsLoc = componentInfo.options?.loc
    const componentsLoc = componentInfo.options?.properties.components?.loc
    const setupLoc = componentInfo.setup?.loc
    if (componentsLoc != null) {
      // Prepend component to components option.
      const start = componentsLoc.start.offset + 1
      const padding = getPaddingLength(componentsLoc.source, 1)
      return [
        {
          newText: componentsLoc.source.substr(1, padding) + `${localName},`,
          span: { start, length: 0 },
        },
      ]
    } else if (optionsLoc != null) {
      // Prepend components to options
      const start = optionsLoc.start.offset + 1
      const padding = getPaddingLength(optionsLoc.source, 1)
      return [
        {
          newText:
            optionsLoc.source.substr(1, padding) +
            `components: { ${localName} },`,
          span: { start, length: 0 },
        },
      ]
    } else if (setupLoc != null) {
      // Convert defineComponent(function setup() {}) to defineComponent({ setup: function setup() {} })
      return [
        {
          newText: `{\n  components: { ${localName} },\n setup: `,
          span: { start: setupLoc.start.offset, length: 0 },
        },
        {
          newText: `\n}`,
          span: { start: setupLoc.end.offset, length: 0 },
        },
      ]
    } else {
      return [
        {
          newText: [
            `import { defineComponent } from 'vue'`,
            ``,
            `export default defineComponent({ components: { ${localName} } })\n`,
          ].join('\n'),
          span: { start: script.loc.start.offset + 1, length: 0 },
        },
      ]
    }
  }

  return []
}
