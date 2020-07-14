import type { Options } from '../options';
import { NodeTransform } from '@vue/compiler-core';
import { pascalCase } from '../pascalCase';

export function createImportTransformer(options: Options): NodeTransform {
  let done = false;

  return function addImports(_, context) {
    if (done) return;

    if (options.useJavaScript) {
    } else {
      context.imports.add({
        exp: 'type _Ctx',
        path: `./${options.filename.split(/[/\\]/).pop()}`,
      });
    }

    if (options.components) {
      Object.entries(options.components).forEach(([key, value]) => {
        if (typeof value === 'string') {
          context.imports.add({
            exp: `_component_${pascalCase(key)}`,
            path: value,
          });
        } else if (!value.named) {
          context.imports.add({
            exp: `_component_${pascalCase(key)}`,
            path: value.source,
          });
        } else {
          context.imports.add({
            exp: `{ ${key} as _component_${pascalCase(key)} }`,
            path: value.source,
          });
        }
      });
    }

    done = true;
  };
}
