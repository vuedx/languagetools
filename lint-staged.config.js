module.exports = {
  '**/*.{js,jsx,json,ts,tsx,vue,yml,yaml}': ['prettier --write'],
  'samples/**/*.vue': [
    'jest -u ./packages/vue-virtual-textdocument/test/baseline.spec.ts',
    'git add **/*.snap',
  ],
}
