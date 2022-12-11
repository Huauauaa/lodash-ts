import sum from '.'

describe('sum', () => {
  const array = [4, 2, 8, 6]
  test('arguments have undefined', () => {
    expect(sum()).toBe(0)
  })

  test('number', () => {
    expect(sum(array)).toBe(20)
    expect(sum([])).toBe(0)
  })
})
