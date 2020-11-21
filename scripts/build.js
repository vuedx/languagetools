const fs = require('fs')
const path = require('path')
const cp = require('child_process')
const names = fs.readdirSync(path.resolve(__dirname, '../packages/'))
const bin = path.resolve(__dirname, '../node_modules/rollup/dist/bin/rollup')
const env = '--environment BUILD:production'
const args = '--max-old-space-size=1024'

const typesOnly = ['projectconfig']
const ignored = ['typescript-standalone']

names.forEach((name) => {
  if (ignored.includes(name)) return
  console.log()
  console.log(`${name}: types`)
  cp.execSync(`node ${args} ${bin} -c ${env},FILTER:${name},KIND:type`)
})

names.forEach((name) => {
  if (ignored.includes(name) || typesOnly.includes(name)) return
  console.log()
  console.log(`${name}: main,module`)
  cp.execSync(`node ${args} ${bin} -c ${env},FILTER:${name},KIND:bundle`)
})
