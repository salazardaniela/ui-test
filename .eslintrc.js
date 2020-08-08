module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    jest: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    camelcase: 0,
    'prefer-default-export': 0,
    'consistent-return': 0,
    'import/prefer-default-export': 0,
    'import/no-named-as-default': 0,
    'no-unused-vars': 1,
    'linebreak-style': 0,
    'no-named-as-default': 0,
    'no-named-as-default-member': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-defaul': 0,
    'react/no-array-index-key': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    document: 'readonly',
    test: 'readonly',
    expect: 'readonly',
  },
};
