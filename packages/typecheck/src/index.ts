import { collectError, Telemetry } from '@vuedx/shared'
import { version } from '../package.json'
import { Diagnostics, getDiagnostics2 } from './diagnostics'

import { cli as cli2 } from './cli'

export type { Diagnostics }
export async function cli(): Promise<void> {
  setup()

  return await cli2()
}
export async function getDiagnostics(directory: string): Promise<Diagnostics> {
  setup()

  try {
    return await getDiagnostics2(directory)
  } catch (error) {
    collectError(error)
    return error
  }
}

function setup(): void {
  Telemetry.setup(
    'https://212f65f46796440ebbe974f24b20ffae@o237831.ingest.sentry.io/5595698',
    'typecheck',
    version,
    {
      ci: process.env.CI,
    },
  )
}
