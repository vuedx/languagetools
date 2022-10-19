import { ComponentNode } from '@vuedx/template-ast-types'
import { VueSFCDocument } from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import { TypeScript } from '../contracts/TypeScript'
import { TypescriptContextService } from '../services/TypescriptContextService'

export interface ComponentSlotsInfo {
  component: TypeScript.Node
  slots: TypeScript.Symbol[]
}

@injectable()
export class TemplateSlotsService {
  constructor(
    @inject(TypescriptContextService)
    private readonly ts: TypescriptContextService,
  ) {}

  public getSlotsInfo(
    document: VueSFCDocument,
    component: ComponentNode,
  ): ComponentSlotsInfo | undefined {
    const template = document.descriptor.template
    if (template == null) return
    const generatedPosition = document.generatedOffsetAt(
      component.startTagLoc.end.offset + template.loc.start.offset,
    )
    if (generatedPosition == null) return
    const program = this.ts.service.getProgram()
    if (program == null) return
    const sourceFile = program.getSourceFile(document.generatedFileName)
    if (sourceFile == null) return
    const checker = program.getTypeChecker()
    const node = this.ts.getTokenAtPosition(sourceFile, generatedPosition)
    if (node == null) return
    if (!this.ts.lib.isJsxOpeningElement(node)) return
    const tagName = checker.getSymbolAtLocation(node.tagName)
    if (tagName == null) return
    const componentType = checker.getDeclaredTypeOfSymbol(tagName)
    const props = checker.getPropertyOfType(componentType, '$props')
    if (props == null) return
    const propsType = checker.getTypeOfSymbolAtLocation(props, node)
    const slots = checker.getPropertyOfType(propsType, '$slots')
    if (slots == null) return
    const slotsType = checker.getTypeOfSymbolAtLocation(slots, node)
    const slotNames = checker.getPropertiesOfType(slotsType)
    return { component: node, slots: slotNames }
  }
}
