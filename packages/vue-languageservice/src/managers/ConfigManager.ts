import {
  createModel,
  effect,
  Model,
  readonly,
  ReadonlyModel,
  Telemetry,
} from '@vuedx/shared'

export interface PluginConfig {
  /** Enable/disable .vue support */
  enabled: boolean
  /** Enable/disable telemetry */
  telemetry: boolean
  /** A file to communicate with extension? */
  extensionSocketId?: string
}

export class ConfigManager {
  public static instance = new ConfigManager()

  private readonly _config: Model<PluginConfig>

  private constructor() {
    this._config = createModel<PluginConfig>({
      enabled: true,
      telemetry: true,
    })

    effect(this._config, ['telemetry'], () => {
      Telemetry.setTelemetryEnabled(this.state.telemetry)
    })
  }

  public get state(): ReadonlyModel<PluginConfig> {
    return readonly(this._config)
  }

  public setConfig(config: PluginConfig): void {
    this._config.setAll(config)
  }
}
