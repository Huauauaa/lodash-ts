export default function (array: number[] = []): number {
  // eslint-disable-next-line no-param-reassign
  return array.reduce((result, current) => (result += current), 0)
}
