---
to: packages/<%= name %>/package.json
---
{
  "private": <%= locals.private != null %>,
  "name": "@vuedx/<%= name %>",
  "version": "0.0.0",
  "displayName": "<%= h.changeCase.sentence(name) %>",
  "description": "<%= locals.description %>",
  "main": "lib/index.js",
  "module": "lib/index.mjs",
  "types": "src/index.ts",
  "publishConfig": {
    "types": "lib/index.d.ts"
  },
  "buildConfig": {
    "sources": {},
    "external": []
  },
  "files": [
    "lib/"
  ],
  "keywords": [],
  "author": "<%= h.sh('git config --get user.name') %> <<%= h.sh('git config --get user.email') %>>",
  "license": "MIT",
  "homepage": "https://github.com/znck/vue-developer-experience/tree/main/packages/<%= name %>",
  "bugs": {
    "url": "https://github.com/znck/vue-developer-experience/issues"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/znck/vue-developer-experience.git",
    "directory": "packages/<%= name %>"
  },
  "funding": {
    "type": "individual",
    "url": "https://github.com/sponsors/znck"
  },
  "dependencies": {
  },
  "devDependencies": {}
}
