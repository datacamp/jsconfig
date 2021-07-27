const { testFilesGlobPatterns } = require('./helpers');

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:json/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'plugin:sonarjs/recommended',
  ],
  overrides: [
    {
      env: {
        jest: true,
      },
      files: testFilesGlobPatterns,
      rules: {
        'sonarjs/no-identical-functions': 'off',
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
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'eslint-comments',
    'filenames',
    'json',
    'react',
    'react-hooks',
    'simple-import-sort',
    'sonarjs',
    'sort-destructure-keys',
    'sort-keys-fix',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'comma-dangle': 'off', // Defined by prettier
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'filenames/match-exported': ['error', [null, 'camel', 'kebab'], null, true],
    'import/no-anonymous-default-export': ['error', { allowObject: true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          ...testFilesGlobPatterns,
          '.storybook/**.js',
          '**/*.stories.js',
          '**/catalog.config.js',
          '**/webpack.config.js',
          '**/gulpfile.js',
          '**/prettier.config.js',
          '**/jest.config.js',
          '**/babel.config.js',
          '**/.eslintrc.js',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'jest/no-deprecated-functions': 'off', // Needs to know the jest version, not possible from a shared config
    'max-classes-per-file': 'off',
    'no-console': 'error',
    'no-plusplus': 'off',
    'no-useless-catch': 'error',
    'no-useless-constructor': 'off',
    'object-shorthand': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-template': 'error',
    'prettier/prettier': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'simple-import-sort/imports': [
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
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/max-switch-cases': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-small-switch': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: false, natural: true },
    ],
    'sort-order': 'off',
  },
};
