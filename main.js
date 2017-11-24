import $select from './src/select/index.js'

export {
  $select
}

export default {
  $select,
  install () {
    if (window) {
      Object.assign(window, this)
    } else {
      // const { install, ...api } = this
      Object.assign(global, this)
    }
  }
}