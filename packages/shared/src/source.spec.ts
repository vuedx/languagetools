import { SourceTransformer } from './source'

describe(SourceTransformer, () => {
  it('no new lines', () => {
    const transformer = new SourceTransformer('', '')
    transformer.append('foo')
    transformer.append('bar')
    expect(transformer.end().code).toBe('foobar')
    expect(transformer.end().map.mappings).toHaveLength(1)
  })

  it('trailing new lines', () => {
    const transformer = new SourceTransformer('', '')
    transformer.append('foo\n')
    transformer.append('bar\n')
    const result = transformer.end()
    expect(result.code).toBe('foo\nbar\n')
    expect(result.map.mappings).toHaveLength(result.code.split('\n').length)
  })

  it('leading new lines', () => {
    const transformer = new SourceTransformer('', '')
    transformer.append('\nfoo')
    transformer.append('\nbar')
    const result = transformer.end()
    expect(result.code).toBe('\nfoo\nbar')
    expect(result.map.mappings).toHaveLength(result.code.split('\n').length)
  })

  it('multiple lines', () => {
    const transformer = new SourceTransformer('', '')
    transformer.append('foo\nfoo')
    transformer.append('bar\nbar')
    const result = transformer.end()
    expect(result.code).toBe('foo\nfoobar\nbar')
    expect(result.map.mappings).toHaveLength(result.code.split('\n').length)
  })

  it('clone source', () => {
    const transformer = new SourceTransformer('', 'foo-bar-baz')
    transformer.append('foo')
    transformer.clone(4, 7)
    transformer.append('baz')
    const result = transformer.end()
    expect(result.code).toBe('foobarbaz')
    expect(result.map.mappings).toHaveLength(result.code.split('\n').length)
    expect(result.map.mappings[0][0]).toEqual([3, 0, 0, 4])
  })
  it('clone source multiline', () => {
    const transformer = new SourceTransformer('', 'foo\nbar\nbaz')
    transformer.append('foo')
    transformer.clone(4, 7)
    transformer.append('baz')
    const result = transformer.end()
    expect(result.code).toBe('foobarbaz')
    expect(result.map.mappings).toHaveLength(result.code.split('\n').length)
    expect(result.map.mappings[0][0]).toEqual([3, 0, 1, 0])
  })

  it('generates correct source map', () => {
    const transformer = new SourceTransformer('', '')
    transformer.append('foo')
    transformer.nextLine()
    transformer.append('bar\n')
    transformer.nextLine()
    transformer.append('baz')
    transformer.nextLine()
    const result = transformer.end()
    expect(result.map.mappings).toHaveLength(result.code.split('\n').length)
    expect(result.map.mappings).toEqual([[], [], [], []])
  })
})
