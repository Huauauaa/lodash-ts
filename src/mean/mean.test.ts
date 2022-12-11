import mean from '.'

describe('mean', () => {
  const array = [4, 2, 8, 6]
  test('arguments have undefined', () => {
    expect(mean()).toBe(NaN)
  })

  test('number', () => {
    expect(mean(array)).toBe(5)
    expect(mean([])).toBe(NaN)
  })
})
