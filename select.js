export function $select (arr) {
  const _arr = [].concat(arr)
  const _prototype = {
    key: null,
    where (rgm) {
      if (typeof rgm === 'function') {
        for (let i = 0; i < this.length;) {
          if (!rgm(this[i])) {
            this.splice(i, 1)
          } else {
            i++
          }
        }
      } else if (typeof rgm === 'string') {
        this.__proto__.key = rgm
      }
      return this
    },
    difference (arr) {
      const _arr = [].concat(arr)
      const _key = this.__proto__.key
      if (typeof _key === 'string') {
        for (let i = 0; i < _arr.length; i++) {
          if (typeof _arr[i][_key] === 'number' || typeof _arr[i][_key] === 'string') {
            for (let j = 0; j < this.length;) {
              if (_arr[i][_key] === this[j][_key]) {
                this.splice(j, 1)
              } else {
                j++
              }
            }
          } else {
            console.error(`The 'key' must be a number or string`)
            break
          }
        }
      } else {
        for (let i = 0; i < _arr.length; i++) {
          for (let j = 0; j < this.length;) {
            if (_arr[i] === this[j]) {
              this.splice(j, 1)
            } else {
              j++
            }
          }
        }
      }
      return this
    },
    unionAll (arr) {
      return this.concat(arr)
    },
    union (arr) {
      const _key = this.__proto__.key
      const _thisArr = [].concat(this)
      const _arr = [].concat(arr)
      return this.concat(
        typeof _key === 'string'
        ? $select(_arr).where(_key).difference(_thisArr)
        : $select(_arr).difference(_thisArr)
      )
    }
  }
  Object.assign(_arr.__proto__, _prototype)
  return _arr
}