import { isFunction, isString, TypeError, Type } from '../util/Type.js'
/**
 * 以字符串为参数进行调用
 * 字符串将为后续的语法提供 Key 值
 * @arg  {[String]}
 * @return {[this]}
 *
 * 以函数作为参数进行调用
 * 方法将作为过滤条件，入参为数组元素需要布尔值作为返回类型
 * @arg  {[Function]}
 * @return {[this]}
 */
export default function (arg) {
  if (isFunction(arg, 0)) {
    for (let i = 0; i < this.length;) {
      if (!arg(this[i])) {
        this.splice(i, 1)
      } else {
        i++
      }
    }
  } else if (isString(arg, 0)) {
    this.__proto__.key = arg
  } else {
    TypeError('string or function', Type(arg))
  }
  return this
}