import { parse } from '@babel/parser';
import {
  File,
  isCallExpression,
  isExportDefaultDeclaration,
  isIdentifier,
  isImportDeclaration,
  isImportSpecifier,
  isObjectExpression,
  isObjectMember,
  isObjectProperty,
  ObjectExpression,
  traverseFast,
} from '@babel/types';

export interface ComponentImport {
  path: string;
  named?: boolean;
  name?: string;
}

export interface ScriptResult {
  components: Record<string, ComponentImport>;
}

interface Context extends ScriptResult {
  ast: File;
}

export function processScript(source: string): ScriptResult {
  const ast = parse(source, { plugins: ['typescript'], sourceType: 'module' });
  const context = { ast, components: {} };

  traverseFast(ast, (node) => {
    if (isExportDefaultDeclaration(node)) {
      const { declaration } = node;
      // export default {}
      if (isObjectExpression(declaration)) {
        processOptions(declaration, context);
      }
      // export default defineComponent({})
      if (isCallExpression(declaration) && isObjectExpression(declaration.arguments[0])) {
        processOptions(declaration.arguments[0], context);
      }
    }
  });

  return context;
}

function processOptions(options: ObjectExpression, context: Context) {
  options.properties.forEach((property) => {
    if (isObjectMember(property)) {
      const { key } = property;

      if (isIdentifier(key)) {
        switch (key.name) {
          case 'components': {
            if (isObjectProperty(property)) {
              if (isObjectExpression(property.value)) {
                processComponents(property.value, context);
              }
            }
            break;
          }
        }
      }
    }
  });
}

function processComponents(components: ObjectExpression, context: Context) {
  const names = new Map<string, string>();
  components.properties.forEach((property) => {
    if (isObjectProperty(property)) {
      const { key, value } = property;

      if (isIdentifier(key)) {
        if (isIdentifier(value)) {
          names.set(key.name, value.name);
        }
      }
    }
  });

  traverseFast(context.ast, (node) => {
    if (isImportDeclaration(node)) {
      node.specifiers.forEach((specifier) => {
        const name = names.get(specifier.local.name);
        if (name) {
          context.components[name] = {
            path: node.source.value,
          };

          if (isImportSpecifier(specifier)) {
            context.components[name].named = true;

            if (specifier.imported.name !== name) {
              context.components[name].name = specifier.imported.name;
            }
          }
        }
      });
    }
  });
}
