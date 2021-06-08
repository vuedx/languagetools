/** @type {import('jest')} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-expect-message'],
  testMatch: ['**/*.spec.ts'],
  globals: {
    __DEV__: true,
  },
  coverageReporters: ['none'],
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'packages/**/*.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/lib/**',
  ],
  testTimeout: 60000,
}
