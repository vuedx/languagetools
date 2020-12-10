# Typecheck

A command line tool to check types, functionally equivalent to `tsc --noEmit` but includes `.vue` support.

## Support

This package is part of [VueDX project](https://github.com/znck/vue-developer-experience), maintained by [Rahul Kadyan](https://github.com/znck). You can [💖 sponsor him](https://github.com/sponsors/znck) for continued development of this package and other VueDX tools.

## Usage

Run `npx @vuedx/typecheck` to quickly type check your Vue project, or install and use `vuedx-typecheck` binary.

### Install

```
npm i @vuedx/typecheck --save-dev
```

### Options

Run `vuedx-typecheck --help` to see all available options:

```
Usage: vuedx-typecheck [directory] <options>

Options
    --json      print diagnostics as json
    --vue       process only vue files
    --rdjson    Return diagnostic result in Reviewdog Diagnostic Format
    --verbose   print debug output (on stderr)
    --help      display help
```
