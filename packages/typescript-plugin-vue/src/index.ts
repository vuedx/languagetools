/* eslint-disable import/first */
console.log = console.info = console.warn = console.debug = console.error = console.trace = () => {}

export type {
  PluginConfig,
  PluginSideChannel,
} from '@vuedx/vue-languageservice'

export { init as default } from './init'
