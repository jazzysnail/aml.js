import { cloneDeep } from 'lodash'

export default function (arr) {
  let _arr = cloneDeep(arr)
  const _key = this.__proto__.key
  const _thisArr = cloneDeep(this)
  return this.concat(
    typeof _key === 'string'
    ? $select(_arr).where(_key).difference(_thisArr)
    : $select(_arr).difference(_thisArr)
  )
}