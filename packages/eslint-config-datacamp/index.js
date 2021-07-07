const { testFilesGlobPatterns } = require('./helpers');

// Ignored rules deprecated in v7.0.0 of ESLint but present in eslint-node-plugin
// https://eslint.org/blog/2020/02/whats-coming-in-eslint-7.0.0#deprecating-nodejscommonjs-specific-rules
// 'callback-return', 'global-require', 'handle-callback-err', 'no-mixed-requires', 'no-new-require', 'no-path-concat', 'no-process-env', 'no-process-exit'
// Possible errors have been set to 'error' and Stylistic issues have been set to 'off'

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
    'plugin:node/recommended',
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
        'import/no-extraneous-dependencies': 'off',
        'node/global-require': 'off',
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
    'filenames/match-exported': ['error', [null, 'camel'], null, true],
    'global-require': 'off', // Deprecated in ESLint 7.0.0, uses node/global-require instead
    'handle-callback-err': 'off', // Deprecated in ESLint 7.0.0, uses node/handle-callback-err instead
    'import/no-anonymous-default-export': ['error', { allowObject: true }],
    'import/no-deprecated': 'warn',
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
    'no-mixed-requires': 'off', // Deprecated in ESLint 7.0.0, uses node/no-mixed-requires instead
    'no-new-require': 'off', // Deprecated in ESLint 7.0.0, uses node/no-new-require instead
    'no-path-concat': 'off', // Deprecated in ESLint 7.0.0, uses node/no-path-concat instead
    'no-plusplus': 'off',
    'no-process-env': 'off', // Deprecated in ESLint 7.0.0, uses node/no-process-env instead
    'no-process-exit': 'off', // Deprecated in ESLint 7.0.0, uses node/no-process-exit instead
    'no-useless-catch': 'error',
    'no-useless-constructor': 'off',
    'node/callback-return': 'off',
    'node/global-require': 'off',
    'node/handle-callback-err': 'error',
    'node/no-missing-import': 'off',
    'node/no-mixed-requires': 'off',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-env': 'off',
    'node/no-process-exit': 'error',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-builtins': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unsupported-features/node-builtins': 'off',
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
          [`^(${require('module').builtinModules.join('|')})(/|$)`],
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
