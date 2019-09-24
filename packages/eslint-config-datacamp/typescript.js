module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': { typescript: {} },
  },
  plugins: ['json'],
  extends: [
    './index',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    'react/prop-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: 'jsx' },
    ],
    'typescript-sort-keys/interface': ['error', 'asc', { natural: true }],
    'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
  },
  overrides: [
    {
      files: ['**/*.{spec,test}.{js,ts}', '**/__mocks__/**'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
