import base from './rollup.config.base.js'

export default Object.assign(base, {
  output: {
    file: 'dist/aml.es.js',
    format: 'es'
  }
})