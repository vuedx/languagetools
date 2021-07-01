import type {
  VueBlockDocument,
  VueSFCDocument,
} from '@vuedx/vue-virtual-textdocument'
import { inject, injectable } from 'inversify'
import type Typescript from 'typescript/lib/tsserverlibrary'
import { FilesystemService } from '../services/FilesystemService'
import { TypescriptService } from '../services/TypescriptService'

@injectable()
export class GotoService {
  constructor(
    @inject(TypescriptService)
    private readonly ts: TypescriptService,
    @inject(FilesystemService)
    private readonly fs: FilesystemService,
  ) {}

  private depth = 0
  public getDefinitionAtPosition(
    fileName: string,
    position: number,
  ): readonly Typescript.DefinitionInfo[] | undefined {
    if (this.depth > 4) return undefined // Prevent deep recursion due to virtual files re-requesting definitions.

    this.depth++
    try {
      const service = this.ts.getServiceFor(fileName)
      if (service == null) return undefined
      if (this.fs.isVueFile(fileName)) {
        return this.doActionAtPosition(
          fileName,
          position,
          ({ tsFileName, offset, blockFile }) => {
            const result = service.getDefinitionAtPosition(tsFileName, offset)
            if (result == null) return

            console.error(
              `[VueDX] GoTo (${this.depth}) ${fileName} ${position} (Found ${result.length} definitions)`,
            )

            return this.dedupeDefinitionInfos(
              result
                .map((info) => {
                  if (blockFile.isOffsetInIgonredZone(info.textSpan.start)) {
                    // For render function arguments, we need to find definition again
                    console.error(
                      `[VueDX] GoTo (Again) ${info.fileName} ${info.textSpan.start}:${info.textSpan.length}`,
                    )

                    const result = this.getDefinitionAtPosition(
                      tsFileName,
                      info.textSpan.start,
                    )
                    if (result != null && result.length > 0) return result
                  }

                  return this.normalizeTSDefinitionInfo(info)
                })
                .flat(),
            )
          },
        )
      }

      const result = service.getDefinitionAtPosition(fileName, position)

      if (result == null) return

      return this.dedupeDefinitionInfos(
        result.map((info) => this.normalizeTSDefinitionInfo(info)).flat(),
      )
    } finally {
      --this.depth
    }
  }

  public getDefinitionAndBoundSpan(
    fileName: string,
    position: number,
  ): Typescript.DefinitionInfoAndBoundSpan | undefined {
    const service = this.ts.getServiceFor(fileName)
    if (service == null) return undefined
    if (this.fs.isVueFile(fileName)) {
      return this.doActionAtPosition(
        fileName,
        position,
        ({ tsFileName, blockFile, offset }) => {
          const result = service.getDefinitionAndBoundSpan(tsFileName, offset)
          if (result == null) return undefined
          result.textSpan = this.getTextSpan(blockFile, result.textSpan)
          return this.normalizeTSDefinitionInfoAndBoundSpan(result)
        },
      )
    }

    const result = service.getDefinitionAndBoundSpan(fileName, position)
    if (result == null) return undefined
    return this.normalizeTSDefinitionInfoAndBoundSpan(result)
  }

  private dedupeDefinitionInfos(
    definitions: readonly Typescript.DefinitionInfo[],
  ): Typescript.DefinitionInfo[] {
    const output: Typescript.DefinitionInfo[] = []
    const ids = new Set<string>()

    definitions.forEach((definition) => {
      const id = `${definition.fileName}:${definition.textSpan.start}:${definition.textSpan.length}`

      if (!ids.has(id)) {
        ids.add(id)
        output.push(definition)
      }
    })

    return output
  }

  private normalizeTSDefinitionInfo(
    info: Typescript.DefinitionInfo,
  ): Typescript.DefinitionInfo[] {
    const fileName = info.fileName

    info.fileName = this.fs.getRealFileName(fileName)
    if (this.fs.isVueVirtualFile(fileName)) {
      const blockFile = this.fs.getVueFile(fileName)?.getDocById(fileName)

      if (blockFile != null) {
        if (blockFile.isOffsetInIgonredZone(info.textSpan.start)) {
          const result = this.getDefinitionAtPosition(
            fileName,
            info.textSpan.start,
          )

          if (result != null && result.length > 0) return Array.from(result)

          return [info]
        }

        info.textSpan = this.getTextSpan(blockFile, info.textSpan)
        info.contextSpan = this.getTextSpan(blockFile, info.contextSpan)

        return [info]
      }

      info.textSpan = { start: 0, length: 1 }
      if (info.contextSpan != null) {
        info.contextSpan = { start: 0, length: 1 }
      }
    } else if (this.fs.isVueTsFile(fileName)) {
      const result = this.getDefinitionAtPosition(fileName, info.textSpan.start)

      if (result != null && result.length > 0) return Array.from(result)
      info.textSpan = { start: 0, length: 1 }
    }

    return [info]
  }

  private normalizeTSDefinitionInfoAndBoundSpan(
    info: Typescript.DefinitionInfoAndBoundSpan,
  ): Typescript.DefinitionInfoAndBoundSpan {
    info.definitions = info.definitions
      ?.map((info) => {
        return this.normalizeTSDefinitionInfo(info)
      })
      .flat()

    if (info.definitions != null) {
      info.definitions = this.dedupeDefinitionInfos(info.definitions)
    }

    return info
  }

  private doActionAtPosition<T>(
    fileName: string,
    position: number,
    fn: (options: {
      tsFileName: string
      blockFile: VueBlockDocument
      vueFile: VueSFCDocument
      offset: number
    }) => T,
  ): T | undefined {
    const vueFile = this.fs.getVueFile(fileName)
    if (vueFile == null) return undefined
    const blockFile = vueFile.getDocAt(position)
    if (blockFile?.tsFileName == null) return undefined
    const offset = blockFile.generatedOffetAt(position)

    return fn({ tsFileName: blockFile.tsFileName, vueFile, blockFile, offset })
  }

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan,
  ): Typescript.TextSpan

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan | undefined,
  ): Typescript.TextSpan | undefined

  private getTextSpan(
    blockFile: VueBlockDocument,
    textSpan: Typescript.TextSpan | undefined,
  ): Typescript.TextSpan | undefined {
    if (textSpan == null) return undefined

    const range = this.fs.getAbsoluteOffsets(blockFile, textSpan)

    return {
      start: range.start ?? 0,
      length: Math.max(range.length ?? 1, textSpan.length),
    }
  }
}
