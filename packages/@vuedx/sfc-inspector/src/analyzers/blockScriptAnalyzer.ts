import { parse } from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import { isIdentifier, ObjectExpression } from '@babel/types';
import { SFCScriptBlock } from '@vue/compiler-sfc';
import { Context, Plugin, ScriptAnalyzerContext } from '../types';
import { isNotNull } from '../utilities';

export const blockScriptAnalyzer: Plugin = {
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

  const plugins = context.parsers.babel.plugins || [];

  const ast = parse(content, {
    ...context.parsers.babel,
    plugins: Array.from(new Set(plugins)),
  });

  return {
    ...context,
    mode: script.setup ? 'setup' : 'module',
    ast: ast,
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
    const properties$ = options$.get('properties');

    properties$.forEach((property$) => {
      if (property$.isObjectMember()) {
        const { key } = property$.node;

        if (isIdentifier(key)) {
          const name = key.name;
          optionsByNameHandlers.forEach((options) => {
            const fn = options[name];

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

  traverse(context.ast, {
    enter(path) {
      call(enterHandlers, path);
    },
    exit(path) {
      call(exitHandlers, path);
    },
    ExportDefaultDeclaration(path) {
      if (context.mode === 'setup') return;
      const declaration$ = path.get('declaration');
      /**
       * Matches:
       * export default {}
       */
      if (declaration$.isObjectExpression()) {
        call(declarationHandlers, declaration$);
        call(optionsHandlers, declaration$);
        processOptions(declaration$);
      } else if (declaration$.isCallExpression()) {
        /**
         * Matches:
         * export default fn(...)
         */
        const { callee, arguments: args } = declaration$.node;
        const args$ = declaration$.get('arguments');
        let options$ = Array.isArray(args$) ? args$[0] : args$;

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
            call(declarationHandlers, declaration$);
            call(optionsHandlers, options$);
            processOptions(options$);
          } else if (options$.isFunctionExpression() || options$.isArrowFunctionExpression()) {
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


