import { PluginContext } from './context';
import { TS } from './interfaces';
import { createServerHelper } from './utils';

export type ServerHelper = ReturnType<typeof createServerHelper>;

export interface CreateLanguageServiceOptions {
  context: PluginContext;
  helpers: ServerHelper;
  service: TS.LanguageService;
}
