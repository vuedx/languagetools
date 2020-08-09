import {
  baseParse,
  CompilerOptions,
  createCompoundExpression,
  CREATE_BLOCK,
  CREATE_VNODE,
  FRAGMENT,
  generate,
  OPEN_BLOCK,
  transform,
  CompilerError,
} from '@vue/compiler-core';
import { isDirectiveNode, isElementNode, isInterpolationNode, isSimpleExpressionNode } from '@vuedx/template-ast-types';
import { withScope } from './scope';
import { createElementTransform } from './transforms/transformElement';
import { createExpressionTracker } from './transforms/transformExpression';
import { createTransformFor } from './transforms/transformFor';
import { createInterpolationTransform } from './transforms/transformInterpolation';
import { CodegenResult, ComponentImport, Options } from './types';
export * from './types';

function clone(obj: object) {
  return JSON.parse(JSON.stringify(obj));
}

const components: Record<string, ComponentImport> = {};
export function compile(template: string, options: Options & CompilerOptions): CodegenResult {
  const ast = baseParse(template, options);
  const astCopy = clone(ast);
  const expressions: Array<[number, number]> = [];
  const config: Required<Options> = {
    ...options,
    components: {
      ...components,
      ...options.components,
    },
  };
  const identifiers = new Set<string>();
  const errors: CompilerError[] = [];

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

      createTransformFor((id) => identifiers.add(id)),
      createExpressionTracker((id) => identifiers.add(id)),
      createElementTransform(config),
      createInterpolationTransform(config),
    ],
    onError(error) {
      errors.push(error);
    },
  });

  [OPEN_BLOCK, CREATE_BLOCK, CREATE_VNODE, FRAGMENT].forEach((helper) => {
    const index = ast.helpers.indexOf(helper);
    if (index >= 0) ast.helpers.splice(index, 1);
  });

  if (ast.children.length > 1) {
    ast.codegenNode = createCompoundExpression(['/*@@vue:start*/<>', ...ast.children, '</>/*@@vue:end*/'] as any);
  } else {
    ast.codegenNode = createCompoundExpression(['/*@@vue:start*/', ...ast.children, '/*@@vue:end*/'] as any);
  }
  const mappings: Array<[number, number, number, number, number]> = [];
  const result = generate(ast, {
    ...options,
    sourceMap: true,
    mode: 'module',
    onContextCreated(context) {
      const push = context.push;
      context.push = (code, node) => {
        if (isSimpleExpressionNode(node) && node.loc && node.loc.start.offset < node.loc.end.offset) {
          mappings.push([context.offset, node.content.length, node.loc.start.offset, node.loc.source.length, 0]);
        }

        if (code.startsWith('function render(_ctx, _cache')) {
          push(
            `function render(${
              identifiers.size ? `{${Array.from(identifiers).join(', ')}}` : '_ctx'
            }: InstanceType<typeof _Ctx>) {`
          );
        } else {
          push(code, node);
        }
      };
    },
  });

  return {
    ...result,
    ast: withScope(astCopy),
    mappings,
    expressions,
    errors,
  };
}
