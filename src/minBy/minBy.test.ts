import minBy from '.'

describe('minBy', () => {
  const array = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
  it('show be undefined while there is no args or arg is empty', () => {
    expect(minBy()).toBe(undefined)
    expect(minBy([])).toBe(undefined)
  })

  test('number', () => {
    expect(
      minBy(array, function (o: any) {
        return o.n
      }),
    ).toBe(2)
    expect(minBy(array, 'n')).toBe(2)
  })
})
