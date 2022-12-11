import property from '../property'
import sum from '../sum'
import { GetNumber } from '../_utils/types'

export default function <T, K extends keyof T>(
  array: T[] = [],
  iteratee?: K | ((obj: T) => number),
) {
  let mapped: number[]

  if (array.length < 1) {
    return 0
  } else if (iteratee === undefined) {
    return
  } else if (
    typeof iteratee === 'string' &&
    typeof array[0][iteratee] === 'number'
  ) {
    mapped = array.map(property(iteratee) as GetNumber<T>)
  } else {
    mapped = array.map(iteratee as GetNumber<T>)
  }

  return sum(mapped)
}
