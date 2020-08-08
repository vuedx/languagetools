import createPlugin, { Modules, PluginConfig } from '@vuedx/typescript-plugin-vue';

const config: Partial<PluginConfig> = {
  features: {
    diagnostics: [],
    organizeImports: true,
    quickInfo: false,
    rename: true,
    refactor: true,
  },
};

export default function init(options: Modules): any {
  const plugin = createPlugin(options);

  return {
    ...plugin,
    create(options: any) {
      options.config = config;

      return plugin.create(options);
    },
  };
}
