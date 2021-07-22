module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-escape': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
