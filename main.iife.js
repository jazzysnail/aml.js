import $select from './src/select/index.js'

function install () {
  Object.assign(window, this)
}

export {
  $select,
  install
}