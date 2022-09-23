import { flatten, invariant } from '@vuedx/shared'
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

export async function* getDiagnosticsStream(
  directory: string,
  cancellationToken: AbortSignal | null,
  logging: boolean = false,
  filter: (fileName: string) => boolean = () => true,
): AsyncGenerator<
  {
    fileName: string
    diagnostics: ts.server.protocol.Diagnostic[]
  },
  Diagnostics
> {
  const debug: typeof console.debug = logging ? console.debug : () => {}
  const host = new TypeScriptServerHost()
  if (cancellationToken != null) {
    cancellationToken.onabort = async () => {
      await host.close()
    }
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
    debug(`[diagnostics] ${kind} ${fileName}`)
    const current = {
      ...(diagnosticsPerFile.get(fileName) ?? {}),
      [kind]: diagnostics,
    }
    diagnosticsPerFile.set(fileName, current)

    if (
      current.semantic != null &&
      current.syntax != null &&
      current.suggestion != null
    ) {
      const all = merge(current.semantic, current.syntax, current.suggestion)
      if (all.length > 0) {
        results.push({ fileName, diagnostics: all })
        debug(`Completed ${fileName}. ${all.length} issue(s).`)
      } else {
        debug(`Completed ${fileName}. No issues.`)
      }
      pending.delete(fileName)
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

  await host.sendCommand('configure', {
    hostInfo: '@vuedx/typecheck',
    preferences: { disableSuggestions: false },
  })

  let files: string[]
  let projectFileName: string | undefined
  const jsConfig = Path.resolve(directory, 'jsconfig.json')
  const tsConfig = Path.resolve(directory, 'tsconfig.json')
  if (FS.existsSync(tsConfig) || FS.existsSync(jsConfig)) {
    projectFileName = FS.existsSync(tsConfig) ? tsConfig : jsConfig
    debug('Using project', projectFileName)
    await host.sendCommand('updateOpen', {
      openFiles: [
        {
          file: toNormalizedPath(projectFileName),
          projectRootPath,
        },
      ],
    })

    const { body } = await host.sendCommand('projectInfo', {
      file: toNormalizedPath(projectFileName),
      projectFileName: toNormalizedPath(projectFileName),
      needFileNameList: true,
    })

    invariant(body != null, 'Project info is null.')
    invariant(body.fileNames != null, 'Project has no files.')

    files = body.fileNames.filter((fileName) => {
      if (
        fileName.includes('/node_modules/') ||
        fileName.endsWith('.json') ||
        fileName.endsWith('.vue.tsx') ||
        fileName.endsWith('.vue.jsx')
      ) {
        return false
      }

      return filter(fileName)
    })
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
    )
      .filter(filter)
      .map((fileName) => toNormalizedPath(fileName))

    debug('Using inferred project', directory)
  }

  debug(`found ${files.length} files`)

  host.on('semanticDiag', (event) => {
    setDiagnostics(event.file, 'semantic', event.diagnostics)
  })

  host.on('syntaxDiag', (event) => {
    setDiagnostics(event.file, 'syntax', event.diagnostics)
  })

  host.on('suggestionDiag', (event) => {
    setDiagnostics(event.file, 'suggestion', event.diagnostics)
  })

  const pending = new Set<string>(files)
  const results: Diagnostics = []

  void Promise.all(
    files.map(async (file) => {
      await host.sendCommand('updateOpen', {
        openFiles: [
          {
            file,
            projectRootPath,
            projectFileName,
          },
        ],
      })
      await host.sendCommand('geterr', { files, delay: 1 })
    }),
  )

  while (
    cancellationToken == null ? pending.size > 0 : !cancellationToken.aborted
  ) {
    const result = results.shift()
    if (result != null) {
      debug(`Yielding ${result.fileName}`)
      yield result
    }
    if (pending.size === 0) break
    else {
      debug(`Waiting for ${pending.size} files`)
      await new Promise((resolve) => setTimeout(resolve, 100))
    }
  }

  debug(`Done.`)

  await host.close()

  return pack()
}

export async function getDiagnostics(directory: string): Promise<Diagnostics> {
  const stream = getDiagnosticsStream(
    directory,
    null,
    process.env['DEBUG'] != null,
  )
  let next: IteratorResult<Diagnostics[0], Diagnostics>
  while ((next = await stream.next()).done === false);
  invariant(next.done === true, 'Stream should be done.')
  return next.value
}

function merge<T>(...items: Array<T[] | undefined>): T[] {
  return flatten(items.map((item) => item ?? []))
}
