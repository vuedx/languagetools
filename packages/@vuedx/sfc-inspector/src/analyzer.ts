import { Context, Plugin } from './types';
import { parse, SFCBlock } from '@vue/compiler-sfc';
import { createComponentInfoFactory } from './component';

const parsers: Context['parsers'] = {
  sfc: {
    sourceMap: false,
    pad: 'space',
  },

  babel: {
    sourceType: 'module',
    plugins: ['bigInt', 'optionalChaining', 'optionalCatchBinding', 'nullishCoalescingOperator', 'objectRestSpread'],
  },
};

export function createAnalyzer(plugins: Plugin[], options: Partial<Context['parsers']> = {}) {
  function createContext(fileName: string, content: string): Context {
    const { descriptor } = parse(content, { ...parsers.sfc, ...options.sfc, filename: fileName });

    return {
      fileName,
      component: createComponentInfoFactory(),
      descriptor,
      plugins,
      parsers: {
        sfc: { ...parsers.sfc, ...options.sfc },
        babel: { ...parsers.babel, ...options.babel },
      },
    };
  }

  function analyze(content: string, fileName: string = 'component.vue') {
    const context = createContext(fileName, content);

    processSFC(context);

    return context.component.info();
  }

  function analyzeScript(content: string, fileName?: string) {
    return analyze(`<script>${content}</script>`, fileName);
  }

  function analyzeTemplate(content: string, fileName?: string) {
    return analyze(`<template>${content}</template>`, fileName);
  }

  return { analyze, analyzeScript, analyzeTemplate };
}

function processSFC(context: Context) {
  const { script, template, styles, customBlocks } = context.descriptor;

  function call<T extends SFCBlock>(kind: string, block: T) {
    context.plugins.forEach(({ blocks }) => {
      if (blocks && kind in blocks) {
        blocks[kind](block, context);
      }
    });
  }

  if (script) call('script', script);
  if (template) call('script', template);
  styles.forEach(call.bind(null, 'style'));
  customBlocks.forEach((block) => call(block.type, block));
}
