const { testFilesGlobPatterns } = require('./helpers');

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  overrides: [
    {
      env: {
        jest: true,
      },
      files: testFilesGlobPatterns,
    },
    {
      files: ['prettier.config.js'],
      rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['json', 'sort-keys-fix', 'react', 'react-hooks'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          ...testFilesGlobPatterns,
          '.storybook/**.js',
          '**/*.stories.js',
          '**/webpack.config.js',
          '**/gulpfile.js',
        ],
      },
    ],
    'no-console': 'error',
    'no-useless-catch': 'error',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'prettier/prettier': 'error',
    'react/jsx-sort-props': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    'sort-order': 'off',
  },
};
