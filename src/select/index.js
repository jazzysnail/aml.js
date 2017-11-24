import { cloneDeep } from 'lodash-es'
import { isArray } from '../util/Type.js'
import variable from './variable'
import where from './where'
import difference from './difference'
import unionAll from './unionAll'
import union from './union'

export default function (arr, ...keys) {
  if (isArray(arr, 1)) {
    let _arr = cloneDeep(arr)
    const _prototype = Object.assign({
      where,
      difference,
      unionAll,
      union
    }, variable)

    if (keys.length !== 0) {
      _arr = _arr.map((val, index) => {
        let _val = {}
        keys.forEach(key => {
          if (val[key]) {
            Object.assign(_val, {[key]: val[key]})
          } else {
            console.error(`key '${key}' is not find on PrimitiveArray[${index}].`)
          }
        })
        return _val
      })
    }

    Object.assign(_arr.__proto__, _prototype)
    return _arr
  }
}