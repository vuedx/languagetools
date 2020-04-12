import { PluginContext } from './context';
import { Modules, TS } from './interfaces';
import { VueLanguageServer } from './server';

export default function init({ typescript }: Modules): TS.server.PluginModule {
  return {
    create(info) {
      const context = new PluginContext(typescript, info);

      return new VueLanguageServer(context).decorate(info.languageService);
    },
  };
}
