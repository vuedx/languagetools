import { execSync } from 'child_process'

const [task, ...args] = process.argv.slice(2)

execSync(
  `$(pnpm bin)/hygen ${task} new ${args
    .map((arg) => JSON.stringify(arg))
    .join(' ')}`,
  { encoding: 'utf-8', stdio: [0, 1, 2] },
)
