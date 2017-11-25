import { TypeError } from './Error.js'

/**
 * @param {[any]}
 * @return {[String]} TypeName
 */
function Type (x) {
  if (isPrimitive(x)) {
    return typeof x
  } else if (isArray(x, false)) {
    return 'array'
  } else {
    return 'object'
  }
}

/**
 * @_constructor {[constructor]}
 */
function TypeFactory (_constructor) {
  return function (x, Throw) {
    if (typeof x === _constructor.name.toLowerCase()) {
      return true
    } else {
      if (x instanceof _constructor) {
        return true
      } else {
        if (Throw) TypeError(_constructor.name.toLowerCase(), Type(x));
        return false
      }
    }
  }
}

/**
 * @x  {[any]}
 */
function isPrimitive (x) {
  return (typeof x !== 'object')
}

/**
 * @x  {[any]}
 */
function isArray (x, Throw) {
  if (Array.isArray(x)) {
    return true
  } else {
    if (Throw) TypeError('array', Type(x));
    return false
  }
}

/**
 * @x  {[any]}
 */
const isFunction = TypeFactory(Function)

/**
 * @x  {[any]}
 */
const isString = TypeFactory(String)

export {
  isArray,
  isString,
  isFunction,
  TypeError,
  Type
}
