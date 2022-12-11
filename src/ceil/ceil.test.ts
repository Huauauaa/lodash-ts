import ceil from '.'

describe('ceil', () => {
  test('arguments have undefined', () => {
    expect(ceil()).toBe(NaN)
    expect(ceil(undefined, 1)).toBe(NaN)
    expect(ceil(4.006)).toBe(5)
  })

  test('precision is positive number', () => {
    expect(ceil(6.004, 2)).toBe(6.01)
    expect(ceil(-6.004, 2)).toBe(-6.0) // -6.00
  })
  test('precision is Non-positive number', () => {
    expect(ceil(6040, -2)).toBe(6100)
    expect(ceil(-6040, -2)).toBe(-6000)
  })
})
