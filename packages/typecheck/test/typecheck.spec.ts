import { fork } from 'child_process'
import * as Path from 'path'

describe('typecheck', () => {
  const TIMEOUT = 30000
  const bin = Path.resolve(__dirname, '../bin/typecheck.js')
  async function run(
    directory: string,
    options: string[] = [],
  ): Promise<string> {
    const p = fork(
      bin,
      [...options, Path.resolve(__dirname, '../../../samples', directory)],
      {
        stdio: 'pipe',
        env: {
          DEBUG_TS_SERVER: 'yes',
          TS_SERVER_LOG_FILE: Path.resolve(
            __dirname,
            '../../../test/output/tsserver.log',
          ),
        },
      },
    )

    let output = ''
    p.stdout?.on('data', (content) => {
      output += (content as Buffer).toString()
    })

    return await new Promise((resolve) => {
      p.on('exit', () => resolve(output))
    })
  }

  test(
    'configured project',
    async () => {
      expect(await run('typecheck-configured')).toMatchInlineSnapshot(`""`)
    },
    TIMEOUT,
  )

  test(
    'inferred project',
    async () => {
      expect(await run('typecheck-inferred')).toMatchInlineSnapshot(`""`)
    },
    TIMEOUT,
  )

  test(
    'format: raw',
    async () => {
      expect(
        await run('typecheck-configured', ['--pretty=false']),
      ).toMatchInlineSnapshot(`""`)
    },
    TIMEOUT,
  )

  test(
    'format: json',
    async () => {
      expect(
        await run('typecheck-configured', ['--format', 'json']),
      ).toMatchInlineSnapshot(`""`)
    },
    TIMEOUT,
  )

  test(
    'format: rdjson',
    async () => {
      expect(
        await run('typecheck-configured', ['--format', 'rdjson']),
      ).toMatchInlineSnapshot(`""`)
    },
    TIMEOUT,
  )
})
