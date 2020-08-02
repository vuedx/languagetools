import { Binding } from '@babel/traverse';
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
      if (binding.path.isImportDefaultSpecifier()) {
        const parent = binding.path.parent as ImportDeclaration;

        return { moduleName: parent.source.value };
      }

      if (binding.path.isImportSpecifier()) {
        const node = binding.path.node;
        const parent = binding.path.parent as ImportDeclaration;

        return { moduleName: parent.source.value, exportName: node.imported.name };
      }
      break;
    }
  }
}
