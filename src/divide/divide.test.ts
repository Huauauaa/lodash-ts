import divide from '.'

describe('divide', () => {
  test('arguments have undefined', () => {
    expect(divide()).toBe(1)
    expect(divide(undefined, 1)).toBe(1)
    expect(divide(6)).toBe(6)
  })

  test('normal', () => {
    expect(divide(6, 4)).toBe(1.5)
    expect(divide(-6, 4)).toBe(-1.5)
  })
  test('divisor is 0', () => {
    expect(divide(6, 0)).toBe(Infinity)
  })
})
