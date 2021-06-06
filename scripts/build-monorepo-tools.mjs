import { execSync } from 'child_process'

if (process.env['CI'] == null) {
  execSync(`pnpm recursive --filter @vuedx/monorepo-tools run build`)
}
