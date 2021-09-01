module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['jest-expect-message'],
  testMatch: ['**/*.spec.ts'],
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsconfig: {
        esModuleInterop: true,
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
      },
    },
  },
  coverageReporters: ['json', 'lcov', 'text-summary', 'html-spa'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  collectCoverageFrom: [
    'packages/*/src/**/*.ts',
    '!**/*.d.ts',
    '!**/*.spec.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/lib/**',
  ],
  testTimeout: 20 * 1000,
}
