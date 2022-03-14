import { parse as parseQueryString } from 'querystring'

interface ParsedFileName {
  type: string
  fileName: string
}

export interface FilesystemSchemeFileName extends ParsedFileName {
  type: 'scheme'
  scheme: string
  fileName: string
}

export interface VueVirtualFileName extends ParsedFileName {
  type: 'virtual'
  fileName: string
  blockType: string
  blockLang: string
  blockIndex?: number
  query?: Record<string, string | true>
  setup?: boolean
}
export interface VueTsFileName extends ParsedFileName {
  type: 'vue-ts'
  fileName: string
}

export interface VueSFCDescriptorFileName extends ParsedFileName {
  type: 'vue-descriptor'
  fileName: string
}

export interface VueTemplateASTFileName extends ParsedFileName {
  type: 'vue-template-ast'
  fileName: string
}

export interface FileName extends ParsedFileName {
  type: 'other'
  fileName: string
}

type FileNames =
  | VueVirtualFileName
  | FilesystemSchemeFileName
  | VueTsFileName
  | VueSFCDescriptorFileName
  | VueTemplateASTFileName
  | FileName

const suffixes = {
  vueTs: '.ts',
  vueSFCDescriptor: '+descriptor.jsonc',
  vueTemplateAST: '+template.jsonc',
  vueRuntime: '.vuedx_runtime.d.ts',
  vueProjectRuntime: 'project.vuedx_project_runtime.d.ts',
}

export function parseFileName(fileName: string): FileNames {
  if (isFilesystemSchemeFile(fileName)) {
    const scheme = fileName.substring(2, fileName.indexOf('/', 2))

    return {
      type: 'scheme',
      fileName: fileName.substring(2 + scheme.length),
      scheme,
    }
  } else if (isVueVirtualFile(fileName)) {
    const offset = fileName.indexOf('.vue+vue')
    const langOffset = fileName.lastIndexOf('&lang.')
    const lang = fileName.substring(langOffset + '&lang.'.length)
    const queryString = fileName.substring(offset + 5, langOffset)
    const { type: blockType, index, setup, vue, ...rest } = parseQueryString(
      queryString,
    ) as Record<string, string>

    const query = rest as Record<string, string | true>
    for (const key in query) {
      if (rest[key] === '') {
        query[key] = true
      }
    }

    return {
      type: 'virtual',
      fileName: fileName.substring(0, offset + 4),
      blockType: String(blockType),
      blockLang: lang,
      blockIndex: index != null ? parseInt(index, 10) : undefined,
      setup: setup != null ? true : undefined,
      query: Object.keys(query).length > 0 ? query : undefined,
    }
  } else if (isVueTsFile(fileName)) {
    return {
      type: 'vue-ts',
      fileName: fileName.substring(0, fileName.length - suffixes.vueTs.length),
    }
  } else if (isVueSFCDescriptorFile(fileName)) {
    return {
      type: 'vue-descriptor',
      fileName: fileName.substring(
        0,
        fileName.length - suffixes.vueSFCDescriptor.length,
      ),
    }
  } else if (isVueTemplateASTFile(fileName)) {
    return {
      type: 'vue-template-ast',
      fileName: fileName.substring(
        0,
        fileName.length - suffixes.vueTemplateAST.length,
      ),
    }
  } else {
    return {
      type: 'other',
      fileName,
    }
  }
}

export function toFileName(f: FileNames): string {
  switch (f.type) {
    case 'scheme':
      return `^/${f.scheme}${f.fileName}`

    case 'virtual':
      return `${f.fileName}+vue&type=${f.blockType}${
        f.blockIndex != null ? `&index=${f.blockIndex}` : ''
      }${f.setup === true ? '&setup' : ''}${
        f.query != null
          ? `&${Array.from(Object.entries(f.query))
              .map(([key, value]) => (value === true ? key : `${key}=${value}`))
              .join('&')}`
          : ''
      }&lang.${f.blockLang}`
    case 'vue-ts':
      return `${f.fileName}${suffixes.vueTs}`
    case 'vue-descriptor':
      return `${f.fileName}${suffixes.vueSFCDescriptor}`
    case 'vue-template-ast':
      return `${f.fileName}${suffixes.vueTemplateAST}`
    default:
      return f.fileName
  }
}

export function isFilesystemSchemeFile(fileName: string): boolean {
  return fileName.startsWith('^/')
}

export function isVueFile(fileName: string): boolean {
  return fileName.endsWith('.vue')
}

export function isVueTsFile(fileName: string): boolean {
  return fileName.endsWith('.vue' + suffixes.vueTs)
}

export function isVueSFCDescriptorFile(fileName: string): boolean {
  return fileName.endsWith('.vue' + suffixes.vueSFCDescriptor)
}

export function isVueTemplateASTFile(fileName: string): boolean {
  return fileName.endsWith('.vue' + suffixes.vueTemplateAST)
}

export function isVueVirtualFile(fileName: string): boolean {
  return fileName.includes('.vue+vue')
}

export function isVueRuntimeFile(fileName: string): boolean {
  return fileName.endsWith(suffixes.vueRuntime)
}

export function isProjectRuntimeFile(fileName: string): boolean {
  return fileName.endsWith(suffixes.vueProjectRuntime)
}

const VUE_VIRTAL_FILE_RE = /\.vue(\+vue|\.ts|\.js)/
export function mayContainVirtualFileName(text: string): boolean {
  return VUE_VIRTAL_FILE_RE.test(text)
}
