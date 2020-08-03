import { Binding, NodePath } from '@babel/traverse';
import { isIdentifier, isObjectExpression, isObjectProperty, ObjectProperty, ImportDeclaration } from '@babel/types';
import { Plugin } from '../types';
import { ImportSource } from '../component';

export const ComponentsOptionAnalyzer: Plugin = {
  options: {
    components: (path$, ctx) => {
      const property = path$.node;
      if (isObjectProperty(property)) {
        const { value: components } = property;
        if (isObjectExpression(components)) {
          components.properties.forEach((declaration) => {
            if (isObjectProperty(declaration)) {
              const name = getComponentName(declaration.key);
              if (name) {
                if (isIdentifier(declaration.value)) {
                  const info = resolveComponentInformation(path$.scope.getBinding(declaration.value.name));
                  if (info) ctx.component.addLocalComponent(name, info);
                }
              }
            }
          });
        }
      }
    },
  },
};

function getComponentName(key: ObjectProperty['key']) {
  if (isIdentifier(key)) return key.name;
}

function resolveComponentInformation(binding?: Binding): ImportSource | undefined {
  if (!binding) return;

  switch (binding.kind) {
    case 'module': {
      const path$ = binding.path as NodePath
      if (path$.isImportSpecifier()) {
        const node = path$.node;
        const parent = path$.parent as ImportDeclaration;

        return { moduleName: parent.source.value, exportName: node.imported.name };
      } 
      // @ts-ignore TS2339
      else if (path$.isImportDefaultSpecifier()) {
        // @ts-ignore TS2339
        const parent = path$.parent as ImportDeclaration;

        return { moduleName: parent.source.value };
      }
      break;
    }
  }
}
