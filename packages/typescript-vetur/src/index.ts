import createPlugin, { PluginConfig } from '@vuedx/typescript-plugin-vue'

const config: Partial<PluginConfig> = {}

export default function init(options: any): any {
  const plugin = createPlugin(options)

  return {
    ...plugin,
    create(options: any) {
      options.config = config

      return plugin.create(options)
    },
  }
}
