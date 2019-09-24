module.exports = {
  parser: 'babel-eslint',
  plugins: ['json'],
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
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'packages/**/src/**/*.spec.js',
          'packages/**/src/**/*.spec.ts',
          'packages/**/src/**/*.spec.tsx',
          'src/**/__mocks__/**',
          'test/helpers',
          '.storybook/**.js',
          '**/*.stories.js',
          '**/catalog.config.js',
          '**/webpack.config.js',
          '**/test/*',
          '**/gulpfile.js',
          'packages/other/**/*.js',
        ],
      },
    ],
    'import/order': 'off',
    'sort-order': 'off',
    'simple-import-sort/sort': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    'react/jsx-sort-props': [
      'error',
      { shorthandLast: true, reservedFirst: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
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
