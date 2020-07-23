import {
  baseParse,
  CompilerOptions,
  transform,
  trackVForSlotScopes,
  createCompoundExpression,
  generate,
  OPEN_BLOCK,
  CREATE_BLOCK,
  CREATE_VNODE,
  FRAGMENT,
  transformExpression,
} from '@vue/compiler-core';
import { isDirectiveNode, isElementNode, isInterpolationNode, isSimpleExpressionNode } from '@vuedx/template-ast-types';
import { createElementTransform } from './transforms/transformElement';
import { CodegenResult, ComponentImport, Options } from './types';
import { transformIf } from './transforms/transformIf';
import { transformFor } from './transforms/transformFor';
import { createInterpolationTransform } from './transforms/transformInterpolation';
export * from './types';

const components: Record<string, ComponentImport> = {};
export function compile(template: string, options: Options & CompilerOptions): CodegenResult {
  const ast = baseParse(template, options);
  const expressions: Array<[number, number]> = [];
  const config: Required<Options> = {
    ...options,
    components: {
      ...components,
      ...options.components,
    },
  };

  transform(ast, {
    ...options,
    prefixIdentifiers: true,
    hoistStatic: false,
    transformHoist: null,
    ssr: false,
    cacheHandlers: false,
    scopeId: null,
    nodeTransforms: [
      (node) => {
        if (isInterpolationNode(node)) {
          expressions.push([node.content.loc.start.offset, node.content.loc.source.length]);
        } else if (isElementNode(node)) {
          node.props.forEach((prop) => {
            if (isDirectiveNode(prop)) {
              if (prop.exp) {
                expressions.push([prop.exp.loc.start.offset, prop.exp.loc.source.length]);
              }
              if (isSimpleExpressionNode(prop.arg) && !prop.arg.isStatic) {
                expressions.push([prop.arg.loc.start.offset + 1, prop.arg.loc.source.length - 2]);
              }
            }
          });
        }
      },

      createElementTransform(config),
      transformIf,
      transformFor,
      trackVForSlotScopes,
      transformExpression,
      createInterpolationTransform(config),
    ],
  });

  [OPEN_BLOCK, CREATE_BLOCK, CREATE_VNODE, FRAGMENT].forEach((helper) => {
    const index = ast.helpers.indexOf(helper);
    if (index >= 0) ast.helpers.splice(index, 1);
  });

  if (ast.children.length > 1) {
    ast.codegenNode = createCompoundExpression(['<>', ...ast.children, '</>'] as any);
  } else {
    ast.codegenNode = ast.children[0];
  }
  const mappings: Array<[number, number, number, number, number]> = [];
  const result = generate(ast, {
    sourceMap: true,
    ...options,
    mode: 'module',
    onContextCreated(context) {
      const push = context.push;
      context.push = (code, node) => {
        if (isSimpleExpressionNode(node) && node.loc && node.loc.start.offset < node.loc.end.offset) {
          mappings.push([
            context.offset,
            node.content.length,
            node.loc.start.offset,
            node.loc.source.length,
            node.content.startsWith('_ctx.') ? 5 : 0,
          ]);
        }

        if (code.startsWith('function render(_ctx, _cache')) {
          push(`function render(_ctx: InstanceType<typeof _Ctx>) {`);
        } else {
          push(code, node);
        }
      };
    },
  });

  return {
    ...result,
    mappings,
    expressions,
  };
}
