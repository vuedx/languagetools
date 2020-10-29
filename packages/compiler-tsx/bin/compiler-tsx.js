#!/usr/bin/env node
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const Path = require('path')
const FS = require('fs')
const program = require('commander')
const { compile } = require('../dist/index.cjs')
const { parse } = require('@vuedx/compiler-sfc')
const { createAnalyzer, ComponentsOptionAnalyzer } = require('@vuedx/analyze')

program
  .arguments('<fileName>')
  .option('-o, --out-file <fileName>', 'output file name')
  .action(async (fileName, options) => {
    fileName = Path.isAbsolute(fileName)
      ? fileName
      : Path.resolve(process.cwd(), fileName)
    if (!FS.statSync(fileName).isFile()) {
      console.error(`"${fileName}" does not exist`)
      process.exit(1)
    }

    const analyzer = createAnalyzer([ComponentsOptionAnalyzer])
    const content = FS.readFileSync(fileName, { encoding: 'utf-8' })
    const { descriptor } = parse(content, {
      filename: fileName,
      sourceMap: true,
      pad: 'space',
    })

    const { template } = descriptor
    if (template == null) {
      console.error(`"${fileName}" does not have <template> block`)
      process.exit(1)
    }

    template.content =
      content.substr(0, template.loc.start.offset).replace(/./g, ' ') +
      template.content

    const { components } = analyzer.analyze(content, fileName)
    const result = compile(template.content, {
      filename: fileName,
      components: components.reduce((result, component) => {
        result[component.name] = component.source

        return result
      }, {}),
      sourceMap: true,
    })

    console.log(
      result.code +
        '\n' +
        '//# sourceMappingURL=data:application/json;base64,' +
        Buffer.from(JSON.stringify(result.map)).toString('base64'),
    )
  })

program.parse(process.argv)
