const { execSync } = require('child_process')

module.exports = {
  helpers: {
    sh: (command) => execSync(command, { encoding: 'utf-8' }).trim(),
  },
}
