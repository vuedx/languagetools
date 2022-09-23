module.exports = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
        tsconfig: {
          esModuleInterop: true,
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
        },
      },
    ],
  },
  testMatch: ['**/*.spec.ts'],
  globals: {
    __DEV__: false,
  },
  coverageReporters: ['json', 'lcov', 'text-summary', 'html-spa'],
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 60,
      lines: 35,
      // statements: -10,
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
