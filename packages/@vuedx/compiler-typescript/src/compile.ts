import {
  CodegenResult,
  createCallExpression,
  CREATE_BLOCK,
  CREATE_VNODE,
  FRAGMENT,
  generate,
  OPEN_BLOCK,
  RootNode,
  trackSlotScopes,
  trackVForSlotScopes,
  transform,
  transformExpression,
} from '@vue/compiler-core';
import { bind, cloak, model, on, once, show, text } from './directives';
import { createImportTransformer } from './nodes/addImports';
import { createTransformElement } from './nodes/transformElement';
import { transformInterpolationExpression } from './nodes/transformExpression';
import { transformFor } from './nodes/transformFor';
import { transformIf } from './nodes/transformIf';
import { transformSlotOutlet } from './nodes/transformSlotOutlet';
import { Options } from './options';
import { transformTextAndHTML } from './nodes/transformTextAndHTML';

export function compile(ast: RootNode, options: Options): CodegenResult {
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
      transformInterpolationExpression,
      transformSlotOutlet,
      transformTextAndHTML,
      createTransformElement(options),
      trackSlotScopes,
      ...(options.nodeTransforms || []),
      createImportTransformer(options),
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
  if (ast.children.length > 1) {
    if (!ast.helpers.includes(FRAGMENT)) ast.helpers.push(FRAGMENT);
    ast.codegenNode = createCallExpression('_h', ['_Fragment', ast.children]);
  } else {
    ast.codegenNode = ast.children[0];
  }
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
      : `export function render(_ctx: _Ctx)`
  );
  return result;
}
