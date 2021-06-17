export default {
  env: {
    node: true,
    browser: false,
    jest: false,
    mocha: false,
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.mjs'],
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      extends: ['standard', 'prettier'],
      rules: {
        'no-void': 'off',
        'dot-notation': 'off',
      },
    },
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: ['**/tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      extends: ['standard-with-typescript', 'prettier'],
      rules: {
        'no-void': 'off',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/method-signature-style': [2, 'method'],
      },
    },
    {
      files: ['**/__tests__/**/*.ts', '**/*.spec.ts'],
      env: {
        jest: true,
        node: true,
      },
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
      },
    },
  ],
}
