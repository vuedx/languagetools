import { transformToFunction } from '@vuedx/analyze'
import { last } from '@vuedx/shared'
import {
  isDirectiveNode,
  isSimpleExpressionNode,
  isSimpleIdentifier,
} from '@vuedx/template-ast-types'
import { detectRefsAndProps } from '../../helpers/detectRefsAndProps'
import { genSetupFnParams } from '../../helpers/genSetupFnParams'
import { getContextIdentifiers } from '../../helpers/getContextIdentifiers'
import { TS } from '../../interfaces'
import { registerComponentAPI } from '../../transforms/registerLocalComponent'
import { decode, encode, RefactorProvider, REFACTORS } from './abstract'

interface RefactorExtractMethodArgs {
  target: 'methods' | 'setupMethods'
}

export const RefactorExtractMethod: RefactorProvider = {
  version: '*',

  name: REFACTORS.EXTRACT_METHOD,

  findRefactors({ helpers }, fileName, position) {
    const extractAsMethod: TS.RefactorActionInfo = {
      name: encode<RefactorExtractMethodArgs>({ target: 'methods' }),
      description: 'Extract to method',
    }
    const extractAsFunction: TS.RefactorActionInfo = {
      name: encode<RefactorExtractMethodArgs>({ target: 'setupMethods' }),
      description: 'Extract to function',
    }
    const refactor: TS.ApplicableRefactorInfo = {
      name: REFACTORS.EXTRACT_METHOD,
      description: 'Extract to function/method',
      inlineable: true,
      actions: [extractAsMethod, extractAsFunction],
    }

    const { node, ancestors, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (document != null && isSimpleExpressionNode(node)) {
      const parent = last(ancestors).node
      if (document.container.descriptor.scriptSetup != null) {
        extractAsMethod.notApplicableReason =
          extractAsMethod.notApplicableReason ??
          'Not supported when using <script setup>'
      } else {
        const info = helpers.getComponentInfo(document.container)
        node.scope.identifiers.forEach((id) => {
          const binding = node.scope.getBinding(id)
          const source = info.identifierSource[id]
          if (source != null && binding == null) {
            if (/^(methods|computed|data)$/.test(source.name)) {
              extractAsFunction.notApplicableReason =
                extractAsFunction.notApplicableReason ??
                `Cannot use ${source.name} from options API in setup() function`
            }
          }
        })
      }

      if (isSimpleIdentifier(node.content)) {
        extractAsMethod.notApplicableReason =
          extractAsMethod.notApplicableReason ?? 'Already extracted'
        extractAsFunction.notApplicableReason =
          extractAsFunction.notApplicableReason ?? 'Already extracted'
      } else if (
        isDirectiveNode(parent) &&
        (parent.name === 'slot' || parent.name === 'for')
      ) {
        extractAsMethod.notApplicableReason =
          extractAsMethod.notApplicableReason ??
          `Not supported in v-${parent.name}`
        extractAsFunction.notApplicableReason =
          extractAsFunction.notApplicableReason ??
          `Not supported in v-${parent.name}`
      }
    } else {
      extractAsMethod.notApplicableReason =
        extractAsMethod.notApplicableReason ??
        'Only expressions can be extracted as method'
      extractAsFunction.notApplicableReason =
        extractAsFunction.notApplicableReason ??
        'Only expressions can be extracted as function'
    }

    if (
      extractAsMethod.notApplicableReason == null &&
      helpers.getVueDocument(fileName)?.descriptor.scriptSetup != null
    ) {
      extractAsMethod.notApplicableReason =
        'No supported when using <script setup>'
    }

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
    if (refactorName !== REFACTORS.EXTRACT_METHOD) return
    const args = decode<RefactorExtractMethodArgs>(action as any)
    const document = helpers.getVueDocument(fileName)
    const { node, ancestors } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (isSimpleExpressionNode(node) && document !== null) {
      const project = context.getVueProjectForFile(document.fsPath, true)
      const parent = last(ancestors)?.node
      const isEventHandler =
        isDirectiveNode(parent) && parent.name === 'on' && parent.exp === node
      const shouldRewriteContext =
        args.target === 'methods' && document.descriptor.scriptSetup == null
      const methodArgs: string[] = []
      let shouldCallEventHandler = false

      if (
        isEventHandler &&
        /(?<![a-z.[])\$event(?=[^a-zA-Z0-9_$])/.test(node.content)
      ) {
        methodArgs.push('$event')
      }

      node.scope.identifiers.forEach((id) => {
        if (node.scope.getBinding(id) != null) {
          methodArgs.push(id)
          shouldCallEventHandler = true
        }
      })

      const info = helpers.getComponentInfo(document)

      const code = transformToFunction(node.content, {
        name: 'anonymous',
        kind: isEventHandler ? 'statement' : 'expression',
        args: methodArgs,
        rewrite: shouldRewriteContext
          ? { context: 'this' }
          : {
              ...detectRefsAndProps(service, document, info, node),
              identifiers: getContextIdentifiers(info),
            },
      })

      const name = args.target === 'methods' ? 'newMethod' : 'newFunction'
      const replaceExp: TS.TextChange = {
        newText:
          isEventHandler && !shouldCallEventHandler
            ? name
            : `${name}(${methodArgs.join(', ')})`,
        span: {
          start: node.loc.start.offset,
          length: node.loc.end.offset - node.loc.start.offset,
        },
      }

      const { changes } = registerComponentAPI(
        document,
        info,
        args.target,
        name,
        code,
        project.version,
        project.config.preferences.script,
      )

      if (info.fnSetupOption != null) {
        changes.push(...genSetupFnParams(info, node))
      }

      return {
        renameFilename: document.fsPath,
        renameLocation: node.loc.start.offset, // TODO: Use `node.loc.start.offset` when renaming it template is supported.
        edits: [
          {
            fileName: document.fsPath,
            textChanges: [...changes, replaceExp],
          },
        ],
      }
    }
  },
}
