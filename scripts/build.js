const fs = require('fs')
const path = require('path')
const cp = require('child_process')
const names = fs.readdirSync(path.resolve(__dirname, '../packages/'))
const bin = path.resolve(__dirname, '../node_modules/rollup/dist/bin/rollup')
const env = '--environment BUILD:production'
const args = '--max-old-space-size=1024'

const standalone = ['typescript-plugin-vue']

names.forEach((name) => {
  console.log()
  console.log(`${name}: types`)
  cp.execSync(`node ${args} ${bin} -c ${env},FILTER:${name},KIND:types`)
})

names.forEach((name) => {
  console.log()
  console.log(`${name}: main,module`)
  cp.execSync(`node ${args} ${bin} -c ${env},FILTER:${name},KIND:default`)
})

standalone.forEach((name) => {
  console.log()
  console.log(`${name}: main,module`)
  cp.execSync(`node ${args} ${bin} -c ${env},FILTER:${name},KIND:standalone`)
})
