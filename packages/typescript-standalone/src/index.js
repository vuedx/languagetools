// @ts-nocheck
const createPlugin = require('@vuedx/typescript-plugin-vue')

module.exports =
  /**
   * @param {import('@vuedx/typescript-plugin-vue').Modules} args
   */
  function init(args) {
    const plugin = createPlugin(args)
    const create = plugin.create
    plugin.create = (info) => {
      info.config = getConfig(info.config)

      return create(info)
    }

    const onConfigurationChanged = plugin.onConfigurationChanged
    plugin.onConfigurationChanged = (config) => {
      if (onConfigurationChanged) onConfigurationChanged(getConfig(config))
    }

    return plugin
  }
function getConfig(config) {
  return {
    ...config,
    features: {
      tagCompletions: ['svg'],
      ...config.features,
    },
  }
}
