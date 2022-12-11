export default function <T>(array: T[] = []) {
  if (array.length === 0) {
    return undefined
  }
  const _array = array.slice()
  return _array.sort((a: any, b: any) => a - b).at(-1)
}
