/**
 * 非去重合并与 Array.prototype.concat 相同
 * @arr  {[Array]}
 * @return {[this]}
 */
export default function (arr) {
  return this.concat(arr)
}