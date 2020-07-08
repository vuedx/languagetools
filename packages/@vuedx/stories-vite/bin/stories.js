#!/usr/bin/env node

const { createServer } = require('vite');
const { StoriesPlugin } = require('../dist/stories-vite.js');

createServer({
  configureServer: [StoriesPlugin],
}).listen(6060);
