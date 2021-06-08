import { execSync } from 'child_process'
import { resolve } from 'path'

if (process.env['CI'] == null) {
  execSync(`pnpm install`, {
    cwd: resolve(process.cwd(), 'samples'),
    stdio: 'inherit',
  })
  execSync(`pnpm recursive --filter @vuedx/monorepo-tools run build`)
}
