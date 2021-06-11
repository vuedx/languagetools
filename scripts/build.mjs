import { getPackages } from '@vuedx/monorepo-tools'
import { execSync } from 'child_process'
import Path from 'path'
import { fileURLToPath } from 'url'

// @ts-ignore — tsconfig.json "include" does not support .mjs files
const __filename = fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

getPackages(Path.resolve(__dirname, '..'), ['packages/*', 'extensions/*']).packageNames.forEach(build)

/**
 * Build a package
 * @param {string} packageName
 */
function build(packageName) {
  execSync(`$(pnpm bin)/rollup -c --environment BUILD:production`, {
    stdio: [0, 1, 2],
    env: {
      ...process.env,
      NODE_OPTIONS: '--max_old_space_size=1024',
      BUILD_PACKAGES: `^${packageName}$`,
    },
  })
}
