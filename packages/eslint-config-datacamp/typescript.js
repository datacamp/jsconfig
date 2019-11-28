const { testFilesGlobPatterns } = require('./helpers');

module.exports = {
  extends: [
    './index',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  overrides: [
    {
      files: testFilesGlobPatterns,
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  plugins: ['json', 'typescript-sort-keys'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    'react/prop-types': 'off',
    'typescript-sort-keys/interface': ['error', 'asc', { natural: true }],
    'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
  },
};
