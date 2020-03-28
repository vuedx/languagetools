/** @type {import('jest')} */
module.exports = {
  ...require('./jest.config'),
  testMatch: ['**/*.test.ts'],
  testTimeout: 30000
}
