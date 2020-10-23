/** @type {import('jest')} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-expect-message'],
  testMatch: ['**/*.spec.ts'],
  globals: {
    __DEV__: true,
    'ts-jest': {
      packageJson: 'package.json',
      tsconfig: 'tsconfig.json',
    },
  },
  coverageReporters: ['none'],
  coverageProvider: 'v8',
  collectCoverage: !!process.env.CI,
  collectCoverageFrom: [
    'packages/**/*.ts',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  moduleNameMapper: {
    '^@vuedx/(.+)$': '<rootDir>packages/$1/src/index.ts',
    '^test/(.+)$': '<rootDir>test/$1',
  },
  testTimeout: 30000,
}
