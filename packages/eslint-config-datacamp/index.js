module.exports = {
  parser: 'babel-eslint',
  plugins: ['json'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'object-shorthand': ['error', 'always'],
    'no-useless-catch': 'error',
  },
  overrides: [
    {
      files: ['**/*.{spec,test}.{js,ts}', '**/__mocks__/**'],
      env: {
        jest: true,
      },
    },
    {
      files: ['prettier.config.js'],
      rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
