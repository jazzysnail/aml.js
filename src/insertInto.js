export function $insertInto (arr) {
  return function (val) {
    return arr.push(val)
  }
}
