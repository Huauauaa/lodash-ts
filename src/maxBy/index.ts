import property from '../property'
import { GetNumber } from '../_utils/types'

function maxBy<T>(array?: T[], iteratee?: GetNumber<T>): T | undefined
function maxBy<T, K extends keyof T>(array?: T[], prop?: K): T | undefined
function maxBy<T, K extends keyof T>(
  array: T[] = [],
  iteratee?: K | ((obj: T) => number),
) {
  let mapped: number[]

  if (array.length < 1) {
    return undefined
  } else if (
    typeof iteratee === 'string' &&
    typeof array[0][iteratee] === 'number'
  ) {
    mapped = array.map(property(iteratee) as any)
  } else {
    mapped = array.map(iteratee as GetNumber<T>)
  }

  const maxIdx = mapped.indexOf(Math.max(...mapped))
  return array[maxIdx]
}

export default maxBy
