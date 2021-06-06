import type { PluginContext } from './context';
import type { TS } from './interfaces';
import type { createServerHelper } from './helpers/utils';

export type ServerHelper = ReturnType<typeof createServerHelper>;

export interface LanguageServiceOptions {
  context: PluginContext;
  helpers: ServerHelper;
  service: TS.LanguageService;
}
