import { parse } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import {
  isIdentifier,
  ObjectExpression,
  ObjectMember,
  ExportDefaultDeclaration,
  CallExpression,
  ObjectMethod,
} from '@babel/types';
import { SFCScriptBlock } from '@vue/compiler-sfc';
import { Context, Plugin, ScriptAnalyzerContext } from '../types';
import { isNotNull, createSourceRange } from '../utilities';

export const ScriptBlockAnalyzer: Plugin = {
  blocks: {
    script: (block, ctx) => {
      if (block.content) {
        processScript(createScriptContext(block.content, ctx, block));
      }
    },
  },
};

export function createScriptContext(content: string, context: Context, block?: SFCScriptBlock): ScriptAnalyzerContext {
  const script = block || {
    type: 'script',
    content: content,
    setup: false,
    attrs: {},
    // TODO: Create loc object as if javascript file.
    loc: { start: { offset: 0, line: 1, column: 1 }, end: { offset: 0, line: 1, column: 1 }, source: content },
  };

  const plugins = context.parsers.babel.plugins?.slice() || [];

  if (script.lang === 'ts' && !plugins.includes('typescript')) {
    plugins.push('typescript');
  }

  const ast = parse(content, {
    ...context.parsers.babel,
    plugins: Array.from(new Set(plugins)),
    ranges: true,
  });

  return {
    ...context,
    mode: script.setup ? 'setup' : 'module',
    ast: ast,
    source: content,
    block: script,
  };
}

function processScript(context: ScriptAnalyzerContext) {
  const enterHandlers = context.plugins
    .map((plugin) => {
      if (plugin.babel) {
        if (typeof plugin.babel === 'function') {
          return plugin.babel;
        }
        if ('enter' in plugin.babel) {
          return plugin.babel.enter;
        }
      }
    })
    .filter(isNotNull);

  const exitHandlers = context.plugins
    .map((plugin) => {
      if (plugin.babel && 'exit' in plugin.babel) {
        return plugin.babel.exit;
      }
    })
    .filter(isNotNull);

  const setupHandlers = context.plugins
    .map((plugin) => plugin.setup)
    .filter(isNotNull)
    .flat();
  const optionsHandlers = context.plugins
    .map((plugin) => (Array.isArray(plugin.options) ? plugin.options : null))
    .filter(isNotNull)
    .flat();
  const optionsByNameHandlers = context.plugins
    .map((plugin) => (Array.isArray(plugin.options) ? null : plugin.options))
    .filter(isNotNull);
  const declarationHandlers = context.plugins
    .map((plugin) => plugin.declaration)
    .filter(isNotNull)
    .flat();

  function call<T>(fns: ((node: T, context: ScriptAnalyzerContext) => void)[], node: T) {
    fns.forEach((fn) => {
      try {
        fn(node, context);
      } catch {
        // TODO: Handle error.
      }
    });
  }

  function processOptions(options$: NodePath<ObjectExpression>) {
    const properties$ = options$.get('properties') as NodePath[];
    context.component.addOption('', { loc: createSourceRange(context, options$.node) });
    properties$.forEach((property$) => {
      if (property$.isObjectMember()) {
        const { key } = property$.node as ObjectMember;

        if (isIdentifier(key)) {
          const name = key.name;
          context.component.addOption(name, {
            loc: createSourceRange(
              context,
              property$.isObjectProperty() ? property$.node.value : property$.node
            ),
          });

          optionsByNameHandlers.forEach((options) => {
            const fn = options[name] as any;

            if (fn) {
              try {
                fn(property$, context);
              } catch {
                // TODO: Handler error.
              }
            }
          });

          if (property$.isObjectMethod() && name === 'setup') {
            call(setupHandlers, property$ as any);
          }
        }
      }
    });
  }

  traverse(context.ast as any, {
    enter(path) {
      call(enterHandlers, path as any);
    },
    exit(path) {
      call(exitHandlers, path as any);
    },
    ExportDefaultDeclaration(path) {
      if (context.mode === 'setup') return;
      const d$ = path.get('declaration');
      /**
       * Matches:
       * export default {}
       */
      if (d$.isObjectExpression()) {
        const declaration$: NodePath<ObjectExpression> = d$ as any;
        call(declarationHandlers, declaration$ as any);
        call(optionsHandlers, declaration$ as any);
        processOptions(declaration$ as any);
      } else if (d$.isCallExpression()) {
        const declaration$: NodePath<CallExpression> = d$ as any;
        /**
         * Matches:
         * export default fn(...)
         */
        const { callee, arguments: args } = declaration$.node;
        const args$ = declaration$.get('arguments');
        let options$ = ((Array.isArray(args$) ? args$[0] : args$) as unknown) as NodePath;

        /**
         * Matches:
         * export default defineComponent(...)
         */
        if (isIdentifier(callee) && callee.name === 'defineComponent') {
          if (options$.isObjectExpression()) {
            /**
             * Matches:
             * export default defineComponent({ ... })
             */
            call(declarationHandlers, declaration$ as any);
            call(optionsHandlers, options$ as any);
            processOptions(options$ as any);
          } else if (options$.isArrowFunctionExpression() || options$.isFunctionExpression()) {
            /**
             * Matches:
             * export default defineComponent(() => {...})
             * export default defineComponent(function setup() {...})
             */
            call(setupHandlers, options$ as any);
          }
        }
      }
    },
  });
}
