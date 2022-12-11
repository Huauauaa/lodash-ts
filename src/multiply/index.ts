export default function (
  multiplier: number | string = 1,
  multiplicand: number | string = 1,
) {
  if (multiplier === undefined) {
    return multiplicand
  }
  return +multiplier * +multiplicand
}
