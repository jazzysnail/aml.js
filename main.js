import $select from './select/index.js'

export {
  $select
}

export default {
  $select,
  install () {
    // const { install, ...api } = this
    Object.assign(global, this)
  }
}