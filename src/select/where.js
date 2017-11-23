export default function (arg) {
  if (typeof arg === 'function') {
    for (let i = 0; i < this.length;) {
      if (!arg(this[i])) {
        this.splice(i, 1)
      } else {
        i++
      }
    }
  } else if (typeof arg === 'string') {
    this.__proto__.key = arg
  }
  return this
}