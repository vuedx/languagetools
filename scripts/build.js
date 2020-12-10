const path = require('path')
const cp = require('child_process')
const bin = path.resolve(__dirname, '../node_modules/rollup/dist/bin/rollup')
const env = '--environment BUILD:production'
const args = '--max-old-space-size=1024'

const names = [
  'shared',
  'projectconfig',
  'compiler-sfc',
  'template-ast-types',
  'compiler-tsx',
  'analyze',
  'vue-virtual-textdocument',
  'typescript-plugin-vue',
  'typecheck',
  'typescript-vetur',
]
const typesOnly = ['projectconfig']

names.forEach((name) => {
  console.log()
  console.log(`${name}: types`)
  cp.execSync(`node ${args} ${bin} -c ${env},FILTER:${name},KIND:type`)
})

names.forEach((name) => {
  if (typesOnly.includes(name)) return
  console.log()
  console.log(`${name}: main,module`)
  cp.execSync(`node ${args} ${bin} -c ${env},FILTER:${name},KIND:bundle`)
})
