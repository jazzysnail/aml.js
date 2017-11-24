import { cloneDeep } from 'lodash-es'
import { isArray } from '../util/Type.js'
/**
 * 以数组为入参进行调用
 * @param  {[Array]}
 */
export default function (arr) {
  if (isArray(arr, 1)) {
    let _arr = cloneDeep(arr)
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
  }
  return this
}