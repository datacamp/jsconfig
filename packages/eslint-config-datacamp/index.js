const { testFilesGlobPatterns } = require('./helpers');

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:json/reconmmended',
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
  plugins: [
    'json',
    'react',
    'react-hooks',
    'simple-import-sort',
    'sort-keys-fix',
  ],
  rules: {
    'comma-dangle': 'off', // Defined by prettier
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
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'simple-import-sort/sort': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // NodeJS modules
          [`^(${require('module').builtinModules.join('|')})(/|$)`], // eslint-disable-line global-require
          // Packages
          ['^@?\\w'],
          // Absolute imports
          ['^(src|app)/'],
          // Relative imports (outside local folder)
          ['^\\.{2}/'],
          // Relative imports (inside local folder)
          ['^\\.{1}/'],
        ],
      },
    ],
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { natural: true, caseSensitive: false },
    ],
    'sort-order': 'off',
  },
};
