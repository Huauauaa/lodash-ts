import chunk from './chunk'

describe('chunk', () => {
  const arr = ['a', 'b', 'c', 'd']
  test('undefined', () => {
    expect(chunk(arr)).toEqual(arr)
  })
  it('fraction', () => {
    const result = chunk(arr, 3.5)
    expect(result).toEqual([['a', 'b', 'c'], ['d']])
  })
  test('negative number', () => {
    const result = chunk(arr, -2)
    expect(result).toEqual([])
  })
  it('size 0', () => {
    expect(chunk(arr, 0)).toEqual([])
  })
  it('size divide exactly', () => {
    const result = chunk(arr, 2)
    expect(result).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ])
  })
  it('size aliquant', () => {
    const result = chunk(arr, 3)
    expect(result).toEqual([['a', 'b', 'c'], ['d']])
  })
})
