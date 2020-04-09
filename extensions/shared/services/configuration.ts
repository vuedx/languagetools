import vscode from 'vscode'
import { injectable } from 'inversify'
import { Installable } from '../utils/installable'

export interface DXVueConfiguration {
  blocks: Record<
    string,
    {
      default: string
      allowed: string[]
    }
  >
}

@injectable()
export class ConfigurationService extends Installable {
  private _config: DXVueConfiguration
  private emitter = new vscode.EventEmitter<DXVueConfiguration>()

  constructor() {
    super()
    this._config = this.prepare(this.read())
  }

  public get config() {
    return this._config
  }

  private read() {
    return vscode.workspace
      .getConfiguration()
      .get<DXVueConfiguration>('vue')
  }

  public install() {
    super.install()
    return vscode.Disposable.from(
      this.emitter,
      vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration('vue.blocks')) {
          this._config = this.prepare(this.read())
          this.emitter.fire(this.config)
        }
      })
    )
  }

  public readonly onConfigChange = this.emitter.event

  public save(config: Partial<DXVueConfiguration>) {
    vscode.workspace.getConfiguration().update('vue', config)
  }

  private prepare(config?: Partial<DXVueConfiguration>) {
    return {
      ...config,
      blocks: {
        ...config?.blocks,
        template: {
          default: 'vue-html',
          allowed: ['pug'],
        },
        script: {
          default: 'javascript',
          allowed: ['typescript'],
        },
        style: {
          default: 'css',
          allowed: ['sass', 'scss', 'less', 'postcss', 'stylus'],
        },
      },
    }
  }
}
