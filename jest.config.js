/** @type {import('jest')} */
module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-expect-message'],
  testMatch: ['**/*.spec.ts'],
  globals: {
    'ts-jest': {
      packageJson: 'package.json',
      diagnostics: false,
    },
  },
  moduleNameMapper: {
    '@vuedx/(.+)$': '<rootDir>packages/@vuedx/$1/src/index.ts',
  },
};
