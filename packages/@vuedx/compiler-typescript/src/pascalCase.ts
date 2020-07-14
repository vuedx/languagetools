import * as  camelCase from 'lodash.camelcase';

export function pascalCase(name: string) {
  name = camelCase(name);
  
  return name.substr(0, 1).toUpperCase() + name.substr(1);
}
