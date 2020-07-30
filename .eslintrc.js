module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-loop-func': 'error',
    'no-param-reassign': 'error',
    strict: 'error',
    yoda: 'error',
    'no-label-var': 'warn',
    'no-undef': 0,
    camelcase: 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
}
