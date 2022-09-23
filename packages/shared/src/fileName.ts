import { invariant } from './assert'

interface ParsedFileName {
  type: string
  fileName: string
}

export interface FilesystemSchemeFileName extends ParsedFileName {
  type: 'scheme'
  scheme: string
  fileName: string
}

export interface VueTsxFileName extends ParsedFileName {
  type: 'vue-tsx'
  fileName: string
}
export interface VueJsxFileName extends ParsedFileName {
  type: 'vue-jsx'
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
  | FilesystemSchemeFileName
  | VueTsxFileName
  | VueJsxFileName
  | VueSFCDescriptorFileName
  | VueTemplateASTFileName
  | FileName

const suffixes = {
  vueTsx: '.tsx',
  vueJsx: '.jsx',
  vueSFCDescriptor: '+descriptor.jsonc',
  vueTemplateAST: '+template.jsonc',
  vueRuntime: '.vuedx_runtime.d.ts',
  vueProjectRuntime: 'project.vuedx_project_runtime.d.ts',
}

export function parseFileName(fileName: string): FileNames {
  if (isFilesystemSchemeFile(fileName)) {
    const RE = /^\^\/(?<scheme>[^/]+)(\/ts-nul-authority)?(?<fileName>.*)$/
    const result = RE.exec(fileName)

    invariant(result?.groups != null)
    invariant(result.groups['fileName'] != null)
    invariant(result.groups['scheme'] != null)

    return {
      type: 'scheme',
      fileName: result.groups['fileName'],
      scheme: result.groups['scheme'],
    }
  } else if (isVueTsxFile(fileName)) {
    return {
      type: 'vue-tsx',
      fileName: fileName.substring(0, fileName.length - suffixes.vueTsx.length),
    }
  } else if (isVueJsxFile(fileName)) {
    return {
      type: 'vue-jsx',
      fileName: fileName.substring(0, fileName.length - suffixes.vueJsx.length),
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
    case 'vue-tsx':
      return `${f.fileName}${suffixes.vueTsx}`
    case 'vue-jsx':
      return `${f.fileName}${suffixes.vueJsx}`
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

export function isVueTsxFile(fileName: string): boolean {
  return fileName.endsWith('.vue' + suffixes.vueTsx)
}
export function isVueJsxFile(fileName: string): boolean {
  return fileName.endsWith('.vue' + suffixes.vueJsx)
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
