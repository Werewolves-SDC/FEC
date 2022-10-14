module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react', 'jest',
  ],
  rules: {
    'no-console': 'off',
    'import/extensions': 'off',
    camelcase: 'off',
  },
};
