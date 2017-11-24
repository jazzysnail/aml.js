import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'main.js',
  output: [{
    file: 'dist/aml.cjs.js',
    format: 'cjs'
  }, {
    file: 'dist/aml.es.js',
    format: 'es'
  }],
  plugins: [
    babel(),
    resolve()
  ]
}