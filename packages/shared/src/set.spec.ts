import { SetOps } from './set'

describe(SetOps.difference, () => {
  test('a - b', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const c = SetOps.difference(a, b)
    expect(c).toEqual(new Set([1]))
  })

  test('b - a', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const c = SetOps.difference(b, a)
    expect(c).toEqual(new Set([4]))
  })
})

describe(SetOps.union, () => {
  test('a U b', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const c = SetOps.union(a, b)
    expect(c).toEqual(new Set([1, 2, 3, 4]))
  })

  test('b U a', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const c = SetOps.union(b, a)
    expect(c).toEqual(new Set([1, 2, 3, 4]))
  })
})

describe(SetOps.intersetion, () => {
  test('a ∩ b', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const c = SetOps.intersetion(a, b)
    expect(c).toEqual(new Set([2, 3]))
  })

  test('b ∩ a', () => {
    const a = new Set([1, 2, 3])
    const b = new Set([2, 3, 4])
    const c = SetOps.intersetion(b, a)
    expect(c).toEqual(new Set([2, 3]))
  })
})
