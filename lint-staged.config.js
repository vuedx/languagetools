module.exports = {
  'packages/*/src/**/*.ts': ['eslint --cache --fix', 'prettier --write'],
  'extensions/*/src/**/*.ts': ['eslint --cache --fix', 'prettier --write'],
  '**/*.{js,jsx,json,tsx,vue,yml,yaml}': ['prettier --write'],
  '.github/**/*.{yaml,yml}': [
    'node scripts/prepare-workflows.mjs',
    'git add .github/workflows',
    'prettier --write',
  ],
}
