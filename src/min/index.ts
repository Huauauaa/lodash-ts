export default function (array: number[] = []) {
  if (array.length === 0) {
    return undefined
  }
  return Math.min(...array)
}
