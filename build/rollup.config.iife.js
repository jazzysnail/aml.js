import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'main.iife.js',
  output: {
    name: 'aml',
    file: 'dist/aml.iife.js',
    format: 'iife'
  },
  plugins: [
    babel(),
    resolve()
  ]
}