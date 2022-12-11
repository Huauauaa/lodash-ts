import mean from '../mean'
import property from '../property'
import { GetNumber } from '../_utils/types'

export default function meanBy<T, K extends keyof T>(
  array: T[] = [],
  iteratee?: K | ((obj: T) => number),
) {
  let mapped: number[]

  if (array.length < 1) {
    return NaN
  } else if (
    typeof iteratee === 'string' &&
    typeof array[0][iteratee] === 'number'
  ) {
    mapped = array.map(property(iteratee) as any)
  } else {
    mapped = array.map(iteratee as GetNumber<T>)
  }

  return mean(mapped)
}
