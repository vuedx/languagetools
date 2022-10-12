import { ExtensionContext } from 'vscode'
import { LanguageClient, TransportKind } from 'vscode-languageclient/node'

export function createClient(context: ExtensionContext): LanguageClient {
  const serverModule = context.asAbsolutePath(
    'node_modules/@vuedx/vue-language-server/lib/index.js',
  )

  return new LanguageClient(
    'Vue Language Features',
    {
      run: {
        module: serverModule,
        transport: TransportKind.ipc,
      },
      debug: {
        module: serverModule,
        transport: TransportKind.ipc,
        options: { execArgv: ['--nolazy', '--inspect=6009'] },
      },
    },
    {
      documentSelector: [{ language: 'vue' }],
      markdown: { isTrusted: true, supportHtml: true },
    },
  )
}
