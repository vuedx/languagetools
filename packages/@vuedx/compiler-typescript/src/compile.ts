import {
  createCallExpression,
  CREATE_BLOCK,
  CREATE_VNODE,
  FRAGMENT,
  generate,
  OPEN_BLOCK,
  trackSlotScopes,
  trackVForSlotScopes,
  transform,
  TransformContext,
  transformExpression,
  RootNode,
  CodegenResult,
} from '@vue/compiler-core';
import { transformElement } from './nodes/transformElement';
import { transformFor } from './nodes/transformFor';
import { transformIf } from './nodes/transformIf';
import { transformSlotOutlet } from './nodes/transformSlotOutlet';
import { pascalCase } from './pascalCase';
import { H } from './runtimeHelpers';
import { Options } from './options';
import { once, cloak, show, text, on, bind, model } from './directives';

export function compile(ast: RootNode, options: Options): CodegenResult {
  let alreadyExecuted = false;
  let context!: TransformContext;
  transform(ast, {
    ...options,
    prefixIdentifiers: true,
    hoistStatic: false,
    transformHoist: null,
    ssr: false,
    cacheHandlers: false,
    scopeId: null,
    nodeTransforms: [
      transformIf,
      transformFor,
      trackVForSlotScopes,
      transformExpression,
      transformSlotOutlet,
      transformElement(Object.keys(options.components).map(pascalCase)),
      trackSlotScopes,
      ...(options.nodeTransforms || []),
      (_, _context) => {
        if (alreadyExecuted) return;
        context = _context;
        alreadyExecuted = true;
        context.helper(FRAGMENT);
        context.imports.add({ exp: '_Ctx', path: options.filename });
        Object.entries(options.components).forEach(([name, path]) => {
          context.imports.add({
            exp: `_component_${pascalCase(name)}`,
            path: path,
          });
        });
      },
    ],
    directiveTransforms: {
      once,
      cloak,
      show,
      text,
      on,
      bind,
      model,
      ...options.directiveTransforms,
    },
  });
  ast.codegenNode = createCallExpression(context.helperString(context.helper(H)), [
    context.helperString(context.helper(FRAGMENT)),
    ast.children,
  ]);
  [OPEN_BLOCK, CREATE_BLOCK, CREATE_VNODE].forEach((helper) => {
    const index = ast.helpers.indexOf(helper);
    if (index >= 0) ast.helpers.splice(index, 1);
  });
  const result = generate(ast, {
    ...options,
    mode: 'module',
    optimizeBindings: false,
    prefixIdentifiers: true,
    scopeId: null,
    ssr: false,
    sourceMap: true,
  });
  result.code = result.code.replace(
    `export function render(_ctx, _cache)`,
    options.useJavaScript
      ? `export /** @param {InstanceType<typeof _Ctx>} _ctx */ function render(_ctx)`
      : `export function render(_ctx: InstanceType<typeof _Ctx>)`
  );
  return result;
}
