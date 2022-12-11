import sum from '../sum'

export default function <T>(array: T[] = []): number {
  const total = sum(array as number[])
  return total / array.length
}
