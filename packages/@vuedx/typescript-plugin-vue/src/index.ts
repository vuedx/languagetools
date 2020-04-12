import { PluginContext } from './context';
import { Modules, TS } from './interfaces';
import { VueLanguageServer } from './server';

let context: PluginContext | undefined;
let server: VueLanguageServer;
export default function init({ typescript }: Modules): TS.server.PluginModule {
  return {
    create(info) {
      if (!context) {
        context = new PluginContext(typescript, info);
        server = new VueLanguageServer(context);
      }

      context.reload(info);

      return server.decorate(info.languageService);
    },
  };
}
