import coc from 'coc.nvim'

export async function activate(): Promise<void> {
  const ts = coc.extensions.getExtension('coc-tsserver')

  if (ts?.extension != null) {
    if (!ts.extension.isActive) await ts.extension.activate()
  }
}
