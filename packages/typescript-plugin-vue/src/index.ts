/* eslint-disable import/first */
console.log = console.debug = console.info = console.debug

export type {
  PluginConfig,
  PluginSideChannel,
} from '@vuedx/vue-languageservice'

export { init as default } from './init'
