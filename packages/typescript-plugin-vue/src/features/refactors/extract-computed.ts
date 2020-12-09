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
interface RefactorExtractComputedArgs {
  target: 'computed' | 'setupComputed'
}

export const RefactorExtractComputed: RefactorProvider = {
  version: '*',

  name: REFACTORS.EXTRACT_COMPUTED,

  findRefactors({ helpers, service }, fileName, position, preferences) {
    const extractAsComputedProperty: TS.RefactorActionInfo = {
      name: encode<RefactorExtractComputedArgs>({ target: 'computed' }),
      description: 'Extract to computed property',
    }
    const extractAsComputedValue: TS.RefactorActionInfo = {
      name: encode<RefactorExtractComputedArgs>({ target: 'setupComputed' }),
      description: 'Extract to computed value',
    }
    const refactor: TS.ApplicableRefactorInfo = {
      name: REFACTORS.EXTRACT_COMPUTED,
      description: 'Extract to computed',
      inlineable: true,
      actions: [extractAsComputedProperty, extractAsComputedValue],
    }

    const { node, ancestors, document } = helpers.findTemplateNodeAtPosition(
      fileName,
      position,
    )

    if (document != null && isSimpleExpressionNode(node)) {
      const parent = last(ancestors).node
      if (document.container.descriptor.scriptSetup != null) {
        extractAsComputedProperty.notApplicableReason =
          extractAsComputedProperty.notApplicableReason ??
          'Not supported when using <script setup>'
      } else {
        const info = helpers.getComponentInfo(document.container)
        node.scope.identifiers.forEach((id) => {
          const binding = node.scope.getBinding(id)
          if (binding != null) {
            extractAsComputedProperty.notApplicableReason =
              extractAsComputedProperty.notApplicableReason ??
              `Expression uses local variables`
            extractAsComputedValue.notApplicableReason =
              extractAsComputedValue.notApplicableReason ??
              `Expression uses local variables`
          } else {
            const source = info.identifierSource[id]
            if (source != null) {
              if (/^(methods|computed|data)$/.test(source.name)) {
                extractAsComputedValue.notApplicableReason =
                  extractAsComputedValue.notApplicableReason ??
                  `Cannot use ${source.name} from options API in setup() function`
              }
            }
          }
        })
      }

      if (isSimpleIdentifier(node.content)) {
        extractAsComputedProperty.notApplicableReason =
          extractAsComputedProperty.notApplicableReason ?? 'Already extracted'
        extractAsComputedValue.notApplicableReason =
          extractAsComputedValue.notApplicableReason ?? 'Already extracted'
      } else if (
        isDirectiveNode(parent) && // Unsupported directives.
        (parent.name === 'slot' ||
          parent.name === 'for' ||
          parent.name === 'on' ||
          parent.name === 'model')
      ) {
        extractAsComputedProperty.notApplicableReason =
          extractAsComputedProperty.notApplicableReason ??
          `Not supported in v-${parent.name}`
        extractAsComputedValue.notApplicableReason =
          extractAsComputedValue.notApplicableReason ??
          `Not supported in v-${parent.name}`
      }
    } else {
      extractAsComputedProperty.notApplicableReason =
        extractAsComputedProperty.notApplicableReason ??
        'Only expressions can be extracted as computed property'
      extractAsComputedValue.notApplicableReason =
        extractAsComputedValue.notApplicableReason ??
        'Only expressions can be extracted as computed value'
    }

    if (
      extractAsComputedProperty.notApplicableReason == null &&
      helpers.getVueDocument(fileName)?.descriptor.scriptSetup != null
    ) {
      extractAsComputedProperty.notApplicableReason =
        'No supported when using <script setup>'
    }

    if (
      typeof position === 'object' &&
      position.pos !== position.end &&
      (extractAsComputedProperty.notApplicableReason == null ||
        extractAsComputedValue.notApplicableReason == null)
    ) {
      // TODO: Ensure expression in selected range is actually extractable.
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
    if (refactorName !== REFACTORS.EXTRACT_COMPUTED) return
    const args = decode<RefactorExtractComputedArgs>(action as any)
    const document = helpers.getVueDocument(fileName)
    const { node } = helpers.findTemplateNodeAtPosition(fileName, position)

    if (isSimpleExpressionNode(node) && document !== null) {
      const project = context.getVueProjectForFile(document.fsPath, true)

      const shouldRewriteContext =
        args.target === 'computed' && document.descriptor.scriptSetup == null

      let start = node.loc.start.offset
      let end = node.loc.end.offset

      if (typeof position !== 'number' && position.pos !== position.end) {
        start = position.pos
        end = position.end
      }

      const content = node.content.substring(
        start - node.loc.start.offset,
        end - node.loc.start.offset,
      )

      const info = helpers.getComponentInfo(document)
      const code = transformToFunction(content, {
        name: 'anonymous',
        kind: 'expression',
        args: [],
        rewrite: shouldRewriteContext
          ? { context: 'this' }
          : {
              ...detectRefsAndProps(service, document, info, node),
              identifiers: getContextIdentifiers(info),
            },
      })

      const name = 'newComputed'
      const replaceExp: TS.TextChange = {
        newText: name,
        span: {
          start: start,
          length: end - start,
        },
      }

      const { changes } = registerComponentAPI(
        document,
        info,
        args.target,
        name,
        code,
        project.config.preferences.script,
      )

      if (info.fnSetupOption != null) {
        changes.push(...genSetupFnParams(info, node))
      }

      return {
        renameFilename: document.fsPath,
        renameLocation: start,
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
