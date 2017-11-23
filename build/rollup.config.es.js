import babel from 'rollup-plugin-babel'

export default {
  input: 'main.js',
  output: {
    file: 'dist/aml.es.js',
    format: 'es'
    // 'amd', 'cjs', 'es', 'iife', 'umd'
  },
  plugins: [
    babel()
  ]
}