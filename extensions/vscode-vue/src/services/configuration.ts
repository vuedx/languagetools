import { injectable } from 'inversify'
import vscode from 'vscode'
import { Installable } from '../utils/installable'

export interface VueExtensionSettings {
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
  private _config: VueExtensionSettings
  private readonly emitter = new vscode.EventEmitter<VueExtensionSettings>()

  constructor() {
    super()
    this._config = this.prepare(this.read())
  }

  public get config(): VueExtensionSettings {
    return this._config
  }

  private read(): VueExtensionSettings | undefined {
    return vscode.workspace.getConfiguration().get<VueExtensionSettings>('vue')
  }

  public install(): vscode.Disposable {
    super.install()
    return vscode.Disposable.from(
      this.emitter,
      vscode.workspace.onDidChangeConfiguration((event) => {
        if (event.affectsConfiguration('vue.blocks')) {
          this._config = this.prepare(this.read())
          this.emitter.fire(this.config)
        }
      }),
    )
  }

  public readonly onConfigChange = this.emitter.event

  public async save<K extends keyof VueExtensionSettings>(
    name: K,
    value: VueExtensionSettings[K],
  ): Promise<void> {
    await vscode.workspace
      .getConfiguration('vue')
      .update(`${name}`, value, name === 'blocks')
  }

  private prepare(
    config?: Partial<VueExtensionSettings>,
  ): VueExtensionSettings {
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
