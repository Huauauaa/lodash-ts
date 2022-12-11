import sumBy from '.'

describe('sumBy', () => {
  interface IArr {
    n: number
  }
  const array: IArr[] = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }]
  test('arguments have undefined', () => {
    expect(sumBy()).toBe(0)
    expect(sumBy([])).toBe(0)
    expect(sumBy(array)).toBe(undefined)
  })

  test('normal', () => {
    expect(
      sumBy(array, function (o: IArr) {
        return o.n
      }),
    ).toBe(20)
    expect(sumBy(array, 'n')).toBe(20)
  })
})
