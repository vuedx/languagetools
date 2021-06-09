let m

try {
  m = require('./lib/index')
} catch {
  m = require('./lib/standalone')
}

module.exports = m.default || m
