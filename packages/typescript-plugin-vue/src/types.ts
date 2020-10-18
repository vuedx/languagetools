import { PluginContext } from './context';
import { TS } from './interfaces';
import { createServerHelper } from './helpers/utils';

export type ServerHelper = ReturnType<typeof createServerHelper>;

export interface LanguageServiceOptions {
  context: PluginContext;
  helpers: ServerHelper;
  service: TS.LanguageService;
}
