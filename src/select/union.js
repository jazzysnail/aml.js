import { cloneDeep } from 'lodash-es'
import { isArray } from '../util/Type.js'

export default function (arr) {
  if (isArray(arr, 1)) {
    let _arr = cloneDeep(arr)
    const _key = this.__proto__.key
    const _thisArr = cloneDeep(this)
    return this.concat(
      typeof _key === 'string'
      ? $select(_arr).where(_key).difference(_thisArr)
      : $select(_arr).difference(_thisArr)
    )
  } else {
    return this
  }
}