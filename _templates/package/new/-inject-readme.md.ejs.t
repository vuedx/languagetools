---
inject: true
before: <!--EOL:Packages-->
eof_last: false
to: readme.md
skip_if: "- \\[@vuedx\\/<%= name %>\\]"
---
- [@vuedx/<%= name %>](./packages/<%= name %>) — <%= locals.description %>
