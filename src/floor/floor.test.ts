import floor from '.'

describe('floor', () => {
  test('arguments have undefined', () => {
    expect(floor()).toBe(NaN)
    expect(floor(undefined, 1)).toBe(NaN)
    expect(floor(4.006)).toBe(4)
  })

  test('normal', () => {
    expect(floor(6.004, 2)).toBe(6.0) // -6.00
    expect(floor(-6.004, 2)).toBe(-6.01)
  })

  test('precision is Non-positive number', () => {
    expect(floor(4060, -2)).toBe(4000)
    expect(floor(-4060, -2)).toBe(-4100)
  })
})
