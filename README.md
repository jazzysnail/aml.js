# aml.js

---

a array manipulation language for js.

她的语法就像是下面这样：
``` js
const arr1 = [{key1: 1, key2: 2}, {key1: 3, key2: 4}]
// map
const arr2 = $select(arr1, 'key1') // => [{key1: 1}, {key1: 3}]
// filter
const arr3 = $select(arr1).where(val => val.key1 === 1)// => [{key1: 1, key2: 2}]
// map & filter
const arr4 = $select(arr1, 'key1').where(val => val.key1 === 1)
// select
$select(arr4) // => [{key1: 1}]
```

如果你对 SQL 有一定的了解那么你一定很熟悉了，没错这和 DML 非常的类似；

这样我们就可以以一种接近自然语言的方式来操作数组了，再加以函数式和声明式编程的运用实现一些更加复杂的功能和场景。

## 使用
坑位

## API

#### $select 查询

__Note:__ 当数组元素为简单数据类型时(String|Number|Boolean)，相当于表中只有一个默认的 val 字段。

> `$select([Array], keys...)`

查询操作，参数 `array` 为要查询的数组；后续的参数为需要查询的字段，可选参数，不使用时默认查询全部。

``` js
const array = [{key1: 1, key2: 2}, {key1: 2, key2: 3}]
$select(array)
// => [{key1: 1, key2: 2}, {key1: 2, key2: 3}]
$select(array, 'key2')
// => [{key2: 2}, {key2: 3}]
```

> `where([Function|String])`

过滤查询结果，方法接受一个参数，参数可以是一个函数或者一个字符串。字符串为元素的某一个字段，将作为后续操作的前提。

``` js
const array1 = [{key1: 1, key2: 2}, {key1: 2, key2: 3}]
const array2 = [{key1: 1, key2: 4}, {key1: 3, key2: 5}]
$select(array1).where(val => val.key1 === 1)
// => [{key1: 1, key2: 2}]
$select(array1).where('key1').union(array2)
// => [{key1: 1, key2: 4}, {key1: 2, key2: 3}, {key1: 3, key2: 5}]
```

> `difference([Array])`

排除

``` js
const array1 = [{key1: 1, key2: 2}, {key1: 2, key2: 3}]
const array2 = [{key1: 1, key2: 4}, {key1: 3, key2: 5}]
$select(array1).where('key1').difference(array2)
// => [{key1: 2, key2: 3}]
const array3 = [1,2,3]
const array4 = [1,3,4]
$select(array3).difference(array4)
// => [2]
```

> `union([Array])`

去重合并

``` js
const array1 = [{key1: 1, key2: 2}, {key1: 2, key2: 3}]
const array2 = [{key1: 1, key2: 4}, {key1: 3, key2: 5}]
$select(array1).where('key1').union(array2)
// => [{key1: 2, key2: 3}, {key1: 3, key2: 5}]
const array3 = [1,2,3]
const array4 = [1,3,4]
$select(array3).union(array4)
// => [1,2,3,4]
```

> `unionAll([Array])`

保留合并，`where([String])` 是无效的，可省略。

``` js
const array1 = [{key1: 1, key2: 2}, {key1: 2, key2: 3}]
const array2 = [{key1: 1, key2: 4}, {key1: 3, key2: 5}]
$select(array1).where('key1').union(array2)
// => [{key1: 1, key2: 2}, {key1: 2, key2: 3}, {key1: 1, key2: 4}, {key1: 3, key2: 5}]
$select(array1).union(array2)
// => [{key1: 1, key2: 2}, {key1: 2, key2: 3}, {key1: 1, key2: 4}, {key1: 3, key2: 5}]
const array3 = [1,2,3]
const array4 = [1,3,4]
$select(array3).union(array4)
// => [1,2,3,1,3,4]
```


#### $insertInto 插入

> `$insertInto([Array], [Any], [Function(val, index)|'first'])`

插入操作，第一个参数是插入的目标数组；第二个参数是要插入的值由于希望用户明确自己的插入所以使用单例，不使用解构；第三个参数是插入的位置，可以是一个测试函数，数据将插入到满足测试结果的第一条数据后，当使用 'first' 字时将在头部插入，默认尾部插入。

``` js
const array = [{key: 1}, {key: 3}]
$insertInto(array, {key: 4})
// => [{key: 1}, {key: 3}, {key: 4}]
$insertInto(array, {key: 0}, 'first')
// => [{key: 0}, {key: 1}, {key: 3}, {key: 4}]
$insertInto(array, {key: 2}, val => val.key === 1)
// => [{key: 0}, {key: 1}, {key: 2}, {key: 3}, {key: 4}]
```

## 更多的 API 开发中...
欢迎加入，以及星星。
