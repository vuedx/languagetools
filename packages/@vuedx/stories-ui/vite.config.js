const { createStoriesPlugin } = require('@vuedx/stories-vite');

module.exports = {
  configureServer: [createStoriesPlugin({ ui: './src/index.ts' })],
};
