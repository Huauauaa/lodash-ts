export default function (number = NaN, precision = 0) {
  const multiple = 10 ** precision
  return Math.floor(number * multiple) / multiple
}
