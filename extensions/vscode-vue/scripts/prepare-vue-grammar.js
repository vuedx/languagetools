const FS = require('fs')
const Path = require('path')

const blockTemplateFile = Path.resolve(
  __dirname,
  '..',
  'syntaxes',
  'block.template.yml.json',
)
const blockLanguageTemplateFile = Path.resolve(
  __dirname,
  '..',
  'syntaxes',
  'block-language.template.yml.json',
)

const languages = {
  javascript: {
    scopeName: 'source.js',
    aliases: ['js', 'javascript'],
  },
  typescript: {
    scopeName: 'source.ts',
    aliases: ['ts', 'typescript'],
  },
  json: {
    scopeName: 'source.json',
    aliases: ['json'],
  },
  yaml: {
    scopeName: 'source.yaml',
    aliases: ['yml', 'yaml'],
  },

  css: {
    scopeName: 'source.css',
    aliases: ['css'],
  },
  postcss: {
    scopeName: 'source.css.postcss',
    aliases: ['postcss', 'pcss'],
  },
  scss: {
    scopeName: 'source.css.scss',
    aliases: ['scss'],
  },
  sass: {
    scopeName: 'source.sass',
    aliases: ['sass'],
  },
  stylus: {
    scopeName: 'source.styl',
    aliases: ['styl', 'stylus'],
  },
  'vue-html': {
    scopeName: 'text.html.vue-html',
    aliases: ['vhtml', 'vue-html'],
  },
  vue: {
    scopeName: 'source.vue',
    aliases: ['vue'],
  },
  markdown: {
    scopeName: 'text.html.markdown',
    aliases: ['md', 'markdown'],
  },
  html: {
    scopeName: 'text.html.simple',
    aliases: ['html', 'html5'],
  },
}

const languageToId = {}
for (const language in languages) {
  languageToId[language] = language
  languages[language].aliases.forEach(
    (alias) => (languageToId[alias] = language),
  )
}

/** @type {Record<string, { default: keyof typeof languages, allowed: Array<keyof typeof languages>}} */
const config = require(Path.resolve(
  __dirname,
  FS.existsSync(Path.resolve(__dirname, 'config.runtime.json'))
    ? 'config.runtime.json'
    : 'config.json',
))

FS.writeFileSync(
  Path.resolve(__dirname, 'supported.json'),
  JSON.stringify(languageToId, null, 2),
)

module.exports = function generate(grammar) {
  const blockTemplate = FS.readFileSync(blockTemplateFile, { encoding: 'utf8' })
  const blockLanguageTemplate = FS.readFileSync(blockLanguageTemplateFile, {
    encoding: 'utf8',
  })

  /** @type {string[]} */
  const patterns = []

  for (const [blockName, options] of Object.entries(config)) {
    /** @type {keyof typeof languages} */
    const defaultLanguage = options.default
    const languageInfo = languages[languageToId[defaultLanguage]]
    let firstLine = `  => ${blockName}`
    if (languageInfo) {
      firstLine += `(default = ${defaultLanguage})`
      const blockGrammar = JSON.parse(
        blockTemplate
          .replace(/__var_BLOCK__/g, blockName)
          .replace(/__var_LANGUAGE__/g, defaultLanguage)
          .replace(/__var_LANGUAGE_ALIASES__/g, defaultLanguage)
          .replace(/__var_SCOPE_NAME__/g, languageInfo.scopeName)
          .replace(
            /"__var_PATTERN__"/g,
            blockName === 'style'
              ? `{ "include": "#attribute-style" }`
              : blockName === 'script'
              ? `{ "include": "#attribute-script" }`
              : '{}',
          ),
      )

      const id = `${blockName}-block`
      grammar.repository[id] = blockGrammar
      patterns.push(`#${id}`)
    }

    console.log(firstLine + '\n    Languages:')
    for (const language of [defaultLanguage].concat(options.allowed)) {
      const languageInfo = languages[languageToId[language]]

      if (languageInfo) {
        console.log('    - ' + language)
        const ref = JSON.parse(
          blockLanguageTemplate
            .replace(/__var_BLOCK__/g, blockName)
            .replace(/__var_LANGUAGE__/g, language)
            .replace(
              /__var_LANGUAGE_ALIASES__/g,
              languageInfo.aliases.join('|'),
            )
            .replace(/__var_SCOPE_NAME__/g, languageInfo.scopeName)
            .replace(
              /"__var_PATTERN__"/g,
              blockName === 'style'
                ? `{ "include": "#attribute-style" }`
                : blockName === 'script'
                ? `{ "include": "#attribute-script" }`
                : '{}',
            ),
        )

        const id = `${blockName}-${language}-block`
        grammar.repository[id] = ref
        patterns.unshift(`#${id}`)
      }
    }
  }

  grammar.patterns = [
    ...patterns.map((include) => ({ include })),
    ...grammar.patterns,
  ]
}
