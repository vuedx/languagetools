module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-expect-message'],
  testMatch: ['**/*.spec.ts'],
  globals: {
    __DEV__: true,
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coverageProvider: 'v8',
  collectCoverageFrom: [
    'packages/*/src/**/*.ts',
    '!**/*.spec.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/lib/**',
  ],
  testTimeout: 60000,
}
