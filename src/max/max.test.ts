import max from '.'

describe('max', () => {
  const array = [4, 10, 8, 1]
  test('arguments have undefined', () => {
    expect(max()).toBe(undefined)
  })

  test('number', () => {
    expect(max(array)).toBe(10)
    expect(max([])).toBe(undefined)
  })
  test('string', () => {
    expect(max(array.map((item) => String(item)))).toBe('10')
  })
})
