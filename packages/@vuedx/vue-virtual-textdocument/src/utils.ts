
export function isNotNull<T>(value: T | null | undefined): value is T {
  return value != null;
}

export function getLanguageIdFromExtension(ext: string) {
  switch (ext) {
    case 'js':
      return 'javascript';
    case 'ts':
      return 'typescript';
  }

  return ext;
}
