/** @type {import('jest')} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-expect-message'],
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
    },
  },
}
