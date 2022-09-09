import replace from '@rollup/plugin-replace'
import MagicString from 'magic-string'

/**
 * @returns {import('rollup').Plugin}
 */
export function processVueSFC() {
  return {
    name: 'VueSFC',

    transform(code, id) {
      const string = new MagicString(code, {
        filename: id,
        indentExclusionRanges: [],
      })

      const RE_IMPORT = /var ([^ ]+) = require\('([^']+)'\);/g
      const RE_EXPORT_FROM = /(exports.[^ ]+ = )(require\('([^']+)'\))/g
      const RE_EXPORT = /^exports\.([^\s]+) = ([A-Za-z0-9_$]+(?=;))?/gm
      const RE_DEFAULT_EXPORT = /^module\.exports = ([A-Za-z0-9_$]+);/gm
      const RE_POSTCSS_PLUGINS = /^var ([^\s]+) = postcss/gm
      const RE_DOM = /\bcompiler = CompilerDOM__namespace\b/g
      const RE_LRU = /require\('lru-cache'\)/g
      const RE_MODULE =
        /Object\.defineProperty\(exports, '__esModule', \{ value: true \}\);/g

      let match

      while ((match = RE_IMPORT.exec(code))) {
        const path = match[2]

        string.overwrite(
          match.index,
          match.index + match[0].length,
          `import * as ${match[1]} from '${path}';`,
        )
      }

      while ((match = RE_EXPORT_FROM.exec(code))) {
        const name = match[3].replace(/[^a-z0-9]/gi, '_')

        string.overwrite(
          match.index + match[1].length,
          match.index + match[1].length + match[2].length,
          `${name}`,
        )

        string.prepend(`import * as ${name} from '${match[3]}'`)
      }

      while ((match = RE_EXPORT.exec(code))) {
        const next = code.substr(match.index + match[0].length)

        if (next.startsWith('supportsNullProto ?')) {
          string.overwrite(
            match.index,
            match.index + match[0].length + (next.indexOf(';') + 1),
            `export { ${match[1]} };`,
          )
        } else {
          if (match[1] === match[2]) {
            string.overwrite(
              match.index,
              match.index + match[0].length,
              `export { ${match[1]} };`,
            )
          } else {
            string.overwrite(
              match.index,
              match.index + match[0].indexOf(match[1]) + match[1].length,
              `const ${match[1]}__$0 `,
            )
            string.append(`\nexport { ${match[1]}__$0 as ${match[1]} };`)
          }
        }
      }

      while ((match = RE_POSTCSS_PLUGINS.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          `var ${match[1]} = /*#__PURE__*/ postcss`,
        )
      }

      while ((match = RE_DOM.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          ` compiler = { parse: compilerCore.baseParse } `,
        )
      }

      while ((match = RE_DEFAULT_EXPORT.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          `export default ${match[1]}`,
        )
      }

      while ((match = RE_LRU.exec(code))) {
        string.overwrite(
          match.index,
          match.index + match[0].length,
          `LRUCache$1`,
        )
      }

      while ((match = RE_MODULE.exec(code))) {
        string.overwrite(match.index, match.index + match[0].length, ``)
      }

      string.prepend(`import LRUCache$1 from 'lru-cache';\n`)

      const output = string.toString()

      return {
        code: output,
        map: string.generateMap(),
      }
    },
  }
}

/**
 * @param {string} version
 * @returns
 */
export function define(version) {
  const BUILD = process.env['BUILD'] || 'production'
  const isProd = BUILD === 'production'
  return replace({
    preventAssignment: true,
    values: {
      VERSION: JSON.stringify(version),
      __DEV__: JSON.stringify(!isProd),
      __PROD__: JSON.stringify(isProd),
    },
  })
}
