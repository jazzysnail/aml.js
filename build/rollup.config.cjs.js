import base from './rollup.config.base.js'

export default Object.assign(base, {
  output: {
    file: 'dist/aml.cjs.js',
    format: 'cjs'
  }
})