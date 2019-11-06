const { testFilesGlobPatterns } = require('./helpers');

module.exports = {
  parser: 'babel-eslint',
  plugins: ['json', 'sort-keys-fix', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
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
    'sort-order': 'off',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    'react/jsx-sort-props': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: testFilesGlobPatterns,
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
