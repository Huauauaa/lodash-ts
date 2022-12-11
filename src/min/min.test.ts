import min from '.'

describe('min', () => {
  test('arguments have undefined', () => {
    expect(min()).toBe(undefined)
    expect(min([])).toBe(undefined)
  })
  test('arguments are numbers', () => {
    expect(min([4, 2, 8, 6])).toBe(2)
  })
})
