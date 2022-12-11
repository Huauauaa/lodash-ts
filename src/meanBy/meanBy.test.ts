import meanBy from '.'

describe('meanBy', () => {
  const array = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
  test('arguments have undefined', () => {
    expect(meanBy()).toBe(NaN)
  })

  test('number', () => {
    expect(
      meanBy(array, function (o: any) {
        return o.n
      }),
    ).toBe(5)
    expect(meanBy(array, 'n')).toBe(5)
    expect(meanBy([])).toBe(NaN)
  })
})
