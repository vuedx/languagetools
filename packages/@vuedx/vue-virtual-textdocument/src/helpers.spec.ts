/// <reference types="jest" />

import { parseVirtualFileName, isVueFile, isVirtualFile, asUri } from './helpers';

describe('parseVirtualFileUri', () => {
  test.each([
    ['/foo/bar/component.vue', null],
    ['file:///foo/bar/component.vue', null],
    ['/foo/bar/component.vue____script.js', { uri: 'file:///foo/bar/component.vue', selector: { type: 'script' } }],
    [
      'vue:///foo/bar/component.vue____script.js',
      { uri: 'file:///foo/bar/component.vue', selector: { type: 'script' } },
    ],
    [
      'vue://git/foo/bar/component.vue____script.js',
      { uri: 'file:///foo/bar/component.vue', selector: { type: 'script' } },
    ],
  ])('parseVirtualFileUri(%s)', (uri, result) => {
    expect(parseVirtualFileName(uri)).toEqual(result);
  });
});

describe('isVueFile', () => {
  test.each([
    ['/foo/bar/component.vue', true],
    ['file:///foo/bar/component.vue', true],
    ['/foo/bar/component.vue____script.js', false],
    ['vue:///foo/bar/component.vue____script.js', false],
    ['vue://git/foo/bar/component.vue____script.js', false],
  ])('isVueFile(%s)', (uri, result) => {
    expect(isVueFile(uri)).toEqual(result);
  });
});

describe('isVirtualFile', () => {
  test.each([
    ['/foo/bar/component.vue', false],
    ['file:///foo/bar/component.vue', false],
    ['/foo/bar/component.vue____script', true],
    ['/foo/bar/component.vue____script.js', true],
    ['vue:///foo/bar/component.vue____script.js', true],
    ['vue://git/foo/bar/component.vue____script.js', true],
  ])('isVirtualFile(%s)', (uri, result) => {
    expect(isVirtualFile(uri)).toEqual(result);
  });
});

describe('asUri', () => {
  test.each([
    ['/foo/bar/component.vue', 'file:///foo/bar/component.vue'],
    ['file:///foo/bar/component.vue', 'file:///foo/bar/component.vue'],
    ['/foo/bar/component.vue____script', 'vue:///foo/bar/component.vue____script'],
    ['/foo/bar/component.vue____script.js', 'vue:///foo/bar/component.vue____script.js'],
    ['vue:///foo/bar/component.vue____script.js', 'vue:///foo/bar/component.vue____script.js'],
    ['vue://git/foo/bar/component.vue____script.js', 'vue://git/foo/bar/component.vue____script.js'],
  ])('asUri(%s)', (uri, result) => {
    expect(asUri(uri)).toEqual(result);
  });
});
