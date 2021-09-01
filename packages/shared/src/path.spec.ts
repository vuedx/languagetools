import { getRelativeFileName, toPosixPath, toWindowsPath } from './path'

test('toPosixPath', () => {
  expect(toPosixPath('C:\\Users\\file.txt')).toBe('//?/C/Users/file.txt')
  expect(toPosixPath('..\\Users\\file.txt')).toBe('../Users/file.txt')
  expect(toPosixPath('/Users/file.txt')).toBe('/Users/file.txt')
  expect(toPosixPath('../Users/file.txt')).toBe('../Users/file.txt')
})

test('toWindowsPath', () => {
  expect(toWindowsPath('C:\\Users\\file.txt')).toBe('C:\\Users\\file.txt')
  expect(toWindowsPath('..\\Users\\file.txt')).toBe('..\\Users\\file.txt')
  expect(toWindowsPath('/Users/file.txt')).toBe('\\Users\\file.txt')
  expect(toWindowsPath('../Users/file.txt')).toBe('..\\Users\\file.txt')
})

test('getRelativeFileName', () => {
  expect(getRelativeFileName('C:\\Users\\file.txt', './bar.txt')).toBe(
    './bar.txt',
  )
  expect(getRelativeFileName('..\\Users\\file.txt', './bar.txt')).toBe(
    './bar.txt',
  )
  expect(getRelativeFileName('/Users/file.txt', './bar.txt')).toBe('./bar.txt')
  expect(getRelativeFileName('../Users/file.txt', './bar.txt')).toBe(
    './bar.txt',
  )

  expect(getRelativeFileName('C:\\Users\\file.txt', './bar.txt')).toBe(
    './bar.txt',
  )
  expect(getRelativeFileName('..\\Users\\file.txt', './bar.txt')).toBe(
    './bar.txt',
  )
  expect(getRelativeFileName('/Users/file.txt', './bar.txt')).toBe('./bar.txt')
  expect(getRelativeFileName('../Users/file.txt', './bar.txt')).toBe(
    './bar.txt',
  )

  expect(getRelativeFileName('C:\\Users\\file.txt', 'C:\\Other\\bar.txt')).toBe(
    '../Other/bar.txt',
  )
  expect(getRelativeFileName('..\\Users\\file.txt', 'C:\\Other\\bar.txt')).toBe(
    '//?/C/Other/bar.txt',
  )
  expect(getRelativeFileName('/Users/file.txt', 'C:\\Other\\bar.txt')).toBe(
    '../?/C/Other/bar.txt',
  )
  expect(getRelativeFileName('../Users/file.txt', 'C:\\Other\\bar.txt')).toBe(
    '//?/C/Other/bar.txt',
  )

  expect(getRelativeFileName('C:\\Users\\file.txt', '/Other/bar.txt')).toBe(
    '../../../Other/bar.txt',
  )
  expect(getRelativeFileName('..\\Users\\file.txt', '/Other/bar.txt')).toBe(
    '/Other/bar.txt',
  )
  expect(getRelativeFileName('/Users/file.txt', '/Other/bar.txt')).toBe(
    '../Other/bar.txt',
  )
  expect(getRelativeFileName('../Users/file.txt', '/Other/bar.txt')).toBe(
    '/Other/bar.txt',
  )

  expect(getRelativeFileName('/Users/file.txt', '/Users/bar.txt')).toBe(
    './bar.txt',
  )
})
