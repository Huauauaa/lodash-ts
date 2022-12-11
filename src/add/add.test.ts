import add from '.'

describe('add', () => {
  it('pass two numbers', () => {
    expect(add(6, 4)).toBe(10)
  })
  test('arguments undefined', () => {
    expect(add()).toBe(0)
    expect(add(undefined, 6)).toBe(6)
    expect(add(6)).toBe(6)
  })
})
