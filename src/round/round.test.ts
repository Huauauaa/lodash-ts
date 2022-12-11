import round from '.'

describe('round', () => {
  test('arguments have undefined', () => {
    expect(round()).toBe(NaN)
    expect(round(undefined, 1)).toBe(NaN)
    expect(round(4.006)).toBe(4)
  })

  test('precision is positive number', () => {
    expect(round(6.004, 2)).toBe(6.0) // 6.00
    expect(round(-6.004, 2)).toBe(-6.0) // -6.00
  })
  test('precision is Non-positive number', () => {
    expect(round(6040, -2)).toBe(6000)
    expect(round(-6040, -2)).toBe(-6000)
    expect(round(6049, -2)).toBe(6000)
    expect(round(6050, -2)).toBe(6100)
    expect(round(-6050, -2)).toBe(-6000)
    expect(round(-6051, -2)).toBe(-6100)
  })
})
