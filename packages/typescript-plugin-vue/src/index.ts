import { PluginContext } from './context';
import { Modules, TS } from './interfaces';
import { RoutingLanguageServer } from './servers/routing';

let context: PluginContext;
let server: RoutingLanguageServer;

export type { Modules, PluginConfig } from './interfaces';

export default function init({ typescript }: Modules): TS.server.PluginModule {
  if (!context) {
    context = new PluginContext(typescript);
    server = new RoutingLanguageServer(context);
  }

  return {
    create(info) {
      context.load(info);
      return server.decorate(info.languageService);
    },

    onConfigurationChanged(config) {
      if (context) {
        context.setConfig(config);
      }
    },
  };
}
