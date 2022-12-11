export default function <T>(array: T[], size: number = 1) {
  if (size <= 0) {
    return []
  }
  const _size = Math.floor(size)
  if (_size === 1) {
    return array
  }
  const result = []
  let resultItem: T[] = []
  let i = 0
  let j = 0
  while (j < array.length) {
    resultItem.push(array[i])
    if (i === _size - 1 || j === array.length - 1) {
      result.push(resultItem)
      resultItem = []
    }

    i += 1
    j += 1
  }
  return result
}
