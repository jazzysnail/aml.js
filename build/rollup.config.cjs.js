import babel from 'rollup-plugin-babel'

export default {
  input: '../main.js',
  output: {
    file: '../dist.aml.cjs.js',
    format: 'cjs'
  },
  plugins: [
    babel()
  ]
}