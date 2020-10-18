/** @type {import('jest')} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-expect-message'],
  testMatch: ['**/*.spec.ts'],
  globals: {
    __DEV__: true,
    'ts-jest': {
      packageJson: 'package.json',
      tsconfig: 'tsconfig.base.json',
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html-spa'],
  collectCoverage: !!process.env.CI,
  collectCoverageFrom: [
    'packages/**/*.ts',
    '!**/node_modules/**',
    '!**/dist/**',
  ],
  moduleNameMapper: {
    '@vuedx/(.+)$': '<rootDir>packages/$1/src/index.ts',
  },
}
