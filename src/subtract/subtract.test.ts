import subtract from '.'

describe('subtract', () => {
  it('pass two numbers', () => {
    expect(subtract(6, 4)).toBe(2)
  })
  test('arguments undefined', () => {
    expect(subtract()).toBe(0)
    expect(subtract(undefined, 6)).toBe(-6)
    expect(subtract(6)).toBe(6)
  })
})
