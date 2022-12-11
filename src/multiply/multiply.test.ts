import multiply from '.'

describe('multiply', () => {
  test('arguments have undefined', () => {
    expect(multiply()).toBe(1)
    expect(multiply(undefined, 2)).toBe(2)
    expect(multiply(3)).toBe(3)
  })
  test('normal', () => {
    expect(multiply(3, 0)).toBe(0)
    expect(multiply(3, -2)).toBe(-6)
  })
  test('args have string', () => {
    expect(multiply('3', 1)).toBe(3)
    expect(multiply('3a', 1)).toBe(NaN)
    expect(Number('3a')).toBe(NaN)
  })
})
