import maxBy from '.'
import { IArrayNumber } from '../_utils/test.type'

describe('maxBy', () => {
  const array = [{ n: 1 }, { n: 2 }]
  test('arguments have undefined', () => {
    expect(maxBy()).toBe(undefined)
  })

  test('iteratee is a fn', () => {
    expect(
      maxBy(array, function (o: IArrayNumber) {
        return o.n
      }),
    ).toEqual({ n: 2 })
  })
  test('iteratee is a string', () => {
    expect(maxBy(array, 'n')).toEqual({ n: 2 })
  })
})
