'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');

function TypeError$1(expectedType, realType) {
  console.error(new Error("[TypeError] need a " + expectedType + ", got a " + realType + "."));
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

function isArray(x, Throw) {
  if (Array.isArray(x)) {
    return true;
  } else {
    if (Throw) TypeError$1('array', Type(x));
    return false;
  }
  // 判断是不是我们自身构建的新 Array
  // else if (x instanceof this){

  // }
  // return
}

function isString(x, Throw) {
  if (typeof x === 'string') {
    return true;
  } else {
    if (x instanceof String) {
      return true;
    } else {
      if (Throw) TypeError$1('string', Type(x));
      return false;
    }
  }
}

function isFunction(x, Throw) {
  if (typeof x === 'function') {
    return true;
  } else {
    if (x instanceof Function) {
      return true;
    } else {
      if (Throw) TypeError$1('function', Type(x));
      return false;
    }
  }
}

function Type(x) {
  if ((typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object') {
    return typeof x === 'undefined' ? 'undefined' : _typeof(x);
  } else if (Array.isArray(x)) {
    return 'array';
  }
}

/**
 * 变量仓库统一存放变量
 */

var variable = {
  // 识别码将被作为判定两个元素是否逻辑相等的条件
  key: null
};

/**
 * 以字符串为参数进行调用
 * 字符串将为后续的语法提供 Key 值
 * @param  {[String]}
 *
 * 以函数作为参数进行调用
 * 方法将作为过滤条件，入参为数组元素需要布尔值作为返回类型
 * @param  {[Function]}
 */
var where = function (arg) {
  if (isFunction(arg, 0)) {
    for (var i = 0; i < this.length;) {
      if (!arg(this[i])) {
        this.splice(i, 1);
      } else {
        i++;
      }
    }
  } else if (isString(arg, 0)) {
    this.__proto__.key = arg;
  } else {
    TypeError$1('string or function', Type(arg));
  }
  return this;
};

/**
 * 以数组为入参进行调用
 * @param  {[Array]}
 */
var difference = function (arr) {
  if (isArray(arr, 1)) {
    var _arr = lodash.cloneDeep(arr);
    var _key = this.__proto__.key;
    if (typeof _key === 'string') {
      for (var i = 0; i < _arr.length; i++) {
        if (typeof _arr[i][_key] === 'number' || typeof _arr[i][_key] === 'string') {
          for (var j = 0; j < this.length;) {
            if (_arr[i][_key] === this[j][_key]) {
              this.splice(j, 1);
            } else {
              j++;
            }
          }
        } else {
          console.error('The \'key\' must be a number or string');
          break;
        }
      }
    } else {
      for (var _i = 0; _i < _arr.length; _i++) {
        for (var _j = 0; _j < this.length;) {
          if (_arr[_i] === this[_j]) {
            this.splice(_j, 1);
          } else {
            _j++;
          }
        }
      }
    }
  }
  return this;
};

var unionAll = function (arr) {
  return this.concat(arr);
};

var union = function (arr) {
  if (isArray(arr, 1)) {
    var _arr = lodash.cloneDeep(arr);
    var _key = this.__proto__.key;
    var _thisArr = lodash.cloneDeep(this);
    return this.concat(typeof _key === 'string' ? $select(_arr).where(_key).difference(_thisArr) : $select(_arr).difference(_thisArr));
  } else {
    return this;
  }
};

var $select$1 = function (arr) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  if (isArray(arr, 1)) {
    var _arr = lodash.cloneDeep(arr);
    var _prototype = Object.assign({
      where: where,
      difference: difference,
      unionAll: unionAll,
      union: union
    }, variable);

    if (keys.length !== 0) {
      _arr = _arr.map(function (val, index) {
        var _val = {};
        keys.forEach(function (key) {
          if (val[key]) {
            Object.assign(_val, defineProperty({}, key, val[key]));
          } else {
            console.error('key \'' + key + '\' is not find on PrimitiveArray[' + index + '].');
          }
        });
        return _val;
      });
    }

    Object.assign(_arr.__proto__, _prototype);
    return _arr;
  }
};

var main = {
  $select: $select$1,
  install: function install() {
    // const { install, ...api } = this
    Object.assign(global, this);
  }
};

exports.$select = $select$1;
exports['default'] = main;
