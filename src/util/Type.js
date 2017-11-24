import { TypeError } from './Error.js'

function isArray (x, Throw) {
  if (Array.isArray(x)) {
    return true
  } else {
    if (Throw) TypeError('array', Type(x));
    return false
  }
  // 判断是不是我们自身构建的新 Array
  // else if (x instanceof this){

  // }
  // return
}

function isString (x, Throw) {
  if (typeof x === 'string') {
    return true
  } else {
    if (x instanceof String) {
      return true
    } else {
      if (Throw) TypeError('string', Type(x));
      return false
    }
  }
}

function isFunction (x, Throw) {
  if (typeof x === 'function') {
    return true
  } else {
    if (x instanceof Function) {
      return true
    } else {
      if (Throw) TypeError('function', Type(x));
      return false
    }
  }
}

function Type (x) {
  if (typeof x !== 'object') {
    return typeof x
  } else if (Array.isArray(x)) {
    return 'array'
  }
}

export {
  isArray,
  isString,
  isFunction,
  TypeError,
  Type
}
