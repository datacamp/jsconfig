module.exports = {
  parser: 'babel-eslint',
  plugins: ['json'],
  extends: [
    './base-config',
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
  },
  overrides: [
    {
      files: ['**/*.{spec,test}.{js,ts}','**/__mocks__/**'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
