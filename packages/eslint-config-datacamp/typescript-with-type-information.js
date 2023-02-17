/**
 * This config requries type information. This means that some extra setup must be done.
 *
 * See https://typescript-eslint.io/linting/typed-linting/
 * See https://typescript-eslint.io/linting/typed-linting/monorepos
 *
 * One must add the `parserOptions` field in eslint configuration. This will configure the `typescript-eslint` parser.
 *
 * More specifically, it's required to set `project` and recommended to set `tsconfigRootDir`. See the README.md for more information on how it could be setup
 */

/**
 * These are very useful but also very strict eslint rules requiring everything
 * to be typed without `any` etc. We should strive to enable them down the line
 */
const typescriptTypeInformationChecksDisabled = {
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/unbound-method': 'off',
};
exports.typescriptTypeInformationChecksDisabled =
  typescriptTypeInformationChecksDisabled;

module.exports = {
  extends: [
    './typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    ...typescriptTypeInformationChecksDisabled,
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {
        allowNullableBoolean: true, // Allowed because otherwise there are quite some false positives
        allowNullableObject: false,
        allowNumber: false,
        allowString: false,
      },
    ],
  },
};
