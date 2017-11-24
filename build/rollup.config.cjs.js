import base from './rollup.config.base.js'

export default Object.assign({
  output: {
    file: 'dist/aml.cjs.js',
    format: 'cjs'
  }
}, base)