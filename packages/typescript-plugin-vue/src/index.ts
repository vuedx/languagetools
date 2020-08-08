import FS from 'fs';
import Path from 'path';
import { PluginContext } from './context';
import { Modules, TS } from './interfaces';
import { RoutingLanguageServer } from './servers/routing';

let context: PluginContext;
let server: RoutingLanguageServer;

export { PluginConfig, Modules } from './interfaces';

export default function init({ typescript }: Modules): TS.server.PluginModule {
  if (!context) {
    context = new PluginContext(typescript);
    server = new RoutingLanguageServer(context);
  }

  return {
    create(info) {
      const version = findVueVersionIn(info.project.getCurrentDirectory());

      if (!isVue3(version)) {
        return info.languageService;
      } else {
        context.load(info);
        return server.decorate(info.languageService);
      }
    },

    onConfigurationChanged(config) {
      if (context) {
        context.setConfig(config);
      }
    },
  };
}

function isVue3(version: string | undefined) {
  if (!version) return true; // assume Vue 3 by default.

  return version.startsWith('3.');
}

function findVueVersionIn(directory: string): string | undefined {
  const packageFile = findNearestPackageFile(directory);

  if (packageFile) {
    const vuePackageFile = Path.resolve(Path.dirname(packageFile), 'node_modules', 'vue', 'package.json');

    if (FS.existsSync(vuePackageFile)) {
      return require(vuePackageFile).version;
    }

    // dependencies not installed.
    const pkg = require(packageFile);
    const version = pkg.dependencies?.vue || pkg.devDependencies?.vue;
    if (!version) return;

    const justNumbers = version.replace(/[^0-9.]/, '');

    if (justNumbers.startsWith('3.')) return justNumbers;
    if (version === 'next') return '3.0.0';

    return '2.x';
  }
}

function findNearestPackageFile(directory: string): string | undefined {
  if (!directory) return;

  const packageFile = Path.resolve(directory, 'package.json');

  if (FS.existsSync(packageFile)) return packageFile;
  if (directory === '/') return;

  return findNearestPackageFile(Path.dirname(directory));
}
