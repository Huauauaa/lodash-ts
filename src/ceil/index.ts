export default function (number = NaN, precision = 0) {
  const multiple = 10 ** Math.floor(precision)
  return Math.ceil(number * multiple) / multiple
}
