'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');

var variable = {
  key: null
};

var where = function (arg) {
  if (typeof arg === 'function') {
    for (var i = 0; i < this.length;) {
      if (!arg(this[i])) {
        this.splice(i, 1);
      } else {
        i++;
      }
    }
  } else if (typeof arg === 'string') {
    this.__proto__.key = arg;
  }
  return this;
};

var difference = function (arr) {
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
  return this;
};

var unionAll = function (arr) {
  return this.concat(arr);
};

var union = function (arr) {
  var _arr = lodash.cloneDeep(arr);
  var _key = this.__proto__.key;
  var _thisArr = lodash.cloneDeep(this);
  return this.concat(typeof _key === 'string' ? $select(_arr).where(_key).difference(_thisArr) : $select(_arr).difference(_thisArr));
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

var $select$1 = function (arr) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

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
