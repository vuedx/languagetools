let m

try {
  m = require('./lib/index.js')
} catch (error) {
  console.error(
    'Error: ' +
      error.message +
      '\n' +
      error.stack +
      '\nLoading standalone build...',
  )
  // @ts-ignore
  m = require('./lib/standalone')
}

module.exports = m.default || m
