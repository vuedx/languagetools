import {
  createModel,
  effect,
  Model,
  readonly,
  ReadonlyModel,
  Telemetry,
} from '@vuedx/shared'
import { injectable } from 'inversify'

export interface PluginConfig {
  /** Enable/disable telemetry */
  telemetry: boolean
  /** A file to communicate with extension? */
  extensionSocketId?: string
}

@injectable()
export class ConfigService {
  private readonly _config: Model<PluginConfig>

  constructor() {
    this._config = createModel<PluginConfig>({
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
