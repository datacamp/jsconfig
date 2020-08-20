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
    'json',
    'react',
    'react-hooks',
    'simple-import-sort',
    'sonarjs',
    'sort-keys-fix',
    'eslint-comments',
    'filenames',
  ],
  rules: {
    'comma-dangle': 'off', // Defined by prettier
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'filenames/match-exported': [
      'error',
      [null, 'kebab', 'snake', 'camel', 'pascal'],
      null,
      true,
    ],
    'import/no-anonymous-default-export': 'error',
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
    'sonarjs/cognitive-complexity': 'warn',
    'sonarjs/max-switch-cases': 'off',
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-small-switch': 'off',
    'sort-keys-fix/sort-keys-fix': [
      'error',
      'asc',
      { caseSensitive: false, natural: true },
    ],
    'sort-order': 'off',
  },
};
