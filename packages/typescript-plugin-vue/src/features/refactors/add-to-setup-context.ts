import { isSimpleIdentifier } from '@vuedx/template-ast-types'
import { getCode, isTextRangeInSourceRange } from '../../helpers/utils'
import { TS } from '../../interfaces'
import { RefactorProvider, REFACTORS } from './abstract'

export const AddToSetupContextRefactor: RefactorProvider = {
  version: '*',

  name: REFACTORS.ADD_TO_SETUP_CONTEXT,

  findRefactors(
    { helpers, context, service },
    fileName,
    position,
    preferences,
  ) {
    const addToSetupContext: TS.RefactorActionInfo = {
      name: 'default',
      description: 'Add to return statement',
    }
    const refactor: TS.ApplicableRefactorInfo = {
      name: REFACTORS.ADD_TO_SETUP_CONTEXT,
      description: 'Add to return statement',
      inlineable: true,
      actions: [addToSetupContext],
    }

    const document = helpers.getVueDocument(fileName)
    if (document != null) {
      const info = helpers.getComponentInfo(document)
      context.log(`@@DEBUG: Is position in setup function?`)
      if (
        info.fnSetupOption?.return != null &&
        isTextRangeInSourceRange(position, info.fnSetupOption.loc) &&
        !isTextRangeInSourceRange(position, info.fnSetupOption.return.loc)
      ) {
        const node = helpers.findTypeScriptNodeAtPosition(fileName, position)
        if (node != null && context.typescript.isIdentifier(node)) {
          const name = node.text

          if (info.identifierSource[name]?.name === 'setup') {
            addToSetupContext.notApplicableReason =
              'Already exists in return statement'

            return [refactor]
          }

          const parent = helpers.findTypeScriptNodeAtPosition(fileName, {
            pos: info.fnSetupOption.loc.start.offset,
            end: info.fnSetupOption.loc.end.offset,
          })

          if (parent != null) {
            if (
              context.typescript.isFunctionExpression(parent) ||
              context.typescript.isArrowFunction(parent) ||
              context.typescript.isMethodDeclaration(parent)
            ) {
              const program = service.getProgram()
              if (parent.body != null && program != null) {
                const checker = program.getTypeChecker()
                const symbols = checker.getSymbolsInScope(
                  parent.body,
                  context.typescript.SymbolFlags.BlockScopedVariable,
                )

                if (symbols.some((sym) => sym.name === name)) {
                  addToSetupContext.description = `Add '${name}' to return statement`

                  return [refactor]
                }
              }
            }
          }
        }
      }
    }

    addToSetupContext.notApplicableReason = 'Could not find identifier'

    return [refactor]
  },

  applyRefactor(
    { helpers, context, service },
    fileName,
    _,
    position,
    refactorName,
    action,
  ) {
    if (refactorName !== REFACTORS.ADD_TO_SETUP_CONTEXT) return
    const changes: TS.TextChange[] = []
    const document = helpers.getVueDocument(fileName)
    if (document != null) {
      const info = helpers.getComponentInfo(document)
      if (info.fnSetupOption?.return != null) {
        const node = helpers.findTypeScriptNodeAtPosition(fileName, position)
        if (node != null && context.typescript.isIdentifier(node)) {
          const loc = info.fnSetupOption.return.loc

          if (isSimpleIdentifier(loc.source)) {
            changes.push({
              newText: getCode(
                `{`,
                `    ...${loc.source.trim()}`,
                `    ${node.text},`,
                `}`,
              ),
              span: { start: loc.start.offset, length: loc.source.length },
            })
          } else {
            if (loc.source.includes('\n')) {
              changes.push({
                newText: getCode(``, `      ${node.text},`),
                span: {
                  start: loc.start.offset + 1,
                  length: 0,
                },
              })
            } else {
              changes.push({
                newText: getCode(` ${node.text},`),
                span: {
                  start: loc.start.offset + 1,
                  length: 0,
                },
              })
            }
          }
        }
      }
      return {
        edits: [
          {
            fileName: document.fsPath,
            textChanges: changes,
          },
        ],
      }
    }
  },
}
