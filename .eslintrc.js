module.exports = {
  env: {
    browser: true,
    jest: true
  },
  extends: 'airbnb',
  globals: {
    shallow: true,
    render: true,
    mount: true
  },
  plugins: ['prettier', 'compat'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-filename-extension': 'off'
  }
};
