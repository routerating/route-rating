module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 1,
    'import/prefer-default-export': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-closing-bracket-location': 0,
  },
}
