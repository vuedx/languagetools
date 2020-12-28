import { ComponentInfo, ImportSource } from '@vuedx/analyze'
import type { SFCScriptBlock } from '@vuedx/compiler-sfc'
import {
  ProjectConfigNormalized,
  ProjectPreferences,
} from '@vuedx/projectconfig'
import { isSimpleIdentifier } from '@vuedx/template-ast-types'
import { VueTextDocument } from '@vuedx/vue-virtual-textdocument'
import { getScriptBlockWithContent } from '../features/completions/SFCCompletionProvider'
import { getCode, getPaddingLength, indent } from '../helpers/utils'
import { TS } from '../interfaces'

export function registerLocalComponentWithSource(
  document: VueTextDocument,
  componentInfo: ComponentInfo,
  source: ImportSource | { localName: string },
  preferences: ProjectPreferences['script'],
  vueVersion: string,
  importStatement?: string,
): TS.TextChange[] {
  const { scriptSetup, script } = document.descriptor
  const changes: TS.TextChange[] = []

  if (importStatement == null && 'exportName' in source) {
    importStatement = `import ${
      source.exportName != null
        ? source.localName === source.exportName
          ? `{ ${source.exportName} }`
          : `{ ${source.exportName} as ${source.localName} }`
        : source.localName
    } from ${JSON.stringify(source.moduleName)}`
  }

  if (scriptSetup != null) {
    if (importStatement != null) {
      changes.push({
        span: { start: scriptSetup.loc.start.offset + 1, length: 0 },
        newText: importStatement,
      })
    }
  } else if (script != null) {
    if (importStatement != null) {
      changes.push({
        span: { start: script.loc.start.offset + 1, length: 0 },
        newText: importStatement,
      })
    }
    changes.push(
      ...registerComponentAPI(
        document,
        componentInfo,
        'components',
        source.localName,
        source.localName,
        vueVersion,
      ).changes,
    )
  } else {
    changes.push({
      span: { start: 0, length: 0 },
      newText: getScriptBlockWithContent(
        vueVersion,
        preferences,
        [`{`, `  components: { ${source.localName} }`, `}`].join('\n'),
        importStatement,
      ),
    })
  }

  return changes
}

export function registerComponentAPI(
  document: VueTextDocument,
  componentInfo: ComponentInfo,
  apiName:
    | 'data'
    | 'setupComputed'
    | 'setupMethods'
    | 'methods'
    | 'computed'
    | 'watch'
    | 'props'
    | 'emits'
    | 'components'
    | 'directives',
  name: string,
  value: string,
  version: string,
  preferences?: ProjectConfigNormalized['preferences']['script'],
): {
  renameLocation?: number
  changes: TS.TextChange[]
  scriptStartOffset?: number
} {
  if (
    apiName === 'setupComputed' ||
    apiName === 'setupMethods' ||
    apiName === 'data'
  ) {
    return addOptionToConfigFunction(
      document,
      componentInfo,
      apiName,
      name,
      value,
      version,
    )
  } else {
    return addOptionToConfigObject(
      document,
      componentInfo,
      apiName,
      name,
      value,
      version,
      preferences,
    )
  }
}

export function addOptionToConfigFunction(
  document: VueTextDocument,
  componentInfo: ComponentInfo,
  apiName: 'data' | 'setupComputed' | 'setupMethods',
  name: string,
  value: string,
  vueVersion: string,
  preferences?: ProjectConfigNormalized['preferences']['script'],
): {
  renameLocation?: number
  changes: TS.TextChange[]
  scriptStartOffset?: number
} {
  const { scriptSetup, script } = document.descriptor
  if (scriptSetup != null) {
    return addOptionToScriptSetupConfig(
      scriptSetup,
      componentInfo.scriptSetup,
      apiName.startsWith('setup') ? apiName.substr(5).toLowerCase() : apiName,
      name,
      value,
    )
  } else if (script != null) {
    const changes: TS.TextChange[] = []
    let scriptStartOffset: number | undefined
    if (apiName === 'data') {
      // TODO: Find return statement in data() fn.
    } else {
      const api = apiName.substr(5).toLowerCase()

      let code: string
      if (api === 'computed') {
        const hasComputed = /\bcomputed\b/.test(script.content)
        if (!hasComputed) {
          changes.push({
            newText: getCode(`import { computed } from 'vue'`, ``),
            span: {
              start:
                script.loc.start.offset +
                getPaddingLength(script.content, script.loc.start.offset),
              length: 0,
            },
          })
        }
        code = `const ${name} = computed(${value})`
      } else if (api === 'methods') {
        code = `function ${name}${value.replace(/^function /, '')}`
      } else {
        code = `const ${name} = ${value}`
      }

      if (componentInfo.fnSetupOption != null) {
        if (componentInfo.fnSetupOption.return != null) {
          const loc = componentInfo.fnSetupOption.return.loc
          const start =
            componentInfo.fnSetupOption.loc.start.offset +
            componentInfo.fnSetupOption.loc.source.lastIndexOf('return')

          changes.push({
            newText: getCode(indent(code, 4, false), ``, `    `),
            span: { start: start, length: 0 },
          })

          if (isSimpleIdentifier(loc.source)) {
            changes.push({
              newText: getCode(
                `{`,
                `    ...${loc.source.trim()}`,
                `    ${name},`,
                `}`,
              ),
              span: { start: loc.start.offset, length: loc.source.length },
            })
          } else {
            if (loc.source.includes('\n')) {
              changes.push({
                newText: getCode(``, `      ${name},`),
                span: {
                  start: loc.start.offset + 1,
                  length: 0,
                },
              })
            } else {
              changes.push({
                newText: getCode(` ${name},`),
                span: {
                  start: loc.start.offset + 1,
                  length: 0,
                },
              })
            }
          }
        } else {
          // TODO: Insert return statement?
        }
      } else {
        const newText = getCode(
          `function (props, context) {`,
          `  ${code}`,
          `  return { ${name} }`,
          `}`,
        )

        const result = addOptionToScriptConfig(
          vueVersion,
          script,
          componentInfo.options,
          componentInfo.fnSetupOption,
          '',
          'setup',
          newText,
        )

        changes.push(...result.changes)
      }
    }

    return {
      scriptStartOffset,
      changes,
    }
  } else {
    return {
      changes: [],
    }
  }
}

function addOptionToConfigObject(
  document: VueTextDocument,
  componentInfo: ComponentInfo,
  apiName:
    | 'methods'
    | 'computed'
    | 'watch'
    | 'props'
    | 'emits'
    | 'components'
    | 'directives',
  name: string,
  value: string,
  vueVersion: string,
  preferences?: ProjectConfigNormalized['preferences']['script'],
): {
  renameLocation?: number
  changes: TS.TextChange[]
  scriptStartOffset?: number
} {
  const { scriptSetup, script } = document.descriptor

  if (scriptSetup != null) {
    return addOptionToScriptSetupConfig(
      scriptSetup,
      componentInfo.scriptSetup,
      apiName,
      name,
      value,
    )
  } else if (script != null) {
    return addOptionToScriptConfig(
      vueVersion,
      script,
      componentInfo.options,
      componentInfo.fnSetupOption,
      apiName,
      name,
      value,
    )
  } else if (preferences != null) {
    const changes: TS.TextChange[] = []
    const language =
      preferences.language === 'js' ? '' : ` lang="${preferences.language}"`
    const mode = preferences.mode === 'normal' ? '' : ' setup'
    const startTag = `<script${language}${mode}>\n`

    const result =
      preferences.mode === 'normal'
        ? addOptionToScriptConfig(
            vueVersion,
            createFakeScriptBock(preferences.language),
            undefined,
            undefined,
            apiName,
            name,
            value,
          )
        : addOptionToScriptSetupConfig(
            createFakeScriptSetupBock(preferences.language),
            undefined,
            apiName,
            name,
            value,
          )

    document.markDirty() // <- potentially changed

    changes.push({
      newText: startTag,
      span: { start: 0, length: 0 },
    })
    changes.push(...result.changes)
    changes.push({
      newText: getCode(`</script>`, ``, ``),
      span: { start: 0, length: 0 },
    })

    return {
      changes,
      renameLocation:
        result.renameLocation != null
          ? result.renameLocation + startTag.length
          : 0,
      scriptStartOffset: startTag.length,
    }
  }

  return { changes: [] }
}

function createFakeScriptBock(lang?: string): SFCScriptBlock {
  if (lang === 'js') lang = undefined

  return {
    content: '',
    attrs: lang != null ? { lang } : {},
    lang,
    type: 'script',
    loc: {
      source: '',
      start: {
        offset: 0,
        line: 0,
        column: 0,
      },
      end: {
        offset: 0,
        line: 0,
        column: 0,
      },
    },
  }
}

function createFakeScriptSetupBock(lang?: string): SFCScriptBlock {
  if (lang === 'js') lang = undefined

  return {
    content: '',
    attrs: lang != null ? { lang, setup: true } : { setup: true },
    lang,
    setup: true,
    type: 'script',
    loc: {
      source: '',
      start: {
        offset: 0,
        line: 0,
        column: 0,
      },
      end: {
        offset: 0,
        line: 0,
        column: 0,
      },
    },
  }
}

function addOptionToScriptConfig(
  version: string,
  script: SFCScriptBlock,
  optionsLoc: ComponentInfo['options'],
  fnSetupOptionLoc: ComponentInfo['fnSetupOption'],
  apiName: string,
  name: string,
  value: string,
): {
  renameLocation?: number
  changes: TS.TextChange[]
} {
  const changes: TS.TextChange[] = []
  let renameLocation: number | undefined
  if (apiName === '') {
    const code = genPropertyCode(name, value, 2)
    if (optionsLoc != null) {
      const start = optionsLoc.loc.start.offset + 1
      const newText = getCode(``, `  ${code}`)
      renameLocation = start + newText.indexOf(code)
      changes.push({ newText, span: { start: start, length: 0 } })
    } else if (fnSetupOptionLoc != null) {
      const setupLoc = fnSetupOptionLoc.loc
      changes.push(
        {
          newText: getCode('{', code, '  setup: '),
          span: { start: setupLoc.start.offset, length: 0 },
        },
        {
          newText: `\n}`,
          span: { start: setupLoc.end.offset, length: 0 },
        },
      )
    } else {
      const isVue2 = version.startsWith('2.')
      if (!isVue2) {
        const hasDefineComponent = /\bdefineComponent\b/.test(script.content)
        if (!hasDefineComponent) {
          const padding = getPaddingLength(script.content)
          changes.push({
            newText: getCode(`import { defineComponent } from 'vue';`, ''),
            span: { start: script.loc.start.offset + padding, length: 0 },
          })
        }
      }
      const newText = getCode(
        '',
        isVue2 ? `export default {` : `export default defineComponent({`,
        code,
        isVue2 ? '}' : `})`,
        '',
      )
      changes.push({
        span: { start: script.loc.end.offset, length: 0 },
        newText: newText,
      })
    }

    return { changes }
  }

  const code = genPropertyCode(name, value, 4)
  if (optionsLoc != null) {
    const api = optionsLoc.properties[apiName]
    if (isSimpleIdentifier(optionsLoc.loc.source)) {
      const start = optionsLoc.loc.start.offset
      const comma = optionsLoc.loc.source.trimEnd().endsWith(',') ? '' : ','
      const newText = getCode(
        `{`,
        `  ...${optionsLoc.loc.source}${comma}`,
        `  ${code}`,
        '},',
      )
      renameLocation = start + newText.indexOf(code)
      changes.push({
        newText,
        span: { start: start, length: optionsLoc.loc.source.length },
      })
    } else if (api != null) {
      if (isSimpleIdentifier(api.loc.source)) {
        const start = api.loc.start.offset
        const comma = api.loc.source.trimEnd().endsWith(',') ? '' : ','
        const newText = getCode(
          `{`,
          `    ...${api.loc.source}${comma}`,
          `    ${code}`,
          '},',
        )
        renameLocation = start + newText.indexOf(code)
        changes.push({
          newText,
          span: { start: start, length: api.loc.source.length },
        })
      } else {
        const start = api.loc.start.offset + 1
        const newText = getCode(``, `    ${code}`)
        renameLocation = start + newText.indexOf(code)
        changes.push({ newText, span: { start: start, length: 0 } })
      }
    } else {
      const newText = getCode(`${apiName}: {`, `    ${code}`, `  },`, '  ')
      const padding = getPaddingLength(optionsLoc.loc.source, 1)
      const start = optionsLoc.loc.start.offset + padding + 1

      renameLocation = start + padding + newText.indexOf(code)
      changes.push({ newText, span: { start, length: 0 } })
    }
  } else if (fnSetupOptionLoc != null) {
    const setupLoc = fnSetupOptionLoc.loc
    const newText = getCode(
      '{',
      `  ${apiName}: {`,
      `    ${code}`,
      '  },',
      '  setup: ',
    )
    renameLocation = setupLoc.start.offset + newText.indexOf(code)
    changes.push(
      {
        newText,
        span: { start: setupLoc.start.offset, length: 0 },
      },
      {
        newText: `\n}`,
        span: { start: setupLoc.end.offset, length: 0 },
      },
    )
  } else {
    const isVue2 = version.startsWith('2.')
    if (!isVue2) {
      const hasDefineComponent = /\bdefineComponent\b/.test(script.content)
      if (!hasDefineComponent) {
        const padding = getPaddingLength(
          script.content,
          script.loc.start.offset,
        )
        changes.push({
          newText: getCode(`import { defineComponent } from 'vue';`, ''),
          span: { start: script.loc.start.offset + padding, length: 0 },
        })
      }
    }
    const newText = getCode(
      '',
      isVue2 ? `export default {` : `export default defineComponent({`,
      `  ${apiName}: {`,
      `    ${code}`,
      `  },`,
      isVue2 ? `}` : `})`,
      '',
    )
    renameLocation = script.loc.end.offset + newText.indexOf(code)
    changes.push({
      span: { start: script.loc.end.offset, length: 0 },
      newText: newText,
    })
  }

  return { changes, renameLocation }
}

function addOptionToScriptSetupConfig(
  scriptSetup: SFCScriptBlock,
  scriptSetupLoc: ComponentInfo['scriptSetup'] | undefined,
  apiName: string,
  name: string,
  value: string,
): {
  renameLocation?: number
  changes: TS.TextChange[]
} {
  let renameLocation: number | undefined
  const changes: TS.TextChange[] = []
  if (apiName === 'components' || apiName === 'directives') {
    // registration is not required.
  } else if (apiName === 'props') {
    if (scriptSetupLoc?.defineProps != null) {
      const props = scriptSetupLoc.defineProps
      const padding = getPaddingLength(
        props.loc.source,
        props.loc.source.indexOf('{'),
      )
      changes.push({
        span: { start: props.loc.start.offset + padding, length: 0 },
        newText: getCode(`  ${genPropertyCode(name, value, 2)}`, ``),
      })
    } else {
      changes.push({
        span: {
          start:
            scriptSetup.loc.start.offset +
            getPaddingLength(scriptSetup.content, scriptSetup.loc.start.offset),
          length: 0,
        },
        newText: getCode(
          `import { defineProps } from 'vue'`,
          `const props = defineProps({`,
          `  ${genPropertyCode(name, value, 2)}`,
          `})`,
          ``,
        ),
      })
    }
  } else if (apiName === 'emits') {
    if (scriptSetupLoc?.defineEmit != null) {
      const emit = scriptSetupLoc.defineEmit
      const padding = getPaddingLength(
        emit.loc.source,
        emit.loc.source.indexOf('{'),
      )
      changes.push({
        span: { start: emit.loc.start.offset + padding, length: 0 },
        newText: getCode(`  ${genPropertyCode(name, value, 2)}`, ``),
      })
    } else {
      changes.push({
        span: {
          start:
            scriptSetup.loc.start.offset +
            getPaddingLength(scriptSetup.content, scriptSetup.loc.start.offset),
          length: 0,
        },
        newText: getCode(
          `import { defineEmit } from 'vue'`,
          `const emit = defineEmit({`,
          `  ${genPropertyCode(name, value, 2)}`,
          `})`,
          ``,
        ),
      })
    }
  } else if (apiName === 'watch') {
    const hasWatch = /\bwatch\b/.test(scriptSetup.content)
    if (!hasWatch) {
      changes.push({
        span: {
          start:
            scriptSetup.loc.start.offset +
            getPaddingLength(scriptSetup.content, scriptSetup.loc.start.offset),
          length: 0,
        },
        newText: getCode(`import { watch } from 'vue'`, ``),
      })
    }
    changes.push({
      span: { start: scriptSetup.loc.end.offset, length: 0 },
      newText: getCode(`watch(() => ${name}, ${value})`, ``),
    })
  } else if (apiName === 'methods') {
    const newText = getCode(
      value.startsWith('function (')
        ? value.replace(/^function /, `function ${name}`)
        : `const ${name} = ${value}`,
      '',
    )

    renameLocation = scriptSetup.loc.end.offset + newText.indexOf(name)

    changes.push({
      span: { start: scriptSetup.loc.end.offset, length: 0 },
      newText,
    })
  } else if (apiName === 'computed') {
    const hasComputed = /\bcomputed\b/.test(scriptSetup.content)
    if (!hasComputed) {
      changes.push({
        span: {
          start:
            scriptSetup.loc.start.offset +
            getPaddingLength(scriptSetup.content, scriptSetup.loc.start.offset),
          length: 0,
        },
        newText: getCode(`import { computed } from 'vue'`, ``),
      })
    }

    renameLocation = scriptSetup.loc.end.offset + 6 // < length of 'const '
    changes.push({
      span: { start: scriptSetup.loc.end.offset, length: 0 },
      newText: getCode(`const ${name} = computed(${value})`, ``),
    })
  } else if (apiName === 'data') {
    const hasRef = /\bref\b/.test(scriptSetup.content)
    if (!hasRef) {
      changes.push({
        span: {
          start:
            scriptSetup.loc.start.offset +
            getPaddingLength(scriptSetup.content, scriptSetup.loc.start.offset),
          length: 0,
        },
        newText: getCode(`import { ref } from 'vue'`, ``),
      })
    }

    renameLocation = scriptSetup.loc.end.offset + 6 // < length of 'const '
    changes.push({
      span: { start: scriptSetup.loc.end.offset, length: 0 },
      newText: getCode(`const ${name} = ref(${value})`, ``),
    })
  }

  return { changes, renameLocation }
}

function genPropertyCode(
  name: string,
  value: string,
  indentSize: number,
): string {
  if (name === value) {
    return `${name},`
  } else if (value.trim().startsWith('function (')) {
    return `${name}${indent(
      value.replace(/^function /, ''),
      indentSize,
      false,
    )},`
  } else {
    return `${name}: ${indent(value, indentSize, false)},`
  }
}
