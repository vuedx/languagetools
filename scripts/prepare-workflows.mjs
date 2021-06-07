import YAML from 'js-yaml'
import Path from 'path'
import FS from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

const workflowSource = Path.resolve(__dirname, '../.github/workflows-source/')
const workflow = Path.resolve(__dirname, '../.github/workflows/')

const sourceFiles = FS.readdirSync(workflowSource).filter((fileName) =>
  fileName.endsWith('.yaml'),
)

for (const sourceFile of sourceFiles) {
  const data = Object.fromEntries(
    Object.entries(
      YAML.load(
        FS.readFileSync(Path.resolve(workflowSource, sourceFile), 'utf-8'),
      ),
    ).filter(([key]) => !key.startsWith('.')),
  )

  Object.values(data.jobs).forEach((job) => {
    job.steps = [...job.steps].flat(2)
  })

  const output = YAML.dump(data, { noRefs: true })

  FS.writeFileSync(
    Path.resolve(workflow, sourceFile),
    `# THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) from ../workflows-source/${sourceFile}\n${output}`,
  )
}
