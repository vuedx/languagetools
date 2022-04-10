import { flatten, isNotNull, parseFileName } from '@vuedx/shared'
import glob from 'fast-glob'
import * as FS from 'fs'
import * as Path from 'path'
import type * as ts from 'typescript/lib/tsserverlibrary'
import * as TS from 'typescript/lib/tsserverlibrary'
import { TypeScriptServerHost } from './TypeScriptServerHost'

function toNormalizedPath(fileName: string): string {
  return TS.server.toNormalizedPath(fileName)
}
export type Diagnostics = Array<{
  fileName: string
  diagnostics: ts.server.protocol.Diagnostic[]
}>

class AbortSignal {
  private _aborted = false
  private _onabort?: () => void | Promise<void>

  public get aborted(): boolean {
    return this._aborted
  }

  // eslint-disable-next-line accessor-pairs
  public set onabort(fn: () => void | Promise<void>) {
    this._onabort = fn
  }

  private async dispatchEvent(_event: 'aborted'): Promise<void> {
    this._aborted = true
    return await this._onabort?.()
  }
}
export class AbortController {
  public readonly signal = new AbortSignal()

  public async abort(): Promise<void> {
    // @ts-expect-error
    return await this.signal.dispatchEvent('aborted')
  }
}

export async function* getDiagnostics(
  directory: string,
  cancellationToken: AbortSignal,
  logging: boolean = false,
): AsyncGenerator<Diagnostics, Diagnostics> {
  const host = new TypeScriptServerHost()
  cancellationToken.onabort = async () => {
    await host.close()
  }
  const projectRootPath = toNormalizedPath(directory)
  const diagnosticsPerFile = new Map<
    string,
    {
      semantic?: ts.server.protocol.Diagnostic[]
      syntax?: ts.server.protocol.Diagnostic[]
      suggestion?: ts.server.protocol.Diagnostic[]
    }
  >()

  function setDiagnostics(
    fileName: string,
    kind: 'semantic' | 'syntax' | 'suggestion',
    diagnostics: ts.server.protocol.Diagnostic[],
  ): void {
    if (fileName.includes('/node_modules/')) return
    if (diagnostics.length > 0) {
      const current = diagnosticsPerFile.get(fileName) ?? {}
      diagnosticsPerFile.set(fileName, {
        ...current,
        [kind]: diagnostics,
      })
    }
  }
  const pack = (): Diagnostics =>
    Array.from(diagnosticsPerFile.entries())
      .map(([fileName, diagnostics]) => ({
        fileName,
        diagnostics: merge(
          diagnostics.semantic,
          diagnostics.suggestion,
          diagnostics.syntax,
        ),
      }))
      .filter((item) => item.diagnostics.length > 0)

  let useProject: boolean = true
  const refresh = async (files: string[]): Promise<Diagnostics> => {
    diagnosticsPerFile.clear()
    const start = Date.now()
    if (logging) console.log(`Checking...`)
    const id =
      useProject && files[0] != null
        ? await host.sendCommand('geterrForProject', {
            file: files[0],
            delay: 1,
          })
        : await host.sendCommand('geterr', { files, delay: 1 })

    return await new Promise((resolve) => {
      const off = host.on('requestCompleted', async (event) => {
        if (event.request_seq === id) {
          if (logging) {
            console.log(
              `Completed in ${((Date.now() - start) / 1000).toFixed(2)}s`,
            )
          }
          resolve(pack())
          off()
        }
      })
    })
  }
  await host.sendCommand('configure', {
    hostInfo: '@vuedx/typecheck',
    preferences: { disableSuggestions: false },
  })

  let files: string[]
  const jsConfig = Path.resolve(directory, 'jsconfig.json')
  const tsConfig = Path.resolve(directory, 'tsconfig.json')
  if (FS.existsSync(tsConfig) || FS.existsSync(jsConfig)) {
    useProject = true
    const configFile = FS.existsSync(tsConfig) ? tsConfig : jsConfig
    await host.sendCommand('updateOpen', {
      openFiles: [
        {
          file: toNormalizedPath(configFile),
          projectRootPath,
        },
      ],
    })

    const { body } = await host.sendCommand('projectInfo', {
      file: toNormalizedPath(configFile),
      projectFileName: toNormalizedPath(configFile),
      needFileNameList: true,
    })

    files = Array.from(
      new Set(
        (body?.fileNames ?? [])
          .map((fileName) => {
            if (
              fileName.includes('/node_modules/') ||
              fileName.endsWith('.json')
            ) {
              return null
            }

            return parseFileName(fileName).fileName
          })
          .filter(isNotNull),
      ),
    )

    if (files.length > 0) {
      await host.sendCommand('updateOpen', {
        closedFiles: [toNormalizedPath(configFile)],
      })
      const projectFileName = toNormalizedPath(configFile)
      await host.sendCommand('updateOpen', {
        openFiles: files.map((file) => ({
          file: toNormalizedPath(file),
          projectFileName,
        })),
      })
    }
  } else {
    await host.sendCommand('compilerOptionsForInferredProjects', {
      options: {
        allowJs: true,
        checkJs: true,
        strict: true,
        alwaysStrict: true,
        allowNonTsExtensions: true,
        jsx: 'preserve' as any,
      },
    })

    files = (
      await glob(['**/*.vue', '**/*.ts', '**/*.js', '**/*.jsx', '**/*.tsx'], {
        cwd: directory,
        absolute: true,
        ignore: ['node_modules', 'dist'],
      })
    ).map((fileName) => toNormalizedPath(fileName))

    await host.sendCommand('updateOpen', {
      openFiles: files.map((file) => ({ file, projectRootPath })),
    })
  }

  let done: (result: Diagnostics) => void
  let promise = new Promise<Diagnostics>((resolve) => {
    done = resolve
    void refresh(files).then(done)
  })

  const next = (): void => {
    promise = new Promise((resolve) => {
      done = resolve
    })
  }

  host.on('projectsUpdatedInBackground', async () => {
    done(await refresh(files))
  })

  host.on('semanticDiag', (event) => {
    setDiagnostics(event.file, 'semantic', event.diagnostics)
  })

  host.on('syntaxDiag', (event) => {
    setDiagnostics(event.file, 'syntax', event.diagnostics)
  })

  host.on('suggestionDiag', (event) => {
    setDiagnostics(event.file, 'suggestion', event.diagnostics)
  })

  while (!cancellationToken.aborted) {
    yield await promise
    next()
  }

  return pack()
}

export async function getDiagnostics2(directory: string): Promise<Diagnostics> {
  const controller = new AbortController()
  const stream = getDiagnostics(directory, controller.signal)
  const result = await stream.next()
  await controller.abort()

  return result.value
}

function merge<T>(...items: Array<T[] | undefined>): T[] {
  return flatten(items.map((item) => item ?? []))
}
