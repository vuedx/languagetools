import { VueTextDocument, BlockSelector } from './VueTextDocument';
import { URI } from 'vscode-uri';

// Vue File: foo.vue
// Virtual Script File: foo.vue____script.js
// Virtual Template File: foo.vue____template.vue-html
// Virtual Render File: foo.vue____render.js
// Virtual Style File: foo.vue____style__0.css
export const VIRTUAL_FILENAME_SEPARATOR = '____';

export function isVueFile(fileName: string) {
  return fileName.endsWith('.vue');
}

export function isVirtualFile(fileName: string) {
  return fileName.indexOf('.vue' + VIRTUAL_FILENAME_SEPARATOR) > 0;
}

export function getContainingFile(fileName: string) {
  return fileName.split(VIRTUAL_FILENAME_SEPARATOR).shift()!;
}

export function asUri(fileName: string) {
  if (/^[a-z-]+:\/\//i.test(fileName)) return fileName;

  const uri = URI.file(fileName).toString();

  if (isVirtualFile(fileName)) {
    return uri.replace(/^[^:]+/, 'vue');
  }

  return uri;
}

export function parseVirtualFileName(fileName: string) {
  const uri = URI.parse(asUri(fileName));

  if (uri.scheme === 'vue') {
    const [container, selector] = uri.fsPath.split(VIRTUAL_FILENAME_SEPARATOR);
    if (!selector.includes('.')) throw new Error('Malformated virtual file uri.');
    const [block, index] = selector.substr(0, selector.lastIndexOf('.')).split('__');

    return {
      uri: URI.file(container).toString(),
      selector: <BlockSelector>(
        (index
          ? { type: block, index: parseInt(index, 10) }
          : block === 'render'
          ? { type: 'template', render: true }
          : { type: block })
      ),
    };
  }

  return null;
}
